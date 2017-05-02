import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Feed } from './feed';

@Injectable()
export class FeedService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private FeedUrl = 'https://api.backand.com/1/objects/status?AnonymousToken=7e507e02-3eaf-401d-b3a9-a33e823d632f';

  constructor(private http: Http) { }

  getFeeds(): Promise<Feed[]> {

    return this.http.get(this.FeedUrl)
               .toPromise()
               .then(response => response.json().data as Feed[])
               .catch(this.handleError);
  }

  create(feed: string): Promise<Feed> {
    return this.http
      .post(this.FeedUrl, JSON.stringify({text: feed, user: "1"}) , {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Feed)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


