import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-profile-swipe',
  templateUrl: './profile-swipe.component.html',
  styleUrls: ['./profile-swipe.component.scss']
})
export class ProfileSwipeComponent implements OnInit {
  profiles: Profile[] = [];
  currentIndex = 0;
  currentProfile: Profile | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.profiles = profiles;
      this.currentProfile = this.profiles[this.currentIndex];
    });
  }

  onLike(): void {
    alert('Interested');
    this.moveToNextProfile();
  }

  onDislike(): void {
    alert('Not Interested');
    this.moveToNextProfile();
  }

  onShortlist(): void {
    alert('Shortlisted');
  }

  moveToNextProfile(): void {
    this.currentIndex++;
    if (this.currentIndex < this.profiles.length) {
      this.currentProfile = this.profiles[this.currentIndex];
    } else {
      this.currentProfile = undefined; // No more profiles
    }
  }
}
