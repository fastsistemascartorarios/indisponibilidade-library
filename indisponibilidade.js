navigator.os = {
	platform: "Windows",
	name: "10",
	version: "10",
};
navigator.browser = {
	name: "Firefox",
	version: "89"
};

if (typeof($) !== "function") {

/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});;

}

var	__URL_HOME = "https://www.indisponibilidade.org.br/",
	__URL_IMAGES = __URL_HOME+"images/",
	arispbravo = {},
	tid = "arispbravo-"+(new Date()).getTime(),
	div = document.createElement("div");
	div.id = tid;

document.write(div.outerHTML);

function appletLoaded(){return void(0);};

var icpAlert = function (title, message) {
	unblockui();
	var over = $("#icp-alert-overlay");
	if (over[0]) {
		over.remove();
	};
	var wid = parseInt((window.innerWidth / 7) * 2),
		left = parseInt((window.innerWidth - wid) / 2);
	var overlay = $(document.createElement("div"))
		.attr("id", "icp-alert-overlay").css({
			display: "block",
			width: "100%",
			height: window.innerHeight,
			position: "fixed",
			top: 0,
			left: 0,
			backgroundColor: "rgba(17, 18, 19, 0.85)",
			zIndex: 99999
		}).appendTo("body");
	var tit = $(document.createElement("h3"))
		.html(title || "ALERTA").css({
			margin: 0,
			padding: 0,
			width: "100%",
			textTransform: "uppercase",
			fontWeight: "bold",
			fontSize: "16px",
			color: "#3163A6",
			display: "block"
		});
	var cnt = $(document.createElement("p"))
		.html(message || "").css({
			display: "block",
			width: "100%",
			fontSize: "13px",
			fontWeight: "normal",
			color: "#000000"
		});
	var box = $(document.createElement("div"))
		.append(tit)
		.append(cnt).css({
			display: "block",
			width: wid,
			left: left,
			padding: "10px",
			borderRadius: 3,
			backgroundColor: "#F0F1F2",
			border: "1px SOLID #FFF",
			boxShadow: "0 10px 10px #000000",
			position: "absolute"
		})
		.appendTo(overlay);
	box.css({
		top: (parseInt((window.innerHeight - box.height()) / 2) - 20)
	});
	var close = $(document.createElement("a"))
		.attr("title", "Fechar")
		.html("+").css({
			display: "block",
			height: "24px",
			width: "24px",
			borderRadius: "50%",
			position: "absolute",
			right: 3,
			top: 3,
			cursor: "pointer",
			backgroundColor: "#710C13",
			color: "#FFFFFF",
			transform: "rotate(45deg)",
			fontSize: "23px",
			lineHeight: "24px",
			textAlign: "center"
		}).click(function(){
			overlay.remove();
		})
		.appendTo(box);
	return true;
};

window.installPluginMessage =	"A extens??o necess&aacute;ria para efetuar a autentica&ccedil;&atilde;o n&atilde;o foi encontrada."+
								"<br /><br />Por favor, instale-a e tente novamente!"+
								"<br /><br /><a href='http://icpbravoaccess.com.br/#/install?redirectUrl="+window.location.href+"' style='color:red;font-size:14px' onclick='cni.aviso.close();' target='_blank'>"+
									"Clique aqui"+
									"</a> para instalar a extens??o."+
								"<br /><br />Se voc&ecirc; j&aacute; instalou a extens??o e ainda est&aacute; recebendo esta mensagem, por favor, reinicie seu computador e tente novamente.";






// window.installPluginMessage += '<br /><br />';


	


/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock.bind(lyr3)();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				data.el.style.cursor = 'default'; // #59
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();


/*0.7*/
var icpbravoaccess_ie = null;

