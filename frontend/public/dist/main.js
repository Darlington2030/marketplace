/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=globalThis,Xe=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),rt=new WeakMap;let Ft=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Xe&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=rt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&rt.set(t,e))}return e}toString(){return this.cssText}};const Wt=s=>new Ft(typeof s=="string"?s:s+"",void 0,Rt),Yt=(s,e)=>{if(Xe)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=Ee.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,s.appendChild(r)}},it=Xe?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Wt(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Jt,defineProperty:Gt,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:Kt,getOwnPropertySymbols:Xt,getPrototypeOf:es}=Object,B=globalThis,at=B.trustedTypes,ts=at?at.emptyScript:"",Me=B.reactiveElementPolyfillSupport,me=(s,e)=>s,Ae={toAttribute(s,e){switch(e){case Boolean:s=s?ts:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},et=(s,e)=>!Jt(s,e),nt={attribute:!0,type:String,converter:Ae,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),B.litPropertyMetadata??(B.litPropertyMetadata=new WeakMap);let X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Gt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=Qt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const o=i==null?void 0:i.call(this);a==null||a.call(this,n),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nt}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;const e=es(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){const t=this.properties,r=[...Kt(t),...Xt(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(it(i))}else e!==void 0&&t.push(it(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var a;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const n=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:Ae).toAttribute(t,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var a,n;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((a=o.converter)==null?void 0:a.fromAttribute)!==void 0?o.converter:Ae;this._$Em=i;const d=l.fromAttribute(t,o.type);this[i]=d??((n=this._$Ej)==null?void 0:n.get(i))??d,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){var n;if(e!==void 0){const o=this.constructor;if(i===!1&&(a=this[e]),r??(r=o.getPropertyOptions(e)),!((r.hasChanged??et)(a,t)||r.useDefault&&r.reflect&&a===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,n]of i){const{wrapped:o}=n,l=this[a];o!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[me("elementProperties")]=new Map,X[me("finalized")]=new Map,Me==null||Me({ReactiveElement:X}),(B.reactiveElementVersions??(B.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=globalThis,ot=s=>s,Ce=ge.trustedTypes,lt=Ce?Ce.createPolicy("lit-html",{createHTML:s=>s}):void 0,jt="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+U,ss=`<${Mt}>`,Q=document,ye=()=>Q.createComment(""),be=s=>s===null||typeof s!="object"&&typeof s!="function",tt=Array.isArray,rs=s=>tt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ze=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ct=/>/g,Y=RegExp(`>|${ze}(?:([^\\s"'>=/]+)(${ze}*=${ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,ut=/"/g,zt=/^(?:script|style|textarea|title)$/i,is=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=is(1),re=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),pt=new WeakMap,J=Q.createTreeWalker(Q,129);function Dt(s,e){if(!tt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(e):e}const as=(s,e)=>{const t=s.length-1,r=[];let i,a=e===2?"<svg>":e===3?"<math>":"",n=pe;for(let o=0;o<t;o++){const l=s[o];let d,m,v=-1,O=0;for(;O<l.length&&(n.lastIndex=O,m=n.exec(l),m!==null);)O=n.lastIndex,n===pe?m[1]==="!--"?n=dt:m[1]!==void 0?n=ct:m[2]!==void 0?(zt.test(m[2])&&(i=RegExp("</"+m[2],"g")),n=Y):m[3]!==void 0&&(n=Y):n===Y?m[0]===">"?(n=i??pe,v=-1):m[1]===void 0?v=-2:(v=n.lastIndex-m[2].length,d=m[1],n=m[3]===void 0?Y:m[3]==='"'?ut:ht):n===ut||n===ht?n=Y:n===dt||n===ct?n=pe:(n=Y,i=void 0);const z=n===Y&&s[o+1].startsWith("/>")?" ":"";a+=n===pe?l+ss:v>=0?(r.push(d),l.slice(0,v)+jt+l.slice(v)+U+z):l+U+(v===-2?o:z)}return[Dt(s,a+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class _e{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let a=0,n=0;const o=e.length-1,l=this.parts,[d,m]=as(e,t);if(this.el=_e.createElement(d,r),J.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(i=J.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const v of i.getAttributeNames())if(v.endsWith(jt)){const O=m[n++],z=i.getAttribute(v).split(U),Se=/([.?@])?(.*)/.exec(O);l.push({type:1,index:a,name:Se[2],strings:z,ctor:Se[1]==="."?os:Se[1]==="?"?ls:Se[1]==="@"?ds:Re}),i.removeAttribute(v)}else v.startsWith(U)&&(l.push({type:6,index:a}),i.removeAttribute(v));if(zt.test(i.tagName)){const v=i.textContent.split(U),O=v.length-1;if(O>0){i.textContent=Ce?Ce.emptyScript:"";for(let z=0;z<O;z++)i.append(v[z],ye()),J.nextNode(),l.push({type:2,index:++a});i.append(v[O],ye())}}}else if(i.nodeType===8)if(i.data===Mt)l.push({type:2,index:a});else{let v=-1;for(;(v=i.data.indexOf(U,v+1))!==-1;)l.push({type:7,index:a}),v+=U.length-1}a++}}static createElement(e,t){const r=Q.createElement("template");return r.innerHTML=e,r}}function ie(s,e,t=s,r){var n,o;if(e===re)return e;let i=r!==void 0?(n=t._$Co)==null?void 0:n[r]:t._$Cl;const a=be(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),a===void 0?i=void 0:(i=new a(s),i._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=i:t._$Cl=i),i!==void 0&&(e=ie(s,i._$AS(s,e.values),i,r)),e}class ns{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Q).importNode(t,!0);J.currentNode=i;let a=J.nextNode(),n=0,o=0,l=r[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new $e(a,a.nextSibling,this,e):l.type===1?d=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(d=new cs(a,this,e)),this._$AV.push(d),l=r[++o]}n!==(l==null?void 0:l.index)&&(a=J.nextNode(),n++)}return J.currentNode=Q,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class $e{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),be(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(Q.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=_e.createElement(Dt(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(t);else{const n=new ns(i,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=pt.get(e.strings);return t===void 0&&pt.set(e.strings,t=new _e(e)),t}k(e){tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const a of e)i===t.length?t.push(r=new $e(this.O(ye()),this.O(ye()),this,this.options)):r=t[i],r._$AI(a),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const i=ot(e).nextSibling;ot(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,i){const a=this.strings;let n=!1;if(a===void 0)e=ie(this,e,t,0),n=!be(e)||e!==this._$AH&&e!==re,n&&(this._$AH=e);else{const o=e;let l,d;for(e=a[0],l=0;l<a.length-1;l++)d=ie(this,o[r+l],t,l),d===re&&(d=this._$AH[l]),n||(n=!be(d)||d!==this._$AH[l]),d===S?e=S:e!==S&&(e+=(d??"")+a[l+1]),this._$AH[l]=d}n&&!i&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class os extends Re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class ls extends Re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class ds extends Re{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??S)===re)return;const r=this._$AH,i=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==S&&(r===S||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class cs{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const De=ge.litHtmlPolyfillSupport;De==null||De(_e,$e),(ge.litHtmlVersions??(ge.litHtmlVersions=[])).push("3.3.2");const hs=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const a=(t==null?void 0:t.renderBefore)??null;r._$litPart$=i=new $e(e.insertBefore(ye(),a),a,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis;class te extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=hs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return re}}var Nt;te._$litElement$=!0,te.finalized=!0,(Nt=G.litElementHydrateSupport)==null||Nt.call(G,{LitElement:te});const Ue=G.litElementPolyfillSupport;Ue==null||Ue({LitElement:te});(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:et},ps=(s=us,e,t)=>{const{kind:r,metadata:i}=t;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),a.set(t.name,s),r==="accessor"){const{name:n}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(n,l,s,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,s,o),o}}}if(r==="setter"){const{name:n}=t;return function(o){const l=this[n];e.call(this,o),this.requestUpdate(n,l,s,!0,o)}}throw Error("Unsupported decorator location: "+r)};function Ut(s){return(e,t)=>typeof t=="object"?ps(s,e,t):((r,i,a)=>{const n=i.hasOwnProperty(a);return i.constructor.createProperty(a,r),n?Object.getOwnPropertyDescriptor(i,a):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(s){return Ut({...s,state:!0,attribute:!1})}function fs(s,e){switch(e.type){case"SET_USER":return{...s,user:e.payload};case"SET_ITEMS":return{...s,items:e.payload};case"ADD_ITEM":return{...s,items:[e.payload,...s.items]};case"UPDATE_ITEM":return{...s,items:s.items.map(t=>t.id===e.payload.id?e.payload:t)};case"REMOVE_ITEM":return{...s,items:s.items.filter(t=>t.id!==e.payload)};case"SET_SEARCH":return{...s,searchQuery:e.payload};case"SET_LOADING":return{...s,isLoading:e.payload};case"SET_ERROR":return{...s,error:e.payload};case"SET_ACTIVE_ITEM":return{...s,activeItemId:e.payload};case"SET_MESSAGES":return{...s,messages:{...s.messages,[e.payload.itemId]:e.payload.messages}};case"ADD_MESSAGE":{const t=s.messages[e.payload.itemId]??[];return t.find(r=>r.id===e.payload.id)?s:{...s,messages:{...s.messages,[e.payload.itemId]:[...t,e.payload]}}}case"UPDATE_MESSAGE":{const t=s.messages[e.payload.itemId]??[];return{...s,messages:{...s.messages,[e.payload.itemId]:t.map(r=>r.id===e.payload.id?e.payload:r)}}}case"SET_UNREAD":return{...s,unreadCounts:e.payload};default:return s}}class ms{constructor(){this.listeners=new Set,this.persistKey="marketplace_user";const e=this.loadUser();this.state={user:e,items:[],searchQuery:"",isLoading:!1,error:null,activeItemId:null,messages:{},unreadCounts:{}}}getState(){return this.state}dispatch(e){const t=this.state;this.state=fs(this.state,e),e.type==="SET_USER"&&(e.payload?localStorage.setItem(this.persistKey,JSON.stringify(e.payload)):localStorage.removeItem(this.persistKey)),t!==this.state&&this.listeners.forEach(r=>r())}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}loadUser(){try{const e=localStorage.getItem(this.persistKey);return e?JSON.parse(e):null}catch{return null}}select(e){return e(this.state)}get user(){return this.state.user}get items(){return this.state.items}get isLoading(){return this.state.isLoading}get error(){return this.state.error}getMessages(e){return this.state.messages[e]??[]}getUnreadCount(e){return this.state.unreadCounts[e]??0}}const se=new ms;class F extends te{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._unsub=se.subscribe(()=>this.requestUpdate()),this.requestUpdate()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsub)==null||e.call(this)}get state(){return se.getState()}dispatch(e){se.dispatch(e)}$$(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)}ago(e){const t=Math.floor((Date.now()-+new Date(e))/6e4);return t<1?"just now":t<60?`${t}m ago`:t<1440?`${Math.floor(t/60)}h ago`:`${Math.floor(t/1440)}d ago`}}const gs=window.__API_BASE__||"/api";class Ze extends Error{constructor(e,t){super(t),this.status=e,this.name="APIError"}}async function E(s,e={}){let t;try{t=await fetch(`${gs}${s}`,{headers:{"Content-Type":"application/json",...e.headers},...e})}catch{throw new Ze(0,"Cannot reach server. Make sure the backend is running.")}if(!t.ok){let r=`HTTP ${t.status}`;try{const i=await t.json();r=i.error||i.message||r}catch{}throw new Ze(t.status,r)}if(t.status!==204)try{return await t.json()}catch{throw new Ze(0,"Invalid response from server")}}const Z={getAll:s=>E(`/items${s?`?search=${encodeURIComponent(s)}`:""}`),getById:s=>E(`/items/${s}`),create:s=>E("/items",{method:"POST",body:JSON.stringify(s)}),update:(s,e)=>E(`/items/${s}`,{method:"PUT",body:JSON.stringify(e)}),delete:s=>E(`/items/${s}`,{method:"DELETE"}),checkout:(s,e)=>E(`/items/${s}/checkout`,{method:"POST",body:JSON.stringify({buyerId:e})}),confirmSale:(s,e)=>E(`/items/${s}/confirm-sale`,{method:"POST",body:JSON.stringify({sellerId:e})})},P={getForItem:s=>E(`/messages/item/${s}`),send:s=>E("/messages",{method:"POST",body:JSON.stringify(s)}),poll:(s,e)=>E(`/messages/item/${s}/poll/${encodeURIComponent(e)}`),respondToOffer:(s,e)=>E(`/messages/${s}/offer-response`,{method:"PUT",body:JSON.stringify({status:e})}),markRead:(s,e)=>E("/messages/read",{method:"POST",body:JSON.stringify({userId:s,itemId:e})}),getUnread:s=>E(`/messages/unread/${s}`)},ft={login:s=>E("/users/login",{method:"POST",body:JSON.stringify(s)}),register:s=>E("/users/register",{method:"POST",body:JSON.stringify(s)}),getById:s=>E(`/users/${s}`)};var x;(function(s){s.assertEqual=i=>{};function e(i){}s.assertIs=e;function t(i){throw new Error}s.assertNever=t,s.arrayToEnum=i=>{const a={};for(const n of i)a[n]=n;return a},s.getValidEnumValues=i=>{const a=s.objectKeys(i).filter(o=>typeof i[i[o]]!="number"),n={};for(const o of a)n[o]=i[o];return s.objectValues(n)},s.objectValues=i=>s.objectKeys(i).map(function(a){return i[a]}),s.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const a=[];for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&a.push(n);return a},s.find=(i,a)=>{for(const n of i)if(a(n))return n},s.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&Number.isFinite(i)&&Math.floor(i)===i;function r(i,a=" | "){return i.map(n=>typeof n=="string"?`'${n}'`:n).join(a)}s.joinValues=r,s.jsonStringifyReplacer=(i,a)=>typeof a=="bigint"?a.toString():a})(x||(x={}));var mt;(function(s){s.mergeShapes=(e,t)=>({...e,...t})})(mt||(mt={}));const u=x.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),D=s=>{switch(typeof s){case"undefined":return u.undefined;case"string":return u.string;case"number":return Number.isNaN(s)?u.nan:u.number;case"boolean":return u.boolean;case"function":return u.function;case"bigint":return u.bigint;case"symbol":return u.symbol;case"object":return Array.isArray(s)?u.array:s===null?u.null:s.then&&typeof s.then=="function"&&s.catch&&typeof s.catch=="function"?u.promise:typeof Map<"u"&&s instanceof Map?u.map:typeof Set<"u"&&s instanceof Set?u.set:typeof Date<"u"&&s instanceof Date?u.date:u.object;default:return u.unknown}},c=x.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class N extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(a){return a.message},r={_errors:[]},i=a=>{for(const n of a.issues)if(n.code==="invalid_union")n.unionErrors.map(i);else if(n.code==="invalid_return_type")i(n.returnTypeError);else if(n.code==="invalid_arguments")i(n.argumentsError);else if(n.path.length===0)r._errors.push(t(n));else{let o=r,l=0;for(;l<n.path.length;){const d=n.path[l];l===n.path.length-1?(o[d]=o[d]||{_errors:[]},o[d]._errors.push(t(n))):o[d]=o[d]||{_errors:[]},o=o[d],l++}}};return i(this),r}static assert(e){if(!(e instanceof N))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,x.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const i of this.issues)if(i.path.length>0){const a=i.path[0];t[a]=t[a]||[],t[a].push(e(i))}else r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}N.create=s=>new N(s);const Be=(s,e)=>{let t;switch(s.code){case c.invalid_type:s.received===u.undefined?t="Required":t=`Expected ${s.expected}, received ${s.received}`;break;case c.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(s.expected,x.jsonStringifyReplacer)}`;break;case c.unrecognized_keys:t=`Unrecognized key(s) in object: ${x.joinValues(s.keys,", ")}`;break;case c.invalid_union:t="Invalid input";break;case c.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${x.joinValues(s.options)}`;break;case c.invalid_enum_value:t=`Invalid enum value. Expected ${x.joinValues(s.options)}, received '${s.received}'`;break;case c.invalid_arguments:t="Invalid function arguments";break;case c.invalid_return_type:t="Invalid function return type";break;case c.invalid_date:t="Invalid date";break;case c.invalid_string:typeof s.validation=="object"?"includes"in s.validation?(t=`Invalid input: must include "${s.validation.includes}"`,typeof s.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${s.validation.position}`)):"startsWith"in s.validation?t=`Invalid input: must start with "${s.validation.startsWith}"`:"endsWith"in s.validation?t=`Invalid input: must end with "${s.validation.endsWith}"`:x.assertNever(s.validation):s.validation!=="regex"?t=`Invalid ${s.validation}`:t="Invalid";break;case c.too_small:s.type==="array"?t=`Array must contain ${s.exact?"exactly":s.inclusive?"at least":"more than"} ${s.minimum} element(s)`:s.type==="string"?t=`String must contain ${s.exact?"exactly":s.inclusive?"at least":"over"} ${s.minimum} character(s)`:s.type==="number"?t=`Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}`:s.type==="bigint"?t=`Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}`:s.type==="date"?t=`Date must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(s.minimum))}`:t="Invalid input";break;case c.too_big:s.type==="array"?t=`Array must contain ${s.exact?"exactly":s.inclusive?"at most":"less than"} ${s.maximum} element(s)`:s.type==="string"?t=`String must contain ${s.exact?"exactly":s.inclusive?"at most":"under"} ${s.maximum} character(s)`:s.type==="number"?t=`Number must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}`:s.type==="bigint"?t=`BigInt must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}`:s.type==="date"?t=`Date must be ${s.exact?"exactly":s.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(s.maximum))}`:t="Invalid input";break;case c.custom:t="Invalid input";break;case c.invalid_intersection_types:t="Intersection results could not be merged";break;case c.not_multiple_of:t=`Number must be a multiple of ${s.multipleOf}`;break;case c.not_finite:t="Number must be finite";break;default:t=e.defaultError,x.assertNever(s)}return{message:t}};let ys=Be;function bs(){return ys}const _s=s=>{const{data:e,path:t,errorMaps:r,issueData:i}=s,a=[...t,...i.path||[]],n={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let o="";const l=r.filter(d=>!!d).slice().reverse();for(const d of l)o=d(n,{data:e,defaultError:o}).message;return{...i,path:a,message:o}};function h(s,e){const t=bs(),r=_s({issueData:e,data:s.data,path:s.path,errorMaps:[s.common.contextualErrorMap,s.schemaErrorMap,t,t===Be?void 0:Be].filter(i=>!!i)});s.common.issues.push(r)}class A{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const i of t){if(i.status==="aborted")return g;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const i of t){const a=await i.key,n=await i.value;r.push({key:a,value:n})}return A.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const i of t){const{key:a,value:n}=i;if(a.status==="aborted"||n.status==="aborted")return g;a.status==="dirty"&&e.dirty(),n.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof n.value<"u"||i.alwaysSet)&&(r[a.value]=n.value)}return{status:e.value,value:r}}}const g=Object.freeze({status:"aborted"}),fe=s=>({status:"dirty",value:s}),C=s=>({status:"valid",value:s}),gt=s=>s.status==="aborted",yt=s=>s.status==="dirty",ae=s=>s.status==="valid",Oe=s=>typeof Promise<"u"&&s instanceof Promise;var p;(function(s){s.errToObj=e=>typeof e=="string"?{message:e}:e||{},s.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(p||(p={}));class H{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const bt=(s,e)=>{if(ae(e))return{success:!0,data:e.value};if(!s.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new N(s.common.issues);return this._error=t,this._error}}};function b(s){if(!s)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:i}=s;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(n,o)=>{const{message:l}=s;return n.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:l??r??o.defaultError}:n.code!=="invalid_type"?{message:o.defaultError}:{message:l??t??o.defaultError}},description:i}}class _{get description(){return this._def.description}_getType(e){return D(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:D(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new A,ctx:{common:e.parent.common,data:e.data,parsedType:D(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Oe(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){const r={common:{issues:[],async:(t==null?void 0:t.async)??!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)},i=this._parseSync({data:e,path:r.path,parent:r});return bt(r,i)}"~validate"(e){var r,i;const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)};if(!this["~standard"].async)try{const a=this._parseSync({data:e,path:[],parent:t});return ae(a)?{value:a.value}:{issues:t.common.issues}}catch(a){(i=(r=a==null?void 0:a.message)==null?void 0:r.toLowerCase())!=null&&i.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(a=>ae(a)?{value:a.value}:{issues:t.common.issues})}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)},i=this._parse({data:e,path:r.path,parent:r}),a=await(Oe(i)?i:Promise.resolve(i));return bt(r,a)}refine(e,t){const r=i=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(i):t;return this._refinement((i,a)=>{const n=e(i),o=()=>a.addIssue({code:c.custom,...r(i)});return typeof Promise<"u"&&n instanceof Promise?n.then(l=>l?!0:(o(),!1)):n?!0:(o(),!1)})}refinement(e,t){return this._refinement((r,i)=>e(r)?!0:(i.addIssue(typeof t=="function"?t(r,i):t),!1))}_refinement(e){return new le({schema:this,typeName:y.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return V.create(this,this._def)}nullable(){return de.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return T.create(this)}promise(){return Ne.create(this,this._def)}or(e){return Ie.create([this,e],this._def)}and(e){return Pe.create(this,e,this._def)}transform(e){return new le({...b(this._def),schema:this,typeName:y.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Fe({...b(this._def),innerType:this,defaultValue:t,typeName:y.ZodDefault})}brand(){return new Bs({typeName:y.ZodBranded,type:this,...b(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new We({...b(this._def),innerType:this,catchValue:t,typeName:y.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return st.create(this,e)}readonly(){return Ye.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const xs=/^c[^\s-]{8,}$/i,vs=/^[0-9a-z]+$/,ws=/^[0-9A-HJKMNP-TV-Z]{26}$/i,$s=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,ks=/^[a-z0-9_-]{21}$/i,Ss=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Es=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,As=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Cs="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Le;const Os=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ts=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Is=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Ps=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ns=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Rs=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Zt="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",js=new RegExp(`^${Zt}$`);function Lt(s){let e="[0-5]\\d";s.precision?e=`${e}\\.\\d{${s.precision}}`:s.precision==null&&(e=`${e}(\\.\\d+)?`);const t=s.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Ms(s){return new RegExp(`^${Lt(s)}$`)}function zs(s){let e=`${Zt}T${Lt(s)}`;const t=[];return t.push(s.local?"Z?":"Z"),s.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Ds(s,e){return!!((e==="v4"||!e)&&Os.test(s)||(e==="v6"||!e)&&Is.test(s))}function Us(s,e){if(!Ss.test(s))return!1;try{const[t]=s.split(".");if(!t)return!1;const r=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),i=JSON.parse(atob(r));return!(typeof i!="object"||i===null||"typ"in i&&(i==null?void 0:i.typ)!=="JWT"||!i.alg||e&&i.alg!==e)}catch{return!1}}function Zs(s,e){return!!((e==="v4"||!e)&&Ts.test(s)||(e==="v6"||!e)&&Ps.test(s))}class L extends _{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==u.string){const a=this._getOrReturnCtx(e);return h(a,{code:c.invalid_type,expected:u.string,received:a.parsedType}),g}const r=new A;let i;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(i=this._getOrReturnCtx(e,i),h(i,{code:c.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="max")e.data.length>a.value&&(i=this._getOrReturnCtx(e,i),h(i,{code:c.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="length"){const n=e.data.length>a.value,o=e.data.length<a.value;(n||o)&&(i=this._getOrReturnCtx(e,i),n?h(i,{code:c.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&h(i,{code:c.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if(a.kind==="email")As.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"email",code:c.invalid_string,message:a.message}),r.dirty());else if(a.kind==="emoji")Le||(Le=new RegExp(Cs,"u")),Le.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"emoji",code:c.invalid_string,message:a.message}),r.dirty());else if(a.kind==="uuid")$s.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"uuid",code:c.invalid_string,message:a.message}),r.dirty());else if(a.kind==="nanoid")ks.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"nanoid",code:c.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid")xs.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"cuid",code:c.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid2")vs.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"cuid2",code:c.invalid_string,message:a.message}),r.dirty());else if(a.kind==="ulid")ws.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"ulid",code:c.invalid_string,message:a.message}),r.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),h(i,{validation:"url",code:c.invalid_string,message:a.message}),r.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"regex",code:c.invalid_string,message:a.message}),r.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(i=this._getOrReturnCtx(e,i),h(i,{code:c.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(i=this._getOrReturnCtx(e,i),h(i,{code:c.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(i=this._getOrReturnCtx(e,i),h(i,{code:c.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty()):a.kind==="datetime"?zs(a).test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{code:c.invalid_string,validation:"datetime",message:a.message}),r.dirty()):a.kind==="date"?js.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{code:c.invalid_string,validation:"date",message:a.message}),r.dirty()):a.kind==="time"?Ms(a).test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{code:c.invalid_string,validation:"time",message:a.message}),r.dirty()):a.kind==="duration"?Es.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"duration",code:c.invalid_string,message:a.message}),r.dirty()):a.kind==="ip"?Ds(e.data,a.version)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"ip",code:c.invalid_string,message:a.message}),r.dirty()):a.kind==="jwt"?Us(e.data,a.alg)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"jwt",code:c.invalid_string,message:a.message}),r.dirty()):a.kind==="cidr"?Zs(e.data,a.version)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"cidr",code:c.invalid_string,message:a.message}),r.dirty()):a.kind==="base64"?Ns.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"base64",code:c.invalid_string,message:a.message}),r.dirty()):a.kind==="base64url"?Rs.test(e.data)||(i=this._getOrReturnCtx(e,i),h(i,{validation:"base64url",code:c.invalid_string,message:a.message}),r.dirty()):x.assertNever(a);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(i=>e.test(i),{validation:t,code:c.invalid_string,...p.errToObj(r)})}_addCheck(e){return new L({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...p.errToObj(e)})}url(e){return this._addCheck({kind:"url",...p.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...p.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...p.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...p.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...p.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...p.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...p.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...p.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...p.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...p.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...p.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...p.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(e==null?void 0:e.offset)??!1,local:(e==null?void 0:e.local)??!1,...p.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...p.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...p.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...p.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...p.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...p.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...p.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...p.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...p.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...p.errToObj(t)})}nonempty(e){return this.min(1,p.errToObj(e))}trim(){return new L({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new L({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new L({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}L.create=s=>new L({checks:[],typeName:y.ZodString,coerce:(s==null?void 0:s.coerce)??!1,...b(s)});function Ls(s,e){const t=(s.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=t>r?t:r,a=Number.parseInt(s.toFixed(i).replace(".","")),n=Number.parseInt(e.toFixed(i).replace(".",""));return a%n/10**i}class ne extends _{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==u.number){const a=this._getOrReturnCtx(e);return h(a,{code:c.invalid_type,expected:u.number,received:a.parsedType}),g}let r;const i=new A;for(const a of this._def.checks)a.kind==="int"?x.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),h(r,{code:c.invalid_type,expected:"integer",received:"float",message:a.message}),i.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(r=this._getOrReturnCtx(e,r),h(r,{code:c.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),i.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(r=this._getOrReturnCtx(e,r),h(r,{code:c.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),i.dirty()):a.kind==="multipleOf"?Ls(e.data,a.value)!==0&&(r=this._getOrReturnCtx(e,r),h(r,{code:c.not_multiple_of,multipleOf:a.value,message:a.message}),i.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),h(r,{code:c.not_finite,message:a.message}),i.dirty()):x.assertNever(a);return{status:i.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,p.toString(t))}gt(e,t){return this.setLimit("min",e,!1,p.toString(t))}lte(e,t){return this.setLimit("max",e,!0,p.toString(t))}lt(e,t){return this.setLimit("max",e,!1,p.toString(t))}setLimit(e,t,r,i){return new ne({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:p.toString(i)}]})}_addCheck(e){return new ne({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:p.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:p.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:p.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:p.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:p.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:p.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:p.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:p.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:p.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&x.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ne.create=s=>new ne({checks:[],typeName:y.ZodNumber,coerce:(s==null?void 0:s.coerce)||!1,...b(s)});class xe extends _{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==u.bigint)return this._getInvalidInput(e);let r;const i=new A;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(r=this._getOrReturnCtx(e,r),h(r,{code:c.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),i.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(r=this._getOrReturnCtx(e,r),h(r,{code:c.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),i.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),h(r,{code:c.not_multiple_of,multipleOf:a.value,message:a.message}),i.dirty()):x.assertNever(a);return{status:i.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return h(t,{code:c.invalid_type,expected:u.bigint,received:t.parsedType}),g}gte(e,t){return this.setLimit("min",e,!0,p.toString(t))}gt(e,t){return this.setLimit("min",e,!1,p.toString(t))}lte(e,t){return this.setLimit("max",e,!0,p.toString(t))}lt(e,t){return this.setLimit("max",e,!1,p.toString(t))}setLimit(e,t,r,i){return new xe({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:p.toString(i)}]})}_addCheck(e){return new xe({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:p.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:p.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:p.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:p.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:p.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}xe.create=s=>new xe({checks:[],typeName:y.ZodBigInt,coerce:(s==null?void 0:s.coerce)??!1,...b(s)});class Ve extends _{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==u.boolean){const r=this._getOrReturnCtx(e);return h(r,{code:c.invalid_type,expected:u.boolean,received:r.parsedType}),g}return C(e.data)}}Ve.create=s=>new Ve({typeName:y.ZodBoolean,coerce:(s==null?void 0:s.coerce)||!1,...b(s)});class Te extends _{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==u.date){const a=this._getOrReturnCtx(e);return h(a,{code:c.invalid_type,expected:u.date,received:a.parsedType}),g}if(Number.isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return h(a,{code:c.invalid_date}),g}const r=new A;let i;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(i=this._getOrReturnCtx(e,i),h(i,{code:c.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(i=this._getOrReturnCtx(e,i),h(i,{code:c.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):x.assertNever(a);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Te({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:p.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:p.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Te.create=s=>new Te({checks:[],coerce:(s==null?void 0:s.coerce)||!1,typeName:y.ZodDate,...b(s)});class _t extends _{_parse(e){if(this._getType(e)!==u.symbol){const r=this._getOrReturnCtx(e);return h(r,{code:c.invalid_type,expected:u.symbol,received:r.parsedType}),g}return C(e.data)}}_t.create=s=>new _t({typeName:y.ZodSymbol,...b(s)});class xt extends _{_parse(e){if(this._getType(e)!==u.undefined){const r=this._getOrReturnCtx(e);return h(r,{code:c.invalid_type,expected:u.undefined,received:r.parsedType}),g}return C(e.data)}}xt.create=s=>new xt({typeName:y.ZodUndefined,...b(s)});class vt extends _{_parse(e){if(this._getType(e)!==u.null){const r=this._getOrReturnCtx(e);return h(r,{code:c.invalid_type,expected:u.null,received:r.parsedType}),g}return C(e.data)}}vt.create=s=>new vt({typeName:y.ZodNull,...b(s)});class wt extends _{constructor(){super(...arguments),this._any=!0}_parse(e){return C(e.data)}}wt.create=s=>new wt({typeName:y.ZodAny,...b(s)});class $t extends _{constructor(){super(...arguments),this._unknown=!0}_parse(e){return C(e.data)}}$t.create=s=>new $t({typeName:y.ZodUnknown,...b(s)});class q extends _{_parse(e){const t=this._getOrReturnCtx(e);return h(t,{code:c.invalid_type,expected:u.never,received:t.parsedType}),g}}q.create=s=>new q({typeName:y.ZodNever,...b(s)});class kt extends _{_parse(e){if(this._getType(e)!==u.undefined){const r=this._getOrReturnCtx(e);return h(r,{code:c.invalid_type,expected:u.void,received:r.parsedType}),g}return C(e.data)}}kt.create=s=>new kt({typeName:y.ZodVoid,...b(s)});class T extends _{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==u.array)return h(t,{code:c.invalid_type,expected:u.array,received:t.parsedType}),g;if(i.exactLength!==null){const n=t.data.length>i.exactLength.value,o=t.data.length<i.exactLength.value;(n||o)&&(h(t,{code:n?c.too_big:c.too_small,minimum:o?i.exactLength.value:void 0,maximum:n?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&t.data.length<i.minLength.value&&(h(t,{code:c.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&t.data.length>i.maxLength.value&&(h(t,{code:c.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((n,o)=>i.type._parseAsync(new H(t,n,t.path,o)))).then(n=>A.mergeArray(r,n));const a=[...t.data].map((n,o)=>i.type._parseSync(new H(t,n,t.path,o)));return A.mergeArray(r,a)}get element(){return this._def.type}min(e,t){return new T({...this._def,minLength:{value:e,message:p.toString(t)}})}max(e,t){return new T({...this._def,maxLength:{value:e,message:p.toString(t)}})}length(e,t){return new T({...this._def,exactLength:{value:e,message:p.toString(t)}})}nonempty(e){return this.min(1,e)}}T.create=(s,e)=>new T({type:s,minLength:null,maxLength:null,exactLength:null,typeName:y.ZodArray,...b(e)});function ee(s){if(s instanceof k){const e={};for(const t in s.shape){const r=s.shape[t];e[t]=V.create(ee(r))}return new k({...s._def,shape:()=>e})}else return s instanceof T?new T({...s._def,type:ee(s.element)}):s instanceof V?V.create(ee(s.unwrap())):s instanceof de?de.create(ee(s.unwrap())):s instanceof K?K.create(s.items.map(e=>ee(e))):s}class k extends _{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=x.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==u.object){const d=this._getOrReturnCtx(e);return h(d,{code:c.invalid_type,expected:u.object,received:d.parsedType}),g}const{status:r,ctx:i}=this._processInputParams(e),{shape:a,keys:n}=this._getCached(),o=[];if(!(this._def.catchall instanceof q&&this._def.unknownKeys==="strip"))for(const d in i.data)n.includes(d)||o.push(d);const l=[];for(const d of n){const m=a[d],v=i.data[d];l.push({key:{status:"valid",value:d},value:m._parse(new H(i,v,i.path,d)),alwaysSet:d in i.data})}if(this._def.catchall instanceof q){const d=this._def.unknownKeys;if(d==="passthrough")for(const m of o)l.push({key:{status:"valid",value:m},value:{status:"valid",value:i.data[m]}});else if(d==="strict")o.length>0&&(h(i,{code:c.unrecognized_keys,keys:o}),r.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const m of o){const v=i.data[m];l.push({key:{status:"valid",value:m},value:d._parse(new H(i,v,i.path,m)),alwaysSet:m in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const d=[];for(const m of l){const v=await m.key,O=await m.value;d.push({key:v,value:O,alwaysSet:m.alwaysSet})}return d}).then(d=>A.mergeObjectSync(r,d)):A.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return p.errToObj,new k({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var a,n;const i=((n=(a=this._def).errorMap)==null?void 0:n.call(a,t,r).message)??r.defaultError;return t.code==="unrecognized_keys"?{message:p.errToObj(e).message??i}:{message:i}}}:{}})}strip(){return new k({...this._def,unknownKeys:"strip"})}passthrough(){return new k({...this._def,unknownKeys:"passthrough"})}extend(e){return new k({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new k({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:y.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new k({...this._def,catchall:e})}pick(e){const t={};for(const r of x.objectKeys(e))e[r]&&this.shape[r]&&(t[r]=this.shape[r]);return new k({...this._def,shape:()=>t})}omit(e){const t={};for(const r of x.objectKeys(this.shape))e[r]||(t[r]=this.shape[r]);return new k({...this._def,shape:()=>t})}deepPartial(){return ee(this)}partial(e){const t={};for(const r of x.objectKeys(this.shape)){const i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}return new k({...this._def,shape:()=>t})}required(e){const t={};for(const r of x.objectKeys(this.shape))if(e&&!e[r])t[r]=this.shape[r];else{let a=this.shape[r];for(;a instanceof V;)a=a._def.innerType;t[r]=a}return new k({...this._def,shape:()=>t})}keyof(){return Bt(x.objectKeys(this.shape))}}k.create=(s,e)=>new k({shape:()=>s,unknownKeys:"strip",catchall:q.create(),typeName:y.ZodObject,...b(e)});k.strictCreate=(s,e)=>new k({shape:()=>s,unknownKeys:"strict",catchall:q.create(),typeName:y.ZodObject,...b(e)});k.lazycreate=(s,e)=>new k({shape:s,unknownKeys:"strip",catchall:q.create(),typeName:y.ZodObject,...b(e)});class Ie extends _{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function i(a){for(const o of a)if(o.result.status==="valid")return o.result;for(const o of a)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const n=a.map(o=>new N(o.ctx.common.issues));return h(t,{code:c.invalid_union,unionErrors:n}),g}if(t.common.async)return Promise.all(r.map(async a=>{const n={...t,common:{...t.common,issues:[]},parent:null};return{result:await a._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(i);{let a;const n=[];for(const l of r){const d={...t,common:{...t.common,issues:[]},parent:null},m=l._parseSync({data:t.data,path:t.path,parent:d});if(m.status==="valid")return m;m.status==="dirty"&&!a&&(a={result:m,ctx:d}),d.common.issues.length&&n.push(d.common.issues)}if(a)return t.common.issues.push(...a.ctx.common.issues),a.result;const o=n.map(l=>new N(l));return h(t,{code:c.invalid_union,unionErrors:o}),g}}get options(){return this._def.options}}Ie.create=(s,e)=>new Ie({options:s,typeName:y.ZodUnion,...b(e)});function He(s,e){const t=D(s),r=D(e);if(s===e)return{valid:!0,data:s};if(t===u.object&&r===u.object){const i=x.objectKeys(e),a=x.objectKeys(s).filter(o=>i.indexOf(o)!==-1),n={...s,...e};for(const o of a){const l=He(s[o],e[o]);if(!l.valid)return{valid:!1};n[o]=l.data}return{valid:!0,data:n}}else if(t===u.array&&r===u.array){if(s.length!==e.length)return{valid:!1};const i=[];for(let a=0;a<s.length;a++){const n=s[a],o=e[a],l=He(n,o);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return t===u.date&&r===u.date&&+s==+e?{valid:!0,data:s}:{valid:!1}}class Pe extends _{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),i=(a,n)=>{if(gt(a)||gt(n))return g;const o=He(a.value,n.value);return o.valid?((yt(a)||yt(n))&&t.dirty(),{status:t.value,value:o.data}):(h(r,{code:c.invalid_intersection_types}),g)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([a,n])=>i(a,n)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Pe.create=(s,e,t)=>new Pe({left:s,right:e,typeName:y.ZodIntersection,...b(t)});class K extends _{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==u.array)return h(r,{code:c.invalid_type,expected:u.array,received:r.parsedType}),g;if(r.data.length<this._def.items.length)return h(r,{code:c.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),g;!this._def.rest&&r.data.length>this._def.items.length&&(h(r,{code:c.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const a=[...r.data].map((n,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new H(r,n,r.path,o)):null}).filter(n=>!!n);return r.common.async?Promise.all(a).then(n=>A.mergeArray(t,n)):A.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new K({...this._def,rest:e})}}K.create=(s,e)=>{if(!Array.isArray(s))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new K({items:s,typeName:y.ZodTuple,rest:null,...b(e)})};class St extends _{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==u.map)return h(r,{code:c.invalid_type,expected:u.map,received:r.parsedType}),g;const i=this._def.keyType,a=this._def.valueType,n=[...r.data.entries()].map(([o,l],d)=>({key:i._parse(new H(r,o,r.path,[d,"key"])),value:a._parse(new H(r,l,r.path,[d,"value"]))}));if(r.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of n){const d=await l.key,m=await l.value;if(d.status==="aborted"||m.status==="aborted")return g;(d.status==="dirty"||m.status==="dirty")&&t.dirty(),o.set(d.value,m.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const l of n){const d=l.key,m=l.value;if(d.status==="aborted"||m.status==="aborted")return g;(d.status==="dirty"||m.status==="dirty")&&t.dirty(),o.set(d.value,m.value)}return{status:t.value,value:o}}}}St.create=(s,e,t)=>new St({valueType:e,keyType:s,typeName:y.ZodMap,...b(t)});class ve extends _{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==u.set)return h(r,{code:c.invalid_type,expected:u.set,received:r.parsedType}),g;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(h(r,{code:c.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(h(r,{code:c.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());const a=this._def.valueType;function n(l){const d=new Set;for(const m of l){if(m.status==="aborted")return g;m.status==="dirty"&&t.dirty(),d.add(m.value)}return{status:t.value,value:d}}const o=[...r.data.values()].map((l,d)=>a._parse(new H(r,l,r.path,d)));return r.common.async?Promise.all(o).then(l=>n(l)):n(o)}min(e,t){return new ve({...this._def,minSize:{value:e,message:p.toString(t)}})}max(e,t){return new ve({...this._def,maxSize:{value:e,message:p.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}ve.create=(s,e)=>new ve({valueType:s,minSize:null,maxSize:null,typeName:y.ZodSet,...b(e)});class Et extends _{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Et.create=(s,e)=>new Et({getter:s,typeName:y.ZodLazy,...b(e)});class qe extends _{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return h(t,{received:t.data,code:c.invalid_literal,expected:this._def.value}),g}return{status:"valid",value:e.data}}get value(){return this._def.value}}qe.create=(s,e)=>new qe({value:s,typeName:y.ZodLiteral,...b(e)});function Bt(s,e){return new oe({values:s,typeName:y.ZodEnum,...b(e)})}class oe extends _{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return h(t,{expected:x.joinValues(r),received:t.parsedType,code:c.invalid_type}),g}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return h(t,{received:t.data,code:c.invalid_enum_value,options:r}),g}return C(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return oe.create(e,{...this._def,...t})}exclude(e,t=this._def){return oe.create(this.options.filter(r=>!e.includes(r)),{...this._def,...t})}}oe.create=Bt;class At extends _{_parse(e){const t=x.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==u.string&&r.parsedType!==u.number){const i=x.objectValues(t);return h(r,{expected:x.joinValues(i),received:r.parsedType,code:c.invalid_type}),g}if(this._cache||(this._cache=new Set(x.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const i=x.objectValues(t);return h(r,{received:r.data,code:c.invalid_enum_value,options:i}),g}return C(e.data)}get enum(){return this._def.values}}At.create=(s,e)=>new At({values:s,typeName:y.ZodNativeEnum,...b(e)});class Ne extends _{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==u.promise&&t.common.async===!1)return h(t,{code:c.invalid_type,expected:u.promise,received:t.parsedType}),g;const r=t.parsedType===u.promise?t.data:Promise.resolve(t.data);return C(r.then(i=>this._def.type.parseAsync(i,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Ne.create=(s,e)=>new Ne({type:s,typeName:y.ZodPromise,...b(e)});class le extends _{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===y.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,a={addIssue:n=>{h(r,n),n.fatal?t.abort():t.dirty()},get path(){return r.path}};if(a.addIssue=a.addIssue.bind(a),i.type==="preprocess"){const n=i.transform(r.data,a);if(r.common.async)return Promise.resolve(n).then(async o=>{if(t.value==="aborted")return g;const l=await this._def.schema._parseAsync({data:o,path:r.path,parent:r});return l.status==="aborted"?g:l.status==="dirty"||t.value==="dirty"?fe(l.value):l});{if(t.value==="aborted")return g;const o=this._def.schema._parseSync({data:n,path:r.path,parent:r});return o.status==="aborted"?g:o.status==="dirty"||t.value==="dirty"?fe(o.value):o}}if(i.type==="refinement"){const n=o=>{const l=i.refinement(o,a);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?g:(o.status==="dirty"&&t.dirty(),n(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>o.status==="aborted"?g:(o.status==="dirty"&&t.dirty(),n(o.value).then(()=>({status:t.value,value:o.value}))))}if(i.type==="transform")if(r.common.async===!1){const n=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!ae(n))return g;const o=i.transform(n.value,a);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(n=>ae(n)?Promise.resolve(i.transform(n.value,a)).then(o=>({status:t.value,value:o})):g);x.assertNever(i)}}le.create=(s,e,t)=>new le({schema:s,typeName:y.ZodEffects,effect:e,...b(t)});le.createWithPreprocess=(s,e,t)=>new le({schema:e,effect:{type:"preprocess",transform:s},typeName:y.ZodEffects,...b(t)});class V extends _{_parse(e){return this._getType(e)===u.undefined?C(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}V.create=(s,e)=>new V({innerType:s,typeName:y.ZodOptional,...b(e)});class de extends _{_parse(e){return this._getType(e)===u.null?C(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}de.create=(s,e)=>new de({innerType:s,typeName:y.ZodNullable,...b(e)});class Fe extends _{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===u.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Fe.create=(s,e)=>new Fe({innerType:s,typeName:y.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...b(e)});class We extends _{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Oe(i)?i.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new N(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new N(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}We.create=(s,e)=>new We({innerType:s,typeName:y.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...b(e)});class Ct extends _{_parse(e){if(this._getType(e)!==u.nan){const r=this._getOrReturnCtx(e);return h(r,{code:c.invalid_type,expected:u.nan,received:r.parsedType}),g}return{status:"valid",value:e.data}}}Ct.create=s=>new Ct({typeName:y.ZodNaN,...b(s)});class Bs extends _{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class st extends _{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?g:a.status==="dirty"?(t.dirty(),fe(a.value)):this._def.out._parseAsync({data:a.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?g:i.status==="dirty"?(t.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,t){return new st({in:e,out:t,typeName:y.ZodPipeline})}}class Ye extends _{_parse(e){const t=this._def.innerType._parse(e),r=i=>(ae(i)&&(i.value=Object.freeze(i.value)),i);return Oe(t)?t.then(i=>r(i)):r(t)}unwrap(){return this._def.innerType}}Ye.create=(s,e)=>new Ye({innerType:s,typeName:y.ZodReadonly,...b(e)});var y;(function(s){s.ZodString="ZodString",s.ZodNumber="ZodNumber",s.ZodNaN="ZodNaN",s.ZodBigInt="ZodBigInt",s.ZodBoolean="ZodBoolean",s.ZodDate="ZodDate",s.ZodSymbol="ZodSymbol",s.ZodUndefined="ZodUndefined",s.ZodNull="ZodNull",s.ZodAny="ZodAny",s.ZodUnknown="ZodUnknown",s.ZodNever="ZodNever",s.ZodVoid="ZodVoid",s.ZodArray="ZodArray",s.ZodObject="ZodObject",s.ZodUnion="ZodUnion",s.ZodDiscriminatedUnion="ZodDiscriminatedUnion",s.ZodIntersection="ZodIntersection",s.ZodTuple="ZodTuple",s.ZodRecord="ZodRecord",s.ZodMap="ZodMap",s.ZodSet="ZodSet",s.ZodFunction="ZodFunction",s.ZodLazy="ZodLazy",s.ZodLiteral="ZodLiteral",s.ZodEnum="ZodEnum",s.ZodEffects="ZodEffects",s.ZodNativeEnum="ZodNativeEnum",s.ZodOptional="ZodOptional",s.ZodNullable="ZodNullable",s.ZodDefault="ZodDefault",s.ZodCatch="ZodCatch",s.ZodPromise="ZodPromise",s.ZodBranded="ZodBranded",s.ZodPipeline="ZodPipeline",s.ZodReadonly="ZodReadonly"})(y||(y={}));const w=L.create,ce=ne.create,Vs=Ve.create;q.create;const Hs=T.create,ue=k.create;Ie.create;Pe.create;K.create;const qs=qe.create,Je=oe.create;Ne.create;V.create;de.create;ue({id:w(),name:w(),createdAt:w(),lastLogin:w().optional(),isNewUser:Vs().optional()});ue({id:w(),name:w(),description:w(),price:ce(),image:w(),sellerId:w(),sellerName:w(),status:Je(["active","pending_payment","sold"]),highestOffer:ce().nullable(),highestOfferBuyer:w().nullable(),paymentStatus:w().optional(),paymentConfirmedBy:w().optional(),paymentConfirmedAt:w().optional(),createdAt:w()});ue({id:w(),itemId:w(),senderId:w(),senderName:w(),content:w(),type:Je(["text","offer","system"]),price:ce().nullable(),originalPrice:ce().nullable(),status:Je(["pending","accepted","rejected"]).nullable(),timestamp:w(),readBy:Hs(w()).default([])});const Fs=ue({name:w().min(3,"Name must be at least 3 characters").max(100),description:w().min(10,"Description must be at least 10 characters").max(1e3),price:ce().positive("Price must be a positive number").max(1e6),image:w().url("Must be a valid image URL").or(qs("")),sellerId:w().min(1),sellerName:w().min(1)}),Ws=ue({name:w().min(2,"Username must be at least 2 characters").max(30),password:w().min(3,"Password must be at least 3 characters")}),Ys=ue({price:ce().positive("Offer must be positive").max(1e6,"Offer is too high")});var Js=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,W=(s,e,t,r)=>{for(var i=r>1?void 0:r?Gs(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&Js(e,t,i),i};let R=class extends F{constructor(){super(...arguments),this._tab="login",this._name="",this._password="",this._confirm="",this._error="",this._loading=!1,this._open=!1,this._openHandler=s=>{var t;const e=((t=s.detail)==null?void 0:t.tab)||"login";this._openModal(e)},this._close=()=>{this._open=!1,this._error="",this._loading=!1,document.body.style.overflow=""},this._switchTab=s=>{this._tab=s,this._error="",this._name="",this._password="",this._confirm=""},this._handleBackdropClick=s=>{s.target.dataset.backdrop==="true"&&this._close()},this._submit=async s=>{s.preventDefault(),s.stopPropagation();const e=Ws.safeParse({name:this._name,password:this._password});if(!e.success){this._error=e.error.errors[0].message;return}if(this._tab==="register"&&this._password!==this._confirm){this._error="Passwords do not match";return}this._loading=!0,this._error="";try{const t=this._tab==="login"?await ft.login({name:this._name,password:this._password}):await ft.register({name:this._name,password:this._password});this.dispatch({type:"SET_USER",payload:t}),this._close(),window.dispatchEvent(new CustomEvent("user-logged-in",{detail:t}))}catch(t){this._error=t.message??"Something went wrong. Check your connection."}finally{this._loading=!1}}}connectedCallback(){super.connectedCallback(),window.addEventListener("open-auth",this._openHandler),window.addEventListener("require-auth",this._openHandler)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("open-auth",this._openHandler),window.removeEventListener("require-auth",this._openHandler)}_openModal(s="login"){this._tab=s,this._open=!0,this._error="",this._name="",this._password="",this._confirm="",document.body.style.overflow="hidden"}render(){return this._open?f`
      <!-- Full-screen backdrop — data-backdrop lets click-outside-to-close work -->
      <div
        data-backdrop="true"
        @click=${this._handleBackdropClick}
        style="
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: rgba(0,0,0,0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        ">

        <!-- Modal card -->
        <div
          role="dialog"
          aria-modal="true"
          aria-label="${this._tab==="login"?"Sign in":"Create account"}"
          style="
            position: relative;
            width: 100%;
            max-width: 440px;
            background: #0d0d1f;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,158,11,0.06);
            overflow: hidden;
          ">

          <!-- Amber accent bar -->
          <div style="height:3px;background:linear-gradient(90deg,#f59e0b,#ea580c)"></div>

          <div style="padding: 32px 32px 28px;">

            <!-- Close button -->
            <button
              @click=${this._close}
              aria-label="Close modal"
              style="
                position: absolute;
                top: 14px; right: 14px;
                width: 30px; height: 30px;
                display: flex; align-items: center; justify-content: center;
                background: rgba(255,255,255,0.06);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 50%;
                color: rgba(255,255,255,0.5);
                cursor: pointer;
                font-size: 13px;
                font-family: inherit;
                transition: all 0.15s;
              "
              onmouseover="this.style.background='rgba(255,255,255,0.12)';this.style.color='white'"
              onmouseout="this.style.background='rgba(255,255,255,0.06)';this.style.color='rgba(255,255,255,0.5)'"
            >✕</button>

            <!-- Logo + title -->
            <div style="display:flex;flex-direction:column;align-items:center;margin-bottom:24px">
              <div style="
                width:52px;height:52px;
                border-radius:16px;
                background:linear-gradient(135deg,#f59e0b,#ea580c);
                display:flex;align-items:center;justify-content:center;
                font-size:24px;color:white;
                margin-bottom:14px;
                box-shadow:0 8px 24px rgba(245,158,11,0.3)
              ">◈</div>
              <h2 style="
                font-size:22px;font-weight:700;color:white;
                margin:0 0 6px;
                font-family:'Playfair Display',Georgia,serif;
                text-align:center
              ">
                ${this._tab==="login"?"Welcome back":"Create account"}
              </h2>
              <p style="font-size:13px;color:rgba(255,255,255,0.4);margin:0;text-align:center">
                ${this._tab==="login"?"Sign in to your collector account":"Join the marketplace today — free"}
              </p>
            </div>

            <!-- Login / Register tabs -->
            <div style="display:flex;background:rgba(255,255,255,0.05);border-radius:12px;padding:4px;gap:4px;margin-bottom:22px">
              <button
                @click=${()=>this._switchTab("login")}
                style="
                  flex:1;padding:10px 8px;
                  font-size:13px;font-weight:600;
                  border-radius:9px;border:none;cursor:pointer;
                  font-family:inherit;transition:all 0.18s;
                  ${this._tab==="login"?"background:linear-gradient(135deg,#f59e0b,#ea580c);color:white;box-shadow:0 4px 12px rgba(245,158,11,0.3)":"background:transparent;color:rgba(255,255,255,0.48)"}
                ">
                Sign In
              </button>
              <button
                @click=${()=>this._switchTab("register")}
                style="
                  flex:1;padding:10px 8px;
                  font-size:13px;font-weight:600;
                  border-radius:9px;border:none;cursor:pointer;
                  font-family:inherit;transition:all 0.18s;
                  ${this._tab==="register"?"background:linear-gradient(135deg,#f59e0b,#ea580c);color:white;box-shadow:0 4px 12px rgba(245,158,11,0.3)":"background:transparent;color:rgba(255,255,255,0.48)"}
                ">
                Create Account
              </button>
            </div>

            <!-- Error message -->
            ${this._error?f`
              <div style="
                display:flex;align-items:flex-start;gap:9px;
                padding:12px 14px;margin-bottom:18px;
                background:rgba(239,68,68,0.1);
                border:1px solid rgba(239,68,68,0.28);
                border-radius:10px;
                color:#fca5a5;font-size:13px;line-height:1.4
              ">
                <span style="flex-shrink:0;font-size:14px;margin-top:1px">⚠</span>
                <span>${this._error}</span>
              </div>`:""}

            <!-- Form -->
            <form @submit=${this._submit} novalidate style="display:flex;flex-direction:column;gap:15px">

              <!-- Username field -->
              <div>
                <label style="
                  display:block;
                  font-size:11px;font-weight:600;
                  color:rgba(255,255,255,0.4);
                  text-transform:uppercase;letter-spacing:0.08em;
                  margin-bottom:8px
                ">Username</label>
                <input
                  type="text"
                  autocomplete="username"
                  .value=${this._name}
                  @input=${s=>{this._name=s.target.value}}
                  placeholder="e.g. ComicCollector"
                  style="
                    width:100%;box-sizing:border-box;
                    background:rgba(255,255,255,0.05);
                    border:1.5px solid rgba(255,255,255,0.1);
                    border-radius:12px;
                    padding:13px 16px;
                    color:white;font-size:14px;
                    outline:none;font-family:inherit;
                    transition:border-color 0.2s,background 0.2s;
                  "
                  @focus=${s=>{s.target.style.borderColor="rgba(245,158,11,0.6)",s.target.style.background="rgba(255,255,255,0.07)"}}
                  @blur=${s=>{s.target.style.borderColor="rgba(255,255,255,0.1)",s.target.style.background="rgba(255,255,255,0.05)"}}
                />
              </div>

              <!-- Password field -->
              <div>
                <label style="
                  display:block;
                  font-size:11px;font-weight:600;
                  color:rgba(255,255,255,0.4);
                  text-transform:uppercase;letter-spacing:0.08em;
                  margin-bottom:8px
                ">Password</label>
                <input
                  type="password"
                  autocomplete="${this._tab==="login"?"current-password":"new-password"}"
                  .value=${this._password}
                  @input=${s=>{this._password=s.target.value}}
                  placeholder="••••••••"
                  minlength="3"
                  style="
                    width:100%;box-sizing:border-box;
                    background:rgba(255,255,255,0.05);
                    border:1.5px solid rgba(255,255,255,0.1);
                    border-radius:12px;
                    padding:13px 16px;
                    color:white;font-size:14px;
                    outline:none;font-family:inherit;
                    transition:border-color 0.2s,background 0.2s;
                  "
                  @focus=${s=>{s.target.style.borderColor="rgba(245,158,11,0.6)",s.target.style.background="rgba(255,255,255,0.07)"}}
                  @blur=${s=>{s.target.style.borderColor="rgba(255,255,255,0.1)",s.target.style.background="rgba(255,255,255,0.05)"}}
                />
              </div>

              <!-- Confirm password — register tab only -->
              ${this._tab==="register"?f`
                <div>
                  <label style="
                    display:block;
                    font-size:11px;font-weight:600;
                    color:rgba(255,255,255,0.4);
                    text-transform:uppercase;letter-spacing:0.08em;
                    margin-bottom:8px
                  ">Confirm Password</label>
                  <input
                    type="password"
                    autocomplete="new-password"
                    .value=${this._confirm}
                    @input=${s=>{this._confirm=s.target.value}}
                    placeholder="••••••••"
                    style="
                      width:100%;box-sizing:border-box;
                      background:rgba(255,255,255,0.05);
                      border:1.5px solid rgba(255,255,255,0.1);
                      border-radius:12px;
                      padding:13px 16px;
                      color:white;font-size:14px;
                      outline:none;font-family:inherit;
                      transition:border-color 0.2s,background 0.2s;
                    "
                    @focus=${s=>{s.target.style.borderColor="rgba(245,158,11,0.6)",s.target.style.background="rgba(255,255,255,0.07)"}}
                    @blur=${s=>{s.target.style.borderColor="rgba(255,255,255,0.1)",s.target.style.background="rgba(255,255,255,0.05)"}}
                  />
                </div>`:""}

              <!-- Submit button -->
              <button
                type="submit"
                ?disabled=${this._loading}
                style="
                  width:100%;padding:14px 20px;
                  background:linear-gradient(135deg,#f59e0b,#ea580c);
                  color:white;font-size:15px;font-weight:700;
                  border-radius:12px;border:none;
                  cursor:${this._loading?"not-allowed":"pointer"};
                  opacity:${this._loading?"0.65":"1"};
                  font-family:inherit;
                  box-shadow:0 6px 24px rgba(245,158,11,0.28);
                  transition:opacity 0.2s,transform 0.15s;
                  margin-top:4px;
                "
                onmouseover="if(!this.disabled){this.style.transform='translateY(-1px)';this.style.boxShadow='0 10px 30px rgba(245,158,11,0.38)'}"
                onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 6px 24px rgba(245,158,11,0.28)'"
              >
                ${this._loading?f`<span style="display:flex;align-items:center;justify-content:center;gap:8px">
                      <svg style="animation:spin .8s linear infinite" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                      Processing…
                    </span>`:this._tab==="login"?"Sign In":"Create Account"}
              </button>
            </form>

            <!-- Switch tab -->
            <p style="text-align:center;font-size:12px;color:rgba(255,255,255,0.3);margin:18px 0 0">
              ${this._tab==="login"?"Don't have an account?":"Already have an account?"}
              <button
                @click=${()=>this._switchTab(this._tab==="login"?"register":"login")}
                style="
                  background:none;border:none;cursor:pointer;
                  font-size:12px;font-family:inherit;
                  color:#fbbf24;text-decoration:underline;margin-left:5px;
                "
              >
                ${this._tab==="login"?"Create one free":"Sign in instead"}
              </button>
            </p>

          </div><!-- /padding -->
        </div><!-- /card -->
      </div><!-- /backdrop -->

      <style>
        @keyframes spin { to { transform: rotate(360deg); } }
      </style>
    `:f``}};W([$()],R.prototype,"_tab",2);W([$()],R.prototype,"_name",2);W([$()],R.prototype,"_password",2);W([$()],R.prototype,"_confirm",2);W([$()],R.prototype,"_error",2);W([$()],R.prototype,"_loading",2);W([$()],R.prototype,"_open",2);R=W([j("auth-modal")],R);var Qs=Object.getOwnPropertyDescriptor,Ks=(s,e,t,r)=>{for(var i=r>1?void 0:r?Qs(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=n(i)||i);return i};let Ot=class extends F{constructor(){super(...arguments),this._openLogin=()=>{window.dispatchEvent(new CustomEvent("open-auth",{detail:{tab:"login"}}))},this._logout=()=>{this.dispatch({type:"SET_USER",payload:null}),window.dispatchEvent(new CustomEvent("toast",{detail:{msg:"Signed out successfully",type:"info"}}))}}render(){const s=this.state.user;return s?f`
      <div style="display:flex;align-items:center;gap:8px">
        <!-- User pill (desktop) -->
        <div style="
          display:none;
          align-items:center;gap:8px;
          padding:5px 12px 5px 6px;
          background:rgba(255,255,255,0.07);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:50px;
          @media(min-width:640px){display:flex}
        " class="hidden sm:flex">
          <div style="
            width:26px;height:26px;border-radius:50%;
            background:linear-gradient(135deg,#fbbf24,#ea580c);
            display:flex;align-items:center;justify-content:center;
            font-size:11px;font-weight:700;color:white;flex-shrink:0
          ">${s.name[0].toUpperCase()}</div>
          <span style="font-size:13px;font-weight:500;color:rgba(255,255,255,0.82);max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.name}</span>
        </div>
        <!-- Avatar only (mobile) -->
        <div style="
          width:32px;height:32px;border-radius:50%;
          background:linear-gradient(135deg,#fbbf24,#ea580c);
          display:flex;align-items:center;justify-content:center;
          font-size:13px;font-weight:700;color:white;flex-shrink:0
        " class="sm:hidden">${s.name[0].toUpperCase()}</div>
        <!-- Sign out -->
        <button
          @click=${this._logout}
          style="
            padding:6px 13px;
            font-size:12px;font-weight:500;
            color:rgba(255,255,255,0.48);
            border:1px solid rgba(255,255,255,0.12);
            border-radius:50px;background:transparent;
            cursor:pointer;font-family:inherit;
            transition:all 0.18s;
          "
          onmouseover="this.style.color='white';this.style.borderColor='rgba(255,255,255,0.28)'"
          onmouseout="this.style.color='rgba(255,255,255,0.48)';this.style.borderColor='rgba(255,255,255,0.12)'"
        >Sign out</button>
      </div>`:f`
      <button
        @click=${this._openLogin}
        style="
          padding:9px 20px;
          background:linear-gradient(135deg,#f59e0b,#ea580c);
          color:white;font-size:13px;font-weight:600;
          border-radius:50px;border:none;
          cursor:pointer;font-family:inherit;
          box-shadow:0 4px 16px rgba(245,158,11,0.25);
          transition:opacity 0.18s,transform 0.15s;
          white-space:nowrap;
        "
        onmouseover="this.style.opacity='0.88';this.style.transform='translateY(-1px)'"
        onmouseout="this.style.opacity='1';this.style.transform='translateY(0)'"
      >Sign In</button>`}};Ot=Ks([j("header-auth")],Ot);var Xs=Object.defineProperty,er=Object.getOwnPropertyDescriptor,Vt=(s,e,t,r)=>{for(var i=r>1?void 0:r?er(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&Xs(e,t,i),i};let Ge=class extends F{constructor(){super(...arguments),this._q=""}_input(s){this._q=s.target.value,clearTimeout(this._timer),this._timer=setTimeout(()=>this._search(),380)}async _search(){this.dispatch({type:"SET_LOADING",payload:!0}),this.dispatch({type:"SET_SEARCH",payload:this._q});try{this.dispatch({type:"SET_ITEMS",payload:await Z.getAll(this._q)})}catch(s){this.dispatch({type:"SET_ERROR",payload:s.message})}finally{this.dispatch({type:"SET_LOADING",payload:!1})}}render(){return f`
      <div style="position:relative;width:100%">
        <!-- Search icon -->
        <svg style="position:absolute;left:13px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:rgba(255,255,255,0.38);pointer-events:none;flex-shrink:0"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3" stroke-linecap="round"/>
        </svg>

        <input
          type="text"
          .value=${this._q}
          @input=${this._input}
          placeholder="Search comics, cards, figures…"
          aria-label="Search marketplace items"
          style="
            width: 100%;
            box-sizing: border-box;
            background: rgba(255,255,255,0.07);
            border: 1.5px solid rgba(255,255,255,0.1);
            border-radius: 50px;
            padding: 10px 38px 10px 38px;
            color: white;
            font-size: 14px;
            font-family: 'DM Sans', system-ui, sans-serif;
            outline: none;
            transition: border-color 0.2s, background 0.2s;
            -webkit-text-fill-color: white;
          "
          @focus=${s=>{const e=s.target;e.style.borderColor="rgba(245,158,11,0.55)",e.style.background="rgba(255,255,255,0.1)"}}
          @blur=${s=>{const e=s.target;e.style.borderColor="rgba(255,255,255,0.1)",e.style.background="rgba(255,255,255,0.07)"}}
        />

        <!-- Clear button -->
        ${this._q?f`
          <button
            @click=${()=>{this._q="",this._search()}}
            aria-label="Clear search"
            style="
              position: absolute;
              right: 12px;
              top: 50%;
              transform: translateY(-50%);
              background: rgba(255,255,255,0.1);
              border: none;
              color: rgba(255,255,255,0.55);
              cursor: pointer;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0;
              transition: all 0.18s;
            "
            onmouseover="this.style.background='rgba(255,255,255,0.2)';this.style.color='white'"
            onmouseout="this.style.background='rgba(255,255,255,0.1)';this.style.color='rgba(255,255,255,0.55)'"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>`:""}
      </div>

      <style>
        /* Ensure placeholder is styled correctly */
        search-bar input::placeholder { color: rgba(255,255,255,0.3); }
        search-bar input::-webkit-input-placeholder { color: rgba(255,255,255,0.3); }
      </style>
    `}};Vt([$()],Ge.prototype,"_q",2);Ge=Vt([j("search-bar")],Ge);var tr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,Ht=(s,e,t,r)=>{for(var i=r>1?void 0:r?sr(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&tr(e,t,i),i};let Qe=class extends F{render(){const{item:s}=this;if(!s)return f``;const e=this.state.user,t=(e==null?void 0:e.id)===s.sellerId,r=this.state.unreadCounts[s.id]??0,i=()=>window.dispatchEvent(new CustomEvent("open-detail",{detail:s})),a=o=>{o.stopPropagation(),o.preventDefault(),e?window.dispatchEvent(new CustomEvent("open-chat",{detail:s})):window.dispatchEvent(new CustomEvent("require-auth"))},n=o=>{o.stopPropagation(),e?window.dispatchEvent(new CustomEvent("open-chat",{detail:s})):window.dispatchEvent(new CustomEvent("require-auth"))};return f`
      <article
        @click=${i}
        @keydown=${o=>o.key==="Enter"&&i()}
        tabindex="0" role="button"
        aria-label="View details for ${s.name}"
        style="
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          outline: none;
        "
        onmouseover="this.style.borderColor='rgba(245,158,11,0.3)';this.style.background='rgba(255,255,255,0.055)';this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 32px rgba(0,0,0,0.35)'"
        onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.background='rgba(255,255,255,0.035)';this.style.transform='translateY(0)';this.style.boxShadow='none'"
      >

        <!-- Image section -->
        <div style="position:relative;aspect-ratio:4/3;overflow:hidden;background:rgba(255,255,255,0.05);flex-shrink:0">
          <img
            src="${s.image||"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500"}"
            alt="${s.name}"
            loading="lazy"
            style="width:100%;height:100%;object-fit:cover;transition:transform 0.45s"
            onmouseover="this.style.transform='scale(1.05)'"
            onmouseout="this.style.transform='scale(1)'"
            onerror="this.src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500'"
          />

          ${s.paymentStatus==="paid"?f`
            <span style="position:absolute;top:10px;left:10px;padding:2px 9px;background:rgba(59,130,246,0.9);border-radius:50px;font-size:10px;font-weight:600;color:white">
              Payment Pending
            </span>`:""}

          ${t?f`
            <span style="position:absolute;top:10px;right:10px;padding:2px 9px;background:rgba(245,158,11,0.9);border-radius:50px;font-size:10px;font-weight:600;color:white">
              Your listing
            </span>`:""}

          <!-- Unread badge — clicking opens the chat directly -->
          ${r>0?f`
            <button
              @click=${a}
              aria-label="View ${r} unread message${r>1?"s":""}"
              title="You have ${r} unread message${r>1?"s":""} — click to open chat"
              style="
                position: absolute;
                bottom: 10px;
                right: 10px;
                min-width: 22px;
                height: 22px;
                padding: 0 5px;
                background: #ef4444;
                border: 2px solid rgba(13,13,31,0.8);
                border-radius: 50px;
                color: white;
                font-size: 11px;
                font-weight: 700;
                font-family: inherit;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3px;
                transition: all 0.18s;
                animation: badgePulse 2s ease-in-out infinite;
              "
              onmouseover="this.style.transform='scale(1.15)';this.style.background='#dc2626'"
              onmouseout="this.style.transform='scale(1)';this.style.background='#ef4444'"
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              ${r}
            </button>`:""}
        </div>

        <!-- Body -->
        <div style="padding:16px;display:flex;flex-direction:column;flex:1">
          <h3 style="font-size:14px;font-weight:600;color:rgba(255,255,255,0.88);line-height:1.4;margin:0 0 6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
            ${s.name}
          </h3>
          <p style="font-size:11px;color:rgba(255,255,255,0.38);line-height:1.5;margin:0 0 14px;flex:1;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
            ${s.description}
          </p>

          <!-- Price row -->
          <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:8px">
            <div>
              <div style="font-size:20px;font-weight:700;color:#f59e0b;line-height:1;font-family:'Playfair Display',serif">
                ${this.$$(s.price)}
              </div>
              ${s.highestOffer?f`
                <div style="font-size:10px;color:rgba(52,211,153,0.85);margin-top:3px">
                  Best: ${this.$$(s.highestOffer)}
                </div>`:""}
            </div>

            ${t?"":f`
              <button
                @click=${n}
                aria-label="${e?"Chat about "+s.name:"Sign in to contact seller"}"
                style="
                  display: flex;
                  align-items: center;
                  gap: 5px;
                  padding: 7px 13px;
                  font-size: 11px;
                  font-weight: 600;
                  border-radius: 10px;
                  flex-shrink: 0;
                  cursor: pointer;
                  font-family: inherit;
                  transition: all 0.18s;
                  ${e?"background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.3);color:#fbbf24":"background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.6)"}
                "
                onmouseover="this.style.opacity='0.8'"
                onmouseout="this.style.opacity='1'"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  ${e?f`<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`:f`<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>`}
                </svg>
                ${e?"Chat":"Sign in"}
              </button>`}
          </div>

          <!-- Seller meta -->
          <div style="display:flex;align-items:center;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06)">
            <div style="width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#8b5cf6,#ec4899);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:white;flex-shrink:0">
              ${s.sellerName[0].toUpperCase()}
            </div>
            <span style="font-size:11px;color:rgba(255,255,255,0.38);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.sellerName}</span>
            <span style="font-size:10px;color:rgba(255,255,255,0.22);margin-left:auto;flex-shrink:0">${this.ago(s.createdAt)}</span>
          </div>
        </div>
      </article>

      <style>
        @keyframes badgePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
          50% { box-shadow: 0 0 0 5px rgba(239,68,68,0); }
        }
      </style>
    `}};Ht([Ut({type:Object})],Qe.prototype,"item",2);Qe=Ht([j("item-card")],Qe);var rr=Object.getOwnPropertyDescriptor,ir=(s,e,t,r)=>{for(var i=r>1?void 0:r?rr(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=n(i)||i);return i};let Tt=class extends F{async connectedCallback(){super.connectedCallback(),await this._load()}async _load(){this.dispatch({type:"SET_LOADING",payload:!0}),this.dispatch({type:"SET_ERROR",payload:null});try{this.dispatch({type:"SET_ITEMS",payload:await Z.getAll(this.state.searchQuery)})}catch(s){this.dispatch({type:"SET_ERROR",payload:s.message})}finally{this.dispatch({type:"SET_LOADING",payload:!1})}}render(){const{items:s,isLoading:e,error:t,searchQuery:r}=this.state;return e?f`
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        ${Array(8).fill(0).map(()=>f`
          <div class="bg-white/[.03] border border-white/8 rounded-2xl overflow-hidden animate-pulse">
            <div class="aspect-[4/3] bg-white/[.06]"></div>
            <div class="p-4 space-y-2.5">
              <div class="h-3.5 bg-white/[.06] rounded-md w-4/5"></div>
              <div class="h-3 bg-white/[.04] rounded-md w-full"></div>
              <div class="h-3 bg-white/[.04] rounded-md w-3/5"></div>
              <div class="h-5 bg-amber-500/8 rounded-md w-2/5 mt-3"></div>
            </div>
          </div>`)}
      </div>`:t?f`
      <div class="flex flex-col items-center py-24 text-center gap-4">
        <div class="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl">⚡</div>
        <div>
          <p class="text-white/55 font-semibold text-lg mb-1">Connection error</p>
          <p class="text-white/30 text-sm mb-4">Make sure the backend is running on port 3000</p>
          <button @click=${this._load}
            class="px-5 py-2 bg-white/6 border border-white/15 text-white/65 hover:text-white text-sm rounded-xl transition-all">
            Retry
          </button>
        </div>
      </div>`:s.length?f`
      <div>
        <p class="text-xs text-white/35 mb-5">
          <span class="text-white/60 font-semibold">${s.length}</span>
          item${s.length!==1?"s":""}
          ${r?f` for <span class="text-amber-400">"${r}"</span>`:" on the market"}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          ${s.map(i=>f`<item-card .item=${i}></item-card>`)}
        </div>
      </div>`:f`
      <div class="flex flex-col items-center py-24 text-center gap-4">
        <div class="w-16 h-16 rounded-2xl bg-amber-500/8 border border-amber-500/15 flex items-center justify-center text-3xl">◈</div>
        <div>
          <p class="text-white/55 font-semibold text-lg mb-1">
            ${r?`No results for "${r}"`:"No listings yet"}
          </p>
          <p class="text-white/28 text-sm">
            ${r?"Try a different keyword":"Be the first to list a collectible!"}
          </p>
        </div>
      </div>`}};Tt=ir([j("item-grid")],Tt);var ar=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,ke=(s,e,t,r)=>{for(var i=r>1?void 0:r?nr(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&ar(e,t,i),i};let he=class extends F{constructor(){super(...arguments),this._open=!1,this._loading=!1,this._err={},this._form={name:"",description:"",price:"",image:""}}open(){this._open=!0}close(){this._open=!1,this._err={},this._form={name:"",description:"",price:"",image:""}}_set(s,e){if(this._form={...this._form,[s]:e},this._err[s]){const{[s]:t,...r}=this._err;this._err=r}}async _submit(s){s==null||s.preventDefault();const e=this.state.user;if(!e){window.dispatchEvent(new CustomEvent("require-auth"));return}const t=Fs.safeParse({name:this._form.name,description:this._form.description,price:parseFloat(this._form.price)||0,image:this._form.image||"",sellerId:e.id,sellerName:e.name});if(!t.success){const r={};t.error.errors.forEach(i=>{r[i.path[0]]=i.message}),this._err=r;return}this._loading=!0;try{const r=await Z.create({...t.data,image:t.data.image||"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"});this.dispatch({type:"ADD_ITEM",payload:r}),this.close(),window.dispatchEvent(new CustomEvent("item-listed",{detail:r}))}catch(r){this._err={_submit:r.message}}finally{this._loading=!1}}_inp(s,e,t={}){const r=this._form[s],i=this._err[s],a=i?"rgba(239,68,68,0.5)":"rgba(255,255,255,0.15)",n=`width:100%;box-sizing:border-box;background:rgba(25,25,50,0.95);border:1.5px solid ${a};border-radius:12px;color:#ffffff;font-size:14px;font-family:'DM Sans',system-ui,sans-serif;outline:none;transition:border-color .2s;-webkit-text-fill-color:#ffffff;caret-color:white;`,o=d=>{d.target.style.borderColor="rgba(245,158,11,0.55)",d.target.style.background="rgba(30,30,60,0.98)"},l=d=>{d.target.style.borderColor=a,d.target.style.background="rgba(25,25,50,0.95)"};return f`
      <div style="margin-bottom:4px">
        <label style="display:block;font-size:10px;font-weight:600;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">
          ${e}${s!=="image"?f` <span style="color:#f87171">*</span>`:""}
        </label>
        <div style="position:relative">
          ${t.prefix?f`<span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.4);font-size:14px;pointer-events:none">${t.prefix}</span>`:""}
          ${t.multi?f`<textarea .value=${r} rows="3"
                     @input=${d=>this._set(s,d.target.value)}
                     @focus=${o} @blur=${l}
                     placeholder=${t.placeholder??""}
                     style="${n}padding:12px 16px;resize:none;"></textarea>`:f`<input
                     type=${t.type??"text"} .value=${r}
                     @input=${d=>this._set(s,d.target.value)}
                     @focus=${o} @blur=${l}
                     placeholder=${t.placeholder??""}
                     style="${n}padding:12px ${t.prefix?"16px 12px 36px":"16px"};" />`}
        </div>
        ${i?f`<p style="margin:5px 0 0;font-size:11px;color:#f87171">${i}</p>`:""}
      </div>`}render(){return this._open?f`
      <div class="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-md" @click=${this.close}></div>
        <div class="relative w-full sm:max-w-lg bg-[#0d0d1f] border border-white/10 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

          <div class="h-1 bg-gradient-to-r from-amber-500 to-orange-500 shrink-0"></div>

          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-white/8 shrink-0">
            <div>
              <h2 class="text-lg font-bold text-white" style="font-family:'Playfair Display',serif">List New Item</h2>
              <p class="text-xs text-white/35 mt-0.5">Add your collectible to the marketplace</p>
            </div>
            <button @click=${this.close} class="w-8 h-8 flex items-center justify-center bg-white/6 hover:bg-white/10 rounded-full text-white/45 hover:text-white transition-all text-sm border-none cursor-pointer">✕</button>
          </div>

          <!-- Body -->
          <div class="overflow-y-auto flex-1">
            <form @submit=${this._submit} class="p-6 space-y-4">
              ${this._err._submit?f`
                <div class="p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm">${this._err._submit}</div>`:""}

              ${this._inp("name","Item Name",{placeholder:"e.g. Spider-Man #1 First Edition"})}
              ${this._inp("description","Description",{multi:!0,placeholder:"Condition, rarity, special details…"})}
              ${this._inp("price","Price (USD)",{type:"number",prefix:"$",placeholder:"0"})}
              ${this._inp("image","Image URL",{type:"url",placeholder:"https://…"})}

              ${this._form.image?f`
                <div class="rounded-xl overflow-hidden aspect-video bg-white/5">
                  <img src="${this._form.image}" class="w-full h-full object-cover"
                    onerror="this.src='https://via.placeholder.com/600x338?text=Invalid+URL'" />
                </div>`:""}

              <button type="submit" ?disabled=${this._loading}
                class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-xl hover:opacity-90 disabled:opacity-50 transition-all shadow-lg shadow-amber-500/20">
                ${this._loading?"Listing…":"✦ List for Sale"}
              </button>
            </form>
          </div>
        </div>
      </div>`:f``}};ke([$()],he.prototype,"_open",2);ke([$()],he.prototype,"_loading",2);ke([$()],he.prototype,"_err",2);ke([$()],he.prototype,"_form",2);he=ke([j("list-item-modal")],he);var or=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,M=(s,e,t,r)=>{for(var i=r>1?void 0:r?lr(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&or(e,t,i),i};const It=`
  box-sizing: border-box;
  background: rgba(30, 30, 55, 0.9);
  border: 1.5px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  color: #ffffff;
  font-size: 14px;
  font-family: 'DM Sans', system-ui, sans-serif;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  -webkit-text-fill-color: #ffffff;
`;let I=class extends F{constructor(){super(...arguments),this._item=null,this._open=!1,this._text="",this._offerMode=!1,this._offerPrice="",this._offerErr="",this._sending=!1,this._checkingOut=!1,this._lastTs=new Date(0).toISOString(),this._openHandler=s=>{this.openForItem(s.detail)}}connectedCallback(){super.connectedCallback(),window.addEventListener("open-chat",this._openHandler)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("open-chat",this._openHandler),clearTimeout(this._poll)}openForItem(s){this._item=s,this._open=!0,this._lastTs=new Date(0).toISOString(),this._offerMode=!1,this._offerPrice="",this._offerErr="",this._text="",document.body.style.overflow="hidden",this._loadMsgs()}close(){this._open=!1,clearTimeout(this._poll),this._item=null,this._text="",document.body.style.overflow=""}async _loadMsgs(){if(this._item)try{const s=await P.getForItem(this._item.id);if(this.dispatch({type:"SET_MESSAGES",payload:{itemId:this._item.id,messages:s}}),s.length&&(this._lastTs=s[s.length-1].timestamp),this.state.user){await P.markRead(this.state.user.id,this._item.id);const e={...this.state.unreadCounts};delete e[this._item.id],this.dispatch({type:"SET_UNREAD",payload:e})}this._scrollBottom(),this._startPoll()}catch{}}_startPoll(){clearTimeout(this._poll),this._poll=setTimeout(async()=>{if(!(!this._item||!this._open)){try{const s=await P.poll(this._item.id,this._lastTs);if(s.hasNew){s.messages.forEach(t=>this.dispatch({type:"ADD_MESSAGE",payload:t})),this._lastTs=s.lastTimestamp;const e=await Z.getById(this._item.id);if(this._item=e,this.dispatch({type:"UPDATE_ITEM",payload:e}),this._scrollBottom(),this.state.user){await P.markRead(this.state.user.id,this._item.id);const t={...this.state.unreadCounts};delete t[this._item.id],this.dispatch({type:"SET_UNREAD",payload:t})}}}catch{}this._open&&this._startPoll()}},2e3)}_scrollBottom(){setTimeout(()=>{const s=this.querySelector(".chat-msgs");s&&(s.scrollTop=s.scrollHeight)},60)}async _send(){if(!(!this._text.trim()||!this._item||!this.state.user||this._sending)){this._sending=!0;try{const s=await P.send({itemId:this._item.id,senderId:this.state.user.id,senderName:this.state.user.name,content:this._text.trim()});this.dispatch({type:"ADD_MESSAGE",payload:s}),this._lastTs=s.timestamp,this._text="",this._scrollBottom()}catch{}finally{this._sending=!1}}}async _sendOffer(){if(!this._item||!this.state.user)return;const s=Ys.safeParse({price:parseFloat(this._offerPrice)});if(!s.success){this._offerErr=s.error.errors[0].message;return}this._sending=!0,this._offerErr="";try{const e=await P.send({itemId:this._item.id,senderId:this.state.user.id,senderName:this.state.user.name,content:`Offer: ${this.$$(s.data.price)}`,type:"offer",price:s.data.price,originalPrice:this._item.price});this.dispatch({type:"ADD_MESSAGE",payload:e}),this._lastTs=e.timestamp,this._offerMode=!1,this._offerPrice="",this._scrollBottom()}catch(e){this._offerErr=e.message}finally{this._sending=!1}}async _respond(s,e){try{const t=await P.respondToOffer(s,e);if(this.dispatch({type:"UPDATE_MESSAGE",payload:t}),e==="accepted"&&this._item){const r=await Z.getById(this._item.id);this._item=r,this.dispatch({type:"UPDATE_ITEM",payload:r})}}catch{}}async _checkout(){if(!(!this._item||!this.state.user)){this._checkingOut=!0;try{const s=await Z.checkout(this._item.id,this.state.user.id);this._item=s.item,this.dispatch({type:"UPDATE_ITEM",payload:s.item}),await P.send({itemId:this._item.id,senderId:"system",senderName:"System",content:`💳 ${this.state.user.name} submitted payment — awaiting seller confirmation.`,type:"system"})}catch{}finally{this._checkingOut=!1}}}async _confirmSale(){if(!(!this._item||!this.state.user||!confirm("Confirm sale? Item will be removed.")))try{await Z.confirmSale(this._item.id,this.state.user.id),this.dispatch({type:"REMOVE_ITEM",payload:this._item.id}),this.close()}catch{}}_bubble(s){const e=this.state.user,t=s.senderId===(e==null?void 0:e.id),r=s.senderId==="system"||s.type==="system",i=this._item,a=i&&(e==null?void 0:e.id)===i.sellerId;if(r)return f`
      <div style="display:flex;justify-content:center;margin:10px 0">
        <span style="padding:5px 16px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:50px;font-size:11px;color:rgba(255,255,255,0.45)">
          ${s.content}
        </span>
      </div>`;if(s.type==="offer"){const n=a&&s.status==="pending",o=!a&&s.status==="accepted"&&(i==null?void 0:i.paymentStatus)!=="paid",l=s.status==="accepted"?"#34d399":s.status==="rejected"?"#f87171":"rgba(255,255,255,0.4)",d=s.status==="accepted"?"✓ Accepted":s.status==="rejected"?"✗ Rejected":"⏳ Pending";return f`
        <div style="display:flex;justify-content:${t?"flex-end":"flex-start"};margin-bottom:12px">
          <div style="max-width:280px;width:100%">
            <div style="background:linear-gradient(135deg,rgba(245,158,11,0.14),rgba(234,88,12,0.08));border:1px solid rgba(245,158,11,0.28);border-radius:16px;padding:16px">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                <span style="font-size:10px;font-weight:700;color:rgba(245,158,11,0.8);text-transform:uppercase;letter-spacing:0.06em">Price Offer</span>
                <span style="font-size:11px;color:${l}">${d}</span>
              </div>
              <div style="font-size:26px;font-weight:700;color:#f59e0b;font-family:'Playfair Display',serif;line-height:1">${this.$$(s.price)}</div>
              ${s.originalPrice?f`<p style="font-size:10px;color:rgba(255,255,255,0.35);margin:3px 0 0">vs asking ${this.$$(s.originalPrice)}</p>`:""}
              ${o?f`
                <button @click=${()=>this._checkout()} ?disabled=${this._checkingOut}
                  style="margin-top:12px;width:100%;padding:10px;background:linear-gradient(135deg,#10b981,#0d9488);color:white;font-size:12px;font-weight:700;border-radius:10px;border:none;cursor:pointer;font-family:inherit;disabled:opacity:0.5">
                  ${this._checkingOut?"Processing…":"💳 Checkout & Pay"}
                </button>`:""}
              ${n?f`
                <div style="display:flex;gap:8px;margin-top:12px">
                  <button @click=${()=>this._respond(s.id,"accepted")}
                    style="flex:1;padding:9px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.38);color:#34d399;font-size:12px;font-weight:700;border-radius:9px;cursor:pointer;font-family:inherit">
                    ✓ Accept
                  </button>
                  <button @click=${()=>this._respond(s.id,"rejected")}
                    style="flex:1;padding:9px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#f87171;font-size:12px;font-weight:700;border-radius:9px;cursor:pointer;font-family:inherit">
                    ✗ Decline
                  </button>
                </div>`:""}
            </div>
            <p style="font-size:10px;color:rgba(255,255,255,0.22);margin:4px 0 0;padding:0 4px;text-align:${t?"right":"left"}">${t?"You":s.senderName} · ${this.ago(s.timestamp)}</p>
          </div>
        </div>`}return f`
      <div style="display:flex;justify-content:${t?"flex-end":"flex-start"};margin-bottom:8px">
        <div style="max-width:72%">
          <div style="
            padding:10px 14px;
            border-radius:${t?"16px 16px 4px 16px":"16px 16px 16px 4px"};
            font-size:14px;line-height:1.5;
            ${t?"background:linear-gradient(135deg,rgba(245,158,11,0.28),rgba(234,88,12,0.18));border:1px solid rgba(245,158,11,0.22);color:rgba(255,255,255,0.92)":"background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.85)"}
          ">${s.content}</div>
          <p style="font-size:10px;color:rgba(255,255,255,0.22);margin:3px 0 0;padding:0 4px;text-align:${t?"right":"left"}">${t?"You":s.senderName} · ${this.ago(s.timestamp)}</p>
        </div>
      </div>`}render(){if(!this._open||!this._item)return f``;const s=this._item,e=this.state.user,t=this.state.messages[s.id]??[],r=(e==null?void 0:e.id)===s.sellerId;return f`
      <!-- Backdrop -->
      <div style="position:fixed;inset:0;z-index:8000;display:flex;align-items:flex-end;justify-content:center"
           @click=${i=>{i.target.dataset.backdrop==="true"&&this.close()}}>
        <div data-backdrop="true" style="position:absolute;inset:0;background:rgba(0,0,0,0.62);backdrop-filter:blur(8px)"></div>

        <!-- Chat panel -->
        <div style="
          position:relative;
          width:100%;max-width:480px;
          background:#0d0d1f;
          border:1px solid rgba(255,255,255,0.1);
          border-radius:20px 20px 0 0;
          box-shadow:0 -20px 60px rgba(0,0,0,0.5);
          display:flex;flex-direction:column;
          height:85vh;max-height:680px;
          overflow:hidden;
        ">

          <!-- Header bar -->
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.08);flex-shrink:0">
            <img
              src="${s.image}"
              alt="${s.name}"
              style="width:42px;height:42px;border-radius:10px;object-fit:cover;background:rgba(255,255,255,0.05);flex-shrink:0"
              onerror="this.src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=80'"
            />
            <div style="min-width:0;flex:1">
              <p style="font-size:14px;font-weight:600;color:white;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.name}</p>
              <p style="font-size:13px;font-weight:700;color:#f59e0b;margin:2px 0 0;font-family:'Playfair Display',serif">${this.$$(s.price)}</p>
            </div>
            ${r&&s.paymentStatus==="paid"?f`
              <button @click=${()=>this._confirmSale()}
                style="padding:7px 13px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.35);color:#34d399;font-size:11px;font-weight:700;border-radius:10px;cursor:pointer;font-family:inherit;flex-shrink:0">
                ✓ Confirm Sale
              </button>`:""}
            <button @click=${()=>this.close()}
              style="flex-shrink:0;width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:50%;color:rgba(255,255,255,0.5);cursor:pointer;font-size:13px;font-family:inherit;transition:all 0.18s"
              onmouseover="this.style.background='rgba(255,255,255,0.12)';this.style.color='white'"
              onmouseout="this.style.background='rgba(255,255,255,0.06)';this.style.color='rgba(255,255,255,0.5)'">
              ✕
            </button>
          </div>

          <!-- Messages area -->
          <div class="chat-msgs" style="flex:1;overflow-y:auto;padding:16px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.08) transparent">
            ${t.length?t.map(i=>this._bubble(i)):f`
              <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;opacity:0.5">
                <div style="font-size:36px;margin-bottom:12px">💬</div>
                <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0">No messages yet</p>
                <p style="color:rgba(255,255,255,0.3);font-size:12px;margin:6px 0 0">Start the conversation!</p>
              </div>`}
          </div>

          <!-- Input area -->
          ${e?f`
            <div style="padding:10px 13px 13px;border-top:1px solid rgba(255,255,255,0.07);flex-shrink:0">

              <!-- Offer input row -->
              ${this._offerMode?f`
                <div style="margin-bottom:10px;padding:12px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:12px">
                  <p style="font-size:10px;font-weight:600;color:rgba(245,158,11,0.75);text-transform:uppercase;letter-spacing:0.06em;margin:0 0 8px">Make an Offer (USD)</p>
                  <div style="display:flex;gap:8px;align-items:center">
                    <div style="position:relative;flex:1">
                      <span style="position:absolute;left:11px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.5);font-size:14px;pointer-events:none">$</span>
                      <input
                        type="number"
                        .value=${this._offerPrice}
                        @input=${i=>{this._offerPrice=i.target.value,this._offerErr=""}}
                        @keydown=${i=>i.key==="Enter"&&this._sendOffer()}
                        placeholder="${Math.round(s.price*.9)}"
                        style="${It}width:100%;padding:9px 10px 9px 26px;"
                        @focus=${i=>{i.target.style.borderColor="rgba(245,158,11,0.55)"}}
                        @blur=${i=>{i.target.style.borderColor="rgba(255,255,255,0.15)"}}
                      />
                    </div>
                    <button @click=${()=>this._sendOffer()} ?disabled=${this._sending}
                      style="padding:9px 16px;background:#f59e0b;color:white;font-size:12px;font-weight:700;border-radius:9px;border:none;cursor:pointer;font-family:inherit;transition:opacity 0.18s"
                      onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
                      Send
                    </button>
                    <button @click=${()=>{this._offerMode=!1,this._offerErr=""}}
                      style="padding:9px 12px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.5);font-size:12px;border-radius:9px;cursor:pointer;font-family:inherit">
                      ✕
                    </button>
                  </div>
                  ${this._offerErr?f`<p style="color:#f87171;font-size:11px;margin:6px 0 0">${this._offerErr}</p>`:""}
                </div>`:""}

              <!-- Message row -->
              <div style="display:flex;align-items:center;gap:8px">

                <!-- Offer toggle button (buyers only) -->
                ${r?"":f`
                  <button
                    @click=${()=>{this._offerMode=!this._offerMode}}
                    title="Make a price offer"
                    style="
                      flex-shrink:0;width:38px;height:38px;
                      display:flex;align-items:center;justify-content:center;
                      background:rgba(245,158,11,0.12);
                      border:1px solid rgba(245,158,11,0.28);
                      color:#fbbf24;font-size:14px;font-weight:700;
                      border-radius:11px;cursor:pointer;font-family:inherit;
                      transition:all 0.18s;
                    "
                    onmouseover="this.style.background='rgba(245,158,11,0.22)'"
                    onmouseout="this.style.background='rgba(245,158,11,0.12)'"
                  >$</button>`}

                <!-- Message input -->
                <input
                  type="text"
                  .value=${this._text}
                  @input=${i=>{this._text=i.target.value}}
                  @keydown=${i=>{i.key==="Enter"&&!i.shiftKey&&this._send()}}
                  placeholder="Type a message…"
                  style="${It}flex:1;padding:11px 14px;border-radius:12px;"
                  @focus=${i=>{i.target.style.borderColor="rgba(245,158,11,0.5)",i.target.style.background="rgba(30,30,60,0.95)"}}
                  @blur=${i=>{i.target.style.borderColor="rgba(255,255,255,0.15)",i.target.style.background="rgba(30,30,55,0.9)"}}
                />

                <!-- Send button -->
                <button
                  @click=${()=>this._send()}
                  ?disabled=${this._sending||!this._text.trim()}
                  style="
                    flex-shrink:0;width:38px;height:38px;
                    display:flex;align-items:center;justify-content:center;
                    background:#f59e0b;color:white;
                    border-radius:11px;border:none;cursor:pointer;
                    transition:all 0.18s;
                    opacity:${this._text.trim()?"1":"0.35"};
                  "
                  onmouseover="if(this.textContent.trim()){this.style.background='#fbbf24'}"
                  onmouseout="this.style.background='#f59e0b'"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          `:f`
            <div style="padding:14px;border-top:1px solid rgba(255,255,255,0.07);text-align:center;flex-shrink:0">
              <p style="font-size:13px;color:rgba(255,255,255,0.4);margin:0">
                <button @click=${()=>window.dispatchEvent(new CustomEvent("require-auth"))}
                  style="color:#f59e0b;background:none;border:none;cursor:pointer;font-size:13px;font-family:inherit;text-decoration:underline">
                  Sign in
                </button>
                to chat with the seller
              </p>
            </div>`}
        </div>
      </div>

      <style>
        .chat-msgs::-webkit-scrollbar { width: 3px; }
        .chat-msgs::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
        chat-panel input { caret-color: white !important; }
        chat-panel input::placeholder { color: rgba(255,255,255,0.3) !important; }
      </style>
    `}};M([$()],I.prototype,"_item",2);M([$()],I.prototype,"_open",2);M([$()],I.prototype,"_text",2);M([$()],I.prototype,"_offerMode",2);M([$()],I.prototype,"_offerPrice",2);M([$()],I.prototype,"_offerErr",2);M([$()],I.prototype,"_sending",2);M([$()],I.prototype,"_checkingOut",2);I=M([j("chat-panel")],I);var dr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,je=(s,e,t,r)=>{for(var i=r>1?void 0:r?cr(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&dr(e,t,i),i};let we=class extends F{constructor(){super(...arguments),this._item=null,this._open=!1,this._del=!1}openForItem(s){this._item=s,this._open=!0}close(){this._open=!1,setTimeout(()=>{this._item=null},300)}_chat(){this.close(),window.dispatchEvent(new CustomEvent("open-chat",{detail:this._item}))}_signIn(){this.close(),window.dispatchEvent(new CustomEvent("require-auth"))}async _del_item(){if(!(!this._item||!confirm("Remove this listing?"))){this._del=!0;try{await Z.delete(this._item.id),this.dispatch({type:"REMOVE_ITEM",payload:this._item.id}),this.close()}catch(s){alert(s.message)}finally{this._del=!1}}}render(){if(!this._open||!this._item)return f``;const s=this._item,e=this.state.user,t=(e==null?void 0:e.id)===s.sellerId;return f`
      <div class="fixed inset-0 z-[140] flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-md" @click=${this.close}></div>
        <div class="relative w-full sm:max-w-2xl bg-[#0d0d1f] border border-white/10 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

          <button @click=${this.close}
            class="absolute top-3.5 right-3.5 z-10 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white/55 hover:text-white rounded-full transition-colors text-sm border-none cursor-pointer">✕</button>

          <!-- Image -->
          <div class="relative shrink-0" style="aspect-ratio:16/9;background:rgba(255,255,255,.04)">
            <img src="${s.image}" alt="${s.name}"
              class="w-full h-full object-cover"
              onerror="this.src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=700'" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d1f] via-transparent to-transparent"></div>
          </div>

          <!-- Content -->
          <div class="overflow-y-auto flex-1 p-5 sm:p-6">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h2 class="text-xl sm:text-2xl font-bold text-white leading-tight" style="font-family:'Playfair Display',serif">${s.name}</h2>
              <div class="shrink-0 text-right">
                <div class="text-2xl font-bold text-amber-400" style="font-family:'Playfair Display',serif">${this.$$(s.price)}</div>
                ${s.highestOffer?f`<p class="text-xs text-emerald-400/80 mt-0.5">Best offer: ${this.$$(s.highestOffer)}</p>`:""}
              </div>
            </div>

            <p class="text-sm text-white/55 leading-relaxed mb-5">${s.description}</p>

            <!-- Seller -->
            <div class="flex items-center gap-3 p-3 bg-white/4 border border-white/7 rounded-xl mb-5">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-sm font-bold text-white shrink-0">${s.sellerName[0].toUpperCase()}</div>
              <div>
                <p class="text-sm font-semibold text-white/80">${s.sellerName}</p>
                <p class="text-xs text-white/35">Listed ${this.ago(s.createdAt)}</p>
              </div>
              ${t?f`<span class="ml-auto px-2.5 py-1 bg-amber-500/12 border border-amber-500/28 text-amber-400 text-xs rounded-full font-semibold">Your listing</span>`:""}
            </div>

            ${s.paymentStatus==="paid"?f`
              <div class="p-3.5 bg-blue-500/8 border border-blue-500/22 rounded-xl mb-5 text-center">
                <p class="text-blue-300 font-semibold text-sm">💳 Payment Submitted</p>
                <p class="text-white/35 text-xs mt-1">${t?"Confirm sale to complete the transaction":"Awaiting seller confirmation"}</p>
              </div>`:""}

            <!-- Actions -->
            <div class="flex gap-3 flex-wrap">
              ${!t&&e?f`
                <button @click=${this._chat}
                  class="flex-1 min-w-[140px] py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-all shadow-lg shadow-amber-500/18 border-none cursor-pointer">
                  💬 Message Seller
                </button>`:""}

              ${e?"":f`
                <button @click=${this._signIn}
                  class="flex-1 min-w-[140px] py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-all shadow-lg shadow-amber-500/18 border-none cursor-pointer">
                  Sign in to Contact
                </button>`}

              ${t?f`
                <button @click=${this._del_item} ?disabled=${this._del}
                  class="px-5 py-3 bg-red-500/8 border border-red-500/22 text-red-400 hover:bg-red-500/15 font-semibold text-sm rounded-xl transition-all cursor-pointer disabled:opacity-50">
                  ${this._del?"Removing…":"Remove Listing"}
                </button>`:""}
            </div>
          </div>
        </div>
      </div>`}};je([$()],we.prototype,"_item",2);je([$()],we.prototype,"_open",2);je([$()],we.prototype,"_del",2);we=je([j("item-detail-modal")],we);var hr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,qt=(s,e,t,r)=>{for(var i=r>1?void 0:r?ur(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&hr(e,t,i),i};let Ke=class extends te{constructor(){super(...arguments),this._list=[]}createRenderRoot(){return this}show(s,e="info"){const t=Math.random().toString(36).slice(2);this._list=[...this._list,{id:t,msg:s,type:e}],setTimeout(()=>this._rm(t),4e3)}_rm(s){this._list=this._list.filter(e=>e.id!==s)}_cls(s){const e="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium shadow-xl backdrop-blur-md transition-all";return s==="success"?`${e} bg-emerald-500/12 border-emerald-500/32 text-emerald-300`:s==="error"?`${e} bg-red-500/12 border-red-500/32 text-red-300`:`${e} bg-amber-500/12 border-amber-500/32 text-amber-300`}render(){return f`
      <div class="fixed bottom-5 right-4 sm:right-5 z-[300] flex flex-col gap-2 pointer-events-none max-w-[calc(100vw-32px)] sm:max-w-sm" role="status" aria-live="polite">
        ${this._list.map(s=>f`
          <div class="${this._cls(s.type)} pointer-events-auto" style="animation:toastIn .28s ease-out">
            <span>${s.type==="success"?"✓":s.type==="error"?"✕":"◈"}</span>
            <span class="flex-1">${s.msg}</span>
            <button @click=${()=>this._rm(s.id)} class="opacity-55 hover:opacity-90 bg-transparent border-none cursor-pointer text-inherit text-xs ml-1">✕</button>
          </div>`)}
      </div>
      <style>@keyframes toastIn{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}</style>`}};qt([$()],Ke.prototype,"_list",2);Ke=qt([j("toast-notification")],Ke);class pr{init(){this.detail=document.querySelector("item-detail-modal"),this.list=document.querySelector("list-item-modal"),this.toast=document.querySelector("toast-notification"),this._wire(),this._pollUnread()}_wire(){var e,t;window.addEventListener("open-detail",r=>{var i;(i=this.detail)==null||i.openForItem(r.detail)}),window.addEventListener("require-auth",()=>{window.dispatchEvent(new CustomEvent("open-auth",{detail:{tab:"login"}}))}),window.addEventListener("toast",r=>{var n;const{msg:i,type:a}=r.detail??{};(n=this.toast)==null||n.show(i,a)}),window.addEventListener("user-logged-in",r=>{var a;const i=r.detail;(a=this.toast)==null||a.show(`Welcome, ${i.name}! 👋`,"success")}),(e=document.getElementById("list-item-btn"))==null||e.addEventListener("click",()=>{var r,i;if(!se.getState().user){(r=this.toast)==null||r.show("Sign in to list an item","info"),window.dispatchEvent(new CustomEvent("open-auth",{detail:{tab:"login"}}));return}(i=this.list)==null||i.open()}),(t=document.getElementById("hero-sell-btn"))==null||t.addEventListener("click",()=>{var r;(r=document.getElementById("list-item-btn"))==null||r.click()})}_pollUnread(){const e=async()=>{const t=se.getState().user;if(t)try{const{byItem:r}=await P.getUnread(t.id);se.dispatch({type:"SET_UNREAD",payload:r})}catch{}};e(),this._unreadInterval=setInterval(e,8e3)}}const Pt=()=>new pr().init();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Pt):Pt();
