package LiferayScreenlets.Comment.Add;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.comment.CommentEntry;
import com.liferay.mobile.screens.comment.add.CommentAddListener;
import com.liferay.mobile.screens.comment.add.CommentAddScreenlet;

import org.json.JSONObject;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;

public class CommentAddScreenletViewManager extends SimpleViewManager<CommentAddScreenlet> implements CommentAddListener{

    private final String NAME = "CommentAddScreenlet";
    private ThemedReactContext reactContext;
    private CommentAddScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected CommentAddScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new CommentAddScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.comment_add_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(CommentAddScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.removeAllViews();
        String themeName = screenletAttributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "comment_add_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.comment_add_default
                )
        );
        this.screenlet.setClassName(screenletAttributes.getString("className"));
        this.screenlet.setClassPK(screenletAttributes.getInt("classPK"));
    }

    // CommentAddListener implementation

    @Override
    public void onAddCommentSuccess(CommentEntry commentEntry) {
        JSONObject jsonObject = new JSONObject(commentEntry.getValues());
        WritableMap event = Arguments.createMap();
        event.putString("comment", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentAddScreenletAddCommentSuccess", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onCommentAddScreenletError", event);
    }
}
