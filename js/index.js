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

            }
            if (index == 3) {
                $('.skillbar').each(function(){
                    $(this).find('.skillbar-bar').animate({
                        width : $(this).attr('data-percent')
                    }, 2000);
                })
            }
        }
    });


})