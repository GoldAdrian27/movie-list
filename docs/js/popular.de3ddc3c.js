"use strict";(self["webpackChunkmovie_list"]=self["webpackChunkmovie_list"]||[]).push([[989],{8250:function(e,o,i){i.r(o),i.d(o,{default:function(){return w}});var t=i(3396),s=i(7139);const n={class:"container"},l={key:0,class:"row row-cols-4"},a={key:1,class:"alert alert-success",role:"alert"};function r(e,o,i,r,c,d){const v=(0,t.up)("SingleMovie");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Uk)((0,s.zw)(i.movieType)+" "+(0,s.zw)(c.page)+" ",1),c.movies.length?((0,t.wg)(),(0,t.iD)("div",l,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.movies,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id,class:"col px-3 d-flex justify-content-center"},[(0,t.Wm)(v,{movie:e},null,8,["movie"])])))),128))])):((0,t.wg)(),(0,t.iD)("div",a," We have a problem with the movies. Please wait... "))])}var c=i(391),d=i(7895),v={props:{movieType:{default:"popular",required:!0}},data(){return{page:1,movies:[],cooldown:5e3,lastScrollTime:0}},methods:{async getMovies(){const e=await(0,c.Z)(this.movieType,this.page);this.movies.push(...e)},async handleScroll(){window.scrollY+window.innerHeight>=document.body.scrollHeight-50&&(this.page++,await this.getMovies())}},components:{SingleMovie:d.Z},watch:{movieType(){this.page,console.log("hola",this.page)},movies(){window.addEventListener("scroll",this.handleScroll)}},created(){this.getMovies()},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll),console.log("unmounted")},beforeUnmount(){console.log("beforeUnmount")}},h=i(89);const u=(0,h.Z)(v,[["render",r]]);var w=u}}]);
//# sourceMappingURL=popular.de3ddc3c.js.map