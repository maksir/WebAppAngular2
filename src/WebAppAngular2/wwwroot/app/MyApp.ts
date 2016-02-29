import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import { MetaObject } from "./components/metaobject/metaobject.component";

@Component({
    selector: "my-app",
    templateUrl: "my_app.html",
	directives: [ROUTER_DIRECTIVES]
    /*styleUrls: ["app.scss"]*/
})
@RouteConfig([
	{ path: 'metaobjects', name: 'MetaObject', component: MetaObject }
])
export class MyApp {

}