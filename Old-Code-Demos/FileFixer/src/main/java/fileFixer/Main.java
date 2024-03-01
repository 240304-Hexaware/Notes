package fileFixer;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class Main {
    private static final Charset UTF8 = StandardCharsets.UTF_8;

    public static void main(String[] args) throws IOException {
        String path = "testFile2.txt";
        Writer writer = new OutputStreamWriter(new FileOutputStream(path), UTF8);

        List<Segment> fileSegments = new ArrayList<>();
        fileSegments.add(new Segment(15, "Kyle"));
        fileSegments.add(new Segment(15, "Plummer"));
        fileSegments.add(new Segment(8, "01011985"));
        fileSegments.add(new Segment(30, "Kyle.Plummer@Revature.com"));
        fileSegments.add(new Segment(10, "5185555555"));
        fileSegments.add(new Segment(1, "T"));

        for(Segment s : fileSegments) {
            writer.write(s.getContent());
        }

        writer.close();

    }
}
