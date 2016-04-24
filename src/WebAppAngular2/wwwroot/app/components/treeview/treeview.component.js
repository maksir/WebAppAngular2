System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TreeViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TreeViewComponent = (function () {
                function TreeViewComponent() {
                    this.onSelectedChanged = new core_1.EventEmitter();
                    this.onRequestNodes = new core_1.EventEmitter();
                }
                TreeViewComponent.prototype.onSelectNode = function (node) {
                    this.onSelectedChanged.emit(node);
                };
                TreeViewComponent.prototype.onExpand = function (node) {
                    node.isExpanded = !node.isExpanded;
                    if (node.isExpanded && node.children.length == 0) {
                        this.onRequest(node);
                    }
                    //if (this.isExpanden(li)) {
                    //	li.classList.remove('expanded');
                    //}
                    //else {
                    //	li.classList.add('expanded');
                    //	if (node.children.length == 0) {
                    //		this.onRequest(node);
                    //	}
                    //}
                };
                TreeViewComponent.prototype.onRequest = function (parent) {
                    this.onRequestNodes.emit(parent);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TreeViewComponent.prototype, "Nodes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TreeViewComponent.prototype, "SelectedNode", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TreeViewComponent.prototype, "onSelectedChanged", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TreeViewComponent.prototype, "onRequestNodes", void 0);
                TreeViewComponent = __decorate([
                    core_1.Component({
                        selector: "tree-view",
                        templateUrl: "/app/components/treeview/treeview.html",
                        directives: [TreeViewComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreeViewComponent);
                return TreeViewComponent;
            }());
            exports_1("TreeViewComponent", TreeViewComponent);
        }
    }
});
//# sourceMappingURL=treeview.component.js.map