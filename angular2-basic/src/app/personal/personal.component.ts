import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-2-data-table';

import { MockedPersonalModel } from './shared';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
    @ViewChild(DataTable) personalTable: DataTable;

    itemResource = new DataTableResource(MockedPersonalModel);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    ngOnInit() {

    }

    reloadItems(params) {
        console.log(params);
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);

        return 'rgb(255, 255, 197)';
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }


    actionClicked(item) {
        console.log('Clicked: ' + item.name);
    }

}