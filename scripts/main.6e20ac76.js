!function(){"use strict";function a(a){console.log("AboutController Constructor"),this.GruntfilesService=a}angular.module("proto.components.about",["proto.service.gruntfiles"]).controller("AboutController",a),a.$inject=["GruntfilesService"],a.prototype.activate=function(){console.log("AboutController Method activate"),b=this;var a=this.GruntfilesService.query().$promise;a.then(c)["catch"](d)};var b,c=function(a){b.list=a},d=function(a){b.error=a}}(),function(){"use strict";function a(){console.log("CameraController Constructor")}angular.module("proto.components.camera",[]).controller("CameraController",a),a.$inject=[],a.prototype.activate=function(){console.log("CameraController activate Method"),b=this};var b}(),function(){"use strict";function a(a){return a&&a.getContext?!0:(alert("Not Supported Canvas."),!1)}function b(a){var b=a.target.files,d=new FileReader;d.readAsDataURL(b[0]),d.onload=function(){c(d,h,0,0)}}function c(a,b,c,h){var j=d(a);j.onload=function(){var a=j.width,d=j.height;if(g("src-width-height",!0,a,d),i.Mobile[0]){var k=f(1024,a,d);g("dst-width-height",k.flag,k.w,k.h),e(b,j,c,h,k.w,k.h)}else g("dst-width-height",!1,0,0),e(b,j,c,h,a,d)}}function d(a){var b=a.result,c=new Image;return c.src=b,c}function e(a,b,c,d,e,f){var g=a.getContext("2d");a.width=e,a.height=f,g.drawImage(b,c,d,e,f)}function f(a,b,c){var d=Math.max(b,c);if(a>=d)return{flag:!1,w:b,h:c};var e,f;return b>=c?(e=a,f=c*a/b):(e=b*a/c,f=a),{flag:!0,w:parseInt(e),h:parseInt(f)}}function g(a,b,c,d){var e=document.getElementById(a);return b?void(e.innerHTML="width:"+c+" height:"+d):void(e.innerHTML="なし")}var h=document.getElementById("mycanvas");window.onload=function(){if(chackFileApi()&&a(h)){var c=document.getElementById("file_image");c.addEventLister("change",b,!1)}};var i=function(a){var b={0:-1!=a.indexOf("windows")&&-1!=a.indexOf("phone")||-1!=a.indexOf("iphone")||-1!=a.indexOf("ipod")||-1!=a.indexOf("android")&&-1!=a.indexOf("mobile")||-1!=a.indexOf("firefox")&&-1!=a.indexOf("mobile")||-1!=a.indexOf("blackberry"),iPhone:-1!=a.indexOf("iphone"),Android:-1!=a.indexOf("android")&&-1!=a.indexOf("mobile")},c=-1!=a.indexOf("windows")&&-1!=a.indexOf("touch")||-1!=a.indexOf("ipad")||-1!=a.indexOf("android")&&-1==a.indexOf("mobile")||-1!=a.indexOf("firefox")&&-1!=a.indexOf("tablet")||-1!=a.indexOf("kindle")||-1!=a.indexOf("silk")||-1!=a.indexOf("playbook"),d=!b[0]&&!c;return{Mobile:b,Tablet:c,PC:d}}(window.navigator.userAgent.toLowerCase())}(),function(){"use strict";function a(){console.log("ContactController Constructor")}angular.module("proto.components.contact",[]).controller("ContactController",a),a.$inject=[],a.prototype.activate=function(){console.log("ContactController activate Method"),b=this,b.case1=20,c()};var b,c=function(){b.case2=10}}(),function(){"use strict";function a(){console.log("HomeController Constructor")}angular.module("proto.components.home",[]).controller("HomeController",a),a.$inject=[],a.prototype.activate=function(){console.log("HomeController activate Method")}}(),function(){"use strict";function a(){console.log("InitialsettingController Constructor")}angular.module("proto.components.initialsetting",[]).controller("InitialsettingController",a),a.$inject=[],a.prototype.activate=function(){console.log("InitialsettingController activate Method")}}(),function(){"use strict";function a(){console.log("LoginController Constructor")}angular.module("proto.components.login",[]).controller("LoginController",a),a.$inject=[],a.prototype.activate=function(){console.log("LoginController activate Method"),b=this};var b}(),function(){"use strict";function a(){console.log("MenuController Constructor")}angular.module("proto.components.menu",[]).controller("MenuController",a),a.$inject=[],a.prototype.activate=function(){console.log("MenuController activate Method"),b=this};var b}(),function(){"use strict";function a(a){a.html5Mode(!0)}angular.module("proto.config",[]).config(a),a.$inject=["$locationProvider"]}(),function(){"use strict";function a(a){var b=a("/api/gruntfiles",{query:{transformResponse:function(a){return angular.fromJson(a)}}});return b}angular.module("proto.service.gruntfiles",["ngResource"]).factory("GruntfilesService",a),a.$inject=["$resource"]}(),function(){"use strict";function a(){}angular.module("proto",["ngNewRouter","proto.config","proto.components.home","proto.components.about","proto.components.contact","proto.components.login","proto.components.menu","proto.components.camera","proto.components.initialsetting"]).controller("AppController",a),a.$routeConfig=[{path:"/",redirectTo:"/login"},{path:"/home",component:"home"},{path:"/about",component:"about"},{path:"/contact",component:"contact"},{path:"/login",component:"login"},{path:"/menu",component:"menu"},{path:"/camera",component:"camera"},{path:"/initialsetting",component:"initialsetting"}],a.$inject=[]}();