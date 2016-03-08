!function($){var t=function(){for(var t=["webkit","moz","ms"],i=document.createElement("div").style,e=("transform"in i?"transform":void 0),n=0,s=t.length;s>n;n++){var o=t[n]+"Transform";if(o in i){e=o;break}}return e}(),i=function(i,e){if(i.item=this,this.element=i,"IMG"===i.tagName?(this.fullWidth=i.width,this.fullHeight=i.height):(i.style.display="inline-block",this.fullWidth=i.offsetWidth,this.fullHeight=i.offsetHeight),i.style.position="absolute",e.mirror&&"IMG"===this.element.tagName){this.reflection=$(i).reflect(e.mirror).next()[0];var n=$(this.reflection);this.reflection.fullHeight=n.height(),n.css("margin-top",e.mirror.gap+"px"),n.css("width","100%"),i.style.width="100%",this.element=this.element.parentNode,this.element.item=this,this.element.alt=i.alt,this.element.title=i.title}t&&e.transforms&&(this.element.style[t+"Origin"]="0 0"),this.moveTo=function(i,n,s){this.width=this.fullWidth*s,this.height=this.fullHeight*s,this.x=i,this.y=n,this.scale=s;var o=this.element.style;o.zIndex=""+100*s|0,t&&e.transforms?o[t]="translate("+i+"px, "+n+"px) scale("+s+")":(e.mirror&&"IMG"===this.element.tagName&&(this.reflection.style.marginTop=e.mirror.gap*s+"px"),o.width=this.width+"px",o.left=i+"px",o.top=n+"px")}},e=window.performance&&window.performance.now?function(){return performance.now()}:function(){return+new Date},n=window.cancelAnimationFrame||window.cancelRequestAnimationFrame,s=window.requestAnimationFrame;!function(){for(var t=["webkit","moz","ms"],i=0,e=t.length;e>i&&!n;i++)n=window[t[i]+"CancelAnimationFrame"]||window[t[i]+"CancelRequestAnimationFrame"],s=s&&window[t[i]+"RequestAnimationFrame"]}();var o=function(t,o){var a=this,r=$(t);this.items=[],this.xOrigin=null===o.xOrigin?.5*r.width():o.xOrigin,this.yOrigin=null===o.yOrigin?.1*r.height():o.yOrigin,this.xRadius=null===o.xRadius?r.width()/2.3:o.xRadius,this.yRadius=null===o.yRadius?r.height()/6:o.yRadius,this.farScale=o.farScale,this.rotation=this.destRotation=Math.PI/2,this.speed=o.speed,this.smooth=o.smooth,this.fps=o.fps,this.timer=0,this.autoPlayAmount=o.autoPlay,this.autoPlayDelay=o.autoPlayDelay,this.autoPlayTimer=0,this.onLoaded=o.onLoaded,this.onRendered=o.onRendered,this.itemOptions={transforms:o.transforms},o.mirror&&(this.itemOptions.mirror=$.extend({gap:2},o.mirror)),r.css({position:"relative",overflow:"hidden"}),this.rotateItem=function(t,i){var e=this.items[t],n=Math.sin(i),s=this.farScale,o=s+(1-s)*(n+1)*.5;e.moveTo(this.xOrigin+o*(Math.cos(i)*this.xRadius-.5*e.fullWidth),this.yOrigin+o*n*this.yRadius,o)},this.render=function(){for(var t=this.items.length,i=2*Math.PI/t,e=this.rotation,n=0;t>n;n++)this.rotateItem(n,e),e+=i;"function"==typeof this.onRendered&&this.onRendered(this)},this.playFrame=function(){var t=a.destRotation-a.rotation,i=e(),n=.002*(i-a.lastTime);a.lastTime=i,Math.abs(t)<.003?(a.rotation=a.destRotation,a.pause()):(a.rotation=a.destRotation-t/(1+a.speed*n),a.scheduleNextFrame()),a.render()},this.scheduleNextFrame=function(){this.lastTime=e(),this.timer=this.smooth&&n?s(a.playFrame):setTimeout(a.playFrame,1e3/this.fps)},this.itemsRotated=function(){return this.items.length*(Math.PI/2-this.rotation)/(2*Math.PI)},this.floatIndex=function(){var t=this.items.length,i=this.itemsRotated()%t;return 0>i?i+t:i},this.nearestIndex=function(){return Math.round(this.floatIndex())%this.items.length},this.nearestItem=function(){return this.items[this.nearestIndex()]},this.play=function(){0===this.timer&&this.scheduleNextFrame()},this.pause=function(){this.smooth&&n?n(this.timer):clearTimeout(this.timer),this.timer=0},this.go=function(t){this.destRotation+=2*Math.PI/this.items.length*t,this.play()},this.deactivate=function(){this.pause(),clearInterval(this.autoPlayTimer),o.buttonLeft.unbind("click"),o.buttonRight.unbind("click"),r.unbind(".cloud9")},this.autoPlay=function(){this.autoPlayTimer=setInterval(function(){a.go(a.autoPlayAmount)},this.autoPlayDelay)},this.enableAutoPlay=function(){r.bind("mouseover.cloud9",function(){clearInterval(a.autoPlayTimer)}),r.bind("mouseout.cloud9",function(){a.autoPlay()}),this.autoPlay()},this.bindControls=function(){o.buttonLeft&&o.buttonLeft.bind("click",function(){return a.go(-1),!1}),o.buttonRight&&o.buttonRight.bind("click",function(){return a.go(1),!1}),o.mouseWheel&&r.bind("mousewheel.cloud9",function(t,i){return a.go(i>0?1:-1),!1}),o.bringToFront&&r.bind("click.cloud9",function(t){var i=$(t.target).closest("."+o.itemClass);if(0!==i.length){var e=a.items.indexOf(i[0].item),n=a.items.length,s=e-a.floatIndex()%n;2*Math.abs(s)>n&&(s+=s>0?-n:n),a.destRotation=a.rotation,a.go(-s)}})};var h=r.find("."+o.itemClass);this.finishInit=function(){for(var t=0;t<h.length;t++){var e=h[t];if("IMG"===e.tagName&&(void 0===e.width||void 0!==e.complete&&!e.complete))return}for(clearInterval(this.initTimer),t=0;t<h.length;t++)this.items.push(new i(h[t],this.itemOptions));r.bind("mousedown onselectstart",function(){return!1}),0!==this.autoPlayAmount&&this.enableAutoPlay(),this.bindControls(),this.render(),"function"==typeof this.onLoaded&&this.onLoaded(this)},this.initTimer=setInterval(function(){a.finishInit()},50)};$.fn.Cloud9Carousel=function(t){return this.each(function(){t=$.extend({xOrigin:null,yOrigin:null,xRadius:null,yRadius:null,farScale:.5,transforms:!0,smooth:!0,fps:30,speed:4,autoPlay:0,autoPlayDelay:1500,bringToFront:!1,itemClass:"cloud9-item",handle:"carousel"},t),$(this).data(t.handle,new o(this,t))})}}(window.jQuery||window.Zepto);