package LiferayScreenlets.Web;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.web.WebListener;
import com.liferay.mobile.screens.web.WebScreenlet;
import com.liferay.mobile.screens.web.WebScreenletConfiguration;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ViewUpdater;

public class WebScreenletViewManager extends SimpleViewManager<WebScreenlet> implements WebListener {

    private final String NAME = "WebScreenlet";
    private ThemedReactContext reactContext;
    private WebScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected WebScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new WebScreenlet(reactContext);
        this.screenlet.render(com.liferay.mobile.screens.R.layout.web_default);
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name = "screenletAttributes")
    public void setConfiguation(WebScreenlet screenlet, ReadableMap props) {
        String url = props.getString("URL");
        String jsFileName = props.getString("jsFileName");
        String cssFileName = props.getString("cssFileName");
        this.screenlet.setWebScreenletConfiguration(this.createConfiguration(url, jsFileName, cssFileName));
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.load();
        }
    }

    private WebScreenletConfiguration createConfiguration(String url, String jsFileName, String cssFileName) {
        return isLiferayPortalPage(url)
                ? getWebScreenletConfigurationDefault(url, jsFileName, cssFileName)
                : getWebScreenletConfigurationOther(url, jsFileName, cssFileName);
    }

    private boolean isLiferayPortalPage(String url) {
        return url.split("https://|http://", 2).length == 1;
    }

    private WebScreenletConfiguration getWebScreenletConfigurationOther(String url, String jsFileName, String cssFileName) {
        WebScreenletConfiguration.Builder builder = new WebScreenletConfiguration.Builder(url)
                .setWebType(WebScreenletConfiguration.WebType.OTHER);
        WebScreenletConfiguration.Builder finalBuilder = addLocalFiles(builder, jsFileName, cssFileName);
        return finalBuilder.load();
    }

    private WebScreenletConfiguration getWebScreenletConfigurationDefault(String url, String jsFileName, String cssFileName) {
        WebScreenletConfiguration.Builder builder = new WebScreenletConfiguration.Builder(url);
        WebScreenletConfiguration.Builder finalBuilder = addLocalFiles(builder, jsFileName, cssFileName);
        return finalBuilder.load();
    }

    private WebScreenletConfiguration.Builder addLocalFiles(WebScreenletConfiguration.Builder builder,
                                                            String jsFileName,
                                                            String cssFileName) {
        if(!jsFileName.equals("")) {
            builder.addLocalJs(jsFileName);
        }
        if(!cssFileName.equals("")) {
            builder.addLocalCss(cssFileName);
        }
        return builder;
    }

    // WebListener implementation

    @Override
    public void onPageLoaded(String s) {
        WritableMap event = Arguments.createMap();
        event.putString("page", s);
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onWebScreenletPageLoaded", event);
    }

    @Override
    public void onScriptMessageHandler(String s, String s1) {
        WritableMap event = Arguments.createMap();
        event.putString("message", s);
        EventEmitter.sendEvent(this.reactContext,"onWebScreenletScriptMessageHandler", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        EventEmitter.sendEvent(this.reactContext,"onWebScreenletError", event);
    }
    
}
