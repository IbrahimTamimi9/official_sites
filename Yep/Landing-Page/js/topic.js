var base64Prefix,delay,isChinese,modulate,msg_pswpItems,pswpItems,topic_pswpItems,viewImage;modulate=function(e,t,a,i,s){var r;if(r=i+(e-t)/(a-t)*(s-i),s>i){if(i>r)return i;if(r>s)return s}else{if(r>i)return i;if(s>r)return s}return r},isChinese=function(){return-1!==window.navigator.language.indexOf("zh")},delay=function(e,t){return setTimeout(t,e)},topic_pswpItems=[],msg_pswpItems=[],pswpItems=[],viewImage=function(e,t,a){var i,s,r;return i=$(".pswp")[0],s={index:t,showHideOpacity:!0,history:!1,bgOpacity:.9,getThumbBoundsFn:function(e){var t,i,s;return s=a[e],t=window.pageYOffset||document.documentElement.scrollTop,i=s.getBoundingClientRect(),{x:i.left,y:i.top+t,w:i.width}}},r=new PhotoSwipe(i,PhotoSwipeUI_Default,e,s),delay(10,function(){return r.init()})},base64Prefix="data:image/jpeg;base64,",$(function(){var e,t;return t="https://api.soyep.com/v1/circles/shared_messages",e="?token="+$.url("?token")+"&callback=?",$.getJSON(t+e,function(e){var t,a,i,s,r,n,o,l,d,p,c,u,m,h,g,b,f,w,v,k,_,y,x,C,I,z,P,O,S;switch(r=e.circle,I=e.topic,b=e.messages,p=I.kind,$(".topic .avatar").css("background-image","url("+I.user.avatar.thumb_url+")"),$(".topic .avatar").attr("username",I.user.username),$(".topic .nickname").html(I.user.nickname),$(".topic .time").html($.timeago(1e3*r.created_at)),I.body?$(".topic .text").html(I.body):$(".topic .text").hide(),"image"!==p&&$(".topic .images").remove(),p){case"text":$(".topic .text").show();break;case"image":for(y=I.attachments,l=0,c=y.length;c>l;l++)z=y[l],P=$.parseJSON(z.metadata),S=base64Prefix+P.thumbnail_string,$("<div/>",{"class":"thumbnail"}).css("background-image","url("+S+")").appendTo(".images .thumbnails"),O={msrc:S,src:z.file.url,w:P.image_width,h:P.image_height},topic_pswpItems.push(O);$(".topic .images").show(),$(".topic .images .thumbnails .thumbnail").on("tap",function(){return viewImage(topic_pswpItems,$(this).index(),$(".topic .images .thumbnails .thumbnail"))});break;case"audio":t=I.attachments[0],s=$.parseJSON(t.metadata),a=Math.round(s.audio_duration),i=$("<audio controls>",{src:t.file.url,preload:"auto"}),i.append($("<source>",{src:t.file.url,type:"audio/mpeg"})),n=$(".topic .audio .player"),n.append(i),n.append($("<button/>")),n.append($("<progress/>",{max:100,value:0}).css("width",20*a+"px")),n.append($("<label/>").html(a+"″")),n.parent().show();break;case"location":m=I.attachments[0],h={key:"P8qeoPmMSc6FKpMvbLKWVrR0",lng:m.longitude,lat:m.latitude,place:m.place,width:200,height:80,zoom:16},h.img="https://api.map.baidu.com/staticimage?center="+h.lng+","+h.lat+"&width="+h.width+"&height="+h.height+"&zoom="+h.zoom+"&ak="+h.key,h.url="https://maps.google.cn/maps?q="+h.lat+","+h.lng+"&z="+h.zoom+"&ll="+h.lat+","+h.lng,n=$(".topic .location"),n.attr("href",h.url),n.attr("target","_blank"),g=$("<img/>",{src:h.img}).css({width:h.width+"px",height:h.height+"px"}),n.append(g),n.append($("<div/>",{"class":"marker"})),n.css("display","block"),h.place&&n.append($("<div/>",{"class":"place"}).html(h.place));break;case"dribbble":C=I.attachments[0],$(".topic .dribbble").show(),$(".topic .dribbble img.shot").attr("src",C.media_url),$(".topic .dribbble a.link").html(C.title).attr("href",C.url).attr("target","_blank"),pswpItems=[{msrc:C.media_url,src:C.media_url.replace("_1x.","."),w:800,h:600}],$(".topic .dribbble .shot").on("tap",function(){return viewImage(pswpItems,0,$(this))});break;case"github":x=I.attachments[0],$(".topic .github").css("display","table").attr("href",x.url).attr("target","_blank"),$(".topic .github .name").html(x.name),$(".topic .github .desc").html(x.description)}for($(".chat").css("padding-top",$(".topic").css("height")),b.length?$(".nomsg").hide():$(".footer .popup").addClass("show"),d=0,u=b.length;u>d;d++){if(f=b[d],f.deleted)o=$("<div/>",{"class":"cell"}),n=$("<div/>",{"class":"narrator"}).html(f.sender.nickname+" recalled a message"),n.appendTo(o);else switch(o=$(".template.cell").clone().removeClass("template"),n=o.find(".content"),o.find(".avatar").css("background-image","url("+f.sender.avatar.thumb_url+")"),f.sender.username&&o.find(".avatar").css("cursor","pointer"),o.find(".avatar").attr("username",f.sender.username),o.find(".nickname").html(f.sender.nickname),w=f.attachments[0],_=w?$.parseJSON(w.metadata):void 0,f.media_type){case"text":n.addClass("text").html(f.text_content);break;case"image":v=$.parseJSON(w.metadata),k=base64Prefix+v.blurred_thumbnail_string,n.addClass("image").append($("<img/>",{src:w.file.thumb_url})).css("background-image","url("+k+")"),msg_pswpItems.push({msrc:w.file.thumb_url,src:w.file.url,w:v.image_width,h:v.image_height});break;case"audio":a=Math.round(_.audio_duration),i=$("<audio controls>",{src:w.file.url,preload:"auto"}),i.append($("<source>",{src:w.file.url,type:"audio/mpeg"})),n.addClass("audio").append(i),n.addClass("audio").append($("<button/>")),n.addClass("audio").append($("<progress/>",{max:100,value:0}).css("width",20*a+"px")),n.addClass("audio").append($("<label/>").html(a+"″"));break;case"location":h={key:"P8qeoPmMSc6FKpMvbLKWVrR0",lng:f.longitude,lat:f.latitude,address:f.text_content,width:200,height:100,zoom:16},h.img="https://api.map.baidu.com/staticimage?center="+h.lng+","+h.lat+"&width="+h.width+"&height="+h.height+"&zoom="+h.zoom+"&ak="+h.key,h.url="https://maps.google.cn/maps?q="+h.lat+","+h.lng+"&z="+h.zoom+"&ll="+h.lat+","+h.lng,n.attr("href",h.url),n.attr("target","_blank"),n.addClass("location").css({width:h.width+"px",height:h.height+"px",backgroundImage:"url("+h.img+")"}),n.append($("<div/>",{"class":"marker"})),h.address&&n.append($("<div/>",{"class":"address"}).html(h.address))}o.appendTo(".chat .table")}return $(".chat .bubble .image").click(function(){return viewImage(msg_pswpItems,$(".chat .bubble .image").index($(this)),$(".chat .bubble .image"))}),$(".avatar").click(function(){var e;return e=$(this).attr("username"),e?window.open("https://soyep.com/"+e):void 0}),$(document).scroll(function(){return $(this).scrollTop()>=$(this).height()-$(window).height()-100?$(".footer .popup").addClass("show"):$(".footer .popup").removeClass("show")}),$(".chat .bubble .audio, .topic .audio").on("tap",function(){var e,t,a;return a=$.media($(this).find("audio")),t=$(this).find("button"),e=$(this).find("progress"),a.playPause(),a.play(function(){return t.addClass("playing")}),a.pause(function(){return t.removeClass("playing")}),a.ended(function(){return t.removeClass("playing"),a.stop(),e.attr("value",0)}),a.time(function(){var t;return t=modulate(this.time(),0,this.duration(),0,100),e.attr("value",t)})}),$(".text").linkify()}),os.ios&&$(".android").hide(),os.android&&$(".ios").hide(),"-webkit-backdrop-filter"in document.body.style?($(".footer").addClass("bfblur"),$(".container .topic").addClass("bfblur"),$(".pswp__bg").addClass("bfblur dark")):void 0});
//# sourceMappingURL=topic.js.map
