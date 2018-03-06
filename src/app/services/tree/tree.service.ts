import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { TreeDataModel } from '../../models/tree.data';

@Injectable()
export class TreeService {

  constructor(private httpClient: HttpClient) { }

  _items: Observable<Array<TreeDataModel>> = new Observable();
  _tempItems: Observable<Array<TreeDataModel>> = new Observable();
  

  public get items() :Observable<Array<TreeDataModel>> {
    if (!this._items) {
      this.getAll()
          .subscribe(
            items => {
              // debugger
              // this._items.next()
              this._tempItems = new Observable(observer => {
                observer.next(items);
              });
              this._tempItems = items;
              return this._tempItems;
            }
          );
    } else {
      return this._tempItems;
    }
  }

  public getAll() :Observable<any> {
    return this.httpClient.get(environment.treeData);
  }

  // public filterBy(text) {
  //   this._tempItems = this._items;
  //   let tempItem;
  //   this._tempItems.forEach(item => {
      
  //     if (item.items) {
  //       if (this.filter(text, item.items) || ~item.title.indexOf(text)) {

  //       }
  //     } else {
  //       if (~item.title.indexOf(text)) {
  //         item = undefined;
  //       }
  //     }
  //   });

  //   return this._tempItems;
  // }

  private filter(text, items) {
    items.forEach(item => {
      
    });
  }
}
