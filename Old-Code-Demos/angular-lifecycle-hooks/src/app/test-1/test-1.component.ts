import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [],
  templateUrl: './test-1.component.html',
  styleUrl: './test-1.component.css'
})
export class Test1Component {
  service: TestService;
  value: string = "initial value - you shouldn't see this";

  constructor(service: TestService) {
    this.service = service;
    this.value = this.service.value;//we should be able to get service values during construction...
    console.log("Test1Component constructor")
  }
  ngOnChanges(){
    console.log("Test1Component ngOnChanges()")
  }

  ngOnInit() {
    console.log("Test1Component ngOnInit()")
  }

  ngDoCheck() {
    //this.value = this.service.value;
    console.log("Test1Component ngDoCheck()")
  }

  ngAfterContentInit(){
    console.log("Test1Component ngAfterContentInit()")
  }

  ngAfterContentChecked(){
    console.log("Test1Component ngAfterContentChecked()")
  }

  ngAfterViewInit(){
    console.log("Test1Component ngAfterViewInit()")
  }

  ngAfterViewChecked(){
    console.log("Test1Component ngAfterViewChecked()")
  }

  ngOnDestroy(){
    console.log("Test1Component ngOnDestroy()")
  }
}
