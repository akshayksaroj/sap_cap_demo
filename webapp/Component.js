sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/akshayksaroj/learnings/jsondatacreation/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.akshayksaroj.learnings.jsondatacreation.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});