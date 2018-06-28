require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		common.topbar();

		common.txtfocus();

		common.centeraside();

		var messsge ={

			  menutab:function(){

          $('.message_tab a').click(function(){

						  $(this).addClass('active').siblings('a').removeClass('active');
					})
				},

			  messagetoggle:function(){

					 $('.message_title').on('click','.message_title_line',function(){

						    var $isread = $(this).parents('.message_title').siblings('.message_state').find('i');

							  if(!$isread.hasClass('readed_icon')){

									$isread.addClass('readed_icon');

								}

							  $(this).siblings('.message_title_intro').toggle();
						})

				},
			messageselect:function(){

				  $('.selectall').on('click',function(){

               var ischeck = $(this).prop('checked');

						   if(!ischeck){

								 $('.selectsingle').removeAttr('checked');

							 }
						  else{

								 $('.selectsingle').prop('checked','true');
							 }
					})

				  $('.message_lb tbody').on('click','.selectsingle',function(){

						   if($('.selectsingle:checked').length == $('.selectsingle').length){

								 $('.selectall').prop('checked','true');
							 }
						  else{

								 $('.selectall').removeAttr('checked');
							 }
					})
			},
			markread:function(){

          $('.markread_btn').on('click',function(){

						 $('.selectsingle').each(function(){

							  if($(this).prop('checked')){

									  $(this).siblings('i').addClass('readed_icon');
								}
							 $(this).removeAttr('checked');

							 $('.selectall').removeAttr('checked');
						 })
					})
			},
     delmessage:function(){

			    $('.message_ope .delmessage_btn').on('click',function(){

						  $(this).parents('tr').remove();
					})

          $('.delall_btn').click(function(){

						$('.selectsingle').each(function(){

							if($(this).prop('checked')){

								$(this).parents('tr').remove();
							}
							$(this).removeAttr('checked');

							$('.selectall').removeAttr('checked');
						})
					})

			   $('.clearall_btn').click(function(){

					   $('.message_lb tbody tr').remove()
				 })
		 }
		}
		messsge.menutab();
		messsge.messagetoggle();
		messsge.messageselect();
		messsge.markread();
		messsge.delmessage();
	})
})
