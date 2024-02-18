import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Associates } from 'src/app/model/associate';
import { addAssociate, updateassociate,  } from 'src/app/store/associate/associate.Action';
import { getassociate } from 'src/app/store/associate/associate.selector';

@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.css']
})
export class AddAssociateComponent implements OnInit {

  title = 'Create Associate'
  isedit = false;
  dialogdata: any;
  associateform!: FormGroup;
  

  constructor(private dialog:MatDialog,private builder: FormBuilder, private ref: MatDialogRef<AddAssociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store:Store ) {
    
  }
  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getassociate).subscribe(res => {
      this.associateform.setValue({
        id: res.id, name: res.name, email: res.email, phone: res.phone,
        address: res.address, group: res.associategroup, type: res.type, status: res.status
      })
    })



    this.associateform = this.builder.group({
      id: this.builder.control(0),
      name: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      phone: this.builder.control('', Validators.required),
      address: this.builder.control('', Validators.required),
      type: this.builder.control('CUSTOMER'),
      group: this.builder.control('level1'),
      status: this.builder.control(true)
    })
  

  }

  ClosePopup() {
    this.ref.close();
  }



  SaveAssociate() {
    if (this.associateform.valid) {
      const _obj: Associates = {
        id: this.associateform.value.id as number,
        name: this.associateform.value.name as string,
        email: this.associateform.value.email as string,
        phone: this.associateform.value.phone as string,
        associategroup: this.associateform.value.group as string,
        address: this.associateform.value.address as string,
        type: this.associateform.value.type as string,
        status: this.associateform.value.status as boolean
      }
      if (_obj.id === 0) {
        this.store.dispatch(addAssociate({ associateObj: _obj }))
      } else {
      this.store.dispatch(updateassociate({ inputdata: _obj }))
      }
      this.ClosePopup();
    }
  }

}


