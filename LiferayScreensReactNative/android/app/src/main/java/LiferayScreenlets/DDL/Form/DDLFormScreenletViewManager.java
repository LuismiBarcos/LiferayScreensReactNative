package LiferayScreenlets.DDL.Form;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.liferay.mobile.screens.context.LiferayServerContext;
import com.liferay.mobile.screens.ddl.form.DDLFormListener;
import com.liferay.mobile.screens.ddl.form.DDLFormScreenlet;
import com.liferay.mobile.screens.ddl.form.view.DDLFormViewModel;
import com.liferay.mobile.screens.ddl.model.DocumentField;
import com.liferay.mobile.screens.ddl.model.Field;
import com.liferay.mobile.screens.ddl.model.Record;
import com.liferay.mobile.screens.util.LiferayLocale;

import org.json.JSONObject;

import java.util.Map;

import LiferayScreenlets.Base.EventEmitter;
import LiferayScreenlets.Base.ThemesFinder;
import LiferayScreenlets.Base.ViewUpdater;

public class DDLFormScreenletViewManager extends SimpleViewManager<DDLFormScreenlet> implements DDLFormListener{

    private final String NAME = "DDLFormScreenlet";
    private ThemedReactContext reactContext;
    private DDLFormScreenlet screenlet;

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected DDLFormScreenlet createViewInstance(ThemedReactContext reactContext) {
        this.reactContext = reactContext;
        this.screenlet = new DDLFormScreenlet(reactContext);
        this.screenlet.setListener(this);
        return this.screenlet;
    }


    @ReactProp(name="screenletAttributes")
    public void setConfiguration(DDLFormScreenlet screenlet, ReadableMap screenletAttributes) {
        this.screenlet.removeAllViews();
        String themeName = screenletAttributes.getString("theme");
        this.screenlet.render(
                ThemesFinder.getLayoutId(
                        this.reactContext,
                        "ddl_form_",
                        themeName,
                        com.liferay.mobile.screens.R.layout.ddl_form_default
                )
        );
        initializeDefaultValues();
        Record record = new Record(LiferayLocale.getDefaultLocale());
        record.setCreatorUserId(0);
        this.screenlet.setRecord(record);
        this.screenlet.setStructureId(screenletAttributes.getInt("structureId"));
        long groupId = screenletAttributes.getInt("groupId") == 0
                ? LiferayServerContext.getGroupId()
                : screenletAttributes.getInt("groupId");
        this.screenlet.setGroupId(groupId);
        this.screenlet.setRecordSetId(screenletAttributes.getInt("recordSetId"));
        this.screenlet.setRecordId(screenletAttributes.getInt("recordId"));
        this.screenlet.setRepositoryId(screenletAttributes.getInt("repositoryId"));
        this.screenlet.setFolderId(screenletAttributes.getInt("folderId"));
        this.screenlet.setAutoLoad(screenletAttributes.getBoolean("autoLoad"));
        this.screenlet.setAutoScrollOnValidation(screenletAttributes.getBoolean("autoscrollOnValidation"));
        this.screenlet.setFilePrefix(null);
        if(!this.screenlet.isAutoLoad()) {
            this.screenlet.load();
        }
    }

    private void initializeDefaultValues(){
        DDLFormViewModel viewModel = (DDLFormViewModel) this.screenlet.getChildAt(0);
        viewModel.setFieldLayoutId(Field.EditorType.CHECKBOX, com.liferay.mobile.screens.R.layout.ddlfield_checkbox_default);
        viewModel.setFieldLayoutId(Field.EditorType.DATE, com.liferay.mobile.screens.R.layout.ddlfield_date_default);
        viewModel.setFieldLayoutId(Field.EditorType.NUMBER, com.liferay.mobile.screens.R.layout.ddlfield_number_default);
        viewModel.setFieldLayoutId(Field.EditorType.INTEGER, com.liferay.mobile.screens.R.layout.ddlfield_number_default);
        viewModel.setFieldLayoutId(Field.EditorType.DECIMAL, com.liferay.mobile.screens.R.layout.ddlfield_number_default);
        viewModel.setFieldLayoutId(Field.EditorType.RADIO, com.liferay.mobile.screens.R.layout.ddlfield_radio_default);
        viewModel.setFieldLayoutId(Field.EditorType.SELECT, com.liferay.mobile.screens.R.layout.ddlfield_select_default);
        viewModel.setFieldLayoutId(Field.EditorType.TEXT, com.liferay.mobile.screens.R.layout.ddlfield_text_default);
        viewModel.setFieldLayoutId(Field.EditorType.TEXT_AREA, com.liferay.mobile.screens.R.layout.ddlfield_text_area_default);
        viewModel.setFieldLayoutId(Field.EditorType.DOCUMENT, com.liferay.mobile.screens.R.layout.ddlfield_document_default);
        viewModel.setFieldLayoutId(Field.EditorType.GEO, com.liferay.mobile.screens.R.layout.ddlfield_geo_default);
    }

    // DDLFormListener methods

    @Override
    public void onDDLFormLoaded(Record record) {
        JSONObject jsonObject = new JSONObject(record.getData());
        // Create map for params
        WritableMap event = Arguments.createMap();
        // Put data to map
        event.putString("record", jsonObject.toString());
        ViewUpdater.forceViewUpdate(this.reactContext, this.screenlet.getMeasuredWidth(), this.screenlet.getMeasuredHeight());
        EventEmitter.sendEvent(this.reactContext,"onDDLFormScreenletLoaded", event);
    }

    @Override
    public void onDDLFormRecordLoaded(Record record, Map<String, Object> map) {
        JSONObject jsonObject = new JSONObject(map);
        WritableMap event = Arguments.createMap();
        event.putString("map", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onDDLFormScreenletRecordLoaded", event);
    }

    @Override
    public void onDDLFormRecordAdded(Record record) {
        JSONObject jsonObject = new JSONObject(record.getData());
        WritableMap event = Arguments.createMap();
        event.putString("record", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onDDLFormScreenletRecordAdded", event);
    }

    @Override
    public void onDDLFormRecordUpdated(Record record) {
        JSONObject jsonObject = new JSONObject(record.getData());
        WritableMap event = Arguments.createMap();
        event.putString("record", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onDDLFormScreenletRecordUpdated", event);
    }

    @Override
    public void onDDLFormDocumentUploaded(DocumentField documentField, JSONObject jsonObject) {
        WritableMap event = Arguments.createMap();
        event.putString("documentField", jsonObject.toString());
        EventEmitter.sendEvent(this.reactContext,"onDDLFormScreenletDocumentUploaded", event);
    }

    @Override
    public void onDDLFormDocumentUploadFailed(DocumentField documentField, Exception e) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.getMessage());
        EventEmitter.sendEvent(this.reactContext,"onDDLFormScreenletDocumentUploadFailed", event);
    }

    @Override
    public void error(Exception e, String s) {
        WritableMap event = Arguments.createMap();
        event.putString("error", e.getMessage());
        EventEmitter.sendEvent(this.reactContext,"onDDLFormScreenletError", event);
    }
}
