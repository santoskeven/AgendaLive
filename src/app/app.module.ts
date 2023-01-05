import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalDataPipePipe } from './shared/pipe/local-data-pipe.pipe';
import { HomeComponent } from './views/home.component';
import { LiveListComponent } from './views/live-list/live-list/live-list.component';
import { LiveRegisterComponent } from './views/live-register/live-register.component';
// import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    LocalDataPipePipe,
    LiveListComponent,
    LiveRegisterComponent,
    HomeComponent,
    // TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalDataPipePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
