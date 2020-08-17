# 数组格式

<details>
<summary>目录</summary>
<p>

- [消息段](#消息段)
- [消息段数组](#消息段数组)

</p>
</details>

数组格式将消息表示为一系列消息段对象的数组，在基本语义上与字符串格式等价，可以相互转换，但数组格式的表达能力更强，例如可以嵌套、规定参数数据类型等。

## 消息段

在字符串格式中，使用 CQ 码表示多媒体内容，例如 `[CQ:image,file=123.jpg]`，这里 CQ 码功能名为 `image`，参数为 `file=123.jpg`，也即一个键值对。

消息段是 CQ 码在数组格式中的表示形式，基本格式如下：

```json
{
    "type": "image",
    "data": {
        "file": "123.jpg"
    }
}
```

其中 `type` 字段的类型为字符串，对应 CQ 码中的「功能名」；`data` 字段的类型为对象，对应 CQ 码的「参数」，此字段可为 null。**目前，所有参数值类型均为字符串，以支持与 CQ 码的相互转换**。

**由于消息段不会将纯文本和多媒体内容放在一起，也就意味着任意一个字段的值都是真实值，而不再需要转义。**

为了使用消息段表示纯文本，引入一个「伪」CQ 码功能名 `text`，并在 `data` 中使用 `text` 字段来指示纯文本内容，例如：

```json
{
    "type": "text",
    "data": {
        "text": "这是一段纯文本"
    }
}
```

在将上面的消息段转成 CQ 码时，将会直接变成纯文本字符串，而不是真的转成 CQ 码。

更多消息段类型请参考 [消息段类型](segment.md)。

## 消息段数组

了解了消息段概念之后，就不难理解消息的数组格式了，即消息段组成的数组。

例如，字符串格式下的这样一条消息：

```
&#91;第一部分&#93;[CQ:image,file=123.jpg]图片之后的部分，表情：[CQ:face,id=123]
```

表示成数组格式即为：

```json
[
    {
        "type": "text",
        "data": {
            "text": "[第一部分]"
        }
    },
    {
        "type": "image",
        "data": {
            "file": "123.jpg"
        }
    },
    {
        "type": "text",
        "data": {
            "text": "图片之后的部分，表情："
        }
    },
    {
        "type": "face",
        "data": {
            "id": "123"
        }
    }
]
```

<hr>

| 上一节 | 下一节 |
| --- | --- |
| [字符串格式](string.md) | [消息段类型](segment.md) |