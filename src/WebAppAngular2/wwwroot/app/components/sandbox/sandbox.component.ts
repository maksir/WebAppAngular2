import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TreeViewComponent, ITreeNode} from '../treeview/treeview.component';
import {ListViewComponent, ItemTemp} from '../listview/listview.component';
import {ItemTemplateComponent} from '../listview/itemtemplate.component';
import {TreeService} from '../../services/tree.service';

@Component({
	templateUrl: '/app/components/sandbox/sandbox.html',
	directives: [CORE_DIRECTIVES, TreeViewComponent, ListViewComponent, ItemTemplateComponent, ItemTemp]
})
export class SandboxComponent implements OnInit {

	Nodes: Array<ITreeNode>;
	selectedNode: ITreeNode;
	Items: Array<any>;

	constructor(private treeService: TreeService) {
	}

	ngOnInit() {
		this.treeService.GetNodes(0).subscribe(
			res => this.Nodes = res,
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
			res => parent.children = res,
			error=> console.log(error)
		);
	}

	private requestData(parent: ITreeNode) {
		this.treeService.GetNodes(parent.id).subscribe(
			res => parent.children = res,
			error=> console.log(error)
		);
	}

}