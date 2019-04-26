import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { Notes } from '../interface/note';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private note:Notes;

  constructor(private route: ActivatedRoute, private notesService: NotesService, private navCtrl: NavController) { 
    //placholder until actual note is entered
    this.note = {
      id: '',
      title: '',
      Body: ''
    };
  }

  ngOnInit() {
    //gets note id from the url
    let noteId = this.route.snapshot.paramMap.get('id');

    //checks if data has loaded before getting the note
    if(this.notesService.loaded)
    {
      this.note = this.notesService.getNote(noteId)
    } 
    else {
      this.notesService.load().then(() => {
        this.note = this.notesService.getNote(noteId)
      });
    }
  }

  deleteNote(){
    this.notesService.deleteNote(this.note);
    this.navCtrl.navigateBack('/notes');
  }
}


  updateNote(){
    this.notesService.save();
  }

