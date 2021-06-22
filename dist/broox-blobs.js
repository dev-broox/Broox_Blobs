!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],e):"object"==typeof exports?exports.brooxBlobsLibrary=e(require("lodash")):t.brooxBlobsLibrary=e(t._)}(self,(function(t){return(()=>{"use strict";var e={92:e=>{e.exports=t}},i={};function n(t){var s=i[t];if(void 0!==s)return s.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{n.r(s),n(92);const t="/tuio/2Dobj",e="/tuio/2Dcur",i="/tuio/2Dblb",o="/tuio/broox_markers",h="/tuio/skel";function a(t,e,i){var n={};n.id=e[1].toString();let s=e[6],o=i.offset,h=i.width,a=i.height;return n.hand_left={x:e[2],y:e[3],width:s*h,height:s*a},n.hand_right={x:e[4],y:e[5],width:s*h,height:s*a},n.scale=s,d(n.hand_left)&&(n.hand_left.x=n.hand_left.x*h+o.x,n.hand_left.y=n.hand_left.y*a+o.y),d(n.hand_right)&&(n.hand_right.x=n.hand_right.x*h+o.x,n.hand_right.y=n.hand_right.y*a+o.y),n}function d(t){return t.x>=0&&t.y>=0}function r(n,s,h){let a=h.offset,d=h.width,r=h.height;var u=Object.assign({},{type:null,id:"",classId:"",x:0,y:0,rotation:0,width:0,height:0,velocityX:0,velocityY:0,timeAlive:0});switch(u.id=s[1].toString(),n){case i:if(!l(s,13))return null;u.x=s[2],u.y=s[3],u.rotation=s[4],u.width=s[5],u.height=s[6],u.velocityX=s[8],u.velocityY=s[9],u.timeAlive=s[12];break;case t:if(!l(s,11))return null;u.classId=s[2],u.x=s[3],u.y=s[4],u.rotation=s[5];break;case e:if(!l(s,7))return null;u.x=s[2],u.y=s[3],u.width=60/d,u.height=u.width;break;case o:u.classId=s[2],u.x=s[3],u.y=s[4],u.rotation=s[5],u.width=s[6];break;default:console.error(`decodeSet_blob does not handle ${n}`)}return u.x=u.x*d+a.x,u.y=u.y*r+a.y,u.width=u.width*d,u.height=u.height*r,u}function l(t,e){return t.length==e||(console.error("Wrong Tuio set format. Supposed to have length "+e+" and has length "+t.length),!1)}const u=function(t,e=""){this.id=t,this.classId=e,this.update=t=>{this.width=t.width?t.width:0,this.height=t.height?t.height:0,this.rotation=t.rotation?t.rotation:0,this.timeAlive=t.timeAlive?t.timeAlive:0,!t.velocityX&&!t.velocityY&&this.x&&this.y&&t.x&&t.y?(this.velocityX=t.x-this.x,this.velocityY=t.y-this.y):(this.velocityX=t.velocityX?t.velocityX:0,this.velocityY=t.velocityY?t.velocityY:0),this.x=t.x,this.y=t.y}},c=function(t=window){let e=this,i=new Map;function n(t,n){let s;i.has(t.id)?s=i.get(t.id):(s=Date.now()+Math.round(1e3*Math.random()),i.set(t.id,s));let o=n?n(t):{},h=Object.assign({identifier:s,target:e.target,pageX:t.x,pageY:t.y,clientX:t.x,clientY:t.y,screenX:t.x,screenY:t.y},o);return new Touch(h)}this.activeBlobs=new Map,this.target=t,this.update=function(t,e,s,o,h=null){let a=t.map((t=>n(t,h))),d=e.map((t=>n(t,h))),r=s.map((t=>n(t,h))),l=o.map((t=>n(t,h)));for(let t of s)i.delete(t.id,h);return{added:a,moved:d,deleted:r,all:l}}},f=function(t){let e=this,i=new c(t);function n(t){return{radiusX:t.width,radiusY:t.height,rotationAngle:t.rotation}}this.activeTouches=new Map,this.setTouchTarget=function(t){i.target=t},this.update=function(t){let s=[],o=[],h=[],a=[];for(let[i,n]of t)e.activeTouches.has(i)?o.push(n):(s.push(n),e.activeTouches.set(i,n)),a.push(n);for(let[e,i]of this.activeTouches)t.has(e)||h.push(i);for(let t of h)this.activeTouches.delete(t.id);return i.update(s,o,h,a,n)}},g=function(t,e,i){let n=this,s=r,o=new f(t);this.activeItems=new Map,this.setTouchTarget=function(t){o.setTouchTarget(t)},this.updateSet=function(t,i,n){let o=s(t,i,n),h=o.id;if(h)if(this.activeItems.has(h))this.activeItems.get(h).update(o);else{let t=new u(h,o.classId);this.activeItems.set(h,t),t.update(o),e(h)}else console.error("set error: every item needs to have an id")},this.deleteItem=function(t){this.activeItems.delete(t),i(t)},this.updateTouches=function(){return o.update(n.activeItems)}},v=function(t){this.id=t,this.hand_left={id:t+"_hand_left",x:-1,y:-1},this.hand_right={id:t+"_hand_right",x:-1,y:-1},this.scale=-1,this.update=t=>{this.hand_left.x=t.hand_left.x,this.hand_left.y=t.hand_left.y,this.hand_left.width=t.hand_left.width,this.hand_left.height=t.hand_left.height,this.hand_right.x=t.hand_right.x,this.hand_right.y=t.hand_right.y,this.hand_right.width=t.hand_right.width,this.hand_right.height=t.hand_right.height,this.scale=t.scale},this.isHandValid=function(t){return t.x>=0&&t.y>=0},this.validHands=function(){let t=[];return this.isHandValid(this.hand_left)&&t.push(this.hand_left),this.isHandValid(this.hand_right)&&t.push(this.hand_right),t}},p=function(t){let e=this,i=new c(t);this.activeTouches=new Map,this.setTouchTarget=function(t){i.target=t},this.update=function(t){let n=new Set,s=[],o=[],h=[],a=[];for(let[i,h]of t){let t=h.validHands();for(let i of t)e.activeTouches.has(i.id)?o.push(i):(s.push(i),e.activeTouches.set(i.id,i)),n.add(i.id),a.push(i)}for(let[t,e]of this.activeTouches)n.has(t)||h.push(e);for(let t of h)this.activeTouches.delete(t.id);return i.update(s,o,h,a)}},w=function(t,e,i){let n=this,s=a,o=new p(t);this.activeItems=new Map,this.setTouchTarget=function(t){o.setTouchTarget(t)},this.updateSet=function(t,i,o){let h=s(t,i,o),a=h.id;if(a)if(this.activeItems.has(a))this.activeItems.get(a).update(h);else{let t=new v(a);n.activeItems.set(a,t),t.update(h),e(a)}else console.error("set error: every item needs to have an id")},this.deleteItem=function(t){this.activeItems.delete(t),i(t)},this.updateTouches=function(){return o.update(n.activeItems)}},y=function(t){let e,i,n=this;this.onFrameUpdate=null,this.onAdded=null,this.onDeleted=null;let s=window,o=!0,a={width:window.innerWidth,height:window.innerHeight,offset:{x:0,y:0}};function d(t){var e=[];for(let[s,o]of i.activeItems){let i=!1;for(var n of t)if(i=n==s,i)break;i||(console.log(`${s} is not included in ${t} -> remove it`),e.push(s))}for(let t of e)i.deleteItem(t)}function r(t,e,i){console.log("ON ITEM ADDED: "+t),null!=n.onAdded&&n.onAdded(t,e,i)}function l(t){console.log("ON ITEM DELETED: "+t),null!=n.onDeleted&&n.onDeleted(t)}this.setTouchTarget=function(t){s=t,i&&i.setTouchTarget(t)},this.setTouchEventsEnabled=function(t){o=t},this.setMessageAddress=function(t){if(e!==t)if(t.includes("/tuio/"))switch(e=t,e){case h:i=new w(s,r,l);break;default:i=new g(s,r,l)}else console.log(`${t} is not a TUIO address`)},this.setActiveArea=function(t,e,i,n){a.width=i,a.height=n,a.offset={x:t,y:e}},this.getMessageAddress=function(){return e},this.getActiveItems=function(){return i?i.activeItems:new Map},this.onOSCMessage=function(t){for(var s in t){var o=t[s].args;if(null!=o){var h=t[s].address;if(h&&!e)n.setMessageAddress(h);else if(h!==e)continue;if(!i)return;switch(o[0]){case"fseq":if(o.length<=1)return;r=o[1],null!=n.onFrameUpdate&&n.onFrameUpdate(r);break;case"set":i.updateSet(h,o,a);break;case"alive":d(o)}}}var r;return e},this.updateTouches=function(){return i&&o?i.updateTouches():null}};window.broox_blobs||(window.broox_blobs=new function(){let t=null,e=new y(t),i=new Map,n=window;function s(t){if(e)t(e);else for(let[e,n]of i)t(n)}function o(n){return!n&&e?e:!n&&t?i.get(t):n?i.get(n):null}function h(t,e,i){return new TouchEvent(t,{changedTouches:e,targetTouches:i,touches:i})}this.setInput=function(s=[],o=null){i=new Map,t=null,e=null;for(let e of s){let n=e.address;if(!n)continue;let s=new y(n);i.has(n)||(t||(t=n),null!=e.touchEvents&&s.setTouchEventsEnabled(e.touchEvents),i.set(n,s))}this.setTouchTarget(o||n)},this.setTouchTarget=function(t){t&&(n=t,s((e=>{e.setTouchTarget(t)})))},this.setActiveArea=function(t,e,i,n){s((s=>{s.setActiveArea(t,e,i,n)}))},this.setTouchEventsEnabled=function(t,e=null){let i=o(e);i&&i.setTouchEventsEnabled(t)},this.getActiveItems=function(t=null){let e=o(t);return e?e.getActiveItems():new Map},window.addEventListener("message",(function(n){!function(n){if(s((t=>{t.onOSCMessage(n)})),e){const n=e.getMessageAddress();n&&(i.set(n,e),e=null,t||(t=n))}}(n.data)}),!1),window.requestAnimationFrame((function t(){let e=[],i=[],o=[],a=[];s((t=>{let n=t.updateTouches();n&&n.all&&(n.added&&(e=e.concat(n.added)),n.moved&&(i=i.concat(n.moved)),n.deleted&&(o=o.concat(n.deleted)),a=a.concat(n.all))})),function(t,e){0!=t.length&&n.dispatchEvent(h("touchstart",t,e))}(e,a),function(t,e){0!=t.length&&(console.log(n),console.log(t),n.dispatchEvent(h("touchmove",t,e)))}(i,a),function(t,e){0!=t.length&&n.dispatchEvent(h("touchend",t,e))}(o,a),window.requestAnimationFrame(t)}))})})(),s})()}));