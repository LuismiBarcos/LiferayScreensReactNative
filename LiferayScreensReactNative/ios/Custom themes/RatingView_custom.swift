//
//  RatingView_shiseidme.swift
//  Shiseidme
//
//  Created by Victor Galan on 02/07/2018.
//  Copyright © 2018 Luis Miguel Barco. All rights reserved.
//

import LiferayScreens

class RatingView_custom: BaseScreenletView, RatingViewModel {

	@IBOutlet weak var likeImage: UIImageView?
	@IBOutlet weak var likesLabel: UILabel?

	open var defaultRatingsGroupCount: Int32 = 2

	override var screenlet: BaseScreenlet? {
		didSet {
			let gesture = UITapGestureRecognizer(target: self, action: #selector(handleTap))

			self.screenlet?.addGestureRecognizer(gesture)
		}
	}

	var ratingEntry: RatingEntry? {
		didSet {
			likesLabel?.text = "\(ratingEntry?.totalCount ?? 0) likes"

			if ratingEntry?.userScore == -1 {
				likeImage?.image = UIImage(named: "like_disabled")
			}
			else {
				likeImage?.image = UIImage(named: "like_enabled")
			}
		}
	}

	func handleTap(_ recognizer: UIGestureRecognizer) {
		if ratingEntry?.userScore == -1 {
			self.userAction(name: RatingScreenlet.UpdateRatingAction, sender: 1)
		}
		else {
			self.userAction(name: RatingScreenlet.DeleteRatingAction)
		}
	}

	override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
		super.touchesBegan(touches, with: event)
	}

}
