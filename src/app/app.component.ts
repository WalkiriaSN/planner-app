import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'To Do List', url: 'to-do-list', icon: 'list' },
    { title: 'Goals', url: 'goals', icon: 'list' },
    { title: 'Images Diary', url: 'images-diary', icon: 'images' },
    { title: 'Video Diary', url: 'video-diary', icon: 'videocam' },
    { title: 'Achievements', url: 'achievments', icon: 'trophy' },
    { title: 'Notes', url: 'notes', icon: 'book' },
    //{ title: 'Tasks', url: 'add-task', icon: 'mail' },
    //{ title: 'Add Notes', url: 'add-note', icon: 'paper-plane' },
    //{ title: 'Add Goals', url: 'add-goals', icon: 'heart' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
