import { Component, OnInit, Input } from '@angular/core';
import { TreeDataModel } from '../../../models/tree.data';
import { TreeService } from '../../../services/tree/tree.service'

@Component({
  selector: 'tree-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input('items') items: Array<TreeDataModel>;

  private tempItems: Array<TreeDataModel>;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
  }

  onSearch(event) {
    this.filterBy(event.target.value);
  }

  filterBy(text) {
    let tempItem;
    this.items.forEach(item => {
      item.visible = false;
      if (!text) {
        item.visible = true;
      } else if (item.items) {
        if (this.filter(text, item.items) || ~item.title.indexOf(text)) {
          item.visible = true;
        }
      } else {
        if (~item.title.indexOf(text)) {
          item.visible = true;
        }
      }
    });
  }

  filter(text, items) {
    let visible;
    items.forEach(item => {
      if (item.items) {
        visible = ~item.title.indexOf(text) || this.filter(text, item.items);
      } else {
        visible = ~item.title.indexOf(text);
      }
      if (visible) {
        return true;
      }
    });
  }

}
