import { Component } from '@angular/core';
import { RemoteService, Obj } from '../remote.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  remote: RemoteService;
  value: string;
  constructor(remote: RemoteService) {
    this.value = "";
    this.remote = remote;
  }

  setValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  submit() {
    this.remote.create({value: this.value}).subscribe(()=>console.log("results received"))
  }

  private resolve: Function|null = null
  arrived = false;
  reset() {//whatever
  }
  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('Hello User!!!!');
      this.arrived = true;
    }
  }

}
