import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAssociateComponent } from '../add-associate/add-associate.component';
import { Store } from '@ngrx/store';
import { deleteAssociate, getassociate, loadAssociate } from 'src/app/store/associate/associate.Action';
import { getassociatelist } from 'src/app/store/associate/associate.selector';
import { Associates } from 'src/app/model/associate';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-associate-list',
  templateUrl: './associate-list.component.html',
  styleUrls: ['./associate-list.component.scss']
})
export class AssociateListComponent implements OnInit {


  assosiateList!: Associates[];
 
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColums: string[] = ["code", "name", "email", "phone", "address", "type", "group", "status", "action"]
  constructor(private dialog:MatDialog,private store:Store) { }

addAssociate() {
this.openDialog(0,'Add Associate')
}
openDialog(code: number,title:string): void {
  this.dialog.open(AddAssociateComponent, {
 
    enterAnimationDuration:'1000ms',
    exitAnimationDuration:'1000ms',
    data: {
      code,
      title
    }
  })
}

ngOnInit(): void {
this.store.dispatch(loadAssociate());
this.store.select(getassociatelist).subscribe((data)=>{
  this.assosiateList = data;
  this.datasource = new MatTableDataSource<Associates>(this.assosiateList);
  this.datasource.paginator = this.paginator;
  this.datasource.sort = this.sort;
})

}

FunctionDelete(code:number){
  if(confirm('do you want to remove?')){
    this.store.dispatch(deleteAssociate({id:code}));
  }
}

FunctionEdit(code:number){
  this.OpenPopup(code, 'Update Associate');
  this.store.dispatch(getassociate({id:code}))
}

OpenPopup(code: number, title: string) {
 // this.store.dispatch(openpopup());
  this.dialog.open(AddAssociateComponent, {
    width: '50%',
    enterAnimationDuration: '1000ms',
    exitAnimationDuration: '1000ms',
    data: {
      code: code,
      title: title
    }
  })

}

}
