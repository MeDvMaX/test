import { Component, OnInit } from '@angular/core';
import { TreeDataModel } from '../../models/tree.data';
import { TreeService } from '../../services/tree/tree.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private treeService: TreeService) { }
  public treeData: Array<TreeDataModel>;

  ngOnInit() {

    // this.treeService.items.subscribe((value) => {
    //     this.treeData = value;
    // });

    this.treeService.getAll().subscribe((value) => {
        this.treeData = value;
    });
  }
}
