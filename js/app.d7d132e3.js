(function(t){function a(a){for(var s,r,c=a[0],l=a[1],o=a[2],u=0,v=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(v.length)v.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,c=1;c<e.length;c++){var l=e[c];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/CV/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var d=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"010d":function(t,a,e){},"034f":function(t,a,e){"use strict";e("85ec")},"0aac":function(t,a,e){"use strict";e("3a82")},1539:function(t,a,e){"use strict";e("c971")},"246d":function(t,a,e){},"3a82":function(t,a,e){},5539:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.showBanner?e("Banner",{on:{"cloas-banner":t.cloasBanner}}):t._e(),t.showContent?e("Header"):t._e(),t.showContent?e("FirstSection"):t._e(),t.showContent?e("SkillSection"):t._e(),t.showContent?e("div",{staticClass:"groupe-section"},[t.showContent?e("Portfolio"):t._e(),t.showContent?e("WorkExperience"):t._e()],1):t._e(),t.showContent?e("ContactMe"):t._e(),t.showContent?e("Footer"):t._e(),e("div",{staticClass:"share"},[t.showContent?e("Share"):t._e()],1)],1)},n=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"banner"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header-content"},[e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"circle-wrapper"},[e("div",{staticClass:"error circle"}),e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-times"}),e("font-awesome-icon",{attrs:{icon:"user-secret"}})],1)])])]),t._m(0),e("div",{staticClass:"footer-content"},[e("button",{staticClass:"btn",attrs:{id:"Success-banner"},on:{click:function(a){return t.$emit("cloas-banner",!1)}}},[e("span",{staticClass:"noselect"},[t._v("Hello!")])])]),e("p",{staticStyle:{color:"#ffffff80"}},[t._v("The site is written in Vue JS.")])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-content"},[e("h1",[t._v("Hello My Friend!")]),e("p",[t._v(" Enthusiastic full stack web developer welcomes you. "),e("br"),t._v(" Here you will find my biography ... "),e("br")])])}],l={props:["showBanner"]},o=l,d=(e("e571"),e("2877")),u=Object(d["a"])(o,r,c,!1,null,"1bf59ea9",null),v=u.exports,f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"share"}},[e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[t._v("Share")]),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" In ")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" FB ")])])])])])])}],_={},h=_,m=(e("9ed0"),Object(d["a"])(h,f,p,!1,null,"4c26a4a1",null)),C=m.exports,b=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"logo"},[s("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:e("cf05")}})]),s("div",{staticClass:"nav"},[s("ul",[s("li",[s("a",{attrs:{href:"#firstSection"}},[s("p",[t._v("Home")])])]),s("li",[s("a",{attrs:{href:"#skillsSection"}},[s("p",[t._v("Skills")])])]),s("li",[s("a",{attrs:{href:"#Portfolio"}},[s("p",[t._v("Portfolio")])])]),s("li",[s("a",{attrs:{href:"#WorkExperience"}},[s("p",[t._v("Experience")])])]),s("li",[s("a",{attrs:{href:"#ContactMeContent"}},[s("p",[t._v("Contact Me")])])])])])])}],x={},g=x,j=(e("0aac"),Object(d["a"])(g,b,w,!1,null,"63b4c975",null)),k=j.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"firstSection"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"about-us-info"},[t._m(0),e("h2",{domProps:{innerHTML:t._s(t.paper)}}),e("span",{staticClass:"slash"},[t._v("|")])])])])},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",[e("span",{staticClass:"change-color"},[t._v("V")]),t._v("ardan "),e("br"),t._v(" Petrosyan "),e("span",{staticClass:"change-color"},[t._v(".")])])}],E={data:function(){return{titleText:"Full-stack web developer...",paper:"",timer:null}},mounted:function(){this.printer()},methods:{printer:function(){var t=this,a=-1;this.timer=setInterval((function(){a++;var e=a%t.titleText.length;t.paper+=t.titleText[e],a==t.titleText.length-1&&t.stoper()}),250)},stoper:function(){clearInterval(this.timer)}}},S=E,P=(e("1539"),Object(d["a"])(S,y,O,!1,null,"66e628cd",null)),$=P.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"skillsSection"}},[e("div",{staticClass:"content"},[t._m(0),e("div",{staticClass:"main-box",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"back-end",attrs:{"data-aos":"fade-right"}},[e("p",{attrs:{"data-aos":"fade-down"}},[t._v("Back-end developent")]),e("div",{staticClass:"skill-items"},[e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val1,callback:function(a){t.val1=a},expression:"val1"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val1)+"%")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val1,callback:function(a){t.val1=a},expression:"val1"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val3)+"%")])],1)])]),e("div",{attrs:{"data-aos":"fade-right"}},[e("p",{attrs:{"data-aos":"fade-down"}},[t._v("Fron-end developent")]),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val2,callback:function(a){t.val2=a},expression:"val2"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val2)+"%")])],1)]),e("div",{attrs:{"data-aos":"fade-right"}},[e("p",{attrs:{"data-aos":"fade-down"}},[t._v("Fron-end developent")]),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val2,callback:function(a){t.val2=a},expression:"val2"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val2)+"%")])],1)])])])])},I=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-box",attrs:{"data-aos":"fade-up"}},[e("h3",{staticClass:"numOfTitle"},[t._v("01")]),e("h3",{staticClass:"title"},[t._v("SKILLS")])])}],H={data:function(){return{timer:null,val1:0,val2:0,val3:0}},components:{},mounted:function(){this.printer()},methods:{printer:function(){var t=this,a=1,e=!1,s=!1,i=!1;this.timer=setInterval((function(){a++,40==t.val1?e=!0:t.val1=a,74==t.val2?s=!0:t.val2=a,64==t.val3?i=!0:t.val3=a,1==e&&1==s&&1==i&&t.stoper()}),35)},stoper:function(){clearInterval(this.timer)}}},M=H,T=(e("7b77"),Object(d["a"])(M,B,I,!1,null,"3e48b0d2",null)),F=T.exports,W=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Portfolio"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"title-box",attrs:{"data-aos":"fade-up"}},[e("h3",{staticClass:"numOfTitle"},[t._v("02")]),e("h3",{staticClass:"title"},[t._v("PORTFOLIO")])]),e("div",{staticClass:"show-more",attrs:{"data-aos":"fade-up"}},[e("span",[t._v("FRESH WORKS.")]),e("a",{attrs:{href:"#"}},[t._v("SHOW MORE ...")])]),e("div",{staticClass:"main-box"},[e("div",{staticClass:"projectItem",attrs:{"data-aos":"fade-right"}},[e("a",{staticClass:"myProjectsHref",attrs:{href:"#",alt:"projectN1"}},[e("img",{staticClass:"myProjectsImg",attrs:{width:"80%",src:"https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp",alt:"project"}})])]),e("div",{staticClass:"projectItem",attrs:{"data-aos":"fade-up"}},[e("a",{staticClass:"myProjectsHref",attrs:{href:"#",alt:"projectN1"}},[e("img",{staticClass:"myProjectsImg",attrs:{width:"80%",src:"https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp",alt:"project"}})])]),e("div",{staticClass:"projectItem",attrs:{"data-aos":"fade-left"}},[e("a",{staticClass:"myProjectsHref",attrs:{href:"#",alt:"projectN1"}},[e("img",{staticClass:"myProjectsImg",attrs:{width:"80%",src:"https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp",alt:"project"}})])])])])])}],R={},N=R,V=(e("5a42"),Object(d["a"])(N,W,L,!1,null,"623ce898",null)),z=V.exports,q=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"WorkExperience"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"title-box",attrs:{"data-aos":"fade-up"}},[e("h3",{staticClass:"numOfTitle"},[t._v("03")]),e("h3",{staticClass:"title"},[t._v("WORK EXPERIENCE")])]),e("div",{staticClass:"main-box"},[e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"}),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-left","data-aos-duration":"400"}},[t._v("2014—2016")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-left","data-aos-duration":"500"}},[t._v("HOP!")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-left","data-aos-duration":"600"}},[t._v("Креативный директор")]),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-left","data-aos-duration":"700"}},[t._v(" Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. ")])])]),e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-right","data-aos-duration":"400"}},[t._v("2014—2016")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-right","data-aos-duration":"500"}},[t._v("HOP!")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-right","data-aos-duration":"600"}},[t._v("Креативный директор")]),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-right","data-aos-duration":"700"}},[t._v(" Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. ")])]),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"})])])])])}],K={},A=K,G=(e("faed"),Object(d["a"])(A,q,J,!1,null,"658227a2",null)),X=G.exports,D=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"ContactMe"}},[e("div",{staticClass:"content",attrs:{id:"ContactMeContent","data-aos":"fade-up"}},[e("div",{staticClass:"contacts"},[e("div",{staticClass:"rightBar"},[e("h3",[t._v(" СВЯЖИТЕСЬ СО МНОЙ ")]),e("p",[t._v(" Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. ")]),e("ul",[e("li",[t._v("info@mysite.ru")]),e("li",[t._v("+7 (495) 000-00-00")])])]),e("div",{staticClass:"leftBar"},[e("div",{staticClass:"firstSection"},[e("input",{attrs:{type:"text",value:"",placeholder:"Name",name:""}}),e("input",{attrs:{type:"text",value:"",placeholder:"E-mail",name:""}})]),e("div",{staticClass:"secondSection"},[e("input",{attrs:{type:"number",value:"",placeholder:"Tel",name:""}})]),e("div",{staticClass:"thirdSection"},[e("textarea",{attrs:{type:"text",value:"",placeholder:"Massage ...",name:""}})]),e("div",{staticClass:"lastSection"},[e("button",{staticClass:"btn"},[t._v("Send")])])])]),e("div",{staticClass:"social"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" In ")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" FB ")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" G ")])])])])])])])}],U={},Y=U,Z=(e("daeb"),Object(d["a"])(Y,D,Q,!1,null,"c15f2c20",null)),tt=Z.exports,at=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"Copyright"}},[s("div",{staticClass:"logoBox"},[s("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:e("cf05")}})]),s("div",[s("p",[t._v("© 2023 Руслан Каро. Сайт создан на Wix.com")])]),s("div")])}],st={},it=st,nt=(e("6a30"),Object(d["a"])(it,at,et,!1,null,"ec788252",null)),rt=nt.exports,ct={name:"App",data:function(){return{showBanner:!0,showContent:!1}},components:{Banner:v,Header:k,FirstSection:$,SkillSection:F,Portfolio:z,WorkExperience:X,ContactMe:tt,Footer:rt,Share:C},methods:{cloasBanner:function(t){0==t&&(this.showBanner=!1,this.showContent=!0)}}},lt=ct,ot=(e("034f"),Object(d["a"])(lt,i,n,!1,null,null,null)),dt=ot.exports,ut=e("ecee"),vt=e("c074"),ft=e("ad3d"),pt=e("deba"),_t=e("f5af"),ht=e.n(_t);e("e829");ut["c"].add(vt["a"]),s["a"].use(pt["default"]),s["a"].component("font-awesome-icon",ft["a"]),s["a"].config.productionTip=!1,new s["a"]({created:function(){ht.a.init()},render:function(t){return t(dt)}}).$mount("#app")},"5a42":function(t,a,e){"use strict";e("fec4")},"6a30":function(t,a,e){"use strict";e("b1f1")},"705e":function(t,a,e){},"71d9":function(t,a,e){},"7b77":function(t,a,e){"use strict";e("71d9")},"85ec":function(t,a,e){},"9ed0":function(t,a,e){"use strict";e("246d")},b1f1:function(t,a,e){},c971:function(t,a,e){},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"},daeb:function(t,a,e){"use strict";e("705e")},e571:function(t,a,e){"use strict";e("010d")},faed:function(t,a,e){"use strict";e("5539")},fec4:function(t,a,e){}});
//# sourceMappingURL=app.d7d132e3.js.map