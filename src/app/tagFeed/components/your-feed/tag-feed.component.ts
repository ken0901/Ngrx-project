import { Component, OnInit } from '@angular/core';
import { FeedTogglerComponent } from "../../../shared/components/feed-toggler/feed-toggler.component";
import { FeedComponent } from "../../../shared/components/feed/feed.component";
import { PopularTagsComponent } from "../../../shared/components/popularTags/popular-tags.component";
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  standalone: true,
  imports: [FeedTogglerComponent, FeedComponent, PopularTagsComponent, BannerComponent],
  templateUrl: './tag-feed.component.html',
  styleUrl: './tag-feed.component.css'
})
export class TagFeedComponent implements OnInit{
  apiUrl: string = '';
  tagName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug']
      this.apiUrl = `/articles?tag=${this.tagName}`
    });
  }
}
