import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  recentValue: string;
  subscribers: Map<number, Function>;
  sequence: number;

  constructor() { 
    this.sequence = 0;
    this.recentValue = "";
    this.subscribers = new Map<number, Function>();
  }

  subscribe(callback: Function): Function {
    let id = ++this.sequence;
    this.subscribers.set(id, callback);
    callback(this.recentValue);
    return ()=>{this.unsubscribe(id)}
  }

  unsubscribe(id: number) {
    this.subscribers.delete(id);
  }

  publish(value: string) {
    this.recentValue = value;
    for(let [key, callback] of this.subscribers) {
      callback(value);
    }
  }
}