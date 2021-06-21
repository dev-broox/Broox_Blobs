!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],e):"object"==typeof exports?exports.brooxBlobsLibrary=e(require("lodash")):t.brooxBlobsLibrary=e(t._)}(self,(function(t){return(()=>{"use strict";var e={92:e=>{e.exports=t}},i={};function n(t){var o=i[t];if(void 0!==o)return o.exports;var s=i[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n(92);const t="/tuio/2Dobj",e="/tuio/2Dcur",i="/tuio/2Dblb",s="/tuio/broox_markers",h="/tuio/skel";function a(t,e,i){var n={};n.id=e[1].toString();let o=e[6],s=i.offset,h=i.width,a=i.width;return n.hand_left={x:e[2],y:e[3],width:o*h,height:o*a},n.hand_right={x:e[4],y:e[5],width:o*h,height:o*a},n.scale=o,l(n.hand_left)&&(n.hand_left.x=n.hand_left.x*h+s.x,n.hand_left.y=n.hand_left.y*a+s.y),l(n.hand_right)&&(n.hand_right.x=n.hand_right.x*h+s.x,n.hand_right.y=n.hand_right.y*a+s.y),n}function l(t){return t.x>=0&&t.y>=0}function d(n,o,h){let a=h.offset,l=h.width,d=h.height;var c=Object.assign({},{type:null,id:"",classId:"",x:0,y:0,rotation:0,width:0,height:0,velocityX:0,velocityY:0,timeAlive:0});switch(c.id=o[1].toString(),n){case i:if(!r(o,13))return null;c.x=o[2],c.y=o[3],c.rotation=o[4],c.width=o[5],c.height=o[6],c.velocityX=o[8],c.velocityY=o[9],c.timeAlive=o[12];break;case t:if(!r(o,11))return null;c.classId=o[2],c.x=o[3],c.y=o[4],c.rotation=o[5];break;case e:if(!r(o,7))return null;c.x=o[2],c.y=o[3],c.width=60/l,c.height=c.width;break;case s:c.classId=o[2],c.x=o[3],c.y=o[4],c.rotation=o[5],c.width=o[6];break;default:console.error(`decodeSet_blob does not handle ${n}`)}return c.x=c.x*l+a.x,c.y=c.y*d+a.y,c.width=c.width*l,c.height=c.height*d,c}function r(t,e){return t.length==e||(console.error("Wrong Tuio set format. Supposed to have length "+e+" and has length "+t.length),!1)}const c=function(t,e=""){this.id=t,this.classId=e,this.update=t=>{this.width=t.width?t.width:0,this.height=t.height?t.height:0,this.rotation=t.rotation?t.rotation:0,this.timeAlive=t.timeAlive?t.timeAlive:0,!t.velocityX&&!t.velocityY&&this.x&&this.y&&t.x&&t.y?(this.velocityX=t.x-this.x,this.velocityY=t.y-this.y):(this.velocityX=t.velocityX?t.velocityX:0,this.velocityY=t.velocityY?t.velocityY:0),this.x=t.x,this.y=t.y}},u=function(t=window){let e=this,i=new Map;function n(t,n){let o;i.has(t.id)?o=i.get(t.id):(o=Date.now()+Math.round(1e3*Math.random()),i.set(t.id,o));let s=n?n(t):{},h=Object.assign({identifier:o,target:e.target,pageX:t.x,pageY:t.y,clientX:t.x,clientY:t.y,screenX:t.x,screenY:t.y},s);return new Touch(h)}this.activeBlobs=new Map,this.target=t,this.update=function(t,e,o,s,h=null){let a=t.map((t=>n(t,h))),l=e.map((t=>n(t,h))),d=o.map((t=>n(t,h))),r=s.map((t=>n(t,h)));for(let t of o)i.delete(t.id,h);return{added:a,moved:l,deleted:d,all:r}}},f=function(t){let e=this,i=new u(t);function n(t){return{radiusX:t.width,radiusY:t.height,rotationAngle:t.rotation}}this.activeTouches=new Map,this.setTouchTarget=function(t){i.target=t},this.update=function(t){let o=[],s=[],h=[],a=[];for(let[i,n]of t)e.activeTouches.has(i)?s.push(n):(o.push(n),e.activeTouches.set(i,n)),a.push(n);for(let[e,i]of this.activeTouches)t.has(e)||h.push(i);for(let t of h)this.activeTouches.delete(t.id);return i.update(o,s,h,a,n)}},g=function(t,e,i){let n=this,o=d,s=new f(t);this.activeItems=new Map,this.setTouchTarget=function(t){s.setTouchTarget(t)},this.updateSet=function(t,i,n){let s=o(t,i,n),h=s.id;if(h)if(this.activeItems.has(h))this.activeItems.get(h).update(s);else{console.log(`${h} is not included in`),console.log(this.activeItems);let t=new c(h,s.classId);this.activeItems.set(h,t),t.update(s),e(h)}else console.error("set error: every item needs to have an id")},this.deleteItem=function(t){this.activeItems.delete(t),i(t)},this.updateTouches=function(){return s.update(n.activeItems)}},v=function(t){this.id=t,this.hand_left={id:t+"_hand_left",x:-1,y:-1},this.hand_right={id:t+"_hand_right",x:-1,y:-1},this.scale=-1,this.update=t=>{this.hand_left.x=t.hand_left.x,this.hand_left.y=t.hand_left.y,this.hand_left.width=t.hand_left.width,this.hand_left.height=t.hand_left.height,this.hand_right.x=t.hand_right.x,this.hand_right.y=t.hand_right.y,this.hand_right.width=t.hand_right.width,this.hand_right.height=t.hand_right.height,this.scale=t.scale},this.isHandValid=function(t){return t.x>=0&&t.y>=0},this.validHands=function(){let t=[];return this.isHandValid(this.hand_left)&&t.push(this.hand_left),this.isHandValid(this.hand_right)&&t.push(this.hand_right),t}},p=function(t){let e=this,i=new u(t);this.activeTouches=new Map,this.setTouchTarget=function(t){i.target=t},this.update=function(t){let n=new Set,o=[],s=[],h=[],a=[];for(let[i,h]of t){let t=h.validHands();for(let i of t)e.activeTouches.has(i.id)?s.push(i):(o.push(i),e.activeTouches.set(i.id,i)),n.add(i.id),a.push(i)}for(let[t,e]of this.activeTouches)n.has(t)||h.push(e);for(let t of h)this.activeTouches.delete(t.id);return i.update(o,s,h,a)}},w=function(t,e,i){let n=this,o=a,s=new p(t);this.activeItems=new Map,this.setTouchTarget=function(t){s.setTouchTarget(t)},this.updateSet=function(t,i,s){let h=o(t,i,s),a=h.id;if(a)if(this.activeItems.has(a))this.activeItems.get(a).update(h);else{let t=new v(a);n.activeItems.set(a,t),t.update(h),e(a)}else console.error("set error: every item needs to have an id")},this.deleteItem=function(t){this.activeItems.delete(t),i(t)},this.updateTouches=function(){return s.update(n.activeItems)}},y=function(t){let e,i,n=this;this.onFrameUpdate=null,this.onAdded=null,this.onDeleted=null;let o=window,s=!0,a={width:window.innerWidth,height:window.innerHeight,offset:{x:0,y:0}};function l(t){var e=[];for(let[o,s]of i.activeItems){let i=!1;for(var n of t)if(i=n==o,i)break;i||(console.log(`${o} is not included in ${t} -> remove it`),e.push(o))}for(let t of e)i.deleteItem(t)}function d(t,e,i){console.log("ON ITEM ADDED: "+t),null!=n.onAdded&&n.onAdded(t,e,i)}function r(t){console.log("ON ITEM DELETED: "+t),null!=n.onDeleted&&n.onDeleted(t)}this.setTouchTarget=function(t){o=t,i&&i.setTouchTarget(t)},this.setTouchEventsEnabled=function(t){s=t},this.setMessageAddress=function(t){if(e!==t)if(t.includes("/tuio/"))switch(e=t,e){case h:i=new w(o,d,r);break;default:i=new g(o,d,r)}else console.log(`${t} is not a TUIO address`)},this.setActiveArea=function(t,e,i,n){a.width=i,a.height=n,a.offset={x:t,y:e}},this.getMessageAddress=function(){return e},this.getActiveItems=function(){return i?i.activeItems:new Map},this.onOSCMessage=function(t){for(var o in t){var s=t[o].args;if(null!=s){var h=t[o].address;if(h&&!e)n.setMessageAddress(h);else if(h!==e)continue;if(!i)return;switch(s[0]){case"fseq":if(s.length<=1)return;d=s[1],null!=n.onFrameUpdate&&n.onFrameUpdate(d);break;case"set":i.updateSet(h,s,a);break;case"alive":l(s)}}}var d;return e},this.updateTouches=function(){return i&&s?i.updateTouches():null}};window.broox_blobs||(window.broox_blobs=new function(){let t=null,e=new y(t),i=new Map,n=window;function o(t){if(e)t(e);else for(let[e,n]of i)t(n)}function s(n){return!n&&e?e:!n&&t?i.get(t):n?i.get(n):null}function h(t,e,i){return new TouchEvent(t,{changedTouches:e,targetTouches:i,touches:i})}this.setInput=function(n=[],o=window){i=new Map,t=null,e=null;for(let e of n){let n=e.address;if(!n)continue;let o=new y(n);i.has(n)||(t||(t=n),null!=e.touchEvents&&o.setTouchEventsEnabled(e.touchEvents),i.set(n,o))}this.setTouchTarget(o)},this.setTouchTarget=function(t){console.log(`Broox Blobs set touch target: ${t}`),n=t,o((e=>{e.setTouchTarget(t)}))},this.setActiveArea=function(t,e,i,n){console.log("Broox Blobs set active area: ",t,e,i,n),o((o=>{o.setActiveArea(t,e,i,n)}))},this.setTouchEventsEnabled=function(t,e=null){let i=s(e);i&&i.setTouchEventsEnabled(t)},this.getActiveItems=function(e=null){let i=s(e);return console.log("??"),console.log(t),console.log(i),i?i.getActiveItems():new Map},window.addEventListener("message",(function(n){!function(n){if(o((t=>{t.onOSCMessage(n)})),e){const n=e.getMessageAddress();n&&(i.set(n,e),e=null,t||(t=n))}}(n.data)}),!1),window.requestAnimationFrame((function t(){let e=[],i=[],s=[],a=[];o((t=>{let n=t.updateTouches();n&&n.all&&(n.added&&(e=e.concat(n.added)),n.moved&&(i=i.concat(n.moved)),n.deleted&&(s=s.concat(n.deleted)),a=a.concat(n.all))})),function(t,e){0!=t.length&&n.dispatchEvent(h("touchstart",t,e))}(e,a),function(t,e){0!=t.length&&(console.log(n),console.log(t),n.dispatchEvent(h("touchmove",t,e)))}(i,a),function(t,e){0!=t.length&&n.dispatchEvent(h("touchend",t,e))}(s,a),window.requestAnimationFrame(t)}))})})(),o})()}));