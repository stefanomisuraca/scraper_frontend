webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[this._v("Scraper senza limiti")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(e){n("dO5X")},null,null).exports,i=n("/ocq"),o=n("mtWM"),c=n.n(o),l={name:"Search",data:function(){return{animeLinks:null,loading:!1,errorMessage:""}},methods:{start_search:function(){var e=this;this.animeLinks=null;var t=document.getElementById("search_bar").value;t?(this.errorMessage="",this.loading=!0,c.a.get("https://misuraca.dk:9001/scraper/?anime_link="+t).then(function(t){e.animeLinks=t.data,e.loading=!1}).catch(function(){e.errorMessage="Something went wrong"})):this.errorMessage="There is no url..."}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search_module"},[r("h3",[e._v("Search")]),e._v(" "),r("input",{attrs:{type:"text",id:"search_bar",placeholder:"Type URL"}}),e._v(" "),r("input",{attrs:{id:"search_button",type:"button",name:"start_search",value:"Go"},on:{click:function(t){e.start_search()}}}),e._v(" "),r("div",{staticClass:"anime_links"},[e.loading?r("img",{staticClass:"loading_wheel",attrs:{src:n("m+YL")}}):e._e(),e._v(" "),r("ul",e._l(e.animeLinks,function(t){return r("li",[e._v("\n      "+e._s(t)+"\n    ")])})),e._v(" "),e.errorMessage?r("p",[e._v(e._s(e.errorMessage))]):e._e()])])},staticRenderFns:[]};var h=n("VU/8")(l,u,!1,function(e){n("R5RT")},null,null).exports;r.a.use(i.a);var p=new i.a({mode:"history",routes:[{path:"/",name:"search",component:h}]});r.a.config.productionTip=!1,r.a.component("search",h),new r.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},R5RT:function(e,t){},dO5X:function(e,t){},"m+YL":function(e,t,n){e.exports=n.p+"static/img/wheel.7f46278.gif"}},["NHnr"]);
//# sourceMappingURL=app.2e96f30b6405513f567b.js.map