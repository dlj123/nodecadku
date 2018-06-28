require.config({
	  waitSeconds:15,
		baseUrl:'/scripts/',
		paths:{
		  'jquery':'jquery',
			'lazyload':'widget/jquery.lazyload.min',
			'ellipsis':'widget/jquery.ellipsis',
			'jqueryui':'widget/jquery-ui.min',
			'picbase':'widget/basic',
			'picjcrop':'widget/jquery.Jcrop',
			'webuploader':'widget/webuploader.min',
			'common':'common'
		},
	shim:{
		'ellipsis':{
			deps:['jquery']
		},
		'lazyload':{
			deps:['jquery'],
			export:'lazyload'
		},
		'jqueryui':{
			deps:['jquery'],
			export:'jqueryui'
		},
		'picbase':{
			deps:['jquery','picjcrop'],
			export:'picbase'
		},
		'picjcrop':{
			deps:['jquery'],
			export:'picjcrop'
		},
		'webuploader':{
			deps:['jquery']
		}
	}
})




