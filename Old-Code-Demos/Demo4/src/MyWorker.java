public class MyWorker implements Runnable {
    private String name;

    public MyWorker(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        long threadId = Thread.currentThread().getId();
        for(int i = 0; i < 10; i++) {
            System.out.println(threadId + ", " + name + ": " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
