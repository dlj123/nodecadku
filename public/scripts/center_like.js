require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		common.topbar();

		common.txtfocus();

		common.centeraside();

		var centerlike= {

			centerlike_mx:function(){

				$('.center_mx li').hover(function(){

					$(this).find('.concelzan').show();

					$(this).find('.concelorder').show();

				},function(){

					$(this).find('.concelzan').hide();

					$(this).find('.concelorder').hide();
				})
			},
			centerlike_album:function(){

				$('.center_album li').hover(function(){

					$(this).find('.concelorder').show();

				},function(){

					$(this).find('.concelorder').hide();
				})
			},
			centerlike_designer:function(){

				$('.designer_concerned').hover(function(){

					  $(this).css({'background':'#db2b22','color':'#fff'}).html('取消关注');

				},function(){

					$(this).css({'background':'#fff','color':'#db2b22'}).html('已关注');
				})
			}
		}

		centerlike.centerlike_mx();

		centerlike.centerlike_album();

		centerlike.centerlike_designer();
	})
})
