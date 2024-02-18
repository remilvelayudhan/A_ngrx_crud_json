import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssociateComponent } from './components/Associate/add-associate/add-associate.component';
import { AssociateListComponent } from './components/Associate/associate-list/associate-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssociateReducer } from './store/associate/associate.Reducer';
import { AssociateEffect } from './store/associate/associate.Effect';
import { HttpClientModule } from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddAssociateComponent,
    AssociateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule,
    StoreModule.forRoot({associate:AssociateReducer}, {}),
    EffectsModule.forRoot([AssociateEffect]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
