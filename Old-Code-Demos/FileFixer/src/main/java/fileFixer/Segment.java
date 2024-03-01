package fileFixer;

public class Segment {
    private final int length;
    private final String content;

    public Segment(int length, String content) {
        this.length = length;
        char[] charArray = new char[length];
        for(int i = 0; i < length; ++i){
            charArray[i] = i < content.length() ? content.charAt(i): ' ';
        }
        this.content = String.valueOf(charArray);
    }

    public int getLength() {
        return length;
    }

    public String getContent() {
        return content;
    }
}
