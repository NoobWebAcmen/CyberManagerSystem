<!DOCTYPE html>
<html>
    
    <head>
        <title>CyberManagerV1.0</title>
        <!-- Bootstrap -->
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="../bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="../assets/styles.css" rel="stylesheet" media="screen">
        <link href="../images/cyber.ico" rel="shortcut icon" />
        <!--[if lte IE 8]><script language="javascript" type="text/javascript" src="vendors/flot/excanvas.min.js"></script><![endif]-->
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="../vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
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
                    <a class="brand" href="../index/index.php">Cyber 后台管理系统V1.0</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i><?php showUserName();?> <i class="caret"></i>

                                </a>
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
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span3" id="sidebar">
                <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                    <li class="active">
                        <a href="../index/index.php"><i class="icon-chevron-right"></i> 主页</a>
                    </li>
                    <li>
                        <a href="../tools/tools.php"><i class="icon-chevron-right"></i> 策划工具</a>
                    </li>
                    <li>
                        <a href="stats.html"><i class="icon-chevron-right"></i> 测试2</a>
                    </li>
                    <li>
                        <a href="form.html"><i class="icon-chevron-right"></i>测试3</a>
                    </li>
                    <li>
                        <a href="tables.html"><i class="icon-chevron-right"></i> 测试4</a>
                    </li>
                    <li>
                        <a href="buttons.html"><i class="icon-chevron-right"></i> 测试5</a>
                    </li>
                    <li>
                        <a href="editors.html"><i class="icon-chevron-right"></i> 测试6</a>
                    </li>
                    <li>
                        <a href="interface.html"><i class="icon-chevron-right"></i> 测试7</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-success pull-right">731</span> 测试8</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-success pull-right">812</span> 测试9</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">27</span> 测试10</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">1,234</span> 测试11</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">2,221</span> 测试12</a>
                    </li>
                    <li>
                        <a href="#"><span class="badge badge-info pull-right">11</span> 测试13</a>
                    </li>
                    <li>
                        <a href="javascript:;" id="map_sel"> <i class="icon-chevron-right"></i>编辑器</a>
                    </li>
                    <li>
                        <a href="../admin/admin_limit.php?rows=10"> 用户关系表</a>
                    </li>
                </ul>
                <ul class="side_bar_add hidden">
                    <li>
                        <a href="../canvas_map/map.php">地图编辑器</a>
                    </li>
                    <li>
                        <a href="../canvas_map/bullet.php">炮弹编辑器</a> 
                    </li>
                </ul>
            </div>
                 

                <!--/span-->
                <div class="span9" id="content">
                <div class="row-fluid">
                   <!-- block -->
                   <div class="block">
                       <div class="navbar navbar-inner block-header">
                           <div class="muted pull-left">
                           <a href="admin_limit.php?rows=10">返回列表</a> <span class="divider">/</span>    
                           添加用户
                            </div>
                       </div>
                       <div class="block-content collapse in">
                           <div class="span12" style="position:relative">
                           <form class="form-horizontal" method="post" action="empProcess.php">
                                      <fieldset>
                                        <legend>添加用户</legend>
                                        <div class="control-group">
                                          <label class="control-label" for="focusedInput">名字</label>
                                          <div class="controls">
                                            <input class="input-xlarge focused" id="focusedInput" type="text"  name="name" datatype="alpha" >
                                            <span class="Validform_checktip"></span>
                                        </div>
                                        </div>
                                        <div class="control-group">
                                          <label class="control-label" for="focusedInput">级别</label>
                                          <div class="controls">
                                            <input class="input-xlarge focused" id="focusedInput" type="text"  name="grade"  datatype="n" >
                                            <span class="Validform_checktip"></span>                                            
                                        </div>
                                        </div>
                                        <div class="control-group">
                                          <label class="control-label" for="focusedInput">电邮</label>
                                          <div class="controls">
                                            <input class="input-xlarge focused" id="focusedInput" type="text"  name="email" datatype="e" >
                                            <span class="Validform_checktip"></span>                                            
                                        </div>
                                        </div>
                                        <div class="control-group">
                                          <label class="control-label" for="focusedInput">薪水</label>
                                          <div class="controls">
                                            <input class="input-xlarge focused" id="focusedInput" type="text"  name="salary" datatype="n" >
                                            <span class="Validform_checktip"></span>
                                          </div>
                                        </div>
                                        <input type="hidden" name="flag" value="addemp"/>   <!-- 通过隐藏域将参数传递给 form action 指定的文件 -->
                                        <div class="form-actions">
                                          <button type="submit" class="btn btn-primary">保存设置</button>
                                          <button type="reset" class="btn" id="resetBtn">继续添加</button>
                                        </div>
                                      </fieldset>
                                    </form>
                            </div>
                        </div>
                                
                              
                           </div>
                       </div>
                   </div>
                  
               </div>

                
            
           </div>
                                        
                                
                       
               

        <!--/.fluid-container-->
        <link href="../vendors/datepicker.css" rel="stylesheet" media="screen">
        <link href="../vendors/uniform.default.css" rel="stylesheet" media="screen">
        <link href="../vendors/chosen.min.css" rel="stylesheet" media="screen">

        <link href="../vendors/wysiwyg/bootstrap-wysihtml5.css" rel="stylesheet" media="screen">

        <script src="../vendors/jquery-1.9.1.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <script src="../vendors/jquery.uniform.min.js"></script>
        <script src="../vendors/chosen.jquery.min.js"></script>
        <script src="../vendors/bootstrap-datepicker.js"></script>

        <script src="../vendors/wysiwyg/wysihtml5-0.3.0.js"></script>
        <script src="../vendors/wysiwyg/bootstrap-wysihtml5.js"></script>

        <script src="../vendors/wizard/jquery.bootstrap.wizard.min.js"></script>

	<script type="text/javascript" src="../vendors/jquery-validation/dist/jquery.validate.min.js"></script>
	<script src="../assets/form-validation.js"></script>
        
	<script src="../assets/scripts.js"></script>
    <script src="../common/Validform_v5.3.2.js"></script>
    <script>
        $(function(){
	
		
	var demo=$(".form-horizontal").Validform({
		tiptype:3,
		label:".control-label",
		showAllError:true,
		datatype:{
			"alpha": /^[\u4E00-\u9FA5\uf900-\ufa2d]{1,6}$|^[a-zA-Z]{1,30}$/
		},
		ajaxPost:true
	});
	
	//通过$.Tipmsg扩展默认提示信息;
	//$.Tipmsg.w["zh1-6"]="请输入1到6个中文字符！";
	demo.tipmsg.w["alpha"]="请输入1到6个中文字符或1到30个字符！";
	
	demo.addRule([{
		ele:".input-xlarge:eq(0)",
		datatype:"alpha"
	},
	{
		ele:".input-xlarge:eq(1)",
		datatype:"n"	
	},
	{
		ele:".input-xlarge:eq(2)",
		datatype:"e",
			
	},
	{
		ele:".input-xlarge:eq(3)",
		datatype:"n"
    }]);
    
	
});


    </script>
        
    </body>

</html>