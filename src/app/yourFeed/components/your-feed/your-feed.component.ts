import { Component } from '@angular/core';
import { FeedTogglerComponent } from "../../../shared/components/feed-toggler/feed-toggler.component";
import { FeedComponent } from "../../../shared/components/feed/feed.component";
import { PopularTagsComponent } from "../../../shared/components/popularTags/popular-tags.component";
import { BannerComponent } from "../../../shared/components/banner/banner.component";

@Component({
  selector: 'app-your-feed',
  standalone: true,
  imports: [FeedTogglerComponent, FeedComponent, PopularTagsComponent, BannerComponent],
  templateUrl: './your-feed.component.html',
  styleUrl: './your-feed.component.css'
})
export class YourFeedComponent {
  apiUrl = '/articles';
}
