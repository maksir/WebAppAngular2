/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from "./ng2app";
import {TreeService} from './services/tree.service';
import {MetaObjectService} from './services/metaobject.service';


bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, TreeService, MetaObjectService]);

