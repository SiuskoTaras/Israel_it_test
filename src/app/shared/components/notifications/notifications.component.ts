import { Component, Input, OnInit } from '@angular/core';
import { Messages } from 'src/app/core/models/messages';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input('message') message: Messages;

  constructor() {
  }

  ngOnInit(): void {
  }

}
