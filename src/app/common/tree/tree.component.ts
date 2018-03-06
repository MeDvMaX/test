import { Component, OnInit, Input } from '@angular/core';
import { TreeDataModel } from '../../models/tree.data';

@Component({
  selector: 'base-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input('items') items: Array<TreeDataModel>;

  constructor() { }

  ngOnInit() {
  }

}
