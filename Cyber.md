# CyberManagerSystem
Cyber项目存档 



·2017/12/22

使用delegate循环添加点击事件，真是超爽der~

​           $('#triggerResultSideList').delegate('li','click',function(){

​                  bulletInfo.addTriggerResult(this);

​           });

给该Id Ul 下的所有li块循环添加点击事件



·2017/12/27

​	bulletInfo.bullets.push(Object.assign({},bulletInfo.bullets[0]));

可以解决数组中改变一个属性，全部数组的属性被改变的问题

`**Object.assign()**` 方法

用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

```
Object.assign(target, ...sources)
```

### 参数

- `target`

  目标对象。

- `sources`

  源对象。

### 返回值

目标对象。

## 示例

### 复制一个对象

```
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```