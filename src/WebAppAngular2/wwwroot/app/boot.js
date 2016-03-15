/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
var browser_1 = require("angular2/platform/browser");
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var ng2app_1 = require("./ng2app");
var tree_service_1 = require('./services/tree.service');
browser_1.bootstrap(ng2app_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, tree_service_1.TreeService]);
//# sourceMappingURL=boot.js.map