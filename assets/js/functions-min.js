$(document).ready(function(){!function(e){e.fn.marquee=function(t){return this.each(function(){var a,r,i,n,s,o=e.extend({},e.fn.marquee.defaults,t),u=e(this),d=3,l="animation-play-state",p=!1,c=function(e,t,a){for(var r=["webkit","moz","MS","o",""],i=0;i<r.length;i++)r[i]||(t=t.toLowerCase()),e.addEventListener(r[i]+t,a,!1)},f=function(){u.timer=setTimeout(k,o.delayBeforeStart)},m={pause:function(){p&&o.allowCss3Support?a.css(l,"paused"):e.fn.pause&&a.pause(),u.data("runningStatus","paused"),u.trigger("paused")},resume:function(){p&&o.allowCss3Support?a.css(l,"running"):e.fn.resume&&a.resume(),u.data("runningStatus","resumed"),u.trigger("resumed")},toggle:function(){m["resumed"==u.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(u.timer),u.find("*").addBack().off(),u.html(u.find(".js-marquee:first").html())}};if("string"!=typeof t){var g;e.each(o,function(e,t){if(void 0!==(g=u.attr("data-"+e))){switch(g){case"true":g=!0;break;case"false":g=!1}o[e]=g}}),o.speed&&(o.duration=parseInt(u.width(),10)/o.speed*1e3),n="up"==o.direction||"down"==o.direction,o.gap=o.duplicated?parseInt(o.gap):0,u.wrapInner('<div class="js-marquee"></div>');var h=u.find(".js-marquee").css({"margin-right":o.gap,float:"left"});if(o.duplicated&&h.clone(!0).appendTo(u),u.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),a=u.find(".js-marquee-wrapper"),n){var y=u.height();a.removeAttr("style"),u.height(y),u.find(".js-marquee").css({float:"none","margin-bottom":o.gap,"margin-right":0}),o.duplicated&&u.find(".js-marquee:last").css({"margin-bottom":0});var v=u.find(".js-marquee:first").height()+o.gap;o.startVisible&&!o.duplicated?(o._completeDuration=(parseInt(v,10)+parseInt(y,10))/parseInt(y,10)*o.duration,o.duration=parseInt(v,10)/parseInt(y,10)*o.duration):o.duration=(parseInt(v,10)+parseInt(y,10))/parseInt(y,10)*o.duration}else s=u.find(".js-marquee:first").width()+o.gap,r=u.width(),o.startVisible&&!o.duplicated?(o._completeDuration=(parseInt(s,10)+parseInt(r,10))/parseInt(r,10)*o.duration,o.duration=parseInt(s,10)/parseInt(r,10)*o.duration):o.duration=(parseInt(s,10)+parseInt(r,10))/parseInt(r,10)*o.duration;if(o.duplicated&&(o.duration=o.duration/2),o.allowCss3Support){var b=document.body||document.createElement("div"),w="marqueeAnimation-"+Math.floor(1e7*Math.random()),$="Webkit Moz O ms Khtml".split(" "),I="animation",x="",S="";if(void 0!==b.style.animation&&(S="@keyframes "+w+" ",p=!0),!1===p)for(var q=0;q<$.length;q++)if(void 0!==b.style[$[q]+"AnimationName"]){var V="-"+$[q].toLowerCase()+"-";I=V+I,l=V+l,S="@"+V+"keyframes "+w+" ",p=!0;break}p&&(x=w+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s infinite "+o.css3easing,u.data("css3AnimationIsSupported",!0))}var j=function(){a.css("transform","translateY("+("up"==o.direction?y+"px":"-"+v+"px")+")")},C=function(){a.css("transform","translateX("+("left"==o.direction?r+"px":"-"+s+"px")+")")};o.duplicated?(n?o.startVisible?a.css("transform","translateY(0)"):a.css("transform","translateY("+("up"==o.direction?y+"px":"-"+(2*v-o.gap)+"px")+")"):o.startVisible?a.css("transform","translateX(0)"):a.css("transform","translateX("+("left"==o.direction?r+"px":"-"+(2*s-o.gap)+"px")+")"),o.startVisible||(d=1)):o.startVisible?d=2:n?j():C();var k=function(){if(o.duplicated&&(1===d?(o._originalDuration=o.duration,o.duration=n?"up"==o.direction?o.duration+y/(v/o.duration):2*o.duration:"left"==o.direction?o.duration+r/(s/o.duration):2*o.duration,x&&(x=w+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),d++):2===d&&(o.duration=o._originalDuration,x&&(w+="0",S=e.trim(S)+"0 ",x=w+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),d++)),n?o.duplicated?(d>2&&a.css("transform","translateY("+("up"==o.direction?0:"-"+v+"px")+")"),i={transform:"translateY("+("up"==o.direction?"-"+v+"px":0)+")"}):o.startVisible?2===d?(x&&(x=w+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),i={transform:"translateY("+("up"==o.direction?"-"+v+"px":y+"px")+")"},d++):3===d&&(o.duration=o._completeDuration,x&&(w+="0",S=e.trim(S)+"0 ",x=w+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),j()):(j(),i={transform:"translateY("+("up"==o.direction?"-"+a.height()+"px":y+"px")+")"}):o.duplicated?(d>2&&a.css("transform","translateX("+("left"==o.direction?0:"-"+s+"px")+")"),i={transform:"translateX("+("left"==o.direction?"-"+s+"px":0)+")"}):o.startVisible?2===d?(x&&(x=w+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing),i={transform:"translateX("+("left"==o.direction?"-"+s+"px":r+"px")+")"},d++):3===d&&(o.duration=o._completeDuration,x&&(w+="0",S=e.trim(S)+"0 ",x=w+" "+o.duration/1e3+"s 0s infinite "+o.css3easing),C()):(C(),i={transform:"translateX("+("left"==o.direction?"-"+s+"px":r+"px")+")"}),u.trigger("beforeStarting"),p){a.css(I,x);var t=S+" { 100%  "+function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(a+":"+e[a]);return t.push(),"{"+t.join(",")+"}"}(i)+"}",l=a.find("style");0!==l.length?l.filter(":last").html(t):e("head").append("<style>"+t+"</style>"),c(a[0],"AnimationIteration",function(){u.trigger("finished")}),c(a[0],"AnimationEnd",function(){k(),u.trigger("finished")})}else a.animate(i,o.duration,o.easing,function(){u.trigger("finished"),o.pauseOnCycle?f():k()});u.data("runningStatus","resumed")};u.on("pause",m.pause),u.on("resume",m.resume),o.pauseOnHover&&(u.on("mouseenter",m.pause),u.on("mouseleave",m.resume)),p&&o.allowCss3Support?k():f()}else e.isFunction(m[t])&&(a||(a=u.find(".js-marquee-wrapper")),!0===u.data("css3AnimationIsSupported")&&(p=!0),m[t]())})},e.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,speed:0,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}}(jQuery),$(".symbolRowLeft").marquee({duration:2e4,gap:60,delayBeforeStart:0,direction:"right",duplicated:!0,startVisible:!0}),$(".symbolRowRight").marquee({duration:2e4,gap:60,delayBeforeStart:0,direction:"left",duplicated:!0,startVisible:!0}),$(".toggle-overlay").click(function(){$(".about").toggleClass("open")}),$(document).ready(function(){$("body").mousemove(function(e){$(".cursor").css("left",e.pageX),$(".cursor").css("top",e.pageY)})}),$("a, .toggle-overlay, #gridView").hover(function(){$(".cursor").toggleClass("hovering")}),$(".theSymbols .symbol").each(function(e){0!==e&&$(this).attr("id","symbol-"+(e+1))}),$(document).ready(function(){for(var e=1;e<81;e++)$newlink=$("<a class='symbol' href='#symbol-"+e+"'/>"),$("#gridView").append($newlink),$newimg=$("<img src='assets/symbol/small/"+e+".jpg'/>"),$("#gridView .symbol").each(function(e){$(this).append($newimg)})}),$("#gridView .symbol").each(function(e){$(this).append("<div></div>")}),$(".lazy").Lazy({scrollDirection:"vertical",visibleOnly:!0,onError:function(e){}})});