package LiferayScreenlets.Auth.Login;

import android.support.annotation.LayoutRes;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.auth.BasicAuthMethod;
import com.liferay.mobile.screens.auth.login.LoginListener;
import com.liferay.mobile.screens.auth.login.LoginScreenlet;
import com.liferay.mobile.screens.context.AuthenticationType;
import com.liferay.mobile.screens.context.User;
import com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;

import org.json.JSONObject;

import LiferayScreenlets.Base.ThemesFinder;

public class LoginScreenletViewManager extends SimpleViewManager<LoginScreenlet> implements LoginListener{

    private final String NAME = "LoginScreenlet";
    private ReactContext reactContext;
    private LoginScreenlet screenlet;


    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected LoginScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new LoginScreenlet(reactContext);
        this.screenlet.setListener(this);
        setScreenletProperties(com.liferay.mobile.screens.R.layout.login_default);
        return this.screenlet;
    }

    @ReactProp(name="saveCredentials")
    public void saveCredentials(LoginScreenlet screenlet, boolean saveCredentials) {
        if(saveCredentials) {
            this.screenlet.setCredentialsStorage(CredentialsStorageBuilder.StorageType.SHARED_PREFERENCES);
        }
    }

    @ReactProp(name = "theme")
    public void setTheme(LoginScreenlet loginScreenlet, String themeName) {
        this.setScreenletProperties(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "login_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.login_default
                )
        );
    }

    private void setScreenletProperties(@LayoutRes int layoutId) {
        this.screenlet.removeAllViews();
        this.screenlet.render(layoutId);
        this.screenlet.setAuthenticationType(AuthenticationType.BASIC);
        this.screenlet.setBasicAuthMethod(BasicAuthMethod.EMAIL);
    }

    // LoginListener

    @Override
    public void onLoginSuccess(User user) {
        JSONObject jsonObject = new JSONObject(user.getValues());
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("user", jsonObject.toString());
        this.sendEvent("onLoginScreenletSuccess", event);
    }

    @Override
    public void onLoginFailure(Exception e) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.toString());
        this.sendEvent("onLoginScreenletError", event);
    }

    @Override
    public void onAuthenticationBrowserShown() {
        WritableMap event = Arguments.createMap();
        this.sendEvent("onLoginScreenletAuthenticationBrowserShown", event);
    }

    private void sendEvent(String eventName ,WritableMap event ){
        this.reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, event);
    }
}
