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
var common_1 = require('angular2/common');
var metaobject_service_1 = require('../../services/metaobject.service');
var treeview_component_1 = require('../treeview/treeview.component');
var MetaObject = (function () {
    function MetaObject() {
        this.isExpanded = false;
    }
    return MetaObject;
})();
exports.MetaObject = MetaObject;
var MetaObjectComponent = (function () {
    function MetaObjectComponent(mo) {
        this.mo = mo;
        this.currentPage = 0;
        this.pageSize = 12;
        this.pages = [];
        this.startPage = 0;
        this.endPage = 10;
    }
    MetaObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mo.GetList(0).subscribe(function (res) { return _this.Nodes = res; }, function (error) { return console.log(error); });
    };
    MetaObjectComponent.prototype.onSelectNode = function (node) {
        this.selectedNode = node;
        this.currentPage = 0;
        if (this.selectedNode.children.length == 0) {
            this.requestData(node);
        }
        else {
            this.calculatePages();
        }
    };
    MetaObjectComponent.prototype.onRequest = function (parent) {
        this.requestData(parent);
    };
    MetaObjectComponent.prototype.onExpand = function (li, it) {
        if (this.isExpanden(li)) {
            li.classList.remove('expanded');
        }
        else {
            li.classList.add('expanded');
            if (it.children.length == 0) {
                this.requestData(it);
            }
        }
    };
    MetaObjectComponent.prototype.isExpanden = function (li) {
        return li.classList.contains('expanded');
    };
    MetaObjectComponent.prototype.requestData = function (parent) {
        var _this = this;
        this.mo.GetList(parent.id).subscribe(function (res) { return parent.children = res; }, function (error) { return console.log(error); }, function () { return _this.calculatePages(); });
    };
    MetaObjectComponent.prototype.calculatePages = function () {
        var count = Math.ceil(this.selectedNode.children.length / this.pageSize);
        this.pages = Array(count);
        var i = 0;
        for (i; i < count; i++) {
            this.pages[i] = i;
        }
        this.startPage = 0;
        this.endPage = Math.min(this.startPage + 10, this.pages.length);
    };
    MetaObjectComponent.prototype.onSelectPage = function (page) {
        this.currentPage = page;
        this.startPage = Math.max(0, page - 5);
        this.endPage = Math.min(this.startPage + 10, this.pages.length);
    };
    MetaObjectComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/components/metaobject/metaobject.html',
            directives: [common_1.NgClass, treeview_component_1.TreeViewComponent]
        }), 
        __metadata('design:paramtypes', [metaobject_service_1.MetaObjectService])
    ], MetaObjectComponent);
    return MetaObjectComponent;
})();
exports.MetaObjectComponent = MetaObjectComponent;
//# sourceMappingURL=metaobject.component.js.map