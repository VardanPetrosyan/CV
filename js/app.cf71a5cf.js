(function(t){function a(a){for(var s,o,l=a[0],n=a[1],c=a[2],u=0,v=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,l=1;l<e.length;l++){var n=e[l];0!==i[n]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/CV/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=n;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"0585":function(t,a,e){},"0b98":function(t,a,e){},"118e":function(t,a,e){"use strict";e("0b98")},1539:function(t,a,e){"use strict";e("c971")},4773:function(t,a,e){"use strict";e("d74d")},"4a5a":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Share"),e("Header"),e("vue-draggable-resizable",{attrs:{w:100,h:100,x:t.x,y:t.y,parent:!0},on:{dragging:t.onDrag,resizing:t.onResize}},[e("div",{staticClass:"quick-menu"},[e("quick-menu",{attrs:{"menu-count":t.getCount,"icon-class":t.icons,"menu-url-list":t.list,"background-color":t.backgroundColor,color:t.color,position:t.position,"is-open-new-tab":t.getIsOpenNewTab},on:{process:t.print}})],1)]),e("router-view"),e("Footer")],1)},r=[],o=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"share"}},[e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[t._v("Share")]),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" In ")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" FB ")])])])])])])}],n={},c=n,d=(e("c906"),e("2877")),u=Object(d["a"])(c,o,l,!1,null,"5c297496",null),v=u.exports,p=e("f3fb"),f=e.n(p),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"banner"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header-content"},[e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"circle-wrapper"},[e("div",{staticClass:"error circle"}),e("div",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:"user-secret"}})],1)])])]),t._m(0),e("div",{staticClass:"footer-content"},[e("button",{staticClass:"btn",attrs:{id:"Success-banner"},on:{click:function(a){return t.$emit("cloas-banner",!1)}}},[e("span",{staticClass:"noselect"},[t._v("Hello!")])])]),e("p",{staticStyle:{color:"#ffffff80"}},[t._v("The site is written in Vue JS.")]),e("p",{staticStyle:{color:"#ffffff80"}},[t._v("The back end is not yet complete. (COMING SOON).")])])])},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-content"},[e("h1",[t._v("Hello !")]),e("p",[t._v(" Enthusiastic full stack web developer welcomes you. "),e("br"),t._v(" Here you will find my biography ... "),e("br")])])}],C={props:["showBanner"]},_=C,g=(e("118e"),Object(d["a"])(_,h,m,!1,null,"1c70a296",null)),b=g.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"header"}},[t._m(0),e("div",{staticClass:"nav"},[e("ul",[e("li",[e("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#firstSection",expression:"'#firstSection'"}],attrs:{to:"/CV"}},[e("p",[t._v("Home")])])],1),e("li",[e("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skillsSection",expression:"'#skillsSection'"}],attrs:{to:"/CV"}},[e("p",[t._v("Skills")])])],1),e("li",[e("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#content",expression:"'#content'"}],attrs:{to:"/CV/portfolio"}},[e("p",[t._v("Portfolio")])])],1),e("li",[e("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#WorkExperience",expression:"'#WorkExperience'"}],attrs:{to:"/CV"}},[e("p",[t._v("Experience")])])],1),e("li",[e("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#ContactMeContent",expression:"'#ContactMeContent'"}],attrs:{to:"/CV"}},[e("p",[t._v("Contact Me")])])],1)])])])},x=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"logo"},[s("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:e("cf05")}})])}],w=e("fb19"),j=e.n(w),y={data:function(){return{showBanner:!0,showContent:!1}},components:{}},S=y,O=(e("4773"),Object(d["a"])(S,k,x,!1,null,"df2edf9a",null)),E=O.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"Copyright"}},[s("div",{staticClass:"logoBox"},[s("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:e("cf05")}})]),s("div",[s("p",[t._v("© 2023 Руслан Каро. Сайт создан на Wix.com")])]),s("div")])}],P={},B=P,I=(e("6a30"),Object(d["a"])(B,L,N,!1,null,"ec788252",null)),V=I.exports,M={name:"App",data:function(){return{showBanner:!0,showContent:!1,width:0,height:0,x:window.innerWidth-100,y:window.innerHeight-100,count:4,icons:["fa fa-home","fa fa-history","fa fa-cogs","fa fa-address-card"],list:[{isLink:!0,url:"/CV/"},{isLink:!0,url:"/CV/#skillsSection"},{isLink:!0,url:"/CV/portfolio/#content"},{isLink:!0,url:"/CV/#ContactMeContent"}],backgroundColor:"rgb(170 174 177)",color:"black",position:"bottom-right",isOpenNewTab:!1}},components:{Header:E,Footer:V,Share:v,quickMenu:f.a,Banner:b},methods:{onResize:function(t,a,e,s){this.x=t,this.y=a,this.width=e,this.height=s},onDrag:function(t,a){this.x=t,this.y=a},cloasBanner:function(t){0==t&&(this.showBanner=!1,this.showContent=!0,$emit("cloas-banner",!1))}}},T=M,$=(e("034f"),Object(d["a"])(T,i,r,!1,null,null,null)),W=$.exports,H=e("ecee"),z=e("c074"),F=e("ad3d"),R=e("deba"),A=e("f5af"),J=e.n(A),q=(e("e829"),e("8c4f")),D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Home"}},[e("FirstSection"),e("SkillSection"),e("div",{staticClass:"groupe-section"},[e("Portfolio"),e("WorkExperience")],1),e("ContactMe")],1)},K=[],G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"firstSection"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"about-us-info"},[t._m(0),e("h2",{domProps:{innerHTML:t._s(t.paper)}}),e("span",{staticClass:"slash"},[t._v("|")])])])])},Q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",[e("span",{staticClass:"change-color"},[t._v("V")]),t._v("ardan "),e("br"),t._v(" Petrosyan "),e("span",{staticClass:"change-color"},[t._v(".")])])}],U={data:function(){return{titleText:"Full-stack web developer...",paper:"",timer:null}},mounted:function(){this.printer()},methods:{printer:function(){var t=this,a=-1;this.timer=setInterval((function(){a++;var e=a%t.titleText.length;t.paper+=t.titleText[e],a==t.titleText.length-1&&t.stoper()}),250)},stoper:function(){clearInterval(this.timer)}}},X=U,Y=(e("1539"),Object(d["a"])(X,G,Q,!1,null,"66e628cd",null)),Z=Y.exports,tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"skillsSection"}},[e("div",{staticClass:"content"},[t._m(0),e("div",{staticClass:"main-box",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"back-end",attrs:{"data-aos":"fade-right"}},[e("p",{attrs:{"data-aos":"fade-down"}},[t._v("Back-end developent")]),e("div",{staticClass:"skill-items",attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val1,callback:function(a){t.val1=a},expression:"val1"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val1)+"%")]),e("p",[t._v("PHP")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val3,callback:function(a){t.val3=a},expression:"val3"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val3)+"%")]),e("p",[t._v("LARAVEL")])],1)])]),e("div",{staticClass:"fron-end",attrs:{"data-aos":"fade-right"}},[e("p",{attrs:{"data-aos":"fade-down"}},[t._v("Fron-end developent")]),e("div",{staticClass:"skill-items",attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val2,callback:function(a){t.val2=a},expression:"val2"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val2)+"%")]),e("p",[t._v("HTML")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val4,callback:function(a){t.val4=a},expression:"val4"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val4)+"%")]),e("p",[t._v("CSS")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val5,callback:function(a){t.val5=a},expression:"val5"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val5)+"%")]),e("p",[t._v("SASS")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val6,callback:function(a){t.val6=a},expression:"val6"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val6)+"%")]),e("p",[t._v("BOOTSTRAP")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val7,callback:function(a){t.val7=a},expression:"val7"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val7)+"%")]),e("p",[t._v("JavaScript")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val8,callback:function(a){t.val8=a},expression:"val8"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val8)+"%")]),e("p",[t._v("Jquery")])],1),e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val9,callback:function(a){t.val9=a},expression:"val9"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val9)+"%")]),e("p",[t._v("Vue JS")])],1)])]),e("div",{staticClass:"cms",attrs:{"data-aos":"fade-right"}},[e("p",{attrs:{"data-aos":"fade-down"}},[t._v("CMS")]),e("div",{staticClass:"skill-items",attrs:{"data-aos":"fade-right"}},[e("div",{staticClass:"skill-item"},[e("circle-slider",{attrs:{min:0,max:100,"step-size":1,"circle-width":12,"progress-width":3,"knob-radius":4},model:{value:t.val10,callback:function(a){t.val10=a},expression:"val10"}}),e("div",{staticClass:"skill-value"},[t._v(t._s(t.val10)+"%")]),e("p",[t._v("PrestaShop")])],1)])])])])])},at=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-box",attrs:{"data-aos":"fade-up"}},[e("h3",{staticClass:"numOfTitle"},[t._v("01")]),e("h3",{staticClass:"title"},[t._v("SKILLS")])])}],et={data:function(){return{timer:null,val1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0,val8:0,val9:0,val10:0}},components:{},mounted:function(){this.printer()},methods:{printer:function(){var t=this,a=1,e=!1,s=!1,i=!1,r=!1,o=!1,l=!1,n=!1,c=!1,d=!1,u=!1;this.timer=setInterval((function(){a++,60==t.val1?e=!0:t.val1=a,90==t.val2?s=!0:t.val2=a,50==t.val3?i=!0:t.val3=a,90==t.val4?r=!0:t.val4=a,50==t.val5?o=!0:t.val5=a,80==t.val6?l=!0:t.val6=a,60==t.val7?n=!0:t.val7=a,70==t.val8?c=!0:t.val8=a,30==t.val9?d=!0:t.val9=a,50==t.val10?u=!0:t.val10=a,1==e&&1==s&&1==i&&1==r&&1==o&&1==l&&1==n&&1==c&&1==d&&1==u&&t.stoper()}),35)},stoper:function(){clearInterval(this.timer)}}},st=et,it=(e("f896"),Object(d["a"])(st,tt,at,!1,null,"62056deb",null)),rt=it.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Portfolio"}},[e("div",{staticClass:"content"},[t._m(0),e("div",{staticClass:"show-more",attrs:{"data-aos":"fade-up"}},[e("span",[t._v("FRESH WORKS.")]),e("router-link",{staticClass:"link-portfolio",attrs:{to:"/CV/portfolio"}},[t._v("SHOW MORE ...")])],1),t._m(1)])])},lt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-box",attrs:{"data-aos":"fade-up"}},[e("h3",{staticClass:"numOfTitle"},[t._v("02")]),e("h3",{staticClass:"title"},[t._v("PORTFOLIO")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-box"},[e("div",{staticClass:"projectItem",attrs:{"data-aos":"fade-right"}},[e("a",{staticClass:"myProjectsHref",attrs:{href:"#",alt:"projectN1"}},[e("img",{staticClass:"myProjectsImg",attrs:{width:"80%",src:"https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp",alt:"project"}})])]),e("div",{staticClass:"projectItem",attrs:{"data-aos":"fade-up"}},[e("a",{staticClass:"myProjectsHref",attrs:{href:"#",alt:"projectN1"}},[e("img",{staticClass:"myProjectsImg",attrs:{width:"80%",src:"https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp",alt:"project"}})])]),e("div",{staticClass:"projectItem",attrs:{"data-aos":"fade-left"}},[e("a",{staticClass:"myProjectsHref",attrs:{href:"#",alt:"projectN1"}},[e("img",{staticClass:"myProjectsImg",attrs:{width:"80%",src:"https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp",alt:"project"}})])])])}],nt={},ct=nt,dt=(e("9c8d"),Object(d["a"])(ct,ot,lt,!1,null,"15afe7f8",null)),ut=dt.exports,vt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"WorkExperience"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"title-box",attrs:{"data-aos":"fade-up"}},[e("h3",{staticClass:"numOfTitle"},[t._v("03")]),e("h3",{staticClass:"title"},[t._v("WORK EXPERIENCE")])]),e("div",{staticClass:"main-box"},[e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"}),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-left","data-aos-duration":"400"}},[t._v("2021.01 - 2021.04")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-left","data-aos-duration":"500"}},[t._v("Beeoncode LLC")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-left","data-aos-duration":"600"}},[t._v("Full-stack web developer")]),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-left","data-aos-duration":"700"}},[t._v(" Worked with senior developers and designers to implement web sites using HTML,CSS,Bootstrap,Jquery and Laravel. Mastered and expanded upon the skills/tasking that I was assigned during my internship phase. I started to develop my understanding of Prestashop CMS and learned how to use Vue js framework. ")])])]),e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-right","data-aos-duration":"400"}},[t._v("2020.08 - 2020.10")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-right","data-aos-duration":"500"}},[t._v("Beeoncode LLC")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-right","data-aos-duration":"600"}},[t._v("Full-stack web developer intern")]),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-right","data-aos-duration":"700"}},[t._v(" Lerned software tools in cooperation with continuous integration also test automation and supported. Wrote clean, clear and well-tested code for various projects. Prepared detailed reports on updates to project specifications, progress, identified conflicts and team activities. Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity. Resolved problems, improved operations and provided exceptional service. ")])]),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"})]),e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"}),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-left","data-aos-duration":"400"}},[t._v("2015 sep - 2021 ")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-left","data-aos-duration":"500"}},[t._v("National Polytechnic University of Armenia")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-left","data-aos-duration":"600"}},[t._v("B.Sc Cybernetics Faculty")]),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-left","data-aos-duration":"700"}})])]),e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-right","data-aos-duration":"400"}},[t._v("2020.02 - 2020.07 ")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-right","data-aos-duration":"500"}},[t._v("Beeoncode LLC")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-right","data-aos-duration":"600"}},[t._v("Training for a web developer ")]),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-right","data-aos-duration":"700"}},[t._v(' I learned programming languages ​​such as "HTML, CSS, SASS, LESS, BOOTSTRAP, JS, JQUERY, PHP, LARAVEL" ')])]),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"})]),e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"}),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-left","data-aos-duration":"400"}},[t._v("2012 sep -may 2015")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-left","data-aos-duration":"500"}},[t._v("High School No.4")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-left","data-aos-duration":"600"}}),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-left","data-aos-duration":"700"}})])]),e("div",{staticClass:"experienceItem"},[e("div",{staticClass:"leftBox"},[e("p",{staticClass:"yearOfExperience",attrs:{"data-aos":"fade-right","data-aos-duration":"400"}},[t._v("2004 sep - 2012may ")]),e("h3",{staticClass:"placeOfWork",attrs:{"data-aos":"fade-right","data-aos-duration":"500"}},[t._v("School No.7")]),e("p",{staticClass:"job",attrs:{"data-aos":"fade-right","data-aos-duration":"600"}}),e("span",{staticClass:"aboutWork",attrs:{"data-aos":"fade-right","data-aos-duration":"700"}})]),e("div",{staticClass:"verticaleLineBox"},[e("div",{staticClass:"verticaleLine"})]),e("div",{staticClass:"rightBox"})])])])])}],ft={},ht=ft,mt=(e("cd1b"),Object(d["a"])(ht,vt,pt,!1,null,"ccd68aa6",null)),Ct=mt.exports,_t=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"ContactMe"}},[e("div",{staticClass:"content",attrs:{id:"ContactMeContent","data-aos":"fade-up"}},[e("div",{staticClass:"contacts"},[e("div",{staticClass:"rightBar"},[e("h3",[t._v(" Contacts ")]),e("p",[t._v(" My personal informations ")]),e("hr"),e("ul",[e("li",[e("span",[t._v("In:")]),e("a",{attrs:{href:"https://www.linkedin.com/in/vardan-petrosyan-a4051b210",target:"_blank"}},[t._v("Vardan Petrosyan")])]),e("li",[e("span",[t._v("E-mail:")]),e("a",{attrs:{href:"mailto:Vardan.petrosyan777@mail.ru",target:"_blank"}},[t._v("Vardan.petrosyan777@mail.ru")])]),e("li",[e("span",[t._v("Tell:")]),e("a",{attrs:{href:"tel:+37477123410",target:"_blank"}},[t._v("+374 77-12-34-10")])])])]),e("div",{staticClass:"leftBar"},[e("div",{staticClass:"firstSection"},[e("input",{attrs:{type:"text",value:"",placeholder:"Name *",name:""}}),e("input",{attrs:{type:"text",value:"",placeholder:"E-mail *",name:""}})]),e("div",{staticClass:"secondSection"},[e("input",{attrs:{type:"number",value:"",placeholder:"Tel",name:""}})]),e("div",{staticClass:"thirdSection"},[e("textarea",{attrs:{type:"text",value:"",placeholder:"Massage ... *",name:""}})]),e("div",{staticClass:"lastSection"},[e("button",{staticClass:"btn"},[t._v("Send")])])])]),e("div",{staticClass:"social"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" In ")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" FB ")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("p",[t._v(" G ")])])])])])])])}],bt={},kt=bt,xt=(e("fe22"),Object(d["a"])(kt,_t,gt,!1,null,"1f39e08c",null)),wt=xt.exports,jt={data:function(){return{}},components:{FirstSection:Z,SkillSection:rt,Portfolio:ut,WorkExperience:Ct,ContactMe:wt}},yt=jt,St=(e("cccb"),Object(d["a"])(yt,D,K,!1,null,null,null)),Ot=St.exports,Et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"portfolio"}},[e("div",{staticClass:"content",attrs:{id:"content"}},[e("div",{ref:"mySpan",staticClass:"portfolio-box"},[e("div",{staticClass:"portfolio-header"},[e("div",{staticClass:"language-img-box"},[e("img",{staticClass:"language-img",attrs:{width:"30px",height:"30px",src:t.lngImg,alt:"first"}})]),e("div",{staticClass:"title-box"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))])]),t._m(0)]),e("router-link",{staticClass:"portfolio-item-img-box",style:{"background-image":"url("+t.img+")"},attrs:{to:"#"}}),e("div",{staticClass:"portfolio-footer"},[e("div",{staticClass:"thumbs-up"}),e("br"),e("p",[t._v(" "+t._s(t.description)+" ")])])],1),e("div",{staticClass:"buttons-groupe"},[e("button",{staticClass:"prev",attrs:{id:"prev"},on:{click:t.changeProjectPrev}},[e("i",{staticClass:"fa fa-arrow-left"})]),e("button",{on:{click:t.likeProject}},[e("i",{staticClass:"fa fa-heart",style:{color:t.like}})]),e("button",{staticClass:"next",attrs:{id:"next"},on:{click:t.changeProjectNext}},[e("i",{staticClass:"fa fa-arrow-right"})])])])])},Lt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"setting-box"},[e("i",{staticClass:"fa fa-ellipsis-v",attrs:{"aria-hidden":"true"}})])}],Nt=(e("b0c0"),e("a4d3"),e("e01a"),{data:function(){return{projectNum:0,count:2,info:[{name:"Laravel",lngImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",img:"https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg",description:"Checkout Form. My first idea for the Vue. ...",like:0},{name:"Vue Js",lngImg:"https://vuejs.org/images/logo.png",img:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-design-system/vue-argon-design-system.jpg",description:"Recipes App. Idea number two is an app to keep your recipes in one place. ...",like:1}],title:"laravel",lngImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",img:"https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg",description:"Checkout Form. My first idea for the Vue. ...",like:"white"}},methods:{changeProjectPrev:function(){if(this.projectNum<=0)return!1;console.log(this.projectNum),this.projectNum=this.projectNum-1,this.title=this.info[this.projectNum].name,this.lngImg=this.info[this.projectNum].lngImg,this.img=this.info[this.projectNum].img,this.description=this.info[this.projectNum].description,this.info[this.projectNum].like?this.like="red":this.like="white"},changeProjectNext:function(){if(this.projectNum>=this.count-1)return!1;console.log(this.projectNum),this.projectNum=this.projectNum+1,this.title=this.info[this.projectNum].name,this.lngImg=this.info[this.projectNum].lngImg,this.img=this.info[this.projectNum].img,this.description=this.info[this.projectNum].description,this.info[this.projectNum].like?this.like="red":this.like="white"},likeProject:function(){if(!this.info[this.projectNum].like)return this.info[this.projectNum].like=1,void(this.like="red");this.info[this.projectNum].like=0,this.like="white"}}}),Pt=Nt,Bt=(e("9626"),Object(d["a"])(Pt,Et,Lt,!1,null,"eff5dd98",null)),It=Bt.exports;s["a"].use(q["a"]);var Vt=new q["a"]({mode:"history",routes:[{path:"/CV/",component:Ot},{path:"/CV/portfolio",component:It}],scrollBehavior:function(t,a,e){return e||(t.hash?{selector:t.hash}:{x:0,y:0})}}),Mt=(e("278f"),e("f13c")),Tt=e.n(Mt);H["c"].add(z["a"]),s["a"].use(R["default"]),s["a"].component("font-awesome-icon",F["a"]),s["a"].component("vue-quick-menu",f.a),s["a"].component("vue-draggable-resizable",j.a),s["a"].config.productionTip=!1,s["a"].use(Tt.a),s["a"].use(Tt.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new s["a"]({router:Vt,created:function(){J.a.init()},render:function(t){return t(W)}}).$mount("#app")},"5ced":function(t,a,e){},"6a30":function(t,a,e){"use strict";e("b1f1")},"6b55":function(t,a,e){},"85ec":function(t,a,e){},9472:function(t,a,e){},9626:function(t,a,e){"use strict";e("9472")},"9c8d":function(t,a,e){"use strict";e("6b55")},"9f94":function(t,a,e){},b1f1:function(t,a,e){},c906:function(t,a,e){"use strict";e("f26f")},c971:function(t,a,e){},cccb:function(t,a,e){"use strict";e("5ced")},cd1b:function(t,a,e){"use strict";e("4a5a")},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"},d74d:function(t,a,e){},f26f:function(t,a,e){},f896:function(t,a,e){"use strict";e("9f94")},fe22:function(t,a,e){"use strict";e("0585")}});
//# sourceMappingURL=app.cf71a5cf.js.map