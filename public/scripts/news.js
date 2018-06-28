require(['config'],function(config) {

	require(['jquery','common','ellipsis','lazyload'], function ($,common,ellipsis,lazyload) {

		common.topbar();

		common.txtfocus();
		console.log()

		var newindex = {

			ellipsis:function(){

				$('.ellipsis01').wordLimit(80);

				$('.ellipsis02').wordLimit(5);

				$('.ellipsis03').wordLimit(40);
			},
			lazyload:function(){

				$("img.lazydown").lazyload({

					placeholder : "",

					effect: "fadeIn",

					threshold : 0

				});
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
			}
		}
		newindex.ellipsis();

		newindex.lazyload();

		newindex.mxcommend();
	})
})
