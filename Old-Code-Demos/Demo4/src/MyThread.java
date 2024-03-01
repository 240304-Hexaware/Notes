public class MyThread extends Thread{
    @Override
    public synchronized void start() {
        /*
        Start spins up a separate process (thread) and calls run.
         */
        super.start();
    }

    @Override
    public void run() {
        //Run is the entry point for this thread of execution, just like main() but for a thread.
        long threadId = Thread.currentThread().getId();
        for(int i = 0; i < 10; i++) {
            System.out.println(threadId + ": " + i);
//            try {
//                //Thread.sleep(500);
//            } catch (InterruptedException e) {
//                throw new RuntimeException(e);
//            }
        }
    }
}
