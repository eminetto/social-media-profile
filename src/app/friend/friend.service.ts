import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Friend } from './friend';

@Injectable()
export class FriendService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private FriendsUrl = 'https://api.backand.com/1/objects/friends?pageSize=20&pageNumber=1&anonymousToken=7e507e02-3eaf-401d-b3a9-a33e823d632f';

  constructor(private http: Http) { }

  getFriends(): Promise<Friend[]> {
    return this.http.get(this.FriendsUrl)
               .toPromise()
               .then(response => response.json().data as Friend[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


