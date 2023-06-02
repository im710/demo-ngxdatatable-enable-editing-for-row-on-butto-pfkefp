
import { Component, ViewChild, OnInit } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release/components/datatable.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  data = [
      { descrizione:'My Test', indice:'25', nota: [{test:'cod1'}, {test:'cod2'}] },
      { descrizione:'Best test', indice:'2', nota:[{test:'cod3'}, {test:'cod1'}] },
      { descrizione:'LTest', indice:'9', nota:[{test:'cod1'}, {test:'cod2'}] }
  ];

  note = [
    {label:'cod1', value: 'cod1'},
    {label:'cod2', value: 'cod2'},
    {label:'cod3', value: 'cod3'},
    {label:'cod4', value: 'cod4'}
  ]

  selected = [];
    
  @ViewChild('table') table: DatatableComponent;
  rows = [];
  isEditable = {};

  constructor() {}

  ngOnInit() {
    this.rows = this.data;
    this.rows.forEach(row => 
      {
        let testArr = []; 
        row.nota.forEach(nota => {testArr.push(nota.test)});
        row.selected = testArr;
      }
    )
    console.log(this.rows)
  }    


  // Open/close panel  
  toggleExpandRow(row, expanded) {
    this.table.rowDetail.toggleExpandRow(row);
    if(!expanded){
      this.table.rowDetail.collapseAllRows();
      this.table.rowDetail.toggleExpandRow(row);
    }
    else if (expanded){
      this.table.rowDetail.collapseAllRows();
    }
  }

  // Save row
  save(row, rowIndex){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex]
    console.log("Row saved: "+ rowIndex);
  }

  // Delete row
  delete(row, rowIndex){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex]
    console.log("Row deleted: "+ rowIndex);
  }
}