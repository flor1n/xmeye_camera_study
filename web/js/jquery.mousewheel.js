/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?module.exports=a:a(jQuery)})(function(d){function l(s){var c=s||window.event,w=j.call(arguments,1),h=0,u=0,t=0,n=0,x,z;if(s=d.event.fix(c),s.type="mousewheel","detail" in c&&(t=c.detail*-1),"wheelDelta" in c&&(t=c.wheelDelta),"wheelDeltaY" in c&&(t=c.wheelDeltaY),"wheelDeltaX" in c&&(u=c.wheelDeltaX*-1),"axis" in c&&c.axis===c.HORIZONTAL_AXIS&&(u=t*-1,t=0),h=t===0?u:t,"deltaY" in c&&(t=c.deltaY*-1,h=t),"deltaX" in c&&(u=c.deltaX,t===0&&(h=u*-1)),t!==0||u!==0){return c.deltaMode===1?(x=d.data(this,"mousewheel-line-height"),h*=x,t*=x,u*=x):c.deltaMode===2&&(z=d.data(this,"mousewheel-page-height"),h*=z,t*=z,u*=z),n=Math.max(Math.abs(t),Math.abs(u)),(!q||n<q)&&(q=n,v(c,n)&&(q/=40)),v(c,n)&&(h/=40,u/=40,t/=40),h=Math[h>=1?"floor":"ceil"](h/q),u=Math[u>=1?"floor":"ceil"](u/q),t=Math[t>=1?"floor":"ceil"](t/q),s.deltaX=u,s.deltaY=t,s.deltaFactor=q,s.deltaMode=0,w.unshift(s,h,u,t),p&&clearTimeout(p),p=setTimeout(m,200),(d.event.dispatch||d.event.handle).apply(this,w)}}function m(){q=null}function v(e,c){return a.settings.adjustOldDeltas&&e.type==="mousewheel"&&c%120==0}var b=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],g="onwheel" in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],j=Array.prototype.slice,p,q,k,a;if(d.event.fixHooks){for(k=b.length;k;){d.event.fixHooks[b[--k]]=d.event.mouseHooks}}a=d.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var c=g.length;c;){this.addEventListener(g[--c],l,!1)}}else{this.onmousewheel=l}d.data(this,"mousewheel-line-height",a.getLineHeight(this));d.data(this,"mousewheel-page-height",a.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var c=g.length;c;){this.removeEventListener(g[--c],l,!1)}}else{this.onmousewheel=null}},getLineHeight:function(c){return parseInt(d(c)["offsetParent" in d.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(c){return d(c).height()},settings:{adjustOldDeltas:!0}};d.fn.extend({mousewheel:function(c){return c?this.bind("mousewheel",c):this.trigger("mousewheel")},unmousewheel:function(c){return this.unbind("mousewheel",c)}})});