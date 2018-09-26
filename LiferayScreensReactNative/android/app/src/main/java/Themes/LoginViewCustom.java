package Themes;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.Switch;

import com.liferay.mobile.screens.auth.login.LoginScreenlet;
import com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder;
import com.liferay.mobile.screens.viewsets.defaultviews.auth.login.LoginView;
import com.liferayscreensreactnative.R;

public class LoginViewCustom extends LoginView {

    private Switch saveCredentialsSwitch;
    private LoginScreenlet screenlet;

    public LoginViewCustom(Context context) {
        super(context);
    }

    public LoginViewCustom(Context context, AttributeSet attributes) {
        super(context, attributes);
    }

    public LoginViewCustom(Context context, AttributeSet attributes, int defaultStyle) {
        super(context, attributes, defaultStyle);
    }

    @Override
    protected void onFinishInflate() {
        super.onFinishInflate();
        this.saveCredentialsSwitch = findViewById(R.id.switch_save_credentials);
    }

    @Override
    public void onClick(View view) {
        super.onClick(view);
        this.screenlet = (LoginScreenlet) getScreenlet();
        if (saveCredentialsSwitch.isChecked()) {
            screenlet.setCredentialsStorage(CredentialsStorageBuilder.StorageType.SHARED_PREFERENCES);
        }
    }
}
