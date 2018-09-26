package LiferayScreenlets.DDL.List;

import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.base.list.BaseListListener;
import com.liferay.mobile.screens.context.LiferayServerContext;
import com.liferay.mobile.screens.ddl.list.DDLListScreenlet;
import com.liferay.mobile.screens.util.LiferayLocale;
import com.liferay.mobile.screens.util.LiferayLogger;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;
import LiferayScreenlets.Base.ViewUpdater;

public class DDLListScreenletViewManager extends SimpleViewManager<DDLListScreenlet> implements BaseListListener {

    private final String NAME = "DDLListScreenlet";
    private ThemedReactContext reactContext;
    private DDLListScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected DDLListScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new DDLListScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.ddl_list_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(DDLListScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.removeAllViews();
        String themeName = screenletAttributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "ddl_list_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.ddl_list_default
                )
        );
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setRecordSetId(screenletAttributes.getInt("recordSetId"));
        this.screenlet.setUserId(screenletAttributes.getInt("userId"));
        this.screenlet.setFirstPageSize(screenletAttributes.getInt("firstPageSize"));
        this.screenlet.setPageSize(screenletAttributes.getInt("pageSize"));
        this.screenlet.setLabelFields(parse(screenletAttributes.getString("labelFields")));
        this.screenlet.setLocale(new Locale(LiferayLocale.getDefaultSupportedLocale()));
        this.screenlet.setGroupId(LiferayServerContext.getGroupId());
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
        EventEmitter.sendEvent(this.reactContext,"onDDLListScreenletListPageFailed", event);
    }

    @Override
    public void onListPageReceived(int i, int i1, List list, int i2) {
        WritableMap event = Arguments.createMap();
        event.putString("list", list.toString());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onDDLListScreenletListPageReceived", event);
    }

    @Override
    public void onListItemSelected(Object o, View view) {
        WritableMap event = Arguments.createMap();
        event.putString("itemSelected", o.toString());
        EventEmitter.sendEvent(this.reactContext,"onDDLListScreenletListItemSelected", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onDDLListScreenletError", event);
    }
}
