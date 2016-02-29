/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../../node_modules/angular2/http.d.ts" />
/// <reference path="../../node_modules/angular2/router.d.ts" />

import { bootstrap } from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import { MyApp } from "./MyApp";

bootstrap(MyApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
