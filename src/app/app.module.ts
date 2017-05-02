import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { FeedService }   from './feed/feed.service';
import { FriendService } from './friend/friend.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ FeedService, FriendService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
