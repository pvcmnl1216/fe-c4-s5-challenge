import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../note.service';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-select-note-view',
  templateUrl: './select-note-view.component.html',
  styleUrls: ['./select-note-view.component.css']
})
export class SelectNoteViewComponent implements OnInit {
  // image: any;
  submitStatus: any;
  constructor(private activatedRoute: ActivatedRoute, 
    private noteService: NoteService,
    private routeService: RouteService) { 
}

note: Note = {  title: '', content:''};
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getNote(+id).subscribe((data) => {
        this.note = data;
      })
    });
  }

  deleteNote() {
    this.noteService.DeleteNote(this.note.id).subscribe(data=>{  
      this.submitStatus = true;
      this.routeService.toHome();
    });
  }

  editNote() {
    this.noteService.editNote(this.note?.id, this.note).subscribe(data => {
      this.note = data;
      this.submitStatus = true;
      this.routeService.toHome();  
      
    })
  }


  canDeactivate() {
    if (!this.submitStatus)
        this.submitStatus = confirm("You have not made any change, Are you sure you want to leave?");
    return this.submitStatus;
}

}