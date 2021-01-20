(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e35e6bb4"],{"21ed":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ambrpay-container"},[s("back-button",{attrs:{title:t.$t("common.exit-dapp")}}),s("b-container",{staticClass:"pl-5 pr-5"},[s("div",{staticClass:"ambrpay-header mt-5"},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"page-title"},[t._v(t._s(t.$t("dappsAmbrpay.title")))]),s("popover",{staticClass:"dapp-popover",attrs:{popcontent:t.$t("dappsAmbrpay.ambrpay-popover")}})],1),s("div",{staticClass:"btns-container"},[s("b-button",{staticClass:"withdraw-btn",on:{click:function(e){return t.openManageFundsModal("dappsAmbrpay.withdraw")}}},[t._v(t._s(t.$t("dappsAmbrpay.withdraw-funds")))]),s("b-button",{staticClass:"add-btn",on:{click:function(e){return t.openManageFundsModal("dappsAmbrpay.add")}}},[t._v(" "+t._s(t.$t("dappsAmbrpay.add-funds"))+" ")])],1)]),s("div",{staticClass:"funds-container"},[s("span",{staticClass:"fund-text"},[t._v(t._s(t.$t("dappsAmbrpay.balance")))]),s("div",{staticClass:"balance-container"},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.loadingBalance,expression:"loadingBalance"}],staticClass:"fa fa-spinner fa-spin"}),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loadingBalance,expression:"!loadingBalance"}],staticClass:"fund-text"},[t._v(t._s(t.availableBalanceEth)+" "+t._s(t.$t("common.currency.eth"))+" ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loadingBalance,expression:"!loadingBalance"}],staticClass:"usd-text"},[t._v(t._s(t.availableBalanceUSD)+" "+t._s(t.$t("common.currency.usd")))])])]),s("subscription-form",{attrs:{subscriptions:t.subscriptions},on:{startSubscription:t.startSubscription,openManageSubModal:t.openManageSubModal}})],1),s("manage-funds-modal",{ref:"manageFunds",attrs:{"manage-funds-text":t.manageFundsText,"available-balance-eth":t.availableBalanceEth,"available-balance-usd":t.availableBalanceUSD},on:{addFunds:t.addFunds,withdrawFunds:t.withdrawFunds}}),s("manage-subscriptions-modal",{ref:"manageSubs",attrs:{subscriptions:t.subscriptions},on:{unsubscribeSub:t.unsubscribeSub}})],1)},n=[],r=(s("d81d"),s("b680"),s("d3b7"),s("25f0"),s("53ca")),i=(s("96cf"),s("1da1")),o=s("5530"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subscription-container"},[a("div",{staticClass:"subscription-content"},[a("div",{staticClass:"subscription-form-container"},[a("b-container",[a("b-row",{staticClass:"address-block"},[a("dropdown-address-selector",{attrs:{"clear-address":t.clearAddress,title:t.$t("sendTx.to-addr")},on:{toAddress:function(e){return t.getToAddress(e)}}})],1),a("b-row",[a("b-col",{staticClass:"mt-3",attrs:{cols:"12",md:"5"}},[a("span",{staticClass:"label-text"},[t._v(t._s(t.$t("sendTx.type")))]),a("div",{staticClass:"fake-input"},[a("p",[a("img",{staticClass:"currency-icon",attrs:{src:s("9165")}}),a("span",{staticClass:"token-txt"},[t._v(t._s(t.$t("common.currency.eth")))]),t._v("-"+t._s(t.$t("common.currency.ethereum"))+" ")])])]),a("b-col",{staticClass:"amount-container mt-3",attrs:{cols:"12",md:"7"}},[a("div",{staticClass:"amount-text"},[a("span",{staticClass:"label-text"},[t._v(t._s(t.$t("sendTx.amount")))]),a("span",{staticClass:"action-text entire-balance",on:{click:t.sendEntireBalance}},[t._v(t._s(t.$t("sendTx.button-entire")))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.sendAmount,expression:"sendAmount"}],attrs:{type:"number",placeholder:"0.01",min:"0.01"},domProps:{value:t.sendAmount},on:{input:function(e){e.target.composing||(t.sendAmount=e.target.value)}}}),a("p",{staticClass:"sub-text"},[t._v(t._s(t.$t("dappsAmbrpay.automation-fee")))]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.amountErrMsg,expression:"amountErrMsg"}],staticClass:"sub-text err-msg"},[t._v(" "+t._s(t.amountErrMsg)+" ")])])],1),a("b-row",{staticClass:"row-style mt-1 interval-container"},[a("span",{staticClass:"label-text"},[t._v(t._s(t.$t("dappsAmbrpay.interval-in-every")))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.intervalDays,expression:"intervalDays"}],staticClass:"days-text"},[t._v(t._s(t.$t("dappsAmbrpay.days")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.intervalDays,expression:"intervalDays"}],attrs:{placeholder:t.$t("dappsAmbrpay.enter-days"),type:"number",min:"1",max:"365"},domProps:{value:t.intervalDays},on:{input:function(e){e.target.composing||(t.intervalDays=e.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:t.intervalErrMsg,expression:"intervalErrMsg"}],staticClass:"sub-text err-msg"},[t._v(" "+t._s(t.intervalErrMsg)+" ")])]),a("b-row",{staticClass:"mt-5 button-container"},[a("b-button",{staticClass:"active-sub-btn my-subscriptions-container",on:{click:t.openManageSubModal}},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.title"))+" ")]),a("b-button",{staticClass:"mew-btn",class:[t.isValidInput?"":"disabled"],on:{click:t.startSubscription}},[t._v(t._s(t.$t("dappsAmbrpay.start-recurring")))])],1),a("b-row",[a("div",{staticClass:"clear-all-btn mx-auto mt-3",on:{click:function(e){return t.clear()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])],1)],1)])])},u=[],d=(s("2ca0"),s("2f62")),l=s("901e"),p=s.n(l),m=s("94b2"),h={components:{"dropdown-address-selector":m["a"]},props:{subscriptions:{type:Array,default:function(){return[]}}},data:function(){return{address:"",isValidAddress:!1,hexAddress:"",intervalDays:"",sendAmount:"",amountErrMsg:"",intervalErrMsg:"",clearAddress:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(d["c"])("main",["web3","network","account"])),{},{isValidInput:function(){return this.isValidAddress&&!this.amountErrMsg&&this.sendAmount&&this.address&&!this.intervalErrMsg}}),watch:{sendAmount:function(t){var e=new p.a(t),s=this.web3.utils.fromWei(new p.a(this.account.balance).toFixed(),"ether"),a=new p.a(e.times(.1)),n=e.plus(a);if(!t)return this.amountErrMsg="";e.lt(.01)?this.amountErrMsg=this.$t("dappsAmbrpay.sub-form.min-greater"):n.gt(s)?this.amountErrMsg=this.$t("dappsAmbrpay.sub-form.higher-than-bal"):this.amountErrMsg=""},intervalDays:function(t){t.startsWith("0")&&t.length>1?this.intervalErrMsg=this.$t("dappsAmbrpay.sub-form.enter-correct-num"):this.intervalErrMsg=t>365?this.$t("dappsAmbrpay.sub-form.cannot-exceed"):""}},methods:{clear:function(){this.address="",this.isValidAddress=!1,this.hexAddress="",this.intervalDays="",this.sendAmount="",this.amountErrMsg="",this.intervalErrMsg="",this.clearAddress=!this.clearAddress},getToAddress:function(t){this.address=t.address,this.hexAddress=t.address,this.isValidAddress=t.valid},sendEntireBalance:function(){this.account&&(this.sendAmount=this.web3.utils.fromWei(new p.a(this.account.balance).toFixed(),"ether"))},openManageSubModal:function(){this.$emit("openManageSubModal")},startSubscription:function(){var t=this,e={subscriptionPlan:"sp_f06PoxHvvutJZd",amount:new p.a(this.sendAmount).toNumber(),receiverWallet:this.address,interval:new p.a(this.intervalDays).toNumber(),transferOut:!0,network:"auto"};this.$emit("startSubscription",e),this.$nextTick((function(){t.clear(),t.sendAmount="",t.address="",t.intervalDays=""}))}}},b=h,f=(s("60c6"),s("2877")),v=Object(f["a"])(b,c,u,!1,null,"664b49e6",null),w=v.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-container"},[s("b-modal",{ref:"manageFundsModal",attrs:{title:"Add"===t.manageFundsText?t.$t("dappsAmbrpay.manage-funds.add-funds"):t.$t("dappsAmbrpay.manage-funds.withdraw-funds"),centered:"","hide-footer":"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",{staticClass:"balance-container"},[s("span",{staticClass:"funds-txt"},[t._v(t._s(t.$t("dappsAmbrpay.manage-funds.avail-balance")))]),s("div",[s("p",{staticClass:"funds-txt"},[t._v(" "+t._s(t.availableBalanceEth)+" "+t._s(t.$t("common.currency.eth"))+" ")]),s("p",{staticClass:"text-right"},[t._v("$"+t._s(t.availableBalanceUsd))])])]),s("hr"),t.actionStep?s("div",{staticClass:"action-container"},[s("p",{staticClass:"funds-txt"},[t._v(" "+t._s("Add"===t.manageFundsText?t.$t("dappsAmbrpay.manage-funds.how-much-eth-add"):t.$t("dappsAmbrpay.manage-funds.how-much-eth-withdraw"))+" ")]),s("span",{staticClass:"eth-text"},[t._v(t._s(t.$t("common.currency.eth")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ethAmount,expression:"ethAmount"}],staticClass:"mt-3",attrs:{type:"number"},domProps:{value:t.ethAmount},on:{input:function(e){e.target.composing||(t.ethAmount=e.target.value)}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:t.errMsg,expression:"errMsg"}],staticClass:"err-msg pl-2"},[t._v(t._s(t.errMsg))])]):t._e(),t.actionStep?t._e():s("div",{staticClass:"confirmation-container"},[s("i",{staticClass:"check-icon fa fa-check",attrs:{"aria-hidden":"true"}}),"Add"===t.manageFundsText?s("p",{staticClass:"mr-5 ml-5 mt-3 mb-1"},[t._v(" "+t._s(t.$t("dappsAmbrpay.manage-funds.subscription-fund"))+" "),s("span",{staticClass:"mew-txt"},[t._v(t._s(t.ethAmount))]),t._v(" "+t._s(t.$t("dappsAmbrpay.manage-funds.should-update"))+" ")]):t._e(),"Withdraw"===t.manageFundsText?s("p",{staticClass:"mr-5 ml-5 mt-2"},[t._v(" "+t._s(t.$t("dappsAmbrpay.manage-funds.withdraw-fund"))+" "),s("span",{staticClass:"mew-txt"},[t._v(t._s(t.ethAmount))]),t._v(" "+t._s(t.$t("dappsAmbrpay.manage-funds.should-update"))+" ")]):t._e()]),s("div",{staticClass:"btn-container"},[s("button",{staticClass:"mew-btn mt-4 mb-4",class:t.errMsg||!t.ethAmount?"disabled":"",on:{click:function(e){return t.onClick()}}},[t._v(" "+t._s(t.actionStep?t.manageFundsText:t.$t("common.ok"))+" ")])])])])],1)},y=[],A={props:{manageFundsText:{type:String,default:""},availableBalanceEth:{type:String,default:""},availableBalanceUsd:{type:String,default:""}},data:function(){return{actionStep:!0,ethAmount:0,errMsg:""}},computed:Object(o["a"])({},Object(d["c"])("main",["web3","account"])),watch:{manageFundsText:function(t,e){t!==e&&(this.ethAmount=0,this.errMsg="")},ethAmount:function(t){var e=new p.a(t),s=this.web3.utils.fromWei(new p.a(this.account.balance).toFixed(),"ether"),a=new p.a(this.availableBalanceEth);t<=0?this.errMsg=this.$t("dappsAmbrpay.errors.amount-higher-zero"):"Add"===this.manageFundsText&&e.gt(s)?this.errMsg=this.$t("dappsAmbrpay.errors.amount-higher-balance"):"Withdraw"===this.manageFundsText&&e.gt(a)?this.errMsg=this.$t("dappsAmbrpay.errors.amount-higher-sub-balance"):this.errMsg=""}},methods:{onClick:function(){"Add"===this.manageFundsText&&!0===this.actionStep?(this.$emit("addFunds",this.ethAmount),this.actionStep=!1):"Withdraw"===this.manageFundsText&&!0===this.actionStep?(this.$emit("withdrawFunds",this.ethAmount),this.actionStep=!1):(this.$refs["manageFundsModal"].hide(),this.actionStep=!0,this.ethAmount="")}}},_=A,C=(s("62d5"),s("8ca3"),Object(f["a"])(_,g,y,!1,null,"0ae8f0cc",null)),x=C.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-container"},[s("b-modal",{ref:"manageSubscriptionsModal",attrs:{title:t.$t("dappsAmbrpay.my-subscriptions"),centered:"","hide-footer":"",static:"",lazy:""}},[s("div",{staticClass:"modal-contents"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.subscriptions.length,expression:"subscriptions.length === 0"}],staticClass:"no-sub-container"},[s("p",{staticClass:"mx-auto pl-3"},[t._v(" "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.no-active"))+" ")])]),t._l(t.subscriptions,(function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.subscriptions.length>0,expression:"subscriptions.length > 0"}],key:e.key,staticClass:"subscription-container"},[s("div",{staticClass:"info-container"},[s("div",{staticClass:"header-txt"},[s("span",{staticClass:"header-container"},[s("i",{class:"Active"===e.subscriptionStatus?"check-icon fa fa-check":"times-icon fa fa-times",attrs:{"aria-hidden":"true"}}),s("span",{class:["status-txt","Active"===e.subscriptionStatus?"active-txt":"inactive-txt"]},[t._v(" "+t._s(e.subscriptionStatus)+" ")]),s("span",{staticClass:"next-pay-txt"},[t._v("("+t._s(t.$t("dappsAmbrpay.manage-subscriptions.next-payment"))+" "+t._s(t.formatDate(e.cycleEnd))+")")])]),s("span",[s("i",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}],staticClass:"fa fa-angle-up",attrs:{"aria-hidden":"true"},on:{click:function(s){return t.toggleMoreInfo(e)}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:!e.moreInfo,expression:"!sub.moreInfo"}],staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"},on:{click:function(s){return t.toggleMoreInfo(e)}}})])]),s("div",{staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.receiver-wallet")))]),s("a",{staticClass:"address-txt prevent-user-select",attrs:{title:e.receiverWallet,href:"https://etherscan.io/address/"+e.receiverWallet,rel:"noopener noreferrer"}},[t._v(" "+t._s(e.receiverWallet)+" ")])]),s("div",{staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("sendTx.amount")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.price)+" "+t._s(t.$t("common.currency.eth")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}],staticClass:"more-info-container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionInterval,expression:"sub.subscriptionInterval"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.current-cycle")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(t.formatDate(e.cycleStart))+"-"+t._s(t.formatDate(e.cycleEnd)))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionInterval,expression:"sub.subscriptionInterval"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.interval")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(t.$t("dappsAmbrpay.in-every"))+" "+t._s(e.subscriptionInterval)+" "+t._s(t.$t("dappsAmbrpay.days-lowercase")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionPlan,expression:"sub.subscriptionPlan"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-plan")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionPlan))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionCurrencyCode,expression:"sub.subscriptionCurrencyCode"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-currency")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionCurrencyCode))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.subscriptionStatus,expression:"sub.subscriptionStatus"}],staticClass:"info-row"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.$t("dappsAmbrpay.manage-subscriptions.sub-status")))]),s("span",{staticClass:"info-txt"},[t._v(t._s(e.subscriptionStatus))])])])]),s("hr",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}]}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.moreInfo,expression:"sub.moreInfo"}],staticClass:"btn-container mb-2"},[s("button",{on:{click:function(s){return t.unsubscribe(e.storagePos,e.smartContractAddress)}}},[t._v(" "+t._s(t.$t("dappsAmbrpay.manage-subscriptions.unsubscribe"))+" ")])])])}))],2)])],1)},S=[],$={props:{subscriptions:{type:Array,default:function(){return[]}}},methods:{formatDate:function(t){return t?t.substr(3,2)+"/"+t.substr(0,2)+"/"+t.substr(6,4):""},toggleMoreInfo:function(t){t.moreInfo=!t.moreInfo},unsubscribe:function(t,e){var s=this;this.$emit("unsubscribeSub",{pos:t,addr:e}),this.$nextTick((function(){s.$refs["manageSubscriptionsModal"].hide()}))}}},k=$,E=(s("da7a"),Object(f["a"])(k,M,S,!1,null,"48ad3576",null)),F=E.exports;s("c975"),s("a9e3");
/*!
 * ambrpay JavaScript Library v0.2.2
 * https://ambrpay.io/
 */
