import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  columnDefs:any;
  rowData:any;

  ngOnInit(): void {
    
    this.rowData=[
      {"ID":1,"Name":"Abhishek","Address":"ABC","FName":"ABC","MName":"ABC","Contact":"1234123412","Designation":"ABC"},
      {"ID":2,"Name":"Abhishek","Address":"ABC","FName":"ABC","MName":"ABC","Contact":"1234123412","Designation":"ABC"},
      {"ID":3,"Name":"Abhishek","Address":"ABC","FName":"ABC","MName":"ABC","Contact":"1234123412","Designation":"ABC"},
      {"ID":4,"Name":"Abhishek","Address":"ABC","FName":"ABC","MName":"ABC","Contact":"1234123412","Designation":"ABC"},
      {"ID":5,"Name":"Abhishek","Address":"ABC","FName":"ABC","MName":"ABC","Contact":"1234123412","Designation":"ABC"},
      {"ID":6,"Name":"Abhishek","Address":"ABC","FName":"ABC","MName":"ABC","Contact":"1234123412","Designation":"ABC"},
      {"ID":7,"Name":"Abhishek","Address":"ABC","FName":"ABC","MName":"ABC","Contact":"1234123412","Designation":"ABC"}
    ];

    this.columnDefs = [
      {headerName: 'ID', field: 'ID'},
      {headerName: 'Name', field: 'Name'},
      {headerName: 'Address', field: 'Address'},
      {headerName: 'FName', field: 'FName'},
      {headerName: 'MName', field: 'MName'},
      {headerName: 'Contact No', field: 'Contact'},
      {headerName: 'Designation', field: 'Designation', editable: true}
  ];
  }
  title = 'TestProject';
}