var icpBravoAccessExt = (function () {
    var license = null;
    var angularScope = null;

    /*config*/
    var isLogEnable = false;

    //this js version
    var clientVersion = "0.7";
    //Minimal IE Extension supported version
    var IE_MIN_SUPPORTED = "0.7";

    var browser = {
        Default: 0,
        IE: 1,
        Chrome: 2,
        Firefox: 3
    }

    var appStatus = {
        BROWSER_NOT_SUPPORTED: 0,
        EXTENSION_NOT_INSTALLED: 1,
        NATIVE_NOT_INSTALLED: 2,
        NATIVE_OUTDATED: 3,
        JS_OUTDATED: 4,
        INSTALLED: 5
    }

    /*========================================================================================================================
    * Control Object
    */

    var _control = new function () {

        var responseStatus = {
            Error: 0,
            Success: 1
        };

        //detect current browser version
        var browserInfo = (function () {
            var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
            return M.join(' ');
        })();

        /*
         * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
         * uuid format :  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
         * ex          : (227211e5-57e0-072c-3515-8eff3a2c2e3f)
         */
        function generateSecureIdentifier() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        function build(content, command, requestId) {

            var message = {
                command: command,
                requestId: requestId,
                license: icpBravoAccessExt.license,
                domain: "www.indisponibilidade.org.br",//window.location.hostname,
                content: JSON.stringify(content),
                browser: getBrowser()
            }
            return message;
        }


        function getBrowser() {
            if (browserInfo.indexOf("Chrome") >= 0) {
                return browser.Chrome
            } else if (browserInfo.indexOf("Firefox") >= 0) {
                return browser.Firefox
            } else if (browserInfo.indexOf("IE") >= 0) {
                return browser.IE;
            }
        }

        switch (getBrowser()) {
            case browser.Chrome:
            case browser.Firefox:
                /*request dictionary, all requests are registered here.*/
                var requestPool = {};

                /*request actions events*/
                var requestEventName = 'com.scytl.icpbravoaccess.request';
                /*response action events*/
                var responseEventName = 'com.scytl.icpbravoaccess.response';

                /*request*/
                var requestCommand = function (callback, content, command) {

                    var uuid = generateSecureIdentifier();

                    /*create pool item request */
                    var requestPoolItem = {
                        callback: callback,
                        requestTime: new Date()
                    };

                    /*register in request poll a new request intent*/
                    requestPool[uuid] = requestPoolItem;

                    /*build command.*/
                    var requestData = (build(content, command, uuid));

                    log("Command: " + command + " uuid: " + uuid);

                    /*create and dispatch a custon event request*/
                    var customEvent = new CustomEvent(requestEventName, { 'detail': requestData });
                    //customEvent.initEvent(requestEventName);
                    document.dispatchEvent(customEvent);
                }

                function checkNativeApp(callback, requestData) {

                    var callbackHandle = _callbackRegister({
                        onSuccess: function (response) {
                            if (response.instalationStatus === appStatus.NATIVE_OUTDATED) {
                                callback._dispatchSuccess(response);
                                knockNative(callback, requestData);
                            } else {
                                callback._dispatchSuccess(response);
                            }
                        },
                        onError: function (response) {
                            if (response.instalationStatus === appStatus.NATIVE_NOT_INSTALLED) {
                                callback._dispatchSuccess(response);
                                knockNative(callback, requestData);
                            } else if (response.notInstalled) {/* to remove, just for backward compatibility */
                                response.instalationStatus = appStatus.NATIVE_NOT_INSTALLED;
                                callback._dispatchSuccess(response);
                                knockNative(callback, requestData);
                            } else {
                                callback._dispatchSuccess(response);
                            }
                        },
                    });

                    requestCommand(callbackHandle, requestData, actions.check);
                };

                var knockNative = function (callback, requestData) {

                    var callbackHandle = _callbackRegister({
                        onSuccess: function (response) {
                            if (response.instalationStatus === appStatus.NATIVE_OUTDATED) {
                                setTimeout(function () {
                                    knockNative(callback, requestData);
                                }, 1000);
                            } else {
                                callback._dispatchSuccess(response);
                            }
                        },
                        onError: function (response) {
                            setTimeout(function () {
                                knockNative(callback, requestData);
                            }, 1000);
                        },
                    });

                    requestCommand(callbackHandle, requestData, actions.check);
                };

                var checkExtension = function (callback, tries) {
                    log("Remaining tries: " + tries);

                    var div = document.getElementById("icpbravoaccess_loaded");
                    if (div === null) {
                        if (tries > 1) {
                            setTimeout(function () {
                                checkExtension(callback, (tries - 1));
                            }, 200);
                        } else {
                            callback._dispatchSuccess({
                                instalationStatus: appStatus.EXTENSION_NOT_INSTALLED
                            });
                        }
                        return;
                    }

                    var requestData = {
                        jsClientVersion: clientVersion                     
                    }

                    checkNativeApp(callback, requestData);
                };

                /* event listener to capture responses from extension */
                document.addEventListener(responseEventName, function (response) {
                    var message = response.detail;

                    var requestPoolItem = requestPool[message.requestId];

                    if (!requestPoolItem) {
                        /*error invalid request id               */
                    } else {
                        delete requestPool[message.requestId];

                        log("Response uuid: " + message.requestId);

                        if (message.statusCode === responseStatus.Error) {
                            requestPoolItem.callback._dispatchError(message);
                        } else if (message.statusCode === responseStatus.Success) {

                            /*parse received message to object*/
                            var parsedResponse = JSON.parse(message.content);

                            if (requestPoolItem.callback.onReceiveReponse) {
                                parsedResponse = requestPoolItem.callback.onReceiveReponse(parsedResponse);
                            }

                            requestPoolItem.callback._dispatchSuccess(parsedResponse);
                        }
                    }
                });
                break;
            case browser.IE:
                /*request dictionary, all requests are registered here.*/
                var requestPool = {};

                var checkExtension = function (callback, tries) {
                    log("Remaining tries: " + tries);

                    if (typeof (icpbravoaccess_ie) === "undefined" || icpbravoaccess_ie === null) {
                        if (tries > 1) {
                            setTimeout(function () {
                                checkExtension(callback, (tries - 1));
                            }, 200);
                        } else {
                            callback._dispatchSuccess({
                                instalationStatus: appStatus.EXTENSION_NOT_INSTALLED
                            });
                        }
                        return;
                    }

                    var requestData = {                      
                        jsClientVersion: clientVersion,
                        ieMinSupportedVersion: IE_MIN_SUPPORTED
                    }

                    checkApp(callback, requestData);
                };

                function checkApp(callback, requestData) {

                    var callbackHandle = _callbackRegister({
                        onSuccess: function (response) {
                            callback._dispatchSuccess(response);
                        },
                        onError: function (response) {
                            callback._dispatchSuccess(response);
                        },
                    });

                    requestCommand(callbackHandle, requestData, actions.check);
                };

                /*request*/
                var requestCommand = function (callback, content, command) {

                    var uuid = generateSecureIdentifier();

                    /*build command.*/
                    var requestData = (build(content, command, uuid));

                    log("Command: " + command + " uuid: " + uuid);

                    var jsonRequestData = JSON.stringify(requestData);
                    var result = icpbravoaccess_ie.request(jsonRequestData);

                    if (result) {

                        var requestPoolItem = {
                            callback: callback,
                            requestTime: new Date()
                        };


                        requestPool[uuid] = requestPoolItem;
                    }

                }

                var verifyRequest = function () {

                    if (typeof (icpbravoaccess_ie) !== "undefined" && icpbravoaccess_ie !== null) {

                        var completeRequestsJson = icpbravoaccess_ie.GetPool();
                        var completeRequestsObjs = JSON.parse(completeRequestsJson);


                        for (var i = 0; i < completeRequestsObjs.length; i++) {

                            var responseObject = completeRequestsObjs[i];
                            var response = JSON.parse(responseObject);

                            var requestPoolItem = requestPool[response.requestId];

                            if (!requestPoolItem) {
                                /*error invalid request id                    */
                            } else {
                                delete requestPool[response.requestId];

                                log("Response uuid: " + response.requestId);

                                if (response.statusCode === responseStatus.Error) {
                                    requestPoolItem.callback._dispatchError(response);
                                } else if (response.statusCode === responseStatus.Success) {

                                    /*parse received message to object*/
                                    var parsedResponse = JSON.parse(response.content);

                                    if (requestPoolItem.callback.onReceiveReponse) {
                                        parsedResponse = requestPoolItem.callback.onReceiveReponse(parsedResponse);
                                    }

                                    icpbravoaccess_ie.RemovePool(response.requestId);
                                    requestPoolItem.callback._dispatchSuccess(parsedResponse);
                                }
                            }
                        }
                    }

                    setTimeout(function () {
                        verifyRequest();
                    }, 300);
                }

                verifyRequest();
                break;
            default:
                var checkExtension = function (callback, tries) {
                    callback._dispatchSuccess({
                        instalationStatus: appStatus.BROWSER_NOT_SUPPORTED
                    });
                }
        }

        /*make methods accessible.*/
        this.requestCommand = requestCommand;
        this.checkExtension = checkExtension;
    }

    /*========================================================================================================================
    * Callback Object
    */

    this.callbackHandle = function (angular) {
        /*success callback registered by app user*/
        this.onSuccess = new function () { };
        /*error callback registered by app user*/
        this.onError = new function () { };

        this.onReceiveReponse = null;
        this.angularScope = angular;

        /*treat and dispach requests with success*/
        this._dispatchSuccess = function (response) {
            this._safeApply(this.onSuccess, response);
        }

        /*treat and dispache requests with error */
        this._dispatchError = function (response) {
            this._safeApply(this.onError, response);
        }

        /*'Safe' $apply in Angular.JS*/
        this._safeApply = function (fn, response) {
            /*if the application uses angular.js, '_safeApply' method checks the current phase before executing your function. */
            if (icpBravoAccessExt.angularScope) {
                var phase = this.angularScope.$root.$$phase;
                if (phase == '$apply' || phase == '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn(response);
                    }
                } else {
                    this.angularScope.$apply(
                         fn(response)
                    );
                }
            } else {
                fn(response);
            }
        };
    }

    /*CallbackManager*/
    this._callbackRegister = function (args) {
        var ch = new callbackHandle(icpBravoAccessExt.angularScope);

        if (args.onSuccess) {
            ch.onSuccess = args.onSuccess;
        }

        if (args.onError) {
            ch.onError = args.onError;
        }

        if (args.onReceiveReponse) {
            ch.onReceiveReponse = args.onReceiveReponse;
        }

        return ch;
    }

    /*========================================================================================================================
    *  Action Objects
    */

    var actions = {
        certificates: "certificates",
        certificate: "certificate",
        remove: "remove",
        sign: "sign",
        check: "check",
        decrypt: "decrypt",
        encrypt: "encrypt",
    }

    var onExtensionCheck = function (onInstalled, onNotInstalled, onError, response) {

        switch (response.instalationStatus) {

            case appStatus.BROWSER_NOT_SUPPORTED:
                response.statusMessage = "O navegador n??o tem suporte para esta extens??o.";
                response.info = "Navegador n??o suportado";
                onNotInstalled(response);
                break;
            case appStatus.EXTENSION_NOT_INSTALLED:
                response.statusMessage = "A Extens??o n??o est?? instalada. Instale para continuar.";
                response.info = "Extens??o n??o Instalada";
                onNotInstalled(response);
                break;
            case appStatus.NATIVE_NOT_INSTALLED:
                response.statusMessage = "A aplica????o nativa n??o est?? instalada. Fa??a o download da aplica????o e instale para continuar.";
                response.info = "Aplica????o n??o Instalada";
                response.downloadRequired = true;
                onNotInstalled(response);
                break;
            case appStatus.NATIVE_OUTDATED:
                response.statusMessage = "A aplica????o nativa est?? desatualiziada. Fa??a o download da vers??o mais atual e instale para continuar.";
                response.info = "Atualiza????o Dispon??vel";
                response.downloadRequired = true;
                onNotInstalled(response);
                break;
            case appStatus.JS_OUTDATED:
                response.statusMessage = "O JavaScript Client est?? desatualizado. Entre em contato com o administrador do site.";
                response.info = "Erro";
                response.downloadRequired = false;
                onNotInstalled(response);
                break;
            case appStatus.INSTALLED:
                onInstalled();
                break;
            default:
                response.info = "Erro";
                response.downloadRequired = false;
                onError(response)
                break;
        }

    };

    var filterCollection = function (collection, callback) {
        var data = [];

        for (var i = 0; collection.length > i; i++) {
            if (callback(collection[i])) {
                data.push(collection[i]);
            }
        }

        return data;
    }

    var filterCertificates = function (filter, certificates) {

        if (!filter) {
            return certificates;
        }

        if (filter.cpf) {
            var cpfs = (filter.cpf.replace(/\./g, "").replace(/-/g, "")).split("|");
            certificates.certificates = filterCollection(certificates.certificates,
                function (it) {
                    for (cpfIndex in cpfs) {
                        if (it.cpf == cpfs[cpfIndex]) {
                            return true;
                        }
                    }
                    return false;
                }
            );
        }

        if (filter.type) {
            filter.type = filter.type.toLowerCase();

            if (filter.type.search("icpbrasil") >= 0) {
                certificates.certificates = filterCollection(certificates.certificates,
                    function (it) {
                        return it.certType === certType.ICPBrasil;
                    }
                );
            } else if (filter.type.search("unknown") >= 0) {
                certificates.certificates = filterCollection(certificates.certificates,
                    function (it) {
                        return it.certType === certType.Unknown;
                    }
                );
            }
        }

        if (filter.valid) {
            certificates.certificates = filterCollection(certificates.certificates,
                function (it) {
                      return it.isValid;;
                }
            );
        }

        return certificates;
    }

    /*
    * Certificates:
    * 
    */
    this.certificates = function (args) {

        var reportResponse = validateCertificatesAttrs(args);
        if (reportResponse) {
            args.onError(reportResponse);
            return;
        }

        var callbackHandle = _callbackRegister({
            onSuccess: args.onSuccess,
            onError: args.onError,
            onReceiveReponse: function (certificates) {
                return filterCertificates(args.filter, certificates);
            }
        });

        _control.requestCommand(callbackHandle, null, actions.certificates);
    }

    var certificate = function (args) {

        var reportResponse = validateCertificateAttrs(args);
        if (reportResponse) {
            args.onError(reportResponse);
            return;
        }

        /*create a certificate callbackHandler*/
        var callbackHandle = _callbackRegister({
            onSuccess: args.onSuccess,
            onError: args.onError
        });

        /*mount certificate request data object*/
        var requestData = {
            thumbprint: args.thumbprint
        }

        _control.requestCommand(callbackHandle, requestData, actions.certificate);
    }

    var sign = function (args) {

        var reportResponse = validateSignAttrs(args);
        if (reportResponse) {
            args.onError(reportResponse);
            return;
        }

        /*create a sign callbackHandler*/
        var callbackHandle = _callbackRegister({
            onSuccess: args.onSuccess,
            onError: args.onError
        });

        /*mount sign request data object*/
        var requestData = {
            thumbprint: args.thumbprint,
            toSign: args.toSign,
            signatureAlgorithm: args.signatureAlgorithm
        }

        _control.requestCommand(callbackHandle, requestData, actions.sign);
    }


    var encrypt = function (args) {
        var reportResponse = validateEncryptAttrs(args);
        if (reportResponse) {
            args.onError(reportResponse);
            return;
        }

        /*create a encrypt callbackHandler*/
        var callbackHandle = _callbackRegister({
            onSuccess: args.onSuccess,
            onError: args.onError
        });

        /*mount encrypt request data object*/
        var requestData = {
            thumbprint: args.thumbprint,
            toEncrypt: args.toEncrypt,
            oaep: args.oaep
        }

        _control.requestCommand(callbackHandle, requestData, actions.encrypt);
    }

    var decrypt = function (args) {
        var reportResponse = validateDecryptAttrs(args);
        if (reportResponse) {
            args.onError(reportResponse);
            return;
        }

        /*create a decrypt callbackHandler*/
        var callbackHandle = _callbackRegister({
            onSuccess: args.onSuccess,
            onError: args.onError
        });

        /*mount decrypt request data object*/
        var requestData = {
            thumbprint: args.thumbprint,
            toDecrypt: args.toDecrypt,
            oaep : args.oaep
        }

        _control.requestCommand(callbackHandle, requestData, actions.decrypt);
    }

    var remove = function (args) {

        var reportResponse = validateRemoveAttrs(args);
        if (reportResponse) {
            args.onError(reportResponse);
            return;
        }

        /*create a sign callbackHandler*/
        var callbackHandle = _callbackRegister({
            onSuccess: args.onSuccess,
            onError: args.onError
        });

        /*mount sign request data object*/
        var requestData = {
            thumbprint: args.thumbprint
        }

        _control.requestCommand(callbackHandle, requestData, actions.remove);
    }

    var connect = function (args) {
        var reportResponse = validateConnectAttrs(args);
        if (reportResponse) {
            args.onError(reportResponse);
            return;
        }

        if (args.license) {
            icpBravoAccessExt.license = args.license;
        }

        if (args.angular) {
            icpBravoAccessExt.angularScope = args.angular;
        }

        var callbackHandle = _callbackRegister({
            onSuccess: function (response) {
                onExtensionCheck(args.onSuccess, args.onNotInstalled, args.onError, response)
            },
            onError: function (response) {
                args.onError(response);
            },
        });

        /*run function to check if extension is already installed*/
        _control.checkExtension(callbackHandle, 25);
    }

    function attrFail(attr, method) {
        var response = {
            statusMessage: "N??o foi poss??vel localizar o par??metro : [" + attr + "] na chamada ao m??todo : " + method,
        }

        return response;
    }

    function validateCertificateAttrs(args) {
        if (!args.thumbprint) {
            return attrFail("thumbprint", "certificate");
        }

        if (!args.onSuccess) {
            return attrFail("onSuccess", "certificate");
        }
    }

    function validateCertificatesAttrs(args) {
        if (!args.onSuccess) {
            return attrFail("onSuccess", "certificates");
        }
    }

    function validateSignAttrs(args) {

        if (!args.thumbprint) {
            return attrFail("thumbprint", "sign");
        }

        if (!args.toSign) {
            return attrFail("toSign", "sign")
        }

        if (!args.onSuccess) {
            return attrFail("onSuccess", "sign");
        }
    }

    function validateDecryptAttrs(args) {
        if (!args.toDecrypt) {
            return attrFail("toDecrypt", "decrypt")
        }
        if (!args.thumbprint) {
            return attrFail("thumbprint", "decrypt");
        }
    }

    function validateEncryptAttrs(args) {
        if (!args.toEncrypt) {
            return attrFail("toEncrypt", "encrypt")
        }
        if (!args.thumbprint) {
            return attrFail("thumbprint", "encrypt");
        }
    }

    function validateRemoveAttrs(args) {
        if (!args.thumbprint) {
            return attrFail("thumbprint", "remove");
        }
    }

    function validateConnectAttrs(args) {
        if (!args.onNotInstalled) {
            return attrFail("onNotInstalled", "connect");
        }

        if (!args.onSuccess) {
            return attrFail("onSuccess", "connect");
        }
    }

    /*========================================================================================================================
    *  Util
    */

    var certType = {
        Unknown: 0,
        ICPBrasil: 1
    }

    /*logs*/
    function log(message) {
        if (isLogEnable) {
            console.log(message);
        }
    }

    /*avaliable actions*/
    return {
        /*commands*/
        connect: connect,
        getCertificateList: certificates,
        getCertificate: certificate,
        sign: sign,
        remove: remove,
        encrypt: encrypt,
        decrypt: decrypt,
        /*config*/
        enableLog: isLogEnable,
    }

})();


