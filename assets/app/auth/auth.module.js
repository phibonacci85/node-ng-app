import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { LogoutComponent } from './logout.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LogoutComponent,
                        SignupComponent,
                        SigninComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        authRouting
                    ],
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = function () { return []; };
    return AuthModule;
}());
export { AuthModule };
