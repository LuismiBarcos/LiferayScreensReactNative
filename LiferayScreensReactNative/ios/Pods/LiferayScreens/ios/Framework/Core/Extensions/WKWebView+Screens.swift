/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
import Foundation
import WebKit

extension WKWebView {

	public func loadCss(file: String, extension ext: String = "css") -> String {

		let string = Bundle.resourceInBundle(name: file, ofType: ext,
			currentClass: type(of: self)) { (path, _) -> String? in

			return try! String(contentsOfFile: path)
		}
		return string ?? ""
	}

	public func injectCookies() {
		guard let authentication =
			SessionContext.currentContext?.session.authentication as? LRCookieAuthentication else {
				return
		}

		let jsessionID = authentication.cookieHeader.split(separator: ";")
				.map(String.init).filter { $0.contains("JSESSIONID") }.first

		if let jsessionID = jsessionID {
			let script = WKUserScript(source: "document.cookie='\(jsessionID)'",
					injectionTime: .atDocumentStart, forMainFrameOnly: false)

			configuration.userContentController.addUserScript(script)
		}
	}

	public func injectViewportMetaTag() {
		let addMetaScriptString = "var meta = document.createElement('meta');" +
			"meta.name = 'viewport';" +
			"meta.content = 'width=device-width initial-scale=1.0, maximum-scale=1.0, user-scalable=no';" +
			"var head = document.getElementsByTagName('head')[0];" +
			"head.appendChild(meta);"

		let addMetaScript = WKUserScript(source: addMetaScriptString,
				injectionTime: .atDocumentEnd, forMainFrameOnly: false)

		configuration.userContentController.addUserScript(addMetaScript)
	}

	public func clearCache() {
		let websiteDataTypes = WKWebsiteDataStore.allWebsiteDataTypes()
		let dateSince = Date.distantPast

		WKWebsiteDataStore.default().removeData(ofTypes: websiteDataTypes, modifiedSince: dateSince) {}
	}

	public func loadScript(js: String,
		injectionTime: WKUserScriptInjectionTime = .atDocumentEnd, forMainFrameOnly: Bool = false) {

		configuration.userContentController.addUserScript(
				WKUserScript(source: js, injectionTime: injectionTime, forMainFrameOnly: forMainFrameOnly))
	}
}

extension WKWebViewConfiguration {
	public static var noCacheConfiguration: WKWebViewConfiguration {
		let config = WKWebViewConfiguration()

		if #available(iOS 9.0, *) {
			config.websiteDataStore = WKWebsiteDataStore.nonPersistent()
		}

		return config
	}
}