function I(t,e){if(!s)var s="https://ambrpay.io/api";var a=e,n=t.address,r={apiKey:!1,testMode:!1,contractAddress:!1,contractAddresses:!1,network:"auto",setApiKey:function(t){if(r.apiKey=t,-1!=r.apiKey.indexOf("test_public"))r.testMode=!0;else{if(-1==r.apiKey.indexOf("api_public"))throw"invalid public api key";r.testMode=!1}},getContractAddresses:function(){return new Promise((function(t,e){if(r.contractAddress)return t(r.contractAddress);if(a||e("MetaMask is not installed. Download it at https://metamask.io/"),r.contractAddresses)return t(r.contractAddresses);var n=s+"/smartContractAddresses";return r.getRequest(n,r.apiKey).then((function(e){return r.contractAddresses=JSON.parse(e),t(r.contractAddresses)}))})).then((function(){switch(t.netId){case"1":if("mainnet"!=r.network&&"auto"!=r.network)throw"your wallets network (mainnet) does not match the selected network for the transaction ("+r.network+")";"Mainnet",r.contractAddress=r.contractAddresses.mainnet.smartContractAddress,r.ABI={abi:JSON.parse(r.contractAddresses.mainnet.abi)};break;case"2":throw"Morden testnet is not available. Try ropsten testnet.";case"3":if("ropsten"!=r.network&&"auto"!=r.network)throw"your wallets network (ropsten) does not match the selected network for the transaction ("+r.network+")";"Ropsten Testnet",r.contractAddress=r.contractAddresses.ropsten.smartContractAddress,r.ABI={abi:JSON.parse(r.contractAddresses.ropsten.abi)};break;case"4":throw"Rinkeby testnet is not available. Try ropsten testnet.";case"42":throw"Kovan testnet is not available. Try ropsten testnet.";default:throw"Uknown testnet. Try ropsten testnet."}return r.contractAddress}))},getSubscriptionPlan:function(t){var e=s+"/plan/"+t;return r.getRequest(e).then((function(t){return JSON.parse(t)}))},subscribe:function(t){var e,s,n,i,o,c,u=!1;return t.network&&(r.network=t.network),r.getContractAddresses().then((function(){return r.metaMaskLoaded()})).then((function(){return r.getMetaMaskAccount()})).then((function(s){return e=s,r.getSubscriptionPlan(t.subscriptionPlan)})).then((function(e){if(n=e,!n.wallet&&!t.receiverWallet)throw"Subscription plan has no wallet assigned to it, therefore param 'receiverWallet' is required when calling ambrpay.subscribe()";if(s=n.wallet?n.wallet:t.receiverWallet,!a.utils.isAddress(s))throw"receiverAddress is not a valid address";if(-1==n.daysInterval&&!t.interval)throw"Subscription plan has interval set to custom, therefore param 'interval' is required when calling ambrpay.subscribe()";if(-1==n.daysInterval&&!r.isInt(t.interval))throw"interval must be an integer";if(-1==n.daysInterval&&t.interval&&parseInt(t.interval)>=1&&parseInt(t.interval)<=365)n.daysInterval=parseInt(t.interval);else if(-1==n.daysInterval&&t.interval)throw"interval must be between 1 and 365";if("undefined"!==typeof t.transferOut&&"boolean"!==typeof t.transferOut)throw"transferOut must be a boolean";if(u=!(!t.transferOut||1!=n.transferOut),n.acceptedCryptoCurrencies.Ethereum.price>0)return n.acceptedCryptoCurrencies.Ethereum.price;if(t.amount){if(!r.isInt(t.amount)&&!r.isFloat(t.amount))throw"amount must be an integer or a float";if(o=t.amount,"ETH"!=n.currencyCode){if(o<1)throw"the minimum amount is "+n.currencyCode+" 1.00 ";return r.getExchangePrice(n.currencyCode,"ETH",o).then((function(t){return t}))}if(t.amount<.01)throw"the minimum amount is 0.01 ETH";return t.amount}})).then((function(t){if(i=t,c=t/100*n.fee,c=1e18*c/1e18,a.utils.isAddress(n.wallet))var o=parseFloat(i);else o=parseFloat(i)+parseFloat(c);var d=o*(1+n.priceLimitPercentage/100);return new Promise((function(t,i){var l=new a.eth.Contract(r.ABI.abi,r.contractAddress);return l.methods.createSubscriptionWithTransfer(s,n.daysInterval,a.utils.toWei(d.toString(),"ether"),u,a.utils.toWei(c.toString(),"ether")).send({value:a.utils.toWei(o.toString(),"ether"),gas:5e5,from:e}).then((function(e){return t(e)})).catch((function(t){return i(t)}))}))})).then((function(a){var c={subscriptionPlanId:n.id,senderWallet:e,receiverWallet:s,customerId:t.customerId,customerEmail:t.customerEmail,customerDescription:t.customerDescription,transactionHash:a.transactionHash,subscriptionCurrency:"ETH",subscriptionPrice:i,customPrice:o,interval:t.interval,transferOut:u,smartContractAddress:r.contractAddress};return r.createSubscription(c).then((function(){return a.transactionHash}))}))},createSubscription:function(t){var e=s+"/subscription";return r.postRequest(e,t).then((function(t){return JSON.parse(t)}))},getExchangePrice:function(t,e,a){var n=s+"/price/"+t+"/"+e+"/"+a;return r.getRequest(n)},getRequest:function(t){if(!r.apiKey)throw"ambrpay api key not set";return new Promise((function(e,s){var a=new XMLHttpRequest;a.open("GET",t,!0),a.setRequestHeader("Authorization","Bearer "+r.apiKey),a.onreadystatechange=function(){if(4==a.readyState&&200==a.status)return e(a.responseText);4==a.readyState&&200!=a.status&&s(a.responseText)},a.send()}))},postRequest:function(t,e){if(!r.apiKey)throw"ambrpay api key not set";return new Promise((function(s,a){var n=new XMLHttpRequest;n.open("POST",t,!0),n.setRequestHeader("Authorization","Bearer "+r.apiKey),n.onreadystatechange=function(){4==n.readyState&&200==n.status?s(n.responseText):4==n.readyState&&200!=n.status&&a(n.responseText)},n.send(JSON.stringify(e))}))},metaMaskLoaded:function(){return new Promise((function(t,e){return"undefined"==a&&e("MetaMask is missing. Please download the MetaMask browser extension."),t(!0)}))},getMetaMaskAccount:function(){return new Promise((function(t,e){return t(n)}))},getSubscriptionFunds:function(){return r.getContractAddresses().then((function(){return r.getMetaMaskAccount()})).then((function(t){if(!t)throw"Error retrieving your metamask wallet address. Make sure metamask is unlocked";return new Promise((function(e,s){var n=new a.eth.Contract(r.ABI.abi,r.contractAddress),i=n.methods.getBalances(t).call();return e(i)}))}))},getSubscriptions:function(t){return new Promise((function(e,a){if(t){var n=s+"/subscriptions/"+t;return r.getRequest(n,r.apiKey).then((function(t){return r.subscriptions=JSON.parse(t),e(r.subscriptions)}))}return r.getMetaMaskAccount().then((function(t){var a=s+"/subscriptions/"+t;return r.getRequest(a,r.apiKey).then((function(t){return r.subscriptions=JSON.parse(t),e(r.subscriptions)}))}))}))},getMetaMaskBalance:function(){return new Promise((function(t,s){return r.getMetaMaskAccount().then((function(n){return a.eth.getBalance(n,(function(n,r){if(n)return s(n);var i=a.utils.fromWei(r,"ether");return i=e.utils.toDecimal(i),t(i)}))}))}))},unsubscribe:function(t,e){return new Promise((function(s,n){var i=new a.eth.Contract(r.ABI.abi,e);return r.getMetaMaskAccount().then((function(e){return i.methods.deactivateSubscription(t).send({gas:5e5,from:e}).then((function(t){s(t)})).catch((function(t){n(t)}))}))}))},addFunds:function(t){return new Promise((function(e,s){return r.getMetaMaskAccount().then((function(n){var i=new a.eth.Contract(r.ABI.abi,r.contractAddress);return i.methods.addFunds(n).send({value:a.utils.toWei(t),gas:5e5,from:n}).then((function(t){return e(t)})).catch((function(t){return s(t)}))}))}))},withdrawFunds:function(t){return new Promise((function(e,s){return r.getMetaMaskAccount().then((function(n){var i=new a.eth.Contract(r.ABI.abi,r.contractAddress);return i.methods.withdrawFunds(a.utils.toWei(t)).send({gas:5e5,from:n}).then((function(t){return e(t)})).catch((function(t){return s(t)}))}))}))},isInt:function(t){return Number(t)===t&&t%1===0},isFloat:function(t){return Number(t)===t&&t%1!==0}};return r.setApiKey(t.publicApiKey),r}var T=s("572c"),B=s("ce96"),O={components:{"subscription-form":w,"back-button":T["a"],"manage-funds-modal":x,"manage-subscriptions-modal":F},data:function(){return{availableBalanceEth:"",availableBalanceUSD:"",manageFundsText:"",ethPrice:0,loadingBalance:!0,ambrpay:"",subscriptions:[]}},computed:Object(o["a"])({},Object(d["c"])("main",["web3","network","notifications","online","account"])),mounted:function(){var t=this;this.init(),this.getSubscriptions(),this.$refs.manageSubs.$refs.manageSubscriptionsModal.$on("show",(function(){t.getSubscriptions()})),this.online&&this.getEthPrice()},methods:{init:function(){var t={publicApiKey:"api_public_DXfGdjBB4eIVgbURCCCAIQ2S",address:this.account.address,netId:this.network.type.chainID.toString()};this.ambrpay=new I(t,this.web3),this.getSubscriptionFunds()},getSubscriptionFunds:function(){var t=this;this.ambrpay.getSubscriptionFunds().then((function(e){t.availableBalanceEth=new p.a(t.web3.utils.fromWei(e,"ether")).toFixed(),t.convertToUSD(),t.loadingBalance=!1})).catch((function(e){t.loadingBalance=!1,B["e"].responseHandler(e,B["e"].ERROR)}))},convertToUSD:function(){this.availableBalanceUSD="--",this.availableBalanceEth&&(this.availableBalanceUSD=new p.a(new p.a(this.availableBalanceEth).times(new p.a(this.ethPrice))).toFixed(2))},openManageFundsModal:function(t){this.manageFundsText=this.$t(t),this.$refs.manageFunds.$refs.manageFundsModal.show()},openManageSubModal:function(){this.$refs.manageSubs.$refs.manageSubscriptionsModal.show()},getEthPrice:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cryptorates.mewapi.io/ticker?filter=ETH").then((function(t){return t.json()})).catch((function(t){B["e"].responseHandler(t,B["e"].ERROR)}));case 2:s=e.sent,t.ethPrice="object"===Object(r["a"])(s)?s.data.ETH.quotes.USD.price:0;case 4:case"end":return e.stop()}}),e)})))()},startSubscription:function(t){this.ambrpay.subscribe(t).then(this.getSubscriptions).catch((function(t){B["e"].responseHandler(t,B["e"].ERROR)}))},addFunds:function(t){this.ambrpay.addFunds(t).then(this.getSubscriptionFunds).catch((function(t){B["e"].responseHandler(t,B["e"].ERROR)}))},withdrawFunds:function(t){this.ambrpay.withdrawFunds(t).then(this.getSubscriptionFunds).catch((function(t){B["e"].responseHandler(t,B["e"].ERROR)}))},unsubscribeSub:function(t){this.ambrpay.unsubscribe(t.pos,t.addr).then(this.getSubscriptions).catch((function(t){B["e"].responseHandler(t,B["e"].ERROR)}))},getSubscriptions:function(){var t=this;this.ambrpay.getSubscriptions().then((function(e){t.subscriptions=e.map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{moreInfo:!1})}))})).catch((function(t){B["e"].responseHandler(t,B["e"].ERROR)}))}}},R=O,P=(s("78cc"),Object(f["a"])(R,a,n,!1,null,"e0c0e1ea",null));e["default"]=P.exports},"2d49":function(t,e,s){},4055:function(t,e,s){},4549:function(t,e,s){},"60c6":function(t,e,s){"use strict";var a=s("2d49"),n=s.n(a);n.a},"62d5":function(t,e,s){"use strict";var a=s("4549"),n=s.n(a);n.a},"78cc":function(t,e,s){"use strict";var a=s("4055"),n=s.n(a);n.a},8849:function(t,e,s){},"8ca3":function(t,e,s){"use strict";var a=s("cc7a"),n=s.n(a);n.a},cc7a:function(t,e,s){},da7a:function(t,e,s){"use strict";var a=s("8849"),n=s.n(a);n.a}}]);