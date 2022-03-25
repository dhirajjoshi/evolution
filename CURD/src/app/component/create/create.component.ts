import { Component,OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
formSubmitted=false;
notes=[];
_editValueId
  notesFormGroup:FormGroup;
  notesDate;
 
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initializeFormControls();
    // this.notes=JSON.parse(localStorage.getItem('notes'));
  }
  ngAfterContentInit(){
    this.notes=JSON.parse(localStorage.getItem('notes'));
  }

  initializeFormControls(){
    this.notesFormGroup = this.formBuilder.group({
      title:["",[Validators.required,Validators.maxLength(100)]],
      description:['',[Validators.required,Validators.maxLength(1000)]],
      status:['']
    })
  }

  get _notesForm(){
    return this.notesFormGroup.controls;
  }

  onAdd(){
    this.formSubmitted = true;
    if(this.notesFormGroup.valid){
      if(this._editValueId){
        for (let i = 0; i < this.notes.length; i++) {

          if(this.notes[i].id===this._editValueId)
          {
            this.notesDate=new Date();
            this.notes[i]={
              id:this._editValueId,
              title:this._notesForm['title'].value,
              description:this._notesForm['description'].value,
              status:this._notesForm['status'].value,
              notesDate:this.notesDate,
            }
            localStorage.setItem('notes', JSON.stringify(this.notes));
            // this.notesFormGroup.controls['name'].reset();
            // this.notesFormGroup.controls['ndescriptioname'].reset();
            // this.formSubmitted=false;
            document.forms[0].reset();
            this.formSubmitted=false;
            break;
          }
        }
      }
      else{
        //   console.log(this.notesFormGroup.controls)
        //  console.log( this._notesForm['title'].value);
        //   console.log(this._notesForm['description'].value);
          // console.log(this._notesForm['status'].value);
          let temp=null;
          this.notesDate=new Date();
          temp={
            id:uuid(),
            title:this._notesForm['title'].value,
            description:this._notesForm['description'].value,
            status:this._notesForm['status'].value,
            notesDate:this.notesDate,
          }
          // console.log(temp);
          if(temp.status==''||temp.status==null){temp.status=false}
          this.notes.push(temp);  
          localStorage.setItem('notes', JSON.stringify(this.notes));
          // this.notesFormGroup.controls['name'].reset();
          // this.notesFormGroup.controls['ndescriptioname'].reset();
          // this.formSubmitted=false;
          document.forms[0].reset();
          this.formSubmitted=false;
      }  
    }
    else{
      this.notesFormGroup.markAsTouched();
    }
  }
  clean(){
    document.forms[0].reset();
  }
  edit(editValue:any){
    this._editValueId=editValue.id;
    if(editValue.id){
      (<HTMLInputElement>document.getElementById('title')).value=editValue.title;
      (<HTMLInputElement>document.getElementById('description')).value=editValue.description;
      (<HTMLInputElement>document.getElementById('status')).value=editValue.status;
    }
  }
}
