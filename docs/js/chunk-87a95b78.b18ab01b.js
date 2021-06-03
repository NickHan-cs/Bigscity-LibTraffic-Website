(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87a95b78"],{"099f":function(e,t,s){},"1f76":function(e,t,s){var r=s("c4b4");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"4bec":function(e,t,s){"use strict";var r=s("8e86").forEach,a=s("698b"),p=a("forEach");e.exports=p?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"5b79":function(e,t,s){var r=s("cdc4"),a=s("79b4"),p=s("4238"),n=p("species");e.exports=function(e,t){var s;return a(e)&&(s=e.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?r(s)&&(s=s[n],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===t?0:t)}},"698b":function(e,t,s){"use strict";var r=s("18c7");e.exports=function(e,t){var s=[][e];return!!s&&r((function(){s.call(null,t||function(){throw 1},1)}))}},"79b4":function(e,t,s){var r=s("c4b4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"7bd4":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e._m(0),s("div",{staticClass:"content"},[s("div",{staticClass:"metric"},[e._v(" View "),s("a-select",{staticStyle:{width:"180px","font-size":"14px","margin-left":"10px"},attrs:{"default-value":"MAE6"},on:{change:e.metricsChange}},[s("a-select-option",{attrs:{value:"MAE6"}},[e._v(" MAE @ 6 STEP ")]),s("a-select-option",{attrs:{value:"RMSE6"}},[e._v(" RMSE @ 6 STEP ")])],1)],1),s("div",{staticClass:"model-ranking"},[s("table",[s("thead",[s("tr",[s("th",[e._v("RANK")]),s("th",[e._v("MODEL")]),s("th",[e._v("PAPER")]),s("th",[e._v("YEAR")]),s("th",[e._v("2 STEP"),s("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy2}})],1),s("th",[e._v("4 STEP"),s("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy4}})],1),s("th",[e._v("6 STEP"),s("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy6}})],1)])]),s("tbody",e._l(e.rankingData,(function(t){return s("tr",{key:t.model},[s("td",{attrs:{width:"6%"}},[e._v(e._s(t.rank))]),s("td",{attrs:{width:"8%"}},[s("a",{attrs:{href:t.mlink,target:"_blank"}},[e._v(e._s(t.model))])]),s("td",{attrs:{width:"39%"}},[s("a",{staticClass:"paper",attrs:{href:t.plink,target:"_blank"}},[e._v(e._s(t.paper))])]),s("td",{attrs:{width:"5%"}},[e._v(e._s(t.year))]),s("td",{attrs:{width:"14%"}},[e._v(e._s(t.step2))]),s("td",{attrs:{width:"14%"}},[e._v(e._s(t.step4))]),s("td",{attrs:{width:"14%"}},[e._v(e._s(t.step6))])])})),0)])]),s("br"),s("br")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticStyle:{"padding-top":"20px",color:"white"}},[s("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("TAXIBJ2015")])])])}],p=(s("ff27"),s("b2a7"),[{rank:0,model:"AGCRN",mlink:"#",paper:"Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",plink:"https://arxiv.org/abs/2007.02842",year:"2018",step1:10.31791687,step2:11.04009724,step3:11.45348644,step4:11.77591896,step5:11.98143196,step6:12.32980347,mae_step1:10.31791687,mae_step2:11.04009724,mae_step3:11.45348644,mae_step4:11.77591896,mae_step5:11.98143196,mae_step6:12.32980347,rmse_step1:17.2892971,rmse_step2:19.08665276,rmse_step3:19.86128044,rmse_step4:20.3403492,rmse_step5:20.66931534,rmse_step6:21.30228424},{rank:0,model:"MTGNN",mlink:"#",paper:"Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",plink:"https://arxiv.org/abs/2005.11650",year:"2020",step1:10.22533131,step2:11.00156784,step3:11.46180439,step4:11.773592,step5:12.06179619,step6:12.53880787,mae_step1:10.22533131,mae_step2:11.00156784,mae_step3:11.46180439,mae_step4:11.773592,mae_step5:12.06179619,mae_step6:12.53880787,rmse_step1:17.0489006,rmse_step2:19.12144089,rmse_step3:19.95853615,rmse_step4:20.40186501,rmse_step5:20.84480095,rmse_step6:21.65192413},{rank:0,model:"GWNET",mlink:"#",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",plink:"https://arxiv.org/abs/1906.00121",year:"2019",step1:10.91045952,step2:11.45554352,step3:11.82102966,step4:12.10324287,step5:12.38107681,step6:12.75936413,mae_step1:10.91045952,mae_step2:11.45554352,mae_step3:11.82102966,mae_step4:12.10324287,mae_step5:12.38107681,mae_step6:12.75936413,rmse_step1:18.43127441,rmse_step2:19.77342606,rmse_step3:20.44666862,rmse_step4:20.88972282,rmse_step5:21.37499428,rmse_step6:22.011446},{rank:0,model:"STGCN",mlink:"#",paper:"Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting",plink:"https://www.ijcai.org/Proceedings/2018/0505",year:"2018",step1:12.36303997,step2:13.41536427,step3:14.00164127,step4:14.28826618,step5:14.55849838,step6:14.90094376,mae_step1:12.36303997,mae_step2:13.41536427,mae_step3:14.00164127,mae_step4:14.28826618,mae_step5:14.55849838,mae_step6:14.90094376,rmse_step1:20.35777855,rmse_step2:22.95068169,rmse_step3:24.05297661,rmse_step4:24.71541977,rmse_step5:25.22282982,rmse_step6:25.80957031},{rank:0,model:"ASTGCN",mlink:"#",paper:"Attention based spatial-temporal graph convolutional networks for traffic flow forecasting",plink:"https://ojs.aaai.org//index.php/AAAI/article/view/3881",year:"2019",step1:12.02357006,step2:13.64296532,step3:13.85167503,step4:13.54530048,step5:13.9444828,step6:16.00203514,mae_step1:12.02357006,mae_step2:13.64296532,mae_step3:13.85167503,mae_step4:13.54530048,mae_step5:13.9444828,mae_step6:16.00203514,rmse_step1:19.80144882,rmse_step2:23.2273159,rmse_step3:23.5927906,rmse_step4:23.01723289,rmse_step5:23.68496895,rmse_step6:27.12472534},{rank:0,model:"DCRNN",mlink:"#",paper:"Diffusion convolutional recurrent neural network: Data-driven traffic forecasting",plink:"https://arxiv.org/abs/1707.01926",year:"2018",step1:11.62005424,step2:13.7311039,step3:14.99166107,step4:15.76095009,step5:16.28811646,step6:16.74895477,mae_step1:11.62005424,mae_step2:13.7311039,mae_step3:14.99166107,mae_step4:15.76095009,mae_step5:16.28811646,mae_step6:16.74895477,rmse_step1:19.3288269,rmse_step2:23.59714127,rmse_step3:25.78530502,rmse_step4:27.0803299,rmse_step5:27.95166779,rmse_step6:28.69671822},{rank:0,model:"AE",mlink:"#",paper:"Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction",plink:"https://ieeexplore.ieee.org/document/6910027",year:"2014",step1:15.46676064,step2:15.64417553,step3:15.99023438,step4:16.37779236,step5:16.90474319,step6:17.72981071,mae_step1:15.46676064,mae_step2:15.64417553,mae_step3:15.99023438,mae_step4:16.37779236,mae_step5:16.90474319,mae_step6:17.72981071,rmse_step1:26.7457962,rmse_step2:27.50640297,rmse_step3:28.24768448,rmse_step4:29.0508213,rmse_step5:30.07820702,rmse_step6:31.72239113},{rank:0,model:"GRU",mlink:"#",paper:"Using LSTM and GRU neural network methods for traffic flow prediction",plink:"https://ieeexplore.ieee.org/abstract/document/7804912",year:"2016",step1:18.71100426,step2:19.66709137,step3:19.7865696,step4:20.353302,step5:20.89527893,step6:21.5634861,mae_step1:18.71100426,mae_step2:19.66709137,mae_step3:19.7865696,mae_step4:20.353302,mae_step5:20.89527893,mae_step6:21.5634861,rmse_step1:51.90108871,rmse_step2:53.32480621,rmse_step3:53.63449478,rmse_step4:54.37876129,rmse_step5:55.05590057,rmse_step6:56.05802917},{rank:0,model:"TGCN",mlink:"#",paper:"T-gcn: A temporal graph convolutional network for traffic prediction",plink:"https://ieeexplore.ieee.org/abstract/document/8809901/",year:"2020",step1:14.52015209,step2:16.7724781,step3:18.6176033,step4:20.10474777,step5:21.49899292,step6:23.23112679,mae_step1:14.52015209,mae_step2:16.7724781,mae_step3:18.6176033,mae_step4:20.10474777,mae_step5:21.49899292,mae_step6:23.23112679,rmse_step1:23.31774902,rmse_step2:28.1753006,rmse_step3:31.51919556,rmse_step4:33.84580994,rmse_step5:35.9057045,rmse_step6:38.63568115},{rank:0,model:"Seq2Seq",mlink:"#",paper:"Sequence to Sequence Learning with Neural Networks",plink:"https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html",year:"2014",step1:20.2789669,step2:18.9578495,step3:18.39977837,step4:18.63230705,step5:20.32543373,step6:23.38954353,mae_step1:20.2789669,mae_step2:18.9578495,mae_step3:18.39977837,mae_step4:18.63230705,mae_step5:20.32543373,mae_step6:23.38954353,rmse_step1:40.31185532,rmse_step2:33.73885727,rmse_step3:32.91973877,rmse_step4:34.02927399,rmse_step5:37.65150452,rmse_step6:43.24779129},{rank:0,model:"RNN",mlink:"#",paper:"Using LSTM and GRU neural network methods for traffic flow prediction",plink:"https://ieeexplore.ieee.org/abstract/document/7804912",year:"2016",step1:17.44994545,step2:19.47091103,step3:22.6415329,step4:26.25135994,step5:30.11628151,step6:34.17687225,mae_step1:17.44994545,mae_step2:19.47091103,mae_step3:22.6415329,mae_step4:26.25135994,mae_step5:30.11628151,mae_step6:34.17687225,rmse_step1:32.14590454,rmse_step2:36.12245941,rmse_step3:42.23437119,rmse_step4:48.62110519,rmse_step5:55.44234085,rmse_step6:62.55359268}]),n={data:function(){return{TAXIBJ2015_origin:p,rankingData:[],metrics:"MAE6"}},mounted:function(){this.rankingData=p,this.metricsChange("MAE6")},methods:{sortBy2:function(){this.rankingData.sort((function(e,t){return e.step2-t.step2}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy4:function(){this.rankingData.sort((function(e,t){return e.step4-t.step4}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy6:function(){this.rankingData.sort((function(e,t){return e.step6-t.step6}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},metricsChange:function(e){"MAE6"==e?this.rankingData.forEach((function(e){e.step2=e.mae_step2.toFixed(5),e.step4=e.mae_step4.toFixed(5),e.step6=e.mae_step6.toFixed(5)})):"RMSE6"==e&&this.rankingData.forEach((function(e){e.step2=e.rmse_step2.toFixed(5),e.step4=e.rmse_step4.toFixed(5),e.step6=e.rmse_step6.toFixed(5)})),this.sortBy6()}},components:{}},i=n,o=(s("f433"),s("4ac2")),c=Object(o["a"])(i,r,a,!1,null,"2bd3fa74",null);t["default"]=c.exports},"8e86":function(e,t,s){var r=s("393d"),a=s("f142"),p=s("86c4"),n=s("ca91"),i=s("5b79"),o=[].push,c=function(e){var t=1==e,s=2==e,c=3==e,m=4==e,_=6==e,l=7==e,f=5==e||_;return function(u,h,d,v){for(var k,g,w=p(u),y=a(w),b=r(h,d,3),x=n(y.length),E=0,A=v||i,S=t?A(u,x):s||l?A(u,0):void 0;x>E;E++)if((f||E in y)&&(k=y[E],g=b(k,E,w),e))if(t)S[E]=g;else if(g)switch(e){case 3:return!0;case 5:return k;case 6:return E;case 2:o.call(S,k)}else switch(e){case 4:return!1;case 7:o.call(S,k)}return _?-1:c||m?m:S}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},b2a7:function(e,t,s){"use strict";var r=s("0c99"),a=s("621a"),p=s("1f76"),n=s("c851"),i=s("18c7"),o=1..toFixed,c=Math.floor,m=function(e,t,s){return 0===t?s:t%2===1?m(e,t-1,s*e):m(e*e,t/2,s)},_=function(e){var t=0,s=e;while(s>=4096)t+=12,s/=4096;while(s>=2)t+=1,s/=2;return t},l=function(e,t,s){var r=-1,a=s;while(++r<6)a+=t*e[r],e[r]=a%1e7,a=c(a/1e7)},f=function(e,t){var s=6,r=0;while(--s>=0)r+=e[s],e[s]=c(r/t),r=r%t*1e7},u=function(e){var t=6,s="";while(--t>=0)if(""!==s||0===t||0!==e[t]){var r=String(e[t]);s=""===s?r:s+n.call("0",7-r.length)+r}return s},h=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){o.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,s,r,i,o=p(this),c=a(e),h=[0,0,0,0,0,0],d="",v="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(d="-",o=-o),o>1e-21)if(t=_(o*m(2,69,1))-69,s=t<0?o*m(2,-t,1):o/m(2,t,1),s*=4503599627370496,t=52-t,t>0){l(h,0,s),r=c;while(r>=7)l(h,1e7,0),r-=7;l(h,m(10,r,1),0),r=t-1;while(r>=23)f(h,1<<23),r-=23;f(h,1<<r),l(h,1,1),f(h,2),v=u(h)}else l(h,0,s),l(h,1<<-t,0),v=u(h)+n.call("0",c);return c>0?(i=v.length,v=d+(i<=c?"0."+n.call("0",c-i)+v:v.slice(0,i-c)+"."+v.slice(i-c))):v=d+v,v}})},c851:function(e,t,s){"use strict";var r=s("621a"),a=s("9a0e");e.exports=function(e){var t=String(a(this)),s="",p=r(e);if(p<0||p==1/0)throw RangeError("Wrong number of repetitions");for(;p>0;(p>>>=1)&&(t+=t))1&p&&(s+=t);return s}},f433:function(e,t,s){"use strict";s("099f")},ff27:function(e,t,s){var r=s("4df3"),a=s("493f"),p=s("4bec"),n=s("2679");for(var i in a){var o=r[i],c=o&&o.prototype;if(c&&c.forEach!==p)try{n(c,"forEach",p)}catch(m){c.forEach=p}}}}]);
//# sourceMappingURL=chunk-87a95b78.b18ab01b.js.map