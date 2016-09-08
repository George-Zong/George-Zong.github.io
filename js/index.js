/**
 * Created by Zong on 09/06 0006.
 */
$(function(){
    $('.wrap').fullpage({
        'navigation': true,
        'navigationColor':'white',
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '关于我', '技能','自我评价'],
        'anchors': ['page01', 'page02', 'page03', 'page04'],
        'afterLoad' : function(anchorLink,index){
            if (index == 1) {
                $(".container").fadeIn(3500)
            }
            if (index == 2) {
                console.log(2222);
            }
            if (index == 3) {
                // 首先要获得画布( 工具 )
                var cas = document.getElementById( 'cav' );
                // 调用方法获得 绘图工具
                var ctx = cas.getContext( '2d' );
                function tohd( angle ) {
                    return angle * Math.PI / 180;
                }
                var startAngle = -90;
                var r = 60;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font='20px youyuan';
                ctx.fillStyle = 'white';
                function html5(){
                    ctx.fillText( 'html5 85%', 70, 70 );
                    var html5 = setInterval(function(){
                        if (startAngle >= 200){
                            clearInterval(html5);
                            startAngle = 200;
                        }
                        ctx.strokeStyle = "orange";
                        //ctx.moveTo( 50, 20);
                        ctx.lineWidth = 5;
                        //ctx.moveTo(100,100);
                        ctx.arc(70,70,r,tohd(startAngle),tohd(startAngle+=5));
                        ctx.stroke();
                        //ctx.closePath();
                    },30);
                }
                html5();

            }
        }
    });


})