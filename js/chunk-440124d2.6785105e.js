(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-440124d2"],{3221:function(t,n,e){"use strict";var a=e("4580"),s=e.n(a);s.a},4580:function(t,n,e){},"64d8":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"claim-dns-container"},[e("div",{staticClass:"claim-dns-content"},[e("h3",[t._v(t._s(t.$t("ens.claim.cheers")))]),e("p",[t._v(t._s(t.$t("ens.claim.domain-claimable",{domain:t.fullDomainName})))]),e("p",[t._v(t._s(t.$t("ens.claim.owner-set",{owner:t.dnsOwner})))]),e("div",{staticClass:"claim-dns-button"},[e("button",{class:["large-round-button-green-filled",t.loading?"disabled":""],on:{click:t.claimFunc}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v(" "+t._s(t.$t("ens.claim.string"))+" ")]),e("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),e("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],i=(e("99af"),e("539d")),o={components:{"interface-bottom-text":i["a"]},props:{hostName:{type:String,default:""},dnsOwner:{type:String,default:""},claimFunc:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},computed:{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},c=o,l=(e("3221"),e("2877")),r=Object(l["a"])(c,a,s,!1,null,"6f2f094a",null),u=r.exports}}]);