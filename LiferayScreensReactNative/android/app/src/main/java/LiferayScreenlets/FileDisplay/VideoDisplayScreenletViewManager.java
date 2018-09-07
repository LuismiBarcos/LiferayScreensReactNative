package LiferayScreenlets.FileDisplay;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.asset.AssetEntry;
import com.liferay.mobile.screens.dlfile.display.video.VideoDisplayListener;
import com.liferay.mobile.screens.dlfile.display.video.VideoDisplayScreenlet;

import org.json.JSONObject;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class VideoDisplayScreenletViewManager extends SimpleViewManager<VideoDisplayScreenlet> implements VideoDisplayListener{

    private final String NAME = "VideoDisplayScreenlet";
    private ThemedReactContext reactContext;
    private VideoDisplayScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected VideoDisplayScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new VideoDisplayScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.video_display_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(VideoDisplayScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setEntryId(screenletAttributes.getInt("entryId"));
        this.screenlet.setClassName(screenletAttributes.getString("className"));
        this.screenlet.setClassPK(screenletAttributes.getInt("classPK"));
        if(!this.screenlet.getAutoLoad()) {
            this.screenlet.load();
        }
    }

    // VideoDisplayListener implementation

    @Override
    public void onVideoPrepared() {
        WritableMap event = Arguments.createMap();
        event.putString("status", "video prepared");
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onVideoDisplayScreenletVideoPrepared", event);
    }

    @Override
    public void onVideoError(Exception e) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onVideoDisplayScreenletVideoError", event);
    }

    @Override
    public void onVideoCompleted() {
        WritableMap event = Arguments.createMap();
        event.putString("status", "video completed");
        EventEmitter.sendEvent(this.reactContext,"onVideoDisplayScreenletVideoCompleted", event);
    }

    @Override
    public void onRetrieveAssetSuccess(AssetEntry assetEntry) {
        JSONObject jsonObject = new JSONObject(assetEntry.getValues());
        WritableMap event = Arguments.createMap();
        event.putString("assetEntry", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onVideoDisplayScreenletRetrieveAssetSuccess", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onVideoDisplayScreenletError", event);
    }
}
