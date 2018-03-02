## GameTool使用说明文档

### 一 、 运行环境

​	此项目开发环境配置如下:

```
phpMyAdmin  ^4.7.4
Apache      ^2.4.27
PHP         ^7.1.9
MySQL       ^5.7.19
npm         ^8.9.3
```

​	

### 二 、 所有文件及配置目录

```
├── README.md                       // 项目说明文档
├── .git                            // git托管文件夹，不用管
├── .vscode                      	// vscode配置文件,不用管
├── admin                           // 登录连接数据库验证文件夹
│   ├── Admin.class.php
│   ├── AdminService.class.php      // 连接数据库的文件
├── assets                          // 存放整个项目的js，css
│   ├── script.js					 
│   ├── style.css 
├── bootstrap                         // bootstrap框架文件夹，不用管
├── canvas_map                        // 炮弹编辑器文件夹
│   ├── load.php	                   		// 载入炮弹跳转页面
│   ├── bullet_index.php			   		// 炮弹编辑器主页面
│   ├── bullet.php					   		// 新建炮弹跳转页面
│   ├── cavas_js					   		// 存放炮弹编辑器Js文件夹
│   │   └── addEvent.js				   			// 页面点击事件
│   │   └── addMod.js				   			// 页面添加模块
│   │   └── addResponse.js			   			// 响应点击事件函数
│   │   └── bullet_proto.js		   			// 炮弹原型，配置炮弹数据
│   │   └── getVal.js				   			// 炮弹数据增删改
│   │   └── load.js					   			// 载入炮弹的JS文件
│   │   └── mainScript.js						// 编辑器主界面的JS文件
├── common                             // 公共组件
│   ├── userData	                   		// 存放炮弹编辑器保存的炮弹数据
│   ├── ajax.js	                   			// ajax JS文件
│   ├── baseTool.js	                   		// 下载，转换格式 JS文件
│   ├── loadFile.php	                   	// 从服务器载入文件
│   ├── SQLHelper.class.php	                // 对数据库的操作
│   ├── uploadFile.php	                   	// 上传文件到服务器
│   ├── Validform_v5.3.2.js	                // 表单验证JS
│   ├── verifyController.class.php	        // 验证码验证JS
│   ├── ViewHelper.class.php	            // 视图组件
├── cookies                            // 对cookie的操作，不用管
├── images                             // 图片资源文件夹
├── index                              // GameTool主界面
├── json                               // json数据存放文件夹
├── login                              // 登录及登录验证文件夹
├── tools                              // excel表转json,转lua
├── vendors                            // bootstrap相关js
├── index.php                          // Web入口文件
```



### 三 、 炮弹编辑器JS文件说明

#### 1、addEvent.js

​	对象触发点击事件的操作

#### 2、addMod.js

​	此文件用于在炮弹编辑器中动态添加各个模块

#### 3、addResponse.js

​	此文件用于响应由addEvent.js中对象触发的点击事件

#### 4、bullet_proto.js

​	此文件定义了 构造函数 Bullet，并实例化到 bulletInfo这个对象实例上，实例的同时定义了Bullet的数据属性

#### 5、 getVal.js

​	此文件用于，对bulletInfo这个对象实例的数据的增加，删除，改写的操作

#### 6、load.js

​	此文件用于载入页面的时候，为载入的页面添加事件

#### 7、mainScript.js

​	此文件用于新建炮弹页面，为新建炮弹页面添加点击事件



### 四 、炮弹编辑器使用说明

1、炮弹编辑器主页面 

```
1、新建炮弹
	点击显示 输入炮弹id ，炮弹id如果与下方列表id相同，则弹出 “是否覆盖该炮弹”
2、载入炮弹
	点击下方列表id，在载入框中显示，即可载入炮弹
```

2、 新建炮弹页面

```
新建炮弹流程:
1、点击 "战车发射周期" 添加炮弹
2、点击 “弹头*” 填写弹头数据
3、点击 "运动轨迹" 填写运动轨迹数据
4、点击 "触发条件*" 填写 "触发条件1" 数据，填写 "触发结果*" 数据
5、点击 “添加条件”，添加 “触发条件”
6、保存数据
7、导出数据
8、继续添加炮弹，返回新建炮弹页面


注意 ： 1 、如果有一项未填，点击保存数据不会提示哪里没有填值，所以需要小心填值
	   2 、如果点击页面没有变化，数据未加载出来，请按 F5 刷新
```

五 、 登录账号及密码

```



```

