package LiferayScreenlets.UserPortrait;

import android.graphics.Bitmap;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.userportrait.UserPortraitListener;
import com.liferay.mobile.screens.userportrait.UserPortraitScreenlet;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;

public class UserPortraitScreenletViewManager extends SimpleViewManager<UserPortraitScreenlet> implements UserPortraitListener{

    private final String NAME = "UserPortraitScreenlet";
    private ReactContext reactContext;
    private UserPortraitScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected UserPortraitScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new UserPortraitScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.userportrait_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name = "screenletAttributes")
    public void setConfiguation(UserPortraitScreenlet screenlet, ReadableMap attributes) {
        this.screenlet.removeAllViews();
        String themeName = attributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "userportrait_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.userportrait_default
                )
        );
        this.screenlet.setAutoLoad(attributes.getBoolean("autoLoad"));
        this.screenlet.setUserId(attributes.getInt("userId"));
        this.screenlet.setMale(attributes.getBoolean("male"));
        this.screenlet.setPortraitId(attributes.getInt("portraitId"));
        this.screenlet.setUuid(attributes.getString("uuid"));
        this.screenlet.setEditable(attributes.getBoolean("editable"));
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.load();
        }
    }

    // UserPortraitListener methods
    @Override
    public Bitmap onUserPortraitLoadReceived(Bitmap bitmap) {
        WritableMap event = Arguments.createMap();
        int imageSize = bitmap.getRowBytes() * bitmap.getHeight();
        event.putInt("image", imageSize);
        EventEmitter.sendEvent(this.reactContext, "onUserPortraitScreenletLoadReceived", event);
        return bitmap;
    }

    @Override
    public void onUserPortraitUploaded() {
        WritableMap event = Arguments.createMap();
        event.putBoolean("userPortraitLoadReceived", true);
        EventEmitter.sendEvent(this.reactContext, "onUserPortraitScreenletUploaded", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", s);
        EventEmitter.sendEvent(this.reactContext, "onUserPortraitScreenletError", event);
    }
}
