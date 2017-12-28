var  bars_num = 1;
var time = new Array();

$('#bars_button1').click(function(){
    bars_num += 1;
    
    bulletInfo.addBulletList(bars_num,$('#bulletAddInfoUl'));
    bulletInfo.addBullet(bars_num);
    bulletInfo.options.launchDuration = parseFloat($('#barsInp1')[0].value);
    bulletInfo.options.id = parseInt($('#powderIdOfP').html()); //id 看是不是需要字符串

    time.push(parseFloat($('#title0')[0].innerHTML));
    var num = bars_num -2;
    
    bulletInfo.bullets.push(Object.assign({},bulletInfo.bullets[0]));

    if( bulletInfo.bullets[bars_num-1]){
        bulletInfo.bullets[bars_num-1].launchTime = time[num];
    }
    
    
});

$('.flyControlBtn').click(function(){
    
    if(this.innerHTML =='保存'){
        var text = $('#trailSelect option:selected').text();
        bulletInfo.switchFlySel(text);
        bulletInfo.switchFlyContSel($('.flyControlSel')); 
        bulletInfo.getFlyValue();   
        // console.log(bulletInfo.bullets);
    }else if(this.innerHTML == '重填'){
        alert("功能还在开发中");
    }
});

$('#trailSelect').change(function(){

    bulletInfo.switchTrailSel(this.value);
});
