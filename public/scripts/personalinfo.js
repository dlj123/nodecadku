require(['config'],function(config) {

	require(['jquery', 'common','picbase','picjcrop','webuploader'], function ($, common,picbase,picjcrop,webuploader) {

		common.topbar();

		common.txtfocus();

		common.centeraside();

		common.dropdown('.dropdown_link_city','.dropdown_menu_city');

		common.layershowhide();

		common.uploadPictures('.uppic-again #uppersonpic','#target img,.pre-1 img,.pre-2 img,.pre-3 img');

		var personalinfo = {

			radiotab:function(){

				 $('.sex_wrap span').on('click',function(){

					 $('.sex_wrap span').find('i').removeClass('active');

					 $(this).find('i').addClass('active');
				 })
			},
			addskills:function(){

				  $('.skills_wrap').on('click','span',function(){

						  $('.tags_wrap').append('<div class="tags_box"><span>'+$(this).html()+'</span><a href="javascript:;">×</a></div>')
					})

				  $('.tags_wrap').on('click','.tags_box a',function(){

						    $(this).parents('.tags_box').remove();
					})
			},
			map:function(){

				var map = new BMap.Map("map");

				var markersArray = [];
				var point = new BMap.Point(116.331398, 39.897445);
				map.centerAndZoom(point, 12); // 中心点

				map.addEventListener("click", showInfo);
				//清除标识
				function clearOverlays() {
					if (markersArray) {
						for (i in markersArray) {
							map.removeOverlay(markersArray[i])
						}
					}
				}
				//地图上标注
				function addMarker(point) {
					var marker = new BMap.Marker(point);
					markersArray.push(marker);
					clearOverlays();
					map.addOverlay(marker);
				}
				//点击地图时间处理
				function showInfo(e) {
					document.getElementById('lng').innerHTML = e.point.lng;
					document.getElementById('lat').innerHTML = e.point.lat;

					addMarker(e.point);
				}

				$('.lat_link').click(function(){

              $('#markarea_layer').show();

					    $('.mapsubmit_btn').click(function(){

                  $(this).parents('#markarea_layer').hide();

								  $('.lat_area').html($('#lng').html() +'&nbsp;,&nbsp;'+ $('#lat').html()).css('color','#333');
				  })
				})

			},
      modifypic:function(){

				   $('.personalpic_btn').click(function(){

						  $('#editepic_layer').show();
					 })
				   $('.piccut-submit a').on('click',function(){

				   	      $('#editepic_layer').hide();

				   	      var persrc=$('.pre-1 img').attr('src');

				   	      $('.personal_pic img').attr('src',persrc);

				   })
			}
		}
		personalinfo.radiotab();
		personalinfo.addskills();
		personalinfo.map();
		personalinfo.modifypic();
		
	})
})
