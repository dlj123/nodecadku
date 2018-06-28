require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		

		var acountbind = {

			init:function(){

             common.topbar();

			common.txtfocus();

			common.centeraside();

			common.layershowhide();

			this.bind();
			},

             bind:function(){

             	$('#weixinbind').on('click',function(){
                   
                    $('#weixinlayer').show();
             	})
             	$('#weixinbind_concel').on('click',function(){

             		$('#bindsuccess_layer').show();

             		setTimeout(function(){

                       $('#bindsuccess_layer').hide();

             		},1000)

             	})
             }
		}
		acountbind.init();

})

})
