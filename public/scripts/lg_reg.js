require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		common.topbar();

		common.txtfocus();

		common.countdown('.reg_getyzm_link','reg_getyzm_linkno');

		var lgreg = {

			lgregfocus:function(){

                $('.edite_txt').focus(function(){

					   $(this).siblings('.edite_label').addClass('active');

					   $(this).parent('.edite_item').addClass('active');

				 }).blur(function(){

					 $(this).siblings('.edite_label').removeClass('active');

					 $(this).parent('.edite_item').removeClass('active');
				 })

		         $('.reg_insert_yzm').focus(function(){

		         	$(this).parent('.edite_item').addClass('active');

		         }).blur(function(){

                    $(this).parent('.edite_item').removeClass('active');

		         })
                $('.edite_yzm').focus(function(){

					 $(this).addClass('active');

				 }).blur(function(){

					 $(this).removeClass('active');
				 })
			},
			lgregtab:function(){

				  $('.lgreg_tab>a').click(function(){

						  $(this).addClass('active').siblings('a').removeClass('active');

						  $('.lgreg_con').hide();

						  $('.lgreg_con').eq($(this).index()).show();

              $('.user').siblings('.edite_txt').focus();
					})

			},
			validate:function(){

				 var validatename = function(name){

				 	 var $lgname = $(name).val();

				 	  $(name).parents('.edite_item').siblings('p.error_notice').css('display','none');

				 	 if(!$lgname){

                          $(name).parents('.edite_item').siblings('p.error_notice').css('display','block').html('用户名不能为空');

                          $(name).focus();

                          return false;
			     	  }
			          else{

                          $(name).parents('.edite_item').siblings('p.error_notice').css('display','none');

                          return true;
                        }
				 }

				 var validatepwd = function(pwd){

				 	var $lgpwd = $(pwd).val();

				 	$(pwd).parents('.edite_item').siblings('p.error_notice').css('display','none');

				 	if(!$lgpwd){

				 		$(pwd).parents('.edite_item').siblings('p.error_notice').css('display','block').html('密码不能为空');

				 		$(pwd).focus()

				 		return false;
				 	}
				 	else{

				 		$(pwd).parents('.edite_item').siblings('p.error_notice').css('display','none');

				 		return true;
				 	}

				 }
				 var validatemail = function(mail){

                      $mail = $(mail).val();

                      $(mail).parents('.edite_item').siblings('p.error_notice').css('display','none');

				 	  var mailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

				 	  if(!$mail){

                        $(mail).parents('.edite_item').siblings('p.error_notice').css('display','block').html('邮箱不能为空！');

                        $(mail).focus();

                        return false;
				 	  }

				 	  else if(!mailreg.test($mail)){

				 	  	$(mail).parents('.edite_item').siblings('p.error_notice').css('display','block').html('请输入正确的邮箱！');

				 	  	$(mail).focus();

				 	  	return false;
				 	  }
				 	  else{

				 	  	$(mail).parents('.edite_item').siblings('p.error_notice').css('display','none');

				 	  	return true;
				 	  }
				 }
				 var confirmpwd = function(pwdagain){

				 	$(pwdagain).parents('.edite_item').siblings('p.error_notice').css('display','none');

				 	$pwdagain = $(pwdagain).val();

				 	var $prevpwd = $(pwdagain).parents('.edite_item').prev().find('input').val();

				 	if(!($pwdagain == $prevpwd)){

                       $(pwdagain).parents('.edite_item').siblings('p.error_notice').css('display','block').html('两次输入的密码不一致');

                       $(pwdagain).focus();

                       return false;
				 	}
				 	else{

				 		$(pwdagain).parents('.edite_item').siblings('p.error_notice').css('display','none');

				 		return true;
				 	}

				 }
				 var validateyzm = function(yzm){

				 	$(yzm).parents('.edite_item').siblings('p.error_notice').css('display','none');

                    var $yzmvalue = $(yzm).val();

                    if(!$yzmvalue){

                    	$(yzm).parents('.yzm_item').siblings('p.error_notice').css('display','block').html('验证码不能为空');

                    	$(yzm).focus();

                    	return false;
                    }
                    else{

                    	$(yzm).parents('.yzm_item').siblings('p.error_notice').css('display','none');

                    	 return true;
                    }

				 }

			     $('#lgbtn').on('click',function(){
                      
			     	  if(validatename('#loginname')){
                        
			     	  	validatepwd('#loginpwd');

			     	  };
			     	})

			     $('#regbtn').on('click',function(){

                     if(validatename('#regname')){

                     	validatemail('#regemail');

                     }
                    if( validatename('#regname') && validatemail('#regemail'))       
                     {
                     	validatepwd('#regpwd');
                     }

                   if( validatename('#regname') && validatemail('#regemail') && validatepwd('#regpwd')) {

                     	confirmpwd('#regpwdconfirm');

                      }
                   if(validatename('#regname') && validatemail('#regemail') && validatepwd('#regpwd') && confirmpwd('#regpwdconfirm')){

                      validateyzm('#regyz');
                   }
			     })
			},

		}
		lgreg.lgregfocus();
		lgreg.lgregtab();
		lgreg.validate();
	})
})
