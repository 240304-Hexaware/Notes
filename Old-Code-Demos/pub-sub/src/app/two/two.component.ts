import { Component } from '@angular/core';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  channelService: ChannelService
  value: string;
  unsubscriber: Function;
  subscribed: boolean;

  constructor(channelService: ChannelService) {
    this.value = "";
    this.channelService = channelService;
    this.subscribed = false;
    this.unsubscriber = () => {console.log("no active subscriptions.")}
  }

  subscribe() {
    this.unsubscriber = this.channelService.subscribe((value: string)=>{this.value = value})
    this.subscribed = true;
  }

  unsubscribe() {
    this.unsubscriber();
    this.subscribed = false;
    this.unsubscriber = () => {console.log("no active subscriptions.")}
  }


}
