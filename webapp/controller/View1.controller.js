sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.akshayksaroj.learnings.jsondatacreation.controller.View1", {
        onInit() {

            // declaring a variable oModel

            var oModel = new sap.ui.model.json.JSONModel(
                {
                    Name: "Akshay Saroj",
                    Learning: "SAP UI5"
                }
            );

            // setting the model
            this.getView().setModel(oModel,"emp");
        }
    });
});