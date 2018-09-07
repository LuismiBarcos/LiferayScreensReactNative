package LiferayScreenlets.WebContent.List;

import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.base.list.BaseListListener;
import com.liferay.mobile.screens.context.LiferayServerContext;
import com.liferay.mobile.screens.util.LiferayLocale;
import com.liferay.mobile.screens.util.LiferayLogger;
import com.liferay.mobile.screens.webcontent.list.WebContentListScreenlet;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class WebContentListScreenletViewManager extends SimpleViewManager<WebContentListScreenlet> implements BaseListListener {

    private final String NAME = "WebContentListScreenlet";
    private ThemedReactContext reactContext;
    private WebContentListScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected WebContentListScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new WebContentListScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.webcontentlist_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(WebContentListScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setFolderId(screenletAttributes.getInt("folderId"));
        long groupId = screenletAttributes.getInt("groupId") == 0
                ? LiferayServerContext.getGroupId()
                : screenletAttributes.getInt("groupId");
        this.screenlet.setGroupId(groupId);
        this.screenlet.setLabelFields(parse(screenletAttributes.getString("labelFields")));
        this.screenlet.setFirstPageSize(screenletAttributes.getInt("firstPageSize"));
        this.screenlet.setPageSize(screenletAttributes.getInt("pageSize"));
        this.screenlet.setLocale(new Locale(LiferayLocale.getDefaultSupportedLocale()));
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.loadPage(0);
        }
    }

    private List<String> parse(String labelFields) {
        if (labelFields == null) {
            LiferayLogger.e("No labelFields configured");
            labelFields = "";
        }

        List<String> parsedFields = new ArrayList();
        String[] var3 = labelFields.split(",");
        int var4 = var3.length;

        for (int var5 = 0; var5 < var4; ++var5) {
            String text = var3[var5];
            parsedFields.add(text.trim());
        }

        return parsedFields;
    }

    // BaseListListener implementation

    @Override
    public void onListPageFailed(int i, Exception e) {
        WritableMap event = Arguments.createMap();
        event.putInt("pageNumber", i);
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onWebContentListScreenletListPageFailed", event);
    }

    @Override
    public void onListPageReceived(int i, int i1, List list, int i2) {
        WritableMap event = Arguments.createMap();
        event.putString("list", list.toString());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onWebContentListScreenletListPageReceived", event);
    }

    @Override
    public void onListItemSelected(Object o, View view) {
        WritableMap event = Arguments.createMap();
        event.putString("itemSelected", o.toString());
        EventEmitter.sendEvent(this.reactContext,"onWebContentListScreenletListItemSelected", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onWebContentListScreenletError", event);
    }
}
