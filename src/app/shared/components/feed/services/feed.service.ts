import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterFace } from '../types/getFeedResponse.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeed(url: string): Observable<GetFeedResponseInterFace> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponseInterFace>(fullUrl);
  }
}
