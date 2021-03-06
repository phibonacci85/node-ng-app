import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';
import { MessageModule } from './auth/message.module';
import { authRouting } from './auth/auth.routing';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HttpClientModule,
    MessageModule
  ],
  providers: [
    AuthService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}