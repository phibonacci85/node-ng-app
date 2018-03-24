import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('/');
        }, function (error) {
            console.log(error);
        });
        this.myForm.reset();
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signin',
                    templateUrl: './signin.component.html'
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return [
        { type: AuthService, },
        { type: Router, },
    ]; };
    return SigninComponent;
}());
export { SigninComponent };
