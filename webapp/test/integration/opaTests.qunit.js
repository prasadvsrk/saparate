/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"scp/com/saparate/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});