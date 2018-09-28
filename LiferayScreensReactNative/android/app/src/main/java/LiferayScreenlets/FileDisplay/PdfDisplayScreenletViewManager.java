package LiferayScreenlets.FileDisplay;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.asset.AssetEntry;
import com.liferay.mobile.screens.asset.display.AssetDisplayListener;
import com.liferay.mobile.screens.dlfile.display.pdf.PdfDisplayScreenlet;

import org.json.JSONObject;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;
import LiferayScreenlets.Base.ViewUpdater;

public class PdfDisplayScreenletViewManager extends SimpleViewManager<PdfDisplayScreenlet> implements AssetDisplayListener{

    private final String NAME = "PdfDisplayScreenlet";
    private ThemedReactContext reactContext;
    private PdfDisplayScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected PdfDisplayScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new PdfDisplayScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.pdf_display_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(PdfDisplayScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.removeAllViews();
        String themeName = screenletAttributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "pdf_display_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.pdf_display_default
                )
        );
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
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onPdfDisplayScreenletRetrieveAssetSuccess", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onPdfDisplayScreenletError", event);
    }
}
