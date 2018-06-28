require(['config'],function(config) {

	require(['jquery', 'common'], function ($, common) {

		common.topbar();

		common.txtfocus();

		common.centeraside();

		common.countdown('.getyzm_btn','getyzm_btned');

	})
})