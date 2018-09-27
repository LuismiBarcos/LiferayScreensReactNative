package Themes;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

import com.liferay.mobile.screens.rating.AssetRating;
import com.liferay.mobile.screens.viewsets.defaultviews.rating.BaseRatingView;
import com.liferayscreensreactnative.R;

public class RatingViewCustom extends BaseRatingView {
    public RatingViewCustom(Context context) {
        super(context);
    }

    public RatingViewCustom(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public RatingViewCustom(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public RatingViewCustom(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
    }

    @Override
    protected void setButton(View view) {

    }

    @Override
    protected void setEmptyState(TextView textView, View view, int i, AssetRating assetRating) {

    }

    @Override
    protected void clicked(double v, double v1) {
        ImageButton imageButton = getRootView().findViewById(R.id.likeRatingButton);
        imageButton.setImageResource(R.drawable.default_mood_satisfied);
    }
}
