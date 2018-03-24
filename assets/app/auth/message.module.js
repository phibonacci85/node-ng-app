import { NgModule } from '@angular/core';
import { MessageComponent } from '../messages/message.component';
import { MessageListComponent } from '../messages/message-list.component';
import { MessageInputComponent } from '../messages/message-input.component';
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from '../messages/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    MessageModule.ctorParameters = function () { return []; };
    return MessageModule;
}());
export { MessageModule };
