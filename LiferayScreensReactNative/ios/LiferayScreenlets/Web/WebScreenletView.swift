//
//  WebScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class WebScreenletView: RCTView, WebScreenletDelegate {
  // Variables
  var screenlet: WebScreenlet!
  
  var _screenletAttributes: NSDictionary = NSDictionary()
  var screenletAttributes: NSDictionary {
    get {
      return _screenletAttributes
    }
    set{
      _screenletAttributes = newValue
      self.setConfiguration(_screenletAttributes)
    }
  }
  
  private func setConfiguration(_ screenletAttributes: NSDictionary) {
    let url = screenletAttributes["URL"]! as! String
    let jsFileName = screenletAttributes["jsFileName"]! as! String
    let cssFileName = screenletAttributes["cssFileName"]! as! String
    self.screenlet.configuration = self.createConfiguration(url: url, jsFileName: jsFileName, cssFileName: cssFileName)
    self.screenlet.load()
  }
  
  private func createConfiguration(url: String, jsFileName: String, cssFileName: String) -> WebScreenletConfiguration {
    return isLiferayPortalPage(url)
            ? getWebScreenletConfigurationDefault(url: url, jsFileName: jsFileName, cssFileName: cssFileName)
            : getWebScreenletConfigurationOther(url: url, jsFileName: jsFileName, cssFileName: cssFileName)
  }
  
  private func isLiferayPortalPage(_ url: String) -> Bool {
    let regex = try? NSRegularExpression(pattern: "https://", options: .ignoreMetacharacters)
    return regex?.numberOfCaptureGroups == 0
            ? true
            : false
  }
  
  private func getWebScreenletConfigurationDefault(url: String,
                                                   jsFileName: String,
                                                   cssFileName: String) -> WebScreenletConfiguration {
    let builder = WebScreenletConfigurationBuilder(url: url)
    let finalBuilder = addLocalFiles(builder: builder, jsFileName: jsFileName, cssFileName: cssFileName)
    return finalBuilder.load()
  }
  
  private func getWebScreenletConfigurationOther(url: String,
                                                 jsFileName: String,
                                                 cssFileName: String) -> WebScreenletConfiguration {
    let builder = WebScreenletConfigurationBuilder(url: url).set(webType: WebType.other)
    let finalBuilder = addLocalFiles(builder: builder, jsFileName: jsFileName, cssFileName: cssFileName)
    return finalBuilder.load()
  }
  
  private func addLocalFiles(builder: WebScreenletConfigurationBuilder,
                             jsFileName: String,
                             cssFileName: String) -> WebScreenletConfigurationBuilder {
    if(jsFileName != "") {
      builder.addJs(localFile: jsFileName)
    }
    if(cssFileName != "") {
      builder.addCss(localFile: cssFileName)
    }
    return builder
  }
  
  // MARK: Events
  var onPageLoaded: RCTBubblingEventBlock?
  var onWebError: RCTBubblingEventBlock?
  var onNotify: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = WebScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  // MARK: WebScreenletDelegate methods
  
  func onWebLoad(_ screenlet: WebScreenlet, url: String) {
    let event = self.createEvent(attributeName: "url", attribute: url)
    self.onPageLoaded?(event)
  }
  
  func screenlet(_ screenlet: WebScreenlet, onError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onWebError?(event)
  }
  
  func screenlet(_ screenlet: WebScreenlet,
                                onScriptMessageNamespace namespace: String,
                                onScriptMessage message: String) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "namespace": namespace,
      "message": message
    ]
    self.onNotify?(event)
  }
}
