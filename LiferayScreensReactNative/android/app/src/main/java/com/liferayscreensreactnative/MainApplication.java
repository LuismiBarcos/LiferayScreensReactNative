package com.liferayscreensreactnative;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import LiferayScreenlets.Asset.Display.AssetDisplayScreenletPackage;
import LiferayScreenlets.Asset.List.AssetListScreenletPackage;
import LiferayScreenlets.Auth.ForgotPassword.ForgotPasswordPackage;
import LiferayScreenlets.Auth.Login.LoginScreenletPackage;
import LiferayScreenlets.Auth.SignUp.SignUpScreenletPackage;
import LiferayScreenlets.Blogs.BlogsEntryDisplayScreenletPackage;
import LiferayScreenlets.Comment.Add.CommentAddScreenletPackage;
import LiferayScreenlets.Comment.Display.CommentDisplayScreenletPackage;
import LiferayScreenlets.Comment.List.CommnentListScreenletPackage;
import LiferayScreenlets.Context.SessionContextPackage;
import LiferayScreenlets.DDL.Form.DDLFormScreenletPackage;
import LiferayScreenlets.DDL.List.DDLListScreenletPackage;
import LiferayScreenlets.FileDisplay.AudioDisplayScreenletPackage;
import LiferayScreenlets.FileDisplay.ImageDisplayScreenletPackage;
import LiferayScreenlets.FileDisplay.PdfDisplayScreenletPackage;
import LiferayScreenlets.FileDisplay.VideoDisplayScreenletPackage;
import LiferayScreenlets.ImageGallery.ImageGalleryScreenletPackage;
import LiferayScreenlets.Rating.RatingScreenletPackage;
import LiferayScreenlets.UserPortrait.UserPortraitScreenletPackage;
import LiferayScreenlets.Web.WebScreenletPackage;
import LiferayScreenlets.WebContent.Display.WebContentDisplayScreenletPackage;
import LiferayScreenlets.WebContent.List.WebContentListScreenletPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new LoginScreenletPackage(),
            new SessionContextPackage(),
            new UserPortraitScreenletPackage(),
            new ImageGalleryScreenletPackage(),
            new CommnentListScreenletPackage(),
            new SignUpScreenletPackage(),
            new RatingScreenletPackage(),
            new ForgotPasswordPackage(),
            new DDLFormScreenletPackage(),
            new WebContentDisplayScreenletPackage(),
            new ImageDisplayScreenletPackage(),
            new VideoDisplayScreenletPackage(),
            new AudioDisplayScreenletPackage(),
            new CommentDisplayScreenletPackage(),
            new CommentAddScreenletPackage(),
            new PdfDisplayScreenletPackage(),
            new AssetListScreenletPackage(),
            new AssetDisplayScreenletPackage(),
            new WebContentListScreenletPackage(),
            new BlogsEntryDisplayScreenletPackage(),
            new DDLListScreenletPackage(),
            new WebScreenletPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