/* BEGIN ----------------------------------------- icpBravoAccess callers ----------------------------------------- */

var icpBravoAccess = icpBravoAccessExt;

function onAssinar() {
	blockui("Sign");
	
	var option = document.getElementById("certificateSelect");
	var certificateThumbprint = option[option.selectedIndex].value;
	
	icpBravoAccess.sign({
		toSign : "c2N5dGwc2N5=",
		thumbprint : certificateThumbprint,
		onSuccess : onSignatureSuccess,
		onError : onError,
	});
	
	unblockui();
}

function executarAccess() {
	window.location = 'access://';
}

function onAssinarWithBufferedKey() {
	
	blockui("Sign With Buffered Key");
	
	var option = document.getElementById("certificateSelect");
	var certificateThumbprint = option[option.selectedIndex].value;

	icpBravoAccess.signWithBufferedKey({
		toSign : "c2N5dGwc2N5=",
		thumbprint : certificateThumbprint,
		onSuccess : onSignatureSuccess,
		onError : onError,
	});

	unblockui();
}

function onGetCertificate() {

	blockui("Get Certificate");

	var option = document.getElementById("certificateSelect");
	var certificateThumbprint = option[option.selectedIndex].value;

	// Para obter o certificado que est?? sendo usado na assinatura, basta passar o thumprint (value do certificateSelect)
	icpBravoAccess.getCertificate({
		thumbprint : certificateThumbprint,
		onSuccess : onGetCertificateSuccess,
		onError : onError,
	});	
	
	unblockui();
}

