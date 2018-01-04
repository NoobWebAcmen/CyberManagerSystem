var  bars_num = 1;
var time = new Array();

$('#bars_button1').click(function(){
    bars_num += 1;
    
    bulletInfo.addBulletList(bars_num,$('#bulletAddInfoUl'));
    bulletInfo.addBullet(bars_num);
    bulletInfo.bulletObject.launchDuration = parseFloat($('#barsInp1')[0].value);
    bulletInfo.bulletObject.id = parseInt($('#powderIdOfP').html()); //id 看是不是需要字符串

    time.push(parseFloat($('#title0')[0].innerHTML));
    var num = bars_num -2;
    
    bulletInfo.bulletsData.push(deepClone(bulletInfo.bulletsData[0]));

    if( bulletInfo.bulletsData[bars_num-1]){
        bulletInfo.bulletsData[bars_num-1].launchTime = time[num];
    }
    // console.log($('.flyControlDiv').parent()[0]);
    // bulletInfo.changeFlyModId($('.flyControlDiv').parent()[0],bars_num,1);
    // bulletInfo.changeFlyModId($('.rollControlList').parent()[0],bars_num,1);
    // bulletInfo.changeFlyModId($('.jumpControlList').parent()[0],bars_num,1);
        
    
});

$('#saveFlyBtn_1_1').click(function(){
   
    
    var idStr = $(this).attr('id');
    idStr = idStr.replace(/[^0-9]/g,'').substr(0,1);
    
    if(this.innerHTML =='保存'){
         bulletInfo.getFlyValue(0,0);   
         
    }else if(this.innerHTML == '重填'){
        alert("功能还在开发中");
    }
});

$('#trailSelect_1_1').change(function(){

    bulletInfo.switchTrailSel(this.value,1,1);
});
