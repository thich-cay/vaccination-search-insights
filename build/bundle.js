var app=function(){"use strict";function e(){}function t(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(t)}function a(e){return"function"==typeof e}function n(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t,o,r){return e[1]&&r?function(e,t){for(const o in t)e[o]=t[o];return e}(o.ctx.slice(),e[1](r(t))):o.ctx}function p(e,t,o,r,i,a,n){const p=function(e,t,o,r){if(e[2]&&r){const i=e[2](r(o));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],o=Math.max(t.dirty.length,i.length);for(let r=0;r<o;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}(t,r,i,a);if(p){const i=s(t,o,r,n);e.p(i,p)}}function c(e,t){e.appendChild(t)}function d(e,t,o){e.insertBefore(t,o||null)}function l(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function m(){return y(" ")}function u(){return y("")}function P(e,t,o,r){return e.addEventListener(t,o,r),()=>e.removeEventListener(t,o,r)}function z(e,t,o){null==o?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function h(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function f(e,t){e.value=null==t?"":t}class v{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,o=null){this.e||(this.e=g(t.nodeName),this.t=t,this.h(e)),this.i(o)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)d(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(l)}}let w;function _(e){w=e}function b(){if(!w)throw new Error("Function called outside component initialization");return w}function M(e){b().$$.on_mount.push(e)}const k=[],C=[],S=[],x=[],L=Promise.resolve();let T=!1;function A(e){S.push(e)}let D=!1;const B=new Set;function E(){if(!D){D=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];_(t),H(t.$$)}for(_(null),k.length=0;C.length;)C.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];B.has(t)||(B.add(t),t())}S.length=0}while(k.length);for(;x.length;)x.pop()();T=!1,D=!1,B.clear()}}function H(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const W=new Set;let N;function F(e,t){e&&e.i&&(W.delete(e),e.i(t))}function R(e,t,o,r){if(e&&e.o){if(W.has(e))return;W.add(e),N.c.push((()=>{W.delete(e),r&&(o&&e.d(1),r())})),e.o(t)}}function I(e,t){const o=t.token={};function i(e,i,a,n){if(t.token!==o)return;t.resolved=n;let s=t.ctx;void 0!==a&&(s=s.slice(),s[a]=n);const p=e&&(t.current=e)(s);let c=!1;t.block&&(t.blocks?t.blocks.forEach(((e,o)=>{o!==i&&e&&(N={r:0,c:[],p:N},R(e,1,1,(()=>{t.blocks[o]===e&&(t.blocks[o]=null)})),N.r||r(N.c),N=N.p)})):t.block.d(1),p.c(),F(p,1),p.m(t.mount(),t.anchor),c=!0),t.block=p,t.blocks&&(t.blocks[i]=p),c&&E()}if((a=e)&&"object"==typeof a&&"function"==typeof a.then){const o=b();if(e.then((e=>{_(o),i(t.then,1,t.value,e),_(null)}),(e=>{if(_(o),i(t.catch,2,t.error,e),_(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}else{if(t.current!==t.then)return i(t.then,1,t.value,e),!0;t.resolved=e}var a}function O(e){e&&e.c()}function U(e,o,i,n){const{fragment:s,on_mount:p,on_destroy:c,after_update:d}=e.$$;s&&s.m(o,i),n||A((()=>{const o=p.map(t).filter(a);c?c.push(...o):r(o),e.$$.on_mount=[]})),d.forEach(A)}function G(e,t){const o=e.$$;null!==o.fragment&&(r(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function $(e,t){-1===e.$$.dirty[0]&&(k.push(e),T||(T=!0,L.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(t,i,a,n,s,p,c=[-1]){const d=w;_(t);const g=t.$$={fragment:null,ctx:null,props:p,update:e,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:i.context||[]),callbacks:o(),dirty:c,skip_bound:!1};let y=!1;if(g.ctx=a?a(t,i.props||{},((e,o,...r)=>{const i=r.length?r[0]:o;return g.ctx&&s(g.ctx[e],g.ctx[e]=i)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](i),y&&$(t,e)),o})):[],g.update(),y=!0,r(g.before_update),g.fragment=!!n&&n(g.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);g.fragment&&g.fragment.l(e),e.forEach(l)}else g.fragment&&g.fragment.c();i.intro&&F(t.$$.fragment),U(t,i.target,i.anchor,i.customElement),E()}_(d)}class K{$destroy(){G(this,1),this.$destroy=e}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);-1!==e&&o.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function V(e,t,o){const r=e.slice();return r[71]=t[o],r[73]=o,r}function q(t){let o,r,i;return{c(){o=g("span"),o.textContent="✖",z(o,"class","autocomplete-clear-button svelte-17gke0z")},m(e,a){d(e,o,a),r||(i=P(o,"click",t[26]),r=!0)},p:e,d(e){e&&l(o),r=!1,i()}}}function Y(e){let t,o;return{c(){t=g("div"),o=y(e[1]),z(t,"class","autocomplete-list-item-no-results svelte-17gke0z")},m(e,r){d(e,t,r),c(t,o)},p(e,t){2&t[0]&&h(o,e[1])},d(e){e&&l(t)}}}function j(e){let t,o,r=e[16],i=[];for(let t=0;t<r.length;t+=1)i[t]=te(V(e,r,t));let a=e[0]>0&&e[16].length>e[0]&&oe(e);return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=m(),a&&a.c(),o=u()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);d(e,t,r),a&&a.m(e,r),d(e,o,r)},p(e,n){if(622593&n[0]){let o;for(r=e[16],o=0;o<r.length;o+=1){const a=V(e,r,o);i[o]?i[o].p(a,n):(i[o]=te(a),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1);i.length=r.length}e[0]>0&&e[16].length>e[0]?a?a.p(e,n):(a=oe(e),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},d(e){!function(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}(i,e),e&&l(t),a&&a.d(e),e&&l(o)}}}function X(e){let t,o=e[71]&&Q(e);return{c(){o&&o.c(),t=u()},m(e,r){o&&o.m(e,r),d(e,t,r)},p(e,r){e[71]?o?o.p(e,r):(o=Q(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(e){o&&o.d(e),e&&l(t)}}}function Q(e){let t,o,r,i;function a(e,t){return e[71].highlighted?ee:Z}let n=a(e),s=n(e);function p(){return e[48](e[71])}return{c(){t=g("div"),s.c(),z(t,"class",o="autocomplete-list-item "+(e[73]===e[15]?"selected":"")+" svelte-17gke0z")},m(e,o){d(e,t,o),s.m(t,null),r||(i=P(t,"click",p),r=!0)},p(r,i){n===(n=a(e=r))&&s?s.p(e,i):(s.d(1),s=n(e),s&&(s.c(),s.m(t,null))),32768&i[0]&&o!==(o="autocomplete-list-item "+(e[73]===e[15]?"selected":"")+" svelte-17gke0z")&&z(t,"class",o)},d(e){e&&l(t),s.d(),r=!1,i()}}}function Z(e){let t,o,r=e[71].label+"";return{c(){o=u(),t=new v(o)},m(e,i){t.m(r,e,i),d(e,o,i)},p(e,o){65536&o[0]&&r!==(r=e[71].label+"")&&t.p(r)},d(e){e&&l(o),e&&t.d()}}}function ee(e){let t,o,r=e[71].highlighted.label+"";return{c(){o=u(),t=new v(o)},m(e,i){t.m(r,e,i),d(e,o,i)},p(e,o){65536&o[0]&&r!==(r=e[71].highlighted.label+"")&&t.p(r)},d(e){e&&l(o),e&&t.d()}}}function te(e){let t,o=e[71]&&(e[0]<=0||e[73]<e[0])&&X(e);return{c(){o&&o.c(),t=u()},m(e,r){o&&o.m(e,r),d(e,t,r)},p(e,r){e[71]&&(e[0]<=0||e[73]<e[0])?o?o.p(e,r):(o=X(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(e){o&&o.d(e),e&&l(t)}}}function oe(e){let t,o,r,i,a=e[16].length-e[0]+"";return{c(){t=g("div"),o=y("..."),r=y(a),i=y(" results not shown"),z(t,"class","autocomplete-list-item-no-results svelte-17gke0z")},m(e,a){d(e,t,a),c(t,o),c(t,r),c(t,i)},p(e,t){65537&t[0]&&a!==(a=e[16].length-e[0]+"")&&h(r,a)},d(e){e&&l(t)}}}function re(t){let o,i,a,n,s,p,y,u,h,v,w,_=t[9]&&q(t);function b(e,t){return e[16]&&e[16].length>0?j:e[1]?Y:void 0}let M=b(t),k=M&&M(t);return{c(){o=g("div"),i=g("input"),s=m(),_&&_.c(),p=m(),y=g("div"),k&&k.c(),z(i,"type","text"),z(i,"class",a=(t[4]?t[4]:"")+" input autocomplete-input svelte-17gke0z"),z(i,"id",n=t[5]?t[5]:""),z(i,"placeholder",t[2]),z(i,"name",t[6]),i.disabled=t[10],z(i,"title",t[11]),z(y,"class",u=(t[7]?t[7]:"")+" autocomplete-list "+(t[17]?"":"hidden")+"\n    is-fullwidth svelte-17gke0z"),z(o,"class",h=(t[3]?t[3]:"")+"\n  "+(t[8]?"hide-arrow is-multiple":"")+"\n  "+(t[9]?"show-clear":"")+" autocomplete select is-fullwidth "+t[18]+" svelte-17gke0z")},m(e,r){d(e,o,r),c(o,i),t[46](i),f(i,t[12]),c(o,s),_&&_.m(o,null),c(o,p),c(o,y),k&&k.m(y,null),t[49](y),v||(w=[P(window,"click",t[20]),P(i,"input",t[47]),P(i,"input",t[23]),P(i,"focus",t[25]),P(i,"keydown",t[21]),P(i,"click",t[24]),P(i,"keypress",t[22])],v=!0)},p(e,t){16&t[0]&&a!==(a=(e[4]?e[4]:"")+" input autocomplete-input svelte-17gke0z")&&z(i,"class",a),32&t[0]&&n!==(n=e[5]?e[5]:"")&&z(i,"id",n),4&t[0]&&z(i,"placeholder",e[2]),64&t[0]&&z(i,"name",e[6]),1024&t[0]&&(i.disabled=e[10]),2048&t[0]&&z(i,"title",e[11]),4096&t[0]&&i.value!==e[12]&&f(i,e[12]),e[9]?_?_.p(e,t):(_=q(e),_.c(),_.m(o,p)):_&&(_.d(1),_=null),M===(M=b(e))&&k?k.p(e,t):(k&&k.d(1),k=M&&M(e),k&&(k.c(),k.m(y,null))),131200&t[0]&&u!==(u=(e[7]?e[7]:"")+" autocomplete-list "+(e[17]?"":"hidden")+"\n    is-fullwidth svelte-17gke0z")&&z(y,"class",u),776&t[0]&&h!==(h=(e[3]?e[3]:"")+"\n  "+(e[8]?"hide-arrow is-multiple":"")+"\n  "+(e[9]?"show-clear":"")+" autocomplete select is-fullwidth "+e[18]+" svelte-17gke0z")&&z(o,"class",h)},i:e,o:e,d(e){e&&l(o),t[46](null),_&&_.d(),k&&k.d(),t[49](null),v=!1,r(w)}}}function ie(e,t){let o;"function"!=typeof e&&console.error("Not a function: "+e+", argument: "+t);try{o=e(t)}catch(o){console.warn("Error executing Autocomplete function on value: "+t+" function: "+e)}let r=o;return null==r&&(r=""),"string"!=typeof r&&(r=r.toString()),r}function ae(e,t,o){let r,{items:a=[]}=t,{labelFieldName:n}=t,{keywordsFieldName:s=n}=t,{valueFieldName:p}=t,{labelFunction:c=function(e){return null==e?"":n?e[n]:e}}=t,{keywordsFunction:d=function(e){return null==e?"":s?e[s]:c(e)}}=t,{valueFunction:l=function(e){return null==e?e:p?e[p]:e}}=t,{keywordsCleanFunction:g=function(e){return e}}=t,{textCleanFunction:y=function(e){return e}}=t,{searchFunction:m=!1}=t,{beforeChange:u=function(e,t){return!0}}=t,{onChange:P=function(e){}}=t,{selectFirstIfEmpty:z=!1}=t,{minCharactersToSearch:h=1}=t,{maxItemsToShowInList:f=0}=t,{noResultsText:v="No results found"}=t;const w="sautocomplete-"+Math.floor(1e3*Math.random());function _(e){return ie(c,e)}function b(e){const t=ie(d,e);let o=ie(g,t);return o=o.toLowerCase().trim(),F&&console.log("Extracted keywords: '"+o+"' from item: "+JSON.stringify(e)),o}let M,k,S,{placeholder:x}=t,{className:L}=t,{inputClassName:T}=t,{inputId:A}=t,{name:D}=t,{dropdownClassName:B}=t,{hideArrow:E=!1}=t,{showClear:H=!1}=t,{disabled:W=!1}=t,{title:N}=t,{debug:F=!1}=t,{selectedItem:R}=t,{value:I}=t,O=0;let U,G=!1,$=-1,J=[];function K(){let e;F&&(e=performance.now(),console.log("prepare items to search"),console.log("items: "+JSON.stringify(a))),Array.isArray(a)||(console.warn("Autocomplete items / search function did not return array but",a),o(27,a=[]));const t=a?a.length:0;if(J=new Array(t),t>0&&a.forEach(((e,t)=>{const o=function(e){return{keywords:b(e),label:_(e),item:e}}(e);null==o&&console.log("Undefined item for: ",e),J[t]=o})),F){const t=performance.now();console.log(J.length+" items to search prepared in "+(t-e)+" milliseconds")}}async function V(){let e;F&&(e=performance.now(),console.log("Searching user entered text: '"+M+"'"));const t=function(e){if(null==e)return"";const t=e.replace(/[&/\\#,+()$~%.'":*?<>{}]/g," ").trim();if(o(44,O=t.length),h>1&&O<h)return"";const r=y(t).toLowerCase().trim();return F&&console.log("Change user entered text '"+e+"' into '"+r+"'"),r}(M);if(""===t)return o(16,U=J),ne(),void(F&&console.log("User entered text is empty set the list of items to all items"));m&&(o(27,a=await m(t)),K());const r=t.split(" ");let i=J.filter((e=>{if(!e)return!1;const t=e.keywords;let o=0;return r.forEach((e=>{t.includes(e)&&o++})),o>=r.length}));const n=se(t,["label"]),s=i.map(n);if(o(16,U=s),ne(),F){const t=performance.now();console.log("Search took "+(t-e)+" milliseconds, found "+U.length+" items")}}function q(e){if(F&&console.log("selectListItem"),void 0===e)return F&&console.log(`listItem ${i} is undefined. Can not select.`),!1;const t=e.item;return u(R,t)&&o(28,R=t),!0}function Y(){F&&console.log("selectItem");q(U[$])&&re()}function j(){F&&console.log("up"),oe(),$>0&&o(15,$--,$),Q()}function X(){F&&console.log("down"),oe(),$<U.length-1&&o(15,$++,$),Q()}function Q(){F&&console.log("highlight");const e=".selected";F&&console.log("Seaching DOM element: .selected in "+S);const t=S.querySelector(e);t?"function"==typeof t.scrollIntoViewIfNeeded?(F&&console.log("Scrolling selected item into view"),t.scrollIntoViewIfNeeded()):F&&console.warn("Could not scroll selected item into view, scrollIntoViewIfNeeded not supported"):F&&console.warn("Selected item not found to scroll into view")}function Z(e){F&&console.log("onListItemClick"),q(e)&&re()}function ee(e){F&&console.log("onEsc"),e.stopPropagation(),G&&(k.focus(),re())}function te(){if(F&&console.log("resetListToAllItemsAndOpen"),o(16,U=J),oe(),R){F&&console.log("Searching currently selected item: "+JSON.stringify(R));for(let e=0;e<J.length;e++){const t=J[e];if(void 0!==t){if(F&&console.log("Item "+e+": "+JSON.stringify(t)),R==t.item){o(15,$=e),F&&console.log("Found selected item: "+e+": "+JSON.stringify(t)),Q();break}}else F&&console.log(`listItem ${e} is undefined. Skipping.`)}}}function oe(){F&&console.log("open"),ae()||o(45,G=!0)}function re(){F&&console.log("close"),o(45,G=!1),!M&&z&&(se=0,Y())}function ae(){return h>1&&O<h}function ne(){ae()&&re()}function se(e,t){const o="("+e.trim().replace(/\s/g,")(.*)(")+")",r=new RegExp(o,"ig");let i=1;const a=o.split(")(").length+1;let n="";for(;i<a;i++)n+=i%2?`<b>$${i}</b>`:`$${i}`;return e=>{const o=Object.assign({highlighted:{}},e);return t&&t.forEach((e=>{o[e]&&(o.highlighted[e]=o[e].replace(r,n))})),o}}return e.$$set=e=>{"items"in e&&o(27,a=e.items),"labelFieldName"in e&&o(30,n=e.labelFieldName),"keywordsFieldName"in e&&o(31,s=e.keywordsFieldName),"valueFieldName"in e&&o(32,p=e.valueFieldName),"labelFunction"in e&&o(33,c=e.labelFunction),"keywordsFunction"in e&&o(34,d=e.keywordsFunction),"valueFunction"in e&&o(35,l=e.valueFunction),"keywordsCleanFunction"in e&&o(36,g=e.keywordsCleanFunction),"textCleanFunction"in e&&o(37,y=e.textCleanFunction),"searchFunction"in e&&o(38,m=e.searchFunction),"beforeChange"in e&&o(39,u=e.beforeChange),"onChange"in e&&o(40,P=e.onChange),"selectFirstIfEmpty"in e&&o(41,z=e.selectFirstIfEmpty),"minCharactersToSearch"in e&&o(42,h=e.minCharactersToSearch),"maxItemsToShowInList"in e&&o(0,f=e.maxItemsToShowInList),"noResultsText"in e&&o(1,v=e.noResultsText),"placeholder"in e&&o(2,x=e.placeholder),"className"in e&&o(3,L=e.className),"inputClassName"in e&&o(4,T=e.inputClassName),"inputId"in e&&o(5,A=e.inputId),"name"in e&&o(6,D=e.name),"dropdownClassName"in e&&o(7,B=e.dropdownClassName),"hideArrow"in e&&o(8,E=e.hideArrow),"showClear"in e&&o(9,H=e.showClear),"disabled"in e&&o(10,W=e.disabled),"title"in e&&o(11,N=e.title),"debug"in e&&o(43,F=e.debug),"selectedItem"in e&&o(28,R=e.selectedItem),"value"in e&&o(29,I=e.value)},e.$$.update=()=>{268435456&e.$$.dirty[0]&&(o(29,I=l(R)),o(12,M=_(R)),P(R)),134217728&e.$$.dirty[0]|24576&e.$$.dirty[1]&&o(17,r=G&&(a&&a.length>0||O>0)),134217728&e.$$.dirty[0]&&K()},[f,v,x,L,T,A,D,B,E,H,W,N,M,k,S,$,U,r,w,Z,function(e){F&&console.log("onDocumentClick: "+JSON.stringify(e.target)),e.target.closest("."+w)?(F&&console.log("onDocumentClick inside"),Q()):(F&&console.log("onDocumentClick outside"),re())},function(e){F&&console.log("onKeyDown");let t=e.key;"Tab"===t&&e.shiftKey&&(t="ShiftTab");const o={Tab:G?X.bind(this):null,ShiftTab:G?j.bind(this):null,ArrowDown:X.bind(this),ArrowUp:j.bind(this),Escape:ee.bind(this)}[t];"function"==typeof o&&(e.preventDefault(),o(e))},function(e){F&&console.log("onKeyPress"),"Enter"===e.key&&(e.preventDefault(),Y())},function(e){F&&console.log("onInput"),o(12,M=e.target.value),V(),o(15,$=0),oe()},function(){F&&console.log("onInputClick"),te()},function(){F&&console.log("onFocus"),te()},function(){F&&console.log("clear"),o(12,M=""),o(28,R=void 0),setTimeout((()=>{k.focus(),re()}))},a,R,I,n,s,p,c,d,l,g,y,m,u,P,z,h,F,O,G,function(e){C[e?"unshift":"push"]((()=>{k=e,o(13,k)}))},function(){M=this.value,o(12,M)},e=>Z(e),function(e){C[e?"unshift":"push"]((()=>{S=e,o(14,S)}))}]}class ne extends K{constructor(e){super(),J(this,e,ae,re,n,{items:27,labelFieldName:30,keywordsFieldName:31,valueFieldName:32,labelFunction:33,keywordsFunction:34,valueFunction:35,keywordsCleanFunction:36,textCleanFunction:37,searchFunction:38,beforeChange:39,onChange:40,selectFirstIfEmpty:41,minCharactersToSearch:42,maxItemsToShowInList:0,noResultsText:1,placeholder:2,className:3,inputClassName:4,inputId:5,name:6,dropdownClassName:7,hideArrow:8,showClear:9,disabled:10,title:11,debug:43,selectedItem:28,value:29},[-1,-1,-1])}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;
/* @license
    Papa Parse
    v5.3.0
    https://github.com/mholt/PapaParse
    License: MIT
    */
//# sourceMappingURL=bundle.js.map