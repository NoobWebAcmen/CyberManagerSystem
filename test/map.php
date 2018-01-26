

<!DOCTYPE html>
<html class="no-js">
    
    <head>
    <!-- <meta charset="UTF-8"> -->
        <title>CyberManagerV1.0</title>
        
        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="../bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="../vendors/easypiechart/jquery.easy-pie-chart.css" rel="stylesheet" media="screen">
        <link href="../images/cyber.ico" rel="shortcut icon" />
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="../vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        <link rel="stylesheet" href="css/cropper.min.css">
        <link rel="stylesheet" href="css/main.css">
        
    </head>
    <?php  
        require_once '../cookies/common.php';
        checkUserValidate();
        

    ?> 
    
    <body>
    
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="../index/index.php">坦克后台工具</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown" id="whatever"> <i class="icon-user"></i><?php showUserName();?><i class="caret"></i></a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">个人资料</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="#">修改密码</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="../login/logout.php">切换账号</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="../login/logout.php">退出登录</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li class="active">
                                <a href="#">主页</a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle">功能 <b class="caret"></b>

                                </a>
                                <ul class="dropdown-menu" id="menu1">
                                    <li>
                                        <a href="#">Tools <i class="icon-arrow-right"></i>

                                        </a>
                                        <ul class="dropdown-menu sub-menu">
                                            <li>
                                                <a href="#">Reports</a>
                                            </li>
                                            <li>
                                                <a href="#">Logs</a>
                                            </li>
                                            <li>
                                                <a href="#">Errors</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">SEO Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">Other Link</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#">Other Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Other Link</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">扩展应用 <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">News</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Custom Pages</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Calendar</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </li>
                         
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <div class="container-fluid map map-page">
            <!--/span-->
            <div class="span9 map_width main-content" id="content">
                 <div class="content-left" id="mainLeft">
                     <!-- 美术操作界面块 -->
                     <div class="settings clear" id="step1">
                        <p >请设置地图大小</p>
                        <div class="inpMod">
                            <label class="step-lab">W : </label>
                            <input type="text" class="step-inp" id="mapW">
                            <label class="step-lab">H : </label>
                            <input type="text" class="step-inp" id="mapH">
                        </div>
                     </div>
                     <div class="settings" id="step2">
                        <label >请设置总层级数</label>
                        <div class="inpMod1">
                            <input type="text" class="step-inp1" id="layers">
                            <button type="submit" id="subLayers" class="butn">确定</button>
                        </div>
                        
                     </div>
                     <div class="dynamic" id="totalList">
                        <!-- 动态生成层级列表 -->

                     </div>
                 </div>
                 <div class="content-canvas" id="mainCanvas">
                     <div class="canvasMod" id="canvasModule">
                         <!-- canvas块 -->
                         <canvas id="canvas"></canvas>
                     </div>
                     <div class="canvasTool" id="canvasTool">
                         <!-- canvas工具块 -->
                         <div class="btn-group">
                            <!-- 移动图片 -->
                            <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">
                                <span class="docs-tooltip" data-toggle="tooltip" title="移动图片">
                                <span class="fa fa-arrows"></span>
                                </span>
                            </button>
                            <!-- 选择裁切区域 -->
                            <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="crop" title="Crop">
                                <span class="docs-tooltip" data-toggle="tooltip" title="矩形框">
                                <span class="fa fa-crop"></span>
                                </span>
                            </button>
                            </div>
                        <div class="btn-group">
                            <!-- 提高降低图片优先级 --> 
                            <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="-10" title="Move Up">
                                <span class="docs-tooltip" data-toggle="tooltip" title="提高优先级">
                                <span class="fa fa-arrow-up"></span>
                                </span>
                            </button>
                            <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="10" title="Move Down">
                                <span class="docs-tooltip" data-toggle="tooltip" title="降低优先级">
                                <span class="fa fa-arrow-down"></span>
                                </span>
                            </button>
                        </div>
                        <div class="btn-group">
                            <!-- 裁切图片 -->
                            <button type="button" class="btn btn-primary" data-method="crop" title="Crop">
                                <span class="docs-tooltip" data-toggle="tooltip" title="启用裁切框">
                                <span class="fa fa-check"></span>
                                </span>
                            </button>
                            <!-- 清除裁切区域 -->
                            <button type="button" class="btn btn-primary" data-method="clear" title="Clear">
                                <span class="docs-tooltip" data-toggle="tooltip" title="清除裁切框">
                                <span class="fa fa-remove"></span>
                                </span>
                            </button>
                        </div>
                        <div class="btn-group">
                            <!-- 禁用图片操作 -->
                            <button type="button" class="btn btn-primary" data-method="disable" title="Disable">
                                <span class="docs-tooltip" data-toggle="tooltip" title="锁定图片">
                                <span class="fa fa-lock"></span>
                                </span>
                            </button>
                            <!-- 启用图片操作 -->
                            <button type="button" class="btn btn-primary" data-method="enable" title="Enable">
                                <span class="docs-tooltip" data-toggle="tooltip" title="取消锁定">
                                <span class="fa fa-unlock"></span>
                                </span>
                            </button>
                        </div>
                        <div class="btn-group">
                            <!-- 还原图片操作 -->
                            <button type="button" class="btn btn-primary" data-method="reset" title="Reset">
                                <span class="docs-tooltip" data-toggle="tooltip" title="还原图片操作">
                                <span class="fa fa-refresh"></span>
                                </span>
                            </button>
                            <!-- 删除当前图片 -->
                            <button type="button" class="btn btn-primary" data-method="delete" title="Delete">
                                <span class="docs-tooltip" data-toggle="tooltip" title="删除当前图片">
                                <span class="fa fa-deviantart"></span>
                                </span>
                            </button>
                        </div>
                        <div class="btn-group ">
                            <!-- 上传图片 -->
                            <label class="btn btn-primary btn-upload" for="inputImage" title="Upload image file">
                                <input type="file" class="sr-only" id="inputImage" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">
                                <span class="docs-tooltip" data-toggle="tooltip" title="上传图片">
                                <span class="fa fa-upload"></span>
                                </span>
                            </label>
                            <!-- 导出数据 -->
                            <button type="button" class="btn btn-primary" data-method="output" title="Output">
                                <span class="docs-tooltip" data-toggle="tooltip" title="导出图片数据">
                                <span class="fa fa-cloud-download"></span>
                                </span>
                            </button>
                        </div>
                        <div class="btn-group btn-group-crop btn-noMargin">
                            <!-- 下载裁切图片 -->
                            <button type="button" class="btn btn-success" data-method="getCroppedCanvas">
                                <span class="docs-tooltip" data-toggle="tooltip" title="下载图片">
                                裁切图片
                                </span>
                            </button>
                            <!-- 下载格式 -->
                            <button type="button" class="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                                <span class="docs-tooltip" data-toggle="tooltip" title="裁切为256x256">
                                256&times;256
                                </span>
                            </button>
                            <button type="button" class="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                                <span class="docs-tooltip" data-toggle="tooltip" title="裁切为512x512">
                                512&times;512
                                </span>
                            </button>
                        </div>
                       
                     </div>
                 </div>
                 <div class="content-info" id="mainInfo">
                     <!-- 图片信息块 -->
                     <div class="docs-preview clearfix">
                        <div class="img-preview preview-lg"></div>
                    </div>
                    <div class="docs-data">
                        <div class="input-group input-group-sm">
                            <label class="input-group-addon" for="dataX">X</label>
                            <input type="text" class="form-control" id="dataX" placeholder="x">
                            <span class="input-group-addon">px</span>
                        </div>
                        <div class="input-group input-group-sm">
                            <label class="input-group-addon" for="dataY">Y</label>
                            <input type="text" class="form-control" id="dataY" placeholder="y">
                            <span class="input-group-addon">px</span>
                        </div>
                        <div class="input-group input-group-sm">
                            <label class="input-group-addon" for="dataWidth">宽</label>
                            <input type="text" class="form-control" id="dataWidth" placeholder="width">
                            <span class="input-group-addon">px</span>
                        </div>
                        <div class="input-group input-group-sm">
                            <label class="input-group-addon" for="dataHeight">高</label>
                            <input type="text" class="form-control" id="dataHeight" placeholder="height">
                            <span class="input-group-addon">px</span>
                        </div>
                    </div>
                 </div>   
            </div>
        </div>
        <!--/.fluid-container-->
        
        <!-- <script type="text/javascript" src="cavas_js/jCanvaScript.1.5.18.min.js"></script> -->
        <script src="../vendors/jquery-1.9.1.min.js"></script>
        <script src="../assets/zxx.drag.1.0-min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../vendors/easypiechart/jquery.easy-pie-chart.js"></script>
        <script src="js/mapClick.js"></script>
        <script src="js/mapResponse.js"></script>
        <script src="js/mapAdd.js"></script>
        <script src="js/mapScript.js"></script>        
        
        
    </body>
</html>


