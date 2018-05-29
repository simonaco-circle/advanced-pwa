import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../newsletter.service';
import { Optional } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  sub: PushSubscription;
  readonly VAPID_PUBLIC_KEY = 'BFuAbt3v-ve7eqruh7Ra9hXIHAI1aXW7e0KGgjPVCmaFubJt44F9NWoLDxT_nM8SVd3GOL4Nk6e_0-_3dhbI3kg';

  constructor(
    @Optional() private swPush: SwPush,
    private newsletterService: NewsletterService
  ) {}

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
