---
title: 批量下载文件-打成压缩包zip下载
---
# 批量下载文件-打成压缩包zip下载

```java
@Data
@Accessors(chain = true)
@ApiModel("所有文档分页查询对象")
public class DocDto {

    /** 分页大小 */
    @ApiModelProperty("分页大小")
    private Integer pageSize;

    /** 当前页数 */
    @ApiModelProperty("当前页数")
    private Integer pageNum;


    /** 文件原名称 */
    @ApiModelProperty("文件原名称")
    private String fileOldName;

    /** 文件id */
    @ApiModelProperty("文件id")
    private String[] fieldIds;
}
```

```java
  /**
     * 批量下载文件-打成压缩包
     */
    @ApiOperation("批量下载文件-打成压缩包")
    @PostMapping("/doc/zip")
    public void downForZip(HttpServletResponse response, @RequestBody DocDto dto) {
        if (ObjectUtil.isEmpty(dto.getFieldIds()) || dto.getFieldIds().length == 0) {
            throw new CustomException("请选择文件");
        }
        ZipOutputStream zos = null;
        BufferedInputStream br = null;
        //获取文件
        LambdaQueryWrapper<TermsDocument> lqw = getDocQueryWrapper(new DocDto().setFieldIds(dto.getFieldIds()));
        List<TermsDocument> result = docMapper.listFilesDel(lqw);

        String fileName = "批量下载的文件包.zip";
        try {
            //重置，清空缓存
            response.reset();
            //设置格式
            response.setContentType("application/x-msdownload");
            //头部信息
            response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(fileName, "UTF-8"));

            // ZipOutputStream来对文件压缩操作
            zos = new ZipOutputStream(response.getOutputStream());
            //写入文件
            Set<String> names = new HashSet<>();
            Map<String, Integer> map = new HashMap<>();
            for (TermsDocument doc : result) {
                //判断文件名是否重复
                String fileOldName = doc.getFileOldName();
                String key = doc.getFileOldName();
                if (names.contains(key)) {
                    if (!map.containsKey(key)) {
                        map.put(key, 1);
                    }
                    Integer count = map.get(key);
                    //重复+1
                    fileOldName = fileOldName.replace(".", "_" + count + ".");
                    count++;
                    map.put(key, count);
                }
                names.add(key);

                String srcPath = FileOperateUtil.convertPath(doc.getFilePath(), doc.getType());
                if (srcPath == null) {
                    continue;
                }
                InputStream inputStream = new FileInputStream(srcPath);
                //多个文件名称重复时zos.putNextEntry()会报错
                zos.putNextEntry(new ZipEntry(fileOldName));
                br = new BufferedInputStream(inputStream);
                byte[] buffer = new byte[1024];
                int r;
                while ((r = br.read(buffer)) != -1) {
                    zos.write(buffer, 0, r);
                }
            }
            zos.flush();
        } catch (Exception e) {
            log.error("文件下载压缩包异常:{}", e.getMessage());
        } finally {
            try {
                zos.close();
                br.close();
            } catch (IOException e) {
                log.error("文件下载关闭流异常:{}", e.getMessage());
            }
        }
    }
```
