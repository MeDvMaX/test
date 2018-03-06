import { Component, Input } from '@angular/core';
import { TreeDataModel } from '../../../models/tree.data';

@Component({
  selector: 'tree-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input('items') items: Array<TreeDataModel>;

  constructor() { }
}