function onGetCertificateList() {

	blockui("Load Certificates");

	// Obtendo lista de certificadsos, a lista retornada ter?? as caracteristicas definidas no filtros.
	icpBravoAccess.getCertificateList({
		reload : false, // if true realod certificates
		icpbrasil : false, // if true show only ICPBrasil Certificates; DEPRECATED, should use type
		type : "", // "icpbrasil" show only ICPBrasil Certificates; "icpbrasil|backoffice" show only ICPBrasil and backoffice Certificates
		valid : false, // if true accept only valid certificates
		cpf : "", // if has cpf, show only certificates of that cpf, multiple cpfs acceptable if separated by pipe "|"
		//revoked : false, // if true accept revoked Certificates (only if icpbrasil : true) DEPRECATED
		onSuccess : onCertificatesLoaded,
		onError : onError,
	});	
	
	unblockui();
}

function ICPAutenticar () {
	blockui("Processando...");
	var thumbprint = document.getElementById("CertificateSelect").value;
	icpBravoAccess.sign({
		toSign : arispbravo.challenge,
		thumbprint : thumbprint,
		onSuccess : function(signature){
			window.signature = signature
			icpBravoAccess.getCertificate({
				thumbprint : thumbprint,
				onSuccess : function(certificate){
					window.certificate = certificate;
					var	form = document.createElement("form"),
						cert = document.createElement("textarea"),
						sign = document.createElement("textarea"),
						chal = document.createElement("input");

					cert.name = "certificate";	cert.value = window.certificate.certificate;
					sign.name = "signature";	sign.value = window.signature.signature;
					chal.name = "challenge";	chal.value = arispbravo.challenge;

					form.appendChild(cert);
					form.appendChild(sign);
					form.appendChild(chal);

					tke = document.getElementById("arisp-token-teste");
					if (tke) {
						var	toke = document.createElement("textarea");
							toke.name = "token";
							toke.value = tke.value;
						form.appendChild(toke);
					};

					document.body.appendChild(form);
					unblockui();
					closeContainer();
				},
				onError : function(a, b, c, d) {
					console.log("getCertificate");
					console.log(a, b, c, d);
				},
				// onError : onError,
			});
		},
		onError : function(a, b, c, d) {
			console.log("sign");
			console.log(a, b, c, d);
		},
		// onError : onError,
	});
};

