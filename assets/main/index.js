System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,o,n,r,l,s,c,a,p,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,c=e.Collider2D,a=e.Contact2DType,p=e.Sprite,u=e.Component}],execute:function(){var h,v,d,f,g,m,C;r._RF.push({},"ccdbesM1FpAr6dqxO1k9w1f","Bird",void 0);var y=l.ccclass,B=l.property;e("Bird",(h=y("Bird"),v=B({type:[s]}),d=B({type:[Number]}),h((m=t((g=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,o(t,"spriteBird",m,n(t)),o(t,"spriteScale",C,n(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(c);e&&(e.on(a.BEGIN_CONTACT,this.onBeginContact,this),e.on(a.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,o){e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node))},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelUp=function(){this.level++,this.getComponent(p).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],this.node.scale.multiplyScalar(this.spriteScale[this.level]),console.log("level: "+this.level)},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(u)).prototype,"spriteBird",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=t(g.prototype,"spriteScale",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=g))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,c,l,p,s,u,y,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.input,p=t.Input,s=t.instantiate,u=t.RigidBody2D,y=t.ERigidBody2DType,f=t.Component}],execute:function(){var d,h,b,g,m;i._RF.push({},"19721ezRxRIhK8YRDeJRyPG","GameController",void 0);var v=a.ccclass,P=a.property;t("GameController",(d=v("GameController"),h=P({type:c}),d((m=e((g=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",m,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){l.on(p.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=s(this.birdPrefab),r=t.getUILocation();e.setParent(this.node),e.setWorldPosition(r.x,500,0),e.getComponent(u).type=y.Dynamic,e.getComponent(u).wakeUp()},i.update=function(t){},e}(f)).prototype,"birdPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=g))||b));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});