import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SandboxComponent} from './components/sandbox/sandbox.component';
import {MetaObjectComponent} from './components/metaobject/metaobject.component';

@Component({
	selector: 'ng2-app',
	templateUrl: './app/app.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
		{ path: '/sandbox', name: 'Sandbox', component: SandboxComponent },
		{ path: '/metaobject', name: 'MetaObject', component: MetaObjectComponent }
])
export class AppComponent { }