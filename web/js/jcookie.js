jQuery.cookie=function(a,g,j){if(typeof g!="undefined"){var f={expires:7,path:"",domain:"",secure:""};j=j||{};if(g===null){g=""}f=$.extend(f,j);if(f.expires&&(typeof f.expires=="number"||f.expires.toUTCString)){var d;if(typeof f.expires=="number"){d=new Date();d.setTime(d.getTime()+(f.expires*24*60*60*1000))}else{d=f.expires}f.expires=";expires="+d.toUTCString()}f.path=f.path?";path="+(f.path):"";f.domain=f.domain?";domain="+(f.domain):"";f.secure=f.secure?";secure="+(f.secure):"";document.cookie=[a,"=",encodeURIComponent(g),f.expires,f.path,f.domain,f.secure].join("")}else{var c=null;if(document.cookie&&document.cookie!=""){var h=document.cookie.split(";");for(var e=0;e<h.length;e++){var b=jQuery.trim(h[e]);if(b.substring(0,a.length+1)==(a+"=")){var c=decodeURIComponent(b.substring(a.length+1,b.length));break}}}return c}};(function(a){jQuery.fn.backgroundPosition=function(){var b=a(this).css("background-position");if(typeof(b)=="undefined"){return a(this).css("background-positionX")+" "+a(this).css("background-positionY")}else{return b}}})(jQuery);