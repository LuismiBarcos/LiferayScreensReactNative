package LiferayScreenlets.Base;

import android.support.annotation.LayoutRes;

import com.facebook.react.bridge.ReactContext;

public class ThemesFinder {

    public static int getLayoutId(ReactContext reactContext, String viewName, String themeName, @LayoutRes int defaultLayoutId) {
        int layoutId = reactContext.getResources().getIdentifier(
                viewName + themeName,
                "layout",
                reactContext.getPackageName());
        return layoutId != 0
                ? layoutId
                : defaultLayoutId;
    }
}
