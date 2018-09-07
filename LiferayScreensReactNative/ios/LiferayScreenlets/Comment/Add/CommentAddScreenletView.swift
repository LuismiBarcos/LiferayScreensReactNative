//
//  CommentAddScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 16/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class CommentAddScreenletView: RCTView, CommentAddScreenletDelegate {
  // Variables
  var screenlet: CommentAddScreenlet!
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
  
  // MARK: Events
  var onCommentAdded: RCTBubblingEventBlock?
  var onAddCommentError: RCTBubblingEventBlock?
  var onCommentUpdated: RCTBubblingEventBlock?
  var onUpdateCommentError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = CommentAddScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let className = screenletConfiguration["className"]! as! String
    let classPK = screenletConfiguration["classPK"]! as! NSNumber
    self.screenlet.className = className
    self.screenlet.classPK = classPK.int64Value
  }
  
  // MARK: CommentAddScreenletDelegate methods
  
  func screenlet(_ screenlet: CommentAddScreenlet, onCommentAdded comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onCommentAdded?(event)
  }
  
  func screenlet(_ screenlet: CommentAddScreenlet, onAddCommentError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onAddCommentError?(event)
  }
  
  func screenlet(_ screenlet: CommentAddScreenlet, onCommentUpdated comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onCommentUpdated?(event)
  }

  func screenlet(_ screenlet: CommentAddScreenlet, onUpdateCommentError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onUpdateCommentError?(event)
  }
}
