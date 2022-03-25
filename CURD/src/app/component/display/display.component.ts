import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() notes: any[];
  @Output() editValue: any=new EventEmitter();
  notesData;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.notesData=JSON.parse(localStorage.getItem('notes'));
    this.notes = this.notesData.sort(
      (noteA: any, noteB: any) =>
        new Date(noteB.notesDate).getTime() -
        new Date(noteA.notesDate).getTime()
    );
  }
  remove(i: any){
    const notesIndex = this.notes.findIndex((note:any) => {
      return note.id === i.id;
    });
    this.notes.splice(notesIndex,1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  edit(edit:any){
    this.editValue.emit(edit);
  }

  backgroundColor(status){
    if(status==true){
      return 'green';
    }
    else{
      return '#DC143C';
    }
  }
}
