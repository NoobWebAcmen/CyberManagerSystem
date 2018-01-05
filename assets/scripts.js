/**
 * 	鼠标点击事件
 *  若需要添加新的模块：
 *     1. 为新模块的div id 添加点击事件  line:53
 * 	   2. 在canvas_js.js 中的 line:403 getPlotImg 函数中传入 tag值，并在该函数中，通过 tag值，判断是否执行
 * 	   3. 实例化canvas对象，赋值， line：517
 * 	   4. 动态添加ul中的li块图像，设定图像的id，src等属性 line: 589
 */

$(function() {
    // Side Bar Toggle
    $('.hide-sidebar').click(function() {
	  $('#sidebar').hide('fast', function() {
	  	$('#content').removeClass('span9');
	  	$('#content').addClass('span12');
	  	$('.hide-sidebar').hide();
	  	$('.show-sidebar').show();
	  });
	});

	$('.show-sidebar').click(function() {
		$('#content').removeClass('span12');
	   	$('#content').addClass('span9');
	   	$('.show-sidebar').hide();
	   	$('.hide-sidebar').show();
	  	$('#sidebar').show('fast');
	});
	
	var plot_num = 0;
	var trim_num = 0;
	var back_num = 0;
	var plot_flag = true;
	var trim_flag = true;
	var back_flag = true;
	$('#plot').click(function(){
		
		if(plot_flag){
			plotcanvas.hidModeul($('#plot_bottom'),'hidden','show_pic',plot_flag);
			plot_flag = false;
		}else{
			plotcanvas.hidModeul($('#plot_bottom'),'hidden','show_pic',plot_flag);
			plot_flag = true;
		}

		if(plot_num == 0){
			plot_num += 1;
			var plot_ul = $('#plot_div');
			$.get('../json/imgName.json',function(data){
				var name = Object.keys(data['plot']);
				length =name.length;

				for(var i=0 ; i<length ; ++i){                  
					plotcanvas.addMod2Ul(plot_ul,i,'plot_img','plot_imgTag',"plot_img_",'plot','plot_img');
				}
				movePlotUl(plot_ul);
				plotcanvas.getPlotImg($('#plot_div')[0].children.length,1);
		});
	}
});


	$('#trim').click(function(){
		if(trim_flag){
			trimCanvas.hidModeul($('#trim_bottom'),'hidden','show_pic',trim_flag);
			trim_flag = false;
		}else{
			trimCanvas.hidModeul($('#trim_bottom'),'hidden','show_pic',trim_flag);
			trim_flag = true;
		}
		
		if(trim_num == 0){
			trim_num+=1;
			var plot_ul=$('#trim_div');

			$.get('../json/imgName.json',function(data){
				var name = Object.keys(data['trim']);
					length =name.length;
				for(var i=0 ; i<length ; ++i){
					trimCanvas.addMod2Ul(plot_ul,i,'trim_img','trim_imgTag','trim','trim','trimming');
					
				}
				moveTrimUl(plot_ul);
				trimCanvas.getPlotImg($('#trim_div')[0].children.length,2);
			});
		}
	});

	$('#backPic').click(function(){
		if(back_flag){
			backgroundCanvas.hidModeul($('#backPic_bottom'),'hidden','show_pic',back_flag);
			back_flag = false;
		}else{
			backgroundCanvas.hidModeul($('#backPic_bottom'),'hidden','show_pic',back_flag);
			back_flag = true;
		}
		
		if(back_num == 0){
			back_num+=1;
			var plot_ul=$('#back_div');

			$.get('../json/imgName.json',function(data){
				var name = Object.keys(data['background']);
					length =name.length;
				for(var i=0 ; i<length ; ++i){
					backgroundCanvas.addMod2Ul(plot_ul,i,'back_img','back_imgTag','background','background','background');
					
				}
				moveBackUl(plot_ul);
				backgroundCanvas.getPlotImg($('#back_div')[0].children.length,3);
			});
		}
	});

	var toolFlag = true;

	$('#tool_a').click(function(){
		
		if(toolFlag){
			plotcanvas.hidModeul($('.tool_bar'),'hidden','show',toolFlag);
			toolFlag = false;
		}else{
			plotcanvas.hidModeul($('.tool_bar'),'hidden','show',toolFlag);
			toolFlag = true;
		}
		
		
	});

	var imgListFlag = true;

	$('#imgList_a').click(function(){
		if(imgListFlag){
			
			plotcanvas.hidModeul($('.trim_imgInfo'),'hidden','show',imgListFlag);     
			imgListFlag = false;
		}else{
			plotcanvas.hidModeul($('.trim_imgInfo'),'hidden','show',imgListFlag );     
			imgListFlag = true;
		}

	});
	var settingFlag = true;
	$('#setting_a').click(function(){
		if(settingFlag){
			
			plotcanvas.hidModeul($('.setting_imgInfo'),'hidden','show',settingFlag);     
			settingFlag = false;
		}else{
			plotcanvas.hidModeul($('.setting_imgInfo'),'hidden','show',settingFlag );     
			settingFlag = true;
		}

	});

	var imgInfoFlag = true;

	$('#imgInfo_a').click(function(){
		if(imgInfoFlag){
			
			plotcanvas.hidModeul($('.plot_imgInfo'),'hidden','show',imgInfoFlag);     
			imgInfoFlag = false;
		}else{
			plotcanvas.hidModeul($('.plot_imgInfo'),'hidden','show',imgInfoFlag );     
			imgInfoFlag = true;
		}

	});

	var outPutFlag = true;

	$('#outPut').click(function(){
		if(outPutFlag){
			plotcanvas.hidModeul($('#outPut_bottom'),'hidden','show',outPutFlag);
			outPutFlag = false ;
		}else{
			plotcanvas.hidModeul($('#outPut_bottom'),'hidden','show',outPutFlag);
			outPutFlag = true;
		}
	});
	var map_sel_flag = true;
	$('#map_sel').click(function(){
		if(map_sel_flag){
			$('.side_bar_add').removeClass('hidden');
			$('.side_bar_add').addClass('show');
			map_sel_flag = false;
		}else{
			$('.side_bar_add').removeClass('show');
			$('.side_bar_add').addClass('hidden');
			map_sel_flag = true;
		}
		
	});
	
	$('#delete_input').click(function(){
        
        plotcanvas.delete(oCheck);
        
    });
    
    $('#checkbox_a').click(function(){
        
        plotcanvas.selAll(oCheck);
       
        
    });

    $('#upIndex').click(function(){
        plotcanvas.upIndex(activeImageInfo);
       
       
    });
    
    $('#downIndex').click(function(){
       plotcanvas.downIndex(activeImageInfo);
		
    });

    $('#clearBtn').click(function(){
		plotcanvas.clearPic(activeImageInfo);
		
    });
	
	$('#resetBtn').click(function(){
		
		$('#Validform_msg').css('display','none');
	});
	
	$('#setBtn1').click(function(){
		
		plotcanvas.changeCanvas(860,500);
	});
	$('#setBtn2').click(function(){
		plotcanvas.changeCanvas(1024,1024);
	});
	$('#setBtn3').click(function(){
		plotcanvas.changeCanvas(640,1136);
	});
	
	function movePlotUl(obj){
	
		obj.css('width','900px' );
		var num = 0;
		var width = obj["0"].children["0"].offsetWidth;
		$('#prev1').click(function(){
			if(num<width)
			{
				num += width;
				plotcanvas.preClick(obj,-width + num);
				
			}else{
				num = -width; 
				plotcanvas.preClick(obj,-width + num);
			}
			
			
			
		});

		$('#next1').click(function(){
			
			if(num >-width)
			{
				num -= width;
				plotcanvas.nextClick(obj,-width + num);
				
			}else{
				num = width; 
				plotcanvas.nextClick(obj,-width + num);
			}
			
			
		});


	}
	function moveTrimUl(obj){
		var iNow=0;
		
		obj.css('width','900px' );

		var width = obj["0"].children["0"].offsetWidth;
		var num = 0;

		$('#prev2').click(function(){

			if(num < width)
			{
				
					num += width;
					trimCanvas.preClick(obj,-width + num);
				

			}else{
				num = -width; 
				trimCanvas.preClick(obj,-width + num);
			}
			
			
			
		});

		$('#next2').click(function(){
			if(num >-width)
			{
				num -= width;
				trimCanvas.nextClick(obj,-width + num);
				
			}else{
				num = width;
				trimCanvas.nextClick(obj,-width + num);
			}
			
			
		});

	}
	function moveBackUl(obj){
		var iNow=0;
		
		obj.css('width','900px' );

		var width = obj["0"].children["0"].offsetWidth;
		var num = 0;

		$('#prev3').click(function(){

			if(num < width)
			{
				
					num += width;
					backgroundCanvas.preClick(obj,-width + num);
				

			}else{
				num = -width; 
				backgroundCanvas.preClick(obj,-width + num);
			}
			
			
			
		});

		$('#next3').click(function(){
			if(num >-width)
			{
				num -= width;
				backgroundCanvas.nextClick(obj,-width + num);
				
			}else{
				num = width;
				backgroundCanvas.nextClick(obj,-width + num);
			}
			
			
		});

	}
	$('#jsonxz').on('click',function(){
		
		plotcanvas.funDownload(plotcanvas.array,'imgAxis.json');
	});
	




	$('.bars_input').keydown(function(e){
		
		if(e.keyCode == "13"){
		$(this).val(this.value);
		if(scale.btn.style.left){
			scale.btn.style.left = 0 + 'px';
			scale.step.style.width = 0 +'px';
			scale.title.innerHTML = 0;
		}
		
			
		}
	});
	
	
	
	
	
	
});
