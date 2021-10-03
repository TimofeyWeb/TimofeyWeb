(function(e){function t(t){for(var a,s,u=t[0],i=t[1],o=t[2],h=0,p=[];h<u.length;h++)s=u[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},c=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},c=[],s={name:"App",components:{}},u=s,i=(r("034f"),r("2877")),o=Object(i["a"])(u,n,c,!1,null,null,null),l=o.exports,h=r("1da1"),p=(r("96cf"),r("b0c0"),r("7db0"),r("2f62")),f=r("bc3a"),d=r.n(f),m=d.a.create({baseURL:"https://rickandmortyapi.com/api"}),v=m,g=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r,a,n,c,s,u,i,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"",a=o.length>2&&void 0!==o[2]?o[2]:null,n={page:t},""!==r&&(n.name=r),null!==a&&(n.status=a),e.next=7,v.get("/character/",{params:n});case 7:return c=e.sent,s=c.data,u=s.info,i=s.results,e.abrupt("return",{info:u,results:i});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();a["a"].use(p["a"]);var b=new p["a"].Store({state:{characters:{},charactersPageCount:0,filters:{name:"",status:null}},actions:{fetchCharacters:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function r(){var a,n,c,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,n=e.state,r.prev=1,r.next=4,g(t,n.filters.name,n.filters.status);case 4:c=r.sent,s=c.info,u=c.results,a("setCharacters",u),a("setCharactersPageCount",s.pages),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](1),a("setCharacters",[]);case 14:case"end":return r.stop()}}),r,null,[[1,11]])})))()}},mutations:{setCharacters:function(e,t){e.characters=t},setCharactersPageCount:function(e,t){e.charactersPageCount=t},setFiltersName:function(e,t){e.filters.name=t},setFiltersStatus:function(e,t){e.filters.status=t}},getters:{characters:function(e){return e.characters},filters:function(e){return e.filters},charactersPageCount:function(e){return e.charactersPageCount},getCharacterById:function(e){return function(t){var r=t.id,a=t.page,n=e.characters[a];return n?n.find((function(e){return e.id===r})):null}},getCharacterByPage:function(e){return function(t){var r=e.characters[t];return r}}}}),C=b,_=r("8c4f"),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("CharacterFilters",{on:{filtersChanged:function(t){return e.fetchCharacters()}}}),e.loading?r("div",[e._v("Loading")]):r("CharacaterList",{attrs:{page:e.currentPage},on:{setPage:function(t){e.currentPage=t}}})],1)},O=[],j=r("5530"),y=(r("fb6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.characters.length>0?r("div",[r("div",{staticClass:"list"},e._l(e.characters,(function(e){return r("CharacterCard",{key:e.id,attrs:{character:e}})})),1),r("Pagination",{attrs:{value:e.page},on:{input:function(t){return e.setPage(t)}}})],1):r("div",[e._v("Characters not found")])])}),w=[],x=r("2909"),$=(r("a9e3"),r("d81d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"the-main__img"},[r("img",{attrs:{src:e.character.image,alt:e.character.name}})]),r("div",[r("h3",[e._v(" "+e._s(e.character.name)+" ")]),r("p",[e._v(" "+e._s(e.character.status)+" - "+e._s(e.character.species)+" ")]),r("p",[e._v(" Episodes featuring "+e._s(e.character.name)+": "+e._s(e.someEpisodeWithCharacter)+" ")])])])}),k=[],E=(r("a15b"),5),F={name:"CharacterCard",props:{character:{type:Object,required:!0}},computed:{someEpisodeWithCharacter:function(){return this.character?this.character.episode.slice(0,E).join(", "):null}},methods:{}},S=F,N=Object(i["a"])(S,$,k,!1,null,null,null),R=N.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.pages,(function(t){return r("div",{key:t,class:{pagination__current:e.value===t},on:{click:function(r){return e.setPage(t)}}},[e._v(" "+e._s(t)+" ")])})),0)},L=[],T={name:"Pagination",props:{value:{type:Number,default:1}},computed:Object(j["a"])(Object(j["a"])({},Object(p["b"])(["charactersPageCount"])),{},{pages:function(){return Object(x["a"])(Array(this.charactersPageCount)).map((function(e,t){return t+1}))}}),methods:{setPage:function(e){this.$emit("input",e)}}},B=T,M=Object(i["a"])(B,A,L,!1,null,null,null),H=M.exports,W={name:"CharacterList",components:{CharacterCard:R,Pagination:H},props:{page:{type:Number,default:null}},computed:Object(j["a"])(Object(j["a"])({},Object(p["b"])(["characters"])),{},{pages:function(){return Object(x["a"])(Array(this.pageCount)).map((function(e,t){return t+1}))}}),methods:{setPage:function(e){this.$emit("setPage",e)}}},I=W,J=Object(i["a"])(I,y,w,!1,null,null,null),q=J.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._v(" Имя: "),r("input",{domProps:{value:e.filters.name},on:{input:function(t){return e.setName(t.target.value)}}})]),r("div",[e._v(" Статус: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.filters.status,expression:"filters.status"}],on:{input:function(t){return e.setStatus(t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.filters,"status",t.target.multiple?r:r[0])}}},e._l(e.statuses,(function(t){return r("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.name))])})),0)])])},U=[],z=[{name:"Alive",value:"alive"},{name:"Dead",value:"dead"},{name:"unknown",value:"unknown"}],G={name:"CharacterFitlers",data:function(){return{statuses:z}},computed:Object(j["a"])({},Object(p["b"])(["filters"])),methods:{setName:function(e){this.$store.commit("setFiltersName",e)},setStatus:function(e){this.$store.commit("setFiltersStatus",e)}}},K=G,Q=Object(i["a"])(K,D,U,!1,null,null,null),V=Q.exports,X=r("84a2"),Y=r.n(X),Z={name:"Home",components:{CharacaterList:q,CharacterFilters:V},data:function(){return{loading:!0,currentPage:1,throttledFetchCharacters:null}},created:function(){var e=this;this.currentPage=+this.$route.params.page||1,this.throttledFetchCharacters=Y()((function(){return e.fetchCharacters()}),700),this.throttledFetchCharacters()},watch:{currentPage:function(){var e=1===this.currentPage?"/":"/page/"+this.currentPage;history.pushState({},"",e),this.throttledFetchCharacters()},filters:{deep:!0,handler:function(){1!==this.currentPage?this.currentPage=1:this.throttledFetchCharacters()}}},computed:Object(j["a"])(Object(j["a"])({},Object(p["b"])(["filters"])),{},{characters:function(){return this.$store.getters["getCharacterByPage"](this.currentPage)},firstCharacter:function(){return this.$store.getters["getCharacterById"]({id:1,page:1})},episodeWithCharacter:function(){return this.character.episode.slice(0,5)}}),methods:{fetchCharacters:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fetchChar"),e.loading=!0,t.next=4,e.$store.dispatch("fetchCharacters",e.currentPage);case 4:e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}}},ee=Z,te=Object(i["a"])(ee,P,O,!1,null,null,null),re=te.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"character"},[e._v(" Text2 ")])},ne=[],ce={name:"Character"},se=ce,ue=Object(i["a"])(se,ae,ne,!1,null,null,null),ie=ue.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"episode"},[e._v(" Text2 ")])},le=[],he={name:"Episode"},pe=he,fe=Object(i["a"])(pe,oe,le,!1,null,null,null),de=fe.exports;a["a"].use(_["a"]);var me=[{path:"/",name:"Home",component:re},{path:"/page/:page",name:"Home_page",component:re},{path:"/character/:id",name:"Character",component:ie},{path:"/episode",name:"Episode",component:de}],ve=new _["a"]({mode:"history",base:"/",routes:me}),ge=ve;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(l)},store:C,router:ge}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.9c1ac127.js.map