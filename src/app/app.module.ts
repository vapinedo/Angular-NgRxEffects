import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: environment.production 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
