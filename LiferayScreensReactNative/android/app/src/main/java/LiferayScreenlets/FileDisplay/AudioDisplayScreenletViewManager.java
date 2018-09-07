package LiferayScreenlets.FileDisplay;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.asset.AssetEntry;
import com.liferay.mobile.screens.asset.display.AssetDisplayListener;
import com.liferay.mobile.screens.dlfile.display.audio.AudioDisplayScreenlet;

import org.json.JSONObject;

import LiferayScreenlets.Base.EventEmitter;

public class AudioDisplayScreenletViewManager extends SimpleViewManager<AudioDisplayScreenlet> implements AssetDisplayListener{

    private final String NAME = "AudioDisplayScreenlet";
    private ThemedReactContext reactContext;
    private AudioDisplayScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected AudioDisplayScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new AudioDisplayScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.audio_display_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(AudioDisplayScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setEntryId(screenletAttributes.getInt("entryId"));
        this.screenlet.setClassName(screenletAttributes.getString("className"));
        this.screenlet.setClassPK(screenletAttributes.getInt("classPK"));
        if(!this.screenlet.getAutoLoad()) {
            this.screenlet.load();
        }
    }

    // AssetDisplayListener implementation

    @Override
    public void onRetrieveAssetSuccess(AssetEntry assetEntry) {
        JSONObject jsonObject = new JSONObject(assetEntry.getValues());
        WritableMap event = Arguments.createMap();
        event.putString("assetEntry", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onAudioDisplayScreenletRetrieveAssetSuccess", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onAudioDisplayScreenletError", event);
    }
}
