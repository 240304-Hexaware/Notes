public class Main {

    public static void main(String[] args) {
    //DI - here we inject the dependency to the constructor for MyClass.
        DependentInterface dependentObj = new Subtractor();
        MyClass myClass = new MyClass(dependentObj);

        System.out.println(myClass.math(2, 3));

        Singleton singleton = Singleton.getSingleton();


    }
}