function ICPCarregarCertificados (botClose) {

	if (botClose) {
		botClose.click();
	};
	carregaCertificados();
};

function carregaCertificadosLoaded (certificados) {
	unblockui();
	window.certificados = certificados;
};

function CarregarPluginICP (authurl, challenge, callback) {
	icpBravoAccess.connect({
		license : "AQQAAABab2ZpY2lvZWxldHJvbmljby5jb20uYnJ8cmVnaXN0cmFkb3Jlcy5vcmcuYnJ8aW5kaXNwb25pYmlsaWRhZGUub3JnLmJyfHBlbmhvcmFvbmxpbmUub3JnLmJyABdTmPbW3qAoF1d2OQDLk1vf/RiHw1DZT4jkA862p/lO9rZBiffl7sFsIemKNYvYI4scVuiOFV7o5xC3cw1OQ1/rmcx1ryY28HfJ2FD0Hsqw3Io0qqHIHzY01fELhlIrups/yZ+qj8p8vlkPwstsFsxLBkAl1GSirY+2PMaEzAlglYNmIgA84FtPaxxFGgkW9a6NhRrgKhz5EJVL0V1ORC1PNxP9izbw/PBZnkDTTXl1wWmVUKGZ7+hp5e67zBIcP0RCHKBRDRVPfRg3PjhH+Iij37laO6gpj08NSMecDGCm++V4emAIbNcH1rMvQpeH1tCMNnUm03rcrgie8zL3uhQ=",
		onSuccess: function(){
			carregaCertificados(null, callback);
		},
		onError: function() {
			unblockui();
		},
		// onError: onError,
		onNotInstalled: function (response) {
			unblockui();
			switch (response.instalationStatus) {
				case 0: // navegador n??o suportado
				case 4: // navegador n??o suportado - javascript do navegador ultrapassado
					var titulo =	"Navegador n??o suportado";
					if (response.instalationStatus == 4) {
						titulo +=	" - Javascript ultrapassado";
					};
					var mensagem =	'<p>Prezaos Usu&aacute;rios,</p>'+
									'<p>Este navegador n??o suporta o novo sistema de autentica????o utilizado por n??s.</p>'+
									'<p>Para continuar, voc?? deve instalar o Google Chrome acessando: <a style="color:red;font-weight:bold" href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">chrome.google.com</a></p>';
					break;
				case 1: // extens??o n??o instalada
					var mensagem =	"<p>N??o foi localizada a extens??o de navegador necess??ria para efetuar a autentica????o.</p>"+
									"<p>Por favor. Instale a extens??o antes de continuar.</p>"+
									"<p><a style='color:red;font-weight:bold' href='http://icpbravoaccess.com.br/#/install?redirectUrl="+window.location.href+"' target='_blank'>clique aqui</a> para instalar a extens??o necess??ria.</p>";
					var titulo =	"Extens??o n??o instalada";
					break;
				case 2: // native client n??o instalado
					var mensagem =	"<p>O cliente nativo n??o est?? instalado.</p>"+
									"<p>Por favor, Instale a vers??o mais atual do cliente nativo antes de continuar.</p>"+
									"<p><a style='color:red;font-weight:bold' href='http://icpbravoaccess.com.br/#/install2?redirectUrl="+window.location.href+"' target='_blank'>clique aqui</a> para instalar a vers??o mais atual do cliente nativo.</p>";
					var titulo =	"Cliente nativo n??o instalado";
					break;
				case 3: // native client desatualizado
					var mensagem =	"<p>O cliente nativo est?? desatualizado.</p>"+
									"<p>Por favor, Instale a vers??o mais atual do cliente nativo antes de continuar.</p>"+
									"<p><a style='color:red;font-weight:bold' href='http://icpbravoaccess.com.br/#/install2?redirectUrl="+window.location.href+"' target='_blank'>clique aqui</a> para instalar a vers??o mais atual do cliente nativo.</p>";
					var titulo =	"Cliente nativo desatualizado";
					break;
			};
			icpAlert(titulo, mensagem);
		}
	});
};

