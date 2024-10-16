import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  profile: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    const profileId = +this.route.snapshot.paramMap.get('id')!;

    this.profileService.getProfiles().subscribe(profiles => {
      this.profile = profiles.find(p => +p.id === profileId);
    });
  }
}
