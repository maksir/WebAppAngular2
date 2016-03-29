"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
//import {CORE_DIRECTIVES} from 'angular2/common';
var treeview_component_1 = require('../treeview/treeview.component');
var tree_service_1 = require('../../services/tree.service');
var metaobject_service_1 = require('../../services/metaobject.service');
var datetime_component_1 = require('../datetime.component');
var select2_component_1 = require('../select2.component');
var SandboxComponent = (function () {
    function SandboxComponent(treeService, moService) {
        this.treeService = treeService;
        this.moService = moService;
        this.currentDate = "24.09.1976 06:30";
    }
    SandboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treeService.GetNodes(0).subscribe(function (res) { return _this.Nodes = res; }, function (error) { return console.log(error); });
        this.moService.GetList(56).subscribe(function (res) { return _this.MoList = res; }, function (error) { return console.log(error); });
        this.Items = new Array();
        this.Items.push({ id: 1, name: 'first' }, { id: 2, name: 'second' });
    };
    SandboxComponent.prototype.onSelectNode = function (node) {
        this.selectedNode = node;
    };
    SandboxComponent.prototype.onRequest = function (parent) {
        this.treeService.GetNodes(parent.id).subscribe(function (res) { return parent.children = res; }, function (error) { return console.log(error); });
    };
    SandboxComponent.prototype.requestData = function (parent) {
        this.treeService.GetNodes(parent.id).subscribe(function (res) { return parent.children = res; }, function (error) { return console.log(error); });
    };
    SandboxComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/components/sandbox/sandbox.html',
            directives: [treeview_component_1.TreeViewComponent, datetime_component_1.DateTimeComponent, select2_component_1.Select2Component]
        }), 
        __metadata('design:paramtypes', [tree_service_1.TreeService, metaobject_service_1.MetaObjectService])
    ], SandboxComponent);
    return SandboxComponent;
}());
exports.SandboxComponent = SandboxComponent;
//# sourceMappingURL=sandbox.component.js.map