function carregaCertificados (reload, callback) {
	var	reload = (typeof(reload) == "boolean" ? reload : false),
		callback = callback || function(){};

	blockui("Carregando lista de certificados");

	icpBravoAccess.getCertificateList({
		reload: reload,
		icpbrasil: false,
		type: "",
		valid: false,
		cpf: "",
		onSuccess :function(certificados){
			carregaCertificadosLoaded(certificados);
			unblockui();
			callback();
		},
		onError : function(){
			icpAlert("Plugin ausente", window.installPluginMessage);
		},
	});	
	
	unblockui();

};

function onReloadCerticates() {

	blockui("Get Certificate List");

	// Obtendo lista de certificados, a lista retornada ter?? as caracteristicas definidas no filtros.
	icpBravoAccess.getCertificateList({
		reload : true,
		//icpbrasil : false, //DEPRECATED, should use type
		type : "all", // "icpbrasil" show only ICPBrasil Certificates; "icpbrasil|backoffice" show only ICPBrasil and backoffice Certificates
		valid : false,
		//cpf : "", // if has cpf, show only certificates of that cpf, multiple cpfs acceptable if separated by pipe "|"
		//revoked : false, DEPRECATED
		onSuccess : onCertificatesLoaded,
		onError : onError,
	});	
	
	unblockui();
}

// function onLoadPage() {
// 	icpBravoAccess.connect({
// 		license : "AQQAAABab2ZpY2lvZWxldHJvbmljby5jb20uYnJ8cmVnaXN0cmFkb3Jlcy5vcmcuYnJ8aW5kaXNwb25pYmlsaWRhZGUub3JnLmJyfHBlbmhvcmFvbmxpbmUub3JnLmJyABdTmPbW3qAoF1d2OQDLk1vf/RiHw1DZT4jkA862p/lO9rZBiffl7sFsIemKNYvYI4scVuiOFV7o5xC3cw1OQ1/rmcx1ryY28HfJ2FD0Hsqw3Io0qqHIHzY01fELhlIrups/yZ+qj8p8vlkPwstsFsxLBkAl1GSirY+2PMaEzAlglYNmIgA84FtPaxxFGgkW9a6NhRrgKhz5EJVL0V1ORC1PNxP9izbw/PBZnkDTTXl1wWmVUKGZ7+hp5e67zBIcP0RCHKBRDRVPfRg3PjhH+Iij37laO6gpj08NSMecDGCm++V4emAIbNcH1rMvQpeH1tCMNnUm03rcrgie8zL3uhQ=",
// 		onSuccess: function(){},
// 		onError: onError
// 	});
// }
/* END ----------------------------------------- icpBravoAccess callers ----------------------------------------- */

/* BEGIN ----------------------------------------- icpBravoAccess response dealers ----------------------------------------- */

//=== OPTIONS FOR CUSTOMIZE CERTIFICATE FIELD
//	cert.name
//	cert.responsavel
//	cert.cpf
//	cert.cnpj
//	cert.notAfter
//	cert.notBefore
//	cert.type
//	cert.thumbprint
//	cert.issuerName
function onCertificatesLoaded(certificates) {
	var e = document.getElementById("certificateSelect");
	e.options.length = 0;
	for (i = 0; i < certificates.certificatesInfos.length; i++) {
		var cert = certificates.certificatesInfos[i];
		var option = new Option();
		option.value = cert.thumbprint;
		option.text = (cert.type + " : " + cert.cpf + " : " + cert.name
				+ " : " + cert.issuerName)

		e.options[e.options.length] = option;
	}
}

function onGetCertificateSuccess(certificate) {
	alert(certificate.certB64);
}

function onSignatureSuccess(signature) {
	alert(signature.value);
}

function onError(error) {
	unblockui();
	if (/^\{/.test(error.responseText)) {
		var Err = JSON.parse(error.responseText);
	} else {
		var Err = {
			error: "Erro",
			message: error.responseText
		}
	};
	return !icpAlert(Err.error, Err.message);
}
/* END ----------------------------------------- icpBravoAccess response dealers ----------------------------------------- */
$(document).ajaxStop($.unblockUI);

function unblockui(){
	// if(isIE9or8()){
		$.unblockUI();
	// }
}

function blockui(msg) {
	if (!msg)
		return;

	$.blockUI({
		message : msg,
		css : {
			border : 'none',
			padding : '15px',
			baseZ : 100000,
			backgroundColor : '#000',
			'-webkit-border-radius' : '10px',
			'-moz-border-radius' : '10px',
			opacity : .5,
			color : '#fff'
		}
	});
}

// Check if InternetExplorer version is 9 or 8.
function isIE9or8(){
	var version = getInternetExplorerVersion();
	return(version != -1 && version <= 9 && version >= 7);
	
	//return ($.browser.msie && $.browser.version <= 9 && window.XDomainRequest);
}

/**
 * Returns the version of Internet Explorer or a -1
 * (indicating the use of another browser).
 */
function getInternetExplorerVersion()
{
	var rv = -1; // Return value assumes failure.

	if (navigator.appName == 'Microsoft Internet Explorer')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );
	}

	return rv;
}



