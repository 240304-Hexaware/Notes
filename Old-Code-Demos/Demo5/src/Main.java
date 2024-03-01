public class Main {
    public static void main(String[] args) {

        MyFunctionalInterface squareIt = (int number) -> number*number; //ad-hoc anonymous functions
        MyFunctionalInterface doubleIt = (int number) -> {return number*2;};

        System.out.println(squareIt.doMath(5));
        System.out.println(doubleIt.doMath(5));





//        (int number) -> {number*number} //ad-hoc anonymous functions
//
//        }
//
//                public int function(int number) {
//            return number*number;
//        }
    }
}