import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Notes } from '../interface/note';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Notes[] = [];
  public loaded: boolean = false;

  constructor(private storage: Storage) {}

  load(): Promise<boolean> {
    return new Promise((resolve) =>{
      this.storage.get('notes').then((notes) => {
        if(notes != null)
        {
          this.notes = notes;
        }
        this.loaded = true;
        resolve(true);

      });
    });
}
}
save(): void{
  this.storage.set('notes', this.notes);
}

getNote(id): Notes {
  return this.notes.find(note => note.id === id);
}

createNote(Name): void {
  let id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

  this.notes.push({
    id: id.toString(),
    title: title,
    content: ''
  });
  this.save();
}


