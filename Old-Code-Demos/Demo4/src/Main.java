public class Main {
    public static void main(String[] args) throws InterruptedException {
//        MyWorker worker1 = new MyWorker("Worker1");
//        //MyWorker worker2 = new MyWorker("Worker2");
//
//        Thread thread1 = new Thread(worker1);
//        Thread thread2 = new Thread(worker1);
//
//        thread1.start();
//        thread2.start();
//
//        System.out.println("Waiting for joins...");
//
//        thread1.join();
//        thread2.join();
//
//        System.out.println("...Joined.");


        MyThread thread3 = new MyThread();
        MyThread thread4 = new MyThread();
        thread3.setPriority(10);
        thread4.setPriority(1);
        thread3.start();
        thread4.start();

        //race condition - we don't know which thread will finish the race first.


    }
}