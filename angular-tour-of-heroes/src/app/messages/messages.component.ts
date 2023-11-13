import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
    messages: string[] | undefined;

    constructor(public messageService: MessageService) {

        this.messages = messageService.getMessages();
    }



}
