import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveRegisterComponent } from './views/live-register/live-register.component';
import { LiveListComponent } from './views/live-list/live-list/live-list.component';
import { HomeComponent } from './views/home.component';
import { LocalDataPipePipe } from './shared/pipe/local-data-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LiveRegisterComponent,
    LiveListComponent,
    HomeComponent,
    LocalDataPipePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    LocalDataPipePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
