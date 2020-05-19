import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {
  data = [
    {
      title: 'Account Password',
      description: 'Messages from other users will be notified in the form of a station letter'
    },
    {
      title: 'System Messages',
      description: 'System messages will be notified in the form of a station letter'
    },
    {
      title: 'To-do Notification',
      description: 'The to-do list will be notified in the form of a letter from the station'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }
}
