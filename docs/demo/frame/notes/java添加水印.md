---
title: java为word、excel、pdf、ppt、图片添加图片水印（文字水印同理）
---
# java为word、excel、pdf、ppt、图片添加图片水印（文字水印同理）

::: tip 提示
使用idea开发，所需依赖如下：&lt;br/&gt;
spire的下载、使用，代码中会给出网址。idea中选中右键，添加为库即可使用。
:::

&lt;img src="/images/shuiyin_1.png"&gt;

```xml
    <!--使用spire，导入的jar-->        
    <dependency>
        <groupId>e-iceblue</groupId>
        <artifactId>spire.office.free</artifactId>
        <version>5.3.1</version>
        <scope>system</scope>
        <systemPath>${project.basedir}/lib/spire.office.free-5.3.1.jar</systemPath>
    </dependency>

    <dependency>
        <groupId>org.apache.pdfbox</groupId>
        <artifactId>pdfbox</artifactId>
        <version>2.0.25</version>
    </dependency>

    <dependency>
        <groupId>com.itextpdf</groupId>
        <artifactId>itextpdf</artifactId>
        <version>5.5.13</version>
    </dependency>

    <!--压缩图片，保持原像素-->
    <dependency>
        <groupId>org.imgscalr</groupId>
        <artifactId>imgscalr-lib</artifactId>
        <version>4.2</version>
    </dependency>
```

还需要一张白色图片，作用在于可以设置水印图片的透明度（spire没有提供方法）

&lt;img src="/images/shuiyin_2.png"&gt;

**具体代码如下：**

