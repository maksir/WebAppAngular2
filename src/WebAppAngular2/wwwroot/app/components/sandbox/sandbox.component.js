System.register(['angular2/core', 'angular2/common', '../treeview/treeview.component', '../../services/tree.service', '../../services/metaobject.service', '../datetime.component', '../select2.component', '../dropdown/dropdown.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, treeview_component_1, tree_service_1, metaobject_service_1, datetime_component_1, select2_component_1, dropdown_component_1;
    var SandboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (treeview_component_1_1) {
                treeview_component_1 = treeview_component_1_1;
            },
            function (tree_service_1_1) {
                tree_service_1 = tree_service_1_1;
            },
            function (metaobject_service_1_1) {
                metaobject_service_1 = metaobject_service_1_1;
            },
            function (datetime_component_1_1) {
                datetime_component_1 = datetime_component_1_1;
            },
            function (select2_component_1_1) {
                select2_component_1 = select2_component_1_1;
            },
            function (dropdown_component_1_1) {
                dropdown_component_1 = dropdown_component_1_1;
            }],
        execute: function() {
            SandboxComponent = (function () {
                function SandboxComponent(treeService, moService) {
                    this.treeService = treeService;
                    this.moService = moService;
                    this.currentMo = 4;
                    this.currentDate = "24.09.1976 06:30";
                }
                SandboxComponent.prototype.click = function () {
                    this.currentMo = 5;
                };
                SandboxComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.treeService.GetNodes(0).subscribe(function (res) { return _this.Nodes = res.json(); }, function (error) { return console.log(error); });
                    this.moService.GetList(56).subscribe(function (res) { return _this.MoList = res.json(); }, function (error) { return console.log(error); });
                    this.Items = new Array();
                    this.Items.push({ id: 1, name: 'first' }, { id: 2, name: 'second' });
                };
                SandboxComponent.prototype.onSelectNode = function (node) {
                    this.selectedNode = node;
                };
                SandboxComponent.prototype.onRequest = function (parent) {
                    this.treeService.GetNodes(parent.id).subscribe(function (res) { return parent.children = res.json(); }, function (error) { return console.log(error); });
                };
                SandboxComponent.prototype.requestData = function (parent) {
                    this.treeService.GetNodes(parent.id).subscribe(function (res) { return parent.children = res.json(); }, function (error) { return console.log(error); });
                };
                SandboxComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/components/sandbox/sandbox.html',
                        directives: [treeview_component_1.TreeViewComponent, datetime_component_1.DateTimeComponent, select2_component_1.Select2Component, common_1.FORM_DIRECTIVES, dropdown_component_1.DropDownComponent]
                    }), 
                    __metadata('design:paramtypes', [tree_service_1.TreeService, metaobject_service_1.MetaObjectService])
                ], SandboxComponent);
                return SandboxComponent;
            }());
            exports_1("SandboxComponent", SandboxComponent);
        }
    }
});
//# sourceMappingURL=sandbox.component.js.map