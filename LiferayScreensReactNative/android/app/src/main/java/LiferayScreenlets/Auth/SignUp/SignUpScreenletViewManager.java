package LiferayScreenlets.Auth.SignUp;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.auth.BasicAuthMethod;
import com.liferay.mobile.screens.auth.signup.SignUpListener;
import com.liferay.mobile.screens.auth.signup.SignUpScreenlet;
import com.liferay.mobile.screens.context.LiferayServerContext;
import com.liferay.mobile.screens.context.User;
import com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;

import org.json.JSONObject;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;

public class SignUpScreenletViewManager extends SimpleViewManager<SignUpScreenlet> implements SignUpListener{

    private final String NAME = "SignUpScreenlet";
    private SignUpScreenlet screenlet;
    private ReactContext reactContext;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected SignUpScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new SignUpScreenlet(reactContext);
        this.screenlet.render(com.liferayscreensreactnative.R.layout.sign_up_default);
        this.screenlet.setCompanyId(LiferayServerContext.getCompanyId());
        this.screenlet.setListener(this);
        return this.screenlet;
    }

    @ReactProp(name="screenletAttributes")
    public void setConfiguration(SignUpScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.removeAllViews();
        String themeName = screenletAttributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "sign_up_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.sign_up_default
                )
        );
        this.screenlet.setAnonymousApiUserName(screenletAttributes.getString("anonymousApiUserName"));
        this.screenlet.setAnonymousApiPassword(screenletAttributes.getString("anonymousApiPassword"));
        long companyId = screenletAttributes.getInt("companyId") == 0
                ? LiferayServerContext.getCompanyId()
                : screenletAttributes.getInt("companyId");
        this.screenlet.setCompanyId(companyId);
        this.screenlet.setAutoLogin(screenletAttributes.getBoolean("autoLogin"));
        this.screenlet.setCredentialsStorage(CredentialsStorageBuilder.StorageType.NONE);
        this.screenlet.setBasicAuthMethod(BasicAuthMethod.EMAIL);
    }

    // SignUpListener methods

    @Override
    public void onSignUpFailure(Exception e) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.getMessage());
        EventEmitter.sendEvent(this.reactContext,"onSignUpScreenletFailure", event);
    }

    @Override
    public void onSignUpSuccess(User user) {
        JSONObject jsonObject = new JSONObject(user.getValues());
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("user", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onSignUpScreenletSuccess", event);
    }
}
