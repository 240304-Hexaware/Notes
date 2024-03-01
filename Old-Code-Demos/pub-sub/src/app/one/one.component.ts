import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  value: string;
  channelService: ChannelService;
  constructor(channelService: ChannelService) {
    this.value = "";
    this.channelService = channelService;
  }

  publish() {
    this.channelService.publish(this.value);
  }
}
