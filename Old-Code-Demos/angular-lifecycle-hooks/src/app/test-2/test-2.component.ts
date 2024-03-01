import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-2',
  standalone: true,
  imports: [],
  templateUrl: './test-2.component.html',
  styleUrl: './test-2.component.css'
})
export class Test2Component {
  service: TestService;
  value: string = "initial value - you shouldn't see this";

  constructor(service: TestService) {
    this.service = service;
    console.log("Test2Component constructor")
  }

  ngOnChanges(){
    console.log("Test2Component ngOnChanges()")
  }

  ngOnInit() {
    console.log("Test2Component ngOnInit()")
  }

  ngDoCheck() {
    this.value = this.service.value;//...and this lifecycle hook is also a good place to get the service value
    console.log("Test2Component ngDoCheck()")
  }

  ngAfterContentInit(){
    console.log("Test2Component ngAfterContentInit()")
  }

  ngAfterContentChecked(){
    console.log("Test2Component ngAfterContentChecked()")
  }

  ngAfterViewInit(){
    console.log("Test2Component ngAfterViewInit()")
  }

  ngAfterViewChecked(){
    console.log("Test2Component ngAfterViewChecked()")
  }

  ngOnDestroy(){
    console.log("Test2Component ngOnDestroy()")
  }
}
