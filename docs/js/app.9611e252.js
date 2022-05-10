(function(){"use strict";var e={4790:function(e,t,i){var o=i(6265),n=i.n(o);const r=n().create({baseURL:"https://api.themoviedb.org/3/movie",method:"get",params:{api_key:"5cf3252038d09fe1332c49bd017b000f"}});t["Z"]=r},391:function(e,t,i){var o=i(4790);const n=async(e="popular",t=1)=>{const i={page:t},n=await o.Z.get(`/${e}`,{params:i});return n.data.results};t["Z"]=n},1975:function(e,t,i){var o=i(9242),n=i(3396);const r=(0,n.Uk)("Home"),a=(0,n.Uk)(" | "),s=(0,n.Uk)("Popular"),c=(0,n.Uk)(" | "),u=(0,n.Uk)("Top Rated"),l=(0,n.Uk)(" | "),d=(0,n.Uk)("Upcoming"),v=(0,n.Uk)(" | "),m=(0,n.Uk)("Favourites"),f=(0,n.Uk)(" | "),p=(0,n.Uk)("About"),h=(0,n._)("div",{class:"p-2"},null,-1),g=(0,n._)("div",{class:"p-5"},null,-1);function b(e,t,i,o,b,w){const y=(0,n.up)("router-link"),k=(0,n.up)("router-view"),_=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("nav",null,[(0,n.Wm)(y,{to:"/"},{default:(0,n.w5)((()=>[r])),_:1}),a,((0,n.wg)(),(0,n.j4)(y,{key:"popular",to:{name:"movie-list",params:{movieType:"popular"}}},{default:(0,n.w5)((()=>[s])),_:1})),c,((0,n.wg)(),(0,n.j4)(y,{key:"top_rated",to:{name:"movie-list",params:{movieType:"top_rated"}}},{default:(0,n.w5)((()=>[u])),_:1})),l,((0,n.wg)(),(0,n.j4)(y,{key:"upcoming",to:{name:"movie-list",params:{movieType:"upcoming"}}},{default:(0,n.w5)((()=>[d])),_:1})),v,(0,n.Wm)(y,{to:{name:"favourites"}},{default:(0,n.w5)((()=>[m])),_:1}),f,(0,n.Wm)(y,{to:"/about"},{default:(0,n.w5)((()=>[p])),_:1})]),h,((0,n.wg)(),(0,n.j4)(k,{key:e.$route.fullPath})),g,(0,n.Wm)(_)])}const w={class:"page-footer font-small blue pt-4"},y=(0,n.uE)('<div class="container-fluid text-center text-md-left" data-v-66fcceeb><div class="row" data-v-66fcceeb><div class="col-md-6 mt-md-0 mt-3" data-v-66fcceeb><h5 class="text-uppercase" data-v-66fcceeb>Footer Content</h5><p data-v-66fcceeb>Here you can use rows and columns to organize your footer content.</p></div><hr class="clearfix w-100 d-md-none pb-3" data-v-66fcceeb><div class="col-md-3 mb-md-0 mb-3" data-v-66fcceeb><h5 class="text-uppercase" data-v-66fcceeb>Links</h5><ul class="list-unstyled" data-v-66fcceeb><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 1</a></li><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 2</a></li><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 3</a></li><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 4</a></li></ul></div><div class="col-md-3 mb-md-0 mb-3" data-v-66fcceeb><h5 class="text-uppercase" data-v-66fcceeb>Links</h5><ul class="list-unstyled" data-v-66fcceeb><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 1</a></li><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 2</a></li><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 3</a></li><li data-v-66fcceeb><a href="#!" data-v-66fcceeb>Link 4</a></li></ul></div></div></div><div class="footer-copyright text-center py-3" data-v-66fcceeb>© 2020 Copyright: <a href="/" data-v-66fcceeb> MDBootstrap.com</a></div>',2),k=[y];function _(e,t){return(0,n.wg)(),(0,n.iD)("footer",w,k)}var S=i(89);const F={},T=(0,S.Z)(F,[["render",_],["__scopeId","data-v-66fcceeb"]]);var O=T,I={components:{Footer:O}};const L=(0,S.Z)(I,[["render",b]]);var C=L,j=i(678);const x={class:"home"};function N(e,t,i,o,r,a){const s=(0,n.up)("MoviesListHorizontal");return(0,n.wg)(),(0,n.iD)("div",x,[(0,n.Wm)(s,{moviesType:"popular"}),(0,n.Wm)(s,{moviesType:"top_rated"}),(0,n.Wm)(s,{moviesType:"upcoming"})])}var A=i(7139);const E={key:0,class:"p-3"},U={class:"title-custom text-left ps3"};function W(e,t,i,o,r,a){const s=(0,n.up)("SingleMovie"),c=(0,n.up)("Slide"),u=(0,n.up)("Navigation"),l=(0,n.up)("Carousel");return r.movies?((0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("h3",U,(0,A.zw)(a.title),1),(0,n.Wm)(l,{settings:r.settings,breakpoints:r.breakpoints,wrapAround:!0},{addons:(0,n.w5)((()=>[(0,n.Wm)(u)])),default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.movies,(e=>((0,n.wg)(),(0,n.j4)(c,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{movie:e},null,8,["movie"])])),_:2},1024)))),128))])),_:1},8,["settings","breakpoints"])])):(0,n.kq)("",!0)}var z=i(391),M=i(1658),Z=i(1660),H=i(7895),P={components:{Carousel:M.lr,Slide:M.Mi,Pagination:M.tl,Navigation:M.W_,FavoritesButton:Z.Z,SingleMovie:H.Z},props:{moviesType:{type:String}},data(){return{movies:null,page:1,width:window.innerWidth,height:window.innerHeight,settings:{itemsToShow:1,snapAlign:"start"},breakpoints:{0:{itemsToShow:3.25,itemsToScroll:3,snapAlign:"start"},400:{itemsToShow:4.25,snapAlign:"start"},700:{itemsToShow:5.25,snapAlign:"start"},750:{itemsToShow:5.25,snapAlign:"start"},1025:{itemsToShow:3.25,itemsToScroll:3,snapAlign:"start"},1325:{itemsToShow:4.25,itemsToScroll:3,snapAlign:"start"},1524:{itemsToShow:5.25,itemsToScroll:5,snapAlign:"start"}}}},methods:{async getMovies(){const e=await(0,z.Z)(this.moviesType,this.page);let t=localStorage.getItem("movies")&&JSON.parse(localStorage.getItem("movies"));t||(localStorage.setItem("movies","[]"),t=JSON.parse(localStorage.getItem("movies"))),t.push(...e),localStorage.setItem("movies",JSON.stringify(t)),this.movies=e},beforePage(){1!=this.page&&this.page--},afterPage(){1e3!=this.page&&this.page++},imageUrl(e){return e?`https://image.tmdb.org/t/p/w500${e}`:"//via.placeholder.com/350x150"},description(e){return e.slice(0,150).trim()+(e.length>150?"...":"")},onResize(e){this.width=window.innerWidth,this.height=window.innerHeight}},computed:{title(){return"popular"==this.moviesType?"Populares":"top_rated"==this.moviesType?"Mejor Valoradas":"Próximas"}},watch:{page(){this.getMovies()}},created(){this.getMovies(),window.addEventListener("resize",this.onResize)},destroyed(){window.removeEventListener("resize",this.onResize)}};const D=(0,S.Z)(P,[["render",W],["__scopeId","data-v-3b84f800"]]);var B=D;function R(e,t,i,o,n,r){return null}var J={};const q=(0,S.Z)(J,[["render",R]]);var $=q,K={name:"HomeView",components:{Banner:$,MoviesListHorizontal:B}};const V=(0,S.Z)(K,[["render",N]]);var G=V;const Y=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,269))},{path:"/movie-list/:movieType",name:"movie-list",component:()=>i.e(989).then(i.bind(i,8250)),props:e=>{const t=e.params.movieType;return{movieType:t}}},{path:"/favourites",name:"favourites",component:()=>i.e(146).then(i.bind(i,3918))},{path:"/pelicula/:id",name:"movie",component:()=>i.e(443).then(i.bind(i,9106)),props:e=>{const t=Number(e.params.id);return isNaN(t)?{id:1}:{id:t}}}],Q=(0,j.p7)({history:(0,j.PO)(""),routes:Y});var X=Q,ee=(i(8937),i(8125)),te=i(8321),ie=i(7749);ee.vI.add(te.BC0),(0,o.ri)(C).use(X).component("fa",ie.GN).mount("#app")},1660:function(e,t,i){i.d(t,{Z:function(){return u}});var o=i(3396);const n={key:0};function r(e,t,i,r,a,s){return a.favourites?((0,o.wg)(),(0,o.iD)("div",n,[a.isInFavourites?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"btn btn-success",onClick:t[1]||(t[1]=e=>s.modifyFavourite("delete"))},"❌")):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-success",onClick:t[0]||(t[0]=e=>s.modifyFavourite("save"))},"⭐"))])):(0,o.kq)("",!0)}var a={props:{movie:{required:!0,type:Object}},data(){return{favourites:[],isInFavourites:!1}},methods:{checkFavourites(){this.favourites=localStorage.getItem("Favourites")&&JSON.parse(localStorage.getItem("Favourites")),this.favourites||(localStorage.setItem("Favourites","[]"),this.favourites=JSON.parse(localStorage.getItem("Favourites")))},modifyFavourite(e){switch(this.checkFavourites(),e){case"save":this.favourites.push(this.movie),localStorage.setItem("Favourites",JSON.stringify(this.favourites));break;case"delete":this.favourites=this.favourites.filter((e=>this.movie.id!=e.id)),localStorage.setItem("Favourites",JSON.stringify(this.favourites));break;default:break}this.movieExistInFavourites(),this.$emit("modifiedFavourite")},movieExistInFavourites(){this.favourites.find((e=>this.movie.id==e.id))?this.isInFavourites=!0:this.isInFavourites=!1}},created(){this.checkFavourites(),this.movieExistInFavourites()}},s=i(89);const c=(0,s.Z)(a,[["render",r]]);var u=c},7895:function(e,t,i){i.d(t,{Z:function(){return _}});var o=i(3396),n=i(7139);const r={key:0,class:"card",style:{width:"18rem"}},a={class:"test"},s=["src"],c={class:"card-body"},u={class:"card-title"},l={class:"card-text"},d={class:"row"},v={class:"col-8"},m=(0,o.Uk)(" See more... "),f={class:"col-4"},p={key:1,class:"p-3",style:{}},h=["src"];function g(e,t,i,g,b,w){const y=(0,o.up)("router-link"),k=(0,o.up)("FavoritesButton");return b.width>1024?((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",a,[(0,o._)("img",{src:w.imageUrl(i.movie.poster_path),class:"card-img-top",alt:"..."},null,8,s)]),(0,o._)("div",c,[(0,o._)("h5",u,(0,n.zw)(i.movie.title),1),(0,o._)("p",l,(0,n.zw)(w.description(i.movie.overview)),1)]),(0,o._)("div",d,[(0,o._)("div",v,[(0,o.Wm)(y,{class:"btn btn-success",to:{name:"movie",params:{id:i.movie.id}}},{default:(0,o.w5)((()=>[m])),_:1},8,["to"])]),(0,o._)("div",f,[(0,o.Wm)(k,{onModifiedFavourite:t[0]||(t[0]=e=>w.modifiedFavourite()),movie:i.movie},null,8,["movie"])])])])):((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(y,{class:"",to:{name:"movie",params:{id:i.movie.id}}},{default:(0,o.w5)((()=>[(0,o._)("img",{src:w.imageUrl(i.movie.poster_path),onMouseover:t[1]||(t[1]=e=>b.isHovering=!0),onMouseout:t[2]||(t[2]=e=>b.isHovering=!1),class:(0,n.C_)(["img-movie-mobile card-img-top rounded",{"border border-3 border border-success":b.isHovering}]),alt:"..."},null,42,h)])),_:1},8,["to"])]))}var b=i(1660),w={props:{movie:{type:Object,required:!0}},data(){return{width:window.innerWidth,height:window.innerHeight,isHovering:!1}},components:{FavoritesButton:b.Z},methods:{imageUrl(e){return e?`https://image.tmdb.org/t/p/w500${e}`:"//via.placeholder.com/350x150"},description(e){return e.slice(0,150).trim()+(e.length>150?"...":"")},onResize(e){this.width=window.innerWidth,this.height=window.innerHeight},modifiedFavourite(){this.$emit("modifiedFavourite")}},created(){window.addEventListener("resize",this.onResize)},destroyed(){window.removeEventListener("resize",this.onResize)}},y=i(89);const k=(0,y.Z)(w,[["render",g],["__scopeId","data-v-01d1b30c"]]);var _=k}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,o,n,r){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],n=e[l][1],r=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,n,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,o){return i.f[o](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+{146:"upcoming",443:"about",989:"popular"}[e]+"."+{146:"41257f99",443:"8f424266",989:"de3ddc3c"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+{146:"upcoming",443:"about"}[e]+"."+{146:"0dbcc6d7",443:"9850a4b4"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="movie-list:";i.l=function(o,n,r,a){if(e[o])e[o].push(n);else{var s,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[n];var v=function(t,i){s.onerror=s.onload=null,clearTimeout(m);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(i)})),t)return t(i)},m=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p=""}(),function(){var e=function(e,t,i,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var r=function(r){if(n.onerror=n.onload=null,"load"===r.type)i();else{var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=r,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var n=i[o],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===e||r===t))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],r=n.getAttribute("data-href");if(r===e||r===t)return n}},o=function(o){return new Promise((function(n,r){var a=i.miniCssF(o),s=i.p+a;if(t(a,s))return n();e(o,s,n,r)}))},n={143:0};i.f.miniCss=function(e,t){var i={146:1,443:1};n[e]?t.push(n[e]):0!==n[e]&&i[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};i.f.j=function(t,o){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(i,o){n=e[t]=[i,o]}));o.push(n[2]=r);var a=i.p+i.u(t),s=new Error,c=function(o){if(i.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}};i.l(a,c,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)var l=c(i)}for(t&&t(o);u<a.length;u++)r=a[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(l)},o=self["webpackChunkmovie_list"]=self["webpackChunkmovie_list"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(1975)}));o=i.O(o)})();
//# sourceMappingURL=app.9611e252.js.map