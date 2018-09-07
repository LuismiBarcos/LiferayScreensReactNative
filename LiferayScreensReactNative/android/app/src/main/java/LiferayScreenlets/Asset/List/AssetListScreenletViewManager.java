package LiferayScreenlets.Asset.List;

import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.asset.list.AssetListScreenlet;
import com.liferay.mobile.screens.base.list.BaseListListener;
import com.liferay.mobile.screens.context.LiferayServerContext;
import com.liferay.mobile.screens.util.LiferayLocale;

import java.util.List;
import java.util.Locale;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class AssetListScreenletViewManager extends SimpleViewManager<AssetListScreenlet> implements BaseListListener{

    private final String NAME = "AssetListScreenlet";
    private ThemedReactContext reactContext;
    private AssetListScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected AssetListScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new AssetListScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.asset_list_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(AssetListScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setLocale(new Locale(LiferayLocale.getDefaultSupportedLocale()));
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        long groupId = screenletAttributes.getInt("groupId") == 0
                ? LiferayServerContext.getGroupId()
                : screenletAttributes.getInt("groupId");
        this.screenlet.setGroupId(groupId);
        this.screenlet.setPortletItemName(screenletAttributes.getString("portletItemName"));
        this.screenlet.setClassNameId(screenletAttributes.getInt("classNameId"));
        this.screenlet.setFirstPageSize(screenletAttributes.getInt("firstPageSize"));
        this.screenlet.setPageSize(screenletAttributes.getInt("pageSize"));
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.loadPage(0);
        }
    }

    // BaseListListener implementation

    @Override
    public void onListPageFailed(int i, Exception e) {
        WritableMap event = Arguments.createMap();
        event.putInt("pageNumber", i);
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onAssetListScreenletListPageFailed", event);
    }

    @Override
    public void onListPageReceived(int i, int i1, List list, int i2) {
        WritableMap event = Arguments.createMap();
        event.putString("list", list.toString());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onAssetListScreenletListPageReceived", event);
    }

    @Override
    public void onListItemSelected(Object o, View view) {
        WritableMap event = Arguments.createMap();
        event.putString("itemSelected", o.toString());
        EventEmitter.sendEvent(this.reactContext,"onAssetListScreenletListItemSelected", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onAssetListScreenletError", event);
    }
}
