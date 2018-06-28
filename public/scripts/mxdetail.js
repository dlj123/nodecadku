require(['config'],function(config) {

	require(['jquery', 'common','webuploader'], function ($, common,webuploader) {

		common.topbar();

		common.txtfocus();

		var mxdetail = {

			   mxshow:function(){

					 controlliw= parseInt($('.detail_show_control_item').eq(0).outerWidth(true));

					 controlulw = controlliw * ($('.detail_show_control_item').length);

					 $('.detail_show_control_ul').css('width',controlulw+'px');

					 var now = 0

					 $('.detail_show_control_item').click(function(){

						 $(this).addClass('active').siblings('li').removeClass('active');

						 $('.detail_show_big').html($(this).html()).css('opacity','0').stop().animate({

							 'opacity':1

						 },300);

						 now = $(this).index();
					 })

					 $('.detail_show_control_prev').click(function(){


					 	 if($('.detail_show_control_item').length<5){

							 return false;
						 }

						 var yushu = parseInt($('.detail_show_control_item').length)%5;

						 if(parseInt($('.detail_show_control_item').length)%5<5 && now !==0)
						 {
							 $('.detail_show_control_ul').stop().animate({

								 'left':-(now-1)*controlliw+'px'

							 },300)

							 now--;
						 }
						 else{
							 return false;
						 }

					 })
					 
					 $('.detail_show_control_next').click(function(){

						 var yushu = parseInt($('.detail_show_control_item').length)%5;

						 if($('.detail_show_control_item').length<5){

							 return false;
						 }

						 else if( parseInt($('.detail_show_control_item').length)%5<5 && now>=yushu)
						 {

							 $('.detail_show_control_ul').animate({

								 'left':0

							 },300)
							 now = 0;
						 }
						 else{

							 $('.detail_show_control_ul').stop().animate({

								 'left':-(now+1)*controlliw+'px'

							 },300)

							 //$('.detail_show_control_item').eq(now+1).addClass('active').siblings('.detail_show_control_item').removeClass('active');

							 now++;
						 }

					 })
				 },
			  mxcommend:function(){



							$('.commeded_label').on('click','span',function(){

								if($(this).html()=='展开'){

									$(this).parents('.commeded_label').siblings('.commeded_item').show();

									$(this).parents('.commeded_label').siblings('.commeded_pers').hide();

									$(this).html('收起');

									$(this).parents('.commeded_label').siblings('.btm_shouqi').show();

								}
								else{

									$(this).parents('.commeded_label').siblings('.commeded_item').hide();

									$(this).parents('.commeded_label').siblings('.commeded_pers').show();

									$(this).html('展开');

									$(this).parents('.commeded_label').siblings('.btm_shouqi').hide();

								}

						})

					  $('.commeded_con').on('click','.btm_shouqi',function(){

							  $(this).siblings('.commeded_item').hide();

							  $(this).hide();

							  $(this).siblings('.commeded_pers').show();

							  $(this).siblings('.commeded_label').find('span').html('展开');

						})

					 $('.commend_ope .commend_link').click(function(){

						   $(this).parents('.commend_ope').siblings('.commit_area').toggle();

					 })
					$('.commend_replay_btn a').click(function(){

						  $(this).parents('.commend_replay_btn').siblings('.commend_replay_area').show();

						  var commendtoper = $(this).parents('.commend_replay_btn').siblings('.commeded_info').find('.maincommend_per').html();

						  $(this).parents('.commend_replay_btn').siblings('.commend_replay_area').find('.edite_commit').val('回复@'+commendtoper);
					})
				},
			share:function(){

				  $('.share_link').hover(function(){

						  $(this).find('.share_box').show();

					},function(){

						 $(this).find('.share_box').hide();

					})
			},
			layersearfocus:function(){

				  $('.albumlayer_sear_txt').focus(function(){

						  $(this).parents('.albumlayer_sear').addClass('active');

					}).blur(function(){

						$(this).parents('.albumlayer_sear').removeClass('active');
					})
			},
			layershowhide:function(){

				  $('.close_icon').click(function(){

						  $(this).parents('.common_mask').hide();
					})
			},
			paytab:function(){

          $('.paymode_lb li').click(function(){

						  $(this).addClass('active').siblings('li').removeClass('active');
					})

				  $('.paytab a').click(function(){

						  $(this).addClass('active').siblings('a').removeClass('active');

						  $('.paymode').hide();

					  	$('.paymode').eq($(this).index()).show();
					})
			},
			
			operation:function(){

				 var statechage = function(changeele,changenum){

				 	var $changeele = $(changeele);

				 	var $changeval = $(changeele).html();

                    var $changenum = $(changenum);

                     var bool = false;

                     var num ='';

                    $changeele.on('click',function(){

                    	if(!bool){

                            $(this).html('取消'+ $changeval);

                            num = $changenum.html();

                            num++;

                            $changenum.addClass('active').html(num);

                            bool = true;
                        }
                        else{ 

                            $(this).html($changeval);

                            num = $changenum.html();

                            num--;

                            $changenum.removeClass('active').html(num);

                            bool = false;
                         }            

                    })
                    }
                 statechage('#zanlink','.aside_state .zan');

				 statechage('.collect_btn','.aside_state .collect');
				},
				webuploader:function(){
					 
				}
			
		}
		mxdetail.mxshow();
		mxdetail.mxcommend();
		mxdetail.share();
		mxdetail.layersearfocus()
		mxdetail.layershowhide();
		mxdetail.paytab();
        mxdetail.operation();
	})
})
