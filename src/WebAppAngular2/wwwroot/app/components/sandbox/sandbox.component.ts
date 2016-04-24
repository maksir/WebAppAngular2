import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {TreeViewComponent, ITreeNode} from '../treeview/treeview.component';
import {TreeService} from '../../services/tree.service';
import {MetaObjectService} from '../../services/metaobject.service';
import {DateTimeComponent} from '../datetime.component'
import {Select2Component} from '../select2.component'
import {MyInputComponent} from '../myInput.component';

@Component({
	templateUrl: '/app/components/sandbox/sandbox.html',
	directives: [TreeViewComponent, DateTimeComponent, Select2Component, FORM_DIRECTIVES, MyInputComponent]
})
export class SandboxComponent implements OnInit {

	MoList: Array<any>;
	currentMo: number = 14;

	Nodes: Array<ITreeNode>;
	selectedNode: ITreeNode;
	Items: Array<any>;
	currentDate = "24.09.1976 06:30";

	constructor(private treeService: TreeService, private moService: MetaObjectService) {
	}

	click() {
		this.currentMo = 40;
	}

	ngOnInit() {
		this.treeService.GetNodes(0).subscribe(
			res => this.Nodes = res.json(),
			error => console.log(error)
		);

		this.moService.GetList(56).subscribe(
			res => this.MoList = res.json(),
			error => console.log(error)
		);

		this.Items = new Array<any>();
		this.Items.push({ id: 1, name: 'first' }, { id: 2, name: 'second' });
	}

	onSelectNode(node: ITreeNode) {
		this.selectedNode = node;
	}

	onRequest(parent: ITreeNode) {
		this.treeService.GetNodes(parent.id).subscribe(
			res => parent.children = res.json(),
			error=> console.log(error)
		);
	}

	private requestData(parent: ITreeNode) {
		this.treeService.GetNodes(parent.id).subscribe(
			res => parent.children = res.json(),
			error=> console.log(error)
		);
	}

}