/*
The purpose of a singleton is to only have exactly one of an object.
 */

public class Singleton {
    /*
    This reference is static because...
     */
    private static Singleton theOneAndOnlyObject = null;

    /*
    Instead of using a constructor to get the object, we "intercept" this behavior, we only allow creation to happen
    via this static method. It must be static because in order to invoke a non-static method there would need to already
    be an object to de-reference.
     */
    public static Singleton getSingleton() {
        if(theOneAndOnlyObject == null) {
            theOneAndOnlyObject = new Singleton();
        }
        return theOneAndOnlyObject;
    }

    //We make the constructor private so that we can control its behavior
    private Singleton(){

    }


}
