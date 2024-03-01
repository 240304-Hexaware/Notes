package lists;

public class MyCustomArrayList<T> implements MyCustomList<T> {
    //implementation of list backed by a dynamic array (which is not a thing in java)
    private Object[] array = new Object[5];

    @Override
    public T get(int i) {
        return (T)array[i];
    }

    @Override
    public void add(T t) {

    }
}
