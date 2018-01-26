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


·2017/12/28

clone()克隆并追加一个 p 元素：

```
$("button").click(function(){
  $("body").append($("p").clone());
});
```

可以克隆任意一个div块



## 定义和用法

one() 方法为被选元素附加一个或多个事件处理程序，并规定当事件发生时运行的函数。

当使用 one() 方法时，每个元素只能运行一次事件处理器函数。

### 语法

```
$(selector).one(event,data,function)
```


·2018/1/2

​    bulletInfo.bulletsData.bullets[0].cycles[0].triggers = [];

​    bulletInfo.bulletsData.bullets[0].cycles[0].triggers.push(deepClone(triggerVal[0]));

​    bulletInfo.bulletsData.bullets[0].cycles[0].triggers.push(deepClone(triggerVal[1]));

1.如果是一个对象想要使用push方法，那就在push之前先把这个对象初始化成数组

2.如果想要push到数组的对应的地方，则push多次



·2018/1/19

​	<div class="doc-buttons">

​		 <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">

​           <span class="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)">

​              <span class="fa fa-arrows"></span>

​            </span>

​          </button>

​	</div>

采用以上结构，父级块class唯一 通过父级块找到子级块的 [data-method]属性，从而获取整个以class作为标志的DOM节点

​	$('.doc-buttons').on( 'click' , '[data-method]' , function()){

​		var  $this = $$(this);                        //点击的button块

​		var data = $this.data();      //可以获得 button的 data属性  method :'setDragMode'  option : 'move'

​	}