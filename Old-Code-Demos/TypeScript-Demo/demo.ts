let x: number = 5; //"let x which is of type number be equal to 5"

function myFunction(): number | string  {//myFunction, which returns string, is defined as follows...
    return 4;
}

function error(message: string): never {
    throw new Error(message);
}

class MyClass { 
    private _width: number; 
    private _height: number; 
    get area() { 
        return this._width * this._height; 
    } 
    get width() {
        return this._width
    }
    set width(newWidth : number){
        console.log("setting width for square...");
        this._width = newWidth;
    }
    set height(newHeight : number){
        console.log("setting height for square...");
        this._height = newHeight;
    }
} 
let obj = new MyClass();

class MyChildClass extends MyClass {
    doSomething(): any {
        return "something"
    }
}

let myObject: MyClass = new MyChildClass();

console.log("getter: ", obj.width)


interface CanDrive {
    accelerate(speed:number): void;
}

let car:CanDrive = {
    accelerate: function (speed:number): void {
        // ...
    }
};

interface Test {
    // overloadMe(number: number): void
    overloadMe(string: string): string
    overloadMe(number: number): number
}

let MyImplementation = {
    overloadMe: function(number: number):number {
        return 5;
    }

    overloadMe: function(string: string): string {
        return "hello";
    }
}

class MyTestClass {
    add(a: number, b: number): number {
        return a+b;
    }

    add(a: string, b: string): string {
        return a+b;
    }
}


// class TestImpl implements Test {
//     overloadMe: function(number: number): number {

//     }
// }
