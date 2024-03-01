import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lifecycle-hooks';
  value: string;
  service: TestService;

  constructor(service: TestService) {
    this.service = service;
    this.value = this.service.value;
  }

  onTextChange() {
    console.log("text changed...")
    this.service.value = this.value;

  }

  ngOnChanges(){
    console.log("ngOnChanges()")
  }

  ngOnInit() {
    console.log("ngOnInit()")
  }

  ngDoCheck() {
    console.log("ngDoCheck()")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit()")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked()")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit()")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked()")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy()")
  }

}
