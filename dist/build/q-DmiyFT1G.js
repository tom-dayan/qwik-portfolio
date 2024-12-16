import{p as Ge,P as g,j as w}from"./q-BjBOzqeH.js";import{r as z,b as Rn,g as Dn,q as zn,a as He}from"./q-BA9ItI6F.js";import{_ as Vn}from"./q-CL022aCJ.js";import{q as Un}from"./q-2oqoxdQM.js";import"./q-DvVXgA7M.js";var gt={},Xe={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=r(i,a(s)))}return i}function a(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)e.call(i,s)&&i[s]&&(o=r(o,s));return o}function r(i,o){return o?i?i+" "+o:i+o:i}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Xe);var Be=Xe.exports;gt.__esModule=!0;gt.default=void 0;var Yn=Zt(z),L=Zt(Ge),Wn=Zt(Be);function Zt(t){return t&&t.__esModule?t:{default:t}}const qe=({animate:t=!0,className:e="",layout:n="2-columns",lineColor:a="#FFF",children:r})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),Yn.default.createElement("div",{className:(0,Wn.default)(e,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":n==="2-columns","vertical-timeline--one-column-left":n==="1-column"||n==="1-column-left","vertical-timeline--one-column-right":n==="1-column-right"})},r));qe.propTypes={children:L.default.oneOfType([L.default.arrayOf(L.default.node),L.default.node]).isRequired,className:L.default.string,animate:L.default.bool,layout:L.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:L.default.string};var $n=qe;gt.default=$n;var ht={};function Ct(){return Ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ct.apply(this,arguments)}function Gn(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Tt(t,e)}function Tt(t,e){return Tt=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},Tt(t,e)}function Hn(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var Mt=new Map,it=new WeakMap,me=0,Ke=void 0;function Xn(t){Ke=t}function Bn(t){return t?(it.has(t)||(me+=1,it.set(t,me.toString())),it.get(t)):"0"}function qn(t){return Object.keys(t).sort().filter(function(e){return t[e]!==void 0}).map(function(e){return e+"_"+(e==="root"?Bn(t.root):t[e])}).toString()}function Kn(t){var e=qn(t),n=Mt.get(e);if(!n){var a=new Map,r,i=new IntersectionObserver(function(o){o.forEach(function(s){var c,f=s.isIntersecting&&r.some(function(u){return s.intersectionRatio>=u});t.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=f),(c=a.get(s.target))==null||c.forEach(function(u){u(f,s)})})},t);r=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:i,elements:a},Mt.set(e,n)}return n}function te(t,e,n,a){if(n===void 0&&(n={}),a===void 0&&(a=Ke),typeof window.IntersectionObserver>"u"&&a!==void 0){var r=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var i=Kn(n),o=i.id,s=i.observer,c=i.elements,f=c.get(t)||[];return c.has(t)||c.set(t,f),f.push(e),s.observe(t),function(){f.splice(f.indexOf(e),1),f.length===0&&(c.delete(t),s.unobserve(t)),c.size===0&&(s.disconnect(),Mt.delete(o))}}var Qn=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function pe(t){return typeof t.children!="function"}var ut=function(t){Gn(e,t);function e(a){var r;return r=t.call(this,a)||this,r.node=null,r._unobserveCb=null,r.handleNode=function(i){r.node&&(r.unobserve(),!i&&!r.props.triggerOnce&&!r.props.skip&&r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=i||null,r.observeNode()},r.handleChange=function(i,o){i&&r.props.triggerOnce&&r.unobserve(),pe(r.props)||r.setState({inView:i,entry:o}),r.props.onChange&&r.props.onChange(i,o)},r.state={inView:!!a.initialInView,entry:void 0},r}var n=e.prototype;return n.componentDidUpdate=function(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var r=this.props,i=r.threshold,o=r.root,s=r.rootMargin,c=r.trackVisibility,f=r.delay,u=r.fallbackInView;this._unobserveCb=te(this.node,this.handleChange,{threshold:i,root:o,rootMargin:s,trackVisibility:c,delay:f},u)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!pe(this.props)){var r=this.state,i=r.inView,o=r.entry;return this.props.children({inView:i,entry:o,ref:this.handleNode})}var s=this.props,c=s.children,f=s.as,u=Hn(s,Qn);return z.createElement(f||"div",Ct({ref:this.handleNode},u),c)},e}(z.Component);ut.displayName="InView";ut.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function Jn(t){var e=t===void 0?{}:t,n=e.threshold,a=e.delay,r=e.trackVisibility,i=e.rootMargin,o=e.root,s=e.triggerOnce,c=e.skip,f=e.initialInView,u=e.fallbackInView,m=z.useRef(),p=z.useState({inView:!!f}),v=p[0],k=p[1],P=z.useCallback(function(b){m.current!==void 0&&(m.current(),m.current=void 0),!c&&b&&(m.current=te(b,function(A,O){k({inView:A,entry:O}),O.isIntersecting&&s&&m.current&&(m.current(),m.current=void 0)},{root:o,rootMargin:i,threshold:n,trackVisibility:r,delay:a},u))},[Array.isArray(n)?n.toString():n,o,i,s,c,r,u,a]);z.useEffect(function(){!m.current&&v.entry&&!s&&!c&&k({inView:!!f})});var h=[P,v.inView,v.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const Zn=Object.freeze(Object.defineProperty({__proto__:null,InView:ut,default:ut,defaultFallbackInView:Xn,observe:te,useInView:Jn},Symbol.toStringTag,{value:"Module"})),ta=Rn(Zn);ht.__esModule=!0;ht.default=void 0;var R=ee(z),x=ee(Ge),ot=ee(Be),ea=ta;function ee(t){return t&&t.__esModule?t:{default:t}}const Qe=({children:t="",className:e="",contentArrowStyle:n=null,contentStyle:a=null,date:r="",dateClassName:i="",icon:o=null,iconClassName:s="",iconOnClick:c=null,onTimelineElementClick:f=null,iconStyle:u=null,id:m="",position:p="",style:v=null,textClassName:k="",intersectionObserverProps:P={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:h=!1})=>R.default.createElement(ea.InView,P,({inView:b,ref:A})=>R.default.createElement("div",{ref:A,id:m,className:(0,ot.default)(e,"vertical-timeline-element",{"vertical-timeline-element--left":p==="left","vertical-timeline-element--right":p==="right","vertical-timeline-element--no-children":t===""}),style:v},R.default.createElement(R.default.Fragment,null,R.default.createElement("span",{style:u,onClick:c,className:(0,ot.default)(s,"vertical-timeline-element-icon",{"bounce-in":b||h,"is-hidden":!(b||h)})},o),R.default.createElement("div",{style:a,onClick:f,className:(0,ot.default)(k,"vertical-timeline-element-content",{"bounce-in":b||h,"is-hidden":!(b||h)})},R.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),t,R.default.createElement("span",{className:(0,ot.default)(i,"vertical-timeline-element-date")},r)))));Qe.propTypes={children:x.default.oneOfType([x.default.arrayOf(x.default.node),x.default.node]),className:x.default.string,contentArrowStyle:x.default.shape({}),contentStyle:x.default.shape({}),date:x.default.node,dateClassName:x.default.string,icon:x.default.element,iconClassName:x.default.string,iconStyle:x.default.shape({}),iconOnClick:x.default.func,onTimelineElementClick:x.default.func,id:x.default.string,position:x.default.string,style:x.default.shape({}),textClassName:x.default.string,visible:x.default.bool,intersectionObserverProps:x.default.shape({root:x.default.object,rootMargin:x.default.string,threshold:x.default.number,triggerOnce:x.default.bool})};var na=Qe;ht.default=na;var aa={VerticalTimeline:gt.default,VerticalTimelineElement:ht.default};const ra=Dn(aa),{VerticalTimeline:ia,VerticalTimelineElement:kt}=ra,Ei=zn(Un(()=>Vn(()=>Promise.resolve().then(()=>Ai),void 0),"s_Mn1EOk6GzxQ"),{eagerness:"load"});/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function oa(t,e,n){return(e=la(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ge(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ge(Object(n),!0).forEach(function(a){oa(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function sa(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function la(t){var e=sa(t,"string");return typeof e=="symbol"?e:e+""}const he=()=>{};let ne={},Je={},Ze=null,tn={mark:he,measure:he};try{typeof window<"u"&&(ne=window),typeof document<"u"&&(Je=document),typeof MutationObserver<"u"&&(Ze=MutationObserver),typeof performance<"u"&&(tn=performance)}catch{}const{userAgent:be=""}=ne.navigator||{},V=ne,y=Je,ye=Ze,st=tn;V.document;const j=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",en=~be.indexOf("MSIE")||~be.indexOf("Trident/");var fa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ca=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,nn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ua={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],S="classic",bt="duotone",da="sharp",ma="sharp-duotone",rn=[S,bt,da,ma],pa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ga={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ha=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ba={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ya=["fak","fa-kit","fakd","fa-kit-duotone"],ve={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},va=["kit"],xa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Aa=["fak","fakd"],wa={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},xe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Oa=["fak","fa-kit","fakd","fa-kit-duotone"],Sa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Pa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ea={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ft={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ia=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],jt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ka,...Ia],_a=["solid","regular","light","thin","duotone","brands"],on=[1,2,3,4,5,6,7,8,9,10],Na=on.concat([11,12,13,14,15,16,17,18,19,20]),Ca=[...Object.keys(Ea),..._a,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY].concat(on.map(t=>"".concat(t,"x"))).concat(Na.map(t=>"w-".concat(t))),Ta={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const M="___FONT_AWESOME___",Lt=16,sn="fa",ln="svg-inline--fa",$="data-fa-i2svg",Rt="data-fa-pseudo-element",Ma="data-fa-pseudo-element-pending",ae="data-prefix",re="data-icon",Ae="fontawesome-i2svg",Fa="async",ja=["HTML","HEAD","STYLE","SCRIPT"],fn=(()=>{try{return!0}catch{return!1}})();function at(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[S]}})}const cn=l({},nn);cn[S]=l(l(l(l({},{"fa-duotone":"duotone"}),nn[S]),ve.kit),ve["kit-duotone"]);const La=at(cn),Dt=l({},ba);Dt[S]=l(l(l(l({},{duotone:"fad"}),Dt[S]),xe.kit),xe["kit-duotone"]);const we=at(Dt),zt=l({},Ft);zt[S]=l(l({},zt[S]),wa.kit);const ie=at(zt),Vt=l({},Pa);Vt[S]=l(l({},Vt[S]),xa.kit);at(Vt);const Ra=fa,un="fa-layers-text",Da=ca,za=l({},pa);at(za);const Va=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot=ua,Ua=[...va,...Ca],J=V.FontAwesomeConfig||{};function Ya(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Wa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Wa(Ya(n));r!=null&&(J[a]=r)});const dn={styleDefault:"solid",familyDefault:S,cssPrefix:sn,replacementClass:ln,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);const q=l(l({},dn),J);q.autoReplaceSvg||(q.observeMutations=!1);const d={};Object.keys(dn).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){q[t]=e,Z.forEach(n=>n(d))},get:function(){return q[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,Z.forEach(e=>e(d))},get:function(){return q.cssPrefix}});V.FontAwesomeConfig=d;const Z=[];function $a(t){return Z.push(t),()=>{Z.splice(Z.indexOf(t),1)}}const D=Lt,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ga(t){if(!t||!j)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(e,a),t}const Ha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function et(){let t=12,e="";for(;t-- >0;)e+=Ha[Math.random()*62|0];return e}function K(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function oe(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function mn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(mn(t[n]),'" '),"").trim()}function yt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function se(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function Ba(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function qa(t){let{transform:e,width:n=Lt,height:a=Lt,startCentered:r=!1}=t,i="";return r&&en?i+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):i+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),i+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Ka=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function pn(){const t=sn,e=ln,n=d.cssPrefix,a=d.replacementClass;let r=Ka;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ke=!1;function St(){d.autoAddCss&&!ke&&(Ga(pn()),ke=!0)}var Qa={mixout(){return{dom:{css:pn,insertCss:St}}},hooks(){return{beforeDOMElementCreation(){St()},beforeI2svg(){St()}}}};const F=V||{};F[M]||(F[M]={});F[M].styles||(F[M].styles={});F[M].hooks||(F[M].hooks={});F[M].shims||(F[M].shims=[]);var C=F[M];const gn=[],hn=function(){y.removeEventListener("DOMContentLoaded",hn),dt=1,gn.map(t=>t())};let dt=!1;j&&(dt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),dt||y.addEventListener("DOMContentLoaded",hn));function Ja(t){j&&(dt?setTimeout(t,0):gn.push(t))}function rt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?mn(t):"<".concat(e," ").concat(Xa(n),">").concat(a.map(rt).join(""),"</").concat(e,">")}function Oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Pt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,c,f,u;for(a===void 0?(c=1,u=e[i[0]]):(c=0,u=a);c<o;c++)f=i[c],u=s(u,e[f],f,e);return u};function Za(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ut(t){const e=Za(t);return e.length===1?e[0].toString(16):null}function tr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Se(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Yt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Se(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,Se(e)):C.styles[t]=l(l({},C.styles[t]||{}),r),t==="fas"&&Yt("fa",e)}const{styles:nt,shims:er}=C,bn=Object.keys(ie),nr=bn.reduce((t,e)=>(t[e]=Object.keys(ie[e]),t),{});let le=null,yn={},vn={},xn={},An={},wn={};function ar(t){return~Ua.indexOf(t)}function rr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ar(r)?r:null}const kn=()=>{const t=a=>Pt(nt,(r,i,o)=>(r[o]=Pt(i,a,{}),r),{});yn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),vn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),wn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in nt||d.autoFetchSvg,n=Pt(er,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});xn=n.names,An=n.unicodes,le=vt(d.styleDefault,{family:d.familyDefault})};$a(t=>{le=vt(t.styleDefault,{family:d.familyDefault})});kn();function fe(t,e){return(yn[t]||{})[e]}function ir(t,e){return(vn[t]||{})[e]}function W(t,e){return(wn[t]||{})[e]}function On(t){return xn[t]||{prefix:null,iconName:null}}function or(t){const e=An[t],n=fe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return le}const Sn=()=>({prefix:null,iconName:null,rest:[]});function sr(t){let e=S;const n=bn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return rn.forEach(a=>{(t.includes(n[a])||t.some(r=>nr[a].includes(r)))&&(e=a)}),e}function vt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=S}=e,a=La[n][t];if(n===bt&&!t)return"fad";const r=we[n][t]||we[n][a],i=t in C.styles?t:null;return r||i||null}function lr(t){let e=[],n=null;return t.forEach(a=>{const r=rr(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Pe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function xt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=jt.concat(Oa),i=Pe(t.filter(m=>r.includes(m))),o=Pe(t.filter(m=>!jt.includes(m))),s=i.filter(m=>(a=m,!an.includes(m))),[c=null]=s,f=sr(i),u=l(l({},lr(o)),{},{prefix:vt(c,{family:f})});return l(l(l({},u),dr({values:t,family:f,styles:nt,config:d,canonical:u,givenPrefix:a})),fr(n,a,u))}function fr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?On(r):{},o=W(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!nt.far&&nt.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const cr=rn.filter(t=>t!==S||t!==bt),ur=Object.keys(Ft).filter(t=>t!==S).map(t=>Object.keys(Ft[t])).flat();function dr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===bt,c=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(c||f||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&cr.includes(n)&&(Object.keys(i).find(p=>ur.includes(p))||o.autoFetchSvg)){const p=ha.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=U()||"fas"),a}class mr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Yt(i,r[i]);const o=ie[S][i];o&&Yt(o,r[i]),kn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],c=s[2];e[i]||(e[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][o]=s}),e}}let Ee=[],H={};const B={},pr=Object.keys(B);function gr(t,e){let{mixoutsTo:n}=e;return Ee=t,H={},Object.keys(B).forEach(a=>{pr.indexOf(a)===-1&&delete B[a]}),Ee.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{H[o]||(H[o]=[]),H[o].push(i[o])})}a.provides&&a.provides(B)}),n}function Wt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(H[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(H[t]||[]).forEach(i=>{i.apply(null,n)})}function Y(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,e):void 0}function $t(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||U();if(e)return e=W(n,e)||e,Oe(Pn.definitions,n,e)||Oe(C.styles,n,e)}const Pn=new mr,hr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},br={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(G("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ja(()=>{vr({autoReplaceSvgRoot:e}),G("watch",t)})}},yr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=vt(t[0]);return{prefix:n,iconName:W(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Ra))){const e=xt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||U(),iconName:W(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=U();return{prefix:e,iconName:W(e,t)||t}}}},E={noAuto:hr,config:d,dom:br,parse:yr,library:Pn,findIconDefinition:$t,toHtml:rt},vr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(C.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&E.dom.i2svg({node:e})};function At(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>rt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function xr(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(se(o)&&n.found&&!a.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};r.style=yt(l(l({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ar(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function ce(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:c,titleId:f,extra:u,watchable:m=!1}=t,{width:p,height:v}=n.found?n:e,k=Aa.includes(a),P=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(I=>u.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(u.classes).join(" ");let h={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:P,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)})};const b=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};m&&(h.attributes[$]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||et())},children:[s]}),delete h.attributes.title);const A=l(l({},h),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:l(l({},b),u.styles)}),{children:O,attributes:T}=n.found&&e.found?Y("generateAbstractMask",A)||{children:[],attributes:{}}:Y("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=O,A.attributes=T,o?Ar(A):xr(A)}function Ie(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,c=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[$]="");const f=l({},o.styles);se(r)&&(f.transform=qa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=yt(f);u.length>0&&(c.style=u);const m=[];return m.push({tag:"span",attributes:c,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function wr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=yt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Et}=C;function Gt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const kr={found:!1,width:512,height:512};function Or(t,e){!fn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ht(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=U()),new Promise((a,r)=>{if(n==="fa"){const i=On(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Et[e]&&Et[e][t]){const i=Et[e][t];return a(Gt(i))}Or(t,e),a(l(l({},kr),{},{icon:d.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}const _e=()=>{},Xt=d.measurePerformance&&st&&st.mark&&st.measure?st:{mark:_e,measure:_e},Q='FA "6.7.1"',Sr=t=>(Xt.mark("".concat(Q," ").concat(t," begins")),()=>En(t)),En=t=>{Xt.mark("".concat(Q," ").concat(t," ends")),Xt.measure("".concat(Q," ").concat(t),"".concat(Q," ").concat(t," begins"),"".concat(Q," ").concat(t," ends"))};var ue={begin:Sr,end:En};const ft=()=>{};function Ne(t){return typeof(t.getAttribute?t.getAttribute($):null)=="string"}function Pr(t){const e=t.getAttribute?t.getAttribute(ae):null,n=t.getAttribute?t.getAttribute(re):null;return e&&n}function Er(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ir(){return d.autoReplaceSvg===!0?ct.replace:ct[d.autoReplaceSvg]||ct.replace}function _r(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Nr(t){return y.createElement(t)}function In(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?_r:Nr}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(In(i,{ceFn:n}))}),a}function Cr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ct={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(In(n),e)}),e.getAttribute($)===null&&d.keepOriginalSource){let n=y.createComment(Cr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~oe(e).indexOf(d.replacementClass))return ct.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===d.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>rt(i)).join(`
`);e.setAttribute($,""),e.innerHTML=r}};function Ce(t){t()}function _n(t,e){const n=typeof e=="function"?e:ft;if(t.length===0)n();else{let a=Ce;d.mutateApproach===Fa&&(a=V.requestAnimationFrame||Ce),a(()=>{const r=Ir(),i=ue.begin("mutate");t.map(r),i(),n()})}}let de=!1;function Nn(){de=!0}function Bt(){de=!1}let mt=null;function Te(t){if(!ye||!d.observeMutations)return;const{treeCallback:e=ft,nodeCallback:n=ft,pseudoElementsCallback:a=ft,observeMutationsRoot:r=y}=t;mt=new ye(i=>{if(de)return;const o=U();K(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Ne(s.addedNodes[0])&&(d.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&d.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Ne(s.target)&&~Va.indexOf(s.attributeName))if(s.attributeName==="class"&&Pr(s.target)){const{prefix:c,iconName:f}=xt(oe(s.target));s.target.setAttribute(ae,c||o),f&&s.target.setAttribute(re,f)}else Er(s.target)&&n(s.target)})}),j&&mt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Tr(){mt&&mt.disconnect()}function Mr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Fr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=xt(oe(t));return r.prefix||(r.prefix=U()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ir(r.prefix,t.innerText)||fe(r.prefix,Ut(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function jr(t){const e=K(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||et()):(e["aria-hidden"]="true",e.focusable="false")),e}function Lr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Fr(t),i=jr(t),o=Wt("parseNodeAttributes",{},t);let s=e.styleParser?Mr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:Rr}=C;function Cn(t){const e=d.autoReplaceSvg==="nest"?Me(t,{styleParser:!1}):Me(t);return~e.extra.classes.indexOf(un)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}function Dr(){return[...ya,...jt]}function Fe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(Ae,"-").concat(u)),r=u=>n.remove("".concat(Ae,"-").concat(u)),i=d.autoFetchSvg?Dr():an.concat(Object.keys(Rr));i.includes("fa")||i.push("fa");const o=[".".concat(un,":not([").concat($,"])")].concat(i.map(u=>".".concat(u,":not([").concat($,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=K(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=ue.begin("onTree"),f=s.reduce((u,m)=>{try{const p=Cn(m);p&&u.push(p)}catch(p){fn||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,m)=>{Promise.all(f).then(p=>{_n(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(p=>{c(),m(p)})})}function zr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cn(t).then(n=>{n&&_n([n],e)})}function Vr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:$t(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:$t(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Ur=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=N,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:m,iconName:p,icon:v}=t;return At(l({type:"icon"},t),()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(o?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(s||et()):(f["aria-hidden"]="true",f.focusable="false")),ce({icons:{main:Gt(v),mask:r?Gt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:l(l({},N),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:u,classes:c}})))};var Yr={mixout(){return{icon:Vr(Ur)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Fe,t.nodeCallback=zr,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Fe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:c,mask:f,maskId:u,extra:m}=n;return new Promise((p,v)=>{Promise.all([Ht(a,o),f.iconName?Ht(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[P,h]=k;p([e,ce({icons:{main:P,mask:h},prefix:o,iconName:a,transform:s,symbol:c,maskId:u,title:r,titleId:i,extra:m,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=yt(o);s.length>0&&(a.style=s);let c;return se(i)&&(c=Y("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Wr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return At({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},$r={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return At({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),wr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Gr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=N,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return At({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),Ie({content:t,transform:l(l({},N),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(en){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/c,s=f.height/c}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Ie({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Hr=new RegExp('"',"ug"),je=[1105920,1112319],Le=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),ga),Ta),Sa),qt=Object.keys(Le).reduce((t,e)=>(t[e.toLowerCase()]=Le[e],t),{}),Xr=Object.keys(qt).reduce((t,e)=>{const n=qt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Br(t){const e=t.replace(Hr,""),n=tr(e,0),a=n>=je[0]&&n<=je[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ut(r?e[0]:e),isSecondary:a||r}}function qr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(qt[n]||{})[r]||Xr[n]}function Re(t,e){const n="".concat(Ma).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=K(t.children).filter(p=>p.getAttribute(Rt)===e)[0],s=V.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),f=c.match(Da),u=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&m!=="none"&&m!==""){const p=s.getPropertyValue("content");let v=qr(c,u);const{value:k,isSecondary:P}=Br(p),h=f[0].startsWith("FontAwesome");let b=fe(v,k),A=b;if(h){const O=or(k);O.iconName&&O.prefix&&(b=O.iconName,v=O.prefix)}if(b&&!P&&(!o||o.getAttribute(ae)!==v||o.getAttribute(re)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);const O=Lr(),{extra:T}=O;T.attributes[Rt]=e,Ht(b,v).then(I=>{const jn=ce(l(l({},O),{},{icons:{main:I,mask:Sn()},prefix:v,iconName:A,extra:T,watchable:!0})),wt=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(wt,t.firstChild):t.appendChild(wt),wt.outerHTML=jn.map(Ln=>rt(Ln)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Kr(t){return Promise.all([Re(t,"::before"),Re(t,"::after")])}function Qr(t){return t.parentNode!==document.head&&!~ja.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function De(t){if(j)return new Promise((e,n)=>{const a=K(t.querySelectorAll("*")).filter(Qr).map(Kr),r=ue.begin("searchPseudoElements");Nn(),Promise.all(a).then(()=>{r(),Bt(),e()}).catch(()=>{r(),Bt(),n()})})}var Jr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=De,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;d.searchPseudoElements&&De(n)}}};let ze=!1;var Zr={mixout(){return{dom:{unwatch(){Nn(),ze=!0}}}},hooks(){return{bootstrap(){Te(Wt("mutationObserverCallbacks",{}))},noAuto(){Tr()},watch(t){const{observeMutationsRoot:e}=t;ze?Bt():Te(Wt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ve=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ti={mixout(){return{parse:{transform:t=>Ve(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ve(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(f)},m={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:u,path:m};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const It={x:0,y:0,width:"100%",height:"100%"};function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ei(t){return t.tag==="g"?t.children:[t]}var ni={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?xt(n.split(" ").map(r=>r.trim())):Sn();return a.prefix||(a.prefix=U()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:c,icon:f}=r,{width:u,icon:m}=i,p=Ba({transform:s,containerWidth:u,iconWidth:c}),v={tag:"rect",attributes:l(l({},It),{},{fill:"white"})},k=f.children?{children:f.children.map(Ue)}:{},P={tag:"g",attributes:l({},p.inner),children:[Ue(l({tag:f.tag,attributes:l(l({},f.attributes),p.path)},k))]},h={tag:"g",attributes:l({},p.outer),children:[P]},b="mask-".concat(o||et()),A="clip-".concat(o||et()),O={tag:"mask",attributes:l(l({},It),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,h]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:ei(m)},O]};return n.push(T,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(b,")")},It)}),{children:n,attributes:a}}}},ai={provides(t){let e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ri={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ii=[Qa,Yr,Wr,$r,Gr,Jr,Zr,ti,ni,ai,ri];gr(ii,{mixoutsTo:E});E.noAuto;E.config;E.library;E.dom;const Kt=E.parse;E.findIconDefinition;E.toHtml;const oi=E.icon;E.layer;E.text;E.counter;function Ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ye(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function pt(t){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pt(t)}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function si(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function li(t,e){if(t==null)return{};var n=si(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Qt(t){return fi(t)||ci(t)||ui(t)||di()}function fi(t){if(Array.isArray(t))return Jt(t)}function ci(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ui(t,e){if(t){if(typeof t=="string")return Jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(t,e)}}function Jt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function di(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mi(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,c=t.spin,f=t.spinPulse,u=t.spinReverse,m=t.pulse,p=t.fixedWidth,v=t.inverse,k=t.border,P=t.listItem,h=t.flip,b=t.size,A=t.rotation,O=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":p,"fa-inverse":v,"fa-border":k,"fa-li":P,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},X(e,"fa-".concat(b),typeof b<"u"&&b!==null),X(e,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),X(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),X(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(I){return T[I]?I:null}).filter(function(I){return I})}function pi(t){return t=t-0,t===t}function Tn(t){return pi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var gi=["style"];function hi(t){return t.charAt(0).toUpperCase()+t.slice(1)}function bi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Tn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[hi(r)]=i:e[r]=i,e},{})}function Mn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return Mn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var u=e.attributes[f];switch(f){case"class":c.attrs.className=u,delete e.attributes.class;break;case"style":c.attrs.style=bi(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[Tn(f)]=u}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=li(n,gi);return r.attrs.style=_(_({},r.attrs.style),o),t.apply(void 0,[e.tag,_(_({},r.attrs),s)].concat(Qt(a)))}var Fn=!1;try{Fn=!0}catch{}function yi(){if(!Fn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function We(t){if(t&&pt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kt.icon)return Kt.icon(t);if(t===null)return null;if(t&&pt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function _t(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?X({},t,e):{}}var $e={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},tt=He.forwardRef(function(t,e){var n=_(_({},$e),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,f=n.maskId,u=We(a),m=_t("classes",[].concat(Qt(mi(n)),Qt((o||"").split(" ")))),p=_t("transform",typeof n.transform=="string"?Kt.transform(n.transform):n.transform),v=_t("mask",We(r)),k=oi(u,_(_(_(_({},m),p),v),{},{symbol:i,title:s,titleId:c,maskId:f}));if(!k)return yi("Could not find icon",u),null;var P=k.abstract,h={ref:e};return Object.keys(n).forEach(function(b){$e.hasOwnProperty(b)||(h[b]=n[b])}),vi(P[0],h)});tt.displayName="FontAwesomeIcon";tt.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var vi=Mn.bind(null,He.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Nt={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"]},xi=()=>w.jsx("div",{id:"timeline",children:w.jsxs("div",{className:"items-container",children:[w.jsx("h1",{children:"Experience"}),w.jsxs(ia,{children:[w.jsxs(kt,{className:"vertical-timeline-element--work",contentStyle:{background:"white",color:"rgb(39, 40, 34)"},contentArrowStyle:{borderRight:"7px solid white"},date:"2021 - Present",iconStyle:{background:"#5000ca",color:"rgb(39, 40, 34)"},icon:w.jsx(tt,{icon:Nt}),children:[w.jsx("h3",{className:"vertical-timeline-element-title",children:"Software Engineer"}),w.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Tel Aviv, Isral"}),w.jsx("p",{children:"Backend Development, Edge AI, API Development, Team Leadership"})]}),w.jsxs(kt,{className:"vertical-timeline-element--work",date:"2017 - 2021",iconStyle:{background:"#5000ca",color:"rgb(39, 40, 34)"},icon:w.jsx(tt,{icon:Nt}),children:[w.jsx("h3",{className:"vertical-timeline-element-title",children:"Robotics QA Team Leader"}),w.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Yokneam, Israel"}),w.jsx("p",{children:"Automation Tools, Software Development, Testing Frameworks"})]}),w.jsxs(kt,{className:"vertical-timeline-element--work",date:"2016 - 2017",iconStyle:{background:"#5000ca",color:"rgb(39, 40, 34)"},icon:w.jsx(tt,{icon:Nt}),children:[w.jsx("h3",{className:"vertical-timeline-element-title",children:"Robotics QA Engineer"}),w.jsx("h4",{className:"vertical-timeline-element-subtitle",children:"Yokneam, Israel"}),w.jsx("p",{children:"Full-stack Development, UI/UX Design, Software Integration"})]})]})]})}),Ai=Object.freeze(Object.defineProperty({__proto__:null,s_Mn1EOk6GzxQ:xi},Symbol.toStringTag,{value:"Module"}));export{Ei as T,xi as s_Mn1EOk6GzxQ};
