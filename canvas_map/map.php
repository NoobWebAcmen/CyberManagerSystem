

<!DOCTYPE html>
<html class="no-js">
    
    <head>
    <!-- <meta charset="UTF-8"> -->
        <title>CyberManagerV1.0</title>
        
        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="../bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="../vendors/easypiechart/jquery.easy-pie-chart.css" rel="stylesheet" media="screen">
        <link href="../images/cyber.ico" rel="shortcut icon" />
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="../vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <script src="../vendors/xlsx.full.min.js"></script>   
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        
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
                    <a class="brand" href="../index/index.php">Cyber后台管理系统V1.0</a>
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
        <div class="container-fluid map">
            
                
                <!--/span-->
                <div class="span9 map_width" id="content">
                    <div class="row-fluid">
                        <div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">&times;</button>
                            <h4>欢迎您,<?php showUserName();?>
                            </h4>
                            <br/>
                        	您可以进行编辑地图操作了！
                            
                        </div>
                        	<div class="navbar">
                            	<div class="navbar-inner">
	                                <ul class="breadcrumb">
	                                    <li>
	                                        <a href="../index/index.php">返回主页</a><span class="divider">/</span>	
	                                    </li>
                                        <li>
	                                        <a href="javascript:;" id="tool_a" >工具栏</a><span class="divider">/</span>	
	                                    </li>
                                        <li>
                                            <a href="javascript:;" id="imgInfo_a">图片列表栏</a><span class="divider">/</span>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="imgList_a">图片信息栏</a><span class="divider">/</span>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="setting_a">设置</a>
                                        </li>
	                                </ul>
                            	</div>
                        	</div>
                    	</div>
                            <div class="tool_bar pull-left show" > 
                                
                                <p id="tool_btn">工具栏</p>
                                
                                <hr class="hr"/>
                                <div class="tool_bar_main" >
                                <button class="btn btn-primary" id="backPic" name="tool_btn3"><i class="icon-pencil icon-white"></i> 背景图</button>
                                    <button class="btn btn-primary" id="plot" name="tool_btn1"><i class="icon-pencil icon-white"></i> 地块</button>
                                    <button class="btn btn-primary" id="trim" name="tool_btn2"><i class="icon-pencil icon-white"></i> 装饰物</button>
                                    <button class="btn btn-primary" id="setting" name="tool_btn4"><i class="icon-pencil icon-white"></i> 设置</button>
                                    <button class="btn btn-primary" id="outPut" name="tool_btn5"><i class="icon-pencil icon-white"></i> 导出</button>
                                    <button class="btn btn-primary" id="upIndex" name="tool_btn6"><i class="icon-pencil icon-white"></i> 提升优先度</button>
                                    <button class="btn btn-primary" id="downIndex" name="tool_btn7"><i class="icon-pencil icon-white"></i> 降低优先度</button>
                                    <button class="btn btn-primary" id="clearBtn" name="tool_btn8"><i class="icon-pencil icon-white"></i> 清除</button>
                                </div>
                            </div>
                            <div class="canvas_div pull-left">
                                <canvas id="canvas_main" width="860px" height="500px"  >
                                    <span>不支持canvans的浏览器</span>
                                </canvas>
                            </div>
                            <div class="plot_imgInfo pull-right show" id="imgInfoDiv">
                                <ul id="imgInfoList">
                                    <li class="topLi ">
                                    <input type="checkbox" id="checkbox_a" class="chk" /> 
                                        <label for="checkbox_a"></label> <p class="label_p">全选</p>
                                    <input type="button" value="删除" class="delete" id="delete_input"/>
                                    </li>
                                </ul>
                            </div>
                            <div class="trim_imgInfo pull-right show" id="imgListDiv">
                                <ul id="imgInfoLists">
                                    <li class="trim_topLi ">
                                    <p>图片信息</p>
                                    </li>
                                    <li class="trim_mainLi">
                                        <p>图片名称:  </p>
                                        
                                    </li>
                                    <li class="trim_mainLi">
                                        <p>X轴坐标:</p>
                                    </li>
                                    <li class="trim_mainLi">
                                        <p>Y轴坐标:</p>
                                    </li>
                                    <li class="trim_mainLi">
                                        <label>W宽度:</label>
                                        <input type="text" value="0" id="imgWidth" />
                                    </li>
                                    <li class="trim_mainLi">
                                        <label>H高度:</label>
                                        <input type="text" value="0" id="imgHeight" />
                                    </li>
                                    

                                </ul>
                            </div>
                            <div class="setting_imgInfo pull-right show" id="imgListDiv">
                                <ul id="settingLists">
                                    <li class="trim_topLi ">
                                    <p>设置</p>
                                    </li>
                                    <li class="setting_mainLi">
                                        <p>背景: </p>
                                        
                                        <button class="btn btn-info" id="setBtn1">860 X 500</button>
                                        <button class="btn btn-info" id="setBtn2"> 1024 X 1024</button>
                                        <button class="btn btn-info" id="setBtn3"> 640 X 1136</button>
                                    </li>
                                    <li class="setting_mainLi">
                                        <p>地块: </p>
                                        <label >宽：</label>
                                        <input type="text"/>
                                        <label >高:</label>
                                        <input type="text">
                                    </li>
                                    <li class="setting_mainLi">
                                        <p>装饰物: </p>
                                        <label >宽：</label>
                                        <input type="text"/>
                                        <label >高:</label>
                                        <input type="text">
                                    </li>
                                    

                                </ul>
                            </div>
                            <div class="sel_bar hidden" id="backPic_bottom">
                                <a href="javascript:;" class="prev" id="prev3"></a>
                                <a href="javascript:;" class="next" id="next3"></a>
                                <div class="sel_bar_p">
                                    <p>背景图</p>
                                </div>
                                <div class="clear plot_ul  pull-left">
                                    <ul id="back_div" class="clear ">
                                    <!-- backgroundImg图库 -->
                                    </ul>
                                </div>
                            </div>
                            <div class="sel_bar clear hidden" id="plot_bottom">
                                <a href="javascript:;" class="prev" id="prev1"></a>
                                <a href="javascript:;" class="next" id="next1"></a>
                                <div class="sel_bar_p pull-left clear">
                                    <p >地块</p>
                                </div>
                                <div class="clear plot_ul  pull-left">
                                    <ul id="plot_div" class="clear ">
                                            <!-- plot图库 -->
                                    </ul>
                                </div>
                            </div>
                            <div class="sel_bar hidden clear" id="trim_bottom">
                                <a href="javascript:;" class="prev" id="prev2"></a>
                                <a href="javascript:;" class="next" id="next2"></a>
                                <div class="sel_bar_p pull-left clear">
                                    <p>装饰物</p>
                                </div>
                                <div class="clear plot_ul  pull-left">
                                    <ul id="trim_div" class="clear ">
                                            <!-- trim图库 -->
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="sel_bar hidden clear" id="outPut_bottom">
                                
                                <div>
                                    <div class="block-blocker ">
                                        <button id="jsonxz" class="output ">导出为json</button>
                                        <button id="jsonxz" class="output ">导出为lua</button>
                                    </div>
                                    
                                    <form action="" method="post" class="flex" id="list">
                                        <label class="label_style"><input name="outPut" type="radio" value="1" class="radio_style" id="radio2"/>标准格式输出</label>
                                        <label class="label_style"><input name="outPut" type="radio" value="2" class="radio_style" id="radio1" checked="checked"/>无格式输出</label>
                                    </form>
                                
                                </div>
                            </div>
                       
                   
                   
                       
            
            
            <!-- <footer>
                <p>&copy; Cyber Manager 2017</p>
            </footer> -->
       
        </div>
        <!--/.fluid-container-->
        
        <script type="text/javascript" src="cavas_js/jCanvaScript.1.5.18.min.js"></script>
        <script src="../vendors/jquery-1.9.1.min.js"></script>
        <script src="../assets/zxx.drag.1.0-min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../vendors/easypiechart/jquery.easy-pie-chart.js"></script>
        <script src="cavas_js/canvas_js.js"></script> 
        
        <script src="../assets/scripts.js"></script>        
        <script src="../json/imgName.json"></script>
        
        
        
        
        

        <script>
         $(function() {
           // Easy pie charts
             $('.chart').easyPieChart({animate: 1000});
         });
         
        </script>
        
        
    </body>
</html>


