define(['jquery'],function($){

	 var common = {

		   topbar:function(){

				 $('.top_weixin').hover(function(){

					 $('.top_weixin_down').show();

				 },function(){

					 $('.top_weixin_down').hide();

				 })

				
				$('.mainitem').each(function(index){

                       var path = window.location.pathname;

                       if($(this).attr('href') == path){

                         $('.mainitem').removeClass('active');
                         
                         $(this).addClass('active');
                       }
				 })
				
                 $('.top_username_wrap').hover(function(){

					   $(this).find('.top_username_link').addClass('active');

					   $(this).find('.top_username_menu').show();

				 },function(){

					 $(this).find('.top_username_link').removeClass('active');

					 $(this).find('.top_username_menu').hide();
				 })

				 $('.topsear_dropdown_link').click(function(){

					 $(this).siblings('.topsear_dropdown_menu').toggle();
				 })

				 $('.topsear_dropdown_menu>li>a').click(function(){

					 $(this).parents('.topsear_dropdown_menu').hide();

					 $(this).parents('.topsear_dropdown_menu').siblings('.topsear_dropdown_link').html($(this).html());
				 })

				 $("document").bind("click",function(e){

					 var target  = $(e.target);

					 if(target.closest(".topsear_dropdown_link,.topsear_dropdown_menu,.index_banner_indicaters a").length == 0){

						 $(".topsear_dropdown_menu").hide();
					 };

					 e.stopPropagation();

				 })

				 $('.top_arrive').click(function(){

					   $(this).html('已<br>签到').addClass('active')
				 })

			 },
			 uploadPictures: function (jQ,container) {
            /*jQ为点击触发的事件对象  container为将图片存放的元素*/
		            $(jQ).on("change", "input[type='file']", function () {

		                var reader = new FileReader();

		                var str = $(this).val();

		                var arr = str.split('\\');//注split可以用字符或字符串分割

		                var my = arr[arr.length - 1];//这就是要取得的图片名称

		                //console.log(my);
		                // 通过当前的file标签 获取选择的文件
		                var str = $(this).val();
                        
                        console.log(my);

                        reader.readAsDataURL(this.files[0]);
		              
                        reader.onload = function () {
		                
                            
		                    //console.log(reader.result); //图片内容
		                   /* var html =
		                    "<p><em>" + my + "</em> <strong>删除</strong></p>"
		                    $('.task_attach_info p').eq(0).before(html);*/


		                    $(container).attr('src', reader.result);
		                }
		            });
          },
		 txtfocus:function(){

			   $('.common_txt').focus(function(){

					   $(this).addClass('active');

				 }).blur(function(){

					   $(this).removeClass('active');
				 })
		 },
		 dropdown:function(dropdownlink,dropdownmenu){

			 $(dropdownlink).click(function () {

				 $(this).siblings(dropdownmenu).toggle();

			 })

			 $(dropdownmenu).find('a').click(function () {


				 $(this).parents(dropdownmenu).hide();

				 $(this).parents(dropdownmenu).siblings(dropdownlink).find('.dropdownsel').html($(this).html()).css('color', '#333');;

			 })

			 $(document).bind('click',function(e){

         var target = $(e.target);

				 if(target.closest(dropdownlink,dropdownmenu).length==0){

					   $(dropdownmenu).hide();
				 }
				 e.stopPropagation();

			 })
		 },
		 tab:function(tabitem,tabcon){

			   $(tabitem).click(function(){

					   $(this).addClass('active').siblings(tabitem).removeClass('active');

					   $(tabcon).hide();

					   $(tabcon).eq($(this).index()).show();
				 })
		 },
		 layershowhide:function(){

			   $('.close_icon').on('click',function(){

					 $(this).parents('.common_mask').hide();

				 })
		 },
		 centeraside:function(){

			    var now = 0;

		          $('.center_aside_menu>dt').on('click',function(){

		            if($(this).index()== now){

		              $(this).toggleClass('active');

							$(this).next('dd').slideToggle(100);
						}
						else{
							$(this).addClass('active').siblings('dt').removeClass('active');

							$(this).siblings('dd').slideUp(100);

							$(this).next('dd').slideDown(100);

						   now = $(this).index()
						}
					})

		          $('.center_aside_menu dd a').each(function(){

                    if($(this).attr('href')==window.location.pathname){

		          	 	$('.center_aside_menu dt').removeClass('active');

                        $('.center_aside_menu dd').css('display','none');

                        $('.center_aside_menu dd a').removeClass('active');

		          	 	$(this).addClass('active').parents('dd').css('display','block').prev('dt').addClass('active');
		          	 }
		          })
		 },
		 countdown:function(ele,classname){

             var time = 60;

             function timer(){

             	if (time==0) { 

             		$(ele).removeClass(classname).html('获取短信验证码');

                   }
                else{

                   setTimeout(function(){
             		
                    time--;

                    $(ele).html(time+'s');

                    timer();

             	 },1000)

                }
             	
             	
             }

             $(ele).on('click',function(){

                $(this).addClass(classname).html(time+'s');

                timer();

             })
		 }
	 }
	return common;


})
