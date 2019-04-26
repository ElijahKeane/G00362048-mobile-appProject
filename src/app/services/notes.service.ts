import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Notes } from '../interface/note';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public note: Notes[] = [];
  public loaded: boolean = false;

  constructor(private storage: Storage) {}

  load(): Promise<boolean> {
    //returns a promise so we know when the operation is completed
    return new Promise((resolve) =>{
      this.storage.get('notes').then((notes) => {
        //this.notes only returns values if they were stored
        if(notes != null)
        {
          this.note = notes;
        }
        this.loaded = true;
        resolve(true);

      });
    });
}
}
save(); void{
  //saves the current array of notes
  this:Storage.set('notes', this.notes),
}

getNote(id); Notes ;{
  //gets the note that has the same id as the one passedin
  return this.notes.find(note => note.id === id);
}
//delete note function
deleteNote(note); void {
  //finds index in the array in the note that was passed through
  let index = this.notes.indexOf(note),
  //deltes this element of the array and saves after 
  if(index, > -1,);{
    this.notes.splice(index, 1);
    this.save();
  }

createNote(title); void {
  //adds 1 to largest id to create unique id for each note
  let id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1,

  this:note.push({
    id: id.toString(),
    title: title,
    body: ''
  }),
  this.save(),
}