```java
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.lang.UUID;
import cn.hutool.core.util.StrUtil;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfGState;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.spire.doc.*;
import com.spire.doc.FileFormat;
import com.spire.pdf.PdfDocument;
import com.spire.pdf.PdfPageBase;
import com.spire.pdf.PdfPageSize;
import com.spire.pdf.graphics.PdfMargins;
import com.spire.presentation.Presentation;
import com.spire.presentation.collections.SlideCollection;
import com.spire.presentation.drawing.BackgroundType;
import com.spire.presentation.drawing.FillFormatType;
import com.spire.presentation.drawing.IImageData;
import com.spire.presentation.drawing.PictureFillType;
import com.spire.xls.ExcelVersion;
import com.spire.xls.ViewMode;
import com.spire.xls.Workbook;
import com.spire.xls.Worksheet;
import com.spire.xls.collections.WorksheetsCollection;
import com.wuwei.common.config.WuWeiConfig;

import java.awt.*;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.cos.COSName;
import org.apache.pdfbox.io.MemoryUsageSetting;
import org.apache.pdfbox.multipdf.PDFMergerUtility;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.apache.pdfbox.pdmodel.graphics.state.PDExtendedGraphicsState;
import org.imgscalr.Scalr;
import org.springframework.core.io.ClassPathResource;


import javax.imageio.ImageIO;

import static java.awt.image.BufferedImage.TYPE_INT_ARGB;


/**
 * jar下载地址：https://repo.e-iceblue.cn/#browse/browse:maven-public:e-iceblue，下载free的;
 * <p>
 * 使用文档：https://www.e-iceblue.cn/tutorials.html，查看...for java的文档
 * <p>
 * 为下列文件添加图片水印：
 * <p>
 * word；
 * <p>
 * excel：本质上是添加图片页眉，且在正常模式下不可见，仅在页面布局模式或打印预览模式可见；也可添加背景图片；
 * <p>
 * ppt：本质是添加背景图片；
 * <p>
 * pdf；
 */
@Slf4j
public class WaterMarkUtils {

    /**
     * 100为原大小；
     * word水印缩放大小;
     */
    public static final int SIZE = 100;

    /**
     * 当前模块resource下的静态图片->设置透明度的背景图片
     */
    public static final String BACKGROUND_PATH = "static/" + "white.png";

    /**
     * 仅针对excel文件：
     * 水印图片透明度设置：0->1.0f，逐渐不透明;
     */
    public static final Float ALPHA_EXCEL = 0.2f;

    /**
     * 仅针对ppt文件：
     * 水印图片透明度设置：0->1.0f，逐渐不透明;
     */
    public static final Float ALPHA_PPT = 0.2f;

    /**
     * 仅针对pdf文件：
     * 水印图片透明度设置：0->1.0f，逐渐不透明;
     */
    public static final Float ALPHA_PDF = 0.2f;

    /**
     * 仅针对图片：
     * 水印图片透明度设置：0->1.0f，逐渐不透明;
     */
    public static final Float ALPHA_IMG = 0.4f;

    /**
     * 对水印图片进行缩放的大小设置：
     * 大于370->等比缩小到370；
     * 小于370->等比放大到370；
     */
    public static final int TARGETWIDTH = 370;

    /**
     * 对水印图片进行缩放的大小设置：
     * 大于370->等比缩小到370；
     * 小于370->等比放大到370；
     */
    public static final int TARGETHEIGHT = 370;

    /**
     * "doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf"
     */
    public static final String WORD_TYPE = "word";

    public static final String DOC = "doc";

    public static final String DOCX = "docx";

    public static final String EXCEL_TYPE = "excel";

    public static final String XLS = "xls";

    public static final String XLSX = "xlsx";

    public static final String PPT_TYPE = "ppt";

    public static final String PPT = "ppt";

    public static final String PPTX = "pptx";

    public static final String PDF_TYPE = "pdf";

    public static final String PDF = "pdf";

    public static final String IMG_TYPE = "img";

    public static final String[] IMG = {"bmp", "gif", "jpg", "jpeg", "png"};


    /**
     * 复制文件并添加水印
     *
     * @param filePath          下载文件的绝对路径；
     * @param waterMarkFilePath 水印图片的路径，直接redisCache.getCacheObject(WATER_MARK_FILE_PATH))获取；
     * @return 1.已添加水印文件的绝对路径，再行下载，下载后需自行删除该水印文件；
     * <p>
     * 2.为空，代表不是添加水印的文件，按原路径下载；
     */
    public static String addWaterMark(String filePath, String waterMarkFilePath) {
        String path = "";
        //判断是否有水印图片
        if (!new File(waterMarkFilePath).exists()) {
            log.info("abc-" + "水印图片不存在");
            return path;
        }
        String fileType = getFileType(filePath);
        try {
            if (fileType.equals(WORD_TYPE)) {
                //word文件
                path = wordAddWaterMark(filePath, waterMarkFilePath);
            } else if (fileType.equals(EXCEL_TYPE)) {
                //excel文件
                path = excelAddWaterMark1(filePath, waterMarkFilePath);
            } else if (fileType.equals(PPT_TYPE)) {
                //PPT文件
                path = pptAddWaterMark(filePath, waterMarkFilePath);
            } else if (fileType.equals(PDF_TYPE)) {
                //PDF文件
                path = pdfAddWaterMark2(filePath, waterMarkFilePath);
            } else if (fileType.equals(IMG_TYPE)) {
                //图片
                path = imgAddWaterMark(filePath, waterMarkFilePath);
            }
        } catch (Exception e) {
            log.error("文件添加水印失败" + e.getMessage());
            e.printStackTrace();
        }
        return path;
    }

    /**
     * 为图片添加水印
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    private static String imgAddWaterMark(String filePath, String waterMarkFilePath) throws IOException {
        //获取画布
        BufferedImage read = ImageIO.read(new File(filePath));
        Graphics2D graphics = read.createGraphics();

        //缩放水印图片
        BufferedImage image = ImageIO.read(new File(waterMarkFilePath));
        int width = image.getWidth();
        int height = image.getHeight();
        //设置比例
        float f = getScale(width, height, 0.5f);
        //获取缩放后的宽高
        int w = (int) (width * f);
        int h = (int) (height * f);
        //缩放图片
        Image i = image.getScaledInstance(w, h, Image.SCALE_SMOOTH);
        //设置透明度,0->1,逐渐不透明
        graphics.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, ALPHA_IMG));
        //添加水印并设置在图片的右下角
        graphics.drawImage(i, read.getWidth() - w, read.getHeight() - h, null);

        //释放资源
        graphics.dispose();

        //保存图片
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);
        ImageIO.write(read, filePath.substring(filePath.lastIndexOf(".") + 1), new File(downloadPath));
        return downloadPath;
    }

    public static float getScale(int width, int height, float f) {
        if (width > 3000) {
            f = 0.06f;
        }
        if (width > 1000 && width < 3000) {
            f = 0.1f;
        }
        if (width > 300 && width < 1000) {
            f = 0.3f;
        }
        return f;
    }

    /**
     * pdf文件添加水印，使用itextpdf，速度最快
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    public static String pdfAddWaterMark2(String filePath, String waterMarkFilePath) throws Exception {
        PdfReader reader = new PdfReader(filePath);
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);
        PdfStamper stamper = new PdfStamper(reader, new FileOutputStream(downloadPath));
        PdfGState gs1 = new PdfGState();
        // 设置透明度
        gs1.setFillOpacity(ALPHA_PDF);
        //得到缩放后的图片
        String resizePath = resizeImage(waterMarkFilePath, TARGETWIDTH, TARGETHEIGHT);

        com.itextpdf.text.Image image = com.itextpdf.text.Image.getInstance(resizePath);
        // 获取PDF页数
        int num = reader.getNumberOfPages();
        com.itextpdf.text.Rectangle pagesize;
        float width = 0f;
        float height = 0f;

        //设置缩放后的宽高
        /*float scale = 0.5f;
        if (image.getWidth() < 200 && image.getHeight() < 200) {
            scale = 2f;
        }
        float w = image.getWidth() * scale;
        float h = image.getHeight() * scale;*/
        int x = 0;
        for (int i = 1; i <= num; i++) {
            //得到页面大小
            x++;
            if (x == 1) {
                pagesize = reader.getPageSize(i);
                width = pagesize.getWidth();
                height = pagesize.getHeight();
            }
            //水印图片设置在内容之上，之下用getUnderContent
            PdfContentByte pdfContentByte = stamper.getOverContent(i);
            pdfContentByte.setGState(gs1);
            //设置图片的位置，参数Image.UNDERLYING是作为文字的背景显示。
            image.setAlignment(com.itextpdf.text.Image.UNDERLYING);
            //设置图片缩放比例
            //image.scaleToFit(w, h);
            //设置图片的大小
            //image.scaleAbsolute(200, 200);
            //设置图片的绝对位置
            image.setAbsolutePosition((width - image.getWidth()) / 2, (height - image.getHeight()) / 2);

            pdfContentByte.addImage(image);
        }
        stamper.close();
        reader.close();

        //删除缩放后的图片
        FileUtil.del(resizePath);

        return downloadPath;
    }

    /**
     * pdf文件添加水印，使用pdfbox，速度一般
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    private static String pdfAddWaterMark1(String filePath, String waterMarkFilePath) throws Exception {
        // 添加水印后的文件路径
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);
        // 加载pdf文件
        PDDocument lod = PDDocument.load(new FileInputStream(filePath));

        for (int i = 0; i < lod.getNumberOfPages(); i++) {

            PDPage page = lod.getPage(i);

            PDPageContentStream contentStream = new PDPageContentStream(lod, page, PDPageContentStream.AppendMode.APPEND, true, true);
            PDImageXObject pdImage = PDImageXObject.createFromFile(waterMarkFilePath, lod);

            // 设置透明度
            PDExtendedGraphicsState pdExtGfxState = new PDExtendedGraphicsState();
            pdExtGfxState.setNonStrokingAlphaConstant(ALPHA_PDF);
            pdExtGfxState.setAlphaSourceFlag(true);
            pdExtGfxState.getCOSObject().setItem(COSName.BM, COSName.MULTIPLY);
            contentStream.setGraphicsStateParameters(pdExtGfxState);

            // 设置水印大小及位置
            contentStream.drawImage(pdImage, page.getMediaBox().getWidth() / 2 - 80,
                    page.getMediaBox().getHeight() / 2 - 100, 200, 200);
            contentStream.close();
            lod.save(downloadPath);
        }
        lod.close();
        return downloadPath;
    }

    /**
     * pdf文件添加水印,使用spire添加，但免费版只能转换前十页，故采用PDFBox拆分合并，但速度很慢
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    private static String pdfAddWaterMark(String filePath, String waterMarkFilePath) throws Exception {

        // 创建临时文件夹
        String tmpFolder = "D:\\hams" + "\\tmp_wm_";
        String s = System.currentTimeMillis() + "_" + UUID.randomUUID().toString().replaceAll("-", "");
        new File(tmpFolder + s).mkdir();

        // 添加水印后的文件路径
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);

        // 加载pdf文件
        PDDocument lod = PDDocument.load(new File(filePath));

        // 设置页边距为左右0、上下0
        PdfMargins margins = new PdfMargins(0, 0);

        // 调整画布，设置内容也根据页面的大小进行缩放
        double wScale = (PdfPageSize.A4.getWidth() - 10) / PdfPageSize.A4.getWidth();
        double hScale = (PdfPageSize.A4.getHeight() - 10) / PdfPageSize.A4.getHeight();

        // 定义文件名存储List
        List<String> inputPaths = new ArrayList<>();

        // 获取原来pdf的总页数
        int pageCount = lod.getPages().getCount();
        if (pageCount > 0) {
            // 判断需要生成几个pdf文件
            int n = (int) Math.ceil((double) pageCount / 10);
            int x = 0;
            // 每十页生成一个pdf文件
            for (int i = 1; i <= n; i++) {
                PDDocument pd = new PDDocument();
                // 遍历所有PDF页面
                for (int j = 0; j < 10; j++) {
                    if (x < pageCount) {
                        pd.addPage(lod.getPage(x));
                        x++;
                    }
                }
                // 创建新的pdf文件
                pd.save(tmpFolder + s + "\\" + i + ".pdf");
                // 保存文件存放路径
                inputPaths.add(tmpFolder + s + "\\" + i + ".pdf");
            }

        }
        // 关闭
        lod.close();

        // 执行添加图片水印，合并PDF
        int x = 1;

        List<String> outputPaths = new ArrayList<>();
        // 为拆分的PDF添加水印
        for (String path : inputPaths) {
            // 添加水印后的PDF保存路径
            String outputPath2 = tmpFolder + s + "\\" + "wm_" + x + ".pdf";
            outputPaths.add(outputPath2);
            x++;
            FileInputStream fis = new FileInputStream(path);
            //创建文档
            PdfDocument pdf = new PdfDocument(fis);

            //遍历所有PDF 页面
            for (int i = 0; i < pdf.getPages().getCount(); i++) {
                //添加一页
                PdfPageBase page = pdf.getPages().get(i);

                //设置水印位置和大小
                Rectangle2D.Float rect = new Rectangle2D.Float();
                rect.setRect(page.getClientSize().getWidth() / 2 - 80,
                        page.getClientSize().getHeight() / 2 - 100,
                        200, 200);
                page.setBackgroundImage(waterMarkFilePath);
                page.setBackgroundRegion(rect);
            }

            //保存添加水印后的PDF
            pdf.saveToFile(outputPath2);
            pdf.close();

            // 关闭
            fis.close();
        }

        // 合并添加好水印的PDF
        PDFMergerUtility mergePdf = new PDFMergerUtility();
        for (String outputPath3 : outputPaths) {
            File f = new File(outputPath3);
            if (f.exists() && f.isFile()) {
                // 循环添加要合并的pdf
                mergePdf.addSource(f);
            }
        }
        // 设置合并生成pdf文件名称
        mergePdf.setDestinationFileName(downloadPath);
        // 执行合并pdf
        mergePdf.mergeDocuments(MemoryUsageSetting.setupMainMemoryOnly());

        // 删除所有临时文件
        File files = new File(tmpFolder + s);
        //判断是否为文件夹
        if (files.exists() && files.isDirectory()) {
            //获取该文件夹下的子文件夹
            File[] files2 = files.listFiles();
            //循环子文件夹重复调用delete方法
            for (int i = 0; i < files2.length; i++) {
                files2[i].delete();
            }
            files.delete();
        }
        return downloadPath;
    }

    /**
     * ppt文件添加水印,实际上只是添加背景图片
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    private static String pptAddWaterMark(String filePath, String waterMarkFilePath) throws Exception {
        Presentation presentation = new Presentation();
        presentation.loadFromFile(filePath);

        //获取设置了透明度的水印图片
        //File file = new File(waterMarkFilePath);
        String path = drawTransparent(waterMarkFilePath, ALPHA_PPT);
        File file = new File(path);
        IImageData image = presentation.getImages().append(ImageIO.read(file));

        //获取幻灯片背景属性，设置图片填充
        SlideCollection slides = presentation.getSlides();
        for (int i = 0; i < slides.size(); i++) {
            slides.get(i).getSlideBackground().setType(BackgroundType.CUSTOM);
            slides.get(i).getSlideBackground().getFill().setFillType(FillFormatType.PICTURE);
            slides.get(i).getSlideBackground().getFill().getPictureFill().setFillType(PictureFillType.STRETCH);
            slides.get(i).getSlideBackground().getFill().getPictureFill().getPicture().setEmbedImage(image);
        }

        //保存文档
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);
        presentation.saveToFile(downloadPath, com.spire.presentation.FileFormat.PPSX_2013);

        //删除设置了透明度的水印图片
        file.delete();

        return downloadPath;
    }

    /**
     * word文件添加水印
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    public static String wordAddWaterMark(String filePath, String waterMarkFilePath) throws Exception {
        Document document = new Document();
        document.loadFromFile(filePath);
        PictureWatermark picture = new PictureWatermark();

        //得到缩放后的图片
        String resizePath = resizeImage(waterMarkFilePath, TARGETWIDTH, TARGETHEIGHT);

        //设置图片
        picture.setPicture(resizePath);

        //设置图片大小
        picture.setScaling(SIZE);

        //是否冲刷，true->图片色彩变淡，false->原色彩
        picture.isWashout(true);
        document.setWatermark(picture);

        //保存文档
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);
        document.saveToFile(downloadPath, FileFormat.Docx);

        //删除缩放后的图片
        FileUtil.del(resizePath);

        return downloadPath;
    }

    /**
     * excel文件添加水印;
     * <p>
     * 本质上是添加背景图片
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    private static String excelAddWaterMark1(String filePath, String waterMarkFilePath) throws IOException {
        //创建Workbook实例
        Workbook workbook = new Workbook();
        //加载Excel文档
        workbook.loadFromFile(filePath);

        //得到设置了透明度的水印图片
        String path = drawTransparent(waterMarkFilePath, ALPHA_EXCEL);
        File file = new File(path);
        BufferedImage bufferedImage = ImageIO.read(file);

        //获取工作表
        WorksheetsCollection worksheets = workbook.getWorksheets();
        for (int i = 0; i < worksheets.size(); i++) {
            //将图片设置为工作表的背景图
            worksheets.get(i).getPageSetup().setBackgoundImage(bufferedImage);
        }

        //保存文档
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);
        workbook.saveToFile(downloadPath, ExcelVersion.Version2013);

        //删除设置了透明度的水印图片
        file.delete();

        return downloadPath;
    }

    /**
     * 绘制透明度图片
     *
     * @param waterMarkFilePath 水印图片
     * @param alpha             透明度
     * @return
     * @throws IOException
     */
    public static String drawTransparent(String waterMarkFilePath, float alpha) throws IOException {

        //读取背景图片
        ClassPathResource resource = new ClassPathResource(BACKGROUND_PATH);
        //使用resource.getFile();会报错，打成jar后，没办法通过File的形式访问jar包里面的文件，用流读取文件可以
        InputStream stream = resource.getInputStream();

        // 读取背景图片
        BufferedImage read = ImageIO.read(stream);
        Graphics2D graphics = read.createGraphics();

        //读取水印图片
        BufferedImage image = ImageIO.read(new File(waterMarkFilePath));

        //设置透明度,0->1,逐渐不透明
        graphics.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, alpha));
        //添加水印并设置居中位置
        graphics.drawImage(image, (read.getWidth() - image.getWidth()) / 2, (read.getHeight() - image.getHeight()) / 2, null);

        //释放资源
        graphics.dispose();

        //保存图片
        String downloadPath = WuWeiConfig.getProfile() + "/" + System.currentTimeMillis() + "_" + StrUtil.subAfter(waterMarkFilePath, "/", true);
        ImageIO.write(read, waterMarkFilePath.substring(waterMarkFilePath.lastIndexOf(".") + 1), new File(downloadPath));

        return downloadPath;
    }


    /**
     * excel文件添加水印;
     * <p>
     * 本质上是添加图片页眉，并且水印在正常模式下不可见，仅在页面布局模式或打印预览模式可见。
     *
     * @param filePath
     * @param waterMarkFilePath
     * @return
     */
    private static String excelAddWaterMark(String filePath, String waterMarkFilePath) throws IOException {
        Workbook workbook = new Workbook();
        workbook.loadFromFile(filePath);

        for (Worksheet sheet : (Iterable<Worksheet>) workbook.getWorksheets()) {
            //添加水印
            BufferedImage img = drawText(waterMarkFilePath, sheet.getPageSetup().getPageHeight(), sheet.getPageSetup().getPageWidth());

            //设置页眉
            sheet.getPageSetup().setCenterHeaderImage(img);
            sheet.getPageSetup().setCenterHeader("&G");

            //设置边距
            sheet.getPageSetup().setTopMargin(0);
            sheet.getPageSetup().setLeftMargin(0);
            sheet.getPageSetup().setRightMargin(0);
            sheet.getPageSetup().setBottomMargin(0);

            //将显示模式设置为页面布局模式
            sheet.setViewMode(ViewMode.Layout);
        }

        //保存文档
        String downloadPath = filePath.substring(0, filePath.lastIndexOf("/") + 1) +
                System.currentTimeMillis() + "_" + StrUtil.subAfter(filePath, "/", true);
        workbook.saveToFile(downloadPath, ExcelVersion.Version2010);
        return downloadPath;
    }

    private static BufferedImage drawText(String waterMarkFilePath, double height, double width) throws IOException {

        //创建画布
        BufferedImage img = new BufferedImage((int) width, (int) height, TYPE_INT_ARGB);
        Graphics2D loGraphic = img.createGraphics();

        //使用ImageIO的read方法读取图片
        BufferedImage read = ImageIO.read(new File(waterMarkFilePath));
        //获取缩放后的宽高
        int w = (int) (read.getWidth() * 0.5);
        int h = (int) (read.getHeight() * 0.5);
        //调用缩放方法获取缩放后的图片
        Image i = read.getScaledInstance(w, h, Image.SCALE_DEFAULT);

        //画布上添加水印图片及设置水印位置
        loGraphic.drawImage(i, ((int) width - w) / 2 - 10, ((int) height - h) / 2, null);

        //释放资源
        loGraphic.dispose();
        return img;
    }

    private static String getFileType(String filePath) {
        int i = filePath.lastIndexOf(".");
        String str = filePath.substring(i + 1);
        switch (str) {
            case DOC:
            case DOCX:
                return WORD_TYPE;
            case XLS:
            case XLSX:
                return EXCEL_TYPE;
            case PPT:
            case PPTX:
                return PPT_TYPE;
            case PDF:
                return PDF_TYPE;
        }
        if (Arrays.asList(IMG).contains(str.toLowerCase())) {
            return IMG_TYPE;
        }
        return "";
    }


    /**
     * 画透明字符串图片
     *
     * @param width      图片宽度
     * @param height     图片高度
     * @param fontHeight 字体大小
     * @param drawStr    文字
     * @return
     */
    public static BufferedImage drawTransparentStringPic(int width, int height, Integer fontHeight, String drawStr) {
        try {
            BufferedImage buffImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
            Graphics2D gd = buffImg.createGraphics();
            //设置透明
            buffImg = gd.getDeviceConfiguration().createCompatibleImage(width, height, Transparency.TRANSLUCENT);
            gd = buffImg.createGraphics();

            //设置对线段的锯齿状边缘处理
            gd.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            //设置旋转(旋转角度，旋转x轴定点，y轴定点)，右斜对角
            gd.rotate(Math.toRadians(-47), (width - fontHeight) / 2, height / 2);

            //设置字体
            gd.setFont(new Font("宋体", Font.BOLD, fontHeight));
            //设置颜色
            gd.setColor(Color.RED);
            //画边框
            //gd.drawRect(0, 0, width - 1, height - 1);
            //绘制文字
            gd.drawString(drawStr, (width - fontHeight * drawStr.length()) / 2, height / 2);

            gd.dispose();

            return buffImg;
        } catch (Exception e) {
            return null;
        }
    }

   /* public static void main(String[] args) {
        BufferedImage imgMap = drawTransparentStringPic(700, 700, 39, "奥术是否阿萨德");
        File imgFile = new File("D:\\hams\\asd789888.png");
        try {
            ImageIO.write(imgMap, "PNG", imgFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("生成完成");
    }*/

    /**
     * https://www.baeldung.com/java-resize-image
     * 对水印图片进行缩放的大小设置：
     * 大于370->等比缩小到370；
     * 小于370->等比放大到370；
     *
     * @param waterMarkFilePath 水印图片路径
     * @param targetWidth       缩放设置的宽
     * @param targetHeight      缩放设置的高
     * @return
     * @throws Exception
     */
    public static String resizeImage(String waterMarkFilePath, int targetWidth, int targetHeight) throws Exception {
        BufferedImage originalImage = ImageIO.read(new File(waterMarkFilePath));
        BufferedImage resize = Scalr.resize(originalImage, Scalr.Method.AUTOMATIC, Scalr.Mode.AUTOMATIC, targetWidth, targetHeight, Scalr.OP_ANTIALIAS);

        //保存图片
        String downloadPath = WuWeiConfig.getProfile() + "/" + System.currentTimeMillis() + "_" + StrUtil.subAfter(waterMarkFilePath, "/", true);
        //String downloadPath = "D:\\hams\\r4.png";
        ImageIO.write(resize, "png", new File(downloadPath));

        return downloadPath;

    }

}
```

实测可用。

&gt; 转载至：
&gt;
&gt; [java为word、excel、pdf、ppt、图片添加图片水印（文字水印同理）_fcas的博客-CSDN博客](https://blog.csdn.net/qq_34388185/article/details/126135538?spm=1001.2014.3001.5502)