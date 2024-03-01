import { Component } from '@angular/core';
import { Obj, RemoteService } from '../remote.service';
import { CommonModule, NgFor } from '@angular/common';



@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {
  remote: RemoteService;

  constructor(remote: RemoteService) {
    this.remote = remote;
    this.objects = [];
    this.values = "";
    this.remote.get().subscribe((results: Object)=>{this.objects.push(results as Obj)})
    for(let obj of this.objects) {
      this.values += obj.value + ", "
    }
  }

  objects: Obj[]
  values: string;



}
