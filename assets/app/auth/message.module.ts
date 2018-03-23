import { NgModule } from '@angular/core';
import { MessageComponent } from '../messages/message.component';
import { MessageListComponent } from '../messages/message-list.component';
import { MessageInputComponent } from '../messages/message-input.component';
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from '../messages/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [MessageService]
})
export class MessageModule {}