var x = 5; //"let x which is of type number be equal to 5"
function myFunction() {
    return 4;
}
function error(message) {
    throw new Error(message);
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    Object.defineProperty(MyClass.prototype, "area", {
        get: function () {
            return this._width * this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyClass.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (newWidth) {
            console.log("setting width for square...");
            this._width = newWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyClass.prototype, "height", {
        set: function (newHeight) {
            console.log("setting height for square...");
            this._height = newHeight;
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
var obj = new MyClass();
obj.width = 10;
obj.height = 5;
console.log("getter: ", obj.width);
