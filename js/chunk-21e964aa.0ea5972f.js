(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e964aa"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),r=s("5899"),i="["+r+"]",n=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(n,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,s){var a=s("861d"),r=s("d2bb");t.exports=function(t,e,s){var i,n;return r&&"function"==typeof(i=e.constructor)&&i!==s&&a(n=i.prototype)&&n!==s.prototype&&r(t,n),t}},a9e3:function(t,e,s){"use strict";var a=s("83ab"),r=s("da84"),i=s("94ca"),n=s("6eeb"),o=s("5135"),c=s("c6b6"),l=s("7156"),u=s("c04e"),f=s("d039"),p=s("7c73"),d=s("241c").f,v=s("06cf").f,h=s("9bf2").f,g=s("58a8").trim,m="Number",_=r[m],b=_.prototype,C=c(p(b))==m,N=function(t){var e,s,a,r,i,n,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),n=i.length,o=0;o<n;o++)if(c=i.charCodeAt(o),c<48||c>r)return NaN;return parseInt(i,a)}return+l};if(i(m,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof I&&(C?f((function(){b.valueOf.call(s)})):c(s)!=m)?l(new _(N(e)),s,I):N(e)},k=a?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)o(_,y=k[x])&&!o(I,y)&&h(I,y,v(_,y));I.prototype=b,b.constructor=I,n(r,m,I)}},acca:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"title"},[t._v("Nos projets")]),s("p",{staticClass:"subtitle"},[t._v("Voice quelques projets réalisés par la communauté")]),s("b-tooltip",{attrs:{type:"is-light",label:"Vous pouvez forker le repo pour y ajouter vos projets!",position:"is-bottom"}},[s("b-button",{attrs:{tag:"a",href:"https://github.com/french-ai/website/edit/master/src/projects.js",target:"_blank",type:"is-info"}},[s("i",{staticClass:"fas fa-plus"}),t._v(" Ajoutez votre projet ")])],1)],1)]),s("div",{staticClass:"columns is-multiline"},t._l(t.infos,(function(t){return s("Repository",{key:t.id,attrs:{avatar:t.owner.avatar_url,repository:t.name,profile:t.owner.login,description:t.description,lang:t.language,stars:t.stargazers_count,forks:t.forks_count,url:t.html_url}})})),1)])},r=[],i=s("d722"),n={getProjects:function(){return["aquadzn/gpt2-french","creme-ml/creme","dhaitz/mplcyberpunk","french-ai/ressources","french-ai/reinforcement","french-ai/french-nlp","thibo73800/metacar","3outeille/Research-Paper-Summary","3outeille/Yaae","3outeille/CNNumpy","MachineLearnia/MachineLearning-tutorial","Maximellerbach/AutonomousCar","kkuette/TradzQAI"]}},o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-one-third"},[s("div",{directives:[{name:"tilt",rawName:"v-tilt"}],staticClass:"box"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:t.avatar,alt:"User avatar"}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.repository))]),s("p",{staticClass:"subtitle is-6"},[t._v("@"+t._s(t.profile))])])]),s("div",{staticClass:"content has-text-centered"},[s("p",{attrs:{id:"desc"}},[t._v(t._s(t.description))]),s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Langage")]),s("p",{staticClass:"title is-4"},[t._v(t._s(t.lang))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Stars")]),s("p",{staticClass:"title is-4 stars-counter"},[t._v(t._s(t.stars))])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Forks")]),s("p",{staticClass:"title is-4"},[t._v(t._s(t.forks))])])])])])]),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",attrs:{href:t.url,target:"_blank"}},[s("u",[t._v(t._s(t.profile)+"/"+t._s(t.repository))])])])])])},c=[],l=(s("a9e3"),{name:"Repository",props:{avatar:String,repository:String,profile:String,description:String,lang:String,stars:Number,forks:Number,url:String}}),u=l,f=(s("d326"),s("2877")),p=Object(f["a"])(u,o,c,!1,null,"9ec255fe",null),d=p.exports,v=n.getProjects(),h={name:"Project",components:{Repository:d},data:function(){return{infos:[]}},mounted:function(){for(var t=this,e=0;e<v.length;e++)i["a"].getRepos(v[e]).then((function(e){return t.infos.push(e.data)})).catch((function(t){return console.log(t)}))}},g=h,m=(s("ed0c"),Object(f["a"])(g,a,r,!1,null,null,null));e["default"]=m.exports},d326:function(t,e,s){"use strict";var a=s("e414"),r=s.n(a);r.a},e414:function(t,e,s){},e79b:function(t,e,s){},ed0c:function(t,e,s){"use strict";var a=s("e79b"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-21e964aa.0ea5972f.js.map