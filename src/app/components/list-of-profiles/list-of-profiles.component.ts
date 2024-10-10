import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-profiles',
  templateUrl: './list-of-profiles.component.html',
  styleUrls: ['./list-of-profiles.component.scss']
})
export class ListOfProfilesComponent implements OnInit {
  profiles: any[] = [];
  visibleProfile: any;
  currentIndex: number = 0;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(data => {
      this.profiles = data;
      this.updateVisibleProfile();
    });
  }

  updateVisibleProfile(): void {
    this.visibleProfile = this.profiles[this.currentIndex];
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateVisibleProfile();
    }
  }

  next(): void {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex += 1;
      this.updateVisibleProfile();
    }
  }

  showAlert(action: string): void {
    if (action === 'Yes') {
      this.router.navigate(['/profile-detail', this.visibleProfile.id]);
    } else {
      alert(action + ' selected');
    }
  }
}
