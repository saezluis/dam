$(function(){var a=$(".toggle-menu"),n=$(".ed-menu");a.click(function(){n.toggleClass("mostrar")}),wow=new WOW({animateClass:"animated",offset:100,callback:function(a){console.log("WOW: animating <"+a.tagName.toLowerCase()+">")}}),wow.init()});