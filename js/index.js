/**
 * Created by Zong on 09/06 0006.
 */
$(function(){
    $('.wrap').fullpage({
        'navigation': true,
        'navigationColor':'white',
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '关于我', '技能','联系我'],
        'anchors': ['page01', 'page02', 'page03', 'page04'],
        'afterLoad' : function(anchorLink,index){
            if (index == 1) {
                $(".container").fadeIn(3500)
            }
            if (index == 2) {
                $(".l-msg").show(1000);
                $(".r-msg").show(1000);
                $(".mymsg").find("li").each(function(i){
                    $(this).mousemove(function(){
                        $(this).addClass("animated bounce")
                    });
                    $(this).mouseout(function(){
                        $(this).removeClass("animated bounce")
                    })
                })
            }
            if (index == 3) {
                $('.skillbar').each(function(){
                    $(this).find('.skillbar-bar').animate({
                        width : $(this).attr('data-percent')
                    }, 2000);
                });
                $(".skills").find("p").each(function(i){
                    $(this).mousemove(function(){
                        $(this).addClass("animated pulse")
                    });
                    $(this).mouseout(function(){
                        $(this).removeClass("animated pulse")
                    })
                })
            }
            if (index == 4) {
                $(".mail").mousemove(function(){
                    $(".mail").addClass("animated rotateIn")
                });
                $(".mail").mouseout(function(){
                    $(".mail").removeClass("animated rotateIn")
                });
                $(".phone").mousemove(function(){
                    $(".phone").addClass("animated flip")
                });
                $(".phone").mouseout(function(){
                    $(".phone").removeClass("animated flip")
                });
                $(".qq").mousemove(function(){
                    $(".qq").addClass("animated shake")
                });
                $(".qq").mouseout(function(){
                    $(".qq").removeClass("animated shake")
                })
            }
        }
    });


})