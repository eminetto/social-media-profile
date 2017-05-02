import { Component, OnInit } from '@angular/core';

import { Friend }        from './friend/friend';
import { FriendService } from './friend/friend.service';
import { Feed }          from './feed/feed';
import { FeedService }   from './feed/feed.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    feeds:   Feed[]   = [];
    friends: Friend[] = [];
    msg = '';

    constructor(private feedService: FeedService,
                private friendService: FriendService) {}

    ngOnInit(): void {
        this.feedService.getFeeds()
        .then(feeds => this.feeds = feeds);

        this.friendService.getFriends()
        .then(friends => this.friends = friends);
    }

    add(feed: string): void {
        feed = feed.trim();
        if (!feed) {
            this.displayMessage('Empty Status');
            return;
        }
        this.feedService.create(feed)
        .then(feed => {
            this.feeds.push(feed);
        });

    }

    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
     }
}
