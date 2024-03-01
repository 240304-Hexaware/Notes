package dependencies;

public interface CalculatorInterface {
    int x = 7;

    int add(int[] ...nums);
    int subtract(int[] ...nums);
    int multiply(int[] ...nums);
    int divide(int[] ...nums);



    default int mod(int a, int b) {
        return a % b;
    }
}
