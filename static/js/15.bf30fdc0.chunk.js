"use strict";(self.webpackChunkkitty_app=self.webpackChunkkitty_app||[]).push([[15],{32015:function(t,n,e){e.d(n,{g:function(){return Xn}});var r=e(29388),i=e(72791),o=e(5646);function a(t){return"undefined"!==typeof PointerEvent&&t instanceof PointerEvent?!("mouse"!==t.pointerType):t instanceof MouseEvent}function u(t){return!!t.touches}var s={pageX:0,pageY:0};function l(t,n){void 0===n&&(n="page");var e=t.touches[0]||t.changedTouches[0]||s;return{x:e[n+"X"],y:e[n+"Y"]}}function c(t,n){return void 0===n&&(n="page"),{x:t[n+"X"],y:t[n+"Y"]}}function v(t,n){return void 0===n&&(n="page"),{point:u(t)?l(t,n):c(t,n)}}var d=function(t,n){void 0===n&&(n=!1);var e,r=function(n){return t(n,v(n))};return n?(e=r,function(t){var n=t instanceof MouseEvent;(!n||n&&0===t.button)&&e(t)}):r},f=e(32968),p=e(84792);function m(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function h(t,n,e,r){(0,i.useEffect)((function(){var i=t.current;if(e&&i)return m(i,n,e,r)}),[t,n,e,r])}var g=e(26219),y={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},E={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function x(t){return g.j&&null===window.onpointerdown?t:g.j&&null===window.ontouchstart?E[t]:g.j&&null===window.onmousedown?y[t]:t}function P(t,n,e,r){return m(t,x(n),d(e,"pointerdown"===n),r)}function V(t,n,e,r){return h(t,x(n),e&&d(e,"pointerdown"===n),r)}var w=e(88950),A=e(42914),b=function(){function t(t,n,e){var i=this,o=(void 0===e?{}:e).transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(i.lastMoveEvent&&i.lastMoveEventInfo){var t=R(i.lastMoveEventInfo,i.history),n=null!==i.startEvent,e=(0,w.T)(t.offset,{x:0,y:0})>=3;if(n||e){var o=t.point,a=(0,f.$B)().timestamp;i.history.push((0,r.pi)((0,r.pi)({},o),{timestamp:a}));var u=i.handlers,s=u.onStart,l=u.onMove;n||(s&&s(i.lastMoveEvent,t),i.startEvent=i.lastMoveEvent),l&&l(i.lastMoveEvent,t)}}},this.handlePointerMove=function(t,n){i.lastMoveEvent=t,i.lastMoveEventInfo=C(n,i.transformPagePoint),a(t)&&0===t.buttons?i.handlePointerUp(t,n):f.ZP.update(i.updatePoint,!0)},this.handlePointerUp=function(t,n){i.end();var e=i.handlers,r=e.onEnd,o=e.onSessionEnd,a=R(C(n,i.transformPagePoint),i.history);i.startEvent&&r&&r(t,a),o&&o(t,a)},!(u(t)&&t.touches.length>1)){this.handlers=n,this.transformPagePoint=o;var s=C(v(t),this.transformPagePoint),l=s.point,c=(0,f.$B)().timestamp;this.history=[(0,r.pi)((0,r.pi)({},l),{timestamp:c})];var d=n.onSessionStart;d&&d(t,R(s,this.history)),this.removeListeners=(0,A.z)(P(window,"pointermove",this.handlePointerMove),P(window,"pointerup",this.handlePointerUp),P(window,"pointercancel",this.handlePointerUp))}}return t.prototype.updateHandlers=function(t){this.handlers=t},t.prototype.end=function(){this.removeListeners&&this.removeListeners(),f.qY.update(this.updatePoint)},t}();function C(t,n){return n?{point:n(t.point)}:t}function T(t,n){return{x:t.x-n.x,y:t.y-n.y}}function R(t,n){var e=t.point;return{point:e,delta:T(e,M(n)),offset:T(e,S(n)),velocity:L(n,.1)}}function S(t){return t[0]}function M(t){return t[t.length-1]}function L(t,n){if(t.length<2)return{x:0,y:0};for(var e=t.length-1,r=null,i=M(t);e>=0&&(r=t[e],!(i.timestamp-r.timestamp>(0,p.w)(n)));)e--;if(!r)return{x:0,y:0};var o=(i.timestamp-r.timestamp)/1e3;if(0===o)return{x:0,y:0};var a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function k(t){var n=null;return function(){return null===n&&(n=t,function(){n=null})}}var D=k("dragHorizontal"),I=k("dragVertical");function B(t){var n=!1;if("y"===t)n=I();else if("x"===t)n=D();else{var e=D(),r=I();e&&r?n=function(){e(),r()}:(e&&e(),r&&r())}return n}function F(){var t=B(!0);return!t||(t(),!1)}var U=e(88753),j=e(48657),O=e(80378),G=e(2581),z=e(63784);function H(t,n,e){return{min:void 0!==n?t.min+n:void 0,max:void 0!==e?t.max+e-(t.max-t.min):void 0}}function _(t,n){var e,i=n.min-t.min,o=n.max-t.max;return n.max-n.min<t.max-t.min&&(i=(e=(0,r.CR)([o,i],2))[0],o=e[1]),{min:i,max:o}}var N,$=.35;function W(t,n,e){return{min:Y(t,n),max:Y(t,e)}}function Y(t,n){var e;return"number"===typeof t?t:null!==(e=t[n])&&void 0!==e?e:0}!function(t){t.Animate="animate",t.Hover="whileHover",t.Tap="whileTap",t.Drag="whileDrag",t.Focus="whileFocus",t.InView="whileInView",t.Exit="exit"}(N||(N={}));var K=e(31218),Z=e(83275);function q(t){var n=t.top;return{x:{min:t.left,max:t.right},y:{min:n,max:t.bottom}}}var J=e(79652);function X(t,n){return q(function(t,n){if(!n)return t;var e=n({x:t.left,y:t.top}),r=n({x:t.right,y:t.bottom});return{top:e.y,left:e.x,bottom:r.y,right:r.x}}(t.getBoundingClientRect(),n))}var Q=e(89256),tt=e(64468),nt=new WeakMap,et=function(){function t(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=(0,K.dO)(),this.visualElement=t}return t.prototype.start=function(t,n){var e=this,r=(void 0===n?{}:n).snapToCursor,i=void 0!==r&&r;if(!1!==this.visualElement.isPresent){this.panSession=new b(t,{onSessionStart:function(t){e.stopAnimation(),i&&e.snapToCursor(v(t,"page").point)},onStart:function(t,n){var r,i=e.getProps(),o=i.drag,a=i.dragPropagation,u=i.onDragStart;(!o||a||(e.openGlobalLock&&e.openGlobalLock(),e.openGlobalLock=B(o),e.openGlobalLock))&&(e.isDragging=!0,e.currentDirection=null,e.resolveConstraints(),e.visualElement.projection&&(e.visualElement.projection.isAnimationBlocked=!0,e.visualElement.projection.target=void 0),(0,Z.U)((function(t){var n,r,i=e.getAxisMotionValue(t).get()||0;if(tt.aQ.test(i)){var o=null===(r=null===(n=e.visualElement.projection)||void 0===n?void 0:n.layout)||void 0===r?void 0:r.actual[t];if(o)i=(0,z.JO)(o)*(parseFloat(i)/100)}e.originPoint[t]=i})),null===u||void 0===u||u(t,n),null===(r=e.visualElement.animationState)||void 0===r||r.setActive(N.Drag,!0))},onMove:function(t,n){var r=e.getProps(),i=r.dragPropagation,o=r.dragDirectionLock,a=r.onDirectionLock,u=r.onDrag;if(i||e.openGlobalLock){var s=n.offset;if(o&&null===e.currentDirection)return e.currentDirection=function(t,n){void 0===n&&(n=10);var e=null;Math.abs(t.y)>n?e="y":Math.abs(t.x)>n&&(e="x");return e}(s),void(null!==e.currentDirection&&(null===a||void 0===a||a(e.currentDirection)));e.updateAxis("x",n.point,s),e.updateAxis("y",n.point,s),e.visualElement.syncRender(),null===u||void 0===u||u(t,n)}},onSessionEnd:function(t,n){return e.stop(t,n)}},{transformPagePoint:this.visualElement.getTransformPagePoint()})}},t.prototype.stop=function(t,n){var e=this.isDragging;if(this.cancel(),e){var r=n.velocity;this.startAnimation(r);var i=this.getProps().onDragEnd;null===i||void 0===i||i(t,n)}},t.prototype.cancel=function(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),null===(t=this.panSession)||void 0===t||t.end(),this.panSession=void 0,!this.getProps().dragPropagation&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),null===(n=this.visualElement.animationState)||void 0===n||n.setActive(N.Drag,!1)},t.prototype.updateAxis=function(t,n,e){var r=this.getProps().drag;if(e&&rt(t,r,this.currentDirection)){var i=this.getAxisMotionValue(t),o=this.originPoint[t]+e[t];this.constraints&&this.constraints[t]&&(o=function(t,n,e){var r=n.min,i=n.max;return void 0!==r&&t<r?t=e?(0,j.C)(r,t,e.min):Math.max(t,r):void 0!==i&&t>i&&(t=e?(0,j.C)(i,t,e.max):Math.min(t,i)),t}(o,this.constraints[t],this.elastic[t])),i.set(o)}},t.prototype.resolveConstraints=function(){var t=this,n=this.getProps(),e=n.dragConstraints,r=n.dragElastic,i=(this.visualElement.projection||{}).layout,o=this.constraints;e&&(0,U.I)(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!i)&&function(t,n){var e=n.top,r=n.left,i=n.bottom,o=n.right;return{x:H(t.x,r,o),y:H(t.y,e,i)}}(i.actual,e),this.elastic=function(t){return void 0===t&&(t=$),!1===t?t=0:!0===t&&(t=$),{x:W(t,"left","right"),y:W(t,"top","bottom")}}(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&(0,Z.U)((function(n){t.getAxisMotionValue(n)&&(t.constraints[n]=function(t,n){var e={};return void 0!==n.min&&(e.min=n.min-t.min),void 0!==n.max&&(e.max=n.max-t.min),e}(i.actual[n],t.constraints[n]))}))},t.prototype.resolveRefConstraints=function(){var t=this.getProps(),n=t.dragConstraints,e=t.onMeasureDragConstraints;if(!n||!(0,U.I)(n))return!1;var r=n.current;(0,o.k)(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");var i=this.visualElement.projection;if(!i||!i.layout)return!1;var a=function(t,n,e){var r=X(t,e),i=n.scroll;return i&&((0,J.am)(r.x,i.x),(0,J.am)(r.y,i.y)),r}(r,i.root,this.visualElement.getTransformPagePoint()),u=function(t,n){return{x:_(t.x,n.x),y:_(t.y,n.y)}}(i.layout.actual,a);if(e){var s=e(function(t){var n=t.x,e=t.y;return{top:e.min,right:n.max,bottom:e.max,left:n.min}}(u));this.hasMutatedConstraints=!!s,s&&(u=q(s))}return u},t.prototype.startAnimation=function(t){var n=this,e=this.getProps(),i=e.drag,o=e.dragMomentum,a=e.dragElastic,u=e.dragTransition,s=e.dragSnapToOrigin,l=e.onDragTransitionEnd,c=this.constraints||{},v=(0,Z.U)((function(e){var l;if(rt(e,i,n.currentDirection)){var v=null!==(l=null===c||void 0===c?void 0:c[e])&&void 0!==l?l:{};s&&(v={min:0,max:0});var d=a?200:1e6,f=a?40:1e7,p=(0,r.pi)((0,r.pi)({type:"inertia",velocity:o?t[e]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10},u),v);return n.startAxisValueAnimation(e,p)}}));return Promise.all(v).then(l)},t.prototype.startAxisValueAnimation=function(t,n){var e=this.getAxisMotionValue(t);return(0,Q.b8)(t,e,0,n)},t.prototype.stopAnimation=function(){var t=this;(0,Z.U)((function(n){return t.getAxisMotionValue(n).stop()}))},t.prototype.getAxisMotionValue=function(t){var n,e,r="_drag"+t.toUpperCase(),i=this.visualElement.getProps()[r];return i||this.visualElement.getValue(t,null!==(e=null===(n=this.visualElement.getProps().initial)||void 0===n?void 0:n[t])&&void 0!==e?e:0)},t.prototype.snapToCursor=function(t){var n=this;(0,Z.U)((function(e){if(rt(e,n.getProps().drag,n.currentDirection)){var r=n.visualElement.projection,i=n.getAxisMotionValue(e);if(r&&r.layout){var o=r.layout.actual[e],a=o.min,u=o.max;i.set(t[e]-(0,j.C)(a,u,.5))}}}))},t.prototype.scalePositionWithinConstraints=function(){var t,n=this,e=this.getProps(),r=e.drag,i=e.dragConstraints,o=this.visualElement.projection;if((0,U.I)(i)&&o&&this.constraints){this.stopAnimation();var a={x:0,y:0};(0,Z.U)((function(t){var e=n.getAxisMotionValue(t);if(e){var r=e.get();a[t]=function(t,n){var e=.5,r=(0,z.JO)(t),i=(0,z.JO)(n);return i>r?e=(0,O.Y)(n.min,n.max-r,t.min):r>i&&(e=(0,O.Y)(t.min,t.max-i,n.min)),(0,G.u)(0,1,e)}({min:r,max:r},n.constraints[t])}}));var u=this.visualElement.getProps().transformTemplate;this.visualElement.getInstance().style.transform=u?u({},""):"none",null===(t=o.root)||void 0===t||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),(0,Z.U)((function(t){if(rt(t,r,null)){var e=n.getAxisMotionValue(t),i=n.constraints[t],o=i.min,u=i.max;e.set((0,j.C)(o,u,a[t]))}}))}},t.prototype.addListeners=function(){var t,n=this;nt.set(this.visualElement,this);var e=P(this.visualElement.getInstance(),"pointerdown",(function(t){var e=n.getProps(),r=e.drag,i=e.dragListener;r&&(void 0===i||i)&&n.start(t)})),r=function(){var t=n.getProps().dragConstraints;(0,U.I)(t)&&(n.constraints=n.resolveRefConstraints())},i=this.visualElement.projection,o=i.addEventListener("measure",r);i&&!i.layout&&(null===(t=i.root)||void 0===t||t.updateScroll(),i.updateLayout()),r();var a=m(window,"resize",(function(){n.scalePositionWithinConstraints()}));return i.addEventListener("didUpdate",(function(t){var e=t.delta,r=t.hasLayoutChanged;n.isDragging&&r&&((0,Z.U)((function(t){var r=n.getAxisMotionValue(t);r&&(n.originPoint[t]+=e[t].translate,r.set(r.get()+e[t].translate))})),n.visualElement.syncRender())})),function(){a(),e(),o()}},t.prototype.getProps=function(){var t=this.visualElement.getProps(),n=t.drag,e=void 0!==n&&n,i=t.dragDirectionLock,o=void 0!==i&&i,a=t.dragPropagation,u=void 0!==a&&a,s=t.dragConstraints,l=void 0!==s&&s,c=t.dragElastic,v=void 0===c?$:c,d=t.dragMomentum,f=void 0===d||d;return(0,r.pi)((0,r.pi)({},t),{drag:e,dragDirectionLock:o,dragPropagation:u,dragConstraints:l,dragElastic:v,dragMomentum:f})},t}();function rt(t,n,e){return(!0===n||n===t)&&(null===e||e===t)}var it=e(29829);var ot=e(29090),at=e(91475);var ut=function(t){return function(n){return t(n),null}},st={pan:ut((function(t){var n=t.onPan,e=t.onPanStart,r=t.onPanEnd,o=t.onPanSessionStart,a=t.visualElement,u=n||e||r||o,s=(0,i.useRef)(null),l=(0,i.useContext)(ot._).transformPagePoint,c={onSessionStart:o,onStart:e,onMove:n,onEnd:function(t,n){s.current=null,r&&r(t,n)}};(0,i.useEffect)((function(){null!==s.current&&s.current.updateHandlers(c)})),V(a,"pointerdown",u&&function(t){s.current=new b(t,c,{transformPagePoint:l})}),(0,at.z)((function(){return s.current&&s.current.end()}))})),drag:ut((function(t){var n=t.dragControls,e=t.visualElement,r=(0,it.h)((function(){return new et(e)}));(0,i.useEffect)((function(){return n&&n.subscribe(r)}),[r,n]),(0,i.useEffect)((function(){return r.addListeners()}),[r])}))},lt=e(60131),ct=e(28174);function vt(){var t=(0,i.useContext)(lt.O);if(null===t)return[!0,null];var n=t.isPresent,e=t.onExitComplete,r=t.register,o=(0,ct.M)();(0,i.useEffect)((function(){return r(o)}),[]);return!n&&e?[!1,function(){return null===e||void 0===e?void 0:e(o)}]:[!0]}var dt=e(7497),ft=e(43919),pt=e(43961);function mt(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}var ht={correct:function(t,n){if(!n.target)return t;if("string"===typeof t){if(!tt.px.test(t))return t;t=parseFloat(t)}var e=mt(t,n.target.x),r=mt(t,n.target.y);return"".concat(e,"% ").concat(r,"%")}},gt=e(7197);function yt(t){return"string"===typeof t&&t.startsWith("var(--")}var Et=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function xt(t,n,e){void 0===e&&(e=1),(0,o.k)(e<=4,'Max CSS variable fallback depth detected in property "'.concat(t,'". This may indicate a circular fallback dependency.'));var i=(0,r.CR)(function(t){var n=Et.exec(t);if(!n)return[,];var e=(0,r.CR)(n,3);return[e[1],e[2]]}(t),2),a=i[0],u=i[1];if(a){var s=window.getComputedStyle(n).getPropertyValue(a);return s?s.trim():yt(u)?xt(u,n,e+1):u}}var Pt="_$css",Vt={correct:function(t,n){var e=n.treeScale,r=n.projectionDelta,i=t,o=t.includes("var("),a=[];o&&(t=t.replace(Et,(function(t){return a.push(t),Pt})));var u=gt.P.parse(t);if(u.length>5)return i;var s=gt.P.createTransformer(t),l="number"!==typeof u[0]?1:0,c=r.x.scale*e.x,v=r.y.scale*e.y;u[0+l]/=c,u[1+l]/=v;var d=(0,j.C)(c,v,.5);"number"===typeof u[2+l]&&(u[2+l]/=d),"number"===typeof u[3+l]&&(u[3+l]/=d);var f=s(u);if(o){var p=0;f=f.replace(Pt,(function(){var t=a[p];return p++,t}))}return f}},wt=e(41066),At=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(n,t),n.prototype.componentDidMount=function(){var t=this,n=this.props,e=n.visualElement,i=n.layoutGroup,o=n.switchLayoutGroup,a=n.layoutId,u=e.projection;(0,wt.B)(bt),u&&((null===i||void 0===i?void 0:i.group)&&i.group.add(u),(null===o||void 0===o?void 0:o.register)&&a&&o.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",(function(){t.safeToRemove()})),u.setOptions((0,r.pi)((0,r.pi)({},u.options),{onExitComplete:function(){return t.safeToRemove()}}))),pt.VN.hasEverUpdated=!0},n.prototype.getSnapshotBeforeUpdate=function(t){var n=this,e=this.props,r=e.layoutDependency,i=e.visualElement,o=e.drag,a=e.isPresent,u=i.projection;return u?(u.isPresent=a,o||t.layoutDependency!==r||void 0===r?u.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?u.promote():u.relegate()||f.ZP.postRender((function(){var t;(null===(t=u.getStack())||void 0===t?void 0:t.members.length)||n.safeToRemove()}))),null):null},n.prototype.componentDidUpdate=function(){var t=this.props.visualElement.projection;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())},n.prototype.componentWillUnmount=function(){var t=this.props,n=t.visualElement,e=t.layoutGroup,r=t.switchLayoutGroup,i=n.projection;i&&(i.scheduleCheckAfterUnmount(),(null===e||void 0===e?void 0:e.group)&&e.group.remove(i),(null===r||void 0===r?void 0:r.deregister)&&r.deregister(i))},n.prototype.safeToRemove=function(){var t=this.props.safeToRemove;null===t||void 0===t||t()},n.prototype.render=function(){return null},n}(i.Component);var bt={borderRadius:(0,r.pi)((0,r.pi)({},ht),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:ht,borderTopRightRadius:ht,borderBottomLeftRadius:ht,borderBottomRightRadius:ht,boxShadow:Vt},Ct={measureLayout:function(t){var n=(0,r.CR)(vt(),2),e=n[0],o=n[1],a=(0,i.useContext)(dt.p);return i.createElement(At,(0,r.pi)({},t,{layoutGroup:a,switchLayoutGroup:(0,i.useContext)(ft.g),isPresent:e,safeToRemove:o}))}},Tt=e(18597),Rt=e(31112);function St(t,n){if(!Array.isArray(n))return!1;var e=n.length;if(e!==t.length)return!1;for(var r=0;r<e;r++)if(n[r]!==t[r])return!1;return!0}var Mt=function(t){return/^0[^.\s]+$/.test(t)},Lt=e(81471),kt=e(90937),Dt=e(16475),It=e(43666),Bt=e(90097),Ft=function(t){return function(n){return n.test(t)}},Ut=[Bt.Rx,tt.px,tt.aQ,tt.RW,tt.vw,tt.vh,{test:function(t){return"auto"===t},parse:function(t){return t}}],jt=function(t){return Ut.find(Ft(t))},Ot=(0,r.ev)((0,r.ev)([],(0,r.CR)(Ut),!1),[It.$,gt.P],!1),Gt=function(t){return Ot.find(Ft(t))},zt=e(29103);function Ht(t,n,e){t.hasValue(n)?t.getValue(n).set(e):t.addValue(n,(0,kt.B)(e))}function _t(t,n){var e=(0,zt.x5)(t,n),i=e?t.makeTargetAnimatable(e,!1):{},o=i.transitionEnd,a=void 0===o?{}:o;i.transition;var u=(0,r._T)(i,["transitionEnd","transition"]);for(var s in u=(0,r.pi)((0,r.pi)({},u),a)){Ht(t,s,(0,Lt.Y)(u[s]))}}function Nt(t,n){if(n)return(n[t]||n.default||n).from}var $t=e(2284);function Wt(t,n,e){var i;void 0===e&&(e={});var o=(0,zt.x5)(t,n,e.custom),a=(o||{}).transition,u=void 0===a?t.getDefaultTransition()||{}:a;e.transitionOverride&&(u=e.transitionOverride);var s=o?function(){return Yt(t,o,e)}:function(){return Promise.resolve()},l=(null===(i=t.variantChildren)||void 0===i?void 0:i.size)?function(i){void 0===i&&(i=0);var o=u.delayChildren,a=void 0===o?0:o,s=u.staggerChildren,l=u.staggerDirection;return function(t,n,e,i,o,a){void 0===e&&(e=0);void 0===i&&(i=0);void 0===o&&(o=1);var u=[],s=(t.variantChildren.size-1)*i,l=1===o?function(t){return void 0===t&&(t=0),t*i}:function(t){return void 0===t&&(t=0),s-t*i};return Array.from(t.variantChildren).sort(Kt).forEach((function(t,i){u.push(Wt(t,n,(0,r.pi)((0,r.pi)({},a),{delay:e+l(i)})).then((function(){return t.notifyAnimationComplete(n)})))})),Promise.all(u)}(t,n,a+i,s,l,e)}:function(){return Promise.resolve()},c=u.when;if(c){var v=(0,r.CR)("beforeChildren"===c?[s,l]:[l,s],2),d=v[0],f=v[1];return d().then(f)}return Promise.all([s(),l(e.delay)])}function Yt(t,n,e){var i,o=void 0===e?{}:e,a=o.delay,u=void 0===a?0:a,s=o.transitionOverride,l=o.type,c=t.makeTargetAnimatable(n),v=c.transition,d=void 0===v?t.getDefaultTransition():v,f=c.transitionEnd,p=(0,r._T)(c,["transition","transitionEnd"]);s&&(d=s);var m=[],h=l&&(null===(i=t.animationState)||void 0===i?void 0:i.getState()[l]);for(var g in p){var y=t.getValue(g),E=p[g];if(!(!y||void 0===E||h&&Zt(h,g))){var x=(0,r.pi)({delay:u},d);t.shouldReduceMotion&&(0,$t._c)(g)&&(x=(0,r.pi)((0,r.pi)({},x),{type:!1,delay:0}));var P=(0,Q.b8)(g,y,E,x);m.push(P)}}return Promise.all(m).then((function(){f&&_t(t,f)}))}function Kt(t,n){return t.sortNodePosition(n)}function Zt(t,n){var e=t.protectedKeys,r=t.needsAnimating,i=e.hasOwnProperty(n)&&!0!==r[n];return r[n]=!1,i}var qt=[N.Animate,N.InView,N.Focus,N.Hover,N.Tap,N.Drag,N.Exit],Jt=(0,r.ev)([],(0,r.CR)(qt),!1).reverse(),Xt=qt.length;function Qt(t){return function(n){return Promise.all(n.map((function(n){var e=n.animation,r=n.options;return function(t,n,e){var r;if(void 0===e&&(e={}),t.notifyAnimationStart(n),Array.isArray(n)){var i=n.map((function(n){return Wt(t,n,e)}));r=Promise.all(i)}else if("string"===typeof n)r=Wt(t,n,e);else{var o="function"===typeof n?(0,zt.x5)(t,n,e.custom):n;r=Yt(t,o,e)}return r.then((function(){return t.notifyAnimationComplete(n)}))}(t,e,r)})))}}function tn(t){var n=Qt(t),e=function(){var t;return(t={})[N.Animate]=nn(!0),t[N.InView]=nn(),t[N.Hover]=nn(),t[N.Tap]=nn(),t[N.Drag]=nn(),t[N.Focus]=nn(),t[N.Exit]=nn(),t}(),i={},o=!0,a=function(n,e){var i=(0,zt.x5)(t,e);if(i){i.transition;var o=i.transitionEnd,a=(0,r._T)(i,["transition","transitionEnd"]);n=(0,r.pi)((0,r.pi)((0,r.pi)({},n),a),o)}return n};function u(u,s){for(var l,c=t.getProps(),v=t.getVariantContext(!0)||{},d=[],f=new Set,p={},m=1/0,h=function(n){var i=Jt[n],h=e[i],g=null!==(l=c[i])&&void 0!==l?l:v[i],y=(0,zt.$L)(g),E=i===s?h.isActive:null;!1===E&&(m=n);var x=g===v[i]&&g!==c[i]&&y;if(x&&o&&t.manuallyAnimateOnMount&&(x=!1),h.protectedKeys=(0,r.pi)({},p),!h.isActive&&null===E||!g&&!h.prevProp||(0,Tt.H)(g)||"boolean"===typeof g)return"continue";var P=function(t,n){if("string"===typeof n)return n!==t;if((0,zt.A0)(n))return!St(n,t);return!1}(h.prevProp,g),V=P||i===s&&h.isActive&&!x&&y||n>m&&y,w=Array.isArray(g)?g:[g],A=w.reduce(a,{});!1===E&&(A={});var b=h.prevResolvedValues,C=void 0===b?{}:b,T=(0,r.pi)((0,r.pi)({},C),A),R=function(t){V=!0,f.delete(t),h.needsAnimating[t]=!0};for(var S in T){var M=A[S],L=C[S];p.hasOwnProperty(S)||(M!==L?(0,Rt.C)(M)&&(0,Rt.C)(L)?!St(M,L)||P?R(S):h.protectedKeys[S]=!0:void 0!==M?R(S):f.add(S):void 0!==M&&f.has(S)?R(S):h.protectedKeys[S]=!0)}h.prevProp=g,h.prevResolvedValues=A,h.isActive&&(p=(0,r.pi)((0,r.pi)({},p),A)),o&&t.blockInitialAnimation&&(V=!1),V&&!x&&d.push.apply(d,(0,r.ev)([],(0,r.CR)(w.map((function(t){return{animation:t,options:(0,r.pi)({type:i},u)}}))),!1))},g=0;g<Xt;g++)h(g);if(i=(0,r.pi)({},p),f.size){var y={};f.forEach((function(n){var e=t.getBaseTarget(n);void 0!==e&&(y[n]=e)})),d.push({animation:y})}var E=Boolean(d.length);return o&&!1===c.initial&&!t.manuallyAnimateOnMount&&(E=!1),o=!1,E?n(d):Promise.resolve()}return{isAnimated:function(t){return void 0!==i[t]},animateChanges:u,setActive:function(n,r,i){var o;if(e[n].isActive===r)return Promise.resolve();null===(o=t.variantChildren)||void 0===o||o.forEach((function(t){var e;return null===(e=t.animationState)||void 0===e?void 0:e.setActive(n,r)})),e[n].isActive=r;var a=u(i,n);for(var s in e)e[s].protectedKeys={};return a},setAnimateFunction:function(e){n=e(t)},getState:function(){return e}}}function nn(t){return void 0===t&&(t=!1),{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var en={animation:ut((function(t){var n=t.visualElement,e=t.animate;n.animationState||(n.animationState=tn(n)),(0,Tt.H)(e)&&(0,i.useEffect)((function(){return e.subscribe(n)}),[e])})),exit:ut((function(t){var n=t.custom,e=t.visualElement,o=(0,r.CR)(vt(),2),a=o[0],u=o[1],s=(0,i.useContext)(lt.O);(0,i.useEffect)((function(){var t,r;e.isPresent=a;var i=null===(t=e.animationState)||void 0===t?void 0:t.setActive(N.Exit,!a,{custom:null!==(r=null===s||void 0===s?void 0:s.custom)&&void 0!==r?r:n});!a&&(null===i||void 0===i||i.then(u))}),[a])}))};function rn(t,n,e){return function(r,i){var o;a(r)&&!F()&&(null===(o=t.animationState)||void 0===o||o.setActive(N.Hover,n),null===e||void 0===e||e(r,i))}}var on=function t(n,e){return!!e&&(n===e||t(n,e.parentElement))};var an=new WeakMap,un=new WeakMap,sn=function(t){var n;null===(n=an.get(t.target))||void 0===n||n(t)},ln=function(t){t.forEach(sn)};function cn(t,n,e){var i=function(t){var n=t.root,e=(0,r._T)(t,["root"]),i=n||document;un.has(i)||un.set(i,{});var o=un.get(i),a=JSON.stringify(e);return o[a]||(o[a]=new IntersectionObserver(ln,(0,r.pi)({root:n},e))),o[a]}(n);return an.set(t,e),i.observe(t),function(){an.delete(t),i.unobserve(t)}}var vn={some:0,all:1};function dn(t,n,e,r){var o=r.root,a=r.margin,u=r.amount,s=void 0===u?"some":u,l=r.once;(0,i.useEffect)((function(){if(t){var r={root:null===o||void 0===o?void 0:o.current,rootMargin:a,threshold:"number"===typeof s?s:vn[s]};return cn(e.getInstance(),r,(function(t){var r,i=t.isIntersecting;if(n.isInView!==i&&(n.isInView=i,!l||i||!n.hasEnteredView)){i&&(n.hasEnteredView=!0),null===(r=e.animationState)||void 0===r||r.setActive(N.InView,i);var o=e.getProps(),a=i?o.onViewportEnter:o.onViewportLeave;null===a||void 0===a||a(t)}}))}}),[t,o,a,s])}function fn(t,n,e,r){var o=r.fallback,a=void 0===o||o;(0,i.useEffect)((function(){t&&a&&requestAnimationFrame((function(){var t;n.hasEnteredView=!0;var r=e.getProps().onViewportEnter;null===r||void 0===r||r(null),null===(t=e.animationState)||void 0===t||t.setActive(N.InView,!0)}))}),[t])}var pn={inView:ut((function(t){var n=t.visualElement,e=t.whileInView,r=t.onViewportEnter,o=t.onViewportLeave,a=t.viewport,u=void 0===a?{}:a,s=(0,i.useRef)({hasEnteredView:!1,isInView:!1}),l=Boolean(e||r||o);u.once&&s.current.hasEnteredView&&(l=!1),("undefined"===typeof IntersectionObserver?fn:dn)(l,s.current,n,u)})),tap:ut((function(t){var n=t.onTap,e=t.onTapStart,r=t.onTapCancel,o=t.whileTap,a=t.visualElement,u=n||e||r||o,s=(0,i.useRef)(!1),l=(0,i.useRef)(null);function c(){var t;null===(t=l.current)||void 0===t||t.call(l),l.current=null}function v(){var t;return c(),s.current=!1,null===(t=a.animationState)||void 0===t||t.setActive(N.Tap,!1),!F()}function d(t,e){v()&&(on(a.getInstance(),t.target)?null===n||void 0===n||n(t,e):null===r||void 0===r||r(t,e))}function f(t,n){v()&&(null===r||void 0===r||r(t,n))}V(a,"pointerdown",u?function(t,n){var r;c(),s.current||(s.current=!0,l.current=(0,A.z)(P(window,"pointerup",d),P(window,"pointercancel",f)),null===(r=a.animationState)||void 0===r||r.setActive(N.Tap,!0),null===e||void 0===e||e(t,n))}:void 0),(0,at.z)(c)})),focus:ut((function(t){var n=t.whileFocus,e=t.visualElement;h(e,"focus",n?function(){var t;null===(t=e.animationState)||void 0===t||t.setActive(N.Focus,!0)}:void 0),h(e,"blur",n?function(){var t;null===(t=e.animationState)||void 0===t||t.setActive(N.Focus,!1)}:void 0)})),hover:ut((function(t){var n=t.onHoverStart,e=t.onHoverEnd,r=t.whileHover,i=t.visualElement;V(i,"pointerenter",n||r?rn(i,!0,n):void 0),V(i,"pointerleave",e||r?rn(i,!1,e):void 0)}))},mn=e(1453),hn=e(90761),gn=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"];var yn,En=function(t){var n=t.treeType,e=void 0===n?"":n,i=t.build,o=t.getBaseTarget,a=t.makeTargetAnimatable,u=t.measureViewportBox,s=t.render,l=t.readValueFromInstance,c=t.removeValueFromRenderState,v=t.sortNodePosition,d=t.scrapeMotionValuesFromProps;return function(t,n){var p=t.parent,m=t.props,h=t.presenceId,g=t.blockInitialAnimation,y=t.visualState,E=t.shouldReduceMotion;void 0===n&&(n={});var x,P,V=!1,w=y.latestValues,A=y.renderState,b=function(){var t=gn.map((function(){return new hn.L})),n={},e={clearAllListeners:function(){return t.forEach((function(t){return t.clear()}))},updatePropListeners:function(t){gn.forEach((function(r){var i,o="on"+r,a=t[o];null===(i=n[r])||void 0===i||i.call(n),a&&(n[r]=e[o](a))}))}};return t.forEach((function(t,n){e["on"+gn[n]]=function(n){return t.add(n)},e["notify"+gn[n]]=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.notify.apply(t,(0,r.ev)([],(0,r.CR)(n),!1))}})),e}(),C=new Map,T=new Map,R={},S=(0,r.pi)({},w);function M(){x&&V&&(L(),s(x,A,m.style,O.projection))}function L(){i(O,A,w,n,m)}function k(){b.notifyUpdate(w)}function D(t,n){var e=n.onChange((function(n){w[t]=n,m.onUpdate&&f.ZP.update(k,!1,!0)})),r=n.onRenderRequest(O.scheduleRender);T.set(t,(function(){e(),r()}))}var I=d(m);for(var B in I){var F=I[B];void 0!==w[B]&&(0,mn.i)(F)&&F.set(w[B],!1)}var U=(0,zt.O6)(m),j=(0,zt.e8)(m),O=(0,r.pi)((0,r.pi)({treeType:e,current:null,depth:p?p.depth+1:0,parent:p,children:new Set,presenceId:h,shouldReduceMotion:E,variantChildren:j?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null===p||void 0===p?void 0:p.isMounted()),blockInitialAnimation:g,isMounted:function(){return Boolean(x)},mount:function(t){V=!0,x=O.current=t,O.projection&&O.projection.mount(t),j&&p&&!U&&(P=null===p||void 0===p?void 0:p.addVariantChild(O)),C.forEach((function(t,n){return D(n,t)})),null===p||void 0===p||p.children.add(O),O.setProps(m)},unmount:function(){var t;null===(t=O.projection)||void 0===t||t.unmount(),f.qY.update(k),f.qY.render(M),T.forEach((function(t){return t()})),null===P||void 0===P||P(),null===p||void 0===p||p.children.delete(O),b.clearAllListeners(),x=void 0,V=!1},addVariantChild:function(t){var n,e=O.getClosestVariantNode();if(e)return null===(n=e.variantChildren)||void 0===n||n.add(t),function(){return e.variantChildren.delete(t)}},sortNodePosition:function(t){return v&&e===t.treeType?v(O.getInstance(),t.getInstance()):0},getClosestVariantNode:function(){return j?O:null===p||void 0===p?void 0:p.getClosestVariantNode()},getLayoutId:function(){return m.layoutId},getInstance:function(){return x},getStaticValue:function(t){return w[t]},setStaticValue:function(t,n){return w[t]=n},getLatestValues:function(){return w},setVisibility:function(t){O.isVisible!==t&&(O.isVisible=t,O.scheduleRender())},makeTargetAnimatable:function(t,n){return void 0===n&&(n=!0),a(O,t,m,n)},measureViewportBox:function(){return u(x,m)},addValue:function(t,n){O.hasValue(t)&&O.removeValue(t),C.set(t,n),w[t]=n.get(),D(t,n)},removeValue:function(t){var n;C.delete(t),null===(n=T.get(t))||void 0===n||n(),T.delete(t),delete w[t],c(t,A)},hasValue:function(t){return C.has(t)},getValue:function(t,n){var e=C.get(t);return void 0===e&&void 0!==n&&(e=(0,kt.B)(n),O.addValue(t,e)),e},forEachValue:function(t){return C.forEach(t)},readValue:function(t){var e;return null!==(e=w[t])&&void 0!==e?e:l(x,t,n)},setBaseTarget:function(t,n){S[t]=n},getBaseTarget:function(t){if(o){var n=o(m,t);if(void 0!==n&&!(0,mn.i)(n))return n}return S[t]}},b),{build:function(){return L(),A},scheduleRender:function(){f.ZP.render(M,!1,!0)},syncRender:M,setProps:function(t){(t.transformTemplate||m.transformTemplate)&&O.scheduleRender(),m=t,b.updatePropListeners(t),R=function(t,n,e){var r;for(var i in n){var o=n[i],a=e[i];if((0,mn.i)(o))t.addValue(i,o);else if((0,mn.i)(a))t.addValue(i,(0,kt.B)(o));else if(a!==o)if(t.hasValue(i)){var u=t.getValue(i);!u.hasAnimated&&u.set(o)}else t.addValue(i,(0,kt.B)(null!==(r=t.getStaticValue(i))&&void 0!==r?r:o))}for(var i in e)void 0===n[i]&&t.removeValue(i);return n}(O,d(m),R)},getProps:function(){return m},getVariant:function(t){var n;return null===(n=m.variants)||void 0===n?void 0:n[t]},getDefaultTransition:function(){return m.transition},getTransformPagePoint:function(){return m.transformPagePoint},getVariantContext:function(t){if(void 0===t&&(t=!1),t)return null===p||void 0===p?void 0:p.getVariantContext();if(!U){var n=(null===p||void 0===p?void 0:p.getVariantContext())||{};return void 0!==m.initial&&(n.initial=m.initial),n}for(var e={},r=0;r<Pn;r++){var i=xn[r],o=m[i];((0,zt.$L)(o)||!1===o)&&(e[i]=o)}return e}});return O}},xn=(0,r.ev)(["initial"],(0,r.CR)(qt),!1),Pn=xn.length,Vn=e(79634),wn=e(94558),An=new Set(["width","height","top","left","right","bottom","x","y"]),bn=function(t){return An.has(t)},Cn=function(t,n){t.set(n,!1),t.set(n)},Tn=function(t){return t===Bt.Rx||t===tt.px};!function(t){t.width="width",t.height="height",t.left="left",t.right="right",t.top="top",t.bottom="bottom"}(yn||(yn={}));var Rn=function(t,n){return parseFloat(t.split(", ")[n])},Sn=function(t,n){return function(e,r){var i=r.transform;if("none"===i||!i)return 0;var o=i.match(/^matrix3d\((.+)\)$/);if(o)return Rn(o[1],n);var a=i.match(/^matrix\((.+)\)$/);return a?Rn(a[1],t):0}},Mn=new Set(["x","y","z"]),Ln=$t.Gl.filter((function(t){return!Mn.has(t)}));var kn={width:function(t,n){var e=t.x,r=n.paddingLeft,i=void 0===r?"0":r,o=n.paddingRight,a=void 0===o?"0":o;return e.max-e.min-parseFloat(i)-parseFloat(a)},height:function(t,n){var e=t.y,r=n.paddingTop,i=void 0===r?"0":r,o=n.paddingBottom,a=void 0===o?"0":o;return e.max-e.min-parseFloat(i)-parseFloat(a)},top:function(t,n){var e=n.top;return parseFloat(e)},left:function(t,n){var e=n.left;return parseFloat(e)},bottom:function(t,n){var e=t.y,r=n.top;return parseFloat(r)+(e.max-e.min)},right:function(t,n){var e=t.x,r=n.left;return parseFloat(r)+(e.max-e.min)},x:Sn(4,13),y:Sn(5,14)},Dn=function(t,n,e,i){void 0===e&&(e={}),void 0===i&&(i={}),n=(0,r.pi)({},n),i=(0,r.pi)({},i);var a=Object.keys(n).filter(bn),u=[],s=!1,l=[];if(a.forEach((function(r){var a=t.getValue(r);if(t.hasValue(r)){var c,v=e[r],d=jt(v),f=n[r];if((0,Rt.C)(f)){var p=f.length,m=null===f[0]?1:0;v=f[m],d=jt(v);for(var h=m;h<p;h++)c?(0,o.k)(jt(f[h])===c,"All keyframes must be of the same type"):(c=jt(f[h]),(0,o.k)(c===d||Tn(d)&&Tn(c),"Keyframes must be of the same dimension as the current value"))}else c=jt(f);if(d!==c)if(Tn(d)&&Tn(c)){var g=a.get();"string"===typeof g&&a.set(parseFloat(g)),"string"===typeof f?n[r]=parseFloat(f):Array.isArray(f)&&c===tt.px&&(n[r]=f.map(parseFloat))}else(null===d||void 0===d?void 0:d.transform)&&(null===c||void 0===c?void 0:c.transform)&&(0===v||0===f)?0===v?a.set(c.transform(v)):n[r]=d.transform(f):(s||(u=function(t){var n=[];return Ln.forEach((function(e){var r=t.getValue(e);void 0!==r&&(n.push([e,r.get()]),r.set(e.startsWith("scale")?1:0))})),n.length&&t.syncRender(),n}(t),s=!0),l.push(r),i[r]=void 0!==i[r]?i[r]:n[r],Cn(a,f))}})),l.length){var c=function(t,n,e){var r=n.measureViewportBox(),i=n.getInstance(),o=getComputedStyle(i),a=o.display,u={};"none"===a&&n.setStaticValue("display",t.display||"block"),e.forEach((function(t){u[t]=kn[t](r,o)})),n.syncRender();var s=n.measureViewportBox();return e.forEach((function(e){var r=n.getValue(e);Cn(r,u[e]),t[e]=kn[e](s,o)})),t}(n,t,l);return u.length&&u.forEach((function(n){var e=(0,r.CR)(n,2),i=e[0],o=e[1];t.getValue(i).set(o)})),t.syncRender(),{target:c,transitionEnd:i}}return{target:n,transitionEnd:i}};function In(t,n,e,r){return function(t){return Object.keys(t).some(bn)}(n)?Dn(t,n,e,r):{target:n,transitionEnd:r}}var Bn=function(t,n,e,i){var o=function(t,n,e){var i,o=(0,r._T)(n,[]),a=t.getInstance();if(!(a instanceof Element))return{target:o,transitionEnd:e};for(var u in e&&(e=(0,r.pi)({},e)),t.forEachValue((function(t){var n=t.get();if(yt(n)){var e=xt(n,a);e&&t.set(e)}})),o){var s=o[u];if(yt(s)){var l=xt(s,a);l&&(o[u]=l,e&&(null!==(i=e[u])&&void 0!==i||(e[u]=s)))}}return{target:o,transitionEnd:e}}(t,n,i);return In(t,n=o.target,e,i=o.transitionEnd)},Fn=e(32034),Un=e(57047),jn=e(52619);var On={treeType:"dom",readValueFromInstance:function(t,n){if((0,$t._c)(n)){var e=(0,jn.A)(n);return e&&e.default||0}var r,i=(r=t,window.getComputedStyle(r));return((0,wn.o)(n)?i.getPropertyValue(n):i[n])||0},sortNodePosition:function(t,n){return 2&t.compareDocumentPosition(n)?1:-1},getBaseTarget:function(t,n){var e;return null===(e=t.style)||void 0===e?void 0:e[n]},measureViewportBox:function(t,n){return X(t,n.transformPagePoint)},resetTransform:function(t,n,e){var r=e.transformTemplate;n.style.transform=r?r({},""):"none",t.scheduleRender()},restoreTransform:function(t,n){t.style.transform=n.style.transform},removeValueFromRenderState:function(t,n){var e=n.vars,r=n.style;delete e[t],delete r[t]},makeTargetAnimatable:function(t,n,e,i){var o=e.transformValues;void 0===i&&(i=!0);var a=n.transition,u=n.transitionEnd,s=(0,r._T)(n,["transition","transitionEnd"]),l=function(t,n,e){var r,i,o={};for(var a in t)o[a]=null!==(r=Nt(a,n))&&void 0!==r?r:null===(i=e.getValue(a))||void 0===i?void 0:i.get();return o}(s,a||{},t);if(o&&(u&&(u=o(u)),s&&(s=o(s)),l&&(l=o(l))),i){!function(t,n,e){var r,i,o,a,u=Object.keys(n).filter((function(n){return!t.hasValue(n)})),s=u.length;if(s)for(var l=0;l<s;l++){var c=u[l],v=n[c],d=null;Array.isArray(v)&&(d=v[0]),null===d&&(d=null!==(i=null!==(r=e[c])&&void 0!==r?r:t.readValue(c))&&void 0!==i?i:n[c]),void 0!==d&&null!==d&&("string"===typeof d&&(/^\-?\d*\.?\d+$/.test(d)||Mt(d))?d=parseFloat(d):!Gt(d)&&gt.P.test(v)&&(d=(0,Dt.T)(c,v)),t.addValue(c,(0,kt.B)(d)),null!==(o=(a=e)[c])&&void 0!==o||(a[c]=d),t.setBaseTarget(c,d))}}(t,s,l);var c=Bn(t,s,l,u);u=c.transitionEnd,s=c.target}return(0,r.pi)({transition:a,transitionEnd:u},s)},scrapeMotionValuesFromProps:Fn.U,build:function(t,n,e,r,i){void 0!==t.isVisible&&(n.style.visibility=t.isVisible?"visible":"hidden"),(0,Vn.r)(n,e,r,i.transformTemplate)},render:Un.N},Gn=En(On),zn=e(48927),Hn=e(40919),_n=e(52673),Nn=e(80028),$n=e(9014),Wn=En((0,r.pi)((0,r.pi)({},On),{getBaseTarget:function(t,n){return t[n]},readValueFromInstance:function(t,n){var e;return(0,$t._c)(n)?(null===(e=(0,jn.A)(n))||void 0===e?void 0:e.default)||0:(n=Nn.s.has(n)?n:(0,_n.D)(n),t.getAttribute(n))},scrapeMotionValuesFromProps:zn.U,build:function(t,n,e,r,i){(0,Hn.i)(n,e,r,i.transformTemplate)},render:$n.K})),Yn=e(57171),Kn=(0,r.pi)((0,r.pi)({renderer:function(t,n){return(0,Yn.q)(t)?Wn(n,{enableHardwareAcceleration:!1}):Gn(n,{enableHardwareAcceleration:!0})}},en),pn),Zn=(0,pt.yV)({attachResizeListener:function(t,n){return t.addEventListener("resize",n,{passive:!0}),function(){return t.removeEventListener("resize",n)}},measureScroll:function(){return{x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}}}),qn={current:void 0},Jn=(0,pt.yV)({measureScroll:function(t){return{x:t.scrollLeft,y:t.scrollTop}},defaultParent:function(){if(!qn.current){var t=new Zn(0,{});t.mount(window),t.setOptions({layoutScroll:!0}),qn.current=t}return qn.current},resetTransform:function(t,n){t.style.transform=null!==n&&void 0!==n?n:"none"}}),Xn=(0,r.pi)((0,r.pi)((0,r.pi)((0,r.pi)({},Kn),st),Ct),{projectionNodeConstructor:Jn})}}]);
//# sourceMappingURL=15.bf30fdc0.chunk.js.map