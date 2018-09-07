package LiferayScreenlets.Asset.Display;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.asset.AssetEntry;
import com.liferay.mobile.screens.asset.display.AssetDisplayListener;
import com.liferay.mobile.screens.asset.display.AssetDisplayScreenlet;
import com.liferay.mobile.screens.blogs.BlogsEntryDisplayScreenlet;
import com.liferay.mobile.screens.dlfile.display.audio.AudioDisplayScreenlet;
import com.liferay.mobile.screens.dlfile.display.image.ImageDisplayScreenlet;
import com.liferay.mobile.screens.dlfile.display.pdf.PdfDisplayScreenlet;
import com.liferay.mobile.screens.dlfile.display.video.VideoDisplayScreenlet;
import com.liferay.mobile.screens.webcontent.display.WebContentDisplayScreenlet;

import org.json.JSONObject;

import java.util.HashMap;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class AssetDisplayScreenletViewManager extends SimpleViewManager<AssetDisplayScreenlet> implements AssetDisplayListener{

    private final String NAME = "AssetDisplayScreenlet";
    private ThemedReactContext reactContext;
    private AssetDisplayScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected AssetDisplayScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new AssetDisplayScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.asset_display_default);
        initializeDefaultValues();
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    private void initializeDefaultValues() {
        HashMap layouts = new HashMap();
        layouts.put(ImageDisplayScreenlet.class.getName(), com.liferay.mobile.screens.R.layout.image_display_default);
        layouts.put(VideoDisplayScreenlet.class.getName(), com.liferay.mobile.screens.R.layout.video_display_default);
        layouts.put(AudioDisplayScreenlet.class.getName(), com.liferay.mobile.screens.R.layout.audio_display_default);
        layouts.put(PdfDisplayScreenlet.class.getName(), com.liferay.mobile.screens.R.layout.pdf_display_default);
        layouts.put(BlogsEntryDisplayScreenlet.class.getName(), com.liferay.mobile.screens.R.layout.blogsentry_display_default);
        layouts.put(WebContentDisplayScreenlet.class.getName(), com.liferay.mobile.screens.R.layout.webcontentdisplay_default);
        this.screenlet.setLayouts(layouts);
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(AssetDisplayScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setEntryId(screenletAttributes.getInt("entryId"));
        this.screenlet.setClassName(screenletAttributes.getString("className"));
        this.screenlet.setClassPK(screenletAttributes.getInt("classPK"));
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.loadAsset();
        }
    }

    // AssetDisplayListener implementation

    @Override
    public void onRetrieveAssetSuccess(AssetEntry assetEntry) {
        JSONObject jsonObject = new JSONObject(assetEntry.getValues());
        WritableMap event = Arguments.createMap();
        event.putString("assetEntry", jsonObject.toString());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onAssetDisplayScreenletRetrieveAssetSuccess", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onAssetDisplayScreenletError", event);
    }
}
