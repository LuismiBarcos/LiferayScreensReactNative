package LiferayScreenlets.Comment.List;

import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.base.BaseScreenlet;
import com.liferay.mobile.screens.comment.CommentEntry;
import com.liferay.mobile.screens.comment.list.CommentListListener;
import com.liferay.mobile.screens.comment.list.CommentListScreenlet;
import com.liferay.mobile.screens.util.LiferayLocale;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Locale;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;
import LiferayScreenlets.Base.ViewUpdater;

public class CommentListScreenletViewManager extends SimpleViewManager<CommentListScreenlet> implements CommentListListener{

    private final String NAME = "CommentListScreenlet";
    private CommentListScreenlet screenlet;
    private ReactContext reactContext;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected CommentListScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new CommentListScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.comment_list_default);
        this.screenlet.setListener(this);
        this.screenlet.setLocale(new Locale(LiferayLocale.getDefaultSupportedLocale()));
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(CommentListScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.removeAllViews();
        String themeName = screenletAttributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "comment_list_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.comment_list_default
                )
        );
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setClassName(screenletAttributes.getString("className"));
        this.screenlet.setClassPK(screenletAttributes.getInt("classPK"));
        this.screenlet.setFirstPageSize(screenletAttributes.getInt("firstPageSize"));
        this.screenlet.setFirstPageSize(screenletAttributes.getInt("pageSize"));
    }

    // CommentListListener methods

    @Override
    public void onDeleteCommentSuccess(CommentEntry commentEntry) {
        WritableMap event = Arguments.createMap();
        event.putString("commentEntry", new JSONObject(commentEntry.getValues()).toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentListScreenletDeleteCommentSuccess", event);
    }

    @Override
    public void onUpdateCommentSuccess(CommentEntry commentEntry) {
        WritableMap event = Arguments.createMap();
        event.putString("commentEntry", new JSONObject(commentEntry.getValues()).toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentListScreenletUpdateCommentSuccess", event);
    }

    @Override
    public void onListPageFailed(int i, Exception e) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.getMessage());
        EventEmitter.sendEvent(this.reactContext,"onCommentListScreenletListPageFailed", event);
    }

    @Override
    public void onListPageReceived(int i, int i1, List<CommentEntry> list, int i2) {
        WritableMap event = Arguments.createMap();
        JSONArray jsonArray = new JSONArray();
        for (CommentEntry comment: list) {
            jsonArray.put(comment.getValues());
        }
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("comments", jsonArray);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        event.putString("comments", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentListScreenletListPageReceived", event);
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
    }

    @Override
    public void onListItemSelected(CommentEntry commentEntry, View view) {
        WritableMap event = Arguments.createMap();
        event.putString("commentEntry", new JSONObject(commentEntry.getValues()).toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentListScreenletListItemSelected", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.getMessage());
        EventEmitter.sendEvent(this.reactContext,"onCommentListScreenletError", event);
    }
}
