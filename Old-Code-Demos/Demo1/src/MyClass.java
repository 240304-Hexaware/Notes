public class MyClass {
    private DependentInterface dependentObj;

    public MyClass(DependentInterface obj) {
        this.dependentObj = obj;
    }

    public int math(int a, int b) {
        return dependentObj.math(a, b);
    }




}
