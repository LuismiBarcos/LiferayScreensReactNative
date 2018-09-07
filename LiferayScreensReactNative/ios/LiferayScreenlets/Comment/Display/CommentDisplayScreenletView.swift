//
//  CommentDisplayScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 16/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class CommentDisplayScreenletView: RCTView, CommentDisplayScreenletDelegate {
  // Variables
  var screenlet: CommentDisplayScreenlet!
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
  var onCommentLoaded: RCTBubblingEventBlock?
  var onLoadCommentError: RCTBubblingEventBlock?
  var onCommentDeleted: RCTBubblingEventBlock?
  var onDeleteComment: RCTBubblingEventBlock?
  var onCommentUpdated: RCTBubblingEventBlock?
  var onUpdateComment: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = CommentDisplayScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let commentId = screenletConfiguration["commentId"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let editable = screenletConfiguration["editable"]! as! Bool
    self.screenlet.commentId = commentId.int64Value
    self.screenlet.autoLoad = autoLoad
    self.screenlet.editable = editable
  }
  
  // MARK: CommentDisplayScreenletDelegate methods
  func screenlet(_ screenlet: CommentDisplayScreenlet, onCommentLoaded comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onCommentLoaded?(event)
  }
  
  func screenlet(_ screenlet: CommentDisplayScreenlet, onLoadCommentError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onLoadCommentError?(event)
  }
  
  func screenlet(_ screenlet: CommentDisplayScreenlet, onCommentDeleted comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onCommentLoaded?(event)
  }
  
  func screenlet(_ screenlet: CommentDisplayScreenlet,
                                onDeleteComment comment: Comment,
                                onError error: NSError) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "comment": comment.attributes,
      "error": error.description
    ]
    self.onLoadCommentError?(event)
  }
  
  func screenlet(_ screenlet: CommentDisplayScreenlet, onCommentUpdated comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onCommentUpdated?(event)
  }
  
  func screenlet(_ screenlet: CommentDisplayScreenlet,
                                onUpdateComment comment: Comment,
                                onError error: NSError) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "comment": comment.attributes,
      "error": error.description
    ]
    self.onUpdateComment?(event)
  }
}
