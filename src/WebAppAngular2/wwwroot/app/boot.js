System.register(["angular2/platform/browser", "angular2/common", 'angular2/http', 'angular2/router', "./ng2app", './services/tree.service', './services/metaobject.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, common_1, http_1, router_1, ng2app_1, tree_service_1, metaobject_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2app_1_1) {
                ng2app_1 = ng2app_1_1;
            },
            function (tree_service_1_1) {
                tree_service_1 = tree_service_1_1;
            },
            function (metaobject_service_1_1) {
                metaobject_service_1 = metaobject_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(ng2app_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, tree_service_1.TreeService, metaobject_service_1.MetaObjectService, common_1.FORM_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map