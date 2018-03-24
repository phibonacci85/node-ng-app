import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
var MessageInputComponent = /** @class */ (function () {
    function MessageInputComponent(messageService) {
        this.messageService = messageService;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messageIsEdit
            .subscribe(function (message) {
            _this.message = message;
        });
    };
    MessageInputComponent.prototype.onSubmit = function (form) {
        if (this.message) {
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(function (result) { return console.log(result); });
            this.message = null;
        }
        else {
            var message = new Message(form.value.content, 'John');
            this.messageService.addMessage(message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        }
        form.resetForm();
    };
    MessageInputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.resetForm();
    };
    MessageInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-input',
                    templateUrl: './message-input.component.html'
                },] },
    ];
    /** @nocollapse */
    MessageInputComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessageInputComponent;
}());
export { MessageInputComponent };
