import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSwipeComponent } from './components/profile-swipe/profile-swipe.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ListOfProfilesComponent } from './components/list-of-profiles/list-of-profiles.component';

const routes: Routes = [
  { path: 'profile-swipe', component: ProfileSwipeComponent },
  { path: 'profile-detail/:id', component: ProfileDetailComponent },
  { path: 'list-profiles', component: ListOfProfilesComponent },
  { path: '', redirectTo: '/profile-swipe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
