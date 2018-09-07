package LiferayScreenlets.Context;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.liferay.mobile.screens.context.SessionContext;
import com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;

import org.json.JSONObject;

public class SessionContextModule extends ReactContextBaseJavaModule{

    private final String NAME = "SessionContextManager";

    public SessionContextModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void loadCredentials(Promise promise){
        SessionContext.loadStoredCredentials(CredentialsStorageBuilder.StorageType.SHARED_PREFERENCES);
        if(SessionContext.isLoggedIn()) {
            JSONObject jsonObject = new JSONObject(SessionContext.getCurrentUser().getValues());
            WritableMap event = Arguments.createMap();
            event.putInt("user", (int) SessionContext.getCurrentUser().getId());
            promise.resolve(event);
        } else {
            promise.reject("NOT_USER", "Enter credentials");
        }
    }
}
