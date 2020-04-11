import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { PagesModule } from './modules/pages/pages.module';

const modules = [
  BrowserModule,
  AppRoutingModule,
  StoreModule.forRoot({}, {}),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  BrowserAnimationsModule,
  NgbModule,
  PagesModule
];

const components = [
  AppComponent,
  HeaderComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
