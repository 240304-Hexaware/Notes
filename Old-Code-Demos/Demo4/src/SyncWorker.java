public class SyncWorker {


/*
lock is a shared object which is used to group the synchronized blocks, any block that shares the lock
won't be able to enter the block while another is executing it.
 */

    public static synchronized void syncStaticMethod() {
        /*
        because static methods are part of the class, not any instance, only one thread can be executing in this block.
        If another instance of this class tries to "enter" the block, that is execute statements within, it will
        wait.
         */

    }

    public synchronized void syncMethod() {
        /*
        only one thread per instance can enter this block, all other instances of this object will be blocked
        trying to execute the next instruction inside the block. The blocked thread will wait.
         */

    }


    public void nonSyncedMethod(Object lock) {
        /*
        Synchronized methods like those above use the class as a locking mechanism, that is other instances
        of that class will be "locked out" of synchronized blocks while any of them has it locked. Synchronized blocks
        like this one below do not use their owning object as the locking mechanism, you can provide any lock.

        Any block which shares this lock (regardless of class) will synchronize together.
         */
        synchronized(lock) {

        }
    }

    public static void synchronizedCounting() {

    }

    /*
    Keep in mind that a synchronized block is "reentrant", this means that while the block is locked
    the thread that locked it can continuously re-enter without being blocked. Threads won't block themselves.

    A common pitfall: It's very likely that a thread can unlock and re-lock the same resource over and over never
    letting anyone else use it. Be careful when you have a worker thread running on a loop and re-locking the same
    resources over and over. It may be necessary to introduce a delay so that threads won't immediately re-lock the
    resource.
     */
}
