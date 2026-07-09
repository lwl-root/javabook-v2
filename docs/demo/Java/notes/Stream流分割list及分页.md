---
title: Stream常见操作
---
# Stream常见操作
## 一.Stream流分割list及分页

```java
   /**
     * Description: Java8 Stream分割list集合
     * @param list 集合数据
     * @param splitSize 几个分割一组
     * @return 集合分割后的集合
     */
    public static <T> List<List<T>> splitList(List<T> list, int splitSize) {
        //判断集合是否为空
        if (CollectionUtils.isEmpty(list))
            return Collections.emptyList();
        //计算分割后的大小
        int maxSize = (list.size() + splitSize - 1) / splitSize;
        //开始分割
        return Stream.iterate(0, n -> n + 1)
                .limit(maxSize)
                .parallel()
                .map(a -> list.parallelStream().skip(a * splitSize).limit(splitSize).collect(Collectors.toList()))
                .filter(b -> ObjectUtil.isNotEmpty(b))
                .collect(Collectors.toList());
    }
```

```java
Page page = new Page();
if (ObjectUtil.isNotNull(dto.getPageNum()) && ObjectUtil.isNotNull(dto.getPageSize())) {
    page.setCurrent(dto.getPageNum());
    page.setSize(dto.getPageSize());
}

//分页
List<SysUser> pageList = userList.stream().skip((page.Current() - 1) *page.getSize()).limit(page.getSize()).collect(Collectors.toList());

page.setTotal(userList.size());
page.setPages((userList.size() + page.getSize() - 1) / page.getSize()); //共多少页
page.setRecords(vos);
return page;
```

### page源码：

```java
package com.baomidou.mybatisplus.extension.plugins.pagination;

public class Page<T> implements IPage<T> {
    private static final long serialVersionUID = 8545996863226528798L;
    protected List<T> records; //数据集合
    protected long total; //总条数
    protected long size; //分页大小
    protected long current; //当前页
    protected List<OrderItem> orders;
    protected boolean optimizeCountSql;
    protected boolean searchCount;
    protected String countId;
    protected Long maxLimit;
    ...
```
