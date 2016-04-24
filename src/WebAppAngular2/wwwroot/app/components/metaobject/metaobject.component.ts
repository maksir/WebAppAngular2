import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {MetaObjectService} from '../../services/metaobject.service';
import {TreeViewComponent, ITreeNode} from '../treeview/treeview.component';

export class MetaObject implements ITreeNode {
	id: number;
	name: string;
	typeName: string;
	parentName: string;
	hint: string;
	sortOrder: number;
	value: string;
	mandatory: boolean;
	isExpanded: boolean = false;
	parent: MetaObject;
	children: Array<MetaObject>;
}

@Component({
	templateUrl: '/app/components/metaobject/metaobject.html',
	directives: [NgClass, TreeViewComponent]
})
export class MetaObjectComponent implements OnInit {

	Nodes: Array<MetaObject>;
	selectedNode: MetaObject;

	currentPage: number = 0;
	pageSize: number = 12;
	pages: Array<number> = [];
	startPage: number = 0;
	endPage: number = 10;

	constructor(private mo: MetaObjectService) {
	}

	ngOnInit() {

		this.mo.GetList(0).subscribe(
			res => this.Nodes = res.json(),
			error=> console.log(error)
		);
	}

	onSelectNode(node: MetaObject) {
		this.selectedNode = node;
		this.currentPage = 0;
		if (this.selectedNode.children.length == 0) {
			this.requestData(node);
		}
		else {
			this.calculatePages();
		}
	}

	onRequest(parent: MetaObject) {
		this.requestData(parent);
	}

	onExpand(li: HTMLLIElement, it: MetaObject) {
		if (this.isExpanden(li)) {
			li.classList.remove('expanded');
		}
		else {
			li.classList.add('expanded');

			if (it.children.length == 0) {
				this.requestData(it);
			}
		}

	}

	isExpanden(li: HTMLLIElement): boolean {
		return li.classList.contains('expanded')
	}

	private requestData(parent: MetaObject) {
		this.mo.GetList(parent.id).subscribe(
			res => parent.children = res.json(),
			error=> console.log(error),
			()=> this.calculatePages()
		);
	}

	calculatePages() {

		let count = Math.ceil(this.selectedNode.children.length / this.pageSize);

		this.pages = Array<number>(count);

		let i = 0;
		for (i; i < count; i++){
			this.pages[i] = i;
		}
		this.startPage = 0;
		this.endPage = Math.min(this.startPage + 10, this.pages.length);
	}

	onSelectPage(page: number) {
		this.currentPage = page;
		this.startPage = Math.max(0, page - 5);
		this.endPage = Math.min(this.startPage + 10, this.pages.length);
	}
}