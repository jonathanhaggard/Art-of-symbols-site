$(document).ready(function(){(function(){var t,e,n,r,s,i,o,a,u,l,c,p,d,f,h,g,m,y,v,w,b,S,x,q,k,I,L,$,j,T,R,C,A,P,O,_,E,M,V,X,N,F,B,D,U,Y,W,H,z=[].slice,G={}.hasOwnProperty,J=function(t,e){function n(){this.constructor=t}for(var r in e)G.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},K=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(b={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},j=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},R=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,w=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==R&&(R=function(t){return setTimeout(t,50)},w=function(t){return clearTimeout(t)}),A=function(t){var e,n;return e=j(),(n=function(){var r;return(r=j()-e)>=33?(e=j(),t(r,function(){return R(n)})):setTimeout(n,33-r)})()},C=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?z.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},S=function(){var t,e,n,r,s,i,o;for(e=arguments[0],i=0,o=(r=2<=arguments.length?z.call(arguments,1):[]).length;o>i;i++)if(n=r[i])for(t in n)G.call(n,t)&&(s=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=s&&"object"==typeof s?S(e[t],s):e[t]=s);return e},m=function(t){var e,n,r,s,i;for(n=e=0,s=0,i=t.length;i>s;s++)r=t[s],n+=Math.abs(r),e++;return n/e},q=function(t,e){var n,r,s;if(null==t&&(t="options"),null==e&&(e=!0),s=document.querySelector("[data-pace-"+t+"]")){if(n=s.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return r=t,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},o=function(){function t(){}return t.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)s.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return s}},t.prototype.trigger=function(){var t,e,n,r,s,i,o,a,u;if(n=arguments[0],t=2<=arguments.length?z.call(arguments,1):[],null!=(o=this.bindings)?o[n]:void 0){for(s=0,u=[];s<this.bindings[n].length;)r=(a=this.bindings[n][s]).handler,e=a.ctx,i=a.once,r.apply(null!=e?e:this,t),u.push(i?this.bindings[n].splice(s,1):s++);return u}},t}(),l=window.Pace||{},window.Pace=l,S(l,o.prototype),T=l.options=S({},b,window.paceOptions,q()),B=0,U=(W=["ajax","document","eventLag","elements"]).length;U>B;B++)E=W[B],!0===T[E]&&(T[E]=b[E]);u=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return J(e,t),e}(Error),e=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(T.target)))throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){u=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,s,i,o;if(null==document.querySelector(T.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=0,i=(o=["webkitTransform","msTransform","transform"]).length;i>s;s++)e=o[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),a=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,s,i,o;if(null!=this.bindings[t]){for(o=[],r=0,s=(i=this.bindings[t]).length;s>r;r++)n=i[r],o.push(n.call(this,e));return o}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),F=window.XMLHttpRequest,N=window.XDomainRequest,X=window.WebSocket,x=function(t,e){var n,r,s;for(n in s=[],e.prototype)try{r=e.prototype[n],s.push(null==t[n]&&"function"!=typeof r?t[n]=r:void 0)}catch(t){t}return s},L=[],l.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?z.call(arguments,1):[],L.unshift("ignore"),n=e.apply(null,t),L.shift(),n},l.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?z.call(arguments,1):[],L.unshift("track"),n=e.apply(null,t),L.shift(),n},_=function(t){var e;if(null==t&&(t="GET"),"track"===L[0])return"force";if(!L.length&&T.ajax){if("socket"===t&&T.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),K.call(T.ajax.trackMethods,e)>=0)return!0}return!1},c=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(r,s){return _(r)&&n.trigger("request",{type:r,url:s,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new F(e),t(n),n};try{x(window.XMLHttpRequest,F)}catch(t){}if(null!=N){window.XDomainRequest=function(){var e;return e=new N,t(e),e};try{x(window.XDomainRequest,N)}catch(t){}}if(null!=X&&T.ajax.trackWebSockets){window.WebSocket=function(t,e){var r;return r=null!=e?new X(t,e):new X(t),_("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:r}),r};try{x(window.WebSocket,X)}catch(t){}}}return J(e,a),e}(),D=null,O=function(t){var e,n,r,s;for(n=0,r=(s=T.ajax.ignoreURLs).length;r>n;n++)if("string"==typeof(e=s[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(k=function(){return null==D&&(D=new c),D})().on("request",function(e){var n,r,s,i,o;return i=e.type,s=e.request,o=e.url,O(o)?void 0:l.running||!1===T.restartOnRequestAfter&&"force"!==_(i)?void 0:(r=arguments,"boolean"==typeof(n=T.restartOnRequestAfter||0)&&(n=0),setTimeout(function(){var e,n,o,a,u;if("socket"===i?s.readyState<2:0<(o=s.readyState)&&4>o){for(l.restart(),u=[],e=0,n=(a=l.sources).length;n>e;e++){if((E=a[e])instanceof t){E.watch.apply(E,r);break}u.push(void 0)}return u}},n))}),t=function(){function t(){var t=this;this.elements=[],k().on("request",function(){return t.watch.apply(t,arguments)})}return t.prototype.watch=function(t){var e,n,r,s;return r=t.type,e=t.request,s=t.url,O(s)?void 0:(n="socket"===r?new f(e):new h(e),this.elements.push(n))},t}(),h=function(){return function(t){var e,n,r,s,i,o=this;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",function(t){return o.progress=t.lengthComputable?100*t.loaded/t.total:o.progress+(100-o.progress)/2},!1),n=0,r=(i=["load","abort","timeout","error"]).length;r>n;n++)e=i[n],t.addEventListener(e,function(){return o.progress=100},!1);else s=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?o.progress=100:3===t.readyState&&(o.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}}}(),f=function(){return function(t){var e,n,r,s,i=this;for(this.progress=0,n=0,r=(s=["error","open"]).length;r>n;n++)e=s[n],t.addEventListener(e,function(){return i.progress=100},!1)}}(),r=function(){return function(t){var e,n,r,i;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(i=t.selectors).length;r>n;n++)e=i[n],this.elements.push(new s(e))}}(),s=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},T.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),n=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),i=function(){return function(){var t,e,n,r,s,i=this;this.progress=0,t=0,s=[],r=0,n=j(),e=setInterval(function(){var o;return o=j()-n-50,n=j(),s.push(o),s.length>T.eventLag.sampleCount&&s.shift(),t=m(s),++r>=T.eventLag.minSamples&&t<T.eventLag.lagThreshold?(i.progress=100,clearInterval(e)):i.progress=3/(t+3)*100},50)}}(),d=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=T.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=C(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=C(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/T.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,T.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+T.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),M=null,P=null,y=null,V=null,g=null,v=null,l.running=!1,I=function(){return T.restartOnPushState?l.restart():void 0},null!=window.history.pushState&&(Y=window.history.pushState,window.history.pushState=function(){return I(),Y.apply(window.history,arguments)}),null!=window.history.replaceState&&(H=window.history.replaceState,window.history.replaceState=function(){return I(),H.apply(window.history,arguments)}),p={ajax:t,elements:r,document:n,eventLag:i},($=function(){var t,n,r,s,i,o,a,u;for(l.sources=M=[],n=0,s=(o=["ajax","elements","document","eventLag"]).length;s>n;n++)t=o[n],!1!==T[t]&&M.push(new p[t](T[t]));for(r=0,i=(u=null!=(a=T.extraSources)?a:[]).length;i>r;r++)E=u[r],M.push(new E(T));return l.bar=y=new e,P=[],V=new d})(),l.stop=function(){return l.trigger("stop"),l.running=!1,y.destroy(),v=!0,null!=g&&("function"==typeof w&&w(g),g=null),$()},l.restart=function(){return l.trigger("restart"),l.stop(),l.start()},l.go=function(){var t;return l.running=!0,y.render(),t=j(),v=!1,g=A(function(e,n){var r,s,i,o,a,u,c,p,f,h,g,m,w,b,S;for(100-y.progress,s=h=0,i=!0,u=g=0,w=M.length;w>g;u=++g)for(E=M[u],f=null!=P[u]?P[u]:P[u]=[],c=m=0,b=(a=null!=(S=E.elements)?S:[E]).length;b>m;c=++m)o=a[c],i&=(p=null!=f[c]?f[c]:f[c]=new d(o)).done,p.done||(s++,h+=p.tick(e));return r=h/s,y.update(V.tick(e,r)),y.done()||i||v?(y.update(100),l.trigger("done"),setTimeout(function(){return y.finish(),l.running=!1,l.trigger("hide")},Math.max(T.ghostTime,Math.max(T.minTime-(j()-t),0)))):n()})},l.start=function(t){S(T,t),l.running=!0;try{y.render()}catch(t){u=t}return document.querySelector(".pace")?(l.trigger("start"),l.go()):setTimeout(l.start,50)},"function"==typeof define&&define.amd?define(function(){return l}):"object"==typeof exports?module.exports=l:T.startOnPageLoad&&l.start()}).call(this),function(t){t.fn.marquee=function(e){return this.each(function(){var n,r,s,i,o,a=t.extend({},t.fn.marquee.defaults,e),u=t(this),l=3,c="animation-play-state",p=!1,d=function(t,e,n){for(var r=["webkit","moz","MS","o",""],s=0;s<r.length;s++)r[s]||(e=e.toLowerCase()),t.addEventListener(r[s]+e,n,!1)},f=function(){u.timer=setTimeout(T,a.delayBeforeStart)},h={pause:function(){p&&a.allowCss3Support?n.css(c,"paused"):t.fn.pause&&n.pause(),u.data("runningStatus","paused"),u.trigger("paused")},resume:function(){p&&a.allowCss3Support?n.css(c,"running"):t.fn.resume&&n.resume(),u.data("runningStatus","resumed"),u.trigger("resumed")},toggle:function(){h["resumed"==u.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(u.timer),u.find("*").addBack().off(),u.html(u.find(".js-marquee:first").html())}};if("string"!=typeof e){var g;t.each(a,function(t,e){if(void 0!==(g=u.attr("data-"+t))){switch(g){case"true":g=!0;break;case"false":g=!1}a[t]=g}}),a.speed&&(a.duration=parseInt(u.width(),10)/a.speed*1e3),i="up"==a.direction||"down"==a.direction,a.gap=a.duplicated?parseInt(a.gap):0,u.wrapInner('<div class="js-marquee"></div>');var m=u.find(".js-marquee").css({"margin-right":a.gap,float:"left"});if(a.duplicated&&m.clone(!0).appendTo(u),u.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),n=u.find(".js-marquee-wrapper"),i){var y=u.height();n.removeAttr("style"),u.height(y),u.find(".js-marquee").css({float:"none","margin-bottom":a.gap,"margin-right":0}),a.duplicated&&u.find(".js-marquee:last").css({"margin-bottom":0});var v=u.find(".js-marquee:first").height()+a.gap;a.startVisible&&!a.duplicated?(a._completeDuration=(parseInt(v,10)+parseInt(y,10))/parseInt(y,10)*a.duration,a.duration=parseInt(v,10)/parseInt(y,10)*a.duration):a.duration=(parseInt(v,10)+parseInt(y,10))/parseInt(y,10)*a.duration}else o=u.find(".js-marquee:first").width()+a.gap,r=u.width(),a.startVisible&&!a.duplicated?(a._completeDuration=(parseInt(o,10)+parseInt(r,10))/parseInt(r,10)*a.duration,a.duration=parseInt(o,10)/parseInt(r,10)*a.duration):a.duration=(parseInt(o,10)+parseInt(r,10))/parseInt(r,10)*a.duration;if(a.duplicated&&(a.duration=a.duration/2),a.allowCss3Support){var w=document.body||document.createElement("div"),b="marqueeAnimation-"+Math.floor(1e7*Math.random()),S="Webkit Moz O ms Khtml".split(" "),x="animation",q="",k="";if(void 0!==w.style.animation&&(k="@keyframes "+b+" ",p=!0),!1===p)for(var I=0;I<S.length;I++)if(void 0!==w.style[S[I]+"AnimationName"]){var L="-"+S[I].toLowerCase()+"-";x=L+x,c=L+c,k="@"+L+"keyframes "+b+" ",p=!0;break}p&&(q=b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s infinite "+a.css3easing,u.data("css3AnimationIsSupported",!0))}var $=function(){n.css("transform","translateY("+("up"==a.direction?y+"px":"-"+v+"px")+")")},j=function(){n.css("transform","translateX("+("left"==a.direction?r+"px":"-"+o+"px")+")")};a.duplicated?(i?a.startVisible?n.css("transform","translateY(0)"):n.css("transform","translateY("+("up"==a.direction?y+"px":"-"+(2*v-a.gap)+"px")+")"):a.startVisible?n.css("transform","translateX(0)"):n.css("transform","translateX("+("left"==a.direction?r+"px":"-"+(2*o-a.gap)+"px")+")"),a.startVisible||(l=1)):a.startVisible?l=2:i?$():j();var T=function(){if(a.duplicated&&(1===l?(a._originalDuration=a.duration,a.duration=i?"up"==a.direction?a.duration+y/(v/a.duration):2*a.duration:"left"==a.direction?a.duration+r/(o/a.duration):2*a.duration,q&&(q=b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s "+a.css3easing),l++):2===l&&(a.duration=a._originalDuration,q&&(b+="0",k=t.trim(k)+"0 ",q=b+" "+a.duration/1e3+"s 0s infinite "+a.css3easing),l++)),i?a.duplicated?(l>2&&n.css("transform","translateY("+("up"==a.direction?0:"-"+v+"px")+")"),s={transform:"translateY("+("up"==a.direction?"-"+v+"px":0)+")"}):a.startVisible?2===l?(q&&(q=b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s "+a.css3easing),s={transform:"translateY("+("up"==a.direction?"-"+v+"px":y+"px")+")"},l++):3===l&&(a.duration=a._completeDuration,q&&(b+="0",k=t.trim(k)+"0 ",q=b+" "+a.duration/1e3+"s 0s infinite "+a.css3easing),$()):($(),s={transform:"translateY("+("up"==a.direction?"-"+n.height()+"px":y+"px")+")"}):a.duplicated?(l>2&&n.css("transform","translateX("+("left"==a.direction?0:"-"+o+"px")+")"),s={transform:"translateX("+("left"==a.direction?"-"+o+"px":0)+")"}):a.startVisible?2===l?(q&&(q=b+" "+a.duration/1e3+"s "+a.delayBeforeStart/1e3+"s "+a.css3easing),s={transform:"translateX("+("left"==a.direction?"-"+o+"px":r+"px")+")"},l++):3===l&&(a.duration=a._completeDuration,q&&(b+="0",k=t.trim(k)+"0 ",q=b+" "+a.duration/1e3+"s 0s infinite "+a.css3easing),j()):(j(),s={transform:"translateX("+("left"==a.direction?"-"+o+"px":r+"px")+")"}),u.trigger("beforeStarting"),p){n.css(x,q);var e=k+" { 100%  "+function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+":"+t[n]);return e.push(),"{"+e.join(",")+"}"}(s)+"}",c=n.find("style");0!==c.length?c.filter(":last").html(e):t("head").append("<style>"+e+"</style>"),d(n[0],"AnimationIteration",function(){u.trigger("finished")}),d(n[0],"AnimationEnd",function(){T(),u.trigger("finished")})}else n.animate(s,a.duration,a.easing,function(){u.trigger("finished"),a.pauseOnCycle?f():T()});u.data("runningStatus","resumed")};u.on("pause",h.pause),u.on("resume",h.resume),a.pauseOnHover&&(u.on("mouseenter",h.pause),u.on("mouseleave",h.resume)),p&&a.allowCss3Support?T():f()}else t.isFunction(h[e])&&(n||(n=u.find(".js-marquee-wrapper")),!0===u.data("css3AnimationIsSupported")&&(p=!0),h[e]())})},t.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,speed:0,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}}(jQuery),$(".symbolRowLeft").marquee({duration:2e4,gap:60,delayBeforeStart:0,direction:"right",duplicated:!0,startVisible:!0}),$(".symbolRowRight").marquee({duration:2e4,gap:60,delayBeforeStart:0,direction:"left",duplicated:!0,startVisible:!0}),$(".toggle-overlay").click(function(){$(".about").toggleClass("open")}),$(document).ready(function(){$("body").mousemove(function(t){$(".cursor").css("left",t.pageX),$(".cursor").css("top",t.pageY)})}),$("a, .toggle-overlay, #gridView").hover(function(){$(".cursor").toggleClass("hovering")}),$(".theSymbols .symbol").each(function(t){0!==t&&$(this).attr("id","symbol-"+(t+1))}),$(document).ready(function(){for(var t=1;t<81;t++)$newlink=$("<a class='symbol' href='#symbol-"+t+"'/>"),$("#gridView").append($newlink),$newimg=$("<img src='assets/symbol/small/"+t+".jpg'/>"),$("#gridView .symbol").each(function(t){$(this).append($newimg)})}),$("#gridView .symbol").each(function(t){$(this).append("<div></div>")}),$("video")[0].play()});