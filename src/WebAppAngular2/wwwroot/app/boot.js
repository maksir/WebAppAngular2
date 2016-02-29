/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../../node_modules/angular2/http.d.ts" />
/// <reference path="../../node_modules/angular2/router.d.ts" />
System.register(["angular2/platform/browser", 'angular2/router', 'angular2/http', "./MyApp"], function(exports_1) {
    var browser_1, router_1, http_1, MyApp_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (MyApp_1_1) {
                MyApp_1 = MyApp_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(MyApp_1.MyApp, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map