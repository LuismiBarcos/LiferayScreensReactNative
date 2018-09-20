package LiferayScreenlets.ImageGallery;

import android.net.Uri;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.imagegallery.ImageGalleryListener;
import com.liferay.mobile.screens.imagegallery.ImageGalleryScreenlet;
import com.liferay.mobile.screens.imagegallery.model.ImageEntry;
import com.liferay.mobile.screens.util.LiferayLocale;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Locale;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class ImageGalleryScreenletViewManager extends SimpleViewManager<ImageGalleryScreenlet> implements ImageGalleryListener{

    private final String NAME = "ImageGalleryScreenlet";
    private ReactContext reactContext;
    private ImageGalleryScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected ImageGalleryScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet= new ImageGalleryScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.gallery_default);
        this.screenlet.setListener(this);
        this.screenlet.setLocale(new Locale(LiferayLocale.getDefaultSupportedLocale()));
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(ImageGalleryScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setRepositoryId(screenletAttributes.getInt("repositoryId"));
        this.screenlet.setFolderId(screenletAttributes.getInt("folderId"));
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setFirstPageSize(screenletAttributes.getInt("firstPageSize"));
        this.screenlet.setPageSize(screenletAttributes.getInt("pageSize"));
        this.screenlet.load();
    }

    // ImageGalleryListener methods

    @Override
    public void onImageEntryDeleted(long l) {
        WritableMap event = Arguments.createMap();
        event.putInt("l", (int) l);
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletImageEntryDeleted", event);
    }

    @Override
    public void onImageUploadStarted(Uri uri, String s, String s1, String s2) {
        WritableMap event = Arguments.createMap();
        event.putString("uri", uri.getPath());
        event.putString("s", s);
        event.putString("s1", s1);
        event.putString("s2", s2);
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletImageUploadStarted", event);
    }

    @Override
    public void onImageUploadProgress(int i, int i1) {
        WritableMap event = Arguments.createMap();
        event.putInt("i", i);
        event.putInt("i1", i1);
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletImageUploadProgress", event);
    }

    @Override
    public void onImageUploadEnd(ImageEntry imageEntry) {
        WritableMap event = Arguments.createMap();
        event.putString("imageEntry", new JSONObject(imageEntry.getValues()).toString());
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletImageUploadEnd", event);
    }

    @Override
    public boolean showUploadImageView(String s, Uri uri, int i) {
        WritableMap event = Arguments.createMap();
        event.putString("imageView", s);
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletShowUploadImageView", event);
        return false;
    }

    @Override
    public int provideImageUploadDetailView() {
        return 0;
    }

    @Override
    public void onListPageFailed(int i, Exception e) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletListPageFailed", event);
    }

    @Override
    public void onListPageReceived(int i, int i1, List<ImageEntry> list, int i2) {
        WritableMap event = Arguments.createMap();
        JSONArray jsonArray = new JSONArray();
        for (ImageEntry image : list) {
            jsonArray.put(image.getValues());
        }
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("images", jsonArray);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        event.putString("images", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletListPageReceived", event);
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
    }

    @Override
    public void onListItemSelected(ImageEntry imageEntry, View view) {
        WritableMap event = Arguments.createMap();
        event.putString("image", new JSONObject(imageEntry.getValues()).toString());
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletItemSelected", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", s);
        EventEmitter.sendEvent(this.reactContext,"onImageGalleryScreenletImageGalleryError", event);
    }
}
