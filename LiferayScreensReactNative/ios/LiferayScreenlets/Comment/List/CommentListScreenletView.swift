//
//  CommentListScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 08/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class CommentListScreenletView: RCTView, CommentListScreenletDelegate {
  // Variables
  var screenlet: CommentListScreenlet!
  
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
  var onListResponseComments: RCTBubblingEventBlock?
  var onCommentListError: RCTBubblingEventBlock?
  var onSelectedComment: RCTBubblingEventBlock?
  var onDeletedComment: RCTBubblingEventBlock?
  var onCommentDelete: RCTBubblingEventBlock?
  var onUpdatedComment: RCTBubblingEventBlock?
  var onCommentUpdate: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = CommentListScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let className = screenletConfiguration["className"]! as! String
    let classPK = screenletConfiguration["classPK"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let refreshControl = screenletConfiguration["refreshControl"]! as! Bool
    let firstPageSize = screenletConfiguration["firstPageSize"]! as! NSNumber
    let pageSize = screenletConfiguration["pageSize"]! as! NSNumber
    self.screenlet.className = className
    self.screenlet.classPK = classPK.int64Value
    self.screenlet.autoLoad = autoLoad
    self.screenlet.refreshControl = refreshControl
    self.screenlet.firstPageSize = firstPageSize.intValue
    self.screenlet.pageSize = pageSize.intValue
  }
  
  // MARK: CommentListScreenletDelegate methods
  
  func screenlet(_ screenlet: CommentListScreenlet, onListResponseComments comments: [Comment]) {
    let commentsAttributes = comments.map{
      $0.attributes
    }
    let event = self.createEvent(attributeName: "comments", attribute: commentsAttributes)
    self.onListResponseComments?(event)
  }

  func screenlet(_ screenlet: CommentListScreenlet, onCommentListError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onCommentListError?(event)
  }
  
  func screenlet(_ screenlet: CommentListScreenlet, onSelectedComment comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onSelectedComment?(event)
  }
  
  func screenlet(_ screenlet: CommentListScreenlet, onDeletedComment comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onDeletedComment?(event)
  }
  
  func screenlet(_ screenlet: CommentListScreenlet,
                                onCommentDelete comment: Comment,
                                onError error: NSError) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "comment": comment.attributes,
      "error": error.description
    ]
    self.onCommentDelete?(event)
  }
  
  func screenlet(_ screenlet: CommentListScreenlet, onUpdatedComment comment: Comment) {
    let event = self.createEvent(attributeName: "comment", attribute: comment.attributes)
    self.onUpdatedComment?(event)
  }
  
  func screenlet(_ screenlet: CommentListScreenlet,
                                onCommentUpdate comment: Comment,
                                onError error: NSError) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "comment": comment.attributes,
      "error": error.description
    ]
    self.onCommentUpdate?(event)
  }
}