!(function(T){
	arispbravo = {
		titulo: "Autenticador CNIB",
		authurl: __URL_HOME+"autenticacao/icp",
		challenge: "",
		showbox: true,
		instituicoes: {},
		callback: function(){},
		autenticador: function() {

			var	container = document.createElement("div"),
				authbox = document.createElement("div"),
				titulo = document.createElement("h2"),
				form = document.createElement("form"),
				fechar = document.createElement("a"),
				certificates = document.createElement("div"),
				instituicoes = document.createElement("div"),
				label = document.createElement("label"),
				combo = document.createElement("select"),
				center = document.createElement("center"),
				botAuth = document.createElement("a"),
				botReset = document.createElement("a"),
				botClose = document.createElement("a"),
				padding = 20,
				loading = new Image(),
				input_challenge = document.createElement("input"),
				input_response = document.createElement("input"),
				input_certificate = document.createElement("input"),
				input_method = document.createElement("input"),
				bw = 500,
				bh = 120 + (this.instituicoes.length > 0 ? 20 : 0)

			container.id = "arisp-cnib-container";
			container.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
			container.style.position = "fixed";
			container.style.width = window.innerWidth+"px";
			container.style.height = window.innerHeight+"px";
			container.style.margin = "0";
			container.style.padding = "0";
			container.style.top = "0";
			container.style.left = "0";
			container.style.zIndex = "1000";

			authbox.style.backgroundColor = "#FFFFFF";
			authbox.style.position = "absolute";
			authbox.style.width = bw+"px";
			authbox.style.height = bh+"px";
			authbox.style.margin = "0";
			authbox.style.padding = padding+"px";
			authbox.style.top = parseInt((window.innerHeight - (bh + (padding * 2))) / 2) + "px";
			authbox.style.left = parseInt((window.innerWidth - (bw + (padding * 2))) / 2) + "px";
			authbox.style.zIndex = "1001";
			authbox.style.border = "1px solid #B6BBBF";
			authbox.style.borderRadius = parseInt(padding / 4) + "px";
			authbox.style.boxShadow = "8px 8px 8px -3px #666";

			titulo.innerHTML = this.titulo;
			titulo.style.margin = "0";
			titulo.style.padding = "0 0 20px";
			titulo.style.textAlign = "left";
			titulo.style.fontSize = "20px";
			titulo.style.fontWeight = "bold";
			titulo.style.fontFamily = "Arial";
			titulo.style.textTransform = "uppercase";
			titulo.style.color = "#4C7CBA";
			titulo.style.zIndex = "1003";
			titulo.style.outline = "none";
			titulo.style.border = "none";
			titulo.style.backgroundColor = "transparent";

			closeContainer = function() {
				this.blur();
				document.body.removeChild(container);
				return false;
			};

			fechar.innerHTML = "+";
			fechar.onclick = closeContainer;
			fechar.style.position = "absolute";
			fechar.style.display = "block";
			fechar.style.width = "26px";
			fechar.style.height = "26px";
			fechar.style.lineHeight = "26px";
			fechar.style.fontFamily = "Arial";
			fechar.style.fontSize = "25px";
			fechar.style.textAlign = "center";
			fechar.style.right = "10px";
			fechar.style.top = "10px";
			fechar.style.margin = "0";
			fechar.style.href = "#fechar";
			fechar.style.color = "#FFFFFF";
			fechar.style.backgroundColor = "#B6BBBF";
			fechar.style.borderRadius = "13px";
			fechar.style.cursor = "pointer";
			fechar.style.zIndex = "1002";
			fechar.style.transform ="rotate(45deg)";
			fechar.style.textDecoration = "none";

			input_challenge.id = "challenge-form-hidden";
			input_challenge.type = "hidden";
			input_challenge.name = "challenge";
			input_challenge.value = this.challenge;

			input_response.id = "response-form-hidden";
			input_response.type = "hidden";
			input_response.name = "signature";
			input_response.value = "";

			input_certificate.id = "certificate-form-hidden";
			input_certificate.type = "hidden";
			input_certificate.name = "certificate";
			input_certificate.value = "";

			input_method.id = "Method";
			input_method.type = "hidden";
			input_method.name = "Method";
			input_method.value = "new";

			label.innerHTML = "Selecione o certificado: ";
			label.for = "CertificateSelect";
			label.style.textTransform = "uppercase";
			label.style.fontWeight = "bold";
			label.style.fontSize = "13px";
			label.style.color = "#50535A";

			loading.src = __URL_IMAGES+"loading.gif";
			loading.id = "CertificateSelectLoading";
			loading.align = "top";

			combo.id = "CertificateSelect";
			combo.style.width = "280px";
			combo.style.fontSize = "12px";
			combo.style.display = "none";
			combo.style.padding = "5px";
			combo.style.marginTop = "-5px";
			combo.style.cssFloat = "right";
			combo.style.fontFamily = "Arial";
			combo.style.border = "1px solid #9CAFBF";
			combo.style.outline = "none";
			combo.style.textDecoration = "none";



			if (window.certificados) {
				var certificados = window.certificados;
				for (var i in certificados.certificates) {
					var o = document.createElement("option");
						o.value = certificados.certificates[i].thumbprint;
						o.innerHTML = certificados.certificates[i].subjectName+":"+certificados.certificates[i].cpf;
					combo.appendChild(o);
				};
				combo.style.display = "block";
			};

			certificates.textAlign = "left";
			certificates.fontFamily = "Arial";

			if (this.instituicoes.length > 0) {
				var	instLabel = document.createElement("label"),
					instCombo = document.createElement("select");

				instituicoes.style.margin = "15px 0 0";

				instLabel.innerHTML = "Selecione a institui????o: ";
				instLabel.for = "SelInstituicao";
				instLabel.style.textTransform = "uppercase";
				instLabel.style.fontWeight = "bold";
				instLabel.style.fontSize = "13px";
				instLabel.style.color = "#50535A";

				instCombo.id = "SelInstituicao";
				instCombo.style.width = "280px";
				instCombo.style.fontSize = "12px";
				instCombo.style.padding = "5px";
				instCombo.style.marginTop = "-5px";
				instCombo.style.cssFloat = "right";

				for (var i in this.instituicoes) {
					var	opt = document.createElement("option");
						opt.value = this.instituicoes[i].id_instituicao;
						opt.innerHTML = this.instituicoes[i].nome;
					instCombo.appendChild(opt);
				};

				instituicoes.appendChild(instLabel);
				instituicoes.appendChild(instCombo);
			};


			botAuth.href = "#autenticar";
			botAuth.innerHTML = "Autenticar";
			botAuth.onclick = function() {
				this.blur();
				ICPAutenticar();
				return false;
			};
			botReset.href = "#recarregar";
			botReset.innerHTML = "Recarregar";
			botReset.onclick = function() {
				this.blur();
				ICPCarregarCertificados(botClose);
				return false;
			};

			botClose.href = "#fechar";
			botClose.innerHTML = "Fechar";
			botClose.onclick = closeContainer;

			botCss = {
				textDecoration: "none",
				textTransform: "uppercase",
				textAlign: "center",
				cursor: "pointer",
				padding: "5px 20px 4px",
				width: "100px",
				margin: "20px 5px 0",
				fontSize: "12px",
				color: "#FFF",
				borderRadius: "5px",
				fontFamily: "Arial",
				backgroundColor: "#3C85C0"
			};

			function mOver () {
				this.style.backgroundColor = "#2149B9";
			};

			function mOut () {
				this.style.backgroundColor = "#3C85C0";
			};

			for (var s in botCss) {
				botAuth.style[s] = botCss[s];
				botReset.style[s] = botCss[s];
				botClose.style[s] = botCss[s];
			};

			botAuth.onmouseover = mOver;
			botReset.onmouseover = mOver;
			botClose.onmouseover = mOver;

			botAuth.onmouseout = mOut;
			botReset.onmouseout = mOut;
			botClose.onmouseout = mOut;

			center.style.padding = "30px 0";

			form.id = "ICPBravoLogin";
			form.method = "POST";
			form.action = this.authurl;
			form.target = "_self";

			certificates.appendChild(label);
			certificates.appendChild(combo);

			center.appendChild(botAuth);
			center.appendChild(botReset);
			center.appendChild(botClose);

			form.appendChild(input_challenge);
			form.appendChild(input_response);
			form.appendChild(input_certificate);
			form.appendChild(input_method);
			form.appendChild(certificates);
			form.appendChild(instituicoes);
			form.appendChild(center);

			authbox.appendChild(fechar);
			authbox.appendChild(titulo);
			authbox.appendChild(form);

			container.appendChild(authbox);

			document.body.appendChild(container);

			ICPCarregarCertificados();

			window.focus();
			document.body.focus();
			var sel = document.getElementById("CertificateSelect");
			if (sel) {
				sel.focus();
			};
		},
		styleSheet: function() {
			var ssCnt =	'applet#ICPBravoApplet {'+
							'height: 0px !important;'+
							'padding: 0px !important;'+
							'margin: 0px !important;'+
							'overflow: hidden;'+
							'position: absolute;'+
							'width: 0px !important;'+
							'top: -10000px;'+
							'left: -10000px;'+
						'}';
			$(document.createElement("style"))
				.html(ssCnt)
				.appendTo("head");
		},
		carrega: function(args) {
			this.styleSheet();
			var args = args || {};
			this.instituicoes = {};
			if (typeof(args.titulo) == "string") {
				this.titulo = args.titulo;
			};
			if (typeof(args.authurl) == "string") {
				this.authurl = args.authurl;
			};
			if (typeof(args.challenge) != "string") {
				throw("Voc?? deve especificar o challenge");
			};
			this.challenge = args.challenge;

			if (typeof(args.showbox) != "undefined") {
				this.showbox = args.showbox;
			};
			if (typeof(args.callback) == "function") {
				this.callback = args.callback;
			};

			if (typeof(args.instituicoes) == "object") {
				this.instituicoes = args.instituicoes;
			};


			var _ = this;
			CarregarPluginICP(_.authurl, _.challenge, function(){
				if (_.showbox === true) {
					_.autenticador();
				} else if (typeof(_.showbox) === "string") {
					var	div = document.getElementById(tid);
					div.innerHTML = _.showbox;
				} else if (typeof(_.showbox) === "object") {
					_.showbox.onclick = function() {
						this.blur();
						arispbravo.autenticador();
						return false;
					};
				};

				_.callback();
				_.callback = function(){};

			});
		}
	};

})();



