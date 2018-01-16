/**
 * canvas 函数库
 */

function Rect( options){
    this._init(options);   //执行方法
}
Rect.prototype={   
    _init:function(options){
        this.x=options.x || 0;   //参数设置，如果不传参数，则设置默认值
        this.y=options.y || 0;this.opacity=options.opacity===0 ? 0: options.opacity || 1;
        this.scaleX=options.scaleX ||1;
        this.scaleY=options.scaleY ||1;

        this.strokeStyle=options.strokeStyle || 'red';
        this.fillStyle=options.fillStyle||'red';
    },
    render:function(ctx){   //执行绘制
        ctx.save();   //先保存状态
        ctx.beginPath();

        ctx.translate(this.x, this.y);
        
        ctx.rotate(this.rotation * Math.PI /180);
        ctx.globalAlpha=this.optacity;
        ctx.scale(this.scaleX, this.scaleY);
        //ctx.rect(this.x, this.y, this.w, this.h); //绘制矩形
        ctx.rect(0, 0, this.w, this.h); //绘制矩形   设置旋转为矩形的左顶点，要将画布进行位移ctx.translate(this.x, this.y);

        ctx.fillStyle=this.fillStyle;
        ctx.fill();  //填充颜色

        ctx.strokeStyle=this.strokeStyle;
        ctx.stroke();
        ctx.restore();   //释放状态
    }
}

var rect= new Rect({   //设置属性
    x:300,
    y:200,
    w:100,
    h:120,
    rotation:30,
    opacity:0.3,
    scaleX:1.5,
    scaleY:1.5,
    fillStyle:'blue',
    strokeStyle:'yellow'
});
rect.render(ctx);  //执行