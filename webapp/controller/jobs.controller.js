sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("scp.com.saparate.controller.jobs", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf scp.com.saparate.view.jobs
		 */
		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
			this._oRouter.getRoute("jobs").attachPatternMatched(this._onObjectMatched, this);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf scp.com.saparate.view.jobs
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf scp.com.saparate.view.jobs
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf scp.com.saparate.view.jobs
		 */
		//	onExit: function() {
		//
		//	}
		_onObjectMatched: function (oEvent) {
			var oModel_jobs = new sap.ui.model.json.JSONModel();
			oModel_jobs.loadData(this.getOwnerComponent().getModel("servers").getProperty("jobs"));
			this.getView().setModel(oModel_jobs, "Jobs");

		},
		handleshowBuilddetails: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var selectedJobId = oEvent.getSource().getBindingContext("Jobs").getProperty("name");
			oRouter.navTo("jobdetails", {
				jobId: selectedJobId
			});

		},
		navigatetoCreatePipeline: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("NewPipeLine");
		}

	});
});