import { Component, OnInit, Input } from '@angular/core';
import { TreeDataModel } from '../../../../models/tree.data';

@Component({
  selector: 'tree-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('item') item: TreeDataModel;
  private haveChilds: boolean;
  private visibleChilds: boolean = true;

  constructor() { }

  ngOnInit() {
    this.haveChilds = !!this.item.items;
    this.item.visible = true;
  }

  onItemClick(self, item) {
    this.visibleChilds = !this.visibleChilds;
  }
}
