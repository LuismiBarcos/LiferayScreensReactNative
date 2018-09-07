package LiferayScreenlets.Base;

import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.uimanager.UIManagerHelper;

public class ViewUpdater {
    public static void forceViewUpdate(ReactContext reactContext, final int widthMeasureSpec, final int heightMeasureSpec) {
        final UIManager manager = UIManagerHelper.getUIManager(reactContext, 1);
        reactContext.runOnNativeModulesQueueThread(
                new GuardedRunnable(reactContext) {
                    @Override
                    public void runGuarded() {
                        manager.updateRootLayoutSpecs(1, widthMeasureSpec, heightMeasureSpec);
                    }
                });
    }
}
