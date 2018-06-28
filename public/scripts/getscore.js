require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		common.topbar();

		common.txtfocus();

		common.centeraside();

		var getscored = {

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
			getscoretab:function(){

				  $('.getscore_tab a').on('click',function(){

						  $(this).addClass('active').siblings('a').removeClass('active');

						  $('.getscore_tabcon').hide();

						  $('.getscore_tabcon').eq($(this).index()).show()
					})
			}

		}
		getscored.paytab();

		getscored.getscoretab();
	})
})
