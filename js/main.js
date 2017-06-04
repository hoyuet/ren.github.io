require.config({
    paths: {
        jquery: 'jquery',
        bootstrap: 'bootstrap.min',
        less:'less.min'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        less:{
        	deps:['jquery']
        }

    }
});
define(['jquery','bootstrap','less','a'],function($,bs,less,a){
	
	
});
