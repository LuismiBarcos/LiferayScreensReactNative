//
//  LoginView_custom.swift
//  iOSScreenlets
//
//  Created by Luis Miguel Barco on 27/06/2018.
//  Copyright © 2018 Luis Miguel Barco. All rights reserved.
//

import Foundation
import UIKit
import LiferayScreens

class LoginView_custom: LoginView_default {
    
    @IBAction func checkEmail(_ sender: UITextField) {
        
        let emailRegEx = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"

        let emailTest = NSPredicate(format:"SELF MATCHES %@", emailRegEx)
        let isEmail = emailTest.evaluate(with: nullIfEmpty(sender.text))
                        ? "Valid email"
                        : "Invalid email"
        print(isEmail)
    }
    
    @IBAction func saveCredentials(_ sender: UISwitch) {
        let loginScreenlet = screenlet as? LoginScreenlet
        loginScreenlet?.saveCredentials = sender.isOn
    }
}
