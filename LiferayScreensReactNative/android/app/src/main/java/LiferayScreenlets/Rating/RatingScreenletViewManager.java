package LiferayScreenlets.Rating;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.context.LiferayServerContext;
import com.liferay.mobile.screens.rating.AssetRating;
import com.liferay.mobile.screens.rating.RatingListener;
import com.liferay.mobile.screens.rating.RatingScreenlet;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class RatingScreenletViewManager extends SimpleViewManager<RatingScreenlet> implements RatingListener{

    private final String NAME = "RatingScreenlet";
    private ThemedReactContext reactContext;
    private RatingScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected RatingScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new RatingScreenlet(reactContext);
        this.screenlet.setAutoLoad(false);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.rating_like_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(RatingScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.enableEdition(screenletAttributes.getBoolean("editable"));
        this.screenlet.setEntryId(screenletAttributes.getInt("entryId"));
        this.screenlet.setClassName(screenletAttributes.getString("className"));
        this.screenlet.setClassPK(screenletAttributes.getInt("classPK"));
        long groupId = screenletAttributes.getInt("groupId") == 0
                ? LiferayServerContext.getGroupId()
                : screenletAttributes.getInt("groupId");
        this.screenlet.setGroupId(groupId);
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.load();
        }
    }

    // RatingListener methods

    @Override
    public void onRatingOperationSuccess(AssetRating assetRating) {
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("user", assetRating.toString());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onRatingScreenletOperationSuccess", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onRatingScreenletError", event);
    }
}
