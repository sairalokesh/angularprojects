import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-drapanddrop',
  templateUrl: './drapanddrop.component.html',
  styleUrls: ['./drapanddrop.component.css']
})
export class DrapanddropComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  public groups: Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'}, {name: 'Item B'}, {name: 'Item C'}, {name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}]
    },
    {
      name: 'Group C',
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}]
    }
  ];


  public constructor() {
  }

  addDropItem(event, groupname, parentIndex) {
    this.groups[parentIndex].items.push(event);
  }

  releaseDrop(item, parentIndex, childIndex) {
    this.groups[parentIndex].items.splice(childIndex, 1);
  }


  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
