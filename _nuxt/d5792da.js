(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{337:function(t,o,n){"use strict";var e=n(24),l=n(100).findIndex,r=n(101),m="findIndex",c=!0;m in[]&&Array(1).findIndex((function(){c=!1})),e({target:"Array",proto:!0,forced:c},{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(m)},338:function(t,o,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("ef31c14a",content,!0,{sourceMap:!1})},339:function(t,o,n){"use strict";n(338)},340:function(t,o,n){var e=n(68)(!1);e.push([t.i,".list-group-item[data-v-6f53d714]{display:flex;justify-content:space-between;align-items:center}svg[data-v-6f53d714]{cursor:pointer}",""]),t.exports=e},341:function(t,o,n){"use strict";n.r(o);var e=n(44),l=(n(25),n(337),n(38),n(179),n(10),{name:"LearningGoalSetting",data:function(){return{currentGoalName:"",form:{goalName:"",subGoalName:""},goals:[{name:"金絲竹",subGoals:[{name:"莖"},{name:"葉"},{name:"花"},{name:"籜"}]},{name:"大王椰子",subGoals:[{name:"莖"},{name:"葉"},{name:"花"},{name:"果實"}]}]}},methods:{onAddGoal:function(){this.$bvModal.show("add-goal")},onAddSubGoal:function(t){this.currentGoalName=t,this.$bvModal.show("add-sub-goal")},onSubmitGoal:function(t){"submit"===t.type&&t.preventDefault(),this.form.goalName&&(this.goals=[].concat(Object(e.a)(this.goals),[{name:this.form.goalName,subGoals:[]}]),this.form.goalName="",this.$bvModal.hide("add-goal"))},onSubmitSubGoal:function(t){var o=this;if("submit"===t.type&&t.preventDefault(),this.form.subGoalName){var n=this.goals.findIndex((function(t){return t.name===o.currentGoalName})),l=this.goals[n];l.subGoals=[].concat(Object(e.a)(l.subGoals),[{name:this.form.subGoalName}]),this.goals.splice(n,1,l),this.form.subGoalName="",this.$bvModal.hide("add-sub-goal")}},onDeleteGoal:function(t){confirm("確定刪除 ".concat(t," ?"))&&(this.goals=this.goals.filter((function(o){return o.name!==t})))},onDeleteSubGoal:function(t,o){if(confirm("確定刪除 [".concat(t,"] 下的 [").concat(o,"] ?"))){var n=this.goals.findIndex((function(o){return o.name===t})),e=this.goals[n];e.subGoals=e.subGoals.filter((function(sub){return sub.name!==o})),this.goals.splice(n,1,e)}}}}),r=(n(339),n(90)),component=Object(r.a)(l,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"mt-5 mb-3 d-flex align-items-center"},[n("h5",{staticClass:"mr-3 mb-0"},[t._v("學習目標設定")]),t._v(" "),n("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(o){return t.onAddGoal()}}},[t._v("新增目標")])],1),t._v(" "),n("div",{staticClass:"row row-cols-1 row-cols-md-3"},t._l(t.goals,(function(o){return n("b-card",{key:o.name,staticClass:"col mb-3",attrs:{header:o.name,"header-bg-variant":"Light"}},[n("b-list-group",t._l(o.subGoals,(function(e){return n("b-list-group-item",{key:e.name},[t._v("\n          "+t._s(e.name)+"\n          "),n("b-icon",{staticClass:"cursor-pointer",attrs:{icon:"trash",scale:"1.2",variant:"danger"},on:{click:function(n){return t.onDeleteSubGoal(o.name,e.name)}}})],1)})),1),t._v(" "),n("b-button",{staticClass:"mt-3 mr-3",attrs:{variant:"success",size:"sm"},on:{click:function(n){return t.onAddSubGoal(o.name)}}},[t._v("新增子目標")]),t._v(" "),n("b-button",{staticClass:"mt-3 mr-3",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(n){return t.onDeleteGoal(o.name)}}},[t._v("刪除 "+t._s(o.name))])],1)})),1),t._v(" "),n("b-modal",{attrs:{id:"add-goal",title:"新增主要目標"},on:{ok:t.onSubmitGoal}},[n("b-form",{on:{submit:t.onSubmitGoal}},[n("b-form-group",{attrs:{label:"主要目標名稱","label-for":"goalName"}},[n("b-form-input",{attrs:{type:"text",id:"goalName",autofocus:""},model:{value:t.form.goalName,callback:function(o){t.$set(t.form,"goalName",o)},expression:"form.goalName"}})],1)],1)],1),t._v(" "),n("b-modal",{attrs:{id:"add-sub-goal",title:"在 ["+t.currentGoalName+"] 下，新增一項子目標"},on:{ok:t.onSubmitSubGoal}},[n("b-form",{on:{submit:t.onSubmitSubGoal}},[n("b-form-group",{attrs:{label:"子目標名稱","label-for":"name"}},[n("b-form-input",{attrs:{type:"text",id:"name",autofocus:"",required:""},model:{value:t.form.subGoalName,callback:function(o){t.$set(t.form,"subGoalName",o)},expression:"form.subGoalName"}})],1)],1)],1)],1)}),[],!1,null,"6f53d714",null);o.default=component.exports}}]);