package LiferayScreenlets.WebContent.Display;

import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.context.LiferayServerContext;
import com.liferay.mobile.screens.context.SessionContext;
import com.liferay.mobile.screens.util.LiferayLocale;
import com.liferay.mobile.screens.webcontent.WebContent;
import com.liferay.mobile.screens.webcontent.display.WebContentDisplayListener;
import com.liferay.mobile.screens.webcontent.display.WebContentDisplayScreenlet;

import java.util.Locale;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class WebContentDisplayViewManager extends SimpleViewManager<WebContentDisplayScreenlet> implements WebContentDisplayListener{

    private final String NAME = "WebContentDisplayScreenlet";
    private ThemedReactContext reactContext;
    private WebContentDisplayScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected WebContentDisplayScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new WebContentDisplayScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.webcontentdisplay_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(WebContentDisplayScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.setLocale(new Locale(LiferayLocale.getDefaultSupportedLocale()));
        long groupId = screenletAttributes.getInt("groupId") == 0
                ? LiferayServerContext.getGroupId()
                : screenletAttributes.getInt("groupId");
        this.screenlet.setGroupId(groupId);
        this.screenlet.setLabelFields(String.valueOf(com.liferay.mobile.screens.R.styleable.WebContentDisplayScreenlet_labelFields));
        this.screenlet.setArticleId(screenletAttributes.getString("articleId"));
        this.screenlet.setTemplateId((long) screenletAttributes.getInt("templateId"));
        this.screenlet.setStructureId((long) screenletAttributes.getInt("structureId"));
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setJavascriptEnabled(false);
        this.screenlet.setUserId(SessionContext.getUserId());
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.load();
        }
    }

    // WebContentDisplayListener methods

    @Override
    public WebContent onWebContentReceived(WebContent webContent) {
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("html", webContent.getHtml());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onWebContentDisplayScreenletReceived", event);
        return webContent;
    }

    @Override
    public boolean onUrlClicked(String s) {
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("url", s);
        EventEmitter.sendEvent(this.reactContext,"onWebContentDisplayScreenletUrlClicked", event);
        return false;
    }

    @Override
    public boolean onWebContentTouched(View view, MotionEvent motionEvent) {
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("touched", motionEvent.toString());
        EventEmitter.sendEvent(this.reactContext,"onWebContentDisplayScreenletTouched", event);
        return false;
    }

    @Override
    public void error(Exception e, String s) {
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("error", e.getMessage());
        EventEmitter.sendEvent(this.reactContext,"onWebContentDisplayScreenletError", event);
    }
    
}
