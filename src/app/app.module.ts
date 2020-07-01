import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthorizationGuard} from './core/guards/authorization/authorization.guard';
import {TablePanelModule} from './table-panel/table-panel.module';
import {AuthorizationModule} from './authorization/authorization.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TablePanelModule,
    AppRoutingModule,
    AuthorizationModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

