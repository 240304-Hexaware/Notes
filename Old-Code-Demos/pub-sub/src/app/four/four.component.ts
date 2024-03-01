import { Component } from '@angular/core';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [],
  templateUrl: './four.component.html',
  styleUrl: './four.component.css'
})
export class FourComponent {
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
