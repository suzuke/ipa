(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b711aa4"],{"3d93":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple grid-sm"},[a("div",{staticClass:"sm-tit"},[t._v("公有池剩余下载次数")]),t._v(" "),a("div",{staticClass:"bg-line"},[t._v(t._s(t.download_num))]),t._v(" "),a("el-progress",{attrs:{percentage:t.percentage,"show-text":!1,color:t.customColorMethod(t.percentage),"stroke-width":10}}),t._v("\n        共"+t._s(t.downloadtotal)+"次\n        "),a("div")],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple grid-bg"},[a("div",{staticClass:"body"},[a("div",{staticClass:"title"},[t._v("超级签名应用")]),t._v(" "),a("div",{staticClass:"btnline"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.gorelease}},[t._v("发布应用")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"应用名称",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"iconfont icon-apple"}),t._v("\n                "+t._s(e.row.name)+"\n              ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"version",label:"版本",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"download_url",label:"下载方式"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.download_url)+"   \n                "),a("i",{staticClass:"iconfont icon-qrcode",staticStyle:{color:"#000"},on:{click:function(a){return t.qrcode(e.row.download_url,e.row.name)}}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"handle",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{on:{click:function(a){return t.goInfo(e.row.id,e.row.is_super)}}},[t._v("详情")]),t._v("\n               | \n              "),a("span",{on:{click:function(a){return t.goedit(e.row.id,2)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.currentpage,"page-sizes":[10,20,30],"page-size":10,layout:"total, prev, pager, next, sizes,jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])])],1),t._v(" "),a("el-dialog",{attrs:{title:"扫码下载",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e},close:t.closeCode}},[a("div",{staticClass:"ermtit"},[t._v(t._s(t.ermname))]),t._v(" "),a("div",{ref:"qrcode",staticStyle:{width:"300px",height:"300px",margin:"10px auto"},attrs:{id:"qrcode"}})])],1)},o=[],l=a("4ec3"),i=a("d044"),r=a.n(i),s={data:function(){return{loading:!0,currentpage:1,percentage:0,customColor:"#409eff",tableData:[],total:0,ermname:"",download_num:"",downloadtotal:0,centerDialogVisible:!1}},computed:{},mounted:function(){var t=this;Object(l["i"])({type:2}).then((function(e){t.loading=!1,t.tableData=e.data.data,t.total=e.data.total,t.download_num=e.data.download_num,t.downloadtotal=e.data.user_download_total,t.percentage=e.data.download_num/e.data.user_download_total*100}))},methods:{customColorMethod:function(t){return t<30?"#f56c6c":t<70?"#5cb87a":"#409eff"},goedit:function(t,e){this.$router.push({name:"ipacreate",params:{id:t,type:e}})},goInfo:function(t,e){this.$router.push({name:"ipainfo",query:{id:t,type:e}})},qrcode:function(t,e){this.centerDialogVisible=!0,this.ermname=e,setTimeout((function(){var e=new r.a("qrcode",{width:300,height:300,text:t,colorDark:"#2D2D2D",colorLight:"#fff",correctLevel:r.a.CorrectLevel.L});console.log(e)}),100)},closeCode:function(){this.$refs.qrcode.innerHTML=""},handleSizeChange:function(t){},handleCurrentChange:function(t){},gorelease:function(){this.$router.push({name:"release",query:{type:2}})}}},c=s,d=(a("fc59"),a("2877")),u=Object(d["a"])(c,n,o,!1,null,"6c1af7c2",null);e["default"]=u.exports},"9c96":function(t,e,a){},fc59:function(t,e,a){"use strict";var n=a("9c96"),o=a.n(n);o.a}}]);