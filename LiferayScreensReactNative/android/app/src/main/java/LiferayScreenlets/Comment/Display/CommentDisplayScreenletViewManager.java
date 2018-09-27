package LiferayScreenlets.Comment.Display;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.comment.CommentEntry;
import com.liferay.mobile.screens.comment.display.CommentDisplayListener;
import com.liferay.mobile.screens.comment.display.CommentDisplayScreenlet;

import org.json.JSONObject;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;
import LiferayScreenlets.Base.ViewUpdater;

public class CommentDisplayScreenletViewManager extends SimpleViewManager<CommentDisplayScreenlet> implements CommentDisplayListener{

    private final String NAME = "CommentDisplayScreenlet";
    private ThemedReactContext reactContext;
    private CommentDisplayScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected CommentDisplayScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new CommentDisplayScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.comment_display_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(CommentDisplayScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.removeAllViews();
        String themeName = screenletAttributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "comment_display_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.comment_display_default
                )
        );
        this.screenlet.setCommentId(screenletAttributes.getInt("commentId"));
        this.screenlet.setEditable(screenletAttributes.getBoolean("editable"));
        this.screenlet.load();
    }

    // CommentDisplayListener implementation

    @Override
    public void onLoadCommentSuccess(CommentEntry commentEntry) {
        JSONObject jsonObject = new JSONObject(commentEntry.getValues());
        WritableMap event = Arguments.createMap();
        event.putString("comment", jsonObject.toString());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onCommentDisplayScreenletLoadCommentSuccess", event);
    }

    @Override
    public void onDeleteCommentSuccess(CommentEntry commentEntry) {
        JSONObject jsonObject = new JSONObject(commentEntry.getValues());
        WritableMap event = Arguments.createMap();
        event.putString("comment", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentDisplayScreenletDeleteCommentSuccess", event);
    }

    @Override
    public void onUpdateCommentSuccess(CommentEntry commentEntry) {
        JSONObject jsonObject = new JSONObject(commentEntry.getValues());
        WritableMap event = Arguments.createMap();
        event.putString("comment", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentDisplayScreenletUpdateCommentSuccess", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentDisplayScreenletError", event);
    }
}
