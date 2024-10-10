import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ProfileSwipeComponent } from './components/profile-swipe/profile-swipe.component';
import { ListOfProfilesComponent } from './components/list-of-profiles/list-of-profiles.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailComponent,
    ProfileSwipeComponent,
    ListOfProfilesComponent,
    // add other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    BrowserAnimationsModule,
    MatToolbarModule,   // Importing Angular Material Toolbar
    MatButtonModule,    // Importing Angular Material Button
    MatCardModule,      // Importing Angular Material Card
    MatIconModule,
    HttpClientModule    // Importing HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
