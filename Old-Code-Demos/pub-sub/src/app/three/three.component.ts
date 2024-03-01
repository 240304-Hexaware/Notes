import { Component } from '@angular/core';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent {
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
