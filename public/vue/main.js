(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n#footer {\n\tmargin-top: 60px;\n\tborder-top: solid 1px #ccc;\n\n}\n")
'use strict';

var _store = require('../vuex/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  data: function data() {
    return {
      message: "home!",
      checkedNames: [],
      ob: []
    };
  },

  store: _store2.default,
  ready: function ready() {

    this.$http({ url: 'http://localhost/gdir/test.json' }).then(function (response) {

      this.$set('ob', response.json().item);
    }, function (response) {});
  },

  vuex: {
    getters: {
      title: function title(state) {
        return state.mod1.test;
      }
    }

  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\n<div id=\"wrapper\">\n<header>\n<h1 class=\"red\">{{title}}</h1>\n</header>\n<nav>\n<ul>\n\t<li><a v-link=\"{ path: '/' }\">Home</a></li>\n\t<li><a v-link=\"{ path: '/about' }\">about</a></li>\n\t<li><a v-link=\"\">works</a></li>\n</ul>\n</nav>\n<div id=\"container\">\n<router-view></router-view>\n</div>\n<!-- /#container -->\n\n<footer id=\"footer\">\n\t<div class=\"footerInner\">\n\t\t\n\n\t</div>\n\t<!-- /.footerInner -->\n\t<p class=\"copy\">copyright</p>\n\t<!-- /.copy -->\n</footer>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n#footer {\n\tmargin-top: 60px;\n\tborder-top: solid 1px #ccc;\n\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-4e258e13", module.exports)
  } else {
    hotAPI.update("_v-4e258e13", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../vuex/store":9,"vue":15,"vue-hot-reload-api":12,"vueify/lib/insert-css":16}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('../vuex/actions/action');

var _parts = require('./parts.vue');

var _parts2 = _interopRequireDefault(_parts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      todohuken: [{ name: 'Tokyo' }, { name: 'Osaka' }, { name: 'Osaka' }],
      foo: 0
    };
  },

  ready: function ready() {},
  components: {
    'comp-a': _parts2.default
  },
  computed: {

    tex: function tex() {

      return this.foo * 9;
    }

  },

  vuex: {
    getters: {

      count: function count(state) {

        return state.mod1.count;
      },
      title: function title(state) {
        return state.mod1.test;
      }
    },
    actions: {
      increment: _action.incrementCounter
    }

  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div>\n\n\n\n\n<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n<meta http-equiv=\"content-style-type\" content=\"text/css\">\n<meta http-equiv=\"content-script-type\" content=\"text/javascript\">\n<meta name=\"description\" content=\"日本最大級のポータルサイト。検索、オークション、ニュース、天気、スポーツ、メール、ショッピングなど多数のサービスを展開。あなたの生活をより豊かにする「課題解決エンジン」を目指していきます。\">\n<meta name=\"robots\" content=\"noodp\">\n<meta name=\"google-site-verification\" content=\"fsLMOiigp5fIpCDMEVodQnQC7jIY1K3UXW5QkQcBmVs\">\n<link rel=\"alternate\" href=\"android-app://jp.co.yahoo.android.yjtop/yahoojapan/home/top\">\n<meta property=\"og:title\" content=\"Yahoo! JAPAN\"><meta property=\"og:type\" content=\"article\"><meta property=\"og:url\" content=\"http://www.yahoo.co.jp/\"><meta property=\"og:image\" content=\"http://k.yimg.jp/images/top/ogp/fb_y_1500px.png\"><meta property=\"og:description\" content=\"日本最大級のポータルサイト。検索、オークション、ニュース、天気、スポーツ、メール、ショッピングなど多数のサービスを展開。あなたの生活をより豊かにする「課題解決エンジン」を目指していきます。\"><meta property=\"og:site_name\" content=\"Yahoo! JAPAN\"><meta property=\"twitter:card\" content=\"summary_large_image\"><meta property=\"twitter:site\" content=\"@Yahoo_JAPAN_PR\"><meta property=\"twitter:title\" content=\"Yahoo! JAPAN\"><meta property=\"twitter:description\" content=\"日本最大級のポータルサイト。検索、オークション、ニュース、天気、スポーツ、メール、ショッピングなど多数のサービスを展開。あなたの生活をより豊かにする「課題解決エンジン」を目指していきます。\"><meta property=\"twitter:image\" content=\"http://k.yimg.jp/images/top/ogp/tw_y_1400px.png\"><meta property=\"fb:app_id\" content=\"472870002762883\"><title>Yahoo! JAPAN</title>\n<style type=\"text/css\"><!--\n﻿body{margin:0;padding:0}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,button,p,blockquote{margin:0;padding:0}fieldset,img{border:0}table{border-collapse:collapse;border-spacing:0}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}.separate,.floatingw,legend{display:none}button{cursor:pointer}body{font-family:\"MS PGothic\", Arial, \"Hiragino Kaku Gothic ProN\", \"Osaka\", sans-serif;line-height:1.22;font-size:75%;text-align:center;word-break:break-all;word-wrap:break-word;-webkit-text-size-adjust:100%;-webkit-font-smoothing:subpixel-antialiased}table{font-size:inherit;font:100%}pre,code,kbd,samp,tt{font-family:monospace;line-height:99%}h1,h2,h3,h4,h5{font-size:100%}.contentbox2nd h2,#spotlight h2{font-size:131%}#emg table{font-size:113%}span.assist,#topicsboxbd em,#topicsboxbd cite,#vdobd em,#olymEdit cite{font-size:85%}#navi .hd h2,#local h2 span,#personalbox h3{font-weight:normal}a,ul.tab a:visited{color:#1d3994;text-decoration:none}a:hover{text-decoration:underline}button{cursor:pointer;font-family:\"MS PGothic\", Arial, \"Hiragino Kaku Gothic ProN\", \"Osaka\", sans-serif}input,button{outline:0}input::-moz-focus-inner,button::-moz-focus-inner{border:0}#wrapper{position:relative;min-width:950px;width:74.2em;*width:71.2em;margin:0 auto}#header{position:relative;z-index:10;padding-bottom:4px;*zoom:1}#header:after{content:\"\";display:block;clear:both}#contents{text-align:left}#navi{float:left;position:relative;z-index:8;width:17.5%;min-width:170px}#division{float:right;position:relative;z-index:2;min-width:770px;width:81%;line-height:1.4}#main{float:left;min-width:410px;width:53%}#sub{float:right;min-width:350px;width:45.45%}.item li,.emphasis li,.connect li,.symbol a,.ranking li,.pldwn,.plup,.tglClose,.tglOpen,.iconNew,.iconLive,.iconPhoto,.iconVideo,.iconPR,.iconNotice,.iconAucNotice,.close a,.ulmwindow .ulmbg,.ulmwindow .ulmwindowsearch button,.vdotmp2,#mhicon li a,#centralPosition dl,#srchAssistOnOff dd,#srchFrequentlyOnOff dd,#srchAssistClose a,#pbproperty,#mailicon,#pblogininfo li a,#mailSmryHd a,#yahooservice ul li a,#pbalert p a,#fbHd h2 a,#yjidbox h2 a,#pbproperty .shortcut li a,#pbproperty .connect #mailicon,#srchSwitch dd,#contentbox .hd .cbbtn a,#serviceBox .detail,#serviceBox .break,.scoreboard .detail,.scoreboard .break,.pbwHeat dd,#pblogininfo .personalbox__ycard,.Barcode:after,.noscriptAlert__closeButton:after,.commerce20th .commerce20th__commerceTitle,.PopHead__close:after{background-image:url('http://k.yimg.jp/images/top/sp2/cmn/pic_all-160606.png');background-repeat:no-repeat}input[type=\"text\"],input[type=\"submit\"]{-webkit-appearance:none;-webkit-border-radius:0}.bx li{margin:7px 0}.bx,.bxEx{position:relative;margin-bottom:10px;border:1px solid}.bxEx{margin-top:-11px}.bxNa{margin-bottom:10px;text-align:center}.bxSl{padding:7px 7px 3px}.bxSl h2{margin-bottom:5px;float:left;clear:left}.bxSl ul{margin-bottom:5px;overflow:hidden}.bxSl li{float:left;margin:0;padding-left:10px}.bxSl .more{float:right}.bxSl p{padding-bottom:4px}.bxPos{text-align:center}.bxSl dl{margin-top:-1px}.bxSl dt{float:left;margin-bottom:3px}.bxSl dd{margin-left:57px}.bxSl dd p{padding:2px 0 5px}.bxSl dd ul{padding-top:7px;margin-left:-0.8em}.bxShp{overflow:hidden;padding-bottom:9px}.bxShp img{float:left;margin:9px 9px 0}.bxShp .item{margin:14px 0 0 66px}.bxShp .item li{margin-top:8px}.bxCp{margin:-10px 0 8px}.bxCp p{color:#666;font-size:85%;line-height:1.2;text-align:right}.bg1{background-position:0 -3780px}.bg2{background-position:0 -930px}.bg3{background-position:0 -2850px}.bg4{background-position:0 -4220px}.hd{background-color:#fff;overflow:hidden}#navi .hd{border-bottom:1px solid}#division .hd,#spotlight{background-position:0 -30px;background-repeat:repeat-x}#division .hd{line-height:1.3}.hd h2{padding:3px 7px 2px}#navi .hd h2{border:1px solid #fff;border-width:0 1px}#division .hd h2{padding-top:8px;font-size:115%}.hd h3{position:absolute;right:10px;top:3px;font-weight:normal}#division .hd h3{top:8px}.bgC{clear:both;padding:4px 5px 4px 10px;border:1px solid}.bgC li{display:inline;margin-left:1em}.bgC .first{margin-left:0}.bgI{background-color:#fefbc4;border:1px solid #ffcc01}.close a{padding-right:20px;background-position:100% -320px;color:#fff;cursor:pointer;text-decoration:underline}.srchbtn{border:1px solid;background-position:0 -801px;font-weight:bold}.clfix:after{content:\"\";display:block;clear:both}.ht{text-indent:-9999px;overflow:hidden}.item li{padding-left:13px;background-position:0 -356px}.emphasis li{padding-left:13px;background-position:0 -395px}.connect li{display:inline;padding-left:13px;background-position:0 -441px}.connect .first{padding-left:0;background:none}.symbol a{display:inline-block;min-height:11px;padding-left:12px;background-position:3px -198px}#division .symbol a{background-position:3px -197px}.ranking li{padding-left:18px}.ranking .rnk1{background-position:0 -480px}.ranking .rnk2{background-position:0 -520px}.ranking .rnk3{background-position:0 -560px}.ranking .rnk4{background-position:0 -600px}.ranking .rnk5{background-position:0 -640px}.ranking .rnk6{background-position:0 -680px}.ranking .rnk7{background-position:0 -720px}.ranking .rnk8{background-position:0 -760px}.ranking .rnk9{background-position:0 -800px}.ranking .rnk10{background-position:0 -840px}.btnP1{position:relative;display:inline-block;padding:2px 10px;border:1px solid;border-color:#979797 #979797 #696969;background:#fff;color:#000 !important;font-size:100%;vertical-align:middle}.btnP1:hover{border-color:#5e5e5e #5e5e5e #393939;text-decoration:none}.btnP1:after{content:\"\";display:block;position:absolute;left:0;bottom:0;width:100%;height:1px;background:#ddd}.pldwn,.plup{margin-right:2px;padding-right:13px;background-position:100% -118px;background-repeat:no-repeat;color:#000;display:inline-block;min-height:13px}.plup{background-position:100% -158px}.pldwn:visited,.plup:visited{color:#000}.tglClose,.tglOpen{display:inline-block;width:11px;height:11px;margin-right:3px;margin-bottom:-1px;background-position:-20px -80px;text-indent:100%;white-space:nowrap;overflow:hidden}.tglOpen{background-position:0 -80px}.tab:after{content:\"\";display:block;clear:both}.tab .on{font-weight:bold}.tab .first{border-left:0}.tab li a{outline:none}.tab .on a,.tab .on a:visited{color:#000;text-decoration:none}.assist a,.assist a:hover,.assist a:visited{display:block;padding:0 2px;text-decoration:none}.assist{display:inline-block;border-style:solid;border-width:1px;border-color:#b7b7b7 #b7b7b7 #989898}.assist:hover{border-color:#838383 #838383 #616161}.assist a,.assist a:visited{border-bottom:1px solid #e8e8e8;background:#fff;color:#1d3994;text-decoration:none}.imgfilter{display:block;background:no-repeat 0 0;text-indent:-9999px;overflow:hidden}.navCarousel{position:relative;margin-bottom:4px;text-align:center}.navCarousel li{display:inline-block;margin:0;vertical-align:middle}.navCarouselPrev,.navCarouselNext{visibility:hidden}.navCarouselPrev.on,.navCarouselNext.on{visibility:visible}.navCarouselPrev{margin-right:90px !important}.navCarouselNum{position:absolute;left:50%;top:50%;margin:-4px 0 0 -39px}.navCarouselNum li{margin:0 7px 0 0 !important;width:7px;height:7px;background-color:#dfdfdf;line-height:99px;overflow:hidden;white-space:nowrap}.navCarouselNum li.on{background-color:#536b97}.overlay{position:absolute;z-index:9;background:#000;filter:alpha(opacity=10);-ms-filter:\"alpha(opacity=10)\";opacity:0.1}.iconNew,.iconLive,.iconPhoto,.iconVideo,.iconPR,#contentbox ul li .iconNotice,#contentbox ul li .iconAucNotice{display:inline-block;margin-left:3px;outline:none;text-indent:-9999px}.iconNew{height:12px;width:27px;background-position:0 -918px}.iconLive{height:15px;width:27px;background-position:-37px -976px}.iconPhoto{height:14px;width:14px;background-position:-39px -921px}.iconVideo{height:14px;width:14px;background-position:0 -938px}.iconPR{height:15px;width:15px;background-position:-40px -1038px}#contentbox ul li .iconNotice,#contentbox ul li .iconAucNotice{background-position:-40px -940px;padding:0;width:14px;height:14px}#contentbox ul li .iconAucNotice{background-position:-40px -960px}.loading{background:url(http://k.yimg.jp/images/top/sp2/cmn/loading.gif) no-repeat 50% 50%}.boxImg{float:left}.boxImg a{outline:none}.boxImg a img{border:1px solid #ccc;margin:10px}.imgItem{margin:13px 10px 10px}.imgItem a{line-height:1.8em}.imgItem li{margin:0}#windowShade{position:relative;min-width:950px;width:74.2em;*width:71.2em;margin:0 auto}#windowShade .ht{display:block;height:35px}#hdBar{position:absolute;z-index:9;top:-1.5em;margin-top:-1px;left:0;width:100%}.rio__titleWrapper:before,.rio__mainWrapper:before,#selectionR .Selection--02:before,.Barcode__wrap:before,.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{content:\" \";display:table}.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{clear:both}.rio__titleWrapper,.rio__mainWrapper,#selectionR .Selection--02,.Barcode__wrap{*zoom:1}@-webkit-keyframes PopHead{0%{transform:translateY(-25px);opacity:0}5%{transform:translateY(-25px);opacity:0.2}100%{transform:translateY(0);opacity:1}}@-moz-keyframes PopHead{0%{transform:translateY(-25px);opacity:0}5%{transform:translateY(-25px);opacity:0.2}100%{transform:translateY(0);opacity:1}}@keyframes PopHead{0%{transform:translateY(-25px);opacity:0}5%{transform:translateY(-25px);opacity:0.2}100%{transform:translateY(0);opacity:1}}.PopHead{position:absolute;top:-1.6em;right:0;z-index:10;width:20.4%;padding:20px 5px 15px;box-sizing:border-box;border:1px solid  #5a5a5a;box-shadow:0 1px 5px 3px rgba(200,200,200,0.5);background:#fff;-webkit-animation:PopHead 0.6s ease 1s;-moz-animation:PopHead 0.6s ease 1s;animation:PopHead 0.6s ease 1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}.PopHead .PopHead__content{padding-bottom:9px}.PopHead .PopHead__imageWrap{margin-bottom:5px;text-align:center}.PopHead .PopHead__text{text-align:center;line-height:1.4;font-size:115%}.PopHead .PopHead__link{display:block;position:relative;width:9em;margin:0 auto;padding:6px 0;box-sizing:border-box;border-top:1px solid #979797;border-right:1px solid #979797;border-bottom:1px solid #696969;border-left:1px solid #979797;background:#fff;text-align:center;font-size:115%}.PopHead .PopHead__link:hover{border-top:1px solid #5e5e5e;border-right:1px solid #5e5e5e;border-bottom:1px solid #393939;border-left:1px solid #5e5e5e;text-decoration:none}.PopHead .PopHead__link:after{display:block;position:absolute;left:0;bottom:0;width:100%;height:1px;background:#ddd;content:\"\"}.PopHead .PopHead__closeWrap{position:absolute;top:5px;right:8px}.PopHead .PopHead__close{display:block;position:relative;padding-right:20px;color:#030303;text-decoration:underline}.PopHead .PopHead__close:after{content:\"\";position:absolute;right:0;top:0;width:17px;height:13px;background-position:0 -2816px}#masthead{position:relative;z-index:1;margin-top:1.6em;height:81px}#flashLogo embed,#flashLogo embed:focus{outline:none}h1{position:relative;z-index:5;width:950px;margin:0 auto;padding-top:1px;text-align:center;height:80px}h1 a{padding-right:3px}.deco h1 a{padding-right:1px}h1 img{margin-top:14px}.deco h1 img{margin:0}#mhicon{position:absolute;left:50%;top:1px;z-index:6}#mhicon li{position:absolute}#mhi1st{left:-379px}#mhi2nd{left:-298px}.deco #mhi2nd{left:-307px}#mhi3rd{left:-219px}.deco #mhi3rd{left:-239px}#mhi4th{left:169px}.deco #mhi4th{left:188px}#mhi5th{left:248px}.deco #mhi5th{left:258px}#mhi6th{left:329px}#mhicon li a{width:50px;height:58px;margin-top:11px;display:block;text-indent:-9999px;overflow:hidden}#mhi1st a{background-position:0 -1120px}#mhi2nd a{background-position:0 -1180px}#mhi3rd a{background-position:0 -1240px}#mhi4th a{background-position:0 -1300px}#mhi5th a{background-position:0 -1360px}#mhi6th a{background-position:0 -1420px}.mailAlertWrap{position:absolute;top:9px;right:-3px;height:19px;padding-right:7px;background:url('http://k.yimg.jp/images/top/sp2/lt/ltset.png') no-repeat right bottom;text-indent:0;*zoom:1}.mailAlertWrap:after{display:block;clear:both;content:\"\"}.mailAlertLeft{float:left;width:10px;height:19px;margin-right:-3px;background:url('http://k.yimg.jp/images/top/sp2/lt/ltset.png') no-repeat left top}.mailAlert{float:left;height:19px;background:#ff434c;color:#fff;text-indent:0;line-height:19px}#siteinfo{position:absolute;z-index:7;top:13px;right:0;text-align:left}#siteinfo li{padding-bottom:6px}#changeMode{position:absolute;left:0;top:13px;z-index:5}#changeMode li{padding-bottom:6px;text-align:left}#emergency{margin:5px 0 10px;text-align:center}#emergency .alert{color:#f00}#emg{position:relative;z-index:12;margin:0 auto;text-align:center;line-height:1.2}#emg table{margin:0 auto 10px !important}#emg table table{margin-bottom:0 !important}#emg br{display:none}#emg table br{display:inline}#emgWarning,#emgEvacuation,#emgSedimentDisaster{position:relative;width:77%;min-width:728px;margin:0 auto 10px !important;font-size:127%;background-color:#fff}#emg span{display:inline-block}#emg .emgHd{color:#fff;line-height:1.5;font-weight:bold}.emgMsg{color:#cc0000}.emgBd dt{font-weight:bold;line-height:1.9}.emgBd span{font-size:95%;color:#fff;line-height:1.4;padding:0 3px 1px;margin-top:5px;margin-right:5px}.emgBd dt span.cause{padding:0;margin-left:12px;font-size:100%;color:#000;vertical-align:baseline}.emgBd dd{margin-bottom:4px}#emgEvacuation{z-index:1}#emgSedimentDisaster{z-index:0}#emgEvacuation .emgBx,#emgSedimentDisaster .emgBx{border:2px solid #315394}#emgEvacuation .emgHd,#emgSedimentDisaster .emgHd{background-color:#315394}#emgEvacuation .serious,#emgSedimentDisaster .serious{color:#cc0000}#emgEvacuation .prepare,#emgSedimentDisaster .prepare{padding-top:2px;background:#ffd611;color:#494242}#emgEvacuation .order,#emgSedimentDisaster .order{background:#c60001}#emgEvacuation .advisory,#emgSedimentDisaster .advisory{background:#fa8f26;color:#494242}#emgEvacuation .hazard,#emgSedimentDisaster .hazard{background:#6a3d8f}#emgWarning{z-index:2}#emgWarning .emgBx{border:2px solid #6a3196}#emgWarning .emgHd{background-color:#6a3196}#emgWarning .emgBd dt{color:#cc0000}#emgWarning .emgBd p{padding:0 0 4px}#emgWarning .emgBd span{vertical-align:baseline;background-color:#5c00a3;font-weight:bold;padding-bottom:0;margin-right:0;margin-left:3px;padding-top:1px}#emgLocal,.emgLocal{padding:2px 0;background-color:#ededed;font-size:75%}#emgLocal span,.emgLocal span{background:#fff;font-weight:bold;padding:1px 5px 1px 10px;margin-right:6px}.emgLocal .pldwn{background-position:100% -119px}.emgLocal .plup{background-position:100% -159px}#emg .ulmwindow{top:auto;left:0;z-index:12;text-align:left;font-size:75%;min-width:308px;width:auto}#emg .ulmwindowmds br{display:block}#searchbox{margin:0 0 4px;padding:1px 0 2px;border-width:1px;border-style:solid}#srchbd{position:relative;width:58%;min-height:33px;margin:0 auto;padding:6px 0 11px;text-align:left}#srchbd .tab{position:relative;z-index:9;margin:0 0 5px 2px;padding-top:1px;min-height:14px}#srchbd .tab li{display:inline;padding:0 5px}#srchbd .tab li.first{padding-left:0}#srchbd ul.tab li#srchMore{position:absolute;border-right:0;vertical-align:top;position:relative}#srchbd ul.tab li#srchMore .plup,#srchbd ul.tab li#srchMore .pldwn{color:#1D3994}#srchMorefw{position:absolute;top:1.15em;right:6px;z-index:9;border:1px solid #7c7c7c}#srchbd ul.tab li ul{padding:6px 0;background:#fff}#searchbox #srchbd ul.tab li ul li{white-space:nowrap;display:block;padding:0 1px;border-right:0}#srchbd ul.tab li ul li a{display:block;padding:3px 8px}#srchbd ul.tab li ul li a:hover{color:#1d3994}#srchbd ul.tab li ul li.last{margin-top:3px;border-top:1px solid #ccc}#srchbd ul.tab li ul li.last a{margin-top:3px}#srchbd p{clear:both;overflow:hidden}#srchtxtBg{line-height:0;width:72.5%;min-width:400px;display:block;float:left;border-right:transparent;border-left:transparent;overflow:hidden}#srchtxt{float:left;min-height:34px;width:100%;padding:6px 5px;padding-right:4px;border:1px solid #999;background-color:#fff;font-size:113%;line-height:1.29;box-sizing:border-box;-webkit-box-sizing:border-box;text-indent:1px}.srchbtn{float:left;width:25.3%;margin-left:10px;padding:8px 0;border:0;background-color:#666;background-position:38px 10px;background-repeat:no-repeat;min-height:34px;color:#fff;cursor:pointer;font-size:106%;line-height:1.29;letter-spacing:3px;text-indent:10px}#srchAssist{clear:left;width:72.7%;min-width:400px;position:absolute;margin-top:-1px}#srchAssistBd{border:1px solid #666;background-color:#fff}#srchAssist li{line-height:1}#srchAssist li a{color:#000;padding:4px 6px 5px;display:block;cursor:pointer}#srchAssist li .on{background-color:#1d3994;color:#fff}#srchAssistTxt{padding:3px 5px 3px 5px}#srchAssistOnOff{padding:3px 8px 3px 0;white-space:nowrap;color:#555;font-size:85%;text-align:right;line-height:0;background-color:#f7f7f7}#srchAssistOnOff dt{display:inline;line-height:1}#srchAssistOnOff dd{display:inline;line-height:1;padding-left:13px;background-position:0 -442px;font-weight:bold;color:#000}#srchAssistOnOff dd a{font-weight:normal}#srchAssistOnOff dd.first{background:none}#srchAssistClose,#srchacb,#srchAssistClose a{display:block;height:11px;background-repeat:no-repeat;cursor:auto;line-height:0;text-indent:-9999px}#srchAssistClose a{margin:1px 1px 0 1px;width:40px;background-position:16px -277px;background-repeat:no-repeat;cursor:pointer;outline:none}#srchAssistClose a:hover{margin:0;width:38px;border:1px solid #999;background-color:#f0f0f0}#srchAssistClose.on a,#srchAssistClose.on a:hover{margin:-1px 0 0;width:40px;border:1px solid #666;background-position:16px -237px;background-color:#999}#srchAssist .srchSpBlack .on{color:#000}#srchAssist .srchSpWhite .on{color:#fff}#srchAssist .srchSpBlack .on a{color:#000}#srchAssist .srchSpWhite .on a{color:#fff}#warning{margin:10px 110px 5px;padding:9px}#warning p{line-height:1.5}#warning p.ex{text-align:left}#warning a{font-weight:bold}#uhd{position:relative;min-height:19px;height:1.5em;border-style:solid;border-width:0 0 1px;background:#fff;text-align:center}#uhdsetstart{position:absolute;z-index:1;padding-top:2px;left:0}#uhdsetstart a span{display:block;float:left;width:16px;height:13px;margin:0 3px 0 0;background:url(http://k.yimg.jp/images/top/sp2/uhd/homepage_bg-160802.png) no-repeat 0 50%;cursor:pointer;line-height:0.5;overflow:hidden;text-indent:-9999px}#uhdPromo{position:absolute;left:0;z-index:0;width:100%;padding-top:2px}#uhdNoticeR{display:none;position:absolute;right:144px;top:2px;z-index:0}#uhdNoticeR a{padding-left:17px;background:url('http://k.yimg.jp/images/top/sp2/uhd/uhdNotice-140810.png') no-repeat left bottom}#uhdNoticeC{display:none;position:absolute;left:0;top:2px;z-index:0;width:100%}#uhdNoticeC a{padding-left:17px;background:url('http://k.yimg.jp/images/top/sp2/uhd/uhdNotice-140810.png') no-repeat left bottom}#uhdassist{position:absolute;right:0;padding-top:2px}#clr{float:left;margin-top:1px;border-right:1px solid #ccc}#clr li{float:left;margin-right:5px;border-style:solid;border-width:1px;line-height:0}#clr li a{display:block;*float:left;width:6px;height:6px;border-style:solid;border-width:2px;overflow:hidden;text-indent:-9999px}#clr1{border-color:#8caeea}#clr1 a{background-color:#d1defa;border-color:#d1defa}#clr2{border-color:#e398c9}#clr2 a{background-color:#f3d0e7;border-color:#f3d0e7}#clr3{border-color:#f1a348}#clr3 a{background-color:#ffdda8;border-color:#ffdda8}#clr4{border-color:#8bbe49}#clr4 a{background-color:#c8ea9a;border-color:#c8ea9a}#clr5{border-color:#a8a8a8}#clr5 a{background-color:#dedede;border-color:#dedede}#clr1 .on,#clr1 a:hover{background-color:#547cc7}#clr2 .on,#clr2 a:hover{background-color:#dc68b2}#clr3 .on,#clr3 a:hover{background-color:#e98106}#clr4 .on,#clr4 a:hover{background-color:#529421}#clr5 .on,#clr5 a:hover{background-color:#a8a8a8}#uhdassist .help{float:left;margin-top:1px}#uhdassist .help a{padding-left:5px;line-height:1em}#toptxt{position:relative;z-index:7;margin:0 0 8px -1.8em;text-align:center}#toptxt li{display:inline;margin-left:1.8em}#navi #contentbox{border-top:0}#contentbox .iconNew{height:13px;background-position:0 -917px}#contentbox #yahooservice{position:relative}#contentbox .hd{border-top:1px solid;position:static}#contentbox .hd .cbbtn{float:left;margin:1px 0;padding:1px;border-right-width:1px;border-right-style:solid}#contentbox .hd .cbbtn span{border-right:1px solid #fff}#contentbox .hd .cbbtn a{display:block;width:10px;height:9px;padding:4px 4px 3px;text-indent:-9999px;overflow:hidden;filter:alpha(opacity=80);-ms-filter:\"alpha(opacity=80)\";opacity:0.8}#contentbox .hd .cbbtn a:hover{filter:alpha(opacity=100);-ms-filter:\"alpha(opacity=100)\";opacity:1}#cbbtntop{background-position:-1px -40px}#cbbtnbtm{background-position:-21px -40px}#contentbox .changepos h2{padding-left:25px}#contentbox .hd span.assist{float:right;margin:2px 2px 0 0}#contentbox ul{margin-bottom:4px;padding:2px 3px 0}#contentbox ul li{margin:0;padding:2px 0 0px}#contentbox ul li a{display:inline-block;min-height:15px;padding:3px 0 3px 25px;background-repeat:no-repeat;vertical-align:middle}.cbysC1{background-position:0 -1480px}.cbysC2{background-position:0 -1520px}.cbysC115{background-position:0 -1560px}.cbysC5{background-position:0 -1600px}.cbysC12{background-position:0 -1640px}.cbysC13{background-position:0 -1680px}.cbysC14{background-position:0 -1720px}.cbysC15{background-position:0 -1760px}.cbysC25{background-position:0 -1800px}.cbysC26{background-position:0 -1840px}.cbysC97{background-position:0 -1880px}.cbysC20{background-position:0 -1920px}.cbysC33{background-position:0 -1960px}.cbysC34{background-position:0 -2000px}.cbysC41{background-position:0 -2040px}.cbysC73{background-position:0 -2080px}.cbysC48{background-position:0 -2120px}.cbysC37{background-position:0 -2160px}.cbysC53{background-position:0 -2200px}.cbysC57{background-position:0 -2240px}.cbysC46{background-position:0 -2280px}.cbysC44{background-position:0 -2320px}.cbysC98{background-position:0 -2360px}#favoriteservice ul li a{background-position:0 50%}.naviClmBanner{margin-bottom:10px}#noticeservice{margin-top:6px}#contentbox .hdEx{padding:3px 7px;border-style:solid;border-width:1px 0}#contentbox ul.ex{padding:0 3px 5px}#contentbox ul.ex li{margin-top:3px}#contentbox ul.ex li a{padding:0 3px}#cb2bgcx{position:absolute;left:0;top:0;z-index:1;border:0;overflow:hidden}#cb2bg{position:absolute;top:0;right:0;min-width:590px;width:46em;background-color:#fff}#checknumber,.cb2moreservice{width:100%}.cb2ndhd{min-height:4em;overflow:hidden}#checknumber .checkmax,.cb2moreservice .changemode{float:left;padding-left:10px}#checknumber .checknow,.cb2moreservice .more{float:right;padding-right:10px}.cb2moreservice{clear:both;height:2em;padding-top:10px}.cb2moreservice a{color:#fff}.cb2moreservice .changemode{font-weight:bold}.contentbox2nd{color:#fff;background-color:#fff}.contentbox2nd h2{padding:5px 10px;color:#fff}.contentbox2nd .cb2detail{margin:0 10px;background:#fff;color:#000}.contentbox2nd .cb2detail .bgD{border-top:1px dotted;background:none}.cb2allservice{position:relative;z-index:2;padding:0 2px 5px 2px;overflow:hidden}.contentbox2nd h3{clear:both;padding:4px 5px 3px}.cb2allservice ul li,#cb2worldservice ul li{position:relative;z-index:1;display:inline;float:left;width:20%;margin-bottom:3px}#cb2yjedit .cb2allservice ul{margin-bottom:3px}.cb2allservice ul li a,.cb2allservice ul li input,.cb2allservice ul li label{vertical-align:middle;white-space:nowrap}.cb2allservice ul li.on{color:#f00;font-weight:bold;letter-spacing:-1px}.cb2allservice ul li.off{color:#999}.cb2allservice ul li.off input{visibility:hidden}.cb2etc{padding:0 2px;border-top-width:1px;border-top-style:dotted}.exception{border-top-width:1px;border-top-style:dotted}.contentbox2nd span.close a{position:absolute;top:5px;right:8px;color:#fff}#cb2yjservice .cb2detail ul li a{margin-left:15px}#cb2worldservice{min-height:71px}#cb2yjedit input{width:15px}#cb2selectarea{position:relative;min-height:61px;padding:10px 0 0 5px}#cb2selectarea li{padding-bottom:5px}#cb2selectarea button{width:8.8em;margin:0;padding:2px 0;border:0;border-top:1px solid #ebebeb;border-bottom:1px solid #c3c3c3;font-weight:bold;text-align:center}#cb2selectarea p{position:absolute;bottom:10px;right:10px}#cb2selectarea span{display:block;float:left;margin-left:5px}#cb2cancelbg{position:relative;right:5px}#cb2selectarea span#cb2cancelbg,#cb2selectarea button#cb2cancel{background:#d6d6d6;color:#1d3994}#cb2selectarea span#cb2cancelbg:hover,#cb2selectarea button#cb2cancel:hover{border-top-color:#eaeaea;border-bottom-color:#b8b8b8;background:#d4d4d4}#cb2selectarea span#cb2setupbg,#cb2selectarea button#cb2setup{border-top-color:#fff;background:#fff;color:#1d3994}#cb2bg .off #cb2selectarea span#cb2setupbg{border-color:#d1d1d1}#cb2bg .off #cb2selectarea span#cb2setupbg,#cb2bg .off #cb2selectarea span#cb2setupbg button{background:#ddd;color:#999;cursor:default}#cb2selectarea span#cb2cancelbg,#cb2selectarea span#cb2setupbg{border:1px solid;border-color:#919191 #919191 #797979}#cb2selectarea span#cb2cancelbg:hover,#cb2selectarea span#cb2setupbg:hover{border-color:#676767 #676767 #393939}#navi #cb2popup{position:absolute;z-index:9;padding-bottom:3px;border:0;background:transparent;width:12em;margin:-6.7em 0 0 -1.05em;letter-spacing:-1px}#cb2popup p{padding:4px 0 4px 2px;border:3px solid #b9c6d3;background:#fff;color:#000;font-weight:normal}#cb2popup p strong{color:#e72e00;font-weight:bold}#cb2popup p span,#cb2popup .cb2pbg2{background:url(http://k.yimg.jp/images/top/sp2/cb/cb2p_bg-090407.gif) no-repeat 0 0}#cb2popup p span{position:absolute;right:2px;*right:1px;top:-6px;display:block;width:17px;height:13px;text-indent:-9999px;cursor:pointer}#cb2popup .cb2pbg{margin:0 2px -3px 0}#cb2popup .cb2pbg2{padding-bottom:9px;background-position:-20px 100%}#companybox,#disasterbox{line-height:1.4}#companybox div,#disasterbox div{padding:0 2px;border-top-width:1px;border-top-style:solid}#companybox h2,#disasterbox h2{padding:5px}#companybox ul,#companybox p,#disasterbox ul,#disasterbox p{margin:2px 0 0 4px;overflow:hidden}#companybox li,#disasterbox li{margin:0 0 7px}#companybox div.first,#companybox div.first h2,#disasterbox div.first,#disasterbox div.first h2{border-top:0}#companybox .cmp__list,#disasterbox .cmp__list{margin-bottom:7px}#companybox .cmp__list li,#disasterbox .cmp__list li{display:inline;margin-left:0.5em}#companybox .cmp__list li.first,#disasterbox .cmp__list li.first{margin-left:0}#cmprikunabi ul{margin-bottom:7px}#cmprikunabi ul li{display:inline;margin-left:0.5em}#cmprikunabi ul li.first{margin-left:0}#cmprikunabi p{margin-bottom:7px}#disapromo{background-color:#fff}#disapromo #disaimg{float:left;margin:6px 6px 6px 4px}#disapromo #disadtl{margin:8px 7px 0 0;padding-bottom:5px;overflow:hidden;line-height:1.5}#composite ul{background:no-repeat 50% 0}#composite li a{display:block;width:170px;height:40px;margin:0 auto 10px;overflow:hidden;text-indent:-9999px}#navi #announce{background-color:#fff}#announce .hd{border:0}#announce .hd h2{padding:10px 5px 0;font-weight:bold}#announce .item{margin:0px 10px 0 1px;line-height:1.4}#announce .item li{background-image:url('http://k.yimg.jp/images/top/sp2/lt/core.png');background-position:7px 6px}#topicsbox{border-top:none}#topicsbox .iconNew{height:14px;width:27px;background-position:0 -916px}#topicsbox .hd{margin:0 -1px;border-bottom:0}#topicsbox h2{display:none}#topicsbox .tab{position:relative;z-index:1;padding-bottom:1px;border-width:1px;border-style:solid}#topicsbox .tab li{position:relative;float:left;width:20%;margin:-1px 0 -2px;border-style:solid;border-width:1px 0;text-align:center}#topicsbox .tab li span{display:block;position:relative;z-index:9;margin-bottom:-1px;border-right-style:solid;border-right-width:1px}#topicsbox .tab li span a{display:block;position:relative;margin-right:-2px;padding:1px 2px 2px 0;border-style:solid;border-width:1px}#topicsbox .on1 .tab0 span a,#topicsbox .on2 .tab1 span a,#topicsbox .on3 .tab2 span a,#topicsbox .on4 .tab3 span a,#topicsbox .tab .on span a,#topicsbox .tab .last span a{margin-right:0;padding-right:0}#topicsbox .on4{border-right-color:#9baab1;background-color:#fff;padding-bottom:2px}#topicsbox .tab .on{z-index:9;padding:0;margin-bottom:-2px;background-color:#fff}#topicsbox .tab .on span{border-right:1px solid;border-bottom:1px solid #fff;_border-bottom:1px solid #fff !important}#topicsbox .tab .off span{border-right:1px solid}#topicsbox .tab .last{border-bottom:0}#topicsbox .on4 .on span{border-right:0}#topicsboxbd{padding-right:10px;overflow:hidden;min-height:248px}#topicsboxbd div{display:none}#topicsboxbd div div,#topicsboxbd .current{display:block}.topicsindex{float:left;width:63.5%}.topicsindex em{margin:6px 0 0 8px}.topicsindex .emphasis{margin:6px 0 0 5px;line-height:1.5}.topicsindex .emphasis li{margin:5.5px 0 5px}.topicsindex .emphasis li img{margin-left:2px}.topicsindex .more{margin:11px 15px 5px}.topicsindex .more li{display:inline;padding-right:1em}.topicsindex .more li.first{min-width:8.5em}.topicscatch{float:right;width:35.2%;padding-top:9px}.topicscatch .iconVideo{background-position:0px -939px}#topicsbox .topicsdetail{padding:3px 5px 3px 9px;margin:-1px 0 0}#topicsboxbd .topicsdetail{border-width:1px;border-style:solid}.topicsimg{margin:6px 0 0 -4px;padding-bottom:2px;text-align:center}#tpcsimgfilter{margin:auto}.topicscatch h3,.topicscatch ul li{margin:2px -3px 0 0;padding-bottom:2px}.topicscatch p{margin-bottom:2px;padding:2px 0}#topicsbox em,#topicsbox .topicsdetail cite{display:block;color:#666}#topicsbox .topicsdetail cite{margin-bottom:5px}.topicscatch .item{padding:1px 0 2px;margin-left:-5px}.topicscatch .mds{margin-bottom:5px}.tpcdtlinfo{position:relative;padding-bottom:4px}.tpcdtlinfo dt,.tpcdtlinfo dd{line-height:1.1em}.tpcdtlinfo dt{margin-top:4px}.tpcdtlinfo dd{text-align:right;margin-right:4px}.tpcdtlinfo dt.ex,.tpcdtlinfo dt.last{position:absolute;left:0}.tpcdtlinfo dd.ex,.tpcdtlinfo dd.last{margin-top:4px;margin-left:3em}.tpcdtlinfo dd.low{color:#f00}#othersfb{padding:5px 0 0 10px}#othersfb .detail{float:left;width:50%}#othersfb .detail h3,#othersfb .detail li{margin:0;line-height:1.92;*line-height:1.2;*margin:6px 0}#othersdetail3{clear:both;padding:8px 0 5px;overflow:hidden}#othersdetail3 h3{float:left;padding-right:14px}#othersdetail3 h4{margin-right:-10px;font-weight:normal}#topicsbox .notfound{min-height:1em}.notfound #topicsfb p{color:#666;line-height:1.7em;margin:20px 16px 20px}.notfound #topicsfb p strong{margin-left:-6px}.notfound #topicsfb p a{text-decoration:underline}#topicsInfo dt a{display:block;width:46px;height:46px;background-position:0 -200px;text-indent:-9999px;overflow:hidden;line-height:0}.Topics#topicsbox{border:0;overflow:hidden}.Topics#topicsbox h2{display:none}.Topics#topicsbox .hd{margin:0}.Topics#topicsbox .next,.Topics#topicsbox .prev{background-image:url('http://k.yimg.jp/images/top/bucket_test/lt/topics/lt_prevnext_icon-140812.png');background-repeat:no-repeat}.Topics#topicsbox .prev{background-position:94% 5px}.Topics#topicsbox .next{background-position:5px -45px}.Topics .topicsindex .emphasis{margin:6px 0 11px 5px}.Topics#topicsbox .tab{width:180.5%;min-width:738px;border-width:0 0 1px 0}.Topics#topicsbox .on3,.Topics#topicsbox .on7{padding-bottom:2px}.Topics#topicsbox .on4 li.last{padding-right:1px}.Topics#topicsbox .tab li{margin:0 0 -2px;width:12.45%;min-width:92px}.Topics#topicsbox .tab li.tab0,.Topics#topicsbox .on0 .tab0.on{border-left-width:1px;border-left-style:solid}.Topics#topicsbox .tab li.off span a,.Topics#topicsbox .tab li.tab3 span,.Topics#topicsbox .tab li.tab3 span a{margin-right:0}.Topics#topicsbox .tab li.off span a{padding-right:1px}.Topics#topicsbox .tab li.tab3.on span,.Topics#topicsbox .tab li.tab3.off span{border-right:1px solid}.Topics#topicsbox .tab li.tab3.on{margin-bottom:-3px}.Topics#topicsbox .tab .on span{border-right:1px solid;border-left:none;border-bottom:1px solid #fff}.Topics#topicsbox .tab .off span{border-right:1px solid}.Topics#topicsbox .tab .tab4{border-bottom:0}.Topics#topicsbox .tab li span a{margin-top:-1px}.Topics#topicsbox .tab li span{padding-top:1px}.Topics#topicsbox .tab li.on{border-top:1px solid}.Topics#topicsbox .tab li.next span{padding-left:0}.Topics #topicsboxbd{border-width:1px;border-top:0;border-style:solid}.Topics #scientificfb .scientificdetail{padding:5px 0 0 10px}.Topics #scientificfb .emphasis{margin:-1px 0 13px -5px}.Topics #scientificfb .more{margin:-2px 0px 0px 15px}@media screen and (-webkit-min-device-pixel-ratio: 0){::i-block-chrome,.Topics#topicsbox .tab li.last{width:12.7%}}.rio__titleWrapper:before,.rio__mainWrapper:before,#selectionR .Selection--02:before,.Barcode__wrap:before,.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{content:\" \";display:table}.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{clear:both}.rio__titleWrapper,.rio__mainWrapper,#selectionR .Selection--02,.Barcode__wrap{*zoom:1}.rio__medalTitle,.rio__medalItems,.rio__medalItem,.rio__medalIcon,.rio__medalIcon--gold,.rio__medalIcon--silver,.rio__medalIcon--bronze,.rio__newsIcon,.rio__newsIcon--bulletin,.rio__panelLinkItem,.rio__panelLinkItem--lastItem{display:inline-block;*display:inline;*zoom:1}.rio{margin-bottom:10px;border:1px solid #6bb9a9}.rio__titleWrapper{padding:8px;background-color:#008167}.rio__title{float:left;font-size:115%}.rio__titleLink{color:#ffffff}.rio__medalWrapper{float:right}.rio__medalTitle{vertical-align:middle}.rio__medalTitleLink{color:#ffffff}.rio__medalItem{margin-left:3px;color:#f6ff00}.rio__medalIcon,.rio__medalIcon--gold,.rio__medalIcon--silver,.rio__medalIcon--bronze{width:16px;height:16px;margin-right:3px;background:url('http://k.yimg.jp/images/top/sp2/event/rio/rio_sprite.png') no-repeat;overflow:hidden;text-indent:-9999px;vertical-align:middle}.rio__medalIcon--gold{background-position:left top}.rio__medalIcon--silver{background-position:-50px top}.rio__medalIcon--bronze{background-position:-100px top}.rio__medalNumber{vertical-align:middle}.rio__mainWrapper{position:relative;padding:8px}.rio__cpName{display:block;font-size:85%;color:#666666;line-height:1.5}.rio__largeNewsWrapper{position:relative;float:left;width:120px;padding:6px;margin-right:9px;border:1px solid #bfe1d9;background:#ffffff;z-index:2}.rio__largeNewsImage{margin-bottom:8px;text-align:center}.rio__largeNewsImageItem{width:120px}.rio__newsItems{position:relative;margin-bottom:30px;padding-left:143px;z-index:1}.rio__newsItem{margin:5.5px 0 5px;line-height:1.5em}.rio__newsItem--first{margin-top:0}.rio__newsItem--largeMargin{margin-top:8px}.rio__newsIcon,.rio__newsIcon--bulletin{width:29px;height:14px;margin-right:5px;background:url('http://k.yimg.jp/images/top/sp2/event/rio/rio_sprite.png') no-repeat -199px top;overflow:hidden;text-indent:-9999px;vertical-align:middle}.rio__newsIcon--bulletin{background-position:-149px top}.rio__newsLink{vertical-align:middle}.rio__background{position:absolute;bottom:0;left:0;width:100%;height:50px;background:url('http://k.yimg.jp/images/top/sp2/event/rio/rio_sprite.png') no-repeat left bottom #F9FAE2}.rio__panelLink{position:absolute;right:8px;bottom:8px;z-index:1}.rio__panelLinkItem,.rio__panelLinkItem--lastItem{margin-right:20px}.rio__panelLinkItem--lastItem{margin-right:0}#realtime .rttmp2 li{padding-right:12px;border-left:1px solid #999;margin-left:-3px}#realtime .rttmp2 li:last-child{padding-right:0}#kouhaku{border:solid 2px #BD8D3E;text-align:center}#kouhaku .img{border-bottom:solid 2px #BD8D3E;background:#E62E2E}#kouhaku .txt{padding:3px 0}#election{position:relative;padding:8px;overflow:hidden}#election .img{float:left;margin-right:10px}#election dl{margin-top:3px;overflow:hidden}#election dt{font-weight:bold}#election dd{margin-top:4px}#election:after{content:\"\";display:block;clear:both}#digitalCts{padding:8px 0 8px 9px;min-height:112px}#digitalCts h2{margin-left:-2px;padding-bottom:7px}#digitalCts .img{position:absolute}#digitalCts .item{margin-top:-3px;padding-left:127px}#digitalCts .dgtlImg{padding:0 5px 5px}#digitalCts .c4 p{margin:4px 5px 0}#typhoon{padding:10px 7px 4px 10px;min-height:113px;word-break:normal}#typhoon .img{float:left;margin:0 10px 6px 0}#typhoon h2{margin-bottom:5px}#typhoon .time{padding-left:7px;color:#666;font-size:85%}#typhoon p{margin-bottom:5px;line-height:1.4}#typhoon .data{overflow:hidden}#typhoon .data dt{clear:left;float:left;width:5em;margin-bottom:2px;color:#666}#typhoon .data dd{margin-bottom:2px}#dora2014{margin-bottom:0;overflow:hidden;text-align:center}#dora2014 a{display:block;width:410px;height:80px;margin:auto}#spotlight{padding:10px 10px 0}#splsentence{float:left;width:61%}.spltmp3 #splsentence{margin-bottom:2em}.spltmp3 #splsentence h2{margin-bottom:0.5em}#spotlight .nonImg{width:auto}#splsentence p{margin:10px 4px;line-height:1.5}#splimg{float:right;width:142px;padding-bottom:5px;text-align:center}#splimgfilter{width:142px;height:100px}#spotlightct ul{clear:both;margin:0 9px 9px;overflow:hidden}#spotlightct ul li{float:left;width:50%;margin:3px -1px 3px 0;min-height:1px}#spotlightct ul li.ex{width:auto}#spotlightct .mds{margin:0 12px 2px}#spldetail{clear:both;margin-bottom:10px;padding:0 5px 1px;text-align:center;border:0;background:none}#splElcTtl{margin:-10px -10px 6px;padding:7px 7px 2px;border-top:2px solid #52add6;background:url(http://k.yimg.jp/images/top/sp2/clr/130528/5.png) repeat-x 0 -32px}#splElcTtl dt{float:left;color:#094252;font-weight:bold}#splElcTtl dd{float:right;color:#656665}#splElcTtl dd strong{padding-right:2px}#splElcH{margin:-6px 0 3px}#splElcSentence{float:left;width:61%;padding-top:4px}.splElcLead{margin-bottom:3px}#splElcSentence .splElcLead{margin-top:9px;line-height:1.6}#spotlight #splElcSentence ul{min-width:0;margin:0 0 9px}#spotlight #splElcSentence ul li{float:none;width:auto;margin:6px 0}#splElcimg{margin-bottom:14px}#splElcimg2{float:right;margin-bottom:32px}.spotlightCloseMsg{padding:10px 0;text-align:center}#spotlightClose{text-align:center}#eventPromo{padding:11px 8px;overflow:hidden;*zoom:1}#eventPromo .img{float:left;padding-right:8px}#eventPromo p{margin:4px 0 0 178px;line-height:1.4em}#selectionR #slcbd{position:relative;min-height:120px;overflow:hidden}#selectionR .slcImg{padding:5px}#selectionR li{margin:0 0 7px;*zoom:1}#selectionR #slcbd,#selectionR h4{padding:4px 4px 4px 5px}#selectionR p{margin:4px 5px}#selectionR h4,#selectionR ul{margin-bottom:4px;padding-right:0}#selectionR h5{padding:5px 0;font-weight:normal}#selectionR h5.f2b a{padding:3px 0 3px 20px;background-repeat:no-repeat;background-position:0 50%}#selectionR .slctmpR2 h4,#selectionR .slctmpR12 h4{padding-bottom:0}#selectionR .slctmpR11{margin-left:4px}#selectionR .slctmpR12{padding-right:0}#selectionR .slctmpR12 p{margin-top:0}#selectionR .slctmpR13 h4{padding-right:5px}#selectionR .slctmpR13 ul{clear:left}#selectionR .slctmpR15 .slcImg{padding:5px 0;text-align:center}.al{float:left;padding-right:10px}.ar{float:right}.ac{text-align:center}.pa{position:absolute;left:5px}.c2{width:50%;*width:49.9%;float:left}.c2b{width:50%;*width:39.5%;float:left}.c3{float:left;width:33.33%;*width:33%}.c3b{width:33.33%;*width:25%;float:left}.c4{width:25%;*width:24.9%;float:left}.f1{margin-left:83px}.f2b{margin-left:129px}.rio__titleWrapper:before,.rio__mainWrapper:before,#selectionR .Selection--02:before,.Barcode__wrap:before,.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{content:\" \";display:table}.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{clear:both}.rio__titleWrapper,.rio__mainWrapper,#selectionR .Selection--02,.Barcode__wrap{*zoom:1}#selectionR .Selection--02{padding:10px}#selectionR .Selection--02 .Selection__imageWrap{float:left;margin:0}#selectionR .Selection--02 .Selection__inner{margin-left:180px;text-align:left}#selectionR .Selection--02 .Selection__title{margin:0 0 5px 0;padding:0}#selectionR .Selection--02 .Selection__text{margin:0}.commerce .hd:after{display:block;clear:both;content:\"\"}* html .commerce .hd{zoom:1}*:first-child+html .commerce .hd{zoom:1}.commerce .commerceTitle{float:left}.commerce .commerceSubTitle{float:right;padding:9px 7px 0 0}.commerceMain{position:relative;padding:2px 10px 8px;border-bottom:1px solid}.commerceMain:after{display:block;clear:both;content:\"\"}* html .commerceMain{zoom:1}*:first-child+html .commerceMain{zoom:1}.commerceMain .commerceMainText{min-height:54px;height:auto !important;height:54px;margin-bottom:12px;margin-left:103px;padding-top:2px;line-height:1.5}.commerceMain .commerceMainList{padding-left:102px}.commerceMain .commerceMainList:after{display:block;clear:both;content:\"\"}* html .commerceMain .commerceMainList{zoom:1}*:first-child+html .commerceMain .commerceMainList{zoom:1}.commerceMain .commerceMainItemLarge{position:absolute;top:6px;left:10px;width:93px;margin:0}.commerceMain .commerceMainItem{float:left;width:30%;margin:0;padding:0 5px;text-align:center}.commerceMain .commerceMainLastItem{float:left;width:30%;margin:0;padding-left:5px;text-align:center}.commerceMain .commerceMainImgWrap{margin-bottom:3px}.commerceMain.commerceMain--default{padding-top:8px}.commerceMain.commerceMain--default .commerceMainList{clear:both;padding-left:4px;padding-right:4px}.commerceMain.commerceMain--default .commerceMainItem{width:21.5%;padding:0;margin-right:8px;margin-left:8px}.commerceMain.commerceMain--default .commerceMainFirstItem{float:left;width:21.5%;margin:0 8px 0 0;text-align:center}.commerceMain.commerceMain--default .commerceMainLastItem{width:21.5%;margin-left:8px;padding:0}.commerceMain.commerceMain--default .commerceMainLinktext{text-align:left}.commerceSelection{padding:8px 7px 3px;border-bottom:1px solid}.commerceSelection:after{display:block;clear:both;content:\"\"}* html .commerceSelection{zoom:1}*:first-child+html .commerceSelection{zoom:1}.commerceSelection .commerceSelectionTitleWrap{margin-bottom:4px}.commerceSelection .commerceSelectionTitleWrap:after{display:block;clear:both;content:\"\"}* html .commerceSelection .commerceSelectionTitleWrap{zoom:1}*:first-child+html .commerceSelection .commerceSelectionTitleWrap{zoom:1}.commerceSelection .commerceSelectionTitle{float:left}.commerceSelection .commerceSelectionServiceWrap{float:right}.commerceSelection .commerceSelectionList{padding-left:3px;padding-right:3px}.commerceSelection .commerceSelectionLeftItem{float:left;clear:left;width:48%;margin:3px 10px 7px 0}.commerceSelection .commerceSelectionLeftItem:after{display:block;clear:both;content:\"\"}* html .commerceSelection .commerceSelectionLeftItem{zoom:1}*:first-child+html .commerceSelection .commerceSelectionLeftItem{zoom:1}.commerceSelection .commerceSelectionRightItem{float:left;width:48%;margin:3px 0 7px 0}.commerceSelection .commerceSelectionRightItem:after{display:block;clear:both;content:\"\"}* html .commerceSelection .commerceSelectionRightItem{zoom:1}*:first-child+html .commerceSelection .commerceSelectionRightItem{zoom:1}.commerceSelection .commerceSelectionImgWrap{overflow:hidden;float:left;margin-right:8px}.commerceSelection .commerceSelectionLinktext{overflow:hidden;padding-top:1px;line-height:1.5}.commerceBanner{padding:10px 10px 8px}.commerceBanner:after{display:block;clear:both;content:\"\"}* html .commerceBanner{zoom:1}*:first-child+html .commerceBanner{zoom:1}.commerceBanner .commerceBannerLeft{float:left}.commerceBanner .commerceBannerRight{margin-left:196px}.commerceBanner .commerceBannerTitle{margin-bottom:4px}.commerceSelling{padding:7px 10px 7px 7px}.commerceSelling:after{display:block;clear:both;content:\"\"}* html .commerceSelling{zoom:1}*:first-child+html .commerceSelling{zoom:1}.commerceSelling .commerceSellingTitle{float:left;margin-right:10px}.commerceSelling .commerceSellingFirstText{float:left}.commerceSelling .commerceSellingText{float:left;margin-left:15px}.commerce20th{border:none !important}.commerce20th__commerceTitle{margin-top:2px;margin-left:7px;padding:8px 0 11px 37px !important;background-position:0 -2845px}.commerce20th__commerceSubTitle{margin-top:2px}.commerce20th__mainWrapper{margin-top:-3px;margin-bottom:10px;border-top:none !important}.commerce20th__mainTitleWrapper{margin-bottom:5px;background:url('http://k.yimg.jp/images/top/sp2/20th/commerceBox_20th.png') 63% 0 no-repeat !important;margin-bottom:0 !important;border-bottom:none !important}.commerce20th__bottomBoxWrapper{position:relative}.commerce20th__bottomBoxWrapper .hd{display:block;position:absolute;left:0;top:0;width:100%;height:33px}.commerce20th__bottomBoxWrapper .commerceSelectionTitleWrap{line-height:1.3;background-position:0 -30px;background-repeat:repeat-x}.commerce20th__bottomBoxWrapper .commerceSelectionTitleWrap h2{padding:8px 7px 2px;font-size:115%}.commerce20th__bottomBoxWrapper .commerceSelectionServiceWrap{padding:8px 7px 2px}.commerce20th__bottomBoxWrapper .commerceSelection{padding:0 !important;position:relative;left:0;top:0}.commerce20th__bottomBoxWrapper .commerceSelectionTitle{padding-top:9px;padding-right:7px}.commerce20th__bottomBoxWrapper .commerceSelectionList{padding-left:10px !important;padding-right:10px !important}#video h2{padding:8px;font-size:14px}#video .historyBtn{display:inline;position:absolute;left:0;right:auto;top:0;margin:0}#video .gyaoLink{position:absolute;top:9px;right:8px}#video .videoFesTtl{padding:8px;font-size:14px}#video .bigTtlImgWrap{width:390px;margin:0 auto}#video .bigTtlImg{width:390px;height:60px;margin-bottom:5px}#video .bigTtlTxt{padding:0 8px 10px}#video #vdoTopics{overflow:hidden}#video #vdoTopics .imgfilter{width:124px;height:93px}#video #vdoTopics em{color:#666;line-height:1.22}#video .vdotmp1b{position:relative;margin-top:-10px;padding:2px 10px 6px;min-height:106px}#video .vdotmp1b em{float:left;display:block;margin-top:105px;width:120px}#video .vdotmp1b em span{vertical-align:bottom}#video .vdotmp1b .img{position:absolute;top:10px;left:10px}#video .vdotmp1b .symbol{padding:0 0 0 132px;overflow:hidden}#video .vdotmp1b .more{position:absolute;right:10px;bottom:7px;line-height:1.1}#video .vdotmp1b .more p{display:inline;margin-left:1em}#video .vdotmp1b .vdosentence{margin-left:134px;line-height:1.5}#video .vdotmp1b .vdosentence h3{margin:9px 0 5px}#video .vdotmp2{padding:4px 0 4px 11px;background-position:0 -2440px;background-repeat:repeat-x}#video .vdotmp2 ul{*zoom:1;*margin-right:-2px}#video .vdotmp2 ul li{float:left;width:33.3%;margin-bottom:0}#video .vdotmp2 ul li .imgfilter{margin:0 auto 22px}#video .vdotmp2 ul li .img,#video .vdotmp2 ul li p,#video .vdotmp2 ul li em{padding-right:10px}.videoFesBox{position:relative;line-height:1.5}.videoFesBox .tabWrap{border-top:1px solid}.videoFesBox .tab{border-bottom:1px solid}.videoFesBox .tab:after{display:block;clear:both;content:\"\"}* html .videoFesBox .tab{zoom:1}*:first-child+html .videoFesBox .tab{zoom:1}.videoFesBox .btnWrap{float:left;margin:-1px 0 -1px;border-width:1px 0;border-style:solid}.videoFesBox .btnWrap.on{border-bottom:1px solid #fff;background:#fff;cursor:default}.videoFesBox .btnWrap.on .btn{cursor:default}.videoFesBox .btn{display:block;padding:2px 0;border-right-width:1px;border-right-style:solid;text-align:center}.videoFesBox .recommendTabWrap{width:19%}.videoFesBox .tvTabWrap{width:16%}.videoFesBox .dramaTabWrap{width:21%;*width:20.8%}.videoFesBox .animeTabWrap{width:16%}.videoFesBox .movieTabWrap{width:14%}.videoFesBox .musicTabWrap{width:14%;border-right-width:0}.videoFesBox .musicTab{border-right-width:0}.videoFesBox #videoFesBoxbd{display:block;overflow:hidden;width:auto;height:auto}.videoFesBox .panel{position:relative;display:none;padding:10px 10px 7px}.videoFesBox .panel:after{display:block;clear:both;content:\"\"}* html .videoFesBox .panel{zoom:1}*:first-child+html .videoFesBox .panel{zoom:1}.videoFesBox .panel.current{display:block}.videoFesBox .panelTtl{margin-bottom:7px}.videoFesBox .thumbnailImg{float:left;margin-right:8px}.videoFesBox .topItem{overflow:hidden}.videoFesBox .lCassette{margin-bottom:7px}.videoFesBox .lCassette:after{display:block;clear:both;content:\"\"}* html .videoFesBox .lCassette{zoom:1}*:first-child+html .videoFesBox .lCassette{zoom:1}.videoFesBox .lCassette .videoFesItemTtl{margin-bottom:3px}.videoFesBox .lCassette .aplstInfo{display:none}.videoFesBox .sCassette:after{display:block;clear:both;content:\"\"}* html .videoFesBox .sCassette{zoom:1}*:first-child+html .videoFesBox .sCassette{zoom:1}.videoFesBox .sCassette .leftItem,.videoFesBox .sCassette .rightItem{float:left;width:48%;margin:3px 0 7px 0}.videoFesBox .sCassette .leftItem:after,.videoFesBox .sCassette .rightItem:after{display:block;clear:both;content:\"\"}* html .videoFesBox .sCassette .leftItem,* html .videoFesBox .sCassette .rightItem{zoom:1}*:first-child+html .videoFesBox .sCassette .leftItem,*:first-child+html .videoFesBox .sCassette .rightItem{zoom:1}.videoFesBox .sCassette .leftItem{clear:left;margin-right:10px}.videoFesBox .sCassette p{overflow:hidden}.videoFesBox .panelLink{text-align:right;position:relative}.videoFesBox .panelLink .item{display:inline;margin-left:20px}.videoFesBox .panelLink .itemRank{display:none;margin-left:20px}.videoFesBox .recommendPanel .itemRank{display:inline}#cgmboxR #cgmbd{padding:9px 13px 0;overflow:hidden}#cgmboxR h3{margin:0 -4px 8px 0}#cgmboxR p{padding-bottom:10px;line-height:1.5em}#cgmboxR img{float:left}.cgmtmpR2b ul{margin:-7px 0 0 127px}.cgmtmpR3 ol,.cgmtmpR4 ul,.cgmtmpR10 ul,.cgmtmpR13 ol{float:left;width:50%;margin:-7px 0 1px;overflow:hidden}#cgmboxR .cgmtmpR5 li p,#cgmboxR .cgmtmpR6 li p{margin:2px 12px 0;padding-bottom:0;line-height:1.2em}.cgmtmpR6 img{margin-bottom:9px}.cgmtmpR6 ul{margin-left:108px}.cgmtmpR7 img,.cgmtmpR11 img{clear:both}.cgmtmpR7 h4,.cgmtmpR11 h4{margin-bottom:10px;font-weight:normal}.cgmtmpR7 .detail,.cgmtmpR11 .detail{min-height:84px;margin-left:110px}.cgmtmpR12 p{margin-bottom:-5px}.cgmtmpR14 .cgmsentence{float:left;width:61%}.cgmtmpR14 .cgmsentence p{margin:10px 4px;line-height:1.5}.cgmtmpR14 .cgmImg{float:right;width:142px;padding-bottom:5px;text-align:center}.cgmtmpR14 .cgmimgfilter{width:142px;height:100px}.cgmtmpR14 h2{font-size:131%}.cgmtmpR14 ul{clear:both;margin:0 9px 9px;overflow:hidden;min-width:370px}.cgmtmpR14 ul li{float:left;width:50%;margin:3px -1px 3px 0;min-height:1px}#cgmboxR .cgmtmpR14{padding:10px 10px 0;background-position:0 -30px;background-repeat:repeat-x}#cgmboxR .cgmtmpR14 h2{padding:0;line-height:1.4;font-size:131%}#cgmboxR .cgmtmpR14 p{padding-bottom:0}@media print{#posfix{position:relative !important;bottom:auto !important;left:auto !important;width:auto !important}}#qurioRecommend{padding-bottom:4px;position:relative;overflow:hidden}#qurioRecommend .hd .update{position:absolute;right:10px;top:10px;font-size:85%;color:#666}#qurioRecommend .recBd{position:relative;margin:8px 9px 0 9px;*zoom:1}#qurioRecommend .recBd:after{content:\"\";display:block;clear:both}#qurioRecommend .error,#qurioRecommend .load,#qurioRecommend .qurioFt{margin-bottom:7px;word-break:normal}#qurioRecommend .item{*zoom:1;margin-bottom:15px}#qurioRecommend .item:after{content:\"\";display:block;clear:both}#qurioRecommend .label{display:block;float:left;width:1.3em;height:1.3em;padding:1px 1px 1px 1px;margin-right:8px;text-align:center;color:#FFF;font-weight:bold}#qurioRecommend .recImg{float:left;position:relative;display:table;background:#fff;opacity:0;transition:opacity 0.5s linear;margin-right:8px}#qurioRecommend .recImg div{position:relative}#qurioRecommend .recImg a{width:80px;height:80px;display:table-cell;text-align:center;vertical-align:middle}#qurioRecommend .recImg a:hover{text-decoration:none}#qurioRecommend .recImg img{vertical-align:top}#qurioRecommend .recTxt{overflow:hidden;font-size:115%;line-height:1.5}#qurioRecommend .recTxt p{word-break:normal;margin-bottom:1px}#qurioRecommend .iconExternal{display:inline-block;width:12px;height:15px;margin-left:3px;outline:none;text-indent:-9999px;background:url('http://k.yimg.jp/images/top/bucket_test/lt/quriosity/iconExternal.png') no-repeat 0 5px}#qurioRecommend .cp{color:#666;font-size:85%}#qurioRecommend .qurioFt{display:none;padding:8px 0 10px;font-size:115%;text-align:center}#qurioRecommend .error{display:none;min-height:90px;line-height:90px;text-align:center}#qurioRecommend .load{display:none;min-height:90px;line-height:90px;text-align:center}#qurioRecommend .errorTxt{line-height:1.4;padding-top:7px;padding:7px 0 15px}#qurioRecommend .loading{display:inline-block;margin:0 0 0 -1em;padding:0 0 0 20px;background-position:0 50%;color:#666}.infeedAd{line-height:1.3}#qurioRecommend .recTxt p.infeedAdLink{margin-bottom:0px}.infeedAdLink a{position:relative;display:inline-block;font-size:92%;margin:0}.infeedAdLink span{color:#000;text-decoration:none;line-height:15px;vertical-align:middle;white-space:nowrap;display:inline-block;margin-top:4px}.infeedAdLink img{-webkit-user-select:none;margin-top:0px;position:absolute;top:4px;right:-15px}#qurioSetting{padding:0 4px 8px;margin-bottom:18px;border-width:1px;border-style:solid}#qurioSetting .current{display:block}#qurioSettingBox,#qurioSettingMsg{display:none}.qurioSettinghd{text-align:center;padding:7px 0;line-height:1.5}.qurioSetTitle{padding:13px 0 4px;font-weight:bold;text-align:center}.qurioSetSubTitle{padding-bottom:4px;text-align:center}.qurioSettingbd{padding:4px 0 2px 10px;margin-bottom:6px;border-width:1px;border-style:solid;background:#fff}.qurioSettingbd li{position:relative;z-index:1;display:inline;float:left;width:33%;margin:3px 0px 7px}.qurioSettingbd li.disabled{color:#999}.qurioSettingbd label,.qurioSettingbd input{vertical-align:middle;white-space:nowrap}.qurioSettingbd input{width:15px}.qurioSettingBtn{text-align:center}.qurioSettingBtn.disabled #qurioSetup{color:#999;cursor:default;border-bottom:1px solid #fff}.qurioSettingBtn.disabled .assist{border-color:#d1d1d1}#qurioSetup{width:15em;margin:0;border:0;border-bottom:1px solid #e8e8e8;padding:6px 0 4px;text-align:center;background:#fff;color:#1d3994}#sub #brandpanel{position:relative;z-index:9;border:0;background-color:transparent;text-align:center}#sub .yzq_x{left:-9999px}#disaster h2{padding:2px 7px 4px 28px;border:1px solid #fff;background-image:url(http://k.yimg.jp/images/top/sp2/emg/disaster_ttl2.png) !important;background-repeat:no-repeat;background-position:8px 11px}#disaster ul{margin-top:5px;padding:0 0 0 3px}#disaster li{float:left;width:46.2%;margin:0 0 6px 0}#disaster ul.ex li{width:auto;margin-right:8px}#disaster li.ex{clear:left;float:none;width:auto}#personalbox{z-index:3;padding:5px 5px 0}#personalbox h2{display:none}.pbmail .txt,.pbmailinfo,#personalbox h3 span,#personalbox #pbdata{font-weight:bold}#pbidinfo,#pbproperty{position:relative}#pbidinfo li{margin:3px 0 0}#pbidinfo .loginout{position:absolute;top:2px}#pbidinfo .info{float:right}#pbidinfo .info span{margin:3px 0 0 5px}#pbproperty{position:relative;z-index:10;margin:2.2em 0 2px;border-width:1px;border-style:solid;background-color:#fff;background-position:-28px 3px;background-repeat:no-repeat}#pbproperty .connect{display:inline-block;padding:6px 0;margin:0 0 0 4px}#pbproperty .connect #mailicon{position:absolute;display:block;width:40px;height:22px;float:left;margin-top:-4px;text-indent:-9999px;overflow:hidden;background-position:100px 0}#pbproperty .connect #mailicon.on{background-position:24px 6px}#pbproperty .connect .txt{padding-left:43px}#mailSmryBd li.mlysafe .ttl,#mailSmryBd li.mlylogo .ttl,#mailSmryBd li.mlreply .ttl,#mailSmryBd li.mlforward .ttl,#mailSmryBd li.mltmp .dtl{background-image:url(http://k.yimg.jp/images/top/sp2/pb/mail_icon-130618.png);background-repeat:no-repeat}#mailSummary{display:inline-block;margin-left:5px}#mailSmryHd{position:absolute;z-index:2;top:3px;border-style:solid;border-width:1px;background-color:#fff;background-position:0 -100px}.on #mailSmryHd{background-position:0 -300px}#mailSmryHd a{display:block;background-position:0 -999px;padding:1px 0 1px 22px;border:1px solid #fff;font-weight:bold}#mailSmryHd a:hover{text-decoration:none}#mailSmryHd a span{padding-right:14px}#mailSummary.on #mailSmryHd{height:23px;border-bottom-color:#fff}#mailSmryBd{display:none;position:absolute;z-index:1;top:27px;left:2px;right:2px;padding:1px;border-width:1px;border-style:solid;background-color:#FFF}#mailSummary.on #mailSmryBd{display:block}#mailSmryBd li{margin:0;padding:7px 5px 7px 7px;border-bottom-style:solid;border-bottom-width:1px}#mailSmryBd li .ttl{float:left;padding-bottom:4px;font-weight:bold}#mailSmryBd li.mlysafe .ttl,#mailSmryBd li.mlylogo .ttl,#mailSmryBd li.mlreply .ttl,#mailSmryBd li.mlforward .ttl{padding-left:24px}#mailSmryBd li.mlread{background-color:#f2f2f2}#mailSmryBd li.mlreply .ttl,#mailSmryBd li.mlforward .ttl{font-weight:normal}#mailSmryBd li.mlysafe .ttl{background-position:0 -320px}#mailSmryBd li.mlreply .ttl{background-position:0 -80px}#mailSmryBd li.mlforward .ttl{background-position:0 -160px}#mailSmryBd li .time{float:right;color:#666}#mailSmryBd li .dtl{clear:both}#mailSmryBd li.mltmp .dtl{background-position:100% -240px}#mailSmryBd .more a{display:block;margin-top:-1px;padding:9px 5px 8px;border-top-style:solid;border-top-width:1px;background-color:#f7f7f7;font-weight:bold;text-align:center}#mailSmryBd.alert{padding:24px 10px;text-align:center}#mailSmryBd.alert p.txt{line-height:1.5}#mailSmryBd.alert p.restart{margin-top:1em;font-weight:bold}#pbproperty .shortcut{position:absolute;top:50%;right:5px;margin-top:-10px}#pbproperty .shortcut li{float:left;padding-left:6px;margin:0}#pbproperty .shortcut li a{display:block;overflow:hidden;text-indent:-9999px;width:20px;height:20px}#pbproperty .shortcut li a.first{background-position:0 -2600px}#pbproperty .shortcut li a.second{background-position:0 -2520px}#pbcalendar{display:none;padding:0 11px;border-top-style:solid;border-top-width:1px}#pbcNw{position:relative;float:left;width:48%}#pbcNx{position:relative;float:right;width:46%}#pbcalendar table{width:100%;position:relative}#pbcalendar table th{padding:3px 5px;text-align:center}#pbcalendar table th ul li{float:left}#pbcalendar table th ul li a{position:absolute}#pbcMonth{font-weight:bold;margin:0 10px}#pbcYear{position:absolute;top:3px;margin-top:3px;right:3px;font-size:85%;color:#666}#pbcalendar table td{text-align:right}#pbcalendar table td a{display:block;padding:1px 0 0;min-width:16px;white-space:nowrap;border:1px solid #fff}#personalbox table td .e{color:#999}#personalbox table td .h{color:#f00}#personalbox table td .b{font-weight:bold;letter-spacing:-1px}#personalbox table td .c{border-color:#1d3994}#pbcalendar table td a.bgA2{color:#fff}#pbtoday li{margin:0}#pbtoday .high{color:#f00}#pbtoday .low{color:#00f}#pbtoday{position:relative;padding-bottom:4px;background-color:#fff;border-style:solid;border-width:1px}h3#pbdata{padding:4px 0;background-position:0 -601px;font-size:110%;text-align:center}#pbweather{margin-bottom:5px;padding:4px 0 3px;border-style:solid;border-width:1px 0}.pbwDtl{float:left;width:49.5%;position:relative;z-index:9}#pbwTm{border-left-width:1px;border-left-style:solid}#pbweather .img{position:absolute;display:block;width:175px;height:48px;top:0;margin-top:-5px;text-indent:-9999px;background-position:-250px -250px}#pbweather h3{float:left;padding:0 0 6px 5px}.pbwarea{text-indent:10px;_line-height:1.1}.pbwicon{clear:left;position:absolute;z-index:1;top:1em;padding:5px 0 0 4px}.pbwicon a{display:block;width:33px;height:20px;margin-bottom:-1px}.pbwrprobability{clear:both;position:absolute;top:1.6em;width:43%;padding:1px 13px 0 0;border-right-style:solid;border-right-width:1px;line-height:1.1;text-align:right;white-space:nowrap}#pbwTm .pbwrprobability{padding-left:5px}#pbtoday .pbwtemperature{clear:both;float:right;margin-top:-2px;padding:0 7px 5px 0;line-height:1.1}#pbwTm .pbwtemperature{padding-right:2px}#pbwInfo{clear:left;padding-top:5px}#pblocal{margin-bottom:4px;border-bottom-style:solid;border-bottom-width:1px}#pblocal li{margin:2px 0}#pblocal .item{margin:4px 0 0 8px}#pblocal h3{padding-left:5px}#pblocal p.info{padding:2px 0 5px 15px}#pblocal .more{clear:both;padding:0 4px 4px;background-color:#fff;text-align:right}.pbwHeat{clear:both;padding:3px 0 0}.pbwHeat dt{float:left;padding:0 10px 0px 5px}.pbwHeat dd{float:left;padding-top:3px;position:relative;background-position:0 -30px}.pbwGraph1 .pbwGraphIcn1,.pbwGraph2 .pbwGraphIcn2,.pbwGraph3 .pbwGraphIcn3,.pbwGraph4 .pbwGraphIcn4{background-position:12px -1080px}.pbwGraph1 .pbwGraphIcn2,.pbwGraph2 .pbwGraphIcn3,.pbwGraph3 .pbwGraphIcn4,.pbwGraph4 .pbwGraphIcn5{background-position:-4px -1080px}.pbwGraph5 .pbwGraphIcn5{padding-right:3px;background-position:12px -1080px}.barGraph{width:15px;height:1px;display:block;margin-right:1px;overflow:hidden;background-color:#d9d9d9;border-bottom:7px solid #dfdfdf;border-top:1px solid #cecece;text-indent:-9999px}.pbwGraph1 .heat1,.pbwGraph2 .heat1,.pbwGraph3 .heat1,.pbwGraph4 .heat1,.pbwGraph5 .heat1{background-color:#dbe588;border-color:#dbe588}.pbwGraph2 .heat2,.pbwGraph3 .heat2,.pbwGraph4 .heat2,.pbwGraph5 .heat2{background-color:#ffd051;border-color:#ffd051}.pbwGraph3 .heat3,.pbwGraph4 .heat3,.pbwGraph5 .heat3{background-color:#ffaa23;border-color:#ffaa23}.pbwGraph4 .heat4,.pbwGraph5 .heat4{background-color:#ff4141;border-color:#ff4141}.pbwGraph5 .heat5{background-color:#ff4141;border-color:#ff4141}#pbwradar{position:absolute;left:5px}#pbwInfo.typInfo{padding:10px 0 7px}#pbwradar .typTtl{font-weight:bold}#pbwradar .typTtl span{font-weight:normal}#pbwradar .iconNotice{display:inline-block;margin-left:2px;background-position:-40px -960px;padding:0;width:14px;height:17px;overflow:hidden;text-indent:-9999px;vertical-align:middle}#pbwradar p{display:inline-block;margin-left:2px;color:#ee7101}#pbwlocation{clear:none;text-align:right}#pbplan,#pbfortune{float:left;position:relative;width:49.5%}#pbplan h3,#pbfortune h3,#pbpnumber,#pbplan ul,#pbfDtl,#pbfconstellation{display:inline-block;padding-left:5px}#pbweatherbtn{margin-right:5px}#pbfpoint{position:absolute;top:0;right:2px}#pbfortune{z-index:5;border-left-style:solid;border-left-width:1px}#pbfortune .floatingw{position:absolute;right:-6px;z-index:9;width:15.3em;padding:5px 2px 1px 5px;border:1px solid #7c7c7c;background:#fffac6;zoom:1}#pbfortune .floatingw li{float:left;width:4.8em;padding:0 0.2em 0.4em 0;position:relative}#pbfortune .floatingw li.ex{width:auto}#pbfortune .floatingw li a{padding-left:17px;background-image:url(http://k.yimg.jp/images/top/sp2/pb/fotune_icon-101026.png);background-repeat:no-repeat}#aries{background-position:0 0}#taurus{background-position:0 -40px}#gemini{background-position:0 -80px}#cancer{background-position:0 -120px}#leo{background-position:0 -160px}#virgo{background-position:0 -200px}#libra{background-position:0 -240px}#scorpio{background-position:0 -280px}#sagittarius{background-position:0 -320px}#capricorn{background-position:0 -360px}#aquarius{background-position:0 -400px}#pisces{background-position:0 -440px}#nofortune{background-position:0 -480px}#pbalert,#pbwVdo{margin-top:5px;padding:4px;background:#fff;border-width:1px;border-style:solid;overflow:hidden}#pbalert p a{display:block;float:left;min-height:13px;margin:-1px 0;padding:2px 0 2px 24px;background-position:0 -2400px}#pbwVdo p span{display:inline-block;float:left;margin-top:2px}#pbwVdo p a{display:inline-block;float:left;min-height:13px;margin:-1px 0;padding:2px 0 2px 2px}#pblogininfo{margin:2px -4px 0}#pblogininfo ul{padding:0 5px 2px;overflow:hidden}#pblogininfo ul li{margin:3px 0}#pblogininfo li a{padding:4px 0 4px 20px;background-repeat:no-repeat;min-height:13px;display:inline-block}#pblogininfo .point{float:left}#pblogininfo .star{float:right}#pblogininfo .point a{background-position:0 -2438px}#pblogininfo .star a{background-image:url('http://k.yimg.jp/images/top/sp2/cmn/pic_all-150416.png');background-position:0 -2478px}#pblogininfo .personalbox__ycardWrap{float:right}#pblogininfo .personalbox__ycard{padding-left:24px;background-position:0 -2474px}#fbNav li.ico a,.fbLikeBtn,.fbCommentOpen:before,.fbCtBd ul li .msg:before{background-image:url(http://k.yimg.jp/images/top/sp2/fb/fb_all-130507.png);background-repeat:no-repeat}.fbWeakBtn{display:inline-block;margin-top:5px;padding:2px 12px;background-color:#3b5998;background-repeat:repeat-x;background-position:0 -40px;background:linear-gradient(top, #3b5998 0%, #1f4189 100%);background:-webkit-linear-gradient(top, #3b5998 0%, #1f4189 100%);background:-webkit-gradient(linear, left top, left bottom, color-stop(0, #3b5998), color-stop(1, #1f4189));color:#fff !important;border-radius:3px}.fbWeakBtn:hover{color:#fff !important}.fbNotification{position:absolute;top:3px;left:13px;min-width:3px;padding:0 1px;border:1px solid #d83722;border-radius:2px;background-color:#f03d25;box-shadow:0 1px 0 #808080;background-color:#f00;color:#fff;line-height:1;text-align:center;white-space:nowrap}.fbTextField{position:relative;padding:4px;border:1px solid #bdc7d8;background-color:#fff}form .fbTextField textarea{width:100%;height:1em;min-height:13px;padding:0;border:none;color:#a9a9a9;font-size:118%;outline:none;overflow:hidden;resize:vertical}form.on .fbTextField textarea{height:59px;color:#000}.fbCtHd .fbTextField:before,.fbCtHd .fbTextField:after{content:\"\";position:absolute;top:-12px;left:3px;z-index:1;display:block;border-color:transparent;border-width:6px;border-style:solid}.fbCtHd .fbTextField:before{border-bottom-color:#bdc7d8}.fbCtHd .fbTextField:after{margin-top:1px;border-bottom-color:#fff}.fbCtHd form .fbTextField textarea{padding:3px 0}.fbBtnField{display:none;margin-top:5px;text-align:right}form.on .fbBtnField{display:block}.fbDoneBtn{border:1px solid #29447e;background-color:#1f418f;background-image:linear-gradient(top, #385797 0%, #1f4189 100%);background-image:-webkit-linear-gradient(top, #385797 0%, #1f4189 100%);background-image:-webkit-gradient(linear, left top, left bottom, color-stop(0, #385797), color-stop(1, #1f4189));color:#fff;font-size:100%}.fbDoneBtn span{display:block;padding:2px 3px;min-width:5em}.fbLikeBtn{display:inline-block;width:13px;height:12px;background-position:0 -100px;cursor:pointer;overflow:hidden;text-indent:100%;white-space:none}.fbCommentOpen:before{content:\"\";display:inline-block;width:13px;height:12px;margin-right:8px;background-position:-20px -100px;cursor:pointer;overflow:hidden;text-indent:100%;white-space:none;vertical-align:middle}.fbArwR{position:relative;display:inline-block;width:20px;height:14px}.fbArwR:after{content:\"\";display:inline-block;position:absolute;left:6px;top:3px;border-style:solid;border-width:4px 7px;border-color:transparent;border-left-color:#757575}#facebook{position:relative;z-index:2;border:0}#fbchCloseTxt{position:absolute;top:8px;right:10px;font-size:90%}#fbInformation{display:none;border-style:solid;border-width:1px;margin-top:-1px}#fbExpand a{display:block;padding:10px}#fbInformation.on{display:block}#facebook .loading{color:#666}#fbLoading{display:none;position:absolute;top:2px;right:1px;bottom:1px;left:1px;z-index:2;background-color:#fff;color:#494949;text-align:center}#fbLoading.on{display:block}#fbLoading .loading{display:inline-block;padding-left:20px;background-position:0 50%;position:absolute;top:50%;left:50%;margin:-0.6em 0 0 -3.5em}#fbHd{position:relative;background:#fff;border-style:solid;border-width:1px;text-align:left}#fbHd.fbEndIn{padding-top:24px}#fbHd h2{float:left;width:38px;vertical-align:middle}#fbHd h2 a{display:block;height:34px;margin-left:6px;background-position:2px -955px}#fbHd p{padding:10px 0 9px;overflow:hidden;vertical-align:middle}#fbHd .fbEnd{padding:3px 8px 9px}#fbHd .fbAfterEnd{padding:6px 8px}#fbHd .fbEndInText{position:absolute;top:-4px;left:8px}#fbNav{position:absolute;bottom:0;right:0;width:100%}#fbNav li{position:absolute}#fbNav li.ico{bottom:0;left:50%;width:26px;height:31px;cursor:pointer}#fbNav li.ico:hover{background-color:#96c4ec}#fbNav li.ico a{display:block;width:18px;height:16px;margin:6px 4px}#fbNavNf{left:40px;bottom:5px;z-index:1;border-width:1px;border-style:solid}#fbNavNf a{display:block;padding:3px 5px;height:14px;line-height:14px;min-width:110px;border:1px solid #fff;background-color:#fff;background-position:0 -100px;color:#000}#fbNavNf.on{bottom:-1px;border-bottom-color:#fff}#fbNavNf.on a{padding:3px 0 9px 5px;background-color:#fff;background-position:0 -300px}#fbTgl{vertical-align:text-top}#fbNav #fbNavFr{margin-left:4px}#fbNav #fbNavFr.on a{background-position:-20px 0}#fbNav #fbNavFr.nc a{background-position:0 0}#fbNav #fbNavMs{margin-left:40px}#fbNav #fbNavMs a{background-position:0 -18px}#fbNav #fbNavMs.on a{background-position:-20px -18px}#fbNav #fbNavMs.nc a{background-position:0 -20px}#fbNav #fbNavNc{margin-left:76px}#fbNav #fbNavNc a{background-position:0 -40px}#fbNav #fbNavNc.on a{background-position:-20px -40px}#fbNav #fbNavNc.nc a{background-position:0 -40px}#fbNavSt{bottom:0;height:34px;right:10px;line-height:32px}#fbBd{position:relative;background-color:#fff}.fbCtBln{position:absolute;z-index:2;left:10px;right:10px;margin-top:-3px;border:1px solid #7c7c7c;background-color:#fff;text-align:left}.fbCtBln:before,.fbCtBln:after{content:\"\";position:absolute;top:-10px;left:50%;display:block;border-color:transparent;border-width:5px;border-style:solid}.fbCtBln:before{border-bottom-color:#7c7c7c}.fbCtBln:after{margin-top:1px;border-bottom-color:#fff}.fbCtBln .fbCtBd>p{padding:7px 8px;color:#808080}#fbCtFr:before,#fbCtFr:after{margin-left:11px}#fbCtMs:before,#fbCtMs:after{margin-left:46px}#fbCtNc:before,#fbCtNc:after{margin-left:83px}.fbCt{display:none;text-align:left}#fbCtEtc,#fbCtNf,#fbCtSt{min-height:47px;border-style:solid;border-width:0 1px 1px}.fbCt.on{display:block}.fbCtBd ul li .icon{float:left;margin:0 4px 8px 0}.fbCtBd .name{font-weight:bold}.fbQtArea{padding:5px 4px 0;border:1px solid #e9e9e9;border-radius:2px}.fbCtBln .fbCtBd ul li{border-bottom:1px solid #cecece;overflow:hidden;cursor:pointer}.fbCtBln .fbCtBd ul li a{display:block;padding:5px 8px 0 8px;color:#000}.fbCtBln .fbCtBd ul li a:hover{text-decoration:none}.fbCtBln .fbCtBd ul li p{line-height:1.4;margin-left:55px}.fbCtBln .fbCtBd ul li .msg{color:#808080}#fbCtMs.fbCtBln .fbCtBd ul li .msg{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.fbCtBln .fbCtBd ul li.reply .msg:before{content:\"\";display:inline-block;width:8px;height:8px;margin-right:4px;background-position:-40px -100px;vertical-align:middle}.fbCtBln .fbCtBd ul li .time{margin:6px 0 3px 55px;color:#808080;overflow:hidden}.fbCtBln .fbCtBd ul li.new,.fbCtBln .fbCtBd ul li:hover{border-bottom-color:#d1d8e7;background-color:#ededed}.fbCtRecommend{padding:7px 10px;color:#666}.fbCtInfo{padding:7px 10px 2px;color:#666;text-align:left}.fbCtInfo p{margin-bottom:6px;line-height:1.5}.fbCtHd{position:relative;border-bottom:1px solid #cecece}.fbCtHd h3{padding:7px 8px;font-weight:normal}.fbCommentList .name{margin-right:10px}.fbCommentList .share .name{margin-right:0}.fbCommentList .act,.fbCommentList .time{margin-left:37px}.fbCommentList .time{margin-top:3px;color:#808080;font-size:90%}.fbCommentList .time a{color:#808080}#fbCtNf{overflow:auto;height:150px}#fbCtNf.expand{height:463px}#fbCtNf .fbCtHd form{padding:0 9px 8px 10px}#fbCtNf .fbCtBd{color:#333}#fbCtNf .fbCtBd .fbCtRecommend{position:absolute;top:50%;left:0;width:100%;margin-top:-1.5em;padding:0;text-align:center}#fbCtNf .fbCtBd>ul>li{padding:10px 9px;border-bottom:1px solid #e9e9e9}#fbCtNf .fbCtBd>ul>li .dtl{clear:both;line-height:1.5;margin-bottom:7px}#fbCtNf .dtl .area{color:#999}#fbCtNf .name{font-weight:normal}#fbCtNf .userInfo .data{margin-top:3px;color:#999}#fbCtNf .userInfo .name{font-weight:bold}#fbCtNf .fbQtArea .userInfo .name{font-weight:normal}.fbThumbnailMd{margin-bottom:10px;text-align:center}.fbThumbnailMd img{max-width:100%}.fbShareMd{margin:0 10px}.fbShareHd{margin-bottom:15px;border:1px solid #eaeaea;background-color:#f7f7f7;overflow:hidden}.fbShareHd p{overflow:hidden}.fbShareHd .url{display:block;color:#999;font-size:90%;overflow:hidden}.fbShareImgWp{float:left}.fbShareImg{display:table-cell;width:60px;height:60px;text-align:center;vertical-align:middle}.fbShareImg img{max-width:60px}.fbShareBd .fbrTxtMd{clear:both}.fbShareDtl{padding:5px;overflow:hidden}.fbShareBd .fbCommentList{margin-bottom:-10px;overflow:hidden}.fbShareBd .fbCommentList>li{margin-top:-11px;padding:10px 0 20px;border-top:1px solid #e9e9e9}.fbShareBd .fbCommentList>li p{line-height:1.5}.fbResponseMd{margin:0 10px 10px}.fbResponseHd{padding:0 0 4px}.fbResponseBd{position:relative;background-color:#edeff4}.fbResponseBd:before{content:\"\";position:absolute;top:-10px;left:18px;display:block;border-color:transparent;border-width:5px;border-style:solid;border-bottom-color:#edeff4}.fbResponseBd p{line-height:1.5}.fbrTxtMd li{display:inline-block}.fbrLikeTxt:after{content:\"・\";display:inline-block}.fbrLikeTxt.on a{color:#aaa;cursor:default;text-decoration:none}.fbResponseBd form{padding:5px}.fbrbLikeArea,.fbCommentHd,.fbrbCommentArea>ul>li{padding:4px 5px;border-bottom:1px solid #fff;overflow:hidden}.fbCommentHd{overflow:hidden}.fbCommentHd .fbCommentClose{display:none}.fbCommentHd.on .fbCommentOpen{display:none}.fbCommentHd.on .fbCommentClose{display:block}.fbrbLikeArea .fbLikeBtn{position:absolute}.fbrbCommentArea .icon{float:left}.fbrbLikeArea p{padding-left:20px}#fbCtEtc{text-align:center}.fbCtFt{margin-top:-1px;border-top:1px solid #cecece;background-color:#fff;text-align:center;border-radius:0 0 4px 4px}.fbCtFt .loading,.fbCtFt.load p{display:none}.fbCtFt.load .loading{display:inline-block;padding:5px 0 5px 20px;background-position:0 50%}.fbCtFt p a{display:block;padding:5px 0}#fbCIbd{padding:9px 10px 8px;line-height:1.2}#fbCItxt{float:left}#fbCIclose{text-align:right}#fbCIclose a{display:inline-block;min-height:15px;padding-right:21px;background:url(http://k.yimg.jp/images/top/sp2/cmn/icon_close.png) no-repeat 100% 50%}#facebook.fbEndAfter #fbHd{background:#e0e0e0}#facebook.fbEndAfter h2 span{display:block;height:34px;margin-left:6px;background-image:url('http://k.yimg.jp/images/top/sp2/fb/fb_all-150421.png');background-position:2px -115px;background-repeat:no-repeat}#facebook.fbEndAfter #fbNav{top:0;bottom:auto}#facebook.fbEndAfter #fbNav li.ico:hover{background:none}#facebook.fbEndAfter #fbNavNf{display:block;top:5px;bottom:auto;padding:4px 6px;height:14px;line-height:14px;min-width:110px;border-color:#9d9d9d;background-color:#e0e0e0;background-position:0 -100px;color:#999999;cursor:default}#facebook.fbEndAfter .ico{top:4px;bottom:auto;cursor:default}#facebook.fbEndAfter .ico span{display:block;width:18px;height:16px;margin:6px 4px;background-image:url('http://k.yimg.jp/images/top/sp2/fb/fb_all-150421.png');background-repeat:no-repeat}#facebook.fbEndAfter #fbTgl{background:url('http://k.yimg.jp/images/top/sp2/fb/fb_all-150421.png') no-repeat right -120px}#facebook.fbEndAfter #fbNavFr span{background-position:-40px 0}#facebook.fbEndAfter #fbNavMs span{background-position:-40px -18px}#facebook.fbEndAfter #fbNavNc span{background-position:-40px -40px}#facebook.fbEndAfter #fbNavSt{top:2px;bottom:auto;color:#999999;cursor:default}#facebook.fbEndAfter .fbEndAfterText{clear:both;padding:6px 8px;background:#fff}#yjidbox{position:relative}#yjidbox{min-height:68px;padding:5px 10px}#yjidbox h2{float:left;margin-right:1.2em}#yjidbox h2 a{background-position:0 -2560px;padding:2px 0 2px 25px}#yjidbox .more{text-align:right}#yjidbox img{position:absolute;left:10px;margin-top:5px}#yjidbox ul{margin:10px 0 12px 60px}#sub #yjidboxB{border:none;background:none;text-align:center}#notice ul{padding:0 10px}#rightbox,#ultra,#criteorb{overflow:hidden}#rightbox .hd,#ultra .hd,#criteorb .hd{background:none !important}#rightbox #rbdtl2{overflow:auto}#rightbox #rbdtl3{margin:8px 0 0 3px}#rightbox #rbimg,#ultra #ulimg{float:left}#rightbox #rbimg a,#ultra #ulimg a{outline:none}#rightbox #rbimg a img,#ultra #ulimg a img{border:1px solid #ccc}#rightbox #rbimg img,#rightbox #rbimg2 img,#ultra #ulimg img{margin:10px}#rightbox #rbdtl{margin:5px 10px}#rightbox #rbdtl2,#ultra #uldtl2{margin:10px}#rightbox #rbdtl a,#rightbox #rbdtl2 a,#ultra #uldtl2 a{line-height:2em}#rightbox .more,#ultra .more{padding:2px 8px 5px;text-align:right}#sub #rightbox2{margin-top:-11px;padding:7px 10px}.scoreboard{position:relative}.scoreboard .hd{padding-bottom:5px}.scoreboard .hd span{color:#1d3994;cursor:pointer}.scoreboard .hd span:hover{text-decoration:underline}.scoreboard .tab{padding-top:1px;border-bottom:1px solid}.scoreboard .tab:after{display:block;clear:both;content:\"\"}* html .scoreboard .tab{zoom:1}*:first-child+html .scoreboard .tab{zoom:1}.scoreboard .tab .btnWrap{float:left;margin:-1px 0 -1px;border-width:1px 0;border-style:solid;width:50%}.scoreboard .tab .btnWrap.on{border-bottom:1px solid #fff;background:#fff}.scoreboard .tab .btn{display:block;padding:4px 0;border-right-width:1px;border-right-style:solid;text-align:center}.scoreboard .tab .JleagueTab{border-right-width:0}.scoreboard .bottomBox{position:relative;text-align:left;border-top:1px solid;padding:7px}.scoreboard .score__date{position:relative;margin-left:2.5%;padding-bottom:8px;text-align:left}.bottomBox__jltop,.bottomBox__pbtop{position:absolute;left:8px}.bottomBox__top{text-align:right}.score__body{display:none;padding-top:12px}.score__body.on{display:block}.score__body .score__table{width:95%;margin:auto}.score__body td{padding:6px 0 3px;border-top-width:1px;border-top-style:solid}.score__body .tablebdt td{border-top-width:0;padding-top:0}.score__body .tablebdt .noGame,.score__body .tablebdt .error{padding:14px 0 20px;text-align:center}.score__body .team1,.score__body .team2{width:36%}.score__body .team1{text-align:right}.score__body .team2{text-align:left}.score__body .gmState{text-align:center;white-space:nowrap}.score__body .gmState .team1,.score__body .gmState .team2{display:inline-block;width:1.5em}.score__body .score{display:block;margin:-2px 0;font-size:108%;font-weight:bold}.score__body .status{overflow:hidden;text-align:center;vertical-align:top}.score__body .status td{border:0;padding:0 0 3px}.score__body .status .player1,.score__body .status .player2{padding-bottom:0}.score__body .sbVideo{padding-left:22px}.score__body .sbVideoLink{display:inline-block;margin-left:17px}.score__body .iconVideo{height:14px;background-position:0 -939px;cursor:pointer}.score__body .break{display:inline-block;width:37px;height:14px;margin-left:4px;cursor:pointer;background-position:0 -2639px;text-indent:-9999px}.score__body .break:hover{text-decoration:none}.score__body .player2{float:right}.score__body .player1 .position,.score__body .player2 .position{width:2.3em;vertical-align:top}.score__body .player1 .name{float:left;word-break:break-all}.score__body .player1,.score__body .player2 .position,.score__body .player2 .name{text-align:left}.Jleague .team1,.Jleague .team2{width:40%}.proBaseBall .status .player1{padding-left:3px}.proBaseBall .status .player2{padding-right:3px}#soccerScore{position:relative}#soccerScore .hd{padding-bottom:5px}#soccerScore .hd span{color:#1d3994;cursor:pointer}#soccerScore .hd span:hover{text-decoration:underline}#soccerScore .soccerScore__date{position:relative;margin-left:5%;padding-bottom:8px;text-align:left}.soccerScore__more{position:relative;text-align:left;border-top:1px solid;padding:7px}.srvcMoreP1{position:absolute;left:8px}.srvcMoreP2{text-align:right}.soccerScore__body{padding-top:5px}.soccerScore__body.on{display:block}.soccerScore__body .soccerScore__table{width:90%;margin:auto}.soccerScore__body td{padding:6px 0 2px;border-top-width:1px;border-top-style:solid}.soccerScore__body .tablebdt td{border-top-width:0;padding-top:0}.soccerScore__body .tablebdt .noGame{padding-bottom:9px;text-align:left}.soccerScore__body .team1,.soccerScore__body .team2{width:36%}.soccerScore__body .team1{text-align:right}.soccerScore__body .team2{text-align:left}.soccerScore__body .gmState{text-align:center;white-space:nowrap}.soccerScore__body .gmState .team1,.soccerScore__body .gmState .team2{display:inline-block;width:1.5em}.soccerScore__body .score{display:block;margin:-2px 0;font-size:108%;font-weight:bold}.soccerScore__body .status{overflow:hidden;text-align:center;vertical-align:top}.soccerScore__body .status td{border:0;padding:0 0 3px}.soccerScore__body .status .player1,.soccerScore__body .status .player2{padding-bottom:0}.soccerScore__body .sbVideo{padding-left:22px}.soccerScore__body .sbVideoLink{display:inline-block;margin-left:17px}.soccerScore__body .iconVideo{height:14px;background-position:0 -939px;cursor:pointer}.soccerScore__body .break{display:inline-block;width:37px;height:14px;margin-left:4px;cursor:pointer;background-position:0 -2639px;text-indent:-9999px}.soccerScore__body .break:hover{text-decoration:none}.soccerScore__body .player2{float:right}.soccerScore__body .player1 .position,.soccerScore__body .player2 .position{width:2.3em;vertical-align:top}.soccerScore__body .player1 .name{float:left;word-break:break-all}.soccerScore__body .player1,.soccerScore__body .player2 .position,.soccerScore__body .player2 .name{text-align:left}#srvcTgl{height:12px}#serviceBox{position:relative}#serviceBox .hd{padding-bottom:5px}#serviceBox .hd span{color:#1d3994;cursor:pointer}#serviceBox .hd span:hover{text-decoration:underline}.sbSportsMore{position:relative;text-align:left;border-top:1px solid;padding:7px}.srvcMoreP1{position:absolute;left:8px}.srvcMoreP2{text-align:right}#sbScoreBoard{padding-top:5px}#sbScoreBoard.on{display:block}#sbScoreBoard .srvcTblBd{width:90%;margin:auto}#sbScoreBoard td{padding:6px 0 2px;border-top-width:1px;border-top-style:solid}#sbScoreBoard .tablebdt td{border-top-width:0;padding-top:0}#sbScoreBoard .tablebdt .noGame{padding-bottom:9px;text-align:left}#sbScoreBoard .team1,#sbScoreBoard .team2{width:36%}#sbScoreBoard .team1{text-align:right}#sbScoreBoard .team2{text-align:left}#sbScoreBoard .gmState{text-align:center;white-space:nowrap}#sbScoreBoard .gmState .team1,#sbScoreBoard .gmState .team2{display:inline-block;width:1.5em}#sbScoreBoard .score{display:block;margin:-2px 0;font-size:108%;font-weight:bold}#sbScoreBoard .status{overflow:hidden;text-align:center;vertical-align:top}#sbScoreBoard .status td{border:0;padding:0 0 3px}#sbScoreBoard .status .player1,#sbScoreBoard .status .player2{padding-bottom:0}#sbScoreBoard .sbVideo{padding-left:22px}#sbScoreBoard .sbVideoLink{display:inline-block;margin-left:17px}#sbScoreBoard .iconVideo{height:14px;background-position:0 -939px;cursor:pointer}#sbScoreBoard .break{display:inline-block;width:37px;height:14px;margin-left:4px;cursor:pointer;background-position:0 -2639px;text-indent:-9999px}#sbScoreBoard .break:hover{text-decoration:none}#sbScoreBoard .player2{float:right}#sbScoreBoard .player1 .position,#sbScoreBoard .player2 .position{width:2.3em;vertical-align:top}#sbScoreBoard .player1 .name{float:left;word-break:break-all}#sbScoreBoard .player1,#sbScoreBoard .player2 .position,#sbScoreBoard .player2 .name{text-align:left}#sbHdDate{position:relative;overflow:hidden;margin-left:5%;padding-bottom:8px;text-align:left}#srvcTgl{height:12px}.qurioRanking{position:relative}.qurioRanking .hd .update{position:absolute;right:10px;top:10px;font-size:85%;color:#666}.qurioRanking .recBd{position:relative;margin:5px 9px 0 9px;*zoom:1}.qurioRanking .recBd:after{content:\"\";display:block;clear:both}.qurioRanking .recBd p{margin-bottom:13px;word-break:normal}.qurioRanking .item{*zoom:1;margin-bottom:8px}.qurioRanking .item:after{content:\"\";display:block;clear:both}.qurioRanking .label{display:block;float:left;width:1.3em;height:1.3em;padding:1px 1px 1px 1px;margin-right:8px;text-align:center;color:#FFF;font-weight:bold}.qurioRanking .rank1 .label{background:#B39B53}.qurioRanking .rank2 .label{background:#888CA5}.qurioRanking .rank3 .label{background:#AD8975}.qurioRanking .rank4 .label,.qurioRanking .rank5 .label{background:#E8E8E8;color:#5C5C5C}.qurioRanking .recImg{float:left;position:relative;display:table;background:#fff;margin-right:8px}.qurioRanking .recImg div{width:72px;height:54px;display:table-cell;layout-grid-line:54px;text-align:center;vertical-align:middle}.qurioRanking .recImg a{width:72px;height:54px;display:table-cell;text-align:center;vertical-align:middle}.qurioRanking .recImg a:hover{text-decoration:none}.qurioRanking .recImg img{vertical-align:top}.qurioRanking .recTxt{overflow:hidden}.qurioRanking .recTxt p{word-break:normal;margin-bottom:3px}.qurioRanking .cp{color:#666;font-size:85%}.rio__titleWrapper:before,.rio__mainWrapper:before,#selectionR .Selection--02:before,.Barcode__wrap:before,.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{content:\" \";display:table}.rio__titleWrapper:after,.rio__mainWrapper:after,#selectionR .Selection--02:after,.Barcode__wrap:after{clear:both}.rio__titleWrapper,.rio__mainWrapper,#selectionR .Selection--02,.Barcode__wrap{*zoom:1}.Barcode{position:relative;padding:9px 0 13px}.Barcode:after{display:block;position:absolute;top:8px;left:13px;width:37px;height:37px;background-position:0 -2732px;content:''}.Barcode__title{margin-bottom:3px;padding-left:60px;font-weight:bold;font-size:115%}.Barcode__text{padding-right:10px;padding-left:60px}.Barcode__wrap{width:268px;margin:0 auto}.Barcode__list{float:left}.Barcode__item{text-align:center}.bx .Barcode__item{margin:13px 0 0}.Barcode__qr{float:right;margin-top:18px}.Barcode__qrImage{border:1px solid  #ddd}#partner .item{margin:8px 0 0 3px}.pageTop{position:relative}.pageTop a{display:block;padding:10px 0 9px 0;font-size:115%;color:#fff}.pageTop a:hover{text-decoration:none}.pageTop .upArrow{width:0;height:0;border:5px solid transparent;border-bottom:5px solid #fff;position:absolute;top:12px;left:102px}.subfooter{padding-top:7px;text-align:center}.subfooter .connect{margin:auto}.subfooter .connect li{padding:0 1px 0 15px;white-space:nowrap;line-height:1.6}.subfooter .connect .first{padding-left:0}.subfooter address{font-size:95.8%;margin-top:5px}#footer{padding:2px 0 5px;margin:10px 0 0;border-width:1px 0 0}#uft{position:relative;padding-bottom:7px;margin-bottom:12px;border-width:0 0 1px 0;border-style:solid}#footer ul,#footer address{margin:5px auto}#ftSearchbox{position:relative;border-bottom:1px solid;margin-bottom:12px}#ftSrchbd{position:relative;zoom:1;width:55%;min-height:33px;margin:0 auto;padding:11px 0 8px;text-align:left}#ftSrchbd p{clear:both;overflow:hidden}#ftSrchtxtBg{line-height:0;width:72.5%;min-width:400px;display:block;float:left;border-right:transparent;border-left:transparent}#ftSrchtxt{float:left;min-height:28px;width:100%;padding:4px 5px;padding-right:4px;border:1px solid #999;background-color:#fff;font-size:113%;line-height:1.29;box-sizing:border-box;-webkit-box-sizing:border-box;text-indent:1px}#ftSrchbtn{float:left;width:21%;margin-left:5px;padding:6px 0 4px;border:0;background-color:#666;background-position:26px 8px;background-repeat:no-repeat;min-height:28px;color:#fff;cursor:pointer;font-size:106%;line-height:1.29;letter-spacing:3px;text-indent:10px}#ftSrchbd{padding:6px 0 13px}#ftSrchbd .tab{position:relative;z-index:8;margin:0 0 5px 2px;padding-top:1px;min-height:14px}#ftSrchbd .tab li{display:inline;padding:0 5px;margin:0}#ftSrchbd .tab li.first{padding-left:0}#ftSrchbd ul.tab li ul{padding:6px 0;margin:0;background:#fff}#ftSearchbox #ftSrchbd ul.tab li ul li{white-space:nowrap;display:block;padding:0 1px;border-right:0}#ftSrchbd ul.tab li ul li a{display:block;padding:3px 8px}#ftSrchbd ul.tab li ul li a:hover{color:#1d3994}#ftSrchbd ul.tab li ul li.last{margin-top:3px;border-top:1px solid #ccc}#ftSrchbd ul.tab li ul li.last a{margin-top:3px}#ftSrchbd ul.tab li#ftSrchMore{position:absolute;border-right:0;vertical-align:top;position:relative}#ftSrchbd ul.tab li#ftSrchMore .plup,#ftSrchbd ul.tab li#ftSrchMore .pldwn{color:#1D3994}#ftSrchMorefw{position:absolute;bottom:1.15em;right:6px;z-index:9;border:1px solid #7c7c7c}.ulmwindow .ulmStart0 .ulmwindowbd{overflow:hidden}.ulmwindow .ulmStart0 .ulmwindowsearch{float:right}.ulmwindow .ulmStart0 .ulmwindowCth{float:left}.ulmwindow .ulmStart0 .ulmwindowmds{clear:left;margin:0;width:75%}.ulmwindow{position:absolute;left:-7px;z-index:9;display:block;min-width:328px;width:24.6em;margin-top:-2px;padding:10px;border:1px solid #7c7c7c;background:#fffac6;color:#666}.ulmwindow form{position:relative;*zoom:1}body .ulmwindow .alert{color:#f00}.ulmwindowttl{margin:10px 0 -6px}.ulmwindowdtl{height:100px;margin-top:11px;padding:1px 0;border:1px solid #ccc;background:#fff;overflow:auto}ul.ulmwindowdtl li{margin:3px 0 !important}ul.ulmwindowdtl li a{display:block;margin:0 1px;padding:1px 0 1px 0.5em}.ulmwindow .ulmwindowbd{background:#fffac6}.ulmwindow label{display:block}.ulmwindow .ulmwindowCth{margin-bottom:4px;color:#000;line-height:1.5}.ulmwindow .ulmwindowmds{margin-bottom:7px;color:#666}.ulmwindow .ulmStart .ulmwindowmds{margin-bottom:2px}.ulmwindowmds span{display:block;margin:3px 0 0 1em}.ulmwindow .ulmwindowarea{position:relative}.ulmwindow .ulmwindowsearch{vertical-align:middle;padding-bottom:3px}.ulmwindow .ulmwindowsearch input{width:77%;min-height:16px;margin-right:3px;padding:1px 3px;border:1px solid #979797;vertical-align:middle}.ulmwindow .ulmwindowsearch button{position:relative;padding:0 10px;min-height:20px;border:1px solid;border-color:#979797 #979797 #696969;color:#1d3994;vertical-align:middle;background:#fff}.ulmwindow .ulmwindowsearch button:hover{border-color:#5e5e5e #5e5e5e #393939}.ulmwindow .ulmwindowsearch button:after{content:\"\";display:block;position:absolute;left:0;bottom:0;width:100%;height:1px;background:#ddd}.ulmwindow .ulmwindowevery{margin:6px 0 0 4em}.ulmwindow .ulmwindowevery input{margin-right:1em}.ulmwindowoption{margin:7px 0 -4px;text-align:right}#localfw{top:2.1em;left:-1px}#localfw2{position:relative;z-index:10;left:0;width:auto;margin:0;border-width:0 0 1px;border-bottom-color:#ccc}.ulmwindow .ulmbg{position:absolute;z-index:10;left:10px;display:block;height:9px;width:31px;margin:10px 0 -9px;background-repeat:no-repeat;background-position:0 -190px}#centralPosition{margin-top:-20px;border-top:0}#centralPosition h2{padding:2px 2px 7px}#centralPosition ul{margin:-7px 4px -8px 59px;*margin-bottom:-4px;padding-top:9px;border-top-width:1px;border-top-style:dotted;overflow:visible}#centralPosition li{margin-left:-30px;position:relative;z-index:9;overflow:hidden}#centralPosition dl{margin:0 9px 0 67px;padding:9px 0 7px 0;background-repeat:repeat-x;background-position:0 -2700px}#centralPosition dt{position:absolute;left:9px;font-weight:bold}#centralPosition dd{margin-left:-67px;padding-left:3.8em}#pbwTgl{position:absolute;left:3px;top:2px}#pbwradarWp{clear:both;overflow:hidden;display:none;padding:6px 6px 0;text-align:center}#pbwradarWp .more{padding:6px 0 2px;text-align:right}#pbwradar.pbwrPtn2 #pbwradarTtl{position:absolute;padding-left:18px}#pbwradar.pbwrPtn2{display:inline-block;margin-top:-5px;padding:5px 2px 1px 2px}#pbwlocation{clear:none}#pbplan{clear:both}\n--></style>\n<script type=\"text/javascript\"><!--\n  var ver=\"FP43A\";\nif(typeof YAHOO==\"undefined\"||!YAHOO){var YAHOO={}}YAHOO.namespace=function(){var a=arguments,b=null,d,e,c;for(d=0;d<a.length;d=d+1){c=(\"\"+a[d]).split(\".\");b=YAHOO;for(e=(c[0]==\"YAHOO\")?1:0;e<c.length;e=e+1){b[c[e]]=b[c[e]]||{};b=b[c[e]]}}return b};YAHOO.log=function(b,a,c){var d=YAHOO.widget.Logger;if(d&&d.log){return d.log(b,a,c)}else{return false}};YAHOO.register=function(d,i,a){var e=YAHOO.env.modules,c,f,g,h,b;if(!e[d]){e[d]={versions:[],builds:[]}}c=e[d];f=a.version;g=a.build;h=YAHOO.env.listeners;c.name=d;c.version=f;c.build=g;c.versions.push(f);c.builds.push(g);c.mainClass=i;for(b=0;b<h.length;b=b+1){h[b](c)}if(i){i.VERSION=f;i.BUILD=g}else{YAHOO.log(\"mainClass is undefined for module \"+d,\"warn\")}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(a){return YAHOO.env.modules[a]||null};YAHOO.env.ua=function(){var e=function(i){var h=0;return parseFloat(i.replace(/\\./g,function(){return(h++==1)?\"\":\".\"}))},b=navigator,c={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,caja:b.cajaVersion,secure:false,os:null},f=navigator&&navigator.userAgent,d=window&&window.location,g=d&&d.href,a;c.secure=g&&(g.toLowerCase().indexOf(\"https\")===0);if(f){if((/windows|win32/i).test(f)){c.os=\"windows\"}else{if((/macintosh/i).test(f)){c.os=\"macintosh\"}}if((/KHTML/).test(f)){c.webkit=1}a=f.match(/AppleWebKit\\/([^\\s]*)/);if(a&&a[1]){c.webkit=e(a[1]);if(/ Mobile\\//.test(f)){c.mobile=\"Apple\"}else{a=f.match(/NokiaN[^\\/]*/);if(a){c.mobile=a[0]}}a=f.match(/AdobeAIR\\/([^\\s]*)/);if(a){c.air=a[0]}}if(!c.webkit){a=f.match(/Opera[\\s\\/]([^\\s]*)/);if(a&&a[1]){c.opera=e(a[1]);a=f.match(/Opera Mini[^;]*/);if(a){c.mobile=a[0]}}else{a=f.match(/MSIE\\s([^;]*)/);if(a&&a[1]){c.ie=e(a[1])}else{a=f.match(/Gecko\\/([^\\s]*)/);if(a){c.gecko=1;a=f.match(/rv:([^\\s\\)]*)/);if(a&&a[1]){c.gecko=e(a[1])}}}}}}return c}();(function(){YAHOO.namespace(\"util\",\"widget\",\"example\");if(\"undefined\"!==typeof YAHOO_config){var d=YAHOO_config.listener,a=YAHOO.env.listeners,b=true,c;if(d){for(c=0;c<a.length;c++){if(a[c]==d){b=false;break}}if(b){a.push(d)}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var h=YAHOO.lang,a=Object.prototype</a\"[object Array]\",g=\"[object Function]\",c=\"[object Object]\",e=[],d=[\"toString\",\"valueOf\"],f={isArray:function(i){return a.toString.apply(i)===b},isBoolean:function(i){return typeof i===\"boolean\"},isFunction:function(i){return(typeof i===\"function\")||a.toString.apply(i)===g},isNull:function(i){return i===null},isNumber:function(i){return typeof i===\"number\"&&isFinite(i)},isObject:function(i){return(i&&(typeof i===\"object\"||h.isFunction(i)))||false},isString:function(i){return typeof i===\"string\"},isUndefined:function(i){return typeof i===\"undefined\"},_IEEnumFix:(YAHOO.env.ua.ie)?function(j,k){var l,m,i;for(l=0;l<d.length;l=l+1){m=d[l];i=k[m];if(h.isFunction(i)&&i!=a[m]){j[m]=i}}}:function(){},extend:function(i,m,j){if(!m||!i){throw new Error(\"extend failed, please check that all dependencies are included.\")}var k=function(){},l;k.prototype=m.prototype;i.prototype=new k();i.prototype.constructor=i;i.superclass=m.prototype;if(m.prototype.constructor==a.constructor){m.prototype.constructor=m}if(j){for(l in j){if(h.hasOwnProperty(j,l)){i.prototype[l]=j[l]}}h._IEEnumFix(i.prototype,j)}},augmentObject:function(n,i){if(!i||!n){throw new Error(\"Absorb failed, verify dependencies.\")}var l=arguments,j,m,k=l[2];if(k&&k!==true){for(j=2;j<l.length;j=j+1){n[l[j]]=i[l[j]]}}else{for(m in i){if(k||!(m in n)){n[m]=i[m]}}h._IEEnumFix(n,i)}},augmentProto:function(i,j){if(!j||!i){throw new Error(\"Augment failed, verify dependencies.\")}var l=[i.prototype,j.prototype],k;for(k=2;k<arguments.length;k=k+1){l.push(arguments[k])}h.augmentObject.apply(this,l)},dump:function(q,l){var o,m,j=[],i=\"{...}\",p=\"f(){...}\",k=\", \",n=\" => \";if(!h.isObject(q)){return q+\"\"}else{if(q instanceof Date||(\"nodeType\" in q&&\"tagName\" in q)){return q}else{if(h.isFunction(q)){return p}}}l=(h.isNumber(l))?l:3;if(h.isArray(q)){j.push(\"[\");for(o=0,m=q.length;o<m;o=o+1){if(h.isObject(q[o])){j.push((l>0)?h.dump(q[o],l-1):i)}else{j.push(q[o])}j.push(k)}if(j.length>1){j.pop()}j.push(\"]\")}else{j.push(\"{\");for(o in q){if(h.hasOwnProperty(q,o)){j.push(o+n);if(h.isObject(q[o])){j.push((l>0)?h.dump(q[o],l-1):i)}else{j.push(q[o])}j.push(k)}}if(j.length>1){j.pop()}j.push(\"}\")}return j.join(\"\")},substitute:function(i,x,p){var t,u,v,m,l,j,n=[],w,s=\"dump\",o=\" \",y=\"{\",k=\"}\",q,r;for(;;){t=i.lastIndexOf(y);if(t<0){break}u=i.indexOf(k,t);if(t+1>=u){break}w=i.substring(t+1,u);m=w;j=null;v=m.indexOf(o);if(v>-1){j=m.substring(v+1);m=m.substring(0,v)}l=x[m];if(p){l=p(m,l,j)}if(h.isObject(l)){if(h.isArray(l)){l=h.dump(l,parseInt(j,10))}else{j=j||\"\";q=j.indexOf(s);if(q>-1){j=j.substring(4)}r=l.toString();if(r===c||q>-1){l=h.dump(l,parseInt(j,10))}else{l=r}}}else{if(!h.isString(l)&&!h.isNumber(l)){l=\"~-\"+n.length+\"-~\";n[n.length]=w}}i=i.substring(0,t)+l+i.substring(u+1)}for(t=n.length-1;t>=0;t=t-1){i=i.replace(new RegExp(\"~-\"+t+\"-~\"),\"{\"+n[t]+\"}\",\"g\")}return i},trim:function(j){try{return j.replace(/^\\s+|\\s+$/g,\"\")}catch(i){return j}},merge:function(){var i={},k=arguments,l=k.length,j;for(j=0;j<l;j=j+1){h.augmentObject(i,k[j],true)}return i},later:function(j,p,i,n,m){j=j||0;p=p||{};var o=i,k=n,l,q;if(h.isString(i)){o=p[i]}if(!o){throw new TypeError(\"method undefined\")}if(k&&!h.isArray(k)){k=[n]}l=function(){o.apply(p,k||e)};q=(m)?setInterval(l,j):setTimeout(l,j);return{interval:m,cancel:function(){if(this.interval){clearInterval(q)}else{clearTimeou</l)}}}},isValue:function(i){return(h.isObject(i)||h.isString(i)||h.isNumber(i)||h.isBoolean(i))}};h.hasOwnProperty=(a.hasOwnProperty)?function(j,i){return j&&j.hasOwnProperty(i)}:function(j,i){return !h.isUndefined(j[i])&&j.constructor.prototype[i]!==j[i]};f.augmentObject(h,f,true);YAHOO.util.Lang=h;h.augment=h.augmentProto;YAHOO.augment=h.augmentProto;YAHOO.extend=h.extend})();YAHOO.register(\"yahoo\",YAHOO,{version:\"2.8.2int\",build:\"5\"});if(typeof YAHOO==\"undefined\"||!YAHOO){var YAHOO={}}if(typeof YAHOO.JP==\"undefined\"||!YAHOO.JP){YAHOO.JP={}}YAHOO.JP.pcore={};(function(){YAHOO.JP.pcore.y64=new d;YAHOO.JP.pcore.rdsig=new c;function d(){var f=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._\";function a(e){var j=f.length;var l;var k=0;while(k<=j){if(e==f.charAt(k++)){break}if(k==65){throw\"This character is undefined\"}}l=k-1;return l}function b(i){var l=[];if(i==null){return l}for(var e=0;e<i.length;e++){var k=i.charCodeAt(e);if(55296<=k&&k<=56319){throw\"This character code is not supported\"}if(56320<=k&&k<=57343){throw\"This character code is not supported\"}if(k<=127){l.push(k)}else{if(k<=2047){l.push(((k>>6)&31)|192);l.push((k&63)|128)}else{if(k<=65535){l.push(((k>>12)&15)|224);l.push(((k>>6)&63)|128);l.push((k&63)|128)}else{throw\"This character code is not supported\"}}}}return l}return{yax_to_y64:function(i){try{var w=b(i)}catch(x){var u=new Error();u.message=x;throw u}var e=w.length;var v=\"\";var q,r,s;var t=0;while(t<e){q=w[t++];if(t==e){v+=f.charAt(q>>2);v+=f.charAt(((q<<4)&48)|0);v+=\"--\";break}r=w[t++];if(t==e){v+=f.charAt(q>>2);v+=f.charAt(((q<<4)&48)|(r>>4));v+=f.charAt(((r<<2)&60)|0);v+=\"-\";break}s=w[t++];v+=f.charAt(q>>2);v+=f.charAt(((q<<4)&48)|(r>>4));v+=f.charAt(((r<<2)&60)|(s>>6));v+=f.charAt(s&63)}return v},yax_from_y64:function(i){i.replace(/./g,\"+\");i.replace(/_/g,\"/\");var e=i.length;var w=\"\";var q,r,s,t;var u=0;try{if((e%4)!==0){throw\"Illegal string to decode from y64\"}while(u<e){q=a(i.charAt(u++));if(q==\"-\"){throw\"Illegal string to decode\"}r=a(i.charAt(u++));if(r==\"-\"){throw\"Illegal string to decode\"}if(i.charAt(u)==\"-\"){w+=String.fromCharCode((q<<2)|(r>>4));break}else{s=a(i.charAt(u++))}if(i.charAt(u)==\"-\"){w+=String.fromCharCode((q<<2)|(r>>4));w+=String.fromCharCode(((r<<4)&255)|(s>>2));break}else{t=a(i.charAt(u++))}w+=String.fromCharCode((q<<2)|(r>>4));w+=String.fromCharCode(((r<<4)&255)|(s>>2));w+=String.fromCharCode((s<<6)&255|t)}}catch(x){var v=new Error();v.message=x;throw v}return w}}}function c(){var a=\"http://rdsig.yahoo.co.jp\";function b(m,o){if(!m.match(/^https?:\\/\\/.+$/)){throw\"url malformed\"}if(typeof o!==\"undefined\"){if(o.charAt(0)!==\"/\"){o=\"/\"+o}if(o.charAt(o.length-1)===\"/\"){o=o.substr(0,o.length-1)}}else{o=\"\"}var p;var e=new d();try{p=e.yax_to_y64(m)}catch(l){throw l}var n=a+o+\"/RV=1/RU=\"+p;return n}return{gen_redirect_v1:function(g,h){return b(g,h)}}}}());String.prototype.rot13=function(){return this.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode((a<=\"Z\"?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})};YAHOO.namespace(\"Fp\");YAHOO.namespace(\"Fd\");YAHOO.Fp.rdbeacon=function(a,b,f,c){var e=YAHOO.JP.pcore.rdsig.gen_redirect_v1(encodeURI(\"http://k.yimg.jp/images/clear.gif?t=\"+new Date().getTime()),\"/toppage/\"+a+\"/\"+b);YAHOO.Fp.throwbeacon(e,f,c)};YAHOO.Fp.throwbeacon=function(e,f,c){var b=new Image(),a=function(){if(b){b=null;f()}};if(typeof f==\"function\"){b.onload=b.onerror=b.onabort=a;if(typeof c==\"number\"){setTimeout(a,c)}}b.src=e;setTimeout(function(){b=null},10000)};YAHOO.Fd.stripChunk=function(a){var b=a.lastIndexOf(\"!--\");if(b<0){return a}return a.substring(0,(b-1))};var d=document;var $=function(a){return(typeof(a)==\"string\")?d.getElementById(a):false};\n//--></script>\n<!--[if lt IE 6]><script type=\"text/javascript\">YAHOO.Fp._ie55=1;</script><![endif]--> \n<!--[if IE]><script type=\"text/javascript\">YAHOO.Fp._ie=1;</script><![endif]-->\n<!--[if IE 7]><script type=\"text/javascript\">YAHOO.Fp._ie7=1;</script><![endif]-->\n<!--[if IE 8]><script type=\"text/javascript\">YAHOO.Fp._ie8=1;</script><![endif]-->\n<!--[if IE 9]><script type=\"text/javascript\">YAHOO.Fp._ie9=1;</script><![endif]-->\n<script type=\"text/javascript\" src=\"/javascript/fp_base_bd_ga_6.0.73.js\"></script>\n<link id=\"themeCSS\" href=\"http://k.yimg.jp/images/top/sp2/clr/160805/1.css\" rel=\"stylesheet\" type=\"text/css\">\n\n<script type=\"text/javascript\"><!--\n(function(){\n    var settingValues = YAHOO.lang.JSON.parse('{\\u0022_hostname\\u0022:\\u0022www.yahoo.co.jp\\u0022,\\u0022_basetag\\u0022:\\u0022\\u005c/\\u0022,\\u0022_bcrumb\\u0022:\\u0022nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\\u0022,\\u0022_crumb\\u0022:\\u00224032ea2ce0a9f4eb6437e9d1107ca7f6\\u0022,\\u0022_hp\\u0022:false,\\u0022_srchOldQ\\u0022:\\u0022\\u0022,\\u0022_x_flag_id\\u0022:1,\\u0022_cmp_flag_id\\u0022:false,\\u0022_eappid\\u0022:\\u0022xzLp65CtmbzaUOPW0ej1YcMvxqInOTZALBBxeZunLDBod5eAz_12W_mE.Oxl_xQKGlhek.nKobm0y2SiIpRZpQWVY4szZYSF8oJVPN1qZVBbaVE7.SrCPnALA6RqKVP_2IwJFMlw6E4Gp_UleYnw\\u0022,\\u0022_earth\\u0022:false,\\u0022_emg\\u0022:false,\\u0022_fr\\u0022:false,\\u0022_page\\u0022:\\u0022FP43A\\u0022,\\u0022_fr_sa_Param\\u0022:\\u0022top_ga1_sa\\u0022,\\u0022_spaceid\\u0022:\\u00222080187653\\u0022,\\u0022_privateBrowsingDetect\\u0022:false,\\u0022_portfolioRequest\\u0022:false,\\u0022_ie\\u0022:false,\\u0022_ie55\\u0022:false,\\u0022_ie6\\u0022:false,\\u0022_ie7\\u0022:false,\\u0022_ie8\\u0022:false,\\u0022_ie9\\u0022:false,\\u0022_ff\\u0022:false,\\u0022_ffv\\u0022:\\u00220\\u0022,\\u0022_sf\\u0022:false,\\u0022_sfv\\u0022:\\u00220\\u0022,\\u0022_ch\\u0022:true,\\u0022_chv\\u0022:52,\\u0022_op\\u0022:false,\\u0022_mac\\u0022:false,\\u0022_iosv\\u0022:0,\\u0022_andv\\u0022:0,\\u0022_plcookie\\u0022:false,\\u0022_jis\\u0022:\\u002213219\\u0022,\\u0022_jpadmin1\\u0022:\\u0022\\u005cu6771\\u005cu4eac\\u005cu90fd\\u0022,\\u0022_jpadmin2\\u0022:\\u0022\\u0022,\\u0022_jpadmin3\\u0022:\\u0022\\u005cu72db\\u005cu6c5f\\u005cu5e02\\u0022,\\u0022_jpadmin4\\u0022:\\u0022\\u0022,\\u0022_jpadmin5\\u0022:\\u0022\\u0022,\\u0022_latitude\\u0022:\\u002235.634914\\u0022,\\u0022_longitude\\u0022:\\u0022139.578740\\u0022,\\u0022_ulmCrumb\\u0022:\\u0022d51d123aa6e6b333683c5a0b641138e6,1473578897\\u0022,\\u0022_tabletUA\\u0022:false,\\u0022_smpUA\\u0022:false,\\u0022_ismysb\\u0022:false,\\u0022_srchAssist\\u0022:{\\u0022history\\u0022:false,\\u0022assist\\u0022:true,\\u0022ylt\\u0022:\\u0022;_ylt=A2RA2EuRB9VXsAsA7MEFJf17\\u0022},\\u0022_cityLocation\\u0022:{\\u002201\\u0022:\\u0022lat=42.9586353240805&lon=142.659439600781&z=9\\u0022,\\u002202\\u0022:\\u0022lat=40.91152179382776&lon=140.7345830359375&z=10\\u0022,\\u002203\\u0022:\\u0022lat=39.71635131415745&lon=141.20444415859367&z=10\\u0022,\\u002204\\u0022:\\u0022lat=38.40461356028272&lon=140.90205300234373&z=10\\u0022,\\u002205\\u0022:\\u0022lat=39.689028462611624&lon=140.41001058749976&z=10\\u0022,\\u002206\\u0022:\\u0022lat=38.427870284772034&lon=140.06664814062523&z=10\\u0022,\\u002207\\u0022:\\u0022lat=37.403922053738704&lon=140.12985371015637&z=10\\u0022,\\u002208\\u0022:\\u0022lat=36.301995701348545&lon=140.26001292187502&z=10\\u0022,\\u002209\\u0022:\\u0022lat=36.59643664770557&lon=139.87525015390622&z=10\\u0022,\\u002210\\u0022:\\u0022lat=36.53477879025767&lon=138.9812194210938&z=10\\u0022,\\u002211\\u0022:\\u0022lat=35.56932491646078&lon=139.58453960078143&z=10\\u0022,\\u002212\\u0022:\\u0022lat=35.525954326432476&lon=140.09836871718775&z=10\\u0022,\\u002213\\u0022:\\u0022lat=35.35141068969144&lon=139.49412067031264&z=10\\u0022,\\u002214\\u0022:\\u0022lat=35.925076155236134&lon=139.43094928359395&z=10\\u0022,\\u002215\\u0022:\\u0022lat=37.681086655498696&lon=138.86116366015645&z=10\\u0022,\\u002216\\u0022:\\u0022lat=36.83812820522738&lon=137.21683776406246&z=10\\u0022,\\u002217\\u0022:\\u0022lat=36.816927930078165&lon=136.73281809921875&z=10\\u0022,\\u002218\\u0022:\\u0022lat=35.84059254679807&lon=136.1063767546876&z=10\\u0022,\\u002219\\u0022:\\u0022lat=35.51674747796973&lon=138.65359174296876&z=10\\u0022,\\u002220\\u0022:\\u0022lat=36.182711381057366&lon=138.06554675468752&z=10\\u0022,\\u002221\\u0022:\\u0022lat=35.78870202701374&lon=136.9889472609373&z=10\\u0022,\\u002222\\u0022:\\u0022lat=35.01510668752381&lon=138.25118496250002&z=10\\u0022,\\u002223\\u0022:\\u0022lat=34.9555898165539&lon=137.10705028828113&z=10\\u0022,\\u002224\\u0022:\\u0022lat=34.52911701107969&lon=136.3768145625001&z=10\\u0022,\\u002225\\u0022:\\u0022lat=35.21776042399735&lon=136.19258677968716&z=10\\u0022,\\u002226\\u0022:\\u0022lat=35.12068071352721&lon=135.58267743203146&z=10\\u0022,\\u002227\\u0022:\\u0022lat=34.59018855591459&lon=135.5459734980471&z=10\\u0022,\\u002228\\u0022:\\u0022lat=35.077143033971865&lon=134.82362242382817&z=10\\u0022,\\u002229\\u0022:\\u0022lat=34.42061195075837&lon=135.93445293515637&z=10\\u0022,\\u002230\\u0022:\\u0022lat=34.04366405512642&lon=135.68451397031282&z=10\\u0022,\\u002231\\u0022:\\u0022lat=35.340492868728234&lon=133.79824437500037&z=10\\u0022,\\u002232\\u0022:\\u0022lat=35.012493250119654&lon=132.54792818828128&z=10\\u0022,\\u002233\\u0022:\\u0022lat=34.86925047987426&lon=133.86297586718752&z=10\\u0022,\\u002234\\u0022:\\u0022lat=34.60466624324499&lon=132.714845528906&z=10\\u0022,\\u002235\\u0022:\\u0022lat=34.199340556143824&lon=131.55604534296867&z=10\\u0022,\\u002236\\u0022:\\u0022lat=33.8495113126137&lon=134.160852605469&z=10\\u0022,\\u002237\\u0022:\\u0022lat=34.20622542144985&lon=134.02677150781247&z=10\\u0022,\\u002238\\u0022:\\u0022lat=33.691021924980596&lon=133.06279065937497&z=10\\u0022,\\u002239\\u0022:\\u0022lat=33.385568895584726&lon=133.43218684687506&z=10\\u0022,\\u002240\\u0022:\\u0022lat=33.52406229454766&lon=130.5361805273437&z=10\\u0022,\\u002241\\u0022:\\u0022lat=33.22644110239246&lon=130.20898409296882&z=10\\u0022,\\u002242\\u0022:\\u0022lat=33.1643860313384&lon=129.7416344625001&z=10\\u0022,\\u002243\\u0022:\\u0022lat=32.64690618531515&lon=130.7581658921874&z=10\\u0022,\\u002244\\u0022:\\u0022lat=33.16689246773283&lon=131.42849810390635&z=10\\u0022,\\u002245\\u0022:\\u0022lat=32.14153977081866&lon=131.31948968281253&z=10\\u0022,\\u002246\\u0022:\\u0022lat=31.534877871834613&lon=130.68228265156276&z=10\\u0022,\\u002247\\u0022:\\u0022lat=26.492971705882102&lon=127.81000135546867&z=10\\u0022},\\u0022_fortune_json\\u0022:\\u0022{aries:94,taurus:70,gemini:78,cancer:54,leo:90,virgo:66,libra:85,scorpio:61,sagittarius:97,capricorn:74,aquarius:82,pisces:58,nofortune:\\u005c\\u0022--\\u005c\\u0022}\\u0022,\\u0022_msconfig\\u0022:{\\u0022crumbIf\\u0022:\\u0022\\u0022,\\u0022crumbMl\\u0022:\\u0022\\u0022,\\u0022target\\u0022:\\u0022cscd.mail.yahoo.co.jp\\u0022,\\u0022path\\u0022:\\u0022\\u005c/ymail-ws-proxy\\u005c/frame.php?src=top&crumb=\\u0022,\\u0022farm\\u0022:null,\\u0022disp\\u0022:false,\\u0022allMailUrl\\u0022:\\u0022\\u0022,\\u0022resumeMailUrl\\u0022:\\u0022\\u0022},\\u0022_quriosity_crumb\\u0022:\\u0022dD1SZVExWEImc2s9cTdHSG5MUGZEcDNXYWdxQ2Q2eGdTNnVJc3A4LQ==\\u0022,\\u0022_ngarticleids\\u0022:[\\u0022amanda_20160907-00000144-nksports\\u0022],\\u0022_quriorankingarticleid\\u0022:\\u0022[\\u005c\\u0022amanda_20160911-00000137-sph\\u005c\\u0022,\\u005c\\u0022amanda_20160911-00000514-sanspo\\u005c\\u0022,\\u005c\\u0022amanda_20160911-00000120-spnannex\\u005c\\u0022,\\u005c\\u0022amanda_20160910-00000024-mantan\\u005c\\u0022,\\u005c\\u0022amanda_20160911-00000021-mvwalk\\u005c\\u0022]\\u0022}');\n    for (var key in settingValues) {\n        YAHOO.Fp[key] = settingValues[key];\n    }\n}());\n--></script>\n\n<div id=\"wrapper\">\n<div id=\"header\">\n<div id=\"masthead\" class=\"deco\" style=\"background:url(http://k.yimg.jp/images/mht/2016/0813_rio_judo.png) no-repeat 50% 1px;\">\n<h1><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA38EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Jpby55YWhvby5jby5qcC8-/RS=^ADARPaYof87US.IESlfFvBRfHc9aNM-\"><img src=\"http://k.yimg.jp/images/top/sp2/cmn/logo-ns_d_131205.png\" alt=\"Yahoo! JAPAN\" height=\"80\" width=\"377\"></a>\n<!-- DECO --></h1>\n<ul id=\"mhicon\">\n<li id=\"mhi1st\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA4MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RyYXZlbC55YWhvby5jby5qcC8_c2NfZT15dG1o/RS=^ADA6fh8mUi0kMPiRE0WqHmnwdEWPOk-\" title=\"トラベル\">トラベル</a></li>\n<li id=\"mhi2nd\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA4cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2F1Y3Rpb25zLnlhaG9vLmNvLmpwLw--/RS=^ADAf1lWJgj2v7pJ6.F9lQL8XyzW4ww-\" title=\"ヤフオク!\">ヤフオク!</a></li>\n<li id=\"mhi3rd\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA4sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwLz9zY19lPXl0bWg-/RS=^ADAnRaOZFkQ_q3ClBkjqn_FBzO9I70-\" title=\"ショッピング\">ショッピング</a></li>\n<li id=\"mhi4th\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA48EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL215LnlhaG9vLmNvLmpwLw--/RS=^ADAaxHeJt9UHsRpmcfu83BAOcbuMN0-\" title=\"My Yahoo!\">My Yahoo!</a></li>\n<li id=\"mhi5th\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA5MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2NhcmQueWFob28uY28uanAvc2VydmljZS9yZWRpcmVjdC90b3Av/RS=^ADAoaW_AE38EGkOXT_ZGHgTTXri0yY-\" title=\"カード\">カード</a></li>\n<li id=\"mhi6th\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA5cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL21haWwueWFob28uY28uanAv/RS=^ADA8QZBSiNMF4mw8lX262e99OkiUNw-\" title=\"メール\">メール</a></li>\n</ul>\n<ul id=\"siteinfo\">\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA5sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Rpci55YWhvby5jby5qcC8-/RS=^ADAD1QhS6OWnryKpm8Grnjgw4wHVyw-\">カテゴリ一覧</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA58EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2FkZC55YWhvby5jby5qcC9ndWlkZQ--/RS=^ADA1q058HT3TaaTPQ2mip29B4solBw-\">サイトの登録</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA6MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2lkLnlhaG9vLmNvLmpwLw--/RS=^ADAZRSBe2UkBRdmS.6bpWUJzeFW5MY-\">無料ID活用</a></li>\n</ul>\n<ul id=\"changeMode\">\n<li id=\"changeModeBB\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA6cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2JiLnlhaG9vLmNvLmpwLw--/RS=^ADAwgaSWz19dNTg2vWpYYqm3OJAiKM-\" title=\"Yahoo! BB\">Yahoo! BB</a></li>\n<li id=\"changeModeKids\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA6sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2tpZHMueWFob28uY28uanAv/RS=^ADATB.zS5rJB2Aa96mSgCNXKsSU80s-\" title=\"きっず版\">きっず版</a></li>\n<li id=\"changeModeApp\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA68EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Byb21vLm1vYmlsZS55YWhvby5jby5qcC95amFwcC8-/RS=^ADAiy1lSD48f1_4yMU5CnCYSFmX.8s-\" title=\"アプリ版\">アプリ版</a></li>\n</ul>\n</div>\n<div id=\"emg\">\n<!-- SpaceID=2080187653 loc=EMG3 noad-spid -->\n<!-- SpaceID=2080187653 loc=EMG2 noad-spid -->\n<!-- SpaceID=2080187653 loc=EMG noad -->\n</div>\n<div id=\"searchbox\" class=\"bdA3 bgA6\">\n<form action=\"http://search.yahoo.co.jp/search;_ylt=A2RA2EuRB9VXsAsA7MEFJf17\" name=\"sf1\" method=\"get\">\n<fieldset id=\"srchfield\">\n<legend>Yahoo!検索</legend>\n<div id=\"srchbd\">\n<ul class=\"tab\">\n<li class=\"tab0 first on\"><span> <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA7cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlYXJjaC55YWhvby5jby5qcC8-/RS=^ADAZ5QKwNWHJPeApOfIuvsxraPp9Bk- \" id=\"search\" hidefocus=\"true\">ウェブ</a></span></li>\n<li class=\"tab1\"><span><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA7sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ltYWdlLnNlYXJjaC55YWhvby5jby5qcC8-/RS=^ADAz9FiOX_SUkjFZLj8g3tmVjz9qCI-\" id=\"isearch\" hidefocus=\"true\">画像</a></span></li>\n<li class=\"tab2\"><span><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA78EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlYXJjaC55YWhvby5jby5qcC92aWRlbw--/RS=^ADATDYh85RM53hwy4bFaxaR5dQ.MgM-\" id=\"msearch\" hidefocus=\"true\">動画</a></span></li>\n<li class=\"tab3\"><span><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA8MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RpYy55YWhvby5jby5qcC8-/RS=^ADAh3.hMwZfjW_f4G69w0KlkCphBGY-\" id=\"dsearch\" hidefocus=\"true\">辞書</a></span></li>\n<li class=\"tab4\"><span><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA8cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2NoaWVidWt1cm8ueWFob28uY28uanAv/RS=^ADA2Ez61W0_LunktpYPhpD4DmHHm8E-\" id=\"ksearch\" hidefocus=\"true\">知恵袋</a></span></li>\n<li class=\"tab5\"><span><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA8sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL21hcC55YWhvby5jby5qcC8-/RS=^ADA_QInMQC9Qs4f6zKIkHkrGufKygg-\" id=\"csearch\" hidefocus=\"true\">地図</a></span></li>\n<li class=\"tab6\"><span><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA88EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWx0aW1lLnNlYXJjaC55YWhvby5jby5qcC8-/RS=^ADA.Nu5huqWhU4d0_S6NHz3Wda1c0M-\" id=\"rtsearch\" hidefocus=\"true\">リアルタイム</a></span></li>\n<li class=\"tab7\" id=\"srchMore\"><span><a class=\"pldwn\" hidefocus=\"true\" id=\"srchMorebtn\" href=\"http://services.yahoo.co.jp/?mode=pc\">一覧</a></span><div class=\"floatingw\" id=\"srchMorefw\"><ul>\n<li class=\"first\"><a hidefocus=\"true\" id=\"nsearch\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA9MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAv/RS=^ADA3k0tCBZe_9Wat8SNO1wBm5AlyHs-\">ニュース</a></li>\n<li><a hidefocus=\"true\" id=\"shsearch\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA9cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwLw--/RS=^ADAu6uaQh5tj1M10z0osHW9SLZkY4Y-\">ショッピング</a></li>\n<li><a hidefocus=\"true\" id=\"ausearch\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA9sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2F1Y3Rpb25zLnlhaG9vLmNvLmpwL2pwLw--/RS=^ADANmLaXbkCvKHeI2t6YHXk3CNXS0c-\">ヤフオク!</a></li>\n<li><a hidefocus=\"true\" id=\"tlntsearch\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA98EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RhbGVudC55YWhvby5jby5qcC8-/RS=^ADAfGQKNENNJQ5P2R6BO9HoGKpS4o4-\">人物</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA.MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Rpci55YWhvby5jby5qcC8-/RS=^ADAD1QhS6OWnryKpm8Grnjgw4wHVyw-\" id=\"tsearch\" hidefocus=\"true\">登録サイト</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA.cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlYXJjaC55YWhvby5jby5qcC8jIS9yZWNpcGU-/RS=^ADAixIgrrUKstKbQxfVRMJG587Ayn8-\" id=\"rsearch\" hidefocus=\"true\">レシピ</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA.sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2xvY28ueWFob28uY28uanAv/RS=^ADAVGtUxSOS6TqNLlDeGGvaxuhdWXU-\" id=\"lsearch\" hidefocus=\"true\">お店、施設</a></li>\n<li class=\"last\"><a hidefocus=\"true\" id=\"service\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA.8EFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlcnZpY2VzLnlhaG9vLmNvLmpwLz9tb2RlPXBj/RS=^ADANhQNIgLCNrnyEuufMvpiflxlsak-\">サービス一覧</a></li>\n</ul></div></li></ul>\n<p><label id=\"srchtxtBg\"><input name=\"p\" id=\"srchtxt\" type=\"text\" value=\"\">\n</label><input type=\"submit\" id=\"srchbtn\" class=\"srchbtn\" value=\"検索\"></p>\n<div id=\"srchAssist\">\n<div id=\"srchAssistBd\" style=\"display:none;\">\n<p id=\"srchAssistTxt\">キーワードが入力されていません。</p>\n<dl id=\"srchAssistOnOff\"><dt>キーワード入力補助</dt><dd class=\"first\">ON</dd><dd><a href=\"/?_m=SearchBox&amp;_a=setSuggest&amp;fr=&amp;copt2=1&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">OFF</a></dd></dl>\n \n</div>\n<div id=\"srchAssistClose\" title=\"キーワード入力補助を開く\"><div id=\"srchacb\"><a href=\"#\">キーワード入力補助を開く</a></div></div>\n</div>\n</div>\n<script type=\"text/javascript\"><!--\nYUE.addListener( document,  \"keydown\", YAHOO.Fp.KeyAction );\nYUE.addListener( 'srchtxt', \"keydown\", function(e){if(e.keyCode == 38 || e.keyCode == 40 ) YAHOO.Fp.SearchAssist(e);} );\nsetInterval(function(e) {\n  if(YAHOO.Fp._srchOldQ != $('srchtxt').value) {\n    YAHOO.Fp._srchOldQ = $('srchtxt').value ;\n    YAHOO.Fp.SearchAssist(e) ;\n              }\n} , 100) ;\nYUE.addListener( 'srchAssistClose', \"click\", function(e){YUE.stopEvent(e);YAHOO.Fp.fToggleSearchAssist(e);} );\n$('srchtxt').setAttribute(\"autocomplete\", \"off\");\n//--></script>\n<input name=\"search.x\" id=\"search.x\" value=\"1\" type=\"hidden\"><input name=\"fr\" id=\"fr\" value=\"top_ga1_sa\" type=\"hidden\"><input name=\"tid\" id=\"tid\" value=\"top_ga1_sa\" type=\"hidden\"><input name=\"ei\" id=\"ei\" value=\"UTF-8\" type=\"hidden\"><input name=\"aq\" id=\"aq\" value=\"\" type=\"hidden\"><input name=\"oq\" id=\"oq\" value=\"\" type=\"hidden\"><input name=\"afs\" id=\"afs\" value=\"\" type=\"hidden\">\n\n</fieldset>\n</form>\n</div>\n<noscript>\n<div class=\"noscriptAlert\">\n<p class=\"noscriptAlert__text\">JavaScriptが無効になっています。すべての機能を利用するためには、有効に設定してください。<br>詳しくは「<a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA_MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3d3dy55YWhvby1oZWxwLmpwL2FwcC9ub3NjcmlwdA--/RS=^ADAc5z1M6TguhWhf1jYKEN_or57q_I-\">JavaScriptの設定方法</a>」をご覧ください。</p>\n<p class=\"noscriptAlert__closeButtonWrapper\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA_cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3d3dy55YWhvby5jby5qcC8_X209SlNPZmZBbGVydCZfYT1hbGVydENsb3Nl/RS=^ADAY1ebKWWZNm7Dp3mXwkkI4lxfihU-\" class=\"noscriptAlert__closeButton\">閉じる</a></p>\n<img width=1 height=1 alt=\"\" src=\"http://rdsig.yahoo.co.jp/toppage/pc/noscript/RV=1/RU=aHR0cDovL2sueWltZy5qcC9pbWFnZXMvY2xlYXIuZ2lm\" class=\"noscriptAlert__logImage\">\n</div>\n</noscript><div id=\"hdBar\">\n<div id=\"uhd\" class=\"bdB3\">\n<div id=\"uhdsetstart\"></div>\n<script type=\"text/javascript\"><!--\nYAHOO.Fp.hm=document.getElementById('uhdsetstart');\n//--></script>\n<script type=\"text/javascript\"><!--\nYAHOO.Fp.hm.innerHTML = '<a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA2cEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3d3dy55YWhvby5jby5qcC9wcm9tb3Rpb24vc3RhcnRwYWdlLw--/RS=^ADA67w4MrUvf8q12GRtemUnbZsD4yI-\" title=\"ホームページに設定する\"><span>[ホームページ設定]</span>ホームページに設定する</a>';\n//--></script><div id=\"uhdassist\">\n<ul id=\"clr\">\n<li id=\"clr1\"><a class=\"on\" href=\"/;_ylt=A2RA2EuRB9VXsAsA2sEFJf17?_m=ColorPicker&amp;fr=&amp;_a=setColor&amp;color=1&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">ブルー</a></li>\n<li id=\"clr2\"><a href=\"/;_ylt=A2RA2EuRB9VXsAsA28EFJf17?_m=ColorPicker&amp;fr=&amp;_a=setColor&amp;color=2&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">ピンク</a></li>\n<li id=\"clr3\"><a href=\"/;_ylt=A2RA2EuRB9VXsAsA3MEFJf17?_m=ColorPicker&amp;fr=&amp;_a=setColor&amp;color=3&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">オレンジ</a></li>\n<li id=\"clr4\"><a href=\"/;_ylt=A2RA2EuRB9VXsAsA3cEFJf17?_m=ColorPicker&amp;fr=&amp;_a=setColor&amp;color=4&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">グリーン</a></li>\n<li id=\"clr5\"><a href=\"/;_ylt=A2RA2EuRB9VXsAsA3sEFJf17?_m=ColorPicker&amp;fr=&amp;_a=setColor&amp;color=5&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">シルバー</a></li>\n</ul>\n<p class=\"help\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA_sEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlbHAueWFob28uY28uanAv/RS=^ADAf1m1LgztopXPu94nJrL78IbJRmM-\">ヘルプ</a></p>\n</div>\n<div class=\"iemw\"></div>\n</div>\n</div><!-- /#hdBar -->\n<div id=\"PopHead\" class=\"PopHead\">\n<div class=\"PopHead__content\">\n<div class=\"PopHead__imageWrap\">\n<img src=\"http://k.yimg.jp/images/top/sp2/pophead/PopHead-extension.png\" height=\"48\" alt=\"\" class=\"PopHead__image\">\n</div>\n<p class=\"PopHead__text\">ワンクリックで<br>Yahoo! JAPANを開くには</p>\n</div>\n<p class=\"PopHead__linkWrap\">\n<a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA2MEFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2V4dC55YWhvby5jby5qcC9nY3NldHVwLw--/RS=^ADAG3mDU_dXZTiURAUocOWWCnYxptk-\" class=\"PopHead__link\">今すぐ設定する</a>\n</p>\n<p class=\"PopHead__closeWrap\">\n<a href=\"/;_ylt=A2RA2EuRB9VXsAsA18EFJf17?_m=PopHead&amp;_a=setCloseFlag\" id=\"PopHead__close\" class=\"PopHead__close\">閉じる</a>\n</p>\n</div>\n<script type=\"text/javascript\"><!--\n(function(){\n    YUE.on('PopHead__close', 'click', function(e) {\n        YUE.stopEvent(e);\n        YAHOO.util.Connect.asyncRequest('GET', '/;_ylt=A2RA2EuRB9VXsAsA18EFJf17?_m=PopHead&_a=setCloseFlag', {});\n        $('header').removeChild($('PopHead'));\n    });\n})();\n//--></script>\n</div>\n<hr class=\"separate\">\n<div id=\"contents\" class=\"clfix\">\n<div id=\"toptxt\">\n<ul class=\"symbol\">\n<li id=\"toptxt1\" class=\"first\"><a href=\"http://rdsig.yahoo.co.jp/adpromo/ramen2016/toplink/RV=1/RU=aHR0cDovL3JhbWVuLnlhaG9vLmNvLmpwLw--;_ylt=A2RA2EuRB9VXsAsA_8EFJf17\">最強の次世代ラーメン決定、プロが選んだ名店も</a></li>\n \n<li id=\"toptxt2\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAAMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL2V2ZW50L2tlaXJvdS8-/RS=^ADA4wAchP20tcYixYfwUPyaOxnomug-\">専門店や有名店、予算別などで探せる敬老の日ギフト</a></li>\n \n<li id=\"toptxt3\"><a href=\"http://rdsig.yahoo.co.jp/games/casualpr/promo/evt=130144/RV=1/RU=aHR0cDovL3Byb21vLmdhbWVzLnlhaG9vLmNvLmpwL3BsYXkvbmV3Z2FtZS9pbmRleC5odG1s;_ylt=A2RA2EuRB9VXsAsAAcIFJf17\">完全無料ゲームに脳トレ系が続々追加</a></li>\n \n</ul>\n</div>\n<div id=\"rma-pdv\"></div>\n<div id=\"navi\">\n<div id=\"contentbox\" class=\"bx\">\n<!-- NO DATA --><div id=\"yahooservice\" class=\"changepos\">\n<div class=\"hd\">\n<div class=\"cbbtn bdrA4\">\n<a title=\"下へ移動\" class=\"cbimg\" id=\"cbbtntop\" href=\"/?_m=ContentBox&amp;_a=changePosition&amp;fr=&amp;copt1=1&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">下へ移動</a>\n</div>\n<span id=\"cbassistall\" class=\"assist\"><a href=\"http://services.yahoo.co.jp/?mode=pc\">一覧</a></span>\n<h2><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAHMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlcnZpY2VzLnlhaG9vLmNvLmpwLz9tb2RlPXBj/RS=^ADANhQNIgLCNrnyEuufMvpiflxlsak-\">主なサービス</a></h2></div><ul>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsABsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwLz9zY19lPXl0Yw--/RS=^ADAsoNZKUfjw5KZzFAG6U1_4um5B44-\" class=\"cbysC1\">ショッピング</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAB8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2F1Y3Rpb25zLnlhaG9vLmNvLmpwLw--/RS=^ADAf1lWJgj2v7pJ6.F9lQL8XyzW4ww-\" class=\"cbysC2\">ヤフオク!</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsACMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2xvaGFjby5qcC8_Yms9dCZzY19lPWpfYXNfeWFfdGNfbg--/RS=^ADA5V0Sb6l3MZnts6PE0TNkYKhF164-\" class=\"cbysC115\">LOHACO</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsACcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RyYXZlbC55YWhvby5jby5qcC8_c2NfZT15dGM-/RS=^ADAkKe7_V9P_thHZOsMq550HIlsxvw-\" class=\"cbysC5\">旅行、ホテル予約</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsACsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAv/RS=^ADA3k0tCBZe_9Wat8SNO1wBm5AlyHs-\" class=\"cbysC12\">ニュース</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAC8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci8-/RS=^ADA3K.5JfZnrBb0AjM.xBJs7x.4wfI-\" class=\"cbysC13\">天気</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsADMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nwb3J0cy55YWhvby5jby5qcC8-/RS=^ADAcKfVH9hayPqfn0FnRLVJMO2nZkM-\" class=\"cbysC14\">スポーツナビ</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsADcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZpbmFuY2UueWFob28uY28uanAv/RS=^ADAD.FoXcIVYg8Mi2OsvwZhW.eVJPw-\" class=\"cbysC15\">ファイナンス</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsADsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3R2LnlhaG9vLmNvLmpwLw--/RS=^ADAZSjGRb_LdK8eHYdes26zZx_nRis-\" class=\"cbysC25\">テレビ</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAD8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAv/RS=^ADABYsCZrl8z8J07QhH0JsgBml9nBA-\" class=\"cbysC26\">GYAO!</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAEMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2dhbWVzLnlhaG9vLmNvLmpwLw--/RS=^ADApIrwluAWMDVacRwizmXlvAdDI_I-\" class=\"cbysC20\">ゲーム</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAEcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3lhaG9vLW1iZ2EuanAvP19yZWY9YWZmJTNEeXNtMDAx/RS=^ADA3xvvBI2XKb44yeNluRQgYhPF3Hs-\" class=\"cbysC97\">Y!モバゲー</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAEsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL21hcC55YWhvby5jby5qcC8-/RS=^ADA_QInMQC9Qs4f6zKIkHkrGufKygg-\" class=\"cbysC33\">地図</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAE8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RyYW5zaXQueWFob28uY28uanAv/RS=^ADAB0SXuAlsmnv2yzVlG9jrUMVw_Bw-\" class=\"cbysC34\">路線</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAFMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RhYmVsb2cuY29tLw--/RS=^ADAT8RIyq5hZjwu_C6WaoKYZt6V8Wk-\" class=\"cbysC41\">食べログ</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAFcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC8-/RS=^ADAMra746g_DgeiyENtNEek39AWUco-\" class=\"cbysC73\">求人、アルバイト</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAFsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWxlc3RhdGUueWFob28uY28uanAv/RS=^ADAV1NV59PdKt4OPyQTTJHgUY9GTjE-\" class=\"cbysC48\">不動産</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAF8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2NhcnZpZXcueWFob28uY28uanAv/RS=^ADA7g8PISD9F6h5hJQt6x3DQ.L_EWY-\" class=\"cbysC37\">自動車</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAGMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RleHRyZWFtLnlhaG9vLmNvLmpwLw--/RS=^ADA04mxrj6GE5O5D9RtHUxtzsF3t2I-\" class=\"cbysC53\">掲示板</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAGcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jsb2dzLnlhaG9vLmNvLmpwLw--/RS=^ADAgHE7KQAJjeeYuHCNweqiaSeyAJY-\" class=\"cbysC57\">ブログ</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAGsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2JlYXV0eS55YWhvby5jby5qcC8-/RS=^ADAVKemIRrn0QY.gWzRHNA3B.CZeA0-\" class=\"cbysC46\">美容、ダイエット</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAG8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly9wYXJ0bmVyLnlhaG9vLmNvLmpwLw--/RS=^ADAHbbqWlbEB.JvNuBsyCOSt9jmw.Y-\" class=\"cbysC44\">出会い、お見合い</a></li>\n</ul></div>\n<div id=\"favoriteservice\" class=\"changepos\">\n<div class=\"hd\">\n<div class=\"cbbtn\">\n<a title=\"上へ移動\" class=\"cbimg\" id=\"cbbtnbtm\" href=\"/?_m=ContentBox&amp;_a=changePosition&amp;fr=&amp;copt1=1&amp;nc=dD1SZVExWEImc2s9eUsyNnlrcXMuRnJCeUJGclFHQnNrOUViSTA4LQ==\">上へ移動</a>\n</div>\n<span id=\"cbassistedit\" class=\"assist\"><a href=\"http://services.yahoo.co.jp/?mode=pc\">変更</a></span>\n<h2>お気に入り</h2></div>\n<ul>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAAsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC8-/RS=^ADA7MjqS1jGnl2rj2BbAT2fClxhl6o-\" style=\"background-image:url(http://k.yimg.jp/c/icon/s/bsc/2.0/bookstore20.gif);\">電子書籍</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAA8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL21vdmllcy55YWhvby5jby5qcC8-/RS=^ADAJfUBogD2qVzS8_Mjm.srh7T3Fw0-\" style=\"background-image:url(http://k.yimg.jp/c/icon/s/bsc/2.0/movies20.gif);\">映画</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsABMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAv/RS=^ADAxJqzTqDCUGaW1iakqh4MiqYlCVA-\" style=\"background-image:url(http://k.yimg.jp/c/icon/s/bsc/2.0/fortune20.gif);\">占い</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsABcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2xvY28ueWFob28uY28uanAv/RS=^ADAVGtUxSOS6TqNLlDeGGvaxuhdWXU-\" style=\"background-image:url(http://k.yimg.jp/c/icon/s/bsc/2.0/loco20.gif);\">地域</a></li>\n</ul></div>\n</div>\n\n<div id=\"companybox\" class=\"bx\">\n<div id=\"cmprikunabi\" class=\"first bdA4\">\n<h2><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAHcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC8-/RS=^ADAMra746g_DgeiyENtNEek39AWUco-\">求人</a></h2>\n<ul>\n<li class=\"first\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAHsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC9jYXJlZXIv/RS=^ADAu.sIaRT9aWD_bNtRCYkgDPu12ZQ-\">転職</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAH8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC9hcmJlaXQv/RS=^ADAsBu9TWXhxj6EUs_Kd.rHjzvJQS4-\">バイト</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAIMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC90ZW1wLw--/RS=^ADAwJx4aC9T.NJrpaChUE91wteElxs-\">派遣</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAIcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC9tZWRpY2FsLw--/RS=^ADAmKf_bL2Et8QqgW5iOTh9JwEBj6I-\">医療</a></li>\n</ul>\n<p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAIsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC9jb250ZW50cy9taWRkbGUv/RS=^ADAPTllSCgCF7EYG2fvUyZY501sYP4-\">中高年積極採用アルバイト</a></p>\n<p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAI8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC9jb250ZW50cy9zcC9sb3dyaXNraW5kZXBlbmRlbnQv/RS=^ADAqUsWjVynNFSw6L_gnLHF9J694Jk-\">毎月の収入は副業で増やす</a></p>\n<p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAJMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2pvYi55YWhvby5jby5qcC9jb250ZW50cy9zcC9sZXNzb24v/RS=^ADAmHltEuJXf7K2anH_ZVPrsqcbXCA-\">資格ランキングトップ10</a></p></div>\n<div id=\"cmpbb\" class=\"bdA4\">\n<h2><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAJcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2JiLnlhaG9vLmNvLmpwLw--/RS=^ADAwgaSWz19dNTg2vWpYYqm3OJAiKM-\">Yahoo! BB</a></h2>\n<ul><li><a href=\"http://rdsig.yahoo.co.jp/toppage/ybb_g/160911/a/1/evt=71611/RV=1/RU=aHR0cDovL2JicHJvbW8ueWFob28uY28uanAvY2FtcGFpZ24vdGhhbmtzMjAxNi8_dWlfbWVkaXVtPXlqdG9wJnVpX3NvdXJjZT1sZWZ0Ym94;_ylt=A2RA2EuRB9VXsAsAJsIFJf17\">最大2万ポイントもらえる</a></li><li><a href=\"http://rdsig.yahoo.co.jp/toppage/ybb_g/160911/b/1/evt=71621/RV=1/RU=aHR0cDovL2JicHJvbW8ueWFob28uY28uanAvY2FtcGFpZ24vdGhhbmtzMjAxNi8_dWlfbWVkaXVtPXlqdG9wJnVpX3NvdXJjZT1sZWZ0Ym94;_ylt=A2RA2EuRB9VXsAsAJ8IFJf17\">簡単設置 工事不要WiFi</a></li></ul></div>\n<div id=\"cmpbiz\" class=\"bdA4\">\n<h2><a href=\"http://rdsig.yahoo.co.jp/bzc/evt=116042/1/RV=1/RU=aHR0cDovL2J1c2luZXNzLnlhaG9vLmNvLmpwLw--;_ylt=A2RA2EuRB9VXsAsAKMIFJf17\">ビジネスで活用するなら</a></h2>\n<ul><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAKcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RvcGljcy5tYXJrZXRpbmcueWFob28uY28uanAvc3MvY3AwMi1hcHAvP289SlAyMTMy/RS=^ADAtPCyenjinb65YWnp7vvoiVeYsdA-\">3,000円から広告掲載</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAKsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2J1c2luZXNzLmVjLnlhaG9vLmNvLmpwLw--/RS=^ADA4YrlhYHRp.0w_wvMDuO.JQxh5FE-\">無料でネットショップ開業</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAK8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jpei5wb2ludHMueWFob28uY28uanAvcHJvbW8va2FtZWl0ZW4vaW5kZXguaHRtbD9mcj13d3c-/RS=^ADATj0aiEDLG.y79dtJnHPTkv2UN8w-\">Ｔポイント新規提携店募集</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsALMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3IuYml6cmVzZXJ2ZS55YWhvby5jby5qcC8_ZG1haT1hNTUzMGMzYTk3ZWFkZQ--/RS=^ADAwboq5yQLQNgJgSH8r89YDQAsx8s-\">飲食店必見のネット集客法</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsALcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly93d3cuaWRjZi5qcC9jbG91ZC8_Y2lkPXlqX3QwMQ--/RS=^ADANQ0RvcIaOT5uPsmhTjZc9_7Gp6I-\">爆速クラウド500円から</a></li></ul></div>\n</div>\n<div id=\"disasterbox\" class=\"bx\">\n  <div id=\"disasupport\" class=\"first bdA4\">\n      <h2><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAZ8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NoaW5zYWkueWFob28uY28uanAv/RS=^ADAJGpfTsg_FV7Pg5TBY9dRX58figI-\">復興支援</a></h2>\n      <ul>\n          <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAaMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RvaG9rdS55YWhvby5jby5qcC95ZWxsbWFya2V0Lw--/RS=^ADAIMNl_P3aQv0ZducO2GAMN_1C.MY-\">東北エールマーケット</a></li>\n          <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAacIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RvdXJkZXRvaG9rdS55YWhvby5jby5qcC8yMDE2Lw--/RS=^ADA1c5uo65xSutrrLUOcojaddPtFzI-\">ツール・ド・東北 2016</a></li>\n      </ul>\n  </div>\n  <div id=\"disasosiety\" class=\"bdA4\">\n      <h2><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAasIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Nzci55YWhvby5jby5qcC9zdGFrZWhvbGRlci9pbmRleC5odG1s/RS=^ADAYJTXspwVOGs3Zjgp.VUyYYSgqlE-\">社会的な取り組み</a></h2>\n      <ul>\n          <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAa8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2xpbmtzZm9yZ29vZC55YWhvby5jby5qcC8-/RS=^ADA7Nq9N2zLBZJS.ett9PNq1g.sND4-\">Links for Good</a></li>\n          <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAbMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RvbmF0aW9uLnlhaG9vLmNvLmpw/RS=^ADAyY8QcYC92Cv8LDZ.qprClvrrBfE-\">ネット募金</a></li>\n      </ul>\n  </div>\n  <!--#disapromo2 --><div id=\"disapromo\" class=\"bdA4 clfix\">\n      <p id=\"disaimg\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAbcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RvaG9rdS55YWhvby5jby5qcC95ZWxsbWFya2V0L3NwZWNpYWxsaXN0L3NlYXNvbi9zYW5tYS8-/RS=^ADAOmc.7O6GOilBrIOIJbQJxM9UiTo-\"><img src=\"http://k.yimg.jp/images/evt/fukkodp/top/2015/sanma.jpg\" alt=\"東北からサンマをお届けします\" width=\"40\" height=\"40\"></a></p>\n      <p id=\"disadtl\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAbsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RvaG9rdS55YWhvby5jby5qcC95ZWxsbWFya2V0L3NwZWNpYWxsaXN0L3NlYXNvbi9zYW5tYS8-/RS=^ADAOmc.7O6GOilBrIOIJbQJxM9UiTo-\">東北からサンマをお届けします</a></p>\n  </div><!-- /#disapromo2 -->\n</div><!-- /#disasterbox --><div id=\"announce\" class=\"bx\">                                                                    \n<div class=\"hd\">\n<h2>ヤフーからのお知らせ</h2>\n</div>\n<ul class=\"item\">\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAZsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hyLnlhaG9vLmNvLmpwL2pvYi1pbmZvL2NhcmVlci8-/RS=^ADAphUq8jnnB0KAD05Hagwc5XryR0g-\">【中途採用】エンジニア、デザイナーなどを募集中</a></li>\n</ul>\n</div></div>\n<hr class=\"separate\">\n<div id=\"division\">\n<div id=\"main\">\n \n<div id=\"topicsbox\" class=\"bx Topics\">\n<div class=\"hd\">\n<ul class=\"tab bgA5 bdA2 on0\" style=\"left: 0%\" id=\"topicstab\">\n<li class=\"tab0 bdA2 bgA5 on\"><span class=\"bdrA4\"><a id=\"topics\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAOsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAv/RS=^ADA3k0tCBZe_9Wat8SNO1wBm5AlyHs-\" class=\"bdA5\" hidefocus=\"true\">ニュース</a></span></li>\n<li class=\"tab1 bdA2 bgA5 \"><span class=\"bdrA4\"><a id=\"economy\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAO8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9jPWJ1cw--/RS=^ADAmC38gryIwyAkYcGeFCAyozgE_xw-\" class=\"bdA5\" hidefocus=\"true\">経済</a></span></li>\n<li class=\"tab2 bdA2 bgA5 \"><span class=\"bdrA4\"><a id=\"entertainment\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAPMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9jPWNfZW50/RS=^ADAd4ufhY4L.3WZpMikk3PQTnwpKYA-\" class=\"bdA5\" hidefocus=\"true\">エンタメ</a></span></li>\n<li class=\"tab3 bdA2 bgA5  \"><span class=\"bdrA2\"><a id=\"sports\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAPcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9jPWNfc3Bv/RS=^ADAIT_Nnp2I.Tc0P2Re111HPlpu2Gk-\" class=\"bdA5\" hidefocus=\"true\">スポーツ</a></span></li>\n<li class=\"tab4 bdA2 bgA5  next\"><span class=\"bdrA4\"><a id=\"domestic\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAPsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9jPWRvbQ--/RS=^ADAOfytllXOR6QsYJMXW3uDCr9z3kc-\" class=\"bdA5\" hidefocus=\"true\" style=\"display: block;\">国内</a></span></li>\n<li class=\"tab5 bdA2 bgA5 \"><span class=\"bdrA4\"><a id=\"world\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAP8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9jPWNfaW50/RS=^ADAAYlSNGUW0qCCI5gPa.8DzcSti.g-\" class=\"bdA5\" hidefocus=\"true\">国際</a></span></li>\n<li class=\"tab6 bdA2 bgA5 \"><span class=\"bdrA4\"><a id=\"scientific\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAQMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9jPWNfc2Np/RS=^ADAlGpUuj0y7goE13Acpni68OZVNes-\" class=\"bdA5\" hidefocus=\"true\">IT・科学</a></span></li>\n<li class=\"tab7 bdA2 bgA5  last \"><span class=\"bdrA2\"><a id=\"local\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAQcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9jPWxvYw--/RS=^ADAw_E_O4l_HG3Z19o8ZuDqXAJG.wU-\" class=\"bdA5\" hidefocus=\"true\">地域</a></span></li>\n</ul>\n</div>\n<div id=\"topicsboxbd\" class=\"bdA2 \">\n<div id=\"topicsfb\" class=\"current\"><div class=\"topicsindex\"><em>16時21分更新</em><ul class=\"emphasis\"><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsALsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwODc-/RS=^ADAsO9sfQ36NMnMnifrwwFlExCvrC0-\">大雨混乱 町長に情報伝わらず<span class=\"iconPhoto\" title=\"写真\">写真</span></a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAL8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwNzk-/RS=^ADAyVFBDp0KshZJKhyHtI3cipdAhb4-\">9.11の痛み抱え15年 NYは今<span class=\"iconPhoto\" title=\"写真\">写真</span></a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAMMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwOTY-/RS=^ADA05cwifLGnb64zU7O7TRgcJ.Eqvk-\">中間所得層貧しく 先進国の今<span class=\"iconPhoto\" title=\"写真\">写真</span><span class=\"iconNew\" title=\"NEW\">NEW</span></a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAMcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwOTI-/RS=^ADAgA.ZkcZDnJ9frEGDGw9beWEnBQ8-\">韓国海運破綻 荷が世界で漂流<span class=\"iconPhoto\" title=\"写真\">写真</span><span class=\"iconNew\" title=\"NEW\">NEW</span></a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAMsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwOTE-/RS=^ADAPPKFi18xIbovg5z1MCPFrlKXZ94-\">終戦祝うキス写真の女性死去<span class=\"iconPhoto\" title=\"写真\">写真</span><span class=\"iconNew\" title=\"NEW\">NEW</span></a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAM8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwOTM-/RS=^ADAQMmWE3Kg4MQ4TFOEL3TO0ZdHLTo-\">広島Vセール 1万円の靴700円<span class=\"iconVideo\" title=\"動画\">動画</span><span class=\"iconNew\" title=\"NEW\">NEW</span></a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsANMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwODk-/RS=^ADAGrL9GWaRWryYGaO8IZcQ0DZoQ_I-\">田中 メジャートップの貢献度<span class=\"iconPhoto\" title=\"写真\">写真</span></a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsANcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvcGlja3VwLzYyMTQwODg-/RS=^ADAxGuIjpyLnxrgAlaE.sJ3TetPHeY-\">徳井 金持ち球団に勝ち痛快<span class=\"iconPhoto\" title=\"写真\">写真</span></a></li></ul><ul class=\"more\"><li class=\"first\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsANsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvbGlzdC8_ZD0yMDE2MDkxMSZtYz1mJm1wPWY-/RS=^ADAqt92wB_VftPiHjUw_lyWPLSZILQ-\">もっと見る</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAN8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL25ld3MueWFob28uY28uanAvZmM-/RS=^ADArqNqaRWHbm_PL6ywfq2J31xa2i0-\">記事一覧</a></li></ul></div><div class=\"topicscatch\"><div class=\"topicsdetail bdB4 bgB5\"><div class=\"topicsimg\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAOMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMTI0LXNwbmFubmV4LWZpZ2h0LnZpZXctMDAw/RS=^ADAjKh0DIEzwKLSOTI8DT5eRRX1fkc-\" id=\"tpcsimgfilter\" class=\"imgfilter\" style=\"background-image:url(http://lpt.c.yimg.jp/im_siggN5zH5aS5CAq8DOovQJ3ccQ---x120-y120/amd/20160911-00000124-spnannex-000-thumb.jpg);width:120px;height:75px;\" title=\"ロマゴン4階級制覇\">ロマゴン4階級制覇</a></div><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAOcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMTI0LXNwbmFubmV4LWZpZ2h0LnZpZXctMDAw/RS=^ADAjKh0DIEzwKLSOTI8DT5eRRX1fkc-\">ロマゴン4階級制覇</a></p><em>9月11日14時22分配信</em><cite>スポニチアネックス</cite></div></div></div>\n<div id=\"economyfb\" class=\"\"></div>\n<div id=\"entertainmentfb\" class=\"\"></div>\n<div id=\"sportsfb\" class=\"\"></div>\n<div id=\"domesticfb\" class=\"\"></div>\n<div id=\"worldfb\" class=\"\"></div>\n<div id=\"scientificfb\" class=\"\"></div>\n<div id=\"localfb\" class=\"\"></div>\n</div>\n</div>\n<script type=\"text/javascript\"><!--\nvar topicsTabs=new YAHOO.Fp.tabs(\"topicsbox\");topicsTabs.changeAction(YAHOO.Fp.loadPanel,{type:\"tabs\",module:\"Topics\",action:\"getTopics\",load:\"story\"});topicsTabs.setupTabs();YAHOO.Fp.selectTab=function(b,a){b=b.rot13();b=YAHOO.cookie.getsub(cookie_tab,b);if(b!=\"\"){setTimeout(function(){a.tabAction(0,a,d.getElementById(b.rot13()))},10)}};\n--></script>\n \n<!-- SpaceID=2080187653 loc=TST noad-spid -->\n<script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['q6w1A2RAyFQ-']='&U=12746iqgf%2fN%3dq6w1A2RAyFQ-%2fC%3d-2%2fD%3dTST%2fB%3d-2';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14l82dfcm%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d4244885189%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=12746iqgf%2fN%3dq6w1A2RAyFQ-%2fC%3d-2%2fD%3dTST%2fB%3d-2\"></div></noscript><!-- SpaceID=2080187653 loc=TCBX noad -->\n<script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['o6w1A2RAyFQ-']='&U=128fp8fgi%2fN%3do6w1A2RAyFQ-%2fC%3d-1%2fD%3dTCBX%2fB%3d-1';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14ldceehd%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d3200418323%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=128fp8fgi%2fN%3do6w1A2RAyFQ-%2fC%3d-1%2fD%3dTCBX%2fB%3d-1\"></div></noscript><!-- SpaceID=2080187653 loc=TCBX2 noad-spid -->\n<script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['paw1A2RAyFQ-']='&U=129b9si8c%2fN%3dpaw1A2RAyFQ-%2fC%3d-2%2fD%3dTCBX2%2fB%3d-2';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14lkd51j6%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d3578855559%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=129b9si8c%2fN%3dpaw1A2RAyFQ-%2fC%3d-2%2fD%3dTCBX2%2fB%3d-2\"></div></noscript><div id=\"cb\" class=\"bxNa\">\n<a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAQsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RvaG9rdS55YWhvby5jby5qcC95ZWxsbWFya2V0L3NwZWNpYWxsaXN0L3NlYXNvbi9zYW5tYS9pbmRleC5odG1s/RS=^ADAqGgI9_StYOpz_xcE8DPAT2x1.us-\"><img src=\"http://k.yimg.jp/images/top/sp2/cb/2016/0911_tohoku.png\" alt=\"今が旬　東北のサンマ　東北エールマーケット\" width=\"410\" height=\"50\"></a>\n</div><div id=\"commercebox\" class=\"commerce commerceMain--default bx\">\n    <div class=\"hd\">\n    <h2 class=\"commerceTitle\">今“コレ”が欲しい</h2>\n    <p class=\"commerceSubTitle\">みんなが気になるランキングは</p>\n  </div><!-- /.hd -->\n  <div class=\"commerceMain commerceMain--default bdbA4\">\n    <ul class=\"commerceMainList\">\n      <li class=\"commerceMainFirstItem\">\n        <p class=\"commerceMainImgWrap\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAQ8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL3Jhbmtpbmcva2V5d29yZC8_cD0lRTMlODIlQjklRTMlODMlOUUlRTMlODMlOUIlRTMlODIlQjElRTMlODMlQkMlRTMlODIlQjkmc2NfZT15dGVjX2NvbW1fc2hwX21fYSNsaXN0/RS=^ADA7eHgApVtORxSSGj8TLH_J9vkzlQ-\" class=\"commerceMainLink\"><img src=\"http://k.yimg.jp/images/shp_edit/promotion/scl/top/ec/09/20160910_r_2a.jpg\" alt=\"スマホケース、第1位は？\" class=\"commerceMainImg\" height=\"60\" width=\"80\"></a>\n        </p>\n        <p class=\"commerceMainLinktext\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsARMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL3Jhbmtpbmcva2V5d29yZC8_cD0lRTMlODIlQjklRTMlODMlOUUlRTMlODMlOUIlRTMlODIlQjElRTMlODMlQkMlRTMlODIlQjkmc2NfZT15dGVjX2NvbW1fc2hwX21fYSNsaXN0/RS=^ADA7eHgApVtORxSSGj8TLH_J9vkzlQ-\" class=\"commerceMainLink\">スマホケース、第1位は？</a>\n        </p>\n      </li>\n      <li class=\"commerceMainItem\">\n        <p class=\"commerceMainImgWrap\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsARcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL2NhdGVnb3J5LzEzNDU3LzI0OTQvMTY2Ny8yNDEyNy9yYW5raW5nL3BlcmlvZF93ZWVrbHkvZ2VuZGVyX2ZlbWFsZS8_c2NfZT15dGVjX2NvbW1fc2hwX21fYiNsaXN0/RS=^ADAqmYk5rwdGjiGSCPfthrENLhNvYg-\" class=\"commerceMainLink\"><img src=\"http://k.yimg.jp/images/shp_edit/promotion/scl/top/ec/09/20160910_r_2b.jpg\" alt=\"人気のカード、名刺入れ\" class=\"commerceMainImg\" height=\"60\" width=\"80\"></a>\n        </p>\n        <p class=\"commerceMainLinktext\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsARsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL2NhdGVnb3J5LzEzNDU3LzI0OTQvMTY2Ny8yNDEyNy9yYW5raW5nL3BlcmlvZF93ZWVrbHkvZ2VuZGVyX2ZlbWFsZS8_c2NfZT15dGVjX2NvbW1fc2hwX21fYiNsaXN0/RS=^ADAqmYk5rwdGjiGSCPfthrENLhNvYg-\" class=\"commerceMainLink\">人気のカード、名刺入れ</a>\n        </p>\n      </li>\n      <li class=\"commerceMainItem\">\n        <p class=\"commerceMainImgWrap\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAR8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL2NhdGVnb3J5LzEzNDU3LzI0OTYvNTE5Mi8xNjQ3L3JhbmtpbmcvcGVyaW9kX3dlZWtseS9nZW5kZXJfbWFsZS9nZW5lcmF0aW9uXzQwLz9zY19lPXl0ZWNfY29tbV9zaHBfbV9jI2xpc3Q-/RS=^ADAZG2pTmk2YMBfVJBYt4.cwJImM.4-\" class=\"commerceMainLink\"><img src=\"http://k.yimg.jp/images/shp_edit/promotion/scl/top/ec/09/20160910_r_2c.jpg\" alt=\"男40代が支持する腕時計\" class=\"commerceMainImg\" height=\"60\" width=\"80\"></a>\n        </p>\n        <p class=\"commerceMainLinktext\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsASMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL2NhdGVnb3J5LzEzNDU3LzI0OTYvNTE5Mi8xNjQ3L3JhbmtpbmcvcGVyaW9kX3dlZWtseS9nZW5kZXJfbWFsZS9nZW5lcmF0aW9uXzQwLz9zY19lPXl0ZWNfY29tbV9zaHBfbV9jI2xpc3Q-/RS=^ADAZG2pTmk2YMBfVJBYt4.cwJImM.4-\" class=\"commerceMainLink\">男40代が支持する腕時計</a>\n        </p>\n      </li>\n      <li class=\"commerceMainLastItem\">\n        <p class=\"commerceMainImgWrap\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAScIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL2NhdGVnb3J5LzI0OTgvMTA3MS80MTA2Ny9yYW5raW5nL3BlcmlvZF93ZWVrbHkvP3NjX2U9eXRlY19jb21tX3NocF9tX2QjbGlzdA--/RS=^ADA1jn2PVy6C3yMRxQOnX_1Pt5VLSI-\" class=\"commerceMainLink\"><img src=\"http://k.yimg.jp/images/shp_edit/promotion/scl/top/ec/09/20160910_r_2d.jpg\" alt=\"常備したい缶詰、売れ筋は\" class=\"commerceMainImg\" height=\"60\" width=\"80\"></a>\n        </p>\n        <p class=\"commerceMainLinktext\">\n          <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsASsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nob3BwaW5nLnlhaG9vLmNvLmpwL2NhdGVnb3J5LzI0OTgvMTA3MS80MTA2Ny9yYW5raW5nL3BlcmlvZF93ZWVrbHkvP3NjX2U9eXRlY19jb21tX3NocF9tX2QjbGlzdA--/RS=^ADA1jn2PVy6C3yMRxQOnX_1Pt5VLSI-\" class=\"commerceMainLink\">常備したい缶詰、売れ筋は</a>\n        </p>\n      </li>\n    </ul>\n  </div>        <div class=\"commerceSelection bdbA4\">\n<div class=\"commerceSelectionTitleWrap\">\n<h2 class=\"commerceSelectionTitle\">あなたにおすすめ</h2>\n<p class=\"commerceSelectionServiceWrap\"><a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=157mcim7k/A=302138988/R=0/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/00/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3Jlc3RhdXJhbnQvP3NjX2U9eXRlY19uY29t\" class=\"commerceSelectionService\">Yahoo!予約 飲食店</a></p>\n</div>\n<ul class=\"commerceSelectionList\">\n<li class=\"commerceSelectionLeftItem\">\n<p class=\"commerceSelectionImgWrap\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=15rbjboks/A=302138988/R=1/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/25/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3NwZWNpYWwvb255YXNhaS9pbmRleC5odG1sP3NjX2U9eXRlY19uY29t\" class=\"commerceSelectionLink\">\n<img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26488/20160906/0907_25.jpg\" alt=\"しゃぶしゃぶの写真\" width=\"80\" height=\"60\" class=\"commerceSelectionImg\">\n</a>\n</p>\n<p class=\"commerceSelectionLinktext\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=15rclnui8/A=302138988/R=2/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/25/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3NwZWNpYWwvb255YXNhaS9pbmRleC5odG1sP3NjX2U9eXRlY19uY29t\" class=\"commerceSelectionLink\">しゃぶしゃぶ温野菜 食べ放題「1,000円引き」</a>\n</p>\n</li>\n<li class=\"commerceSelectionRightItem\">\n<p class=\"commerceSelectionImgWrap\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=16vtifnp3/A=302138988/R=3/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/26/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3Jlc3RhdXJhbnQvc3BlY2lhbC9vdG9rdS9iYWlyYW4_c29ydD1yc3YmYXJlYT1vc2FrYT9zY19lPXl0ZWNfbmNvbQ--\" class=\"commerceSelectionLink\">\n<img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26488/20160906/0907_26.jpg\" alt=\"焼きそばの写真\" width=\"80\" height=\"60\" class=\"commerceSelectionImg\">\n</a>\n</p>\n<p class=\"commerceSelectionLinktext\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=16v3rf23f/A=302138988/R=4/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/26/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3Jlc3RhdXJhbnQvc3BlY2lhbC9vdG9rdS9iYWlyYW4_c29ydD1yc3YmYXJlYT1vc2FrYT9zY19lPXl0ZWNfbmNvbQ--\" class=\"commerceSelectionLink\">梅蘭やきそば付きコースが最大半額</a>\n</p>\n</li>\n<li class=\"commerceSelectionLeftItem\">\n<p class=\"commerceSelectionImgWrap\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=163c8m139/A=302138988/R=5/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/27/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3Jlc3RhdXJhbnQvc3BlY2lhbC9vdG9rdS93YXRhbWk_c2NfZT15anNrX3lzcA--\" class=\"commerceSelectionLink\">\n<img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26488/20160906/0907_27.jpg\" alt=\"ビールの写真\" width=\"80\" height=\"60\" class=\"commerceSelectionImg\">\n</a>\n</p>\n<p class=\"commerceSelectionLinktext\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=163t93em6/A=302138988/R=6/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/27/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3Jlc3RhdXJhbnQvc3BlY2lhbC9vdG9rdS93YXRhbWk_c2NfZT15anNrX3lzcA--\" class=\"commerceSelectionLink\">飲み放題「無料」和民の昼宴会がお得</a>\n</p>\n</li>\n<li class=\"commerceSelectionRightItem\">\n<p class=\"commerceSelectionImgWrap\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=15rqv87lu/A=302138988/R=7/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/28/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3Jlc3RhdXJhbnQvc3BlY2lhbC9vcmVubz9zY19lPXl0ZWNfbmNvbQ--\" class=\"commerceSelectionLink\">\n<img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26488/20160906/0907_28.jpg\" alt=\"肉料理の写真\" width=\"80\" height=\"60\" class=\"commerceSelectionImg\">\n</a>\n</p>\n<p class=\"commerceSelectionLinktext\">\n<a href=\"http://ard.yahoo.co.jp/SIG=157dvr8gi/M=300950129.301817644.303440635.314558385/D=jp_tlivez/S=2080187653:TH/_ylt=A2RA2EuRB9VXsAsA1cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qaw1A2RAyFQ-/J=1473578897379031/SIG=15r47jlrh/A=302138988/R=8/*http://rdsig.yahoo.co.jp/reservation/commerce/0907/28/evt=128751/RV=1/RU=aHR0cDovL3Jlc2VydmF0aW9uLnlhaG9vLmNvLmpwL3Jlc3RhdXJhbnQvc3BlY2lhbC9vcmVubz9zY19lPXl0ZWNfbmNvbQ--\" class=\"commerceSelectionLink\">俺のフレンチ・イタリアン 全店予約可能</a>\n</p>\n</li>\n</ul>\n</div><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['qaw1A2RAyFQ-']='&U=13ira6re5%2fN%3dqaw1A2RAyFQ-%2fC%3d300950129.301817644.303440635.314558385%2fD%3dTH%2fB%3d302138988';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14j5hfc73%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d28852031%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13ira6re5%2fN%3dqaw1A2RAyFQ-%2fC%3d300950129.301817644.303440635.314558385%2fD%3dTH%2fB%3d302138988\"></div></noscript>    <div class=\"commerceSelling\"><h2 class=\"commerceSellingTitle\">話題の“コレ”買った？</h2><p class=\"commerceSellingFirstText\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAS8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlYXJjaC5zaG9wcGluZy55YWhvby5jby5qcC9zZWFyY2g_ZWk9VVRGLTgmZWxjPTEmcD0lRTMlODIlQUYlRTMlODMlQUQlRTMlODMlQTAlRTMlODMlOEYlRTMlODMlQkMlRTMlODMlODQrJUUzJTgzJUExJUUzJTgyJUFDJUUzJTgzJThEJm49NTAmdGFiX2V4PWNvbW1lcmNlJm9xPSZ1SXY9b24mcGY9JnB0PSZkaT0mdmlldz1ncmlkJnNzX2ZpcnN0PTEmdXNlZD0wJnNlbGxlcj0wJmNpZD0xMzQ1NyZzY19lPXl0ZWNfd29yZA--/RS=^ADAE_cpvMTqAnS7eeR1OeMSUZNvZp8-\" class=\"commerceSellingLink\">クロムハーツ　メガネ</a></p><p class=\"commerceSellingText\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsATMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlYXJjaC5zaG9wcGluZy55YWhvby5jby5qcC9zZWFyY2g_ZWk9VVRGLTgmZWxjPTEmcD0lRTMlODMlODElRTMlODIlQTclRTMlODMlODMlRTMlODIlQUQlRTMlODMlQkMmbj01MCZ0YWJfZXg9Y29tbWVyY2Umb3E9JnVJdj1vbiZwZj0mcHQ9JmRpPSZ2aWV3PWdyaWQmc3NfZmlyc3Q9MSZ1c2VkPTAmc2VsbGVyPTAmY2lkPTQyMjImc2NfZT15dGVjX3dvcmQ-/RS=^ADAV00zWEH03B533SoMOS3mt2aOMrM-\" class=\"commerceSellingLink\">チェッキー</a></p></div>    </div>\n\n<script type=\"text/javascript\">\nyads_ad_ds = '25597_3463';\nyads_ad_space = '2080187653'\n</script>\n<script type=\"text/javascript\" src=\"//yads.c.yimg.jp/js/yads.js\"></script>\n<!-- http://ard.yahoo.co.jp/SIG=158vihsjq/M=300872718.301727830.303431574.312177432/D=jp_tlivez/S=2080187653:TCT/_ylt=A2RA2EuRB9VXsAsAz8EFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=n6w1A2RAyFQ-/J=1473578897379031/SIG=119j2bnbf/A=302127520/R=0/?http://www.yahoo.co.jp/ --><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['n6w1A2RAyFQ-']='&U=13jsear2k%2fN%3dn6w1A2RAyFQ-%2fC%3d300872718.301727830.303431574.312177432%2fD%3dTCT%2fB%3d302127520';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14log4mio%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d2145862277%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13jsear2k%2fN%3dn6w1A2RAyFQ-%2fC%3d300872718.301727830.303431574.312177432%2fD%3dTCT%2fB%3d302127520\"></div></noscript><div id=\"video\" class=\"bx\">\n  <div class=\"hd\">\n    <h2>ネットで話題の無料動画</h2>\n  </div>\n<div id=\"vdoTopics\" class=\"vdotmp1b bdbA4\">\n<div class=\"img\"><a style=\"background-image: url(http://k.yimg.jp/images/video-topics/rec/1609/02_04.jpg);\" class=\"imgfilter\" id=\"vdoimgfilter\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsATcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3ZpZGVvdG9waWNzLnlhaG9vLmNvLmpwL3ZpZGVvbGlzdC9vZmZpY2lhbC9uZXdzX2J1c2luZXNzL3BkZGY3ZTFmYWQyOGE5MmY2MDRjNThlZGVjNjhmYzM2Ng--/RS=^ADAr48Vkh8JSfiubVKAOLC6DFHJlLI-\">\nNHK人気白髪アナウンサー「麿」の今</a></div>\n\n<ul class=\"symbol\">\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsATsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3ZpZGVvdG9waWNzLnlhaG9vLmNvLmpwL3ZpZGVvbGlzdC9vZmZpY2lhbC9uZXdzX2J1c2luZXNzL3BkZGY3ZTFmYWQyOGE5MmY2MDRjNThlZGVjNjhmYzM2Ng--/RS=^ADAr48Vkh8JSfiubVKAOLC6DFHJlLI-\">NHK人気白髪アナウンサー「麿」の今</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAT8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3ZpZGVvdG9waWNzLnlhaG9vLmNvLmpwL3ZpZGVvbGlzdC9vZmZpY2lhbC9vdGhlcnMvcGI5MzMzYWI0NWQ4NzY4YmNiMTQ4OWViMTkyZmQ5NTJk/RS=^ADAw780KsOTx8x_I9a.H8uhIl76xQw-\">35歳美女が挑戦した怖すぎる「偉業」</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAUMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3ZpZGVvdG9waWNzLnlhaG9vLmNvLmpwL3ZpZGVvbGlzdC9vZmZpY2lhbC9tb3ZpZS9wMWUzNWIwMTc4MmE0ZGNjYzM4ZmMxOGJkMDhlNDFkYTk-/RS=^ADAl1R7MBU4qGUI7cbat_NoEGXeokQ-\">デスノート新予告のセリフにネット騒然</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAUcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3ZpZGVvdG9waWNzLnlhaG9vLmNvLmpwL3ZpZGVvbGlzdC9vZmZpY2lhbC9vdGhlcnMvcDM0MzgwZGNmZWEyYzdhOWZjYmU1YmYzYjc1ZjQ3OWJl/RS=^ADAUJZv0AUJiU2GxCPSzjfXFvuDTdY-\">53歳片桐はいりが子どもを敵視する訳</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAUsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3ZpZGVvdG9waWNzLnlhaG9vLmNvLmpwL3ZpZGVvbGlzdC9vZmZpY2lhbC9hbmltZS9wZjdlYjA1MWFkNWVmYWExOTlkYjlkMTEyZmQ5OTVmOTM-/RS=^ADA0UyXGb65525pNGW7aNpZ0h20w74-\">君の名は。監督、前作の映像美もスゴイ</a></li>\n</ul>\n</div><!-- /#videoTopics -->  <div id=\"videoFesBox\" class=\"videoFesBox\">\n    <div class=\"tabWrap bdtA4\" id=\"videoFesBoxTab\">\n      <ul class=\"tab bdbA4 bgA6\" id=\"videoFesBoxTabUnit\">\n        <li class=\"btnWrap bdA4 recommendTabWrap on\"><a id=\"recommend\" class=\"btn bdrA4 recommendTab\" href=\"#\">おすすめ</a></li>\n        <li class=\"btnWrap bdA4 bgA6 tvTabWrap\"><a id=\"television\" class=\"btn bdrA4 tvTab\" href=\"#\">テレビ</a></li>\n        <li class=\"btnWrap bdA4 bgA6 dramaTabWrap\"><a id=\"drama\" class=\"btn bdrA4 dramaTab\" href=\"#\">海外ドラマ</a></li>\n        <li class=\"btnWrap bdA4 bgA6 animeTabWrap\"><a id=\"anime\" class=\"btn bdrA4 animeTab\" href=\"#\">アニメ</a></li>\n        <li class=\"btnWrap bdA4 bgA6 movieTabWrap\"><a id=\"movie\" class=\"btn bdrA4 movieTab\" href=\"#\">映画</a></li>\n        <li class=\"btnWrap bdA4 bgA6 musicTabWrap\"><a id=\"music\" class=\"btn bdrA4 musicTab\" href=\"#\">音楽</a></li>\n      </ul>\n    </div>\n    <div id=\"videoFesBoxbd\">\n        <div id=\"recommendfb\" class=\"panel recommendPanel current\"><div class=\"lCassette\">\n<p class=\"thumbnailImg\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAU8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzExMTM4L3YwMDAxMy92MDAwMDAwMDAwMDAwMDAwMDA2OS8_bGlzdF9pZD0yMTEwNjQzJmJwbGF5PTE-/RS=^ADAWucmW8cw0cANe9KlwKKzDQ8xD9A-\"><img src=\"http://k.yimg.jp/images/gyao/ytopimg/20160908/004.jpg\" width=\"124\" height=\"93\" alt=\"気持ちの整理がつかない夫婦の決意「はじめまして、愛しています。」第8話\"></a></p>\n<dl class=\"topItem\">\n<dt class=\"videoFesItemTtl\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAVMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzExMTM4L3YwMDAxMy92MDAwMDAwMDAwMDAwMDAwMDA2OS8_bGlzdF9pZD0yMTEwNjQzJmJwbGF5PTE-/RS=^ADAWucmW8cw0cANe9KlwKKzDQ8xD9A-\">気持ちの整理がつかない夫婦の決意「はじめまして、愛しています。」第8話</a></dt>\n<dd class=\"videoFesTxt\">祖母と暮らすハジメ（横山歩）に虐待の様子はない。しかし母親はいまだ入院中。</dd>\n<dd class=\"aplstInfo\" id=\"aplstFlg1\">※視聴にはGYAO!アプリが必要です。</dd>\n</dl>\n</div>\n<ul class=\"sCassette\">\n<li class=\"leftItem\"><p class=\"thumbnailImg\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAVcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzAwOTA4L3YxMzM3NS92MTAwMDAwMDAwMDAwMDAwMzgyMy8_bGlzdF9pZD0yMDMxOTQzJmJwbGF5PTE-/RS=^ADAM40YsbRFArrFPp_ZiC6knKouAmg-\"><img src=\"http://k.yimg.jp/images/gyao/ytopimg/20160301/022_s.jpg\" alt=\"米国人監督が映し出した震災後の日本の姿\" width=\"80\" height=\"60\"></a></p><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAVsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzAwOTA4L3YxMzM3NS92MTAwMDAwMDAwMDAwMDAwMzgyMy8_bGlzdF9pZD0yMDMxOTQzJmJwbGF5PTE-/RS=^ADAM40YsbRFArrFPp_ZiC6knKouAmg-\">米国人監督が映し出した震災後の日本の姿</a></p></li>\n<li class=\"rightItem\"><p class=\"thumbnailImg\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAV8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzAwMTAxL3YwODc3MC92MDg3MTQwMDAwMDAwMDU0NTA2Ni8_dGFiPTEmc2Vjb25kPTAmYnBsYXk9MQ--/RS=^ADATj6kZIclgOXR9kJPUtOAKmC63eQ-\"><img src=\"http://k.yimg.jp/images/gyao/ytopimg/20160901/024_s.jpg\" alt=\"ナオト・インティライミ、胸キュン爽快な新曲\" width=\"80\" height=\"60\"></a></p><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAWMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzAwMTAxL3YwODc3MC92MDg3MTQwMDAwMDAwMDU0NTA2Ni8_dGFiPTEmc2Vjb25kPTAmYnBsYXk9MQ--/RS=^ADATj6kZIclgOXR9kJPUtOAKmC63eQ-\">ナオト・インティライミ、胸キュン爽快な新曲</a></p></li>\n<li class=\"leftItem\"><p class=\"thumbnailImg\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAWcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzAwMzM5L3YwODYwNC92MDg1MzQwMDAwMDAwMDUyODc2Ny8_bGlzdF9pZD0xOTQ2MTQ1JmJwbGF5PTE-/RS=^ADA9trhlonqp3Jjr6Di7Ifki2aiT60-\"><img src=\"http://k.yimg.jp/images/gyao/ytopimg/20160907/008_s.jpg\" alt=\"全身の自由を失った女と元ボクサーの出会い\" width=\"80\" height=\"60\"></a></p><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAWsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzAwMzM5L3YwODYwNC92MDg1MzQwMDAwMDAwMDUyODc2Ny8_bGlzdF9pZD0xOTQ2MTQ1JmJwbGF5PTE-/RS=^ADA9trhlonqp3Jjr6Di7Ifki2aiT60-\">全身の自由を失った女と元ボクサーの出会い</a></p></li>\n<li class=\"rightItem\"><p class=\"thumbnailImg\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAW8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzExMDA5L3YwMDAwMS92MDAwMDAwMDAwMDAwMDAwMDAxMS8_dGFiPTEmc2Vjb25kPTAmYnBsYXk9MQ--/RS=^ADA5offrRxZres1cdrnTeY1lSq1nEg-\"><img src=\"http://k.yimg.jp/images/gyao/ytopimg/20160818/005_s.jpg\" alt=\"槇原敬之新曲、木曜ドラマ主題歌フルver.\" width=\"80\" height=\"60\"></a></p><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAXMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcGxheWVyLzExMDA5L3YwMDAwMS92MDAwMDAwMDAwMDAwMDAwMDAxMS8_dGFiPTEmc2Vjb25kPTAmYnBsYXk9MQ--/RS=^ADA5offrRxZres1cdrnTeY1lSq1nEg-\">槇原敬之新曲、木曜ドラマ主題歌フルver.</a></p></li>\n</ul>\n<ul class=\"panelLink\">\n<li class=\"historyBtn\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAX8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvbXkvcmVjb3JkLw--/RS=^ADAck0kMFAoIr7JNdZQjpvRP5Oaj6s-\">ログイン中の視聴履歴</a></li>\n<li class=\"itemRank\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAXcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvcmFua2luZy9jL2RhaWx5L2FsbC8-/RS=^ADAkTBnJcjnuckR_P0vplxA7vQmTVw-\">ランキング</a></li>\n<li class=\"item\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAXsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2d5YW8ueWFob28uY28uanAvbGlzdC9uZXdjby8-/RS=^ADArn13AVktFXvXrJ8B7yrZToWpzsk-\">今日の新着</a></li>\n</ul></div>\n        <div id=\"televisionfb\" class=\"panel tvPanel\"></div>\n        <div id=\"dramafb\" class=\"panel dramaPanel\"></div>\n        <div id=\"animefb\" class=\"panel animePanel\"></div>\n        <div id=\"moviefb\" class=\"panel moviePanel\"></div>\n        <div id=\"musicfb\" class=\"panel musicPanel\"></div>\n    </div>\n  </div>\n</div>\n<div id=\"selectionR\" class=\"bx\"> <div class=\"hd\"> <h2>おすすめセレクション</h2> <h3><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=1360kavo6/A=302139990/R=0/*http://rdsig.yahoo.co.jp/evt=104118/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC8-\">Yahoo!ブックストア</a></h3> </div> <!-- /.hd --><div id=\"slcbd\" class=\"slctmpR11\"> <div class=\"c4\"> <div class=\"slcImg\"><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13qpjcqcf/A=302139990/R=1/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjUyMzI0Lw--\"><img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26555/20160908/3_bokuraha_f.jpg\" alt=\"僕達は知ってしまった\" width=\"84\" height=\"84\"></a></div> <p><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13qjvjk1c/A=302139990/R=2/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjUyMzI0Lw--\">彼に出会って恋を知った</a></p> </div> <div class=\"c4\"> <div class=\"slcImg\"><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13quvs0cu/A=302139990/R=3/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjU0MTg2Lw--\"><img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26555/20160908/5_nekomix_f.gif\" alt=\"猫ｍｉｘ幻奇譚とらじ\" width=\"84\" height=\"84\"></a></div> <p><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13q0eitnj/A=302139990/R=4/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjU0MTg2Lw--\">猫のmixと息子を探す旅</a></p> </div> <div class=\"c4\"> <div class=\"slcImg\"><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13qeekj6r/A=302139990/R=5/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjU0MjA1Lw--\"><img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26555/20160908/12_oishinbo_f.gif\" alt=\"美味しんぼ\" width=\"84\" height=\"84\"></a></div> <p><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13qfjiham/A=302139990/R=6/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjU0MjA1Lw--\">「美味しんぼ」が無料</a></p> </div> <div class=\"c4\"> <div class=\"slcImg\"><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13qksjvis/A=302139990/R=7/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjQ5MDAyLw--\"><img src=\"http://ai.yimg.jp/bdv/adtest/jaby/26555/20160908/5_kurogane_f.gif\" alt=\"クロガネ\" width=\"84\" height=\"84\"></a></div> <p><a href=\"http://ard.yahoo.co.jp/SIG=1583cbm65/M=300950553.301818127.303441263.314665477/D=jp_tlivez/S=2080187653:TOS/_ylt=A2RA2EuRB9VXsAsA1sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qqw1A2RAyFQ-/J=1473578897379031/SIG=13qdo4cok/A=302139990/R=8/*http://rdsig.yahoo.co.jp/evt=123951/RV=1/RU=aHR0cDovL2Jvb2tzdG9yZS55YWhvby5jby5qcC9zaG9zaGktNjQ5MDAyLw--\">運動音痴男が霊に襲われ</a></p> </div> </div> </div><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['qqw1A2RAyFQ-']='&U=13j5lfi7s%2fN%3dqqw1A2RAyFQ-%2fC%3d300950553.301818127.303441263.314665477%2fD%3dTOS%2fB%3d302139990';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14l8drie9%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d3345689665%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13j5lfi7s%2fN%3dqqw1A2RAyFQ-%2fC%3d300950553.301818127.303441263.314665477%2fD%3dTOS%2fB%3d302139990\"></div></noscript><div id=\"event\" class=\"bx bxSl\">\n<h2>特集</h2>\n<ul><li><a href=\"http://ard.yahoo.co.jp/SIG=158qtq3po/M=300950565.301818143.303441269.314510208/D=jp_tlivez/S=2080187653:TPT/_ylt=A2RA2EuRB9VXsAsA0cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=oaw1A2RAyFQ-/J=1473578897379031/SIG=124hcenkf/A=302140003/R=0/*http://tickets.yahoo.co.jp/special/dct2016/urawan/\">ドリカムツアー「ウラワン」の内容をチェック</a></li><li class=\"more\"><a href=\"http://ard.yahoo.co.jp/SIG=158qtq3po/M=300950565.301818143.303441269.314510208/D=jp_tlivez/S=2080187653:TPT/_ylt=A2RA2EuRB9VXsAsA0cEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=oaw1A2RAyFQ-/J=1473578897379031/SIG=11b2fclk0/A=302140003/R=1/*http://event.yahoo.co.jp/\">一覧</a></li></ul>\n</div><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['oaw1A2RAyFQ-']='&U=13jv4n751%2fN%3doaw1A2RAyFQ-%2fC%3d300950565.301818143.303441269.314510208%2fD%3dTPT%2fB%3d302140003';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14lmvep83%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d2830841711%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13jv4n751%2fN%3doaw1A2RAyFQ-%2fC%3d300950565.301818143.303441269.314510208%2fD%3dTPT%2fB%3d302140003\"></div></noscript><div id=\"eventPromo\" class=\"bx bxEx\">\n<div class=\"img\"><a href=\"http://ard.yahoo.co.jp/SIG=158ko13pb/M=300947129.301814312.303440358.302463196/D=jp_tlivez/S=2080187653:TPM/_ylt=A2RA2EuRB9VXsAsA0sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=oqw1A2RAyFQ-/J=1473578897379031/SIG=11qu0jo5m/A=302138485/R=0/*http://promotion.yahoo.co.jp/nenrei1607/\"><img height=\"55\" width=\"170\" alt=\"忍び寄る血管リスクと動脈硬化\" src=\"http://ai.yimg.jp/bdv/prem/wqp_ijq1pd_vopdneies/_jnnogliqf6ka1efpyps/nqsx5fk9vgunmeekfxhx/xo88sgd_hkc1e1tz4jr5-a.png\"></a></div>\n<h3><a href=\"http://ard.yahoo.co.jp/SIG=158ko13pb/M=300947129.301814312.303440358.302463196/D=jp_tlivez/S=2080187653:TPM/_ylt=A2RA2EuRB9VXsAsA0sEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=oqw1A2RAyFQ-/J=1473578897379031/SIG=11qqvke99/A=302138485/R=1/*http://promotion.yahoo.co.jp/nenrei1607/\">忍び寄る血管リスクと動脈硬化</a><span class=\"iconPR\" title=\"PR\">PR</span></h3>\n<p>暑いこの時期、「サイレントキラー」があなたを狙っている</p>\n</div><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['oqw1A2RAyFQ-']='&U=13jtj60al%2fN%3doqw1A2RAyFQ-%2fC%3d300947129.301814312.303440358.302463196%2fD%3dTPM%2fB%3d302138485';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14l6m9s48%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d1978950109%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13jtj60al%2fN%3doqw1A2RAyFQ-%2fC%3d300947129.301814312.303440358.302463196%2fD%3dTPM%2fB%3d302138485\"></div></noscript><div id=\"cgmboxR\" class=\"bx\">                                                                     \n<div class=\"hd\">\n<h2>みんなのアンテナ</h2>\n</div>\n<div id=\"cgmbd\" class=\"cgmtmpR10\">\n<h3>あなたは知ってる？ Twitterをにぎわす話題</h3>\n<p>最近こちらで掲載したツイートを総集編でご紹介。気になるつぶやき、もう一度おさらいしてみませんか？</p>\n<ul class=\"symbol\">\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAYMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWx0aW1lLnNlYXJjaC55YWhvby5jby5qcC9zZWFyY2g_cD0lRTklOUIlQTMlRTglQUElQUQlRTUlOUMlQjAlRTUlOTAlOEQlRTMlODElOTclRTMlODElOEIlRTMlODElQUElRTMlODElODQlRTMlODAlODImZWk9VVRGLTgmZnI9cnRzX3Nwb3RsaWdodCZya2Y9MSZwbz0z/RS=^ADAUWnsuf9q6OLEwdCs29v0a17ay30-\">難読地名しかない</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAYcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWx0aW1lLnNlYXJjaC55YWhvby5jby5qcC9zZWFyY2g_cD0lRTklQTMlOUYlRTUlOTklQTglRTYlQjQlOTclRTMlODElODQlRTMlODIlQjklRTMlODMlOUQlRTMlODMlQjMlRTMlODIlQjglRTMlODElOEMlRTMlODElQkUlRTMlODElOUYlRTYlODElOTAlRTMlODElOEYlRTMlODElQUElRTMlODElQTMlRTMlODElQTYlRTMlODElOEQlRTMlODElOUYlRTMlODElOEIlRTMlODIlODklRTglQjIlQjclRTMlODElODQlRTYlOUIlQkYlRTMlODElODglRTMlODElOUYmZWk9VVRGLTgmZnI9cnRzX3Nwb3RsaWdodCZya2Y9MSZwbz0z/RS=^ADASUgELJkqelWXNznJWbx69Jrlw.g-\">恐くなってきたから買い替え</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAYsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWx0aW1lLnNlYXJjaC55YWhvby5jby5qcC9zZWFyY2g_cD0xMDAlRTUlOUQlODclRTMlODElQUUlRTklOUMlQTclRTUlOTAlQjklRTMlODElOEQlRTMlODElQUIlRTclOUIlQUUlRTMlODElQTglRTUlOEYlQTMlRTQlQkIlOTglRTMlODElOTElRTMlODElOUYlRTMlODIlODkrJUUzJTgyJUFGJUUzJTgyJUJEJUU1JThGJUFGJUU2JTg0JTlCJUUzJTgxJThGJUUzJTgxJUFBJUUzJTgxJUEzJUUzJTgxJTlGJUUzJTgxJThCJUUzJTgyJTg5JUUzJTgxJUJGJUUzJTgyJTkzJUUzJTgxJUFBJUUzJTgyJTgyJUUzJTgyJTg0JUUzJTgxJUEzJUUzJTgxJTlGJUUzJTgyJTg5JUUzJTgxJTg0JUUzJTgxJTg0JmVpPVVURi04JmZyPXJ0c19zcG90bGlnaHQmcmtmPTEmcG89Mw--/RS=^ADAe81.Ej5ODjIh7iuttwwKAZaqw8g-\">100均の霧吹きに目と口を</a></li>\n</ul>\n<ul class=\"symbol\">\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAY8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWx0aW1lLnNlYXJjaC55YWhvby5jby5qcC9zZWFyY2g_cD0lRTMlODIlQUIlRTMlODMlQkMlRTMlODMlOEElRTMlODMlOTMlRTMlODIlOTIlRTQlQkYlQTElRTMlODElOTglRTMlODElQUElRTMlODElODQlRTMlODElQTglRTglQjElQUElRTglQUElOUUlRTMlODElOTclRTMlODElQTYlRTMlODElODQlRTMlODElOUYlRTUlOEYlOEIlRTklODElOTQlRTMlODElQUUlRTMlODElOEElRTMlODElOTglRTMlODElODQlRTMlODElQTElRTMlODIlODMlRTMlODIlOTMlRTMlODElOEMlRTMlODElQTQlRTMlODElODQlRTMlODElQUIlRTMlODIlQUIlRTMlODMlQkMlRTMlODMlOEElRTMlODMlOTMlRTMlODIlOTIlRTQlQkQlQkYlRTMlODElODYlRTMlODIlODglRTMlODElODYlRTMlODElQUIlRTMlODElQUElRTMlODElQTMlRTMlODElOUYlRTMlODIlODklRTMlODElOTclRTMlODElODQlRTMlODIlOTMlRTMlODElQTAlRTMlODElOTElRTMlODElQTklRTUlOEYlOEIlRTklODElOTQlRTMlODElODQlRTMlODIlOEYlRTMlODElOEYmZWk9VVRGLTgmZnI9cnRzX3Nwb3RsaWdodCZya2Y9MSZwbz0z/RS=^ADAJZa.L9tI_QKKnRev15qXMJIVntg-\">カーナビと和解した理由</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAZMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWx0aW1lLnNlYXJjaC55YWhvby5jby5qcC9zZWFyY2g_cD0lRTYlOUQlQjElRTQlQkElQUMlRTQlQkElQkElRTMlODAlOEMlRTclOTQlQjAlRTglODglOEUlRTMlODElQUYlRTMlODIlQTQlRTMlODIlQUElRTMlODMlQjMlRTMlODMlQTIlRTMlODMlQkMlRTMlODMlQUIlRTglQTElOEMlRTMlODElOEYlRTMlODElQTAlRTMlODElOTElRTMlODElQTclRTQlQkMlOTElRTYlOTclQTUlRTclQjUlODIlRTMlODIlOEYlRTMlODIlOEIlRTMlODIlOTMlRTMlODElQTAlRTMlODIlOEQlRUYlQkMlOUYlRTMlODElQTQlRTMlODElQkUlRTMlODIlODklRTMlODElQUElRTMlODElOTUlRTMlODElOUQlRTMlODElODYlRTMlODAlODImZWk9VVRGLTgmZnI9cnRzX3Nwb3RsaWdodCZya2Y9MSZwbz0z/RS=^ADAbhv_GXRi7xWmKqxxluRHydEXNCc-\">全部イオンでできますけどね</a></li>\n<li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAZcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3JlYWx0aW1lLnNlYXJjaC55YWhvby5jby5qcC9zZWFyY2g_cD0lRTYlODElQUYlRTUlQUQlOTAlRTMlODElOEMlRTMlODIlODQlRTMlODElQTMlRTMlODElQTYlRTYlQUMlQjIlRTMlODElOTclRTMlODElOEYlRTMlODElQUElRTMlODElODQlRTMlODElOTMlRTMlODElQTglRTMlODIlOTIlRTMlODElOTclRTMlODElQTYlRTMlODIlOEIlRTYlOTklODIlRTMlODElQUElRTMlODElQTklRTMlODAlOEMlRTMlODMlODAlRTMlODMlQTElRTIlODAlQkMlRUYlQjglOEUlRTMlODAlOEQlRTMlODIlODglRTMlODIlOEElRTglQUElOUUlRTYlODQlOUYlRTMlODElOEMlRTYlOUYlOTQlRTMlODIlODklRTMlODElOEIlRTMlODElODQlRTglQTglODAlRTglOTElODklRTMlODElQTclRTIlODAlQTYmZWk9VVRGLTgmZnI9cnRzX3Nwb3RsaWdodCZya2Y9MSZwbz0z/RS=^ADA1ckOOVDZIohAF5aapTzMLG_rj_c-\">息子にノンノン期が到来</a></li>\n</ul>\n</div>\n</div><div id=\"qurioRecommend\" class=\"quriosity bx\">\n<div class=\"hd\">\n<h2><a href=\"#\" class=\"rapidnofollow\" id=\"recTgl\"><span class=\"tglOpen\">開閉する</span>あなたへのおすすめ</a></h2>\n</div><!-- /.hd -->\n<div id=\"qurioRecommendBd\" class=\"recBd\">\n<div id=\"qurioSetting\" class=\"bgA6 bdA5\" style=\"display:none;\">\n    <div id=\"qurioSettingBox\">\n    <p class=\"qurioSettinghd\">あなたの興味にあった情報をお届けします。<br>気になるジャンルを最大で3つ教えてください。</p>\n    <div class=\"qurioSettingbd bdA5\">\n        <form method=\"get\" name=\"#\" action=\"#\"><fieldset>\n        <legend>興味ワードの選択</legend><ul>\n        <li><input type=\"checkbox\" value=\"plt\" id=\"plt\" data-word=\"株式,ダウ,売上高,株価,外為,国債,首相,政策,議会,衆院,参院,内閣,国会,大統領,過激派,テロ,内戦,マーケティング,ベンチャー,上司,ビジネス,マネジメント,イノベーション,入社,Bluetooth,LTE,HDMI,基板,端末,機種,充電器,USB,ASUS,デバイス,ソリューション,アプリケーション,iOS,Android,wi-fi,IoT,Ruby,Play,App,iPhone,アプリ\">\n            <label for=\"plt\">政治・経済</label></li>\n        <li><input type=\"checkbox\" value=\"hby\" id=\"hby\" data-word=\"アニメ,マンガ,漫画,コミック,ジブリ,声優,アニソン,ボーカロイド,ゲーム,DS,wii,プレイステーション,任天堂,ファミ通,RPG\">\n            <label for=\"hby\">漫画・ゲーム</label></li>\n        <li><input type=\"checkbox\" value=\"hlt\" id=\"hlt\" data-word=\"乾燥肌,冷え性,化粧水,ニキビ,脱毛,下腹,アイライン,ブラッシング,コンシーラー,むくみ,デトックス,毛穴\">\n            <label for=\"hlt\">美容・健康</label></li>\n        <li><input type=\"checkbox\" value=\"spt\" id=\"spt\" data-word=\"野球,MLB,投手,捕手,内野手,外野手,本塁打,三振,球場,塁,打者,セリーグ,パリーグ,アリーグ,ナリーグ,サッカー,Jリーグ,FW,MF,DF,GK,アウェー,FIFA,UEFA,F1,ゴルフ,血統,ダート,重賞,騎手,次走,調教師,バドミントン,シングルス,ダブルス,ボクシング,NBA,マラソン,大相撲,ラグビー,ツールド,UCI,スケート,競泳\">\n            <label for=\"spt\">スポーツ</label></li>\n        <li><input type=\"checkbox\" value=\"etm\" id=\"etm\" data-word=\"タレント,芸人,番組,ドラマ,女優,俳優,アナウンサー,ジャニーズ,ゴシップ,タワーレコード,新曲,アルバム,新譜,ピアノ,ギター,ベーシスト,ドラム,HMV,スペースシャワー,ビルボード,ミュージック,ヒップホップ,アカデミー賞,カンヌ国際映画祭,映画賞,予告編,ブロードウェー,特報,ロードショー,邦画,洋画,初演,ロングラン\">\n            <label for=\"etm\">エンタメ</label></li>\n        <li><input type=\"checkbox\" value=\"vhc\" id=\"vhc\" data-word=\"トルク,SUV,排気量,HV,クルマ,ミニバン,クーペ,ワゴン,EV\">\n            <label for=\"vhc\">車・バイク</label></li>\n        <li><input type=\"checkbox\" value=\"fsn\" id=\"fsn\" data-word=\"ニット,着こなし,コーデ,メンズ,コーディネート,スタイリング,トレンチ,ケープ,シャツ,デニム,スニーカー,トップス,パンツ,カットソー,コレクション,スタイル,シルエット,カジュアル,おしゃれ,スリッポン,サングラス,キャップ,サロペット,カチューシャ,タイツ,オシャレ,春物,夏物,秋物,冬物,試着,ウィメンズ,ヒール,セレクト,アクセ,VOGUE,カシミア,アンゴラ\">\n            <label for=\"fsn\">ファッション</label></li>\n        <li><input type=\"checkbox\" value=\"grm\" id=\"grm\" data-word=\"肉汁,絶品,ランチ,食感,海鮮,生クリーム,チョコレート,フレーバー,人気店,ショコラティエ,ドルチェ,おもたせ,ビストロ,肉料理,魚料理,バル,おつまみ,献立,旅館,ディナー,トラベル,テーマパーク,専門店,オープン,バーゲン,リゾート,絶景,ご宿泊,バカンス,温泉,世界遺産,アクティビティー,デート,ヴィラ,日帰り,展望台,女子旅,トリップ,開催,イベント,日時,場所,催し\">\n            <label for=\"grm\">グルメ・休日</label></li>\n        </ul></fieldset>\n        </form>\n    </div>\n    <div class=\"qurioSettingBtn disabled\">\n        <span class=\"assist\"><button type=\"submit\" id=\"qurioSetup\" disabled=\"\">設定する</button></span>\n    </div>\n    </div>\n    <div id=\"qurioSettingMsg\">\n        <p class=\"qurioSetTitle\">設定ありがとうございます。</p>\n        <p class=\"qurioSetSubTitle\">使えば使うほど、あなたにぴったりな情報をおすすめします。</p>\n    </div>\n</div><!-- /#qurioSetting -->\n<div id=\"qurireco\">\n<div id=\"qurioArticleBd\" class=\"articleBd\">\n</div><!-- /.articleBd -->\n<div id=\"qurioError\" class=\"error\">\n</div><!-- /#qurioError -->\n<div id=\"qurioLoad\" class=\"load\">\n<p class=\"loading\">読み込み中</p>\n</div><!-- /#qurioLoad -->\n</div><!-- /#qurireco -->\n</div><!-- /.recBd -->\n</div><!-- /#qurioRecommend -->\n</div>\n<hr class=\"separate\">\n<div id=\"sub\">\n<div id=\"brandpanel\" class=\"bx\">\n<div id=\"bpad1473578897\"></div>\n<script src=\"http://ai.yimg.jp/bdv/yahoo/javascript/brandpanel_triple/1.0.1/brandpanel_triple.js\" language=\"javascript\"></script>\n<script language=\"JavaScript\" type=\"text/javascript\">\n(function () {\nvar waitTime = 100;\nfunction callInit(){\nYAHOO.JP.rma.brandpanel_triple.init({\nid: \"bpad1473578897\",\nmp4: \"http://ai.yimg.jp/bdv/prem/1jk5gjm_gba6myxahlvn/o6ljerinfspiwpf_38sh/_dqlsbhn0wm_vdtrj6b5/ie24781krtdy3wxpxlmx-a.mp4\",\naltimg: \"http://ai.yimg.jp/bdv/prem/1jk5gjm_gba6myxahlvn/o6ljerinfspiwpf_38sh/_dqlsbhn0wm_vdtrj6b5/ie24781krtdy3wxpxlmx-b.jpg\",\nlink1: \"http://ard.yahoo.co.jp/SIG=1580tlhjc/M=300946470.301813563.303439756.313453248/D=jp_tlivez/S=2080187653:TBP/_ylt=A2RA2EuRB9VXsAsAzsEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=nqw1A2RAyFQ-/J=1473578897379031/SIG=14hkfh9hj/A=302137634/R=0/*http://c.cocacola.co.jp/sukoyakacha/campaign2016/gourmet_meet.html?utm_source=adyahoo&utm_medium=adbnr&utm_campaign=mileage2016\",\nlink2: \"\",\nlink3: \"\",\nlink4: \"\",\nlink5: \"\",\nlink1coords: \"\",\nlink2coords: \"\",\nlink3coords: \"\",\nlink4coords: \"\",\nlink5coords: \"\",\naltlink: \"http://ard.yahoo.co.jp/SIG=1580tlhjc/M=300946470.301813563.303439756.313453248/D=jp_tlivez/S=2080187653:TBP/_ylt=A2RA2EuRB9VXsAsAzsEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=nqw1A2RAyFQ-/J=1473578897379031/SIG=14hmm2ola/A=302137634/R=1/*http://c.cocacola.co.jp/sukoyakacha/campaign2016/gourmet_meet.html?utm_source=adyahoo&utm_medium=adbnr&utm_campaign=mileage2016\",\ntarget: 'target=\"_top\"',\nhasSound: false\n});\n}\n(function repeatCallInit(){\nvar exists=window.YAHOO&&YAHOO.JP&&YAHOO.JP.rma&&YAHOO.JP.rma.brandpanel_triple&&typeof(YAHOO.JP.rma.brandpanel_triple.init)==='function';\nif(exists){\ncallInit();\n}\nelse{\nif(waitTime<1000){\nwaitTime+=10;\n}\nsetTimeout(repeatCallInit,waitTime);\nreturn;\n}\n}());\n}());\n</script>\n<noscript>\n<a href=\"http://ard.yahoo.co.jp/SIG=1580tlhjc/M=300946470.301813563.303439756.313453248/D=jp_tlivez/S=2080187653:TBP/_ylt=A2RA2EuRB9VXsAsAzsEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=nqw1A2RAyFQ-/J=1473578897379031/SIG=14h4qufu2/A=302137634/R=2/*http://c.cocacola.co.jp/sukoyakacha/campaign2016/gourmet_meet.html?utm_source=adyahoo&utm_medium=adbnr&utm_campaign=mileage2016\" target=\"_top\">\n<img src=\"http://ai.yimg.jp/images/clear.gif\" width=\"350\" height=\"240\" style=\"background-image: url(http://ai.yimg.jp/bdv/prem/1jk5gjm_gba6myxahlvn/o6ljerinfspiwpf_38sh/_dqlsbhn0wm_vdtrj6b5/ie24781krtdy3wxpxlmx-b.jpg)\">\n</a>\n</noscript>\n</div>\n<!-- /#brandpanel --><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['nqw1A2RAyFQ-']='&U=13jpijtsd%2fN%3dnqw1A2RAyFQ-%2fC%3d300946470.301813563.303439756.313453248%2fD%3dTBP%2fB%3d302137634';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14kfnnlhr%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d438645030%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13jpijtsd%2fN%3dnqw1A2RAyFQ-%2fC%3d300946470.301813563.303439756.313453248%2fD%3dTBP%2fB%3d302137634\"></div></noscript><div id=\"posfix\">\n<div id=\"personalbox\" class=\"bx bgA5\">\n    <h3 id=\"pbhello\"><span><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAb8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly9sb2dpbi55YWhvby5jby5qcC9jb25maWcvbG9naW4_LnNyYz13d3cmLmRvbmU9aHR0cDovL3d3dy55YWhvby5jby5qcA--/RS=^ADADvumbMj6m6jMjp52TZwOSS0pk_s-\">ログイン</a></span></h3>\n<ul id=\"pbidinfo\"><li class=\"loginout\">IDでもっと便利に[ <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAcMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly9hY2NvdW50LmVkaXQueWFob28uY28uanAvcmVnaXN0cmF0aW9uPy5zcmM9d3d3Ji5kb25lPWh0dHAlM0ElMmYlMmZ3d3cueWFob28uY28uanA-/RS=^ADAz4d50xLYSGWuK4TJ__5IP8S.tNQ-\">新規取得</a> ]</li>\n<li class=\"info\"><span class=\"assist\">\n<a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAccIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly9saC5sb2dpbi55YWhvby5jby5qcC8-/RS=^ADAJ.pjdnurpbxCA9pHX400jscFTNI-\">ログイン履歴</a></span>\n<span class=\"assist\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAcsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly9hY2NvdW50LmVkaXQueWFob28uY28uanAvZXZhbF9wcm9maWxlPy5zcmM9d3d3Ji5kb25lPWh0dHAlM0ElMmYlMmZ3d3cueWFob28uY28uanAlMkY-/RS=^ADASNqAz141vBfezP2hk4aeEpROruE-\">登録情報</a></span></li>\n</ul>\n<div id=\"pbproperty\" class=\"bdA2\">\n<ul class=\"connect\">\n<li class=\"pbmail first\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAc8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL21haWwueWFob28uY28uanAv/RS=^ADA8QZBSiNMF4mw8lX262e99OkiUNw-\"><span id=\"mailicon\" title=\"Yahoo!メール\">Yahoo!メール</span><span class=\"txt\">メール</span></a></li>\n<li class=\"pbmailinfo\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAdMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Byb21vLm1haWwueWFob28uY28uanAv/RS=^ADAW_tCA0fVCCCYG7uZjv8dJF5j_X8-\">メールアドレスを取得</a></li>\n</ul>\n<div id=\"mailSummary\" class=\"\"></div>\n<ul class=\"shortcut\"><li><a title=\"Yahoo!ボックス\" class=\"second\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAdcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2JveC55YWhvby5jby5qcA--/RS=^ADA6CnsVN1fifQtYVg7qFwZD3J45Rw-\">Yahoo!ボックス</a></li></ul>\n</div>\n    <div id=\"pbtoday\" class=\"bdA2 clfix\">\n        <h3 id=\"pbdata\" class=\"bgA6\">\n    <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAdsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly9jYWxlbmRhci55YWhvby5jby5qcC8_dj0wJnQ9MTQ3MzU1MjAwMA--/RS=^ADA16J9GOkRse8KN4jR5_4FU.j3Sd0-\">\n        <span id=\"pbTgl\" class=\"tglClose\">開閉する</span>\n        2016年9月11日（日）    </a>\n</h3>\n<div id=\"pbcalendar\" class=\"bdA4 clfix\" style=\"display:none;\">\n    <div id=\"pbcNw\">\n        <table><thead><tr>\n<th colspan=\"7\"><a href=\"https://calendar.yahoo.co.jp/?v=2&amp;t=1472688000\" id=\"pbcMonth\">9月</a><em id=\"pbcYear\">2016</em></th>\n</tr></thead>\n<tbody><tr>\n<td><span class=\"h\">日</span></td>\n<td>月</td>\n<td>火</td>\n<td>水</td>\n<td>木</td>\n<td>金</td>\n<td>土</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472342400\" rel=\"nofollow\" class=\"e\">28</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472428800\" rel=\"nofollow\" class=\"e\">29</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472515200\" rel=\"nofollow\" class=\"e\">30</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472601600\" rel=\"nofollow\" class=\"e\">31</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472688000\" rel=\"nofollow\">1</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472774400\" rel=\"nofollow\">2</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472860800\" rel=\"nofollow\">3</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1472947200\" rel=\"nofollow\" class=\"h\">4</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473033600\" rel=\"nofollow\">5</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473120000\" rel=\"nofollow\">6</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473206400\" rel=\"nofollow\">7</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473292800\" rel=\"nofollow\">8</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473379200\" rel=\"nofollow\">9</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473465600\" rel=\"nofollow\">10</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473552000\" rel=\"nofollow\" class=\"bgA2\">11</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473638400\" rel=\"nofollow\">12</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473724800\" rel=\"nofollow\">13</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473811200\" rel=\"nofollow\">14</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473897600\" rel=\"nofollow\">15</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1473984000\" rel=\"nofollow\">16</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474070400\" rel=\"nofollow\">17</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474156800\" rel=\"nofollow\" class=\"h\">18</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474243200\" rel=\"nofollow\" class=\"h\">19</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474329600\" rel=\"nofollow\">20</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474416000\" rel=\"nofollow\">21</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474502400\" rel=\"nofollow\" class=\"h\">22</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474588800\" rel=\"nofollow\">23</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474675200\" rel=\"nofollow\">24</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474761600\" rel=\"nofollow\" class=\"h\">25</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474848000\" rel=\"nofollow\">26</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474934400\" rel=\"nofollow\">27</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475020800\" rel=\"nofollow\">28</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475107200\" rel=\"nofollow\">29</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475193600\" rel=\"nofollow\">30</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475280000\" rel=\"nofollow\" class=\"e\">1</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475366400\" rel=\"nofollow\" class=\"e\">2</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475452800\" rel=\"nofollow\" class=\"e\">3</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475539200\" rel=\"nofollow\" class=\"e\">4</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475625600\" rel=\"nofollow\" class=\"e\">5</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475712000\" rel=\"nofollow\" class=\"e\">6</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475798400\" rel=\"nofollow\" class=\"e\">7</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475884800\" rel=\"nofollow\" class=\"e\">8</a>\n</td>\n</tr>\n</tbody>\n</table>\n    </div><!-- /#pbcNw -->\n    <div id=\"pbcNx\">\n        <table><thead><tr>\n<th colspan=\"7\"><a href=\"https://calendar.yahoo.co.jp/?v=2&amp;t=1475280000\" id=\"pbcMonth\">10月</a><em id=\"pbcYear\">2016</em></th>\n</tr></thead>\n<tbody><tr>\n<td><span class=\"h\">日</span></td>\n<td>月</td>\n<td>火</td>\n<td>水</td>\n<td>木</td>\n<td>金</td>\n<td>土</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474761600\" rel=\"nofollow\" class=\"e\">25</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474848000\" rel=\"nofollow\" class=\"e\">26</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1474934400\" rel=\"nofollow\" class=\"e\">27</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475020800\" rel=\"nofollow\" class=\"e\">28</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475107200\" rel=\"nofollow\" class=\"e\">29</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475193600\" rel=\"nofollow\" class=\"e\">30</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475280000\" rel=\"nofollow\">1</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475366400\" rel=\"nofollow\" class=\"h\">2</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475452800\" rel=\"nofollow\">3</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475539200\" rel=\"nofollow\">4</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475625600\" rel=\"nofollow\">5</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475712000\" rel=\"nofollow\">6</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475798400\" rel=\"nofollow\">7</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475884800\" rel=\"nofollow\">8</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1475971200\" rel=\"nofollow\" class=\"h\">9</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476057600\" rel=\"nofollow\" class=\"h\">10</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476144000\" rel=\"nofollow\">11</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476230400\" rel=\"nofollow\">12</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476316800\" rel=\"nofollow\">13</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476403200\" rel=\"nofollow\">14</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476489600\" rel=\"nofollow\">15</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476576000\" rel=\"nofollow\" class=\"h\">16</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476662400\" rel=\"nofollow\">17</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476748800\" rel=\"nofollow\">18</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476835200\" rel=\"nofollow\">19</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1476921600\" rel=\"nofollow\">20</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477008000\" rel=\"nofollow\">21</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477094400\" rel=\"nofollow\">22</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477180800\" rel=\"nofollow\" class=\"h\">23</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477267200\" rel=\"nofollow\">24</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477353600\" rel=\"nofollow\">25</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477440000\" rel=\"nofollow\">26</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477526400\" rel=\"nofollow\">27</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477612800\" rel=\"nofollow\">28</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477699200\" rel=\"nofollow\">29</a>\n</td>\n</tr>\n<tr>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477785600\" rel=\"nofollow\" class=\"h\">30</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477872000\" rel=\"nofollow\">31</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1477958400\" rel=\"nofollow\" class=\"e\">1</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1478044800\" rel=\"nofollow\" class=\"e\">2</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1478131200\" rel=\"nofollow\" class=\"e\">3</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1478217600\" rel=\"nofollow\" class=\"e\">4</a>\n</td>\n<td>\n<a href=\"https://calendar.yahoo.co.jp/?v=0&amp;t=1478304000\" rel=\"nofollow\" class=\"e\">5</a>\n</td>\n</tr>\n</tbody>\n</table>\n    </div><!-- /#pbcNx -->\n</div><!-- #pbcalendar -->\n        <div id=\"pbweather\" class=\"bdA4\">\n    <div id=\"pbwTd\" class=\"pbwDtl\">\n        <h3><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAeMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci9qcC8xMy80NDEwLzEzMjE5Lmh0bWw-/RS=^ADA77Fm9InaIvM6kwNpjb_Bcncmc3c-\">今日の天気</a></h3>\n        <ul>\n            <li class=\"pbwarea\">（東京）</li>\n            <li class=\"pbwicon\">\n                <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAecIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci9qcC8xMy80NDEwLzEzMjE5Lmh0bWw-/RS=^ADA77Fm9InaIvM6kwNpjb_Bcncmc3c-\">\n<img width=\"33\" height=\"20\" src=\"http://k.yimg.jp/images/weather/general/transparent_s/clouds.gif\" alt=\"曇り\">\n</a>\n            </li>\n            <li class=\"pbwtemperature\">\n                <span class=\"high\">25℃</span>/\n                <span class=\"low\">21℃</span>\n            </li>\n            <li class=\"pbwrprobability bdrB2\">40%</li>\n        </ul>\n    <dl class=\"pbwHeat pbwGraph2\" id=\"pbwHeatTd\" title=\"注意。こまめな水分補給を忘れずに\">\n<dt><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAd8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci9qcC9leHBvL2hlYXRzeW5kcm9tZS8xMy80NDEwLmh0bWw-/RS=^ADAnBJJQjyG3fJ2eA9opxzBDnc0MQM-\">熱中症指数</a></dt><dd class=\"pbwGraphIcn1\"><span class=\"barGraph heat1\">ほぼ安全</span></dd><dd class=\"pbwGraphIcn2\"><span class=\"barGraph heat2\">注意</span></dd><dd class=\"pbwGraphIcn3\"><span class=\"barGraph heat3\">警戒</span></dd><dd class=\"pbwGraphIcn4\"><span class=\"barGraph heat4\">厳重警戒</span></dd><dd class=\"pbwGraphIcn5\"><span class=\"barGraph heat5\">危険</span></dd></dl>\n    </div>\n    <div id=\"pbwTm\" class=\"pbwDtl bdlB2\">\n        <h3><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAesIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci9qcC8xMy80NDEwLzEzMjE5Lmh0bWwjeWp3X3BpbnBvaW50X3RvbW9ycm93/RS=^ADA9cWO_RlhXavgg9NjKSY4j_0rbCM-\">明日の天気</a></h3>\n        <ul>\n            <li class=\"pbwarea\">（東京）</li>\n            <li class=\"pbwicon\">\n                <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAe8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci9qcC8xMy80NDEwLzEzMjE5Lmh0bWwjeWp3X3BpbnBvaW50X3RvbW9ycm93/RS=^ADA9cWO_RlhXavgg9NjKSY4j_0rbCM-\">\n                    <img width=\"33\" height=\"20\" src=\"http://k.yimg.jp/images/weather/general/transparent_s/clouds_rain_st.gif\" alt=\"曇時々雨\">\n                </a>\n            </li>\n            <li class=\"pbwtemperature\">\n                <span class=\"high\">27℃</span>/\n                <span class=\"low\">21℃</span>\n            </li>\n            <li class=\"pbwrprobability bdrB2\">60%</li>\n        </ul>\n    <dl class=\"pbwHeat pbwGraph3\" id=\"pbwHeatTm\" title=\"警戒。十分な休息と水分補給を\">\n<dt><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAd8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci9qcC9leHBvL2hlYXRzeW5kcm9tZS8xMy80NDEwLmh0bWw-/RS=^ADAnBJJQjyG3fJ2eA9opxzBDnc0MQM-\">熱中症指数</a></dt><dd class=\"pbwGraphIcn1\"><span class=\"barGraph heat1\">ほぼ安全</span></dd><dd class=\"pbwGraphIcn2\"><span class=\"barGraph heat2\">注意</span></dd><dd class=\"pbwGraphIcn3\"><span class=\"barGraph heat3\">警戒</span></dd><dd class=\"pbwGraphIcn4\"><span class=\"barGraph heat4\">厳重警戒</span></dd><dd class=\"pbwGraphIcn5\"><span class=\"barGraph heat5\">危険</span></dd></dl>\n    </div>\n    <div id=\"pbwInfo\" class=\"clfix\">\n        <div id=\"pbwradar\">\n            <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAfMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3dlYXRoZXIueWFob28uY28uanAvd2VhdGhlci96b29tcmFkYXIvP2xhdD0zNS4zNTE0MTA2ODk2OTE0NCZsb249MTM5LjQ5NDEyMDY3MDMxMjY0Jno9MTA-/RS=^ADAOIPNz_kRWAtTnFwsu4L4Z21hOZ8-\" id=\"pbwradarTtl\">雨雲レーダー</a>\n        </div>\n        <p id=\"pbwlocation\">\n            <a href=\"http://weather.yahoo.co.jp/\" id=\"pbweatherbtn\" class=\"pldwn\" title=\"地域を選択\">狛江市</a>\n        </p>\n    </div>\n</div>\n        <div id=\"pblocal\" class=\"bdA4\"><h3>運行情報</h3><ul class=\"item\"><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAfsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RyYW5zaXQueWFob28uY28uanAvdHJhaW5pbmZvL2RldGFpbC84Ni8wLw--/RS=^ADAmavyIFaw767C9eATs2KExo.9k_c-\">西武新宿線 運転見合わせ（15時50分）</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAf8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RyYW5zaXQueWFob28uY28uanAvdHJhaW5pbmZvL2RldGFpbC8yNy8wLw--/RS=^ADAbJD6Nc5BaIu1cKnuIGfa5pYuiVE-\">東海道本線[東京～熱海] 列車遅延（16時05分）</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAgMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RyYW5zaXQueWFob28uY28uanAvdHJhaW5pbmZvL2RldGFpbC81OC8wLw--/RS=^ADA7NkoV9M4XDdSmyIkFEXjL0lvljM-\">常磐線(各停) 列車遅延（15時50分）</a></li></ul><p class=\"more\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAfcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3RyYW5zaXQueWFob28uY28uanAvdHJhaW5pbmZvL2djLzEzLw--/RS=^ADAMBCtKyV3O_WD68lQZyhh2mq7VMg-\">現在の運行情報（8件）</a></p></div><!-- /#pblocal -->        <div id=\"pbplan\">\n    <h3><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAjsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cHM6Ly9jYWxlbmRhci55YWhvby5jby5qcC8-/RS=^ADA7m.VCfXqx2smDN_YajfYFiDedHk-\">カレンダー</a></h3>\n</div>\n<div id=\"pbfortune\" class=\"bdlB2\">\n        <h3><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAgcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2FyaWVzLmh0bWw-/RS=^ADAnkzW.R1rAF3AN4OHVJBJ6mlxSW8-\">今日の運勢</a></h3>\n    <ul id=\"pbfDtl\">\n        <li id=\"pbfconstellation\">\n            <a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAgcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2FyaWVzLmh0bWw-/RS=^ADAnkzW.R1rAF3AN4OHVJBJ6mlxSW8-\" id=\"pbfortunebtn\" class=\"pldwn\">牡羊座</a>\n        </li>\n        <li id=\"pbfpoint\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAgcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2FyaWVzLmh0bWw-/RS=^ADAnkzW.R1rAF3AN4OHVJBJ6mlxSW8-\">94点</a></li></ul>\n        <ul id=\"pbfortunefw\" class=\"floatingw\">\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAgcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2FyaWVzLmh0bWw-/RS=^ADAnkzW.R1rAF3AN4OHVJBJ6mlxSW8-\" id=\"aries\" title=\"牡羊座\">牡羊座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAgsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL3RhdXJ1cy5odG1s/RS=^ADAoWY2r8Cxkk2oW5.Gy8XHatrl67c-\" id=\"taurus\" title=\"牡牛座\">牡牛座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAg8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2dlbWluaS5odG1s/RS=^ADAVCoX4U05IA_wvebFoKZoxbWrrJg-\" id=\"gemini\" title=\"双子座\">双子座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAhMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2NhbmNlci5odG1s/RS=^ADA2lE6sQ7gclcTCIByByq4nJqrMac-\" id=\"cancer\" title=\"蟹座\">蟹座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAhcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2xlby5odG1s/RS=^ADAOmJ0cBeam6r_zWiY2L36BLWlbJY-\" id=\"leo\" title=\"獅子座\">獅子座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAhsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL3ZpcmdvLmh0bWw-/RS=^ADAbDt0MbBFBuW8mT9PIJH.aJnoUJ8-\" id=\"virgo\" title=\"乙女座\">乙女座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAh8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2xpYnJhLmh0bWw-/RS=^ADA3Ptrn_BmZm4hriQlmM54AfdM5SE-\" id=\"libra\" title=\"天秤座\">天秤座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAiMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL3Njb3JwaW8uaHRtbA--/RS=^ADAFJZ3FLijU_Pl_k8FCfHqWBSgymQ-\" id=\"scorpio\" title=\"蠍座\">蠍座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAicIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL3NhZ2l0dGFyaXVzLmh0bWw-/RS=^ADAa4kfYUEQX03WGkWQjvUg5Zl7j90-\" id=\"sagittarius\" title=\"射手座\">射手座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAisIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2NhcHJpY29ybi5odG1s/RS=^ADAkQTx_JjewwCZnfEcLdc2hWdiPkA-\" id=\"capricorn\" title=\"山羊座\">山羊座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAi8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL2FxdWFyaXVzLmh0bWw-/RS=^ADAvpgefLJ6WncJrXLYZwE6R1taQBA-\" id=\"aquarius\" title=\"水瓶座\">水瓶座</a></li>\n        <li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAjMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvLzIwMTYwOTExL3Bpc2Nlcy5odG1s/RS=^ADAo3BamNNGV3IxGQpoS9EGYHZM49M-\" id=\"pisces\" title=\"魚座\">魚座</a></li>\n        <li class=\"ex\"><a title=\"設定しない\" id=\"nofortune\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAjcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2ZvcnR1bmUueWFob28uY28uanAvZm9ydHVuZS8xMmFzdHJvL2luZGV4Lmh0bWw-/RS=^ADAtzW0mmH.cj6hYAI5aEtibMdbrFs-\">設定しない</a></li>\n    </ul>\n</div>\n    </div>\n    <div id=\"pbalert\" class=\"bdA2\"><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAj8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2VtZy55YWhvby5jby5qcC8-/RS=^ADAPG8elifpxluM.khQ_W3sHPOh62w-\">緊急地震速報や豪雨予報をいち早くお知らせ</a></p></div>    <div id=\"pblogininfo\" class=\"bdA2\">\n<ul>\n<li class=\"point\">\n<a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAkMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3BvaW50cy55YWhvby5jby5qcC8-/RS=^ADABB01Xc5tr9bW70lLpyGCOv4_.rc-\" title=\"ポイントを確認\">ポイントを確認</a>\n</li>\n<li class=\"personalbox__ycardWrap\"><a class=\"personalbox__ycard\" href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAkcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2NhcmQueWFob28uY28uanAvc2VydmljZS9yZWRpcmVjdC8-/RS=^ADAyj3moPQmKBPEZclYExqbTkTFm3w-\" title=\"Yahoo!カード\">Yahoo!カード</a></li>\n</ul>\n</div>\n    </div>\n<div id=\"yjidbox\" class=\"bx bg2\">\n<h2><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAtMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3ByZW1pdW0ueWFob28uY28uanAv/RS=^ADAV3EwIVXIgu5RFa.0X0jVgv.q7nw-\">Yahoo!プレミアム</a></h2>\n<p class=\"more\"><a href=\"http://rdsig.yahoo.co.jp/prem/c/1/evt=103396/RV=1/RU=aHR0cDovL3NtYXJ0cGhvbmUueWFob28uY28uanAveW1vYmlsZS9zaW0vP3VpX21lZGl1bT1vd25lZCZ1aV9zb3VyY2U9cHRwMg--;_ylt=A2RA2EuRB9VXsAsAtcIFJf17\">会員なら月500円でスマホ</a></p>\n<p><a href=\"http://rdsig.yahoo.co.jp/prem/img/1/evt=103395/RV=1/RU=aHR0cDovL3ByZW1pdW0ueWFob28uY28uanAvY2FtcGFpZ24vdHBvaW50L2VudHJ5MDUvP2V4PVBfNjAwNC5DX0Mwc2l0MTEz;_ylt=A2RA2EuRB9VXsAsAtsIFJf17\"><img src=\"http://k.yimg.jp/images/premium/contents/bnr/2015/0224_shp/50x50_t.jpg\" alt=\"Yahoo!プレミアム\"></a></p>\n<ul><li><a href=\"http://rdsig.yahoo.co.jp/prem/a/1/evt=103394/RV=1/RU=aHR0cDovL3ByZW1pdW0ueWFob28uY28uanAvY2FtcGFpZ24vdHBvaW50L2VudHJ5MDUvP2V4PVBfNjAwNC5DX0Mwc2l0MTEz;_ylt=A2RA2EuRB9VXsAsAt8IFJf17\">会員＆Tカード登録で1500ポイント進呈</a></li><li><a href=\"http://rdsig.yahoo.co.jp/prem/b/1/evt=103393/RV=1/RU=aHR0cDovL3Jkc2lnLnlhaG9vLmNvLmpwL1JWPTEvUlU9YUhSMGNEb3ZMMmQ1WVc4dWVXRm9iMjh1WTI4dWFuQXZjM0JsWTJsaGJDOXdjbVZ0YVhWdFgyZDVZVzh2UDJWNFBWQmZOakF3TkM1RFgxbFVjSEpsTURBMg--;_ylt=A2RA2EuRB9VXsAsAuMIFJf17\">山田孝之の「凶悪」など人気映画が見放題に</a></li></ul>\n</div><div class=\"bx\" id=\"rightbox\" style=\"display: none;\">\n  <div id=\"yads-trb-pr\" class=\"hd\">\n    <h2>[PR]</h2>\n  </div>\n  <div id=\"yads-trb\">\n  </div>\n</div>\n<script type=\"text/javascript\">\nYAHOO = window.YAHOO || {};\nYAHOO.JP = window.YAHOO.JP || {};\nYAHOO.JP.anemos = window.YAHOO.JP.anemos || {};\nYAHOO.JP.anemos.yads = window.YAHOO.JP.anemos.yads || {};\nYAHOO.JP.anemos.yads.ytoptrb = {\n  config : {\n    ds_criteo : \"68447_20423\",\n    ds_ydn : \"98723_15862\",\n    type_criteo_ydn : \"criteo-ydn-low\",\n    type_direct_ydn : \"direct-ydn-low\",\n    ie_lower_version : 9,\n    style : {\n      \"height\" : \"17em\",\n      \"_height\" : \"21em\",\n      \"min-height\" : \"236px\"\n    }\n  },\n  isCriteo : false,\n  isCompOrLegacyIE : function() {\n    if(navigator.userAgent.toLowerCase().indexOf('msie') != -1) {\n      if(document.documentMode < YAHOO.JP.anemos.yads.ytoptrb.config.ie_lower_version) {\n        return true;\n      } else {\n        return false;\n      }\n    } else {\n      return false;\n    }\n  },\n  callYdn : function () {\n    YAHOO.JP.anemos.yads.ytoptrb.isCriteo = false;\n    var params = {\n      s : YAHOO.JP.anemos.yads.ytoptrb.config.ds_ydn,\n      type : YAHOO.JP.anemos.yads.ytoptrb.config.type_criteo_ydn,\n      p_elem : \"yads-trb\",\n      noad_cb : \"YAHOO.JP.anemos.yads.ytoptrb.eraseRightBox\",\n      enc : (document.charset || document.characterSet).toUpperCase(),\n      u : location.href,\n      sid : window.yadsInnerFuncs.findSpaceId(),\n      pv_ts : window.yadsInnerFuncs.getPvTs(),\n      fr_id : window.yadsInnerFuncs.getFrId()\n    };\n    var q = [];\n    for (var k in params) {\n      q.push(k + \"=\" + window.encodeURIComponent(params[k]));\n    }\n    var url = \"http://yads.yahoo.co.jp/oi?\" + q.join(\"&\");\n    var script = document.createElement(\"SCRIPT\");\n    script.src = url;\n    script.type = \"text/javascript\";\n    document.body.appendChild(script);\n  },\n  eraseRightBox : function () {\n    document.getElementById(\"rightbox\").style.display = \"none\";\n  },\n  setFrameStyle : function () {\n    if (!YAHOO.JP.anemos.yads.ytoptrb.isCriteo) {\n      return;\n    }\n    var ds = YAHOO.JP.anemos.yads.ytoptrb.config.ds_criteo;\n    var frames = document.getElementsByTagName(\"IFRAME\");\n    var frameNum = frames.length;\n    var frame = null;\n    for (var i = 0; i < frameNum; i++) {\n      if (frames[i].src.indexOf(\"http://i.yi\" + \"mg.jp/images/listing/tool/yads/yads-iframe-trb\") === 0\n          && frames[i].src.indexOf(ds) > 0) {\n        frame = frames[i];\n        break;\n      }\n    }\n    if (frame) {\n      var styles = [];\n      for (var s in YAHOO.JP.anemos.yads.ytoptrb.config.style) {\n        styles.push(s + \":\" + YAHOO.JP.anemos.yads.ytoptrb.config.style[s] + \";\");\n      }\n      frame.style.cssText += styles.join(\" \");\n    } else {\n      window.setTimeout(YAHOO.JP.anemos.yads.ytoptrb.setFrameStyle, 100);\n    }\n  }\n};\nif (window.postMessage\n    && !YAHOO.JP.anemos.yads.ytoptrb.isCompOrLegacyIE()\n    && YAHOO.JP.anemos.yads.ytoptrb.config.ds_criteo) {\n  yads_ad_ds = YAHOO.JP.anemos.yads.ytoptrb.config.ds_criteo;\n  yads_noad_callback = \"YAHOO.JP.anemos.yads.ytoptrb.callYdn\";\n  yads_iframe_url = \"http://i.yi\" + \"mg.jp/images/listing/tool/yads/yads-iframe-trb.html\";\n  YAHOO.JP.anemos.yads.ytoptrb.isCriteo = true;\n} else {\n  yads_ad_ds = YAHOO.JP.anemos.yads.ytoptrb.config.ds_ydn;\n  yads_noad_callback = \"YAHOO.JP.anemos.yads.ytoptrb.eraseRightBox\";\n  yads_type_tag = YAHOO.JP.anemos.yads.ytoptrb.config.type_direct_ydn;\n}\nyads_parent_element = \"yads-trb\";\nwindow.setTimeout(YAHOO.JP.anemos.yads.ytoptrb.setFrameStyle, 0);\ndocument.getElementById(\"rightbox\").style.display = \"block\";\n</script>\n<script type=\"text/javascript\" src=\"//yads.c.yimg.jp/js/yads.js\"></script>\n<!-- http://ard.yahoo.co.jp/SIG=1585nhsvc/M=300921574.301781868.303429950.300851453/D=jp_tlivez/S=2080187653:TRB/_ylt=A2RA2EuRB9VXsAsA0MEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=oKw1A2RAyFQ-/J=1473578897379031/SIG=119bul76m/A=302125500/R=0/?http://www.yahoo.co.jp/ --><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['oKw1A2RAyFQ-']='&U=13j9vbej7%2fN%3doKw1A2RAyFQ-%2fC%3d300921574.301781868.303429950.300851453%2fD%3dTRB%2fB%3d302125500';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14k6n3g2o%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d109234462%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13j9vbej7%2fN%3doKw1A2RAyFQ-%2fC%3d300921574.301781868.303429950.300851453%2fD%3dTRB%2fB%3d302125500\"></div></noscript><div id=\"scoreboard\" class=\"scoreboard bx\">\n<div class=\"hd\">\n<h2 class=\"ttl\">\n<span><span id=\"scoreTgl\" class=\"tglOpen\">開閉する</span>スコアボード</span>\n</h2>\n</div>\n<div id=\"scoreContent\" class=\"scoreContent\">\n<ul class=\"tab bdbA4\">\n<li class=\"btnWrap bdA4 bgA6 proBaseTabWrap on\"><a href=\"http://baseball.yahoo.co.jp/npb/\" id=\"proBaseTab\" class=\"btn bdrA4 proBaseTab\">プロ野球</a></li>\n<li class=\"btnWrap bdA4 bgA6 JleagueTabWrap\"><a href=\"http://soccer.yahoo.co.jp/jleague/\" id=\"JleagueTab\" class=\"btn JleagueTab\">Jリーグ</a></li>\n</ul>\n<div id=\"proBaseBall\" class=\"proBaseBall score__body\" style=\"display: block;\"><p class=\"score__date\">9月11日（日）の試合</p><table class=\"score__table\"><tbody><tr class=\"tablebdt\"><td class=\"bdA4 team1\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAl8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy8yLw--/RS=^ADAww9m.udWsbZWop36jGc7ajcbgTc-\">ヤクルト</a></td><td class=\"bdA4 gmState\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAlcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9nYW1lLzIwMTYwOTExMDIvaW5kZXg-/RS=^ADArJ4s_LMyyGK7OX3RHl5YKBfYsGM-\">予告先発</a></td><td class=\"bdA4 team2\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAmMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy81Lw--/RS=^ADAjqt2V377.2BZstyoXL_V0y.yeR4-\">阪神</a></td></tr><tr class=\"status\"><td colspan=\"3\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAlsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9nYW1lLzIwMTYwOTExMDIvaW5kZXg-/RS=^ADArJ4s_LMyyGK7OX3RHl5YKBfYsGM-\">18:00</a></td></tr><tr><td class=\"bdA4 team1\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAnMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy8xLw--/RS=^ADAHrMmKK93JX55QK2O3U6nxRLN90M-\">巨人</a></td><td class=\"bdA4 gmState\"><span class=\"score\"><span class=\"team1\">6</span> - <span class=\"team2\">0</span></span></td><td class=\"bdA4 team2\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAncIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy82Lw--/RS=^ADAJX4CApbbjJEjRo3vDM59RmHcXgk-\">広島</a></td></tr><tr class=\"status\"><td class=\"player1\"><table><tbody><tr><td class=\"position\">打者</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAmcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9MTMwMDAyNw--/RS=^ADAarBwT7vNE_eGrY_lqKfAVH4jYOA-\">小林誠</a></td></tr></tbody></table></td><td><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAm8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9nYW1lLzIwMTYwOTExMDEvaW5kZXg-/RS=^ADAqeag4a1FrYVKUvzNtatHO3N2unE-\">7回裏<span class=\"break\">速報中</span></a></td><td class=\"player2\"><table><tbody><tr><td class=\"position\">投手</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAmsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9MTUwMDA5Nw--/RS=^ADAA8eDQLTvVyrFHePPJ9SrkKoTRNs-\">オスカル</a></td></tr></tbody></table></td></tr><tr><td class=\"bdA4 team1\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAocIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy80Lw--/RS=^ADAAKnS_WDwHwhSWa88XTJIUCtahbc-\">中日</a></td><td class=\"bdA4 gmState\"><span class=\"score\"><span class=\"team1\">3</span> - <span class=\"team2\">2</span></span></td><td class=\"bdA4 team2\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAosIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy8zLw--/RS=^ADAJAH1WQQPEukEDzQFUtwbMuCBcvk-\">ＤｅＮＡ</a></td></tr><tr class=\"status\"><td class=\"player1\"><table><tbody><tr><td class=\"position\">打者</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAnsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9NjAwMDA0/RS=^ADAd3IDDArQI3HHQ7cESjR5iEFLOGo-\">平田</a></td></tr></tbody></table></td><td><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAoMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9nYW1lLzIwMTYwOTExMDMvaW5kZXg-/RS=^ADA1F.WDh5HcOvuIV2Z.oywqlJvLA8-\">8回裏<span class=\"break\">速報中</span></a></td><td class=\"player2\"><table><tbody><tr><td class=\"position\">投手</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAn8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9MTMwMDAzNw--/RS=^ADA9Huz97tsPCgT3SoY3HwOg_bKvuo-\">三上</a></td></tr></tbody></table></td></tr><tr><td class=\"bdA4 team1\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsApsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy8xMS8-/RS=^ADAVXq9dfxXPGeghWpmK.7qoMq5sIw-\">オリックス</a></td><td class=\"bdA4 gmState\"><span class=\"score\"><span class=\"team1\">3</span> - <span class=\"team2\">3</span></span></td><td class=\"bdA4 team2\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAp8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy85Lw--/RS=^ADAwhgvhJ7HHd8ku.uWbfWE2b0RVO0-\">ロッテ</a></td></tr><tr class=\"status\"><td class=\"player1\"><table><tbody><tr><td class=\"position\">投手</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAo8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9NjAwMDY2/RS=^ADAjfuUkp9gdqlTkUXc94YF0sLuxj0-\">平野</a></td></tr></tbody></table></td><td><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsApcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9nYW1lLzIwMTYwOTExMDUvaW5kZXg-/RS=^ADAK0p50pYf0QjUxryxwr3dkkglOpQ-\">9回表<span class=\"break\">速報中</span></a></td><td class=\"player2\"><table><tbody><tr><td class=\"position\">打者</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsApMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9MTEzMDI-/RS=^ADASf4o1gFw2TEF_Fab6QIjRzjHH88-\">福浦</a></td></tr></tbody></table></td></tr><tr><td class=\"bdA4 team1\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAq8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy8xMi8-/RS=^ADAh..2bn9ZnmFjxqf3tyPZx5pxlZs-\">ソフトバンク</a></td><td class=\"bdA4 gmState\"><span class=\"score\"><span class=\"team1\">8</span> - <span class=\"team2\">3</span></span></td><td class=\"bdA4 team2\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsArMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy83Lw--/RS=^ADAW8OX0YHThgxsPaADjDhGtXnVUmU-\">西武</a></td></tr><tr class=\"status\"><td class=\"player1\"><table><tbody><tr><td class=\"position\">投手</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAqMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9MTMwMDA3Nw--/RS=^ADAzkJAnm1V3XtAxUg6g2iieddOOOQ-\">森</a></td></tr></tbody></table></td><td><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAqsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9nYW1lLzIwMTYwOTExMDYvaW5kZXg-/RS=^ADA.tuGNl6aVoVK6zQsF5eziia7ax8-\">7回表<span class=\"break\">速報中</span></a></td><td class=\"player2\"><table><tbody><tr><td class=\"position\">打者</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAqcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9MTMwMDEwMQ--/RS=^ADANEpVN.2LRvs_6utqihVgZLnTzhI-\">山川</a></td></tr></tbody></table></td></tr><tr><td class=\"bdA4 team1\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAsMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy8zNzYv/RS=^ADASQojUbtso8NhDa6.e1xcpJiBPN0-\">楽天</a></td><td class=\"bdA4 gmState\"><span class=\"score\"><span class=\"team1\">9</span> - <span class=\"team2\">2</span></span></td><td class=\"bdA4 team2\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAscIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi90ZWFtcy84Lw--/RS=^ADAJyGAuiM93_o9Al8XDH.Pt0hMu.w-\">日本ハム</a></td></tr><tr class=\"status\"><td class=\"player1\"><table><tbody><tr><td class=\"position\">投手</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsArcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9MTIwMDAwOA--/RS=^ADAS1LMStuXo7J.E.hhcA1.yyvTacU-\">ミコライオ</a></td></tr></tbody></table></td><td><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAr8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9nYW1lLzIwMTYwOTExMDQvaW5kZXg-/RS=^ADAiABkL2kOpnE_zUfuyQgz0ApVHD0-\">8回表<span class=\"break\">速報中</span></a></td><td class=\"player2\"><table><tbody><tr><td class=\"position\">打者</td><td class=\"name\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsArsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi9wbGF5ZXI_aWQ9NjAwMDM3/RS=^ADAmGq2_5.jictpN3SoCcs3o8atG_g-\">陽</a></td></tr></tbody></table></td></tr></tbody></table><div class=\"bottomBox bdtA4\"><p class=\"bottomBox__pbtop\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAssIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Jhc2ViYWxsLnlhaG9vLmNvLmpwL25wYi8-/RS=^ADAoKxrLT.8oPnuU.AYi7Vp5g3TAmI-\">プロ野球トップ</a></p><p class=\"bottomBox__top\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAs8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nwb3J0cy55YWhvby5jby5qcC8-/RS=^ADAcKfVH9hayPqfn0FnRLVJMO2nZkM-\">スポーツナビ</a></p></div><!--/.bottomBox --></div><!--/.score__body--><div id=\"Jleague\" class=\"Jleague score__body\" style=\"display: none;\">\n<table class=\"score__table\">\n<tbody>\n<tr class=\"tablebdt\">\n<td colspan=\"3\" class=\"bdA4 noGame\">9月11日（日）の試合はありません　<a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAlMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NvY2Nlci55YWhvby5jby5qcC9qbGVhZ3VlL3NjaGVkdWxlL2ox/RS=^ADA7B.j6onEUcK5pSHVSItKXAqhYqI-\">試合予定</a></td>\n</tr>\n</tbody>\n</table>\n<div class=\"bottomBox bdtA4\">\n<p class=\"bottomBox__jltop\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAk8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NvY2Nlci55YWhvby5jby5qcC9qbGVhZ3VlLw--/RS=^ADAr6sDB8MMGTPCebF_I5tZ0278mEs-\">Jリーグトップ</a></p>\n<p class=\"bottomBox__top\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAksIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3Nwb3J0cy55YWhvby5jby5qcC8-/RS=^ADAcKfVH9hayPqfn0FnRLVJMO2nZkM-\">スポーツナビ</a></p>\n</div>\n</div>\n</div>\n</div>\n<!-- #qurioRanking --><div id=\"qurioRanking\" class=\"qurioRanking bx\"><div class=\"hd\"><h2>みんなに読まれたエンタメ記事</h2><em class=\"update\">15時51分更新</em></div><!-- /.hd --><div class=\"recBd\"><p>「あなたへのおすすめ」でよく読まれたエンタメ記事をご紹介。</p><ol><li class=\"item rank1\"><span class=\"label\">1</span><div class=\"recImg\"><div><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAz8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMTM3LXNwaC1lbnQ-/RS=^ADAwLqIh1P8UBmBjFBU4VfouxtaEOE-\"><img src=\"http://giwiz-quriosity.c.yimg.jp/im_siggshxb928mLAprltcUSrjqBg---y54/q/amd/20160911-00000137-sph-000-5-thumb.jpg\" alt=\"ホリエモン、高畑裕太の謝罪姿に「にらんでいるんじゃない。精神が崩壊...\"></a></div></div><div class=\"recTxt\"><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAzsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMTM3LXNwaC1lbnQ-/RS=^ADAwLqIh1P8UBmBjFBU4VfouxtaEOE-\">ホリエモン、高畑裕太の謝罪姿に「にらんでいるんじゃない。精神が崩壊...</a></p><cite class=\"cp\">スポーツ報知</cite></div></li><li class=\"item rank2\"><span class=\"label\">2</span><div class=\"recImg\"><div><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA0cIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwNTE0LXNhbnNwby1lbnQ-/RS=^ADAEBGiEpEEgWa3ymmaHfjRbOV.E_Y-\"><img src=\"http://giwiz-quriosity.c.yimg.jp/im_siggog_8ufNOeIBmmXGQfKhWkg---y54/q/amd/20160911-00000514-sanspo-000-1-view.jpg\" alt=\"松本人志、高畑裕太の絶叫謝罪に「どういう感情かわからない」\"></a></div></div><div class=\"recTxt\"><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA0MIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwNTE0LXNhbnNwby1lbnQ-/RS=^ADAEBGiEpEEgWa3ymmaHfjRbOV.E_Y-\">松本人志、高畑裕太の絶叫謝罪に「どういう感情かわからない」</a></p><cite class=\"cp\">サンケイスポーツ</cite></div></li><li class=\"item rank3\"><span class=\"label\">3</span><div class=\"recImg\"><div><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA08IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMTIwLXNwbmFubmV4LWVudA--/RS=^ADA_y9rwFFg1h4gyEKnDIp7kTYR3P0-\"><img src=\"http://giwiz-quriosity.c.yimg.jp/im_siggPkQwOXAnaJJXSAUoJ_p3vw---y54/q/amd/20160911-00000120-spnannex-000-1-thumb.jpg\" alt=\"アッコ　高畑裕太に苦言「芸能界は無理　世の中のお手伝いになる仕事を」\"></a></div></div><div class=\"recTxt\"><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA0sIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMTIwLXNwbmFubmV4LWVudA--/RS=^ADA_y9rwFFg1h4gyEKnDIp7kTYR3P0-\">アッコ　高畑裕太に苦言「芸能界は無理　世の中のお手伝いになる仕事を」</a></p><cite class=\"cp\">スポニチアネックス</cite></div></li><li class=\"item rank4\"><span class=\"label\">4</span><div class=\"recImg\"><div><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA1cIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTEwLTAwMDAwMDI0LW1hbnRhbi1lbnQ-/RS=^ADAXOLNaVts9mgGJycyYAe.lKuoT2g-\"><img src=\"http://giwiz-quriosity.c.yimg.jp/im_siggioj_OPMt5m7mzrkjaKa1Wg---x72/q/amd/20160910-00000024-mantan-000-1-view.jpg\" alt=\"＜明日のとと姉ちゃん＞9月12日　第139回　商品試験の疑惑報道に　...\"></a></div></div><div class=\"recTxt\"><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA1MIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTEwLTAwMDAwMDI0LW1hbnRhbi1lbnQ-/RS=^ADAXOLNaVts9mgGJycyYAe.lKuoT2g-\">＜明日のとと姉ちゃん＞9月12日　第139回　商品試験の疑惑報道に　...</a></p><cite class=\"cp\">まんたんウェブ</cite></div></li><li class=\"item rank5\"><span class=\"label\">5</span><div class=\"recImg\"><div><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA18IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMDIxLW12d2Fsay1tb3Zp/RS=^ADAORnbV5jk2Hujpxh.Zvu.0hleI3U-\"><img src=\"http://giwiz-quriosity.c.yimg.jp/im_sigg6GNtUzeSZiKAIcx3NB8WKg---y54/q/amd/20160911-00000021-mvwalk-000-0-thumb.jpg\" alt=\"メグ・ライアン、「プラスチック顔！」とネット騒然\"></a></div></div><div class=\"recTxt\"><p><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsA1sIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hlYWRsaW5lcy55YWhvby5jby5qcC9obD9hPTIwMTYwOTExLTAwMDAwMDIxLW12d2Fsay1tb3Zp/RS=^ADAORnbV5jk2Hujpxh.Zvu.0hleI3U-\">メグ・ライアン、「プラスチック顔！」とネット騒然</a></p><cite class=\"cp\">Movie Walker</cite></div></li></ol><script type=\"text/javascript\" language=\"JavaScript\">yads_ad_ds = '96545_46023';</script><script type=\"text/javascript\" language=\"JavaScript\" src=\"http://yads.c.yimg.jp/js/yads.js\"></script></div><!-- /.recBd --></div><!-- /#qurioRanking --><div id=\"ultra\" class=\"bx\">\n<div class=\"hd\">\n<h2>お得情報[PR]</h2>\n</div>\n<p id=\"ulimg\"><a href=\"http://ard.yahoo.co.jp/SIG=159b025cr/M=300947755.301815047.303439466.311556213/D=jp_tlivez/S=2080187653:TULT/_ylt=A2RA2EuRB9VXsAsA08EFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=pqw1A2RAyFQ-/J=1473578897379031/SIG=1408ea3q9/A=302137202/R=0/*http://rdsig.yahoo.co.jp/yjcard/pc/ultra/promo/evt=126256/RV=1/RU=aHR0cDovL2NhcmQueWFob28uY28uanAvY2FtcGFpZ24v\"><img src=\"http://ai.yimg.jp/bdv/prem/zlerzdeibubkujxahahd/fstpuyxieg1bndomjlgz/ppvu_biyybnl1tm5xm_f/0b_vkrtebj_7aoakpz9w-a.png\" width=\"72\" height=\"72\"></a></p>\n<p id=\"uldtl2\"><a href=\"http://ard.yahoo.co.jp/SIG=159b025cr/M=300947755.301815047.303439466.311556213/D=jp_tlivez/S=2080187653:TULT/_ylt=A2RA2EuRB9VXsAsA08EFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=pqw1A2RAyFQ-/J=1473578897379031/SIG=140ptqehv/A=302137202/R=1/*http://rdsig.yahoo.co.jp/yjcard/pc/ultra/promo/evt=126256/RV=1/RU=aHR0cDovL2NhcmQueWFob28uY28uanAvY2FtcGFpZ24v\">Ｔポイントをためるなら、この1枚！<br>\nYahoo! JAPANカード≪年会費永年無料≫<br>\n最大7,000円相当のＴポイント進呈</a></p>\n</div><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['pqw1A2RAyFQ-']='&U=13krqpc3d%2fN%3dpqw1A2RAyFQ-%2fC%3d300947755.301815047.303439466.311556213%2fD%3dTULT%2fB%3d302137202';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14lmnmm1a%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d3475687549%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13krqpc3d%2fN%3dpqw1A2RAyFQ-%2fC%3d300947755.301815047.303439466.311556213%2fD%3dTULT%2fB%3d302137202\"></div></noscript><div id=\"pageTop\" class=\"pageTop bgA1 bxNa\">\n<p>\n<a id=\"pageTopButton\" href=\"#\"><span class=\"upArrow\"></span>ページ上部に戻る</a>\n</p>\n</div>\n<div id=\"subfooter\" class=\"subfooter bxNa\">\n<ul class=\"connect\">\n<li class=\"first\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAucIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RvY3MueWFob28uY28uanAvaW5mby8-/RS=^ADAuQZMcsCHyoMz4P8fc9GhZxVNelM-\">会社概要</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAusIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2lyLnlhaG9vLmNvLmpwLw--/RS=^ADA.arp.IvqI0jnE0tq.gz_QGOBuJg-\">投資家情報</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAu8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2Nzci55YWhvby5jby5qcC8-/RS=^ADACy6MxxBxG93eljDr.1SV1gYGzWY-\">社会的責任</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAvMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RvY3MueWFob28uY28uanAvaW5mby9jaGFydGVyLw--/RS=^ADAGX0zE3dN3V1Eqh8z428PC22WDxw-\">企業行動憲章</a></li>\n</ul>\n<ul class=\"connect\">\n<li class=\"first\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAvcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2FkdmVydGlzaW5nLnlhaG9vLmNvLmpwLw--/RS=^ADAnJwIBwTpKBg9JYzlGwYD6o29wec-\">広告掲載について</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAvsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2hyLnlhaG9vLmNvLmpwLw--/RS=^ADAOvUWNeesFhod5AdLpzZBstCIX4o-\">採用情報</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAv8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RvY3MueWFob28uY28uanAvZG9jcy9pbmZvL3Rlcm1zLw--/RS=^ADAUitk8h5PIAh2IH2cMv0EOCyGKSo-\">利用規約</a></li>\n</ul>\n<ul class=\"connect\">\n<li class=\"first\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAwMIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RvY3MueWFob28uY28uanAvZG9jcy9wci9kaXNjbGFpbWVyLmh0bWw-/RS=^ADAtLRNi62tFjwtjx4JzdrgwsE37u0-\">免責事項</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAwcIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RvY3MueWFob28uY28uanAvaW5mby9tZWRpYXN0YXRlbWVudC8-/RS=^ADAWt3toS6tGHPBkrXgyrz1GRdY3ws-\">メディアステートメント</a></li>\n</ul>\n<ul class=\"connect\">\n<li class=\"first\"><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAwsIFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL3NlY3VyaXR5LnlhaG9vLmNvLmpwLw--/RS=^ADAJoxjUm3oYcuhhDpzwC6VcAgo_JU-\">セキュリティーの考え方</a></li><li><a href=\"http://rdsig.yahoo.co.jp/_ylt=A2RA2EuRB9VXsAsAw8IFJf17/RV=1/RE=1473665297/RH=cmRzaWcueWFob28uY28uanA-/RB=.UZiwuMd0Ebz.JVXu58sLSBlSHg-/RU=aHR0cDovL2RvY3MueWFob28uY28uanAvZG9jcy9pbmZvL3Rlcm1zL2NoYXB0ZXIxLmh0bWwjY2YybmQ-/RS=^ADAVWl3cbubgZYcpRimYHYwv911DH4-\">プライバシーポリシー</a></li>\n</ul>\n<address>Copyright (C) 2016 Yahoo Japan Corporation. All Rights Reserved.</address>\n</div>\n</div>\n</div>\n</div>\n</div>\n<hr class=\"separate\">\n<!-- SpaceID=2080187653 loc=GYJ noad -->\n<script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['pKw1A2RAyFQ-']='&U=1271rhng1%2fN%3dpKw1A2RAyFQ-%2fC%3d-1%2fD%3dGYJ%2fB%3d-1';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14l84ve52%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d2704671988%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=1271rhng1%2fN%3dpKw1A2RAyFQ-%2fC%3d-1%2fD%3dGYJ%2fB%3d-1\"></div></noscript><!-- http://ard.yahoo.co.jp/SIG=1580bluab/M=300758906.301602867.303159516.312478425/D=jp_tlivez/S=2080187653:TAG/_ylt=A2RA2EuRB9VXsAsA1MEFJf17/Y=jp/EXP=1473586097/L=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12/B=qKw1A2RAyFQ-/J=1473578897379031/SIG=1197atbee/A=301713706/R=0/?http://www.yahoo.co.jp/ --><script language=\"javascript\">\nif(window.yzq_d==null)window.yzq_d=new Object();\nwindow.yzq_d['qKw1A2RAyFQ-']='&U=13j15vbak%2fN%3dqKw1A2RAyFQ-%2fC%3d300758906.301602867.303159516.312478425%2fD%3dTAG%2fB%3d301713706';\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14lsd9l72%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3djp%2fF%3d2651436236%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791&U=13j15vbak%2fN%3dqKw1A2RAyFQ-%2fC%3d300758906.301602867.303159516.312478425%2fD%3dTAG%2fB%3d301713706\"></div></noscript></div>\n<noscript><style type=\"text/css\"><!--\n#contentbox .changepos h2{padding-left:5px}#uhdsetstart,#srchAssist,#contentbox .hd .cbbtn,#favoriteservice .assist,#sub #localfw2,#local h2.json,.navCarousel,#fbNav,#fbBd,#fbHd p,#ebkTgl,#srvcTgl,.srvcSwitch .pldwn,.iitomo-button-wrapper,#srvcLoading,#qurioRecommend,.quriosityBd,.pageTop{display:none}#fbHd p.jsoff,#local h2.jsoff{display:block}#srchMore a,#ftSrchMore a{background:none !important}#vdoFesbd{padding-bottom:10px}#vdoFesbd .item{margin-bottom:5px}#video .tabWrap,#video .tab{display:none}#video .bigTtlTxt,#video #vdoTopics{border-bottom-width:1px;border-bottom-style:solid}.financeBox .hd .ttl{color:#000}.financeBox .hd .ttl .tglClose,.financeBox .hd .ttl .tglOpen{display:none}.financeBox .hd .ttl:hover{text-decoration:none;cursor:default}.financeBox .historyTabWrap{display:none}.scoreboard .hd .ttl span{color:#000}.scoreboard .hd .ttl span .tglClose,.scoreboard .hd .ttl span .tglOpen{display:none}.scoreboard .hd .ttl span:hover{text-decoration:none;cursor:default}#serviceBox .hd span{color:#000;cursor:default}#serviceBox .hd span:hover{text-decoration:none}#videoFesBox .panelLink .itemRank{display:inline}#topicsboxbd #themefb .Theme__wrap{display:none}#topicsboxbd #themefb .Theme__exception--js{display:block}.noscriptAlert{position:relative;margin:10px 110px 5px;padding-top:10px;padding-bottom:10px;background-color:#fefac4;border:1px solid #ffcf16}.noscriptAlert__text{text-align:center;line-height:1.5}.noscriptAlert__closeButtonWrapper{position:absolute;top:5px;right:8px}.noscriptAlert__closeButton{position:relative;display:block;padding-right:20px;color:#030303;text-decoration:underline}.noscriptAlert__closeButton:after{content:\"\";position:absolute;right:0;top:0;width:17px;height:13px;background-position:0 -2816px}.noscriptAlert__logImage{position:absolute;left:0;top:0}\n--></style>\n</noscript>\n\n<script src=\"http://k.yimg.jp/images/ds/ult/toppage/rapidjp-1.0.0.js\" type=\"text/javascript\"></script>\n<script type=\"text/javascript\" src=\"http://yads.c.yimg.jp/js/yads-async.js\"></script>\n<script type=\"text/javascript\" src=\"http://k.yimg.jp/images/listing/tool/yads/yads-timeline-ex.js\"></script>\n<script type=\"text/javascript\"><!--\nYAHOO.Fp.storageFlag=0;var storageList={spotlight:\"local\",lookhard_lt:\"local\",servicebox:\"local\",quiz:\"local\",srch_hist:\"local\",\"ebook4.1\":\"local\",scoreboard_v2:\"local\",finance_tab:\"local\",video:\"local\",quriosity:\"local\"};if(typeof YAHOO.Fp.TabletEbookStorage!==\"undefined\"){storageList[YAHOO.Fp.TabletEbookStorage]=\"local\"}if(YAHOO.Fp.storageCheck()){YAHOO.Fp.storageFlag=1;YAHOO.Fp.setupStorage(storageList)};(function(){YAHOO.Fp.approach.getInstance()})();var searchTabs=new YAHOO.Fp.tabs(\"searchbox\");searchTabs.nTabMaxNum=7;searchTabs.sTxtTmp=$(\"srchtxt\").value;searchTabs.dPreTabNum=0;searchTabs.sEventName=\"\";searchTabs.changeAction(YAHOO.Fp.changeVert,{obj:searchTabs});searchTabs.setupTabs();(function(b){if($(\"ftSearchbox\")){var a=new YAHOO.Fp.tabs(\"ftSearchbox\");a.nTabMaxNum=7;a.sTxtTmp=$(\"ftSrchtxt\").value;a.dPreTabNum=0;a.sEventName=\"\";a.changeAction(YAHOO.Fp.changeVert,{obj:a});a.setupTabs()}})(window);if($(\"clr\")){var fpColor=new YAHOO.Fp.changeColor(\"clr\");fpColor.setup()};if($(\"pbwradar\")){var pbwradarULM=new YAHOO.Fp.ulm(\"pbwradar\")}if($(\"pblocal\")){var pblocalULM=new YAHOO.Fp.ulm(\"pblocal\")}if($(\"emgWarning\")){var emgWarningULM=new YAHOO.Fp.ulm(\"emgWarning\");emgWarningULM.setupULM()}if($(\"emgEvacuation\")){var emgEvacuationULM=new YAHOO.Fp.ulm(\"emgEvacuation\");emgEvacuationULM.setupULM()}if($(\"emgSedimentDisaster\")){var emgSedimentDisasterULM=new YAHOO.Fp.ulm(\"emgSedimentDisaster\");emgSedimentDisasterULM.setupULM()};(function(){if($(\"posfix\")&&$(\"qurioRecommend\")){YAHOO.Fp.posfix()}else{YAHOO.Fp.posfix.fixRightColumn=function(){}}YAHOO.Fp.scroller()})();if(YUD.get(\"spotlight\")){var splMainNum=YAHOO.Fp.splMainNum,spotlight=new YAHOO.Fp.tabs(\"spotlight\");spotlight.changeAction(YAHOO.Fp.loadPanel,{type:\"tabs\",module:\"SpotLight\",action:\"getSpotLight\",load:\"story\"});spotlight.setupTabs(splMainNum);if(YAHOO.Fp.storageFlag==1){var splNumKey=\"splNum\",splTabKey=\"splTab\";if(YAHOO.Fp.storageGet(\"spotlight\",splNumKey)==splMainNum&&YAHOO.Fp.storageGet(\"spotlight\",splTabKey)){spotlight.tabAction(0,spotlight,$(YAHOO.Fp.storageGet(\"spotlight\",splTabKey)))}else{YAHOO.Fp.storageSave(\"spotlight\",splNumKey,splMainNum);YAHOO.Fp.storageSave(\"spotlight\",splTabKey,\"\")}}};if($(\"pbdetailbg\")){var calendar=new YAHOO.Fp.calendar(\"pbcalendar\");calendar.init()};(function(b){var d=b,c=d.YAHOO||{};if(c.Fp._msconfig.disp!=1){return}var a=new c.JP.Fp.MailManager(c.Fp._msconfig);a.init()})(window);YAHOO.Fp.contentbox=new YAHOO.Fp.oContentBox();YUE.on(\"cbassistall\",\"click\",function(a){YUE.stopEvent(a);YAHOO.Fp.contentbox.toggleContentBox(0,{sAction:\"service\",sOption:\"normal\"})});YUE.on(\"cbassistedit\",\"click\",function(a){YUE.stopEvent(a);YAHOO.Fp.contentbox.toggleContentBox(0,{sAction:\"edit\",sOption:\"normal\"})});var fortunePanels=new YAHOO.Fp.panels(\"pbfortune\");fortunePanels.changeAction(YAHOO.Fp.changeFortune,{type:\"panel\",module:\"fortune\"});fortunePanels.sListTag=\"ul\";fortunePanels.dCurId=\"aries\";fortunePanels.oValue=eval(\"(\"+YAHOO.Fp._fortune_json+\")\");fortunePanels.setupPanels();var weatherULM=new YAHOO.Fp.ulm(\"pbweather\");weatherULM.setupULM();var calendarBox=new YAHOO.Fp.calendar(\"pbcalendar\");calendarBox.setupCalendar();if(!(\"ontouchstart\" in window)){if(window.navigator.userAgent.toLowerCase().indexOf(\"chrome\")!=-1&&window.navigator.userAgent.toLowerCase().indexOf(\"edge\")==-1&&window.navigator.userAgent.toLowerCase().indexOf(\"opr\")==-1&&document.getElementById(\"qurioRecommend\")==null){var prevFocusPosY=document.body.scrollTop,prevFocusPosX=document.body.scrollLeft,isChromeFirstFocusDone=false;YUE.on(\"srchtxt\",\"focus\",function(a){if(!isChromeFirstFocusDone){isChromeFirstFocusDone=true;setTimeout(function(){window.scrollTo(prevFocusPosX,prevFocusPosY)},50)}})}setTimeout(function(){$(\"srchtxt\").focus()},100)}(function(){var a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\")[0];a.async=true;a.src=\"//s.yjtag.jp/tag.js#site=2wzBV9u\";b.parentNode.insertBefore(a,b)}());(function(a){if($(\"scoreboard\")){YAHOO.Fp.scoreboard.initModule()}})(window);(function(){if(YUD.get(\"videoFesBox\")){var b=YAHOO.Fp.vdoMainNum,e=new YAHOO.Fp.tabs(\"videoFesBox\");e.changeAction(YAHOO.Fp.loadPanel,{type:\"tabs\",module:\"VideoFesBox\",action:\"getVideoFesBox\",load:\"story\"});e.setupTabs(),noTabActFlg=true;if(YAHOO.Fp.storageFlag==1){var d=\"vdoTab\";if(YAHOO.Fp.storageGet(\"video\",d)){e.tabAction(0,e,$(YAHOO.Fp.storageGet(\"video\",d)));noTabActFlg=false}else{YAHOO.Fp.storageSave(\"video\",d,\"\")}}if(noTabActFlg&&YAHOO.Fp._tabletUA){var a=YUD.get(\"recommendfb\");var f=YUD.get(\"aplstFlg1\");var c=YUD.getElementsByClassName(\"aplstInfo\",\"\",a);if(c&&f){YUD.setStyle(c,\"display\",\"inline\")}}}})();(function(a){if($(\"financeBox\")){YAHOO.Fp.Finance.initModule()}})(window);(function(a){if($(\"qurioRecommend\")){YAHOO.Fp.Quriosity.initModule()}})(window);\n//--></script>\n<noscript>\n<iframe src=\"//b.yjtag.jp/iframe?c=2wzBV9u\" width=\"1\" height=\"1\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n</noscript>\n\n<script language=\"javascript\">\nif(window.yzq_p==null)document.write(\"<scr\"+\"ipt language=javascript src=http://ai.yimg.jp/bdv/yahoo/javascript/csc/20060824/lib2obf_b11.js></scr\"+\"ipt>\");\n</script><script language=\"javascript\">\nif(window.yzq_p)yzq_p('P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14gh5acfs%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d1.1%2fW%3dJ%2fY%3djp%2fF%3d1225682100%2fH%3dYWRjdmVyPTYuNy40%2fS%3d1%2fJ%3d57D50791');\nif(window.yzq_s)yzq_s();\n</script><noscript><div style=\"position:absolute;\"><img width=1 height=1 alt=\"\" src=\"http://b11.yahoo.co.jp/b?P=1f1w6zEyNy6o.zV3USoq93KgMTEzLgAAAABSuc12&T=14llmvkdp%2fX%3d1473578897%2fE%3d2080187653%2fR%3djp_tlivez%2fK%3d5%2fV%3d3.1%2fW%3dJ%2fY%3djp%2fF%3d2031365159%2fH%3dYWRjdmVyPTYuNy40%2fQ%3d-1%2fS%3d1%2fJ%3d57D50791\"></div></noscript>\n<!-- p10.f12.top.ssk.yahoo.co.jp Sun Sep 11 16:28:17 JST 2016 -->\n\n\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3a475b44", module.exports)
  } else {
    hotAPI.update("_v-3a475b44", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../vuex/actions/action":6,"./parts.vue":4,"vue":15,"vue-hot-reload-api":12}],3:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.login-app {\n\tbackground: red;\n}\n\n")
"use strict";

var _action = require("../vuex/actions/action");

module.exports = {
  data: function data() {
    return {
      title: "ログイン!",
      element: {}
    };
  },
  ready: function ready() {
    this.$set("element.form", this.$els.form);
    this.$set("element.passInput", this.$els.pass);
  },

  vuex: {
    getters: {
      count: function count(state) {
        return state.mod1.count;
      },
      typeInput: function typeInput(state) {
        return state.validator.type;
      },
      mailError: function mailError(state) {
        return state.validator.flag.mail;
      },
      passError: function passError(state) {
        return state.validator.flag.pass;
      }
    },
    actions: {
      showPass: _action.invariedPassShow,
      variMail: _action.invariedMail,
      variPass: _action.invariedPass,
      sendAction: _action.submitSend
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"login-app\">\n\t<h2>{{title}}</h2>\n\t<form id=\"form01\" v-el:form=\"\" action=\"http://localhost/gdir/\">\n\t\t<table>\n\t\t\t<tbody><tr>\n\t\t\t\t<th>メールアドレス</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p><input @keyup=\"variMail\" type=\"text\" name=\"\" value=\"\"></p>\n\t\t\t\t\t<p v-show=\"mailError\">ちゃんと入力してね！</p>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th>パスワード</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p><input v-el:pass=\"\" @keyup=\"variPass\" type=\"{{typeInput}}\" name=\"\" value=\"\"></p>\n\t\t\t\t\t<p v-show=\"passError\">ちゃんと入力してね！</p>\n\t\t\t\t\t<p @click=\"showPass(element.passInput)\">表示</p>\n\n\t\t\t\t</td>\n\t\t\t</tr>\t\t\n\t\t</tbody></table>\n\t\t<button @click=\"sendAction($event,element.form)\" type=\"submit\">送信</button>\n\t</form>\n</div>\n<!-- /.inner -->\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.login-app {\n\tbackground: red;\n}\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-1696015d", module.exports)
  } else {
    hotAPI.update("_v-1696015d", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../vuex/actions/action":6,"vue":15,"vue-hot-reload-api":12,"vueify/lib/insert-css":16}],4:[function(require,module,exports){
"use strict";

module.exports = {
	data: function data() {
		return {
			message: "testtesttesttesttesttesttesttesttest!"
		};
	},

	ready: function ready() {},
	methods: {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"inner\">\n\t<p>{{message}}</p>\n</div>\n<!-- /.inner -->\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-547eae5c", module.exports)
  } else {
    hotAPI.update("_v-547eae5c", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":15,"vue-hot-reload-api":12}],5:[function(require,module,exports){
"use strict";

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _app = require("./component/app.vue");

var _app2 = _interopRequireDefault(_app);

var _gg = require("./component/gg.vue");

var _gg2 = _interopRequireDefault(_gg);

var _home = require("./component/home.vue");

var _home2 = _interopRequireDefault(_home);

var _parts = require("./component/parts.vue");

var _parts2 = _interopRequireDefault(_parts);

var _vueRouter = require("vue-router");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require("vue-resource");

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueAsyncData = require("vue-async-data");

var _vueAsyncData2 = _interopRequireDefault(_vueAsyncData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueAsyncData2.default);
_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default();
var root = _vue2.default.extend();

router.map({
  '/': {
    component: _home2.default
  },
  '/about': {
    component: _gg2.default
  }
});

var Test = _vue2.default.extend(_app2.default);
router.start(Test, '#appRoot');

},{"./component/app.vue":1,"./component/gg.vue":2,"./component/home.vue":3,"./component/parts.vue":4,"vue":15,"vue-async-data":11,"vue-resource":13,"vue-router":14}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var incrementCounter = exports.incrementCounter = function incrementCounter(_ref, event, m) {
	var dispatch = _ref.dispatch;
	var state = _ref.state;

	dispatch({ type: 'INCREMENT', a: event, f: m });
};
var invariedMail = exports.invariedMail = function invariedMail(_ref2, event) {
	var dispatch = _ref2.dispatch;
	var state = _ref2.state;


	dispatch({ type: 'MAIL', value: event.target.value });
};
var invariedPass = exports.invariedPass = function invariedPass(_ref3, event) {
	var dispatch = _ref3.dispatch;
	var state = _ref3.state;


	dispatch({ type: 'PASS', value: event.target.value });
};
var invariedPassShow = exports.invariedPassShow = function invariedPassShow(_ref4) {
	var dispatch = _ref4.dispatch;
	var state = _ref4.state;


	dispatch({ type: 'SHOWPASS' });
};

var submitSend = exports.submitSend = function submitSend(_ref5, event, form) {
	var dispatch = _ref5.dispatch;
	var state = _ref5.state;

	event.preventDefault();
	dispatch({ type: 'SEND', ev: event, send: form });
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var state = {
  count: 90,
  test: 'test'
};

var mutations = {
  INCREMENT: function INCREMENT(state, mutations) {
    state.count = state.count + mutations.f;
  }
};

exports.default = {
  state: state,
  mutations: mutations
};

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var state = {
	title: "ログイン",
	type: "password",
	flag: {
		mail: false,
		pass: false
	}
};

var mutations = {
	SHOWPASS: function SHOWPASS(state, mutations) {
		state.type = state.type === "password" ? "text" : "password";
	},
	MAIL: function MAIL(state, mutations) {
		if (!mutations.value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) || !mutations.value) {
			state.flag.mail = true;
			return false;
		}
		state.flag.mail = false;
	},
	PASS: function PASS(state, mutations) {
		if (!mutations.value.match(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i) || !mutations.value) {
			state.flag.pass = true;
			return false;
		}
		state.flag.pass = false;
	},
	SEND: function SEND(state, mutations) {

		var input = document.getElementsByTagName("input");
		var flag = false;

		Array.prototype.forEach.call(input, function (i, o) {
			if (!i.value) flag = true;
		});

		if (state.flag.mail || state.flag.pass || flag) {
			alert("alert");
			return false;
		}
		mutations.send.submit();
	}
};

exports.default = {
	state: state,
	mutations: mutations
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _moudule_ = require('./module/moudule_1');

var _moudule_2 = _interopRequireDefault(_moudule_);

var _validator = require('./module/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  modules: {
    mod1: _moudule_2.default,
    validator: _validator2.default
  }
});

},{"./module/moudule_1":7,"./module/validator":8,"vue":15,"vuex":17}],10:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
    try {
        cachedSetTimeout = setTimeout;
    } catch (e) {
        cachedSetTimeout = function () {
            throw new Error('setTimeout is not defined');
        }
    }
    try {
        cachedClearTimeout = clearTimeout;
    } catch (e) {
        cachedClearTimeout = function () {
            throw new Error('clearTimeout is not defined');
        }
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],11:[function(require,module,exports){
(function () {
  var vue // lazy bind

  var asyncData = {
    created: function () {
      if (!vue) {
        console.warn('[vue-async-data] not installed!')
        return
      }
      if (this.$options.asyncData) {
        if (this._defineMeta) {
          // 0.12 compat
          this._defineMeta('$loadingAsyncData', true)
        } else {
          // ^1.0.0-alpha
          vue.util.defineReactive(this, '$loadingAsyncData', true)
        }
      }
    },
    compiled: function () {
      this.reloadAsyncData()
    },
    methods: {
      reloadAsyncData: function () {
        var load = this.$options.asyncData
        if (load) {
          var self = this
          var resolve = function (data) {
            if (data) {
              for (var key in data) {
                self.$set(key, data[key])
              }
            }
            self.$loadingAsyncData = false
            self.$emit('async-data')
          }
          var reject = function (reason) {
            var msg = '[vue] async data load failed'
            if (reason instanceof Error) {
              console.warn(msg)
              throw reason
            } else {
              console.warn(msg + ': ' + reason)
            }
          }
          this.$loadingAsyncData = true
          var res = load.call(this, resolve, reject)
          if (res && typeof res.then === 'function') {
            res.then(resolve, reject)
          }
        }
      }
    }
  }

  var api = {
    mixin: asyncData,
    install: function (Vue, options) {
      vue = Vue
      Vue.options = Vue.util.mergeOptions(Vue.options, asyncData)
    }
  }

  if(typeof exports === 'object' && typeof module === 'object') {
    module.exports = api
  } else if(typeof define === 'function' && define.amd) {
    define(function () { return api })
  } else if (typeof window !== 'undefined') {
    window.VueAsyncData = api
  }
})()

},{}],12:[function(require,module,exports){
var Vue // late bind
var map = Object.create(null)
var shimmed = false
var isBrowserify = false

/**
 * Determine compatibility and apply patch.
 *
 * @param {Function} vue
 * @param {Boolean} browserify
 */

exports.install = function (vue, browserify) {
  if (shimmed) return
  shimmed = true

  Vue = vue
  isBrowserify = browserify

  exports.compatible = !!Vue.internalDirectives
  if (!exports.compatible) {
    console.warn(
      '[HMR] vue-loader hot reload is only compatible with ' +
      'Vue.js 1.0.0+.'
    )
    return
  }

  // patch view directive
  patchView(Vue.internalDirectives.component)
  console.log('[HMR] Vue component hot reload shim applied.')
  // shim router-view if present
  var routerView = Vue.elementDirective('router-view')
  if (routerView) {
    patchView(routerView)
    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
  }
}

/**
 * Shim the view directive (component or router-view).
 *
 * @param {Object} View
 */

function patchView (View) {
  var unbuild = View.unbuild
  View.unbuild = function (defer) {
    if (!this.hotUpdating) {
      var prevComponent = this.childVM && this.childVM.constructor
      removeView(prevComponent, this)
      // defer = true means we are transitioning to a new
      // Component. Register this new component to the list.
      if (defer) {
        addView(this.Component, this)
      }
    }
    // call original
    return unbuild.call(this, defer)
  }
}

/**
 * Add a component view to a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function addView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    if (!map[id]) {
      map[id] = {
        Component: Component,
        views: [],
        instances: []
      }
    }
    map[id].views.push(view)
  }
}

/**
 * Remove a component view from a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function removeView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    map[id].views.$remove(view)
  }
}

/**
 * Create a record for a hot module, which keeps track of its construcotr,
 * instnaces and views (component directives or router-views).
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  if (typeof options.el !== 'string' && typeof options.data !== 'object') {
    makeOptionsHot(id, options)
    map[id] = {
      Component: null,
      views: [],
      instances: []
    }
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  options.hotID = id
  injectHook(options, 'created', function () {
    var record = map[id]
    if (!record.Component) {
      record.Component = this.constructor
    }
    record.instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    map[id].instances.$remove(this)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

/**
 * Update a hot component.
 *
 * @param {String} id
 * @param {Object|null} newOptions
 * @param {String|null} newTemplate
 */

exports.update = function (id, newOptions, newTemplate) {
  var record = map[id]
  // force full-reload if an instance of the component is active but is not
  // managed by a view
  if (!record || (record.instances.length && !record.views.length)) {
    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
    if (!isBrowserify) {
      window.location.reload()
    } else {
      // browserify-hmr somehow sends incomplete bundle if we reload here
      return
    }
  }
  if (!isBrowserify) {
    // browserify-hmr already logs this
    console.log('[HMR] Updating component: ' + format(id))
  }
  var Component = record.Component
  // update constructor
  if (newOptions) {
    // in case the user exports a constructor
    Component = record.Component = typeof newOptions === 'function'
      ? newOptions
      : Vue.extend(newOptions)
    makeOptionsHot(id, Component.options)
  }
  if (newTemplate) {
    Component.options.template = newTemplate
  }
  // handle recursive lookup
  if (Component.options.name) {
    Component.options.components[Component.options.name] = Component
  }
  // reset constructor cached linker
  Component.linker = null
  // reload all views
  record.views.forEach(function (view) {
    updateView(view, Component)
  })
  // flush devtools
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
  }
}

/**
 * Update a component view instance
 *
 * @param {Directive} view
 * @param {Function} Component
 */

function updateView (view, Component) {
  if (!view._bound) {
    return
  }
  view.Component = Component
  view.hotUpdating = true
  // disable transitions
  view.vm._isCompiled = false
  // save state
  var state = extractState(view.childVM)
  // remount, make sure to disable keep-alive
  var keepAlive = view.keepAlive
  view.keepAlive = false
  view.mountComponent()
  view.keepAlive = keepAlive
  // restore state
  restoreState(view.childVM, state, true)
  // re-eanble transitions
  view.vm._isCompiled = true
  view.hotUpdating = false
}

/**
 * Extract state from a Vue instance.
 *
 * @param {Vue} vm
 * @return {Object}
 */

function extractState (vm) {
  return {
    cid: vm.constructor.cid,
    data: vm.$data,
    children: vm.$children.map(extractState)
  }
}

/**
 * Restore state to a reloaded Vue instance.
 *
 * @param {Vue} vm
 * @param {Object} state
 */

function restoreState (vm, state, isRoot) {
  var oldAsyncConfig
  if (isRoot) {
    // set Vue into sync mode during state rehydration
    oldAsyncConfig = Vue.config.async
    Vue.config.async = false
  }
  // actual restore
  if (isRoot || !vm._props) {
    vm.$data = state.data
  } else {
    Object.keys(state.data).forEach(function (key) {
      if (!vm._props[key]) {
        // for non-root, only restore non-props fields
        vm.$data[key] = state.data[key]
      }
    })
  }
  // verify child consistency
  var hasSameChildren = vm.$children.every(function (c, i) {
    return state.children[i] && state.children[i].cid === c.constructor.cid
  })
  if (hasSameChildren) {
    // rehydrate children
    vm.$children.forEach(function (c, i) {
      restoreState(c, state.children[i])
    })
  }
  if (isRoot) {
    Vue.config.async = oldAsyncConfig
  }
}

function format (id) {
  var match = id.match(/[^\/]+\.vue$/)
  return match ? match[0] : id
}

},{}],13:[function(require,module,exports){
/*!
 * vue-resource v0.9.3
 * https://github.com/vuejs/vue-resource
 * Released under the MIT License.
 */

'use strict';

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$2(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$2.reject = function (r) {
    return new Promise$2(function (resolve, reject) {
        reject(r);
    });
};

Promise$2.resolve = function (x) {
    return new Promise$2(function (resolve, reject) {
        resolve(x);
    });
};

Promise$2.all = function all(iterable) {
    return new Promise$2(function (resolve, reject) {
        var count = 0,
            result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$2.race = function race(iterable) {
    return new Promise$2(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$2.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p$1 = Promise$2.prototype;

p$1.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;
                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p$1.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p$1.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p$1.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$2(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p$1.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

var PromiseObj = window.Promise || Promise$2;

function Promise$1(executor, context) {

    if (executor instanceof PromiseObj) {
        this.promise = executor;
    } else {
        this.promise = new PromiseObj(executor.bind(context));
    }

    this.context = context;
}

Promise$1.all = function (iterable, context) {
    return new Promise$1(PromiseObj.all(iterable), context);
};

Promise$1.resolve = function (value, context) {
    return new Promise$1(PromiseObj.resolve(value), context);
};

Promise$1.reject = function (reason, context) {
    return new Promise$1(PromiseObj.reject(reason), context);
};

Promise$1.race = function (iterable, context) {
    return new Promise$1(PromiseObj.race(iterable), context);
};

var p = Promise$1.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new Promise$1(this.promise.then(fulfilled, rejected), this.context);
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new Promise$1(this.promise.catch(rejected), this.context);
};

p.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return PromiseObj.reject(reason);
    });
};

var debug = false;
var util = {};
var array = [];
function Util (Vue) {
    util = Vue.util;
    debug = Vue.config.debug || !Vue.config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return util.nextTick(cb, ctx);
}

function trim(str) {
    return str.replace(/^\s*|\s*$/g, '');
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isBoolean(val) {
    return val === true || val === false;
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = Promise$1.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
}

function each(obj, iterator) {

    var i, key;

    if (typeof obj.length == 'number') {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }
    });

    return target;
}

function _assign(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

function root (options, next) {

    var url = next(options);

    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
        url = options.root + '/' + url;
    }

    return url;
}

function query (options, next) {

    var urlParams = Object.keys(Url.options.params),
        query = {},
        url = next(options);

    each(options.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url),
        expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'],
        variables = [];

    return {
        vars: variables,
        expand: function (context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null,
                        values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }
                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key],
        result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

function template (options) {

    var variables = [],
        url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

var ie = document.documentMode;
var el = document.createElement('a');

function Url(url, params) {

    var self = this || {},
        options = url,
        transform;

    if (isString(url)) {
        options = { url: url, params: params };
    }

    options = merge({}, Url.options, self.$options, options);

    Url.transforms.forEach(function (handler) {
        transform = factory(handler, transform, self.$vm);
    });

    return transform(options);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transforms = [template, query, root];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [],
        escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    if (ie) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options) {
        return handler.call(vm, options, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj),
        plain = isPlainObject(obj),
        hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

function xdrClient (request) {
    return new Promise$1(function (resolve) {

        var xdr = new XDomainRequest(),
            handler = function (event) {

            var response = request.respondWith(xdr.responseText, {
                status: xdr.status,
                statusText: xdr.statusText
            });

            resolve(response);
        };

        request.abort = function () {
            return xdr.abort();
        };

        xdr.open(request.method, request.getUrl(), true);
        xdr.timeout = 0;
        xdr.onload = handler;
        xdr.onerror = handler;
        xdr.ontimeout = function () {};
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

var ORIGIN_URL = Url.parse(location.href);
var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();

function cors (request, next) {

    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
        request.crossOrigin = true;
    }

    if (request.crossOrigin) {

        if (!SUPPORTS_CORS) {
            request.client = xdrClient;
        }

        delete request.emulateHTTP;
    }

    next();
}

function crossOrigin(request) {

    var requestUrl = Url.parse(Url(request));

    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
}

function body (request, next) {

    if (request.emulateJSON && isPlainObject(request.body)) {
        request.body = Url.params(request.body);
        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (isFormData(request.body)) {
        delete request.headers['Content-Type'];
    }

    if (isPlainObject(request.body)) {
        request.body = JSON.stringify(request.body);
    }

    next(function (response) {

        var contentType = response.headers['Content-Type'];

        if (isString(contentType) && contentType.indexOf('application/json') === 0) {

            try {
                response.data = response.json();
            } catch (e) {
                response.data = null;
            }
        } else {
            response.data = response.text();
        }
    });
}

function jsonpClient (request) {
    return new Promise$1(function (resolve) {

        var name = request.jsonp || 'callback',
            callback = '_jsonp' + Math.random().toString(36).substr(2),
            body = null,
            handler,
            script;

        handler = function (event) {

            var status = 0;

            if (event.type === 'load' && body !== null) {
                status = 200;
            } else if (event.type === 'error') {
                status = 404;
            }

            resolve(request.respondWith(body, { status: status }));

            delete window[callback];
            document.body.removeChild(script);
        };

        request.params[name] = callback;

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

function jsonp (request, next) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

    next(function (response) {

        if (request.method == 'JSONP') {
            response.data = response.json();
        }
    });
}

function before (request, next) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

    next();
}

/**
 * HTTP method override Interceptor.
 */

function method (request, next) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers['X-HTTP-Method-Override'] = request.method;
        request.method = 'POST';
    }

    next();
}

function header (request, next) {

    request.method = request.method.toUpperCase();
    request.headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[request.method.toLowerCase()], request.headers);

    next();
}

/**
 * Timeout Interceptor.
 */

function timeout (request, next) {

    var timeout;

    if (request.timeout) {
        timeout = setTimeout(function () {
            request.abort();
        }, request.timeout);
    }

    next(function (response) {

        clearTimeout(timeout);
    });
}

function xhrClient (request) {
    return new Promise$1(function (resolve) {

        var xhr = new XMLHttpRequest(),
            handler = function (event) {

            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText),
                headers: parseHeaders(xhr.getAllResponseHeaders())
            });

            resolve(response);
        };

        request.abort = function () {
            return xhr.abort();
        };

        xhr.open(request.method, request.getUrl(), true);
        xhr.timeout = 0;
        xhr.onload = handler;
        xhr.onerror = handler;

        if (request.progress) {
            if (request.method === 'GET') {
                xhr.addEventListener('progress', request.progress);
            } else if (/^(POST|PUT)$/i.test(request.method)) {
                xhr.upload.addEventListener('progress', request.progress);
            }
        }

        if (request.credentials === true) {
            xhr.withCredentials = true;
        }

        each(request.headers || {}, function (value, header) {
            xhr.setRequestHeader(header, value);
        });

        xhr.send(request.getBody());
    });
}

function parseHeaders(str) {

    var headers = {},
        value,
        name,
        i;

    each(trim(str).split('\n'), function (row) {

        i = row.indexOf(':');
        name = trim(row.slice(0, i));
        value = trim(row.slice(i + 1));

        if (headers[name]) {

            if (isArray(headers[name])) {
                headers[name].push(value);
            } else {
                headers[name] = [headers[name], value];
            }
        } else {

            headers[name] = value;
        }
    });

    return headers;
}

function Client (context) {

    var reqHandlers = [sendRequest],
        resHandlers = [],
        handler;

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        return new Promise$1(function (resolve) {

            function exec() {

                handler = reqHandlers.pop();

                if (isFunction(handler)) {
                    handler.call(context, request, next);
                } else {
                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
                    next();
                }
            }

            function next(response) {

                if (isFunction(response)) {

                    resHandlers.unshift(response);
                } else if (isObject(response)) {

                    resHandlers.forEach(function (handler) {
                        response = when(response, function (response) {
                            return handler.call(context, response) || response;
                        });
                    });

                    when(response, resolve);

                    return;
                }

                exec();
            }

            exec();
        }, context);
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request, resolve) {

    var client = request.client || xhrClient;

    resolve(client(request));
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * HTTP Response.
 */

var Response = function () {
    function Response(body, _ref) {
        var url = _ref.url;
        var headers = _ref.headers;
        var status = _ref.status;
        var statusText = _ref.statusText;
        classCallCheck(this, Response);


        this.url = url;
        this.body = body;
        this.headers = headers || {};
        this.status = status || 0;
        this.statusText = statusText || '';
        this.ok = status >= 200 && status < 300;
    }

    Response.prototype.text = function text() {
        return this.body;
    };

    Response.prototype.blob = function blob() {
        return new Blob([this.body]);
    };

    Response.prototype.json = function json() {
        return JSON.parse(this.body);
    };

    return Response;
}();

var Request = function () {
    function Request(options) {
        classCallCheck(this, Request);


        this.method = 'GET';
        this.body = null;
        this.params = {};
        this.headers = {};

        assign(this, options);
    }

    Request.prototype.getUrl = function getUrl() {
        return Url(this);
    };

    Request.prototype.getBody = function getBody() {
        return this.body;
    };

    Request.prototype.respondWith = function respondWith(body, options) {
        return new Response(body, assign(options || {}, { url: this.getUrl() }));
    };

    return Request;
}();

/**
 * Service for sending network requests.
 */

var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

function Http(options) {

    var self = this || {},
        client = Client(self.$vm);

    defaults(options || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {
        client.use(handler);
    });

    return client(new Request(options)).then(function (response) {

        return response.ok ? response : Promise$1.reject(response);
    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return Promise$1.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    custom: CUSTOM_HEADERS,
    common: COMMON_HEADERS
};

Http.interceptors = [before, timeout, method, body, jsonp, header, cors];

['get', 'delete', 'head', 'jsonp'].forEach(function (method) {

    Http[method] = function (url, options) {
        return this(assign(options || {}, { url: url, method: method }));
    };
});

['post', 'put', 'patch'].forEach(function (method) {

    Http[method] = function (url, body, options) {
        return this(assign(options || {}, { url: url, method: method, body: body }));
    };
});

function Resource(url, params, actions, options) {

    var self = this || {},
        resource = {};

    actions = assign({}, Resource.actions, actions);

    each(actions, function (action, name) {

        action = merge({ url: url, params: params || {} }, options, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options = assign({}, action),
        params = {},
        body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
    }

    options.body = body;
    options.params = assign({}, options.params, params);

    return options;
}

Resource.actions = {

    get: { method: 'GET' },
    save: { method: 'POST' },
    query: { method: 'GET' },
    update: { method: 'PUT' },
    remove: { method: 'DELETE' },
    delete: { method: 'DELETE' }

};

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = Promise$1;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function () {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function () {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function () {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function () {
                var _this = this;

                return function (executor) {
                    return new Vue.Promise(executor, _this);
                };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

module.exports = plugin;
},{}],14:[function(require,module,exports){
/*!
 * vue-router v0.7.13
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.VueRouter = factory();
}(this, function () { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0, l = routeArray.length; i < l; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  function map (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  }

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  var noWarning = false;
  function warn(msg) {
    if (!noWarning && typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  function tryDecode(uri, asComponent) {
    try {
      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
    } catch (e) {
      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
    }
  }

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(callback) {
      var string = this.string,
          ch;

      for (var i = 0, l = string.length; i < l; i++) {
        ch = string.charAt(i);
        callback({ validChars: ch });
      }
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "/", repeat: true });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "", repeat: true });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar() {},
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/"),
        results = [];

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        specificity.val += '2';
        names.push(match[1]);
      } else if (segment === "") {
        results.push(new EpsilonSegment());
        specificity.val += '1';
      } else {
        results.push(new StaticSegment(segment));
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype = {
    get: function get(charSpec) {
      var nextStates = this.nextStates;

      for (var i = 0, l = nextStates.length; i < l; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      // DEBUG "Processing `" + ch + "`:"
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      // DEBUG "  " + debugState(this)
      var returned = [];

      for (var i = 0, l = nextStates.length; i < l; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }

    /** IF DEBUG
    , debug: function() {
      var charSpec = this.charSpec,
          debug = "[",
          chars = charSpec.validChars || charSpec.invalidChars;
       if (charSpec.invalidChars) { debug += "^"; }
      debug += chars;
      debug += "]";
       if (charSpec.repeat) { debug += "+"; }
       return debug;
    }
    END IF **/
  };

  /** IF DEBUG
  function debug(log) {
    console.log(log);
  }

  function debugState(state) {
    return state.nextStates.map(function(n) {
      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
    }).join(", ")
  }
  END IF **/

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      var state;

      currentState = currentState.put(ch);
    });

    return currentState;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    return tryDecode(part, true);
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = [],
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0, l = routes.length; i < l; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0, m = segments.length; j < m; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = addSegment(currentState, segment);
          regex += segment.regex();
        }

        var handler = { handler: route.handler, names: names };
        handlers.push(handler);
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name],
          result = [];
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      for (var i = 0, l = route.handlers.length; i < l; i++) {
        result.push(route.handlers[i]);
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0, l = value.length; j < l; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path, silent) {
      noWarning = silent;
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        if (queryString) {
          queryParams = this.parseQueryString(queryString);
        }
      }

      path = tryDecode(path);
      if (!path) return;

      // DEBUG GROUP path

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0, l = path.length; i < l; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      // END DEBUG GROUP

      var solutions = [];
      for (i = 0, l = states.length; i < l; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = map;

  var genQuery = RouteRecognizer.prototype.generateQueryString;

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * Warn stuff.
   *
   * @param {String} msg
   */

  function warn$1(msg) {
    /* istanbul ignore next */
    if (typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  /**
   * Resolve a relative path.
   *
   * @param {String} base
   * @param {String} relative
   * @param {Boolean} append
   * @return {String}
   */

  function resolvePath(base, relative, append) {
    var query = base.match(/(\?.*)$/);
    if (query) {
      query = query[1];
      base = base.slice(0, -query.length);
    }
    // a query!
    if (relative.charAt(0) === '?') {
      return base + relative;
    }
    var stack = base.split('/');
    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }
    // resolve relative path
    var segments = relative.replace(/^\//, '').split('/');
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        stack.pop();
      } else {
        stack.push(segment);
      }
    }
    // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }
    return stack.join('/');
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Retrive a route config field from a component instance
   * OR a component contructor.
   *
   * @param {Function|Vue} component
   * @param {String} name
   * @return {*}
   */

  function getRouteConfig(component, name) {
    var options = component && (component.$options || component.options);
    return options && options.route && options.route[name];
  }

  /**
   * Resolve an async component factory. Have to do a dirty
   * mock here because of Vue core's internal API depends on
   * an ID check.
   *
   * @param {Object} handler
   * @param {Function} cb
   */

  var resolver = undefined;

  function resolveAsyncComponent(handler, cb) {
    if (!resolver) {
      resolver = {
        resolve: exports$1.Vue.prototype._resolveComponent,
        $options: {
          components: {
            _: handler.component
          }
        }
      };
    } else {
      resolver.$options.components._ = handler.component;
    }
    resolver.resolve('_', function (Component) {
      handler.component = Component;
      cb(Component);
    });
  }

  /**
   * Map the dynamic segments in a path to params.
   *
   * @param {String} path
   * @param {Object} params
   * @param {Object} query
   */

  function mapParams(path, params, query) {
    if (params === undefined) params = {};

    path = path.replace(/:([^\/]+)/g, function (_, key) {
      var val = params[key];
      /* istanbul ignore if */
      if (!val) {
        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
      }
      return val || '';
    });
    if (query) {
      path += genQuery(query);
    }
    return path;
  }

  var hashRE = /#.*$/;

  var HTML5History = (function () {
    function HTML5History(_ref) {
      var root = _ref.root;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HTML5History);

      if (root && root !== '/') {
        // make sure there's the starting slash
        if (root.charAt(0) !== '/') {
          root = '/' + root;
        }
        // remove trailing slash
        this.root = root.replace(/\/$/, '');
        this.rootRE = new RegExp('^\\' + this.root);
      } else {
        this.root = null;
      }
      this.onChange = onChange;
      // check base tag
      var baseEl = document.querySelector('base');
      this.base = baseEl && baseEl.getAttribute('href');
    }

    HTML5History.prototype.start = function start() {
      var _this = this;

      this.listener = function (e) {
        var url = location.pathname + location.search;
        if (_this.root) {
          url = url.replace(_this.rootRE, '');
        }
        _this.onChange(url, e && e.state, location.hash);
      };
      window.addEventListener('popstate', this.listener);
      this.listener();
    };

    HTML5History.prototype.stop = function stop() {
      window.removeEventListener('popstate', this.listener);
    };

    HTML5History.prototype.go = function go(path, replace, append) {
      var url = this.formatPath(path, append);
      if (replace) {
        history.replaceState({}, '', url);
      } else {
        // record scroll position by replacing current state
        history.replaceState({
          pos: {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        }, '', location.href);
        // then push new state
        history.pushState({}, '', url);
      }
      var hashMatch = path.match(hashRE);
      var hash = hashMatch && hashMatch[0];
      path = url
      // strip hash so it doesn't mess up params
      .replace(hashRE, '')
      // remove root before matching
      .replace(this.rootRE, '');
      this.onChange(path, null, hash);
    };

    HTML5History.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/'
      // absolute path
      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
    };

    return HTML5History;
  })();

  var HashHistory = (function () {
    function HashHistory(_ref) {
      var hashbang = _ref.hashbang;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HashHistory);

      this.hashbang = hashbang;
      this.onChange = onChange;
    }

    HashHistory.prototype.start = function start() {
      var self = this;
      this.listener = function () {
        var path = location.hash;
        var raw = path.replace(/^#!?/, '');
        // always
        if (raw.charAt(0) !== '/') {
          raw = '/' + raw;
        }
        var formattedPath = self.formatPath(raw);
        if (formattedPath !== path) {
          location.replace(formattedPath);
          return;
        }
        // determine query
        // note it's possible to have queries in both the actual URL
        // and the hash fragment itself.
        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
        self.onChange(path.replace(/^#!?/, '') + query);
      };
      window.addEventListener('hashchange', this.listener);
      this.listener();
    };

    HashHistory.prototype.stop = function stop() {
      window.removeEventListener('hashchange', this.listener);
    };

    HashHistory.prototype.go = function go(path, replace, append) {
      path = this.formatPath(path, append);
      if (replace) {
        location.replace(path);
      } else {
        location.hash = path;
      }
    };

    HashHistory.prototype.formatPath = function formatPath(path, append) {
      var isAbsoloute = path.charAt(0) === '/';
      var prefix = '#' + (this.hashbang ? '!' : '');
      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
    };

    return HashHistory;
  })();

  var AbstractHistory = (function () {
    function AbstractHistory(_ref) {
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, AbstractHistory);

      this.onChange = onChange;
      this.currentPath = '/';
    }

    AbstractHistory.prototype.start = function start() {
      this.onChange('/');
    };

    AbstractHistory.prototype.stop = function stop() {
      // noop
    };

    AbstractHistory.prototype.go = function go(path, replace, append) {
      path = this.currentPath = this.formatPath(path, append);
      this.onChange(path);
    };

    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
    };

    return AbstractHistory;
  })();

  /**
   * Determine the reusability of an existing router view.
   *
   * @param {Directive} view
   * @param {Object} handler
   * @param {Transition} transition
   */

  function canReuse(view, handler, transition) {
    var component = view.childVM;
    if (!component || !handler) {
      return false;
    }
    // important: check view.Component here because it may
    // have been changed in activate hook
    if (view.Component !== handler.component) {
      return false;
    }
    var canReuseFn = getRouteConfig(component, 'canReuse');
    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
      to: transition.to,
      from: transition.from
    }) : true; // defaults to true
  }

  /**
   * Check if a component can deactivate.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function canDeactivate(view, transition, next) {
    var fromComponent = view.childVM;
    var hook = getRouteConfig(fromComponent, 'canDeactivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, fromComponent, next, {
        expectBoolean: true
      });
    }
  }

  /**
   * Check if a component can activate.
   *
   * @param {Object} handler
   * @param {Transition} transition
   * @param {Function} next
   */

  function canActivate(handler, transition, next) {
    resolveAsyncComponent(handler, function (Component) {
      // have to check due to async-ness
      if (transition.aborted) {
        return;
      }
      // determine if this component can be activated
      var hook = getRouteConfig(Component, 'canActivate');
      if (!hook) {
        next();
      } else {
        transition.callHook(hook, null, next, {
          expectBoolean: true
        });
      }
    });
  }

  /**
   * Call deactivate hooks for existing router-views.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function deactivate(view, transition, next) {
    var component = view.childVM;
    var hook = getRouteConfig(component, 'deactivate');
    if (!hook) {
      next();
    } else {
      transition.callHooks(hook, component, next);
    }
  }

  /**
   * Activate / switch component for a router-view.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Number} depth
   * @param {Function} [cb]
   */

  function activate(view, transition, depth, cb, reuse) {
    var handler = transition.activateQueue[depth];
    if (!handler) {
      saveChildView(view);
      if (view._bound) {
        view.setComponent(null);
      }
      cb && cb();
      return;
    }

    var Component = view.Component = handler.component;
    var activateHook = getRouteConfig(Component, 'activate');
    var dataHook = getRouteConfig(Component, 'data');
    var waitForData = getRouteConfig(Component, 'waitForData');

    view.depth = depth;
    view.activated = false;

    var component = undefined;
    var loading = !!(dataHook && !waitForData);

    // "reuse" is a flag passed down when the parent view is
    // either reused via keep-alive or as a child of a kept-alive view.
    // of course we can only reuse if the current kept-alive instance
    // is of the correct type.
    reuse = reuse && view.childVM && view.childVM.constructor === Component;

    if (reuse) {
      // just reuse
      component = view.childVM;
      component.$loadingRouteData = loading;
    } else {
      saveChildView(view);

      // unbuild current component. this step also destroys
      // and removes all nested child views.
      view.unbuild(true);

      // build the new component. this will also create the
      // direct child view of the current one. it will register
      // itself as view.childView.
      component = view.build({
        _meta: {
          $loadingRouteData: loading
        },
        created: function created() {
          this._routerView = view;
        }
      });

      // handle keep-alive.
      // when a kept-alive child vm is restored, we need to
      // add its cached child views into the router's view list,
      // and also properly update current view's child view.
      if (view.keepAlive) {
        component.$loadingRouteData = loading;
        var cachedChildView = component._keepAliveRouterView;
        if (cachedChildView) {
          view.childView = cachedChildView;
          component._keepAliveRouterView = null;
        }
      }
    }

    // cleanup the component in case the transition is aborted
    // before the component is ever inserted.
    var cleanup = function cleanup() {
      component.$destroy();
    };

    // actually insert the component and trigger transition
    var insert = function insert() {
      if (reuse) {
        cb && cb();
        return;
      }
      var router = transition.router;
      if (router._rendered || router._transitionOnLoad) {
        view.transition(component);
      } else {
        // no transition on first render, manual transition
        /* istanbul ignore if */
        if (view.setCurrent) {
          // 0.12 compat
          view.setCurrent(component);
        } else {
          // 1.0
          view.childVM = component;
        }
        component.$before(view.anchor, null, false);
      }
      cb && cb();
    };

    var afterData = function afterData() {
      // activate the child view
      if (view.childView) {
        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
      }
      insert();
    };

    // called after activation hook is resolved
    var afterActivate = function afterActivate() {
      view.activated = true;
      if (dataHook && waitForData) {
        // wait until data loaded to insert
        loadData(component, transition, dataHook, afterData, cleanup);
      } else {
        // load data and insert at the same time
        if (dataHook) {
          loadData(component, transition, dataHook);
        }
        afterData();
      }
    };

    if (activateHook) {
      transition.callHooks(activateHook, component, afterActivate, {
        cleanup: cleanup,
        postActivate: true
      });
    } else {
      afterActivate();
    }
  }

  /**
   * Reuse a view, just reload data if necessary.
   *
   * @param {Directive} view
   * @param {Transition} transition
   */

  function reuse(view, transition) {
    var component = view.childVM;
    var dataHook = getRouteConfig(component, 'data');
    if (dataHook) {
      loadData(component, transition, dataHook);
    }
  }

  /**
   * Asynchronously load and apply data to component.
   *
   * @param {Vue} component
   * @param {Transition} transition
   * @param {Function} hook
   * @param {Function} cb
   * @param {Function} cleanup
   */

  function loadData(component, transition, hook, cb, cleanup) {
    component.$loadingRouteData = true;
    transition.callHooks(hook, component, function () {
      component.$loadingRouteData = false;
      component.$emit('route-data-loaded', component);
      cb && cb();
    }, {
      cleanup: cleanup,
      postActivate: true,
      processData: function processData(data) {
        // handle promise sugar syntax
        var promises = [];
        if (isPlainObject(data)) {
          Object.keys(data).forEach(function (key) {
            var val = data[key];
            if (isPromise(val)) {
              promises.push(val.then(function (resolvedVal) {
                component.$set(key, resolvedVal);
              }));
            } else {
              component.$set(key, val);
            }
          });
        }
        if (promises.length) {
          return promises[0].constructor.all(promises);
        }
      }
    });
  }

  /**
   * Save the child view for a kept-alive view so that
   * we can restore it when it is switched back to.
   *
   * @param {Directive} view
   */

  function saveChildView(view) {
    if (view.keepAlive && view.childVM && view.childView) {
      view.childVM._keepAliveRouterView = view.childView;
    }
    view.childView = null;
  }

  /**
   * Check plain object.
   *
   * @param {*} val
   */

  function isPlainObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  /**
   * A RouteTransition object manages the pipeline of a
   * router-view switching process. This is also the object
   * passed into user route hooks.
   *
   * @param {Router} router
   * @param {Route} to
   * @param {Route} from
   */

  var RouteTransition = (function () {
    function RouteTransition(router, to, from) {
      babelHelpers.classCallCheck(this, RouteTransition);

      this.router = router;
      this.to = to;
      this.from = from;
      this.next = null;
      this.aborted = false;
      this.done = false;
    }

    /**
     * Abort current transition and return to previous location.
     */

    RouteTransition.prototype.abort = function abort() {
      if (!this.aborted) {
        this.aborted = true;
        // if the root path throws an error during validation
        // on initial load, it gets caught in an infinite loop.
        var abortingOnLoad = !this.from.path && this.to.path === '/';
        if (!abortingOnLoad) {
          this.router.replace(this.from.path || '/');
        }
      }
    };

    /**
     * Abort current transition and redirect to a new location.
     *
     * @param {String} path
     */

    RouteTransition.prototype.redirect = function redirect(path) {
      if (!this.aborted) {
        this.aborted = true;
        if (typeof path === 'string') {
          path = mapParams(path, this.to.params, this.to.query);
        } else {
          path.params = path.params || this.to.params;
          path.query = path.query || this.to.query;
        }
        this.router.replace(path);
      }
    };

    /**
     * A router view transition's pipeline can be described as
     * follows, assuming we are transitioning from an existing
     * <router-view> chain [Component A, Component B] to a new
     * chain [Component A, Component C]:
     *
     *  A    A
     *  | => |
     *  B    C
     *
     * 1. Reusablity phase:
     *   -> canReuse(A, A)
     *   -> canReuse(B, C)
     *   -> determine new queues:
     *      - deactivation: [B]
     *      - activation: [C]
     *
     * 2. Validation phase:
     *   -> canDeactivate(B)
     *   -> canActivate(C)
     *
     * 3. Activation phase:
     *   -> deactivate(B)
     *   -> activate(C)
     *
     * Each of these steps can be asynchronous, and any
     * step can potentially abort the transition.
     *
     * @param {Function} cb
     */

    RouteTransition.prototype.start = function start(cb) {
      var transition = this;

      // determine the queue of views to deactivate
      var deactivateQueue = [];
      var view = this.router._rootView;
      while (view) {
        deactivateQueue.unshift(view);
        view = view.childView;
      }
      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

      // determine the queue of route handlers to activate
      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
        return match.handler;
      });

      // 1. Reusability phase
      var i = undefined,
          reuseQueue = undefined;
      for (i = 0; i < reverseDeactivateQueue.length; i++) {
        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
          break;
        }
      }
      if (i > 0) {
        reuseQueue = reverseDeactivateQueue.slice(0, i);
        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
        activateQueue = activateQueue.slice(i);
      }

      // 2. Validation phase
      transition.runQueue(deactivateQueue, canDeactivate, function () {
        transition.runQueue(activateQueue, canActivate, function () {
          transition.runQueue(deactivateQueue, deactivate, function () {
            // 3. Activation phase

            // Update router current route
            transition.router._onTransitionValidated(transition);

            // trigger reuse for all reused views
            reuseQueue && reuseQueue.forEach(function (view) {
              return reuse(view, transition);
            });

            // the root of the chain that needs to be replaced
            // is the top-most non-reusable view.
            if (deactivateQueue.length) {
              var _view = deactivateQueue[deactivateQueue.length - 1];
              var depth = reuseQueue ? reuseQueue.length : 0;
              activate(_view, transition, depth, cb);
            } else {
              cb();
            }
          });
        });
      });
    };

    /**
     * Asynchronously and sequentially apply a function to a
     * queue.
     *
     * @param {Array} queue
     * @param {Function} fn
     * @param {Function} cb
     */

    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
      var transition = this;
      step(0);
      function step(index) {
        if (index >= queue.length) {
          cb();
        } else {
          fn(queue[index], transition, function () {
            step(index + 1);
          });
        }
      }
    };

    /**
     * Call a user provided route transition hook and handle
     * the response (e.g. if the user returns a promise).
     *
     * If the user neither expects an argument nor returns a
     * promise, the hook is assumed to be synchronous.
     *
     * @param {Function} hook
     * @param {*} [context]
     * @param {Function} [cb]
     * @param {Object} [options]
     *                 - {Boolean} expectBoolean
     *                 - {Boolean} postActive
     *                 - {Function} processData
     *                 - {Function} cleanup
     */

    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      var _ref$expectBoolean = _ref.expectBoolean;
      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
      var _ref$postActivate = _ref.postActivate;
      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
      var processData = _ref.processData;
      var cleanup = _ref.cleanup;

      var transition = this;
      var nextCalled = false;

      // abort the transition
      var abort = function abort() {
        cleanup && cleanup();
        transition.abort();
      };

      // handle errors
      var onError = function onError(err) {
        postActivate ? next() : abort();
        if (err && !transition.router._suppress) {
          warn$1('Uncaught error during transition: ');
          throw err instanceof Error ? err : new Error(err);
        }
      };

      // since promise swallows errors, we have to
      // throw it in the next tick...
      var onPromiseError = function onPromiseError(err) {
        try {
          onError(err);
        } catch (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
      };

      // advance the transition to the next step
      var next = function next() {
        if (nextCalled) {
          warn$1('transition.next() should be called only once.');
          return;
        }
        nextCalled = true;
        if (transition.aborted) {
          cleanup && cleanup();
          return;
        }
        cb && cb();
      };

      var nextWithBoolean = function nextWithBoolean(res) {
        if (typeof res === 'boolean') {
          res ? next() : abort();
        } else if (isPromise(res)) {
          res.then(function (ok) {
            ok ? next() : abort();
          }, onPromiseError);
        } else if (!hook.length) {
          next();
        }
      };

      var nextWithData = function nextWithData(data) {
        var res = undefined;
        try {
          res = processData(data);
        } catch (err) {
          return onError(err);
        }
        if (isPromise(res)) {
          res.then(next, onPromiseError);
        } else {
          next();
        }
      };

      // expose a clone of the transition object, so that each
      // hook gets a clean copy and prevent the user from
      // messing with the internals.
      var exposed = {
        to: transition.to,
        from: transition.from,
        abort: abort,
        next: processData ? nextWithData : next,
        redirect: function redirect() {
          transition.redirect.apply(transition, arguments);
        }
      };

      // actually call the hook
      var res = undefined;
      try {
        res = hook.call(context, exposed);
      } catch (err) {
        return onError(err);
      }

      if (expectBoolean) {
        // boolean hooks
        nextWithBoolean(res);
      } else if (isPromise(res)) {
        // promise
        if (processData) {
          res.then(nextWithData, onPromiseError);
        } else {
          res.then(next, onPromiseError);
        }
      } else if (processData && isPlainOjbect(res)) {
        // data promise sugar
        nextWithData(res);
      } else if (!hook.length) {
        next();
      }
    };

    /**
     * Call a single hook or an array of async hooks in series.
     *
     * @param {Array} hooks
     * @param {*} context
     * @param {Function} cb
     * @param {Object} [options]
     */

    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
      var _this = this;

      if (Array.isArray(hooks)) {
        this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, next, options);
          }
        }, cb);
      } else {
        this.callHook(hooks, context, cb, options);
      }
    };

    return RouteTransition;
  })();

  function isPlainOjbect(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  function toArray(val) {
    return val ? Array.prototype.slice.call(val) : [];
  }

  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

  /**
   * Route Context Object
   *
   * @param {String} path
   * @param {Router} router
   */

  var Route = function Route(path, router) {
    var _this = this;

    babelHelpers.classCallCheck(this, Route);

    var matched = router._recognizer.recognize(path);
    if (matched) {
      // copy all custom fields from route configs
      [].forEach.call(matched, function (match) {
        for (var key in match.handler) {
          if (!internalKeysRE.test(key)) {
            _this[key] = match.handler[key];
          }
        }
      });
      // set query and params
      this.query = matched.queryParams;
      this.params = [].reduce.call(matched, function (prev, cur) {
        if (cur.params) {
          for (var key in cur.params) {
            prev[key] = cur.params[key];
          }
        }
        return prev;
      }, {});
    }
    // expose path and router
    this.path = path;
    // for internal use
    this.matched = matched || router._notFoundHandler;
    // internal reference to router
    Object.defineProperty(this, 'router', {
      enumerable: false,
      value: router
    });
    // Important: freeze self to prevent observation
    Object.freeze(this);
  };

  function applyOverride (Vue) {
    var _Vue$util = Vue.util;
    var extend = _Vue$util.extend;
    var isArray = _Vue$util.isArray;
    var defineReactive = _Vue$util.defineReactive;

    // override Vue's init and destroy process to keep track of router instances
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      options = options || {};
      var root = options._parent || options.parent || this;
      var router = root.$router;
      var route = root.$route;
      if (router) {
        // expose router
        this.$router = router;
        router._children.push(this);
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          defineReactive(this, '$route', route);
        }
      }
      init.call(this, options);
    };

    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      if (!this._isBeingDestroyed && this.$router) {
        this.$router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    };

    // 1.0 only: enable route mixins
    var strats = Vue.config.optionMergeStrategies;
    var hooksToMergeRE = /^(data|activate|deactivate)$/;

    if (strats) {
      strats.route = function (parentVal, childVal) {
        if (!childVal) return parentVal;
        if (!parentVal) return childVal;
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var a = ret[key];
          var b = childVal[key];
          // for data, activate and deactivate, we need to merge them into
          // arrays similar to lifecycle hooks.
          if (a && hooksToMergeRE.test(key)) {
            ret[key] = (isArray(a) ? a : [a]).concat(b);
          } else {
            ret[key] = b;
          }
        }
        return ret;
      };
    }
  }

  function View (Vue) {

    var _ = Vue.util;
    var componentDef =
    // 0.12
    Vue.directive('_component') ||
    // 1.0
    Vue.internalDirectives.component;
    // <router-view> extends the internal component directive
    var viewDef = _.extend({}, componentDef);

    // with some overrides
    _.extend(viewDef, {

      _isRouterView: true,

      bind: function bind() {
        var route = this.vm.$route;
        /* istanbul ignore if */
        if (!route) {
          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
          return;
        }
        // force dynamic directive so v-component doesn't
        // attempt to build right now
        this._isDynamicLiteral = true;
        // finally, init by delegating to v-component
        componentDef.bind.call(this);

        // locate the parent view
        var parentView = undefined;
        var parent = this.vm;
        while (parent) {
          if (parent._routerView) {
            parentView = parent._routerView;
            break;
          }
          parent = parent.$parent;
        }
        if (parentView) {
          // register self as a child of the parent view,
          // instead of activating now. This is so that the
          // child's activate hook is called after the
          // parent's has resolved.
          this.parentView = parentView;
          parentView.childView = this;
        } else {
          // this is the root view!
          var router = route.router;
          router._rootView = this;
        }

        // handle late-rendered view
        // two possibilities:
        // 1. root view rendered after transition has been
        //    validated;
        // 2. child view rendered after parent view has been
        //    activated.
        var transition = route.router._currentTransition;
        if (!parentView && transition.done || parentView && parentView.activated) {
          var depth = parentView ? parentView.depth + 1 : 0;
          activate(this, transition, depth);
        }
      },

      unbind: function unbind() {
        if (this.parentView) {
          this.parentView.childView = null;
        }
        componentDef.unbind.call(this);
      }
    });

    Vue.elementDirective('router-view', viewDef);
  }

  var trailingSlashRE = /\/$/;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var queryStringRE = /\?.*$/;

  // install v-link, which provides navigation support for
  // HTML5 history mode
  function Link (Vue) {
    var _Vue$util = Vue.util;
    var _bind = _Vue$util.bind;
    var isObject = _Vue$util.isObject;
    var addClass = _Vue$util.addClass;
    var removeClass = _Vue$util.removeClass;

    var onPriority = Vue.directive('on').priority;
    var LINK_UPDATE = '__vue-router-link-update__';

    var activeId = 0;

    Vue.directive('link-active', {
      priority: 9999,
      bind: function bind() {
        var _this = this;

        var id = String(activeId++);
        // collect v-links contained within this element.
        // we need do this here before the parent-child relationship
        // gets messed up by terminal directives (if, for, components)
        var childLinks = this.el.querySelectorAll('[v-link]');
        for (var i = 0, l = childLinks.length; i < l; i++) {
          var link = childLinks[i];
          var existingId = link.getAttribute(LINK_UPDATE);
          var value = existingId ? existingId + ',' + id : id;
          // leave a mark on the link element which can be persisted
          // through fragment clones.
          link.setAttribute(LINK_UPDATE, value);
        }
        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
          if (link.activeIds.indexOf(id) > -1) {
            link.updateClasses(path, _this.el);
          }
        });
      },
      unbind: function unbind() {
        this.vm.$off(LINK_UPDATE, this.cb);
      }
    });

    Vue.directive('link', {
      priority: onPriority - 2,

      bind: function bind() {
        var vm = this.vm;
        /* istanbul ignore if */
        if (!vm.$route) {
          warn$1('v-link can only be used inside a router-enabled app.');
          return;
        }
        this.router = vm.$route.router;
        // update things when the route changes
        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
        // check v-link-active ids
        var activeIds = this.el.getAttribute(LINK_UPDATE);
        if (activeIds) {
          this.el.removeAttribute(LINK_UPDATE);
          this.activeIds = activeIds.split(',');
        }
        // no need to handle click if link expects to be opened
        // in a new window/tab.
        /* istanbul ignore if */
        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
          return;
        }
        // handle click
        this.handler = _bind(this.onClick, this);
        this.el.addEventListener('click', this.handler);
      },

      update: function update(target) {
        this.target = target;
        if (isObject(target)) {
          this.append = target.append;
          this.exact = target.exact;
          this.prevActiveClass = this.activeClass;
          this.activeClass = target.activeClass;
        }
        this.onRouteUpdate(this.vm.$route);
      },

      onClick: function onClick(e) {
        // don't redirect with control keys
        /* istanbul ignore if */
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        /* istanbul ignore if */
        if (e.defaultPrevented) return;
        // don't redirect on right click
        /* istanbul ignore if */
        if (e.button !== 0) return;

        var target = this.target;
        if (target) {
          // v-link with expression, just go
          e.preventDefault();
          this.router.go(target);
        } else {
          // no expression, delegate for an <a> inside
          var el = e.target;
          while (el.tagName !== 'A' && el !== this.el) {
            el = el.parentNode;
          }
          if (el.tagName === 'A' && sameOrigin(el)) {
            e.preventDefault();
            var path = el.pathname;
            if (this.router.history.root) {
              path = path.replace(this.router.history.rootRE, '');
            }
            this.router.go({
              path: path,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      },

      onRouteUpdate: function onRouteUpdate(route) {
        // router.stringifyPath is dependent on current route
        // and needs to be called again whenver route changes.
        var newPath = this.router.stringifyPath(this.target);
        if (this.path !== newPath) {
          this.path = newPath;
          this.updateActiveMatch();
          this.updateHref();
        }
        if (this.activeIds) {
          this.vm.$emit(LINK_UPDATE, this, route.path);
        } else {
          this.updateClasses(route.path, this.el);
        }
      },

      updateActiveMatch: function updateActiveMatch() {
        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      },

      updateHref: function updateHref() {
        if (this.el.tagName !== 'A') {
          return;
        }
        var path = this.path;
        var router = this.router;
        var isAbsolute = path.charAt(0) === '/';
        // do not format non-hash relative paths
        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      },

      updateClasses: function updateClasses(path, el) {
        var activeClass = this.activeClass || this.router._linkActiveClass;
        // clear old class
        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
          toggleClasses(el, this.prevActiveClass, removeClass);
        }
        // remove query string before matching
        var dest = this.path.replace(queryStringRE, '');
        path = path.replace(queryStringRE, '');
        // add new class
        if (this.exact) {
          if (dest === path ||
          // also allow additional trailing slash
          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        } else {
          if (this.activeRE && this.activeRE.test(path)) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        }
      },

      unbind: function unbind() {
        this.el.removeEventListener('click', this.handler);
        this.unwatch && this.unwatch();
      }
    });

    function sameOrigin(link) {
      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
    }

    // this function is copied from v-bind:class implementation until
    // we properly expose it...
    function toggleClasses(el, key, fn) {
      key = key.trim();
      if (key.indexOf(' ') === -1) {
        fn(el, key);
        return;
      }
      var keys = key.split(/\s+/);
      for (var i = 0, l = keys.length; i < l; i++) {
        fn(el, keys[i]);
      }
    }
  }

  var historyBackends = {
    abstract: AbstractHistory,
    hash: HashHistory,
    html5: HTML5History
  };

  // late bind during install
  var Vue = undefined;

  /**
   * Router constructor
   *
   * @param {Object} [options]
   */

  var Router = (function () {
    function Router() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$hashbang = _ref.hashbang;
      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
      var _ref$abstract = _ref.abstract;
      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
      var _ref$history = _ref.history;
      var history = _ref$history === undefined ? false : _ref$history;
      var _ref$saveScrollPosition = _ref.saveScrollPosition;
      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
      var _ref$transitionOnLoad = _ref.transitionOnLoad;
      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
      var _ref$suppressTransitionError = _ref.suppressTransitionError;
      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
      var _ref$root = _ref.root;
      var root = _ref$root === undefined ? null : _ref$root;
      var _ref$linkActiveClass = _ref.linkActiveClass;
      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
      babelHelpers.classCallCheck(this, Router);

      /* istanbul ignore if */
      if (!Router.installed) {
        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
      }

      // Vue instances
      this.app = null;
      this._children = [];

      // route recognizer
      this._recognizer = new RouteRecognizer();
      this._guardRecognizer = new RouteRecognizer();

      // state
      this._started = false;
      this._startCb = null;
      this._currentRoute = {};
      this._currentTransition = null;
      this._previousTransition = null;
      this._notFoundHandler = null;
      this._notFoundRedirect = null;
      this._beforeEachHooks = [];
      this._afterEachHooks = [];

      // trigger transition on initial render?
      this._rendered = false;
      this._transitionOnLoad = transitionOnLoad;

      // history mode
      this._root = root;
      this._abstract = abstract;
      this._hashbang = hashbang;

      // check if HTML5 history is available
      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
      this._history = history && hasPushState;
      this._historyFallback = history && !hasPushState;

      // create history object
      var inBrowser = Vue.util.inBrowser;
      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

      var History = historyBackends[this.mode];
      this.history = new History({
        root: root,
        hashbang: this._hashbang,
        onChange: function onChange(path, state, anchor) {
          _this._match(path, state, anchor);
        }
      });

      // other options
      this._saveScrollPosition = saveScrollPosition;
      this._linkActiveClass = linkActiveClass;
      this._suppress = suppressTransitionError;
    }

    /**
     * Allow directly passing components to a route
     * definition.
     *
     * @param {String} path
     * @param {Object} handler
     */

    // API ===================================================

    /**
    * Register a map of top-level paths.
    *
    * @param {Object} map
    */

    Router.prototype.map = function map(_map) {
      for (var route in _map) {
        this.on(route, _map[route]);
      }
      return this;
    };

    /**
     * Register a single root-level path
     *
     * @param {String} rootPath
     * @param {Object} handler
     *                 - {String} component
     *                 - {Object} [subRoutes]
     *                 - {Boolean} [forceRefresh]
     *                 - {Function} [before]
     *                 - {Function} [after]
     */

    Router.prototype.on = function on(rootPath, handler) {
      if (rootPath === '*') {
        this._notFound(handler);
      } else {
        this._addRoute(rootPath, handler, []);
      }
      return this;
    };

    /**
     * Set redirects.
     *
     * @param {Object} map
     */

    Router.prototype.redirect = function redirect(map) {
      for (var path in map) {
        this._addRedirect(path, map[path]);
      }
      return this;
    };

    /**
     * Set aliases.
     *
     * @param {Object} map
     */

    Router.prototype.alias = function alias(map) {
      for (var path in map) {
        this._addAlias(path, map[path]);
      }
      return this;
    };

    /**
     * Set global before hook.
     *
     * @param {Function} fn
     */

    Router.prototype.beforeEach = function beforeEach(fn) {
      this._beforeEachHooks.push(fn);
      return this;
    };

    /**
     * Set global after hook.
     *
     * @param {Function} fn
     */

    Router.prototype.afterEach = function afterEach(fn) {
      this._afterEachHooks.push(fn);
      return this;
    };

    /**
     * Navigate to a given path.
     * The path can be an object describing a named path in
     * the format of { name: '...', params: {}, query: {}}
     * The path is assumed to be already decoded, and will
     * be resolved against root (if provided)
     *
     * @param {String|Object} path
     * @param {Boolean} [replace]
     */

    Router.prototype.go = function go(path) {
      var replace = false;
      var append = false;
      if (Vue.util.isObject(path)) {
        replace = path.replace;
        append = path.append;
      }
      path = this.stringifyPath(path);
      if (path) {
        this.history.go(path, replace, append);
      }
    };

    /**
     * Short hand for replacing current path
     *
     * @param {String} path
     */

    Router.prototype.replace = function replace(path) {
      if (typeof path === 'string') {
        path = { path: path };
      }
      path.replace = true;
      this.go(path);
    };

    /**
     * Start the router.
     *
     * @param {VueConstructor} App
     * @param {String|Element} container
     * @param {Function} [cb]
     */

    Router.prototype.start = function start(App, container, cb) {
      /* istanbul ignore if */
      if (this._started) {
        warn$1('already started.');
        return;
      }
      this._started = true;
      this._startCb = cb;
      if (!this.app) {
        /* istanbul ignore if */
        if (!App || !container) {
          throw new Error('Must start vue-router with a component and a ' + 'root container.');
        }
        /* istanbul ignore if */
        if (App instanceof Vue) {
          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
        }
        this._appContainer = container;
        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
        // give it a name for better debugging
        Ctor.options.name = Ctor.options.name || 'RouterApp';
      }

      // handle history fallback in browsers that do not
      // support HTML5 history API
      if (this._historyFallback) {
        var _location = window.location;
        var _history = new HTML5History({ root: this._root });
        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
        if (path && path !== '/') {
          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
          return;
        }
      }

      this.history.start();
    };

    /**
     * Stop listening to route changes.
     */

    Router.prototype.stop = function stop() {
      this.history.stop();
      this._started = false;
    };

    /**
     * Normalize named route object / string paths into
     * a string.
     *
     * @param {Object|String|Number} path
     * @return {String}
     */

    Router.prototype.stringifyPath = function stringifyPath(path) {
      var generatedPath = '';
      if (path && typeof path === 'object') {
        if (path.name) {
          var extend = Vue.util.extend;
          var currentParams = this._currentTransition && this._currentTransition.to.params;
          var targetParams = path.params || {};
          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
        } else if (path.path) {
          generatedPath = encodeURI(path.path);
        }
        if (path.query) {
          // note: the generated query string is pre-URL-encoded by the recognizer
          var query = this._recognizer.generateQueryString(path.query);
          if (generatedPath.indexOf('?') > -1) {
            generatedPath += '&' + query.slice(1);
          } else {
            generatedPath += query;
          }
        }
      } else {
        generatedPath = encodeURI(path ? path + '' : '');
      }
      return generatedPath;
    };

    // Internal methods ======================================

    /**
    * Add a route containing a list of segments to the internal
    * route recognizer. Will be called recursively to add all
    * possible sub-routes.
    *
    * @param {String} path
    * @param {Object} handler
    * @param {Array} segments
    */

    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
      guardComponent(path, handler);
      handler.path = path;
      handler.fullPath = (segments.reduce(function (path, segment) {
        return path + segment.path;
      }, '') + path).replace('//', '/');
      segments.push({
        path: path,
        handler: handler
      });
      this._recognizer.add(segments, {
        as: handler.name
      });
      // add sub routes
      if (handler.subRoutes) {
        for (var subPath in handler.subRoutes) {
          // recursively walk all sub routes
          this._addRoute(subPath, handler.subRoutes[subPath],
          // pass a copy in recursion to avoid mutating
          // across branches
          segments.slice());
        }
      }
    };

    /**
     * Set the notFound route handler.
     *
     * @param {Object} handler
     */

    Router.prototype._notFound = function _notFound(handler) {
      guardComponent('*', handler);
      this._notFoundHandler = [{ handler: handler }];
    };

    /**
     * Add a redirect record.
     *
     * @param {String} path
     * @param {String} redirectPath
     */

    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
      if (path === '*') {
        this._notFoundRedirect = redirectPath;
      } else {
        this._addGuard(path, redirectPath, this.replace);
      }
    };

    /**
     * Add an alias record.
     *
     * @param {String} path
     * @param {String} aliasPath
     */

    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
      this._addGuard(path, aliasPath, this._match);
    };

    /**
     * Add a path guard.
     *
     * @param {String} path
     * @param {String} mappedPath
     * @param {Function} handler
     */

    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
      var _this2 = this;

      this._guardRecognizer.add([{
        path: path,
        handler: function handler(match, query) {
          var realPath = mapParams(mappedPath, match.params, query);
          _handler.call(_this2, realPath);
        }
      }]);
    };

    /**
     * Check if a path matches any redirect records.
     *
     * @param {String} path
     * @return {Boolean} - if true, will skip normal match.
     */

    Router.prototype._checkGuard = function _checkGuard(path) {
      var matched = this._guardRecognizer.recognize(path, true);
      if (matched) {
        matched[0].handler(matched[0], matched.queryParams);
        return true;
      } else if (this._notFoundRedirect) {
        matched = this._recognizer.recognize(path);
        if (!matched) {
          this.replace(this._notFoundRedirect);
          return true;
        }
      }
    };

    /**
     * Match a URL path and set the route context on vm,
     * triggering view updates.
     *
     * @param {String} path
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._match = function _match(path, state, anchor) {
      var _this3 = this;

      if (this._checkGuard(path)) {
        return;
      }

      var currentRoute = this._currentRoute;
      var currentTransition = this._currentTransition;

      if (currentTransition) {
        if (currentTransition.to.path === path) {
          // do nothing if we have an active transition going to the same path
          return;
        } else if (currentRoute.path === path) {
          // We are going to the same path, but we also have an ongoing but
          // not-yet-validated transition. Abort that transition and reset to
          // prev transition.
          currentTransition.aborted = true;
          this._currentTransition = this._prevTransition;
          return;
        } else {
          // going to a totally different path. abort ongoing transition.
          currentTransition.aborted = true;
        }
      }

      // construct new route and transition context
      var route = new Route(path, this);
      var transition = new RouteTransition(this, route, currentRoute);

      // current transition is updated right now.
      // however, current route will only be updated after the transition has
      // been validated.
      this._prevTransition = currentTransition;
      this._currentTransition = transition;

      if (!this.app) {
        (function () {
          // initial render
          var router = _this3;
          _this3.app = new _this3._appConstructor({
            el: _this3._appContainer,
            created: function created() {
              this.$router = router;
            },
            _meta: {
              $route: route
            }
          });
        })();
      }

      // check global before hook
      var beforeHooks = this._beforeEachHooks;
      var startTransition = function startTransition() {
        transition.start(function () {
          _this3._postTransition(route, state, anchor);
        });
      };

      if (beforeHooks.length) {
        transition.runQueue(beforeHooks, function (hook, _, next) {
          if (transition === _this3._currentTransition) {
            transition.callHook(hook, null, next, {
              expectBoolean: true
            });
          }
        }, startTransition);
      } else {
        startTransition();
      }

      if (!this._rendered && this._startCb) {
        this._startCb.call(null);
      }

      // HACK:
      // set rendered to true after the transition start, so
      // that components that are acitvated synchronously know
      // whether it is the initial render.
      this._rendered = true;
    };

    /**
     * Set current to the new transition.
     * This is called by the transition object when the
     * validation of a route has succeeded.
     *
     * @param {Transition} transition
     */

    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
      // set current route
      var route = this._currentRoute = transition.to;
      // update route context for all children
      if (this.app.$route !== route) {
        this.app.$route = route;
        this._children.forEach(function (child) {
          child.$route = route;
        });
      }
      // call global after hook
      if (this._afterEachHooks.length) {
        this._afterEachHooks.forEach(function (hook) {
          return hook.call(null, {
            to: transition.to,
            from: transition.from
          });
        });
      }
      this._currentTransition.done = true;
    };

    /**
     * Handle stuff after the transition.
     *
     * @param {Route} route
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
      // handle scroll positions
      // saved scroll positions take priority
      // then we check if the path has an anchor
      var pos = state && state.pos;
      if (pos && this._saveScrollPosition) {
        Vue.nextTick(function () {
          window.scrollTo(pos.x, pos.y);
        });
      } else if (anchor) {
        Vue.nextTick(function () {
          var el = document.getElementById(anchor.slice(1));
          if (el) {
            window.scrollTo(window.scrollX, el.offsetTop);
          }
        });
      }
    };

    return Router;
  })();

  function guardComponent(path, handler) {
    var comp = handler.component;
    if (Vue.util.isPlainObject(comp)) {
      comp = handler.component = Vue.extend(comp);
    }
    /* istanbul ignore if */
    if (typeof comp !== 'function') {
      handler.component = null;
      warn$1('invalid component for route "' + path + '".');
    }
  }

  /* Installation */

  Router.installed = false;

  /**
   * Installation interface.
   * Install the necessary directives.
   */

  Router.install = function (externalVue) {
    /* istanbul ignore if */
    if (Router.installed) {
      warn$1('already installed.');
      return;
    }
    Vue = externalVue;
    applyOverride(Vue);
    View(Vue);
    Link(Vue);
    exports$1.Vue = Vue;
    Router.installed = true;
  };

  // auto install
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Router);
  }

  return Router;

}));
},{}],15:[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

// detecting iOS UIWebView by indexedDB
var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    // webpack attempts to inject a shim for setImmediate
    // if it is used as a global, so we have to work around that to
    // avoid bundling unnecessary code.
    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
    timerFunc = context.setImmediate || setTimeout;
  }
  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var c;
var prev;
var i;
var l;
var lastFilterIndex;
var inSingle;
var inDouble;
var curly;
var square;
var paren;
/**
 * Push a filter to the current directive object
 */

function pushFilter() {
  var exp = str.slice(lastFilterIndex, i).trim();
  var filter;
  if (exp) {
    filter = {};
    var tokens = exp.match(filterTokenRE);
    filter.name = tokens[0];
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg);
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter);
  }
  lastFilterIndex = i + 1;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  inSingle = inDouble = false;
  curly = square = paren = 0;
  lastFilterIndex = 0;
  dir = {};

  for (i = 0, l = str.length; i < l; i++) {
    prev = c;
    c = str.charCodeAt(i);
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
    } else if (c === 0x7C && // pipe
    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        dir.expression = str.slice(0, i).trim();
      } else {
        // already has filter
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if (process.env.NODE_ENV !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	isIos: isIos,
	iosVersionMatch: iosVersionMatch,
	iosVersion: iosVersion,
	hasMutationObserverBug: hasMutationObserverBug,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to reigster itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new isntance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.value;
      if (isArray(model)) {
        var val = self.getValue();
        if (el.checked) {
          if (indexOf(model, val) < 0) {
            model.push(val);
          }
        } else {
          model.$remove(val);
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  dirs.sort(directiveComparator);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator(a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
  return a > b ? -1 : a === b ? 0 : 1;
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;
      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.26';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":10}],16:[function(require,module,exports){
var inserted = exports.cache = {}

exports.insert = function (css) {
  if (inserted[css]) return
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return elem
}

},{}],17:[function(require,module,exports){
/*!
 * Vuex v1.0.0-rc.2
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * Merge an array of objects into one.
   *
   * @param {Array<Object>} arr
   * @return {Object}
   */

  function mergeObjects(arr) {
    return arr.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var existing = prev[key];
        if (existing) {
          // allow multiple mutation objects to contain duplicate
          // handlers for the same mutation type
          if (Array.isArray(existing)) {
            prev[key] = existing.concat(obj[key]);
          } else {
            prev[key] = [existing].concat(obj[key]);
          }
        } else {
          prev[key] = obj[key];
        }
      });
      return prev;
    }, {});
  }

  /**
   * Check whether the given value is Object or not
   *
   * @param {*} obj
   * @return {Boolean}
   */

  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  /**
   * Get state sub tree by given keys.
   *
   * @param {Object} state
   * @param {Array<String>} nestedKeys
   * @return {Object}
   */
  function getNestedState(state, nestedKeys) {
    return nestedKeys.reduce(function (state, key) {
      return state[key];
    }, state);
  }

  /**
   * Hacks to get access to Vue internals.
   * Maybe we should expose these...
   */

  var Watcher = void 0;
  function getWatcher(vm) {
    if (!Watcher) {
      var noop = function noop() {};
      var unwatch = vm.$watch(noop, noop);
      Watcher = vm._watchers[0].constructor;
      unwatch();
    }
    return Watcher;
  }

  var Dep = void 0;
  function getDep(vm) {
    if (!Dep) {
      Dep = vm._data.__ob__.dep.constructor;
    }
    return Dep;
  }

  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  function devtoolPlugin(store) {
    if (!hook) return;

    hook.emit('vuex:init', store);

    hook.on('vuex:travel-to-state', function (targetState) {
      store.replaceState(targetState);
    });

    store.subscribe(function (mutation, state) {
      hook.emit('vuex:mutation', mutation, state);
    });
  }

  function override (Vue) {
    var version = Number(Vue.version.split('.')[0]);

    if (version >= 2) {
      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
    } else {
      (function () {
        // override init and inject vuex init procedure
        // for 1.x backwards compatibility.
        var _init = Vue.prototype._init;
        Vue.prototype._init = function () {
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
          _init.call(this, options);
        };
      })();
    }

    /**
     * Vuex init hook, injected into each instances init hooks list.
     */

    function vuexInit() {
      var options = this.$options;
      var store = options.store;
      var vuex = options.vuex;
      // store injection

      if (store) {
        this.$store = store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
      // vuex option handling
      if (vuex) {
        if (!this.$store) {
          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
        }
        var state = vuex.state;
        var actions = vuex.actions;
        var getters = vuex.getters;
        // handle deprecated state option

        if (state && !getters) {
          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
          getters = state;
        }
        // getters
        if (getters) {
          options.computed = options.computed || {};
          for (var key in getters) {
            defineVuexGetter(this, key, getters[key]);
          }
        }
        // actions
        if (actions) {
          options.methods = options.methods || {};
          for (var _key in actions) {
            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
          }
        }
      }
    }

    /**
     * Setter for all getter properties.
     */

    function setter() {
      throw new Error('vuex getter properties are read-only.');
    }

    /**
     * Define a Vuex getter on an instance.
     *
     * @param {Vue} vm
     * @param {String} key
     * @param {Function} getter
     */

    function defineVuexGetter(vm, key, getter) {
      if (typeof getter !== 'function') {
        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
      } else {
        Object.defineProperty(vm, key, {
          enumerable: true,
          configurable: true,
          get: makeComputedGetter(vm.$store, getter),
          set: setter
        });
      }
    }

    /**
     * Make a computed getter, using the same caching mechanism of computed
     * properties. In addition, it is cached on the raw getter function using
     * the store's unique cache id. This makes the same getter shared
     * across all components use the same underlying watcher, and makes
     * the getter evaluated only once during every flush.
     *
     * @param {Store} store
     * @param {Function} getter
     */

    function makeComputedGetter(store, getter) {
      var id = store._getterCacheId;

      // cached
      if (getter[id]) {
        return getter[id];
      }
      var vm = store._vm;
      var Watcher = getWatcher(vm);
      var Dep = getDep(vm);
      var watcher = new Watcher(vm, function (vm) {
        return getter(vm.state);
      }, null, { lazy: true });
      var computedGetter = function computedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      };
      getter[id] = computedGetter;
      return computedGetter;
    }

    /**
     * Make a bound-to-store version of a raw action function.
     *
     * @param {Store} store
     * @param {Function} action
     * @param {String} key
     */

    function makeBoundAction(store, action, key) {
      if (typeof action !== 'function') {
        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
      }
      return function vuexBoundAction() {
        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return action.call.apply(action, [this, store].concat(args));
      };
    }

    // option merging
    var merge = Vue.config.optionMergeStrategies.computed;
    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
      if (!toVal) return fromVal;
      if (!fromVal) return toVal;
      return {
        getters: merge(toVal.getters, fromVal.getters),
        state: merge(toVal.state, fromVal.state),
        actions: merge(toVal.actions, fromVal.actions)
      };
    };
  }

  var Vue = void 0;
  var uid = 0;

  var Store = function () {

    /**
     * @param {Object} options
     *        - {Object} state
     *        - {Object} actions
     *        - {Object} mutations
     *        - {Array} plugins
     *        - {Boolean} strict
     */

    function Store() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$state = _ref.state;
      var state = _ref$state === undefined ? {} : _ref$state;
      var _ref$mutations = _ref.mutations;
      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
      var _ref$modules = _ref.modules;
      var modules = _ref$modules === undefined ? {} : _ref$modules;
      var _ref$plugins = _ref.plugins;
      var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
      var _ref$strict = _ref.strict;
      var strict = _ref$strict === undefined ? false : _ref$strict;
      classCallCheck(this, Store);

      this._getterCacheId = 'vuex_store_' + uid++;
      this._dispatching = false;
      this._rootMutations = this._mutations = mutations;
      this._modules = modules;
      this._subscribers = [];
      // bind dispatch to self
      var dispatch = this.dispatch;
      this.dispatch = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        dispatch.apply(_this, args);
      };
      // use a Vue instance to store the state tree
      // suppress warnings just in case the user has added
      // some funky global mixins
      if (!Vue) {
        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
      }
      var silent = Vue.config.silent;
      Vue.config.silent = true;
      this._vm = new Vue({
        data: {
          state: state
        }
      });
      Vue.config.silent = silent;
      this._setupModuleState(state, modules);
      this._setupModuleMutations(modules);
      // add extra warnings in strict mode
      if (strict) {
        this._setupMutationCheck();
      }
      // apply plugins
      devtoolPlugin(this);
      plugins.forEach(function (plugin) {
        return plugin(_this);
      });
    }

    /**
     * Getter for the entire state tree.
     * Read only.
     *
     * @return {Object}
     */

    createClass(Store, [{
      key: 'replaceState',


      /**
       * Replace root state.
       *
       * @param {Object} state
       */

      value: function replaceState(state) {
        this._dispatching = true;
        this._vm.state = state;
        this._dispatching = false;
      }

      /**
       * Dispatch an action.
       *
       * @param {String} type
       */

    }, {
      key: 'dispatch',
      value: function dispatch(type) {
        var _this2 = this;

        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          payload[_key2 - 1] = arguments[_key2];
        }

        var silent = false;
        var isObjectStyleDispatch = false;
        // compatibility for object actions, e.g. FSA
        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
          isObjectStyleDispatch = true;
          payload = type;
          if (type.silent) silent = true;
          type = type.type;
        }
        var handler = this._mutations[type];
        var state = this.state;
        if (handler) {
          this._dispatching = true;
          // apply the mutation
          if (Array.isArray(handler)) {
            handler.forEach(function (h) {
              isObjectStyleDispatch ? h(state, payload) : h.apply(undefined, [state].concat(toConsumableArray(payload)));
            });
          } else {
            isObjectStyleDispatch ? handler(state, payload) : handler.apply(undefined, [state].concat(toConsumableArray(payload)));
          }
          this._dispatching = false;
          if (!silent) {
            (function () {
              var mutation = isObjectStyleDispatch ? payload : { type: type, payload: payload };
              _this2._subscribers.forEach(function (sub) {
                return sub(mutation, state);
              });
            })();
          }
        } else {
          console.warn('[vuex] Unknown mutation: ' + type);
        }
      }

      /**
       * Watch state changes on the store.
       * Same API as Vue's $watch, except when watching a function,
       * the function gets the state as the first argument.
       *
       * @param {Function} fn
       * @param {Function} cb
       * @param {Object} [options]
       */

    }, {
      key: 'watch',
      value: function watch(fn, cb, options) {
        var _this3 = this;

        if (typeof fn !== 'function') {
          console.error('Vuex store.watch only accepts function.');
          return;
        }
        return this._vm.$watch(function () {
          return fn(_this3.state);
        }, cb, options);
      }

      /**
       * Subscribe to state changes. Fires after every mutation.
       */

    }, {
      key: 'subscribe',
      value: function subscribe(fn) {
        var subs = this._subscribers;
        if (subs.indexOf(fn) < 0) {
          subs.push(fn);
        }
        return function () {
          var i = subs.indexOf(fn);
          if (i > -1) {
            subs.splice(i, 1);
          }
        };
      }

      /**
       * Hot update mutations & modules.
       *
       * @param {Object} options
       *        - {Object} [mutations]
       *        - {Object} [modules]
       */

    }, {
      key: 'hotUpdate',
      value: function hotUpdate() {
        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var mutations = _ref2.mutations;
        var modules = _ref2.modules;

        this._rootMutations = this._mutations = mutations || this._rootMutations;
        this._setupModuleMutations(modules || this._modules);
      }

      /**
       * Attach sub state tree of each module to the root tree.
       *
       * @param {Object} state
       * @param {Object} modules
       */

    }, {
      key: '_setupModuleState',
      value: function _setupModuleState(state, modules) {
        var _this4 = this;

        if (!isObject(modules)) return;

        Object.keys(modules).forEach(function (key) {
          var module = modules[key];

          // set this module's state
          Vue.set(state, key, module.state || {});

          // retrieve nested modules
          _this4._setupModuleState(state[key], module.modules);
        });
      }

      /**
       * Bind mutations for each module to its sub tree and
       * merge them all into one final mutations map.
       *
       * @param {Object} updatedModules
       */

    }, {
      key: '_setupModuleMutations',
      value: function _setupModuleMutations(updatedModules) {
        var modules = this._modules;
        Object.keys(updatedModules).forEach(function (key) {
          modules[key] = updatedModules[key];
        });
        var updatedMutations = this._createModuleMutations(modules, []);
        this._mutations = mergeObjects([this._rootMutations].concat(toConsumableArray(updatedMutations)));
      }

      /**
       * Helper method for _setupModuleMutations.
       * The method retrieve nested sub modules and
       * bind each mutations to its sub tree recursively.
       *
       * @param {Object} modules
       * @param {Array<String>} nestedKeys
       * @return {Array<Object>}
       */

    }, {
      key: '_createModuleMutations',
      value: function _createModuleMutations(modules, nestedKeys) {
        var _this5 = this;

        if (!isObject(modules)) return [];

        return Object.keys(modules).map(function (key) {
          var module = modules[key];
          var newNestedKeys = nestedKeys.concat(key);

          // retrieve nested modules
          var nestedMutations = _this5._createModuleMutations(module.modules, newNestedKeys);

          if (!module || !module.mutations) {
            return mergeObjects(nestedMutations);
          }

          // bind mutations to sub state tree
          var mutations = {};
          Object.keys(module.mutations).forEach(function (name) {
            var original = module.mutations[name];
            mutations[name] = function (state) {
              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
              }

              original.apply(undefined, [getNestedState(state, newNestedKeys)].concat(args));
            };
          });

          // merge mutations of this module and nested modules
          return mergeObjects([mutations].concat(toConsumableArray(nestedMutations)));
        });
      }

      /**
       * Setup mutation check: if the vuex instance's state is mutated
       * outside of a mutation handler, we throw en error. This effectively
       * enforces all mutations to the state to be trackable and hot-reloadble.
       * However, this comes at a run time cost since we are doing a deep
       * watch on the entire state tree, so it is only enalbed with the
       * strict option is set to true.
       */

    }, {
      key: '_setupMutationCheck',
      value: function _setupMutationCheck() {
        var _this6 = this;

        var Watcher = getWatcher(this._vm);
        /* eslint-disable no-new */
        new Watcher(this._vm, 'state', function () {
          if (!_this6._dispatching) {
            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
          }
        }, { deep: true, sync: true });
        /* eslint-enable no-new */
      }
    }, {
      key: 'state',
      get: function get() {
        return this._vm.state;
      },
      set: function set(v) {
        throw new Error('[vuex] Use store.replaceState() to explicit replace store state.');
      }
    }]);
    return Store;
  }();

  function install(_Vue) {
    if (Vue) {
      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
      return;
    }
    Vue = _Vue;
    override(Vue);
  }

  // auto install in dist mode
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var index = {
    Store: Store,
    install: install
  };

  return index;

}));
},{}]},{},[5]);
