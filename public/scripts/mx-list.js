require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		var list = {

			init:function(){

             common.topbar();

		     common.txtfocus();

		     this.albumlistmenu();
			},

			albumlistmenu:function(){

				$('.topmenu_list_con').on('click','a',function(){

					$(this).addClass('active').siblings('a').removeClass('active');
					
				})

               $('.mx_filter').on('click','a',function() {

				$(this).addClass('active').siblings('a').removeClass('active');

			   })
			}

		}
		list.init();
	})
})
