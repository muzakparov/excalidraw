(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{263:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),o=n(6),l=n(5),i=n(7),c=n(0),s=n.n(c),u=n(55),h=n.n(u),f=n(20);function d(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function v(e,t){t.sort((function(e,t){return e-t}));var n=!0;t.forEach((function(t,r){(n=n&&t===r)||d(e,t-1,t)}))}function m(e,t){var n=t.sort((function(e,t){return t-e})),r=!0;n.forEach((function(t,n){(r=r&&t===e.length-n-1)||d(e,t+1,t)}))}function p(e,t){t.sort((function(e,t){return e-t}));var n=t.map((function(t){return e[t]})),r=t.reverse().concat([0]);r.forEach((function(t,n){if(0!==n)for(var a=r[n-1]-1;a>=t;--a)e[a+n]=e[a]})),n.forEach((function(t,n){e[n]=t}))}function g(e,t){var n=t.sort((function(e,t){return t-e})),r=n.map((function(t){return e[t]}));(t=n.reverse().concat([e.length])).forEach((function(n,r){if(0!==r)for(var a=t[r-1]+1;a<n;++a)e[a-r]=e[a]})),r.forEach((function(t,n){e[e.length-n-1]=t}))}function y(){return Math.floor(Math.random()*Math.pow(2,31))}function w(e,t){var n=Math.random;Math.random=function(e){return function(){return(Math.pow(2,31)-1&(e=Math.imul(48271,e)))/Math.pow(2,31)}}(e);var r=t();return Math.random=n,r}function E(e,t,n,r,a,o,l,i,c){var s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,h={type:e,x:t,y:n,width:s,height:u,isSelected:!1,strokeColor:r,backgroundColor:a,fillStyle:o,strokeWidth:l,roughness:i,opacity:c,seed:y(),draw:function(e,t,n){}};return h}var k=n(11);function x(e,t,n,r,a,o){var l,i,c=a-n,s=o-r,u=c*c+s*s,h=-1;0!==u&&(h=((e-n)*c+(t-r)*s)/u),h<0?(l=n,i=r):h>1?(l=a,i=o):(l=n+h*c,i=r+h*s);var f=e-l,d=t-i;return Math.hypot(f,d)}function S(e,t,n,r,a){return[(e-n)*Math.cos(a)-(t-r)*Math.sin(a)+n,(e-n)*Math.sin(a)+(t-r)*Math.cos(a)+r]}function C(e){return e.width>=0?e.x:e.x+e.width}function b(e){return e.width>=0?e.x+e.width:e.x}function M(e){return e.height>=0?e.y:e.y+e.height}function B(e){return e.height>=0?e.y+e.height:e.y}function O(e){var t=Math.floor(e.width/2)+1,n=e.width,r=Math.floor(e.height/2)+1;return[t,0,n,r,t,e.height,0,r]}function Y(e){var t=e.width,n=e.height,r=Math.hypot(t-0,n-0),a=Math.min(30,r/2),o=t-(t-0)/r*a,l=n-(n-0)/r*a,i=S(o,l,t,n,-20*Math.PI/180),c=Object(k.a)(i,2),s=c[0],u=c[1],h=S(o,l,t,n,20*Math.PI/180),f=Object(k.a)(h,2);return[0,0,t,n,s,u,f[0],f[1]]}function X(e,t){var n=e.x,r=e.x+e.width,a=e.y,o=e.y+e.height,l={},i=e.width<0?8:-8,c=e.height<0?8:-8;return Math.abs(r-n)>40&&(l.n=[n+(r-n)/2+t.scrollX-4,a-4+t.scrollY+c,8,8],l.s=[n+(r-n)/2+t.scrollX-4,o-4+t.scrollY-c,8,8]),Math.abs(o-a)>40&&(l.w=[n-4+t.scrollX+i,a+(o-a)/2+t.scrollY-4,8,8],l.e=[r-4+t.scrollX-i,a+(o-a)/2+t.scrollY-4,8,8]),l.nw=[n-4+t.scrollX+i,a-4+t.scrollY+c,8,8],l.ne=[r-4+t.scrollX-i,a-4+t.scrollY+c,8,8],l.sw=[n-4+t.scrollX+i,o-4+t.scrollY-c,8,8],l.se=[r-4+t.scrollX-i,o-4+t.scrollY-c,8,8],"arrow"===e.type?{nw:l.nw,se:l.se}:l}function D(e,t,n){if("ellipse"===e.type){var r=Math.abs(t-e.x-e.width/2),a=Math.abs(n-e.y-e.height/2),o=.707,l=.707,i=Math.abs(e.width)/2,c=Math.abs(e.height)/2;return[0,1,2,3].forEach((function(e){var t=i*o,n=c*l,s=(i*i-c*c)*Math.pow(o,3)/i,u=(c*c-i*i)*Math.pow(l,3)/c,h=t-s,f=n-u,d=r-s,v=a-u,m=Math.hypot(f,h),p=Math.hypot(v,d);o=Math.min(1,Math.max(0,(d*m/p+s)/i)),l=Math.min(1,Math.max(0,(v*m/p+u)/c));var g=Math.hypot(l,o);o/=g,l/=g})),Math.hypot(i*o-r,c*l-a)<10}if("rectangle"===e.type){var s=C(e),u=b(e),h=M(e),f=B(e);return x(t,n,s,h,u,h)<10||x(t,n,u,h,u,f)<10||x(t,n,u,f,s,f)<10||x(t,n,s,f,s,h)<10}if("diamond"===e.type){t-=e.x,n-=e.y;var d=O(e),v=Object(k.a)(d,8),m=v[0],p=v[1],g=v[2],y=v[3],w=v[4],E=v[5],S=v[6],X=v[7];return x(t,n,m,p,g,y)<10||x(t,n,g,y,w,E)<10||x(t,n,w,E,S,X)<10||x(t,n,S,X,m,p)<10}if("arrow"===e.type){var D=Y(e),A=Object(k.a)(D,8),L=A[0],R=A[1],T=A[2],N=A[3],U=A[4],j=A[5],K=A[6],P=A[7];return x(t-=e.x,n-=e.y,U,j,T,N)<10||x(t,n,L,R,T,N)<10||x(t,n,K,P,T,N)<10}if("text"===e.type){var W=C(e),F=b(e),z=M(e),H=B(e);return t>=W&&t<=F&&n>=z&&n<=H}if("selection"===e.type)return console.warn("This should not happen, we need to investigate why it does."),!1;throw new Error("Unimplemented type "+e.type)}function A(e,t,n,r){if("text"===e.type)return!1;var a=X(e,r),o=Object.keys(a).filter((function(e){var o=a[e];return t+r.scrollX>=o[0]&&t+r.scrollX<=o[0]+o[2]&&n+r.scrollY>=o[1]&&n+r.scrollY<=o[1]+o[3]}));return o.length>0&&o[0]}function L(e){return"text"===e.type}var R=f.a.generator(null,null);function T(e){if("selection"===e.type)e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY,l=n.fillStyle;n.fillStyle="rgba(0, 0, 255, 0.10)",n.fillRect(e.x+a,e.y+o,e.width,e.height),n.fillStyle=l};else if("rectangle"===e.type){var t=w(e.seed,(function(){return R.rectangle(0,0,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));e.draw=function(n,r,a){var o=a.scrollX,l=a.scrollY;r.globalAlpha=e.opacity/100,r.translate(e.x+o,e.y+l),n.draw(t),r.translate(-e.x-o,-e.y-l),r.globalAlpha=1}}else if("diamond"===e.type){var n=w(e.seed,(function(){var t=O(e),n=Object(k.a)(t,8),r=n[0],a=n[1],o=n[2],l=n[3],i=n[4],c=n[5],s=n[6],u=n[7];return R.polygon([[r,a],[o,l],[i,c],[s,u]],{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));e.draw=function(t,r,a){var o=a.scrollX,l=a.scrollY;r.globalAlpha=e.opacity/100,r.translate(e.x+o,e.y+l),t.draw(n),r.translate(-e.x-o,-e.y-l),r.globalAlpha=1}}else if("ellipse"===e.type){var r=w(e.seed,(function(){return R.ellipse(e.width/2,e.height/2,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));e.draw=function(t,n,a){var o=a.scrollX,l=a.scrollY;n.globalAlpha=e.opacity/100,n.translate(e.x+o,e.y+l),t.draw(r),n.translate(-e.x-o,-e.y-l),n.globalAlpha=1}}else{if("arrow"===e.type){var a=Y(e),o=Object(k.a)(a,8),l=o[0],i=o[1],c=o[2],s=o[3],u=o[4],h=o[5],f=o[6],d=o[7],v={stroke:e.strokeColor,strokeWidth:e.strokeWidth,roughness:e.roughness},m=w(e.seed,(function(){return[R.line(u,h,c,s,v),R.line(l,i,c,s,v),R.line(f,d,c,s,v)]}));return void(e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY;n.globalAlpha=e.opacity/100,n.translate(e.x+a,e.y+o),m.forEach((function(e){return t.draw(e)})),n.translate(-e.x-a,-e.y-o),n.globalAlpha=1})}if(!L(e))throw new Error("Unimplemented type "+e.type);e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY;n.globalAlpha=e.opacity/100;var l=n.font;n.font=e.font;var i=n.fillStyle;n.fillStyle=e.strokeColor,n.fillText(e.text,e.x+a,e.y+e.actualBoundingBoxAscent+o),n.fillStyle=i,n.font=l,n.globalAlpha=1}}}function N(e,t,n,r,a){var o=1/0,l=0,i=1/0,c=0;e.forEach((function(e){o=Math.min(o,C(e)),l=Math.max(l,b(e)),i=Math.min(i,M(e)),c=Math.max(c,B(e))})),o+=r,l+=r,i+=a,c+=a;var s=Math.max(-o,0),u=Math.max(-(t-l),0),h=Math.max(-i,0),f=Math.max(-(n-c),0),d=null;(s||u)&&(d={x:Math.min(s+4,t-15-4),y:n-6-4,width:Math.max(t-u-s-8,15),height:6});var v=null;return(h||f)&&(v={x:t-6-4,y:Math.min(h+4,n-15-4),width:6,height:Math.max(n-f-h-12,15)}),{horizontal:d,vertical:v}}var U=n(36);function j(e,t,n,r,a,o){e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+a-o),e.quadraticCurveTo(t+r,n+a,t+r-o,n+a),e.lineTo(t+o,n+a),e.quadraticCurveTo(t,n+a,t,n+a-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath(),e.fill(),e.stroke()}function K(e){e.forEach((function(e){e.isSelected=!1}))}function P(e){for(var t=e.length-1;t>=0;--t)e[t].isSelected&&e.splice(t,1)}function W(e){var t=[];return e.forEach((function(e,n){e.isSelected&&t.push(n)})),t}var F=function(e){return e.some((function(e){return e.isSelected}))};function z(e,t){var n=Array.from(new Set(e.filter((function(e){return e.isSelected})).map((function(e){return t(e)}))));return 1===n.length?n[0]:null}function H(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=a.offsetX,l=a.offsetY,i=a.renderScrollbars,c=void 0===i||i,s=a.renderSelection,u=void 0===s||s;if(n){var h=n.getContext("2d"),f=h.fillStyle;"string"===typeof r.viewBackgroundColor?(h.fillStyle=r.viewBackgroundColor,h.fillRect(0,0,n.width,n.height)):h.clearRect(0,0,n.width,n.height),h.fillStyle=f;var d=W(e);if(r=Object(U.a)({},r,{scrollX:"number"===typeof o?o:r.scrollX,scrollY:"number"===typeof l?l:r.scrollY}),e.forEach((function(e){if(e.draw(t,h,r),u&&e.isSelected){var n=C(e),a=b(e),o=M(e),l=B(e),i=h.getLineDash();if(h.setLineDash([8,4]),h.strokeRect(n-4+r.scrollX,o-4+r.scrollY,a-n+8,l-o+8),h.setLineDash(i),"text"!==e.type&&1===d.length){var c=X(e,r);Object.values(c).forEach((function(e){h.strokeRect(e[0],e[1],e[2],e[3])}))}}})),c){var v=N(e,h.canvas.width/window.devicePixelRatio,h.canvas.height/window.devicePixelRatio,r.scrollX,r.scrollY),m=h.strokeStyle;h.fillStyle="rgba(0,0,0,0.3)",h.strokeStyle="rgba(255,255,255,0.8)",[v.horizontal,v.vertical].forEach((function(e){e&&j(h,e.x,e.y,e.width,e.height,3)})),h.strokeStyle=m,h.fillStyle=f}}}var I=n(92);function J(e,t){var n=document.createElement("a");n.setAttribute("download",e),n.setAttribute("href",t),n.click(),n.remove()}function V(e,t,n){try{return t&&(e.splice.apply(e,[0,e.length].concat(Object(I.a)("string"===typeof t?JSON.parse(t):t))),e.forEach((function(e){e.fillStyle=e.fillStyle||"hachure",e.strokeWidth=e.strokeWidth||1,e.roughness=e.roughness||1,e.opacity=null===e.opacity||void 0===e.opacity?100:e.opacity,T(e)}))),n?JSON.parse(n):null}catch(r){return e.splice(0,e.length),null}}function q(e,t,n){for(var r=null,a=e.length-1;a>=0;--a)if(D(e[a],t,n)){r=e[a];break}return r}function Z(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement}var G=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={value:e.value,edit:!1},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"handleEdit",value:function(e){this.setState({value:e.target.value})}},{key:"handleBlur",value:function(){var e=this.state.value;e?(this.props.onChange(e),this.setState({edit:!1})):this.setState({value:this.props.value,edit:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.value,r=t.edit;return s.a.createElement(c.Fragment,null,r?s.a.createElement("input",{className:"project-name-input",name:"name",maxLength:25,value:n,onChange:function(t){return e.handleEdit(t)},onBlur:function(){return e.handleBlur()},onKeyDown:function(t){"Enter"===t.key&&e.handleBlur()},autoFocus:!0}):s.a.createElement("span",{onClick:function(){return e.setState({edit:!0})},className:"project-name"},n))}}]),t}(c.Component);function Q(e){var t=e.options,n=e.value,r=e.onChange;return s.a.createElement("div",{className:"buttonList"},t.map((function(e){return s.a.createElement("button",{key:e.text,onClick:function(){return r(e.value)},className:n===e.value?"active":""},e.text)})))}var $=n(91);function ee(e){var t=e.color,n=e.onChange,r=s.a.useState(!1),a=Object(k.a)(r,2),o=a[0],l=a[1];return s.a.createElement("div",null,s.a.createElement("button",{className:"swatch",style:t?{backgroundColor:t}:void 0,onClick:function(){return l(!o)}}),o?s.a.createElement("div",{className:"popover"},s.a.createElement("div",{className:"cover",onClick:function(){return l(!1)}}),s.a.createElement($.TwitterPicker,{colors:["#000000","#ABB8C3","#FFFFFF","#FF6900","#FCB900","#00D084","#8ED1FC","#0693E3","#EB144C","#F78DA7","#9900EF"],width:"205px",color:t||void 0,onChange:function(e){n(e.hex)}})):null,s.a.createElement("input",{type:"text",className:"swatch-input",value:t||"",onPaste:function(e){return n(e.clipboardData.getData("text"))},onChange:function(e){return n(e.target.value)}}))}var te=[{icon:s.a.createElement("svg",{viewBox:"0 0 320 512"},s.a.createElement("path",{d:"M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"})),value:"selection"},{icon:s.a.createElement("svg",{viewBox:"0 0 448 512"},s.a.createElement("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"})),value:"rectangle"},{icon:s.a.createElement("svg",{viewBox:"0 0 223.646 223.646"},s.a.createElement("path",{d:"M111.823 0L16.622 111.823 111.823 223.646 207.025 111.823z"})),value:"diamond"},{icon:s.a.createElement("svg",{viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"})),value:"ellipse"},{icon:s.a.createElement("svg",{viewBox:"0 0 448 512"},s.a.createElement("path",{d:"M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"})),value:"arrow"},{icon:s.a.createElement("svg",{viewBox:"0 0 448 512"},s.a.createElement("path",{d:"M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"})),value:"text"}],ne=te.map((function(e){return e.value[0]}));function re(e){return te.reduce((function(t,n){return n.value[0]!==e?t:n.value}),"selection")}var ae=function(){function e(){Object(r.a)(this,e),this.recording=!0,this.stateHistory=[],this.redoStack=[]}return Object(a.a)(e,[{key:"generateCurrentEntry",value:function(e){return JSON.stringify(e.map((function(e){return Object(U.a)({},e,{isSelected:!1})})))}},{key:"pushEntry",value:function(e){this.stateHistory.length>0&&this.stateHistory[this.stateHistory.length-1]===e||this.stateHistory.push(e)}},{key:"restoreEntry",value:function(e,t){var n=JSON.parse(t);e.splice(0,e.length),n.forEach((function(t){T(t),e.push(t)})),this.skipRecording()}},{key:"clearRedoStack",value:function(){this.redoStack.splice(0,this.redoStack.length)}},{key:"redoOnce",value:function(e){var t=this.generateCurrentEntry(e),n=this.redoStack.pop();void 0!==n&&(this.restoreEntry(e,n),this.stateHistory.push(t))}},{key:"undoOnce",value:function(e){var t=this.generateCurrentEntry(e),n=this.stateHistory.pop();t===n&&(n=this.stateHistory.pop()),void 0!==n&&(this.restoreEntry(e,n),this.redoStack.push(t))}},{key:"isRecording",value:function(){return this.recording}},{key:"skipRecording",value:function(){this.recording=!1}},{key:"resumeRecording",value:function(){this.recording=!0}}]),e}(),oe=(n(263),{elements:Array.of()}.elements),le={history:new ae}.history,ie="excalidraw-".concat(function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),o=e.getMinutes(),l=e.getSeconds();return"".concat(t).concat(n).concat(r).concat(a).concat(o).concat(l)}()),ce="ArrowLeft",se="ArrowRight",ue="ArrowDown",he="ArrowUp",fe="Escape",de="Delete",ve="Backspace";function me(e){return e===ce||e===se||e===ue||e===he}function pe(){document.documentElement.style.cursor=""}function ge(e){pe();var t=prompt("What text do you want?");if(null===t||""===t)return!1;e.text=t,e.font="".concat(20,"px Virgil");var n=be.font;be.font=e.font;var r=be.measureText(e.text),a=r.width,o=r.actualBoundingBoxAscent||20,l=r.actualBoundingBoxDescent||0;e.actualBoundingBoxAscent=o,be.font=n;var i=o+l;return e.x-=a/2,e.y-=o,e.width=a,e.height=i,!0}var ye=-1,we=-1,Ee=null,ke=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={draggingElement:null,resizingElement:null,elementType:"selection",exportBackground:!0,currentItemStrokeColor:"#000000",currentItemBackgroundColor:"#ffffff",viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0,name:ie},n.onResize=function(){n.forceUpdate()},n.onKeyDown=function(e){if(!_(e.target))if(e.key===fe)K(oe),n.forceUpdate(),e.preventDefault();else if(e.key===ve||e.key===de)P(oe),n.forceUpdate(),e.preventDefault();else if(me(e.key)){var t=e.shiftKey?5:1;oe.forEach((function(n){n.isSelected&&(e.key===ce?n.x-=t:e.key===se?n.x+=t:e.key===he?n.y-=t:e.key===ue&&(n.y+=t))})),n.forceUpdate(),e.preventDefault()}else e.metaKey&&e.shiftKey&&e.altKey&&"KeyB"===e.code?(n.moveOneLeft(),e.preventDefault()):e.metaKey&&e.shiftKey&&"KeyB"===e.code?(n.moveAllLeft(),e.preventDefault()):e.metaKey&&e.shiftKey&&e.altKey&&"KeyF"===e.code?(n.moveOneRight(),e.preventDefault()):e.metaKey&&e.shiftKey&&"KeyF"===e.code?(n.moveAllRight(),e.preventDefault()):e.metaKey&&"KeyA"===e.code?(oe.forEach((function(e){e.isSelected=!0})),n.forceUpdate(),e.preventDefault()):ne.includes(e.key.toLowerCase())?n.setState({elementType:re(e.key)}):e.metaKey&&"KeyZ"===e.code&&(e.shiftKey?le.redoOnce(oe):le.undoOnce(oe),n.forceUpdate(),e.preventDefault())},n.deleteSelectedElements=function(){P(oe),n.forceUpdate()},n.clearCanvas=function(){window.confirm("This will clear the whole canvas. Are you sure?")&&(oe.splice(0,oe.length),n.setState({viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0}),n.forceUpdate())},n.moveAllLeft=function(){p(oe,W(oe)),n.forceUpdate()},n.moveOneLeft=function(){v(oe,W(oe)),n.forceUpdate()},n.moveAllRight=function(){g(oe,W(oe)),n.forceUpdate()},n.moveOneRight=function(){m(oe,W(oe)),n.forceUpdate()},n.removeWheelEventListener=void 0,n.changeProperty=function(e){oe.forEach((function(t){t.isSelected&&(e(t),T(t))})),n.forceUpdate()},n.changeOpacity=function(e){n.changeProperty((function(t){return t.opacity=+e.target.value}))},n.changeStrokeColor=function(e){n.changeProperty((function(t){return t.strokeColor=e})),n.setState({currentItemStrokeColor:e})},n.changeBackgroundColor=function(e){n.changeProperty((function(t){return t.backgroundColor=e})),n.setState({currentItemBackgroundColor:e})},n.handleWheel=function(e){e.preventDefault();var t=e.deltaX,r=e.deltaY;n.setState((function(e){return{scrollX:e.scrollX-t,scrollY:e.scrollY-r}}))},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("resize",this.onResize,!1);var e=V(oe,localStorage.getItem("excalidraw"),localStorage.getItem("excalidraw-state"));e&&this.setState(e)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("resize",this.onResize,!1)}},{key:"updateProjectName",value:function(e){this.setState({name:e})}},{key:"render",value:function(){var e=this,t=window.innerWidth-250,n=window.innerHeight-0;return s.a.createElement("div",{className:"container",onCut:function(t){t.clipboardData.setData("text/plain",JSON.stringify(oe.filter((function(e){return e.isSelected})))),P(oe),e.forceUpdate(),t.preventDefault()},onCopy:function(e){e.clipboardData.setData("text/plain",JSON.stringify(oe.filter((function(e){return e.isSelected})))),e.preventDefault()},onPaste:function(t){var n,r=t.clipboardData.getData("text");try{n=JSON.parse(r)}catch(t){}Array.isArray(n)&&n.length>0&&n[0].type&&(K(oe),n.forEach((function(e){e.x+=10,e.y+=10,e.seed=y(),T(e),oe.push(e)})),e.forceUpdate()),t.preventDefault()}},s.a.createElement("div",{className:"sidePanel"},s.a.createElement("h4",null,"Shapes"),s.a.createElement("div",{className:"panelTools"},te.map((function(t){var n=t.value,r=t.icon;return s.a.createElement("label",{key:n,className:"tool",title:"".concat(Z(n)," - ").concat(Z(n)[0])},s.a.createElement("input",{type:"radio",checked:e.state.elementType===n,onChange:function(){e.setState({elementType:n}),K(oe),document.documentElement.style.cursor="text"===n?"text":"crosshair",e.forceUpdate()}}),s.a.createElement("div",{className:"toolIcon"},r))}))),F(oe)&&s.a.createElement("div",{className:"panelColumn"},s.a.createElement("h4",null,"Selection"),s.a.createElement("div",{className:"buttonList"},s.a.createElement("button",{onClick:this.moveOneRight},"Bring forward"),s.a.createElement("button",{onClick:this.moveAllRight},"Bring to front"),s.a.createElement("button",{onClick:this.moveOneLeft},"Send backward"),s.a.createElement("button",{onClick:this.moveAllLeft},"Send to back")),s.a.createElement("h5",null,"Stroke Color"),s.a.createElement(ee,{color:z(oe,(function(e){return e.strokeColor})),onChange:function(t){return e.changeStrokeColor(t)}}),oe.some((function(e){return e.isSelected&&("rectangle"===e.type||"ellipse"===e.type||"diamond"===e.type)}))&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",null,"Background Color"),s.a.createElement(ee,{color:z(oe,(function(e){return e.backgroundColor})),onChange:function(t){return e.changeBackgroundColor(t)}}),s.a.createElement("h5",null,"Fill"),s.a.createElement(Q,{options:[{value:"solid",text:"Solid"},{value:"hachure",text:"Hachure"},{value:"cross-hatch",text:"Cross-hatch"}],value:z(oe,(function(e){return e.fillStyle})),onChange:function(t){e.changeProperty((function(e){e.fillStyle=t}))}})),function(e){return e.some((function(e){return e.isSelected&&("rectangle"===e.type||"ellipse"===e.type||"diamond"===e.type||"arrow"===e.type)}))}(oe)&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",null,"Stroke Width"),s.a.createElement(Q,{options:[{value:1,text:"Thin"},{value:2,text:"Bold"},{value:4,text:"Extra Bold"}],value:z(oe,(function(e){return e.strokeWidth})),onChange:function(t){e.changeProperty((function(e){e.strokeWidth=t}))}}),s.a.createElement("h5",null,"Sloppiness"),s.a.createElement(Q,{options:[{value:0,text:"Draftsman"},{value:1,text:"Artist"},{value:3,text:"Cartoonist"}],value:z(oe,(function(e){return e.roughness})),onChange:function(t){return e.changeProperty((function(e){e.roughness=t}))}})),s.a.createElement("h5",null,"Opacity"),s.a.createElement("input",{type:"range",min:"0",max:"100",onChange:this.changeOpacity,value:z(oe,(function(e){return e.opacity}))||0}),s.a.createElement("button",{onClick:this.deleteSelectedElements},"Delete selected")),s.a.createElement("h4",null,"Canvas"),s.a.createElement("div",{className:"panelColumn"},s.a.createElement("h5",null,"Canvas Background Color"),s.a.createElement(ee,{color:this.state.viewBackgroundColor,onChange:function(t){return e.setState({viewBackgroundColor:t})}}),s.a.createElement("button",{onClick:this.clearCanvas,title:"Clear the canvas & reset background color"},"Clear canvas")),s.a.createElement("h4",null,"Export"),s.a.createElement("div",{className:"panelColumn"},s.a.createElement("h5",null,"Name"),this.state.name&&s.a.createElement(G,{value:this.state.name,onChange:function(t){return e.updateProjectName(t)}}),s.a.createElement("h5",null,"Image"),s.a.createElement("button",{onClick:function(){!function(e,t,n){var r=n.exportBackground,a=n.exportPadding,o=void 0===a?10:a,l=n.viewBackgroundColor,i=n.name;if(!e.length)return window.alert("Cannot export empty canvas.");var c=1/0,s=0,u=1/0,h=0;function d(e,t){return Math.abs(e>t?e-t:t-e)}e.forEach((function(e){c=Math.min(c,C(e)),s=Math.max(s,b(e)),u=Math.min(u,M(e)),h=Math.max(h,B(e))}));var v=document.createElement("canvas");v.style.display="none",document.body.appendChild(v),v.width=d(c,s)+2*o,v.height=d(u,h)+2*o,H(e,f.a.canvas(v),v,{viewBackgroundColor:r?l:null,scrollX:0,scrollY:0},{offsetX:-c+o,offsetY:-u+o,renderScrollbars:!1,renderSelection:!1}),J("".concat(i,".png"),v.toDataURL("image/png")),v!==t&&v.remove()}(oe,Se,e.state)}},"Export to png"),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.exportBackground,onChange:function(t){e.setState({exportBackground:t.target.checked})}}),"background"),s.a.createElement("h5",null,"Scene"),s.a.createElement("button",{onClick:function(){!function(e,t){var n=JSON.stringify({version:1,source:window.location.origin,elements:e});J("".concat(t,".json"),"data:text/plain;charset=utf-8,"+encodeURIComponent(n))}(oe,e.state.name)}},"Save as..."),s.a.createElement("button",{onClick:function(){(function(e){var t=document.createElement("input"),n=new FileReader;return t.type="file",t.accept=".json",t.onchange=function(){t.files.length?n.readAsText(t.files[0],"utf8"):alert("A file was not selected.")},t.click(),new Promise((function(t){n.onloadend=function(){if(n.readyState===FileReader.DONE){var r=JSON.parse(n.result);V(e,r.elements,null),t()}}}))})(oe).then((function(){return e.forceUpdate()}))}},"Load file..."))),s.a.createElement("canvas",{id:"canvas",style:{width:t,height:n},width:t*window.devicePixelRatio,height:n*window.devicePixelRatio,ref:function(r){e.removeWheelEventListener&&(e.removeWheelEventListener(),e.removeWheelEventListener=void 0),r&&(r.addEventListener("wheel",e.handleWheel,{passive:!1}),e.removeWheelEventListener=function(){return r.removeEventListener("wheel",e.handleWheel)},t===ye&&n===we||(ye=t,we=n,r.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio)))},onMouseDown:function(r){if(null!==Ee&&Ee(r),0===r.button){r.preventDefault(),_(document.activeElement)&&document.activeElement.blur();var a=function(e,t,n,r,a,o,l){var i=N(e,r,a,o,l),c=[i.horizontal,i.vertical].map((function(e){return e&&e.x<=t&&t<=e.x+e.width&&e.y<=n&&n<=e.y+e.height})),s=Object(k.a)(c,2);return{isOverHorizontalScrollBar:s[0],isOverVerticalScrollBar:s[1]}}(oe,r.clientX-250,r.clientY-0,t,n,e.state.scrollX,e.state.scrollY),o=a.isOverHorizontalScrollBar,l=a.isOverVerticalScrollBar,i=r.clientX-250-e.state.scrollX,c=r.clientY-0-e.state.scrollY,s=E(e.state.elementType,i,c,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor,"hachure",1,1,100),u=!1,h=!1,f=!1;if("selection"===e.state.elementType){var d=oe.find((function(t){return A(t,i,c,{scrollX:e.state.scrollX,scrollY:e.state.scrollY,viewBackgroundColor:e.state.viewBackgroundColor})}));if(e.setState({resizingElement:d||null}),d)u=A(d,i,c,{scrollX:e.state.scrollX,scrollY:e.state.scrollY,viewBackgroundColor:e.state.viewBackgroundColor}),document.documentElement.style.cursor="".concat(u,"-resize"),f=!0;else{var v=q(oe,i,c);v?v.isSelected||(r.shiftKey||K(oe),v.isSelected=!0):K(oe),(h=F(oe))&&(document.documentElement.style.cursor="move")}}if(!L(s)||ge(s)){T(s),oe.push(s),"text"===e.state.elementType?(e.setState({draggingElement:null,elementType:"selection"}),s.isSelected=!0):e.setState({draggingElement:s});var m=i,p=c;(o||l)&&(m=r.clientX-250,p=r.clientY-0);var g=function(t){if(t.target instanceof HTMLElement){if(o){var n=t.clientX-250,r=n-m;return e.setState((function(e){return{scrollX:e.scrollX-r}})),void(m=n)}if(l){var a=t.clientY-0,i=a-p;return e.setState((function(e){return{scrollY:e.scrollY-i}})),void(p=a)}if(f&&e.state.resizingElement){var c=e.state.resizingElement,s=oe.filter((function(e){return e.isSelected}));if(1===s.length){var d=t.clientX-250-e.state.scrollX,v=t.clientY-0-e.state.scrollY;return s.forEach((function(e){switch(u){case"nw":e.width+=e.x-m,e.height+=e.y-p,e.x=m,e.y=p;break;case"ne":e.width=m-e.x,e.height+=e.y-p,e.y=p;break;case"sw":e.width+=e.x-m,e.x=m,e.height=p-e.y;break;case"se":e.width+=d-m,t.shiftKey?e.height=e.width:e.height+=v-p;break;case"n":e.height+=e.y-p,e.y=p;break;case"w":e.width+=e.x-m,e.x=m;break;case"s":e.height=p-e.y;break;case"e":e.width=m-e.x}c.x=e.x,c.y=e.y,T(c)})),m=d,p=v,le.skipRecording(),void e.forceUpdate()}}if(h){var g=oe.filter((function(e){return e.isSelected}));if(g.length){var y=t.clientX-250-e.state.scrollX,w=t.clientY-0-e.state.scrollY;return g.forEach((function(e){e.x+=y-m,e.y+=w-p})),m=y,p=w,le.skipRecording(),void e.forceUpdate()}}var E=e.state.draggingElement;if(E){var k=t.clientX-250-E.x-e.state.scrollX,x=t.clientY-0-E.y-e.state.scrollY;E.width=k,E.height=t.shiftKey?Math.abs(k)*Math.sign(x):x,T(E),"selection"===e.state.elementType&&function(e,t){var n=C(t),r=b(t),a=M(t),o=B(t);e.forEach((function(e){var t=C(e),l=b(e),i=M(e),c=B(e);e.isSelected="selection"!==e.type&&n<=t&&a<=i&&r>=l&&o>=c}))}(oe,E),le.skipRecording(),e.forceUpdate()}}},y=function t(n){var r=e.state,a=r.draggingElement,o=r.elementType;if(Ee=null,window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",t),pe(),null===a)return K(oe),void e.forceUpdate();"selection"===o?(h&&(h=!1),oe.pop()):a.isSelected=!0,e.setState({draggingElement:null,elementType:"selection"}),e.forceUpdate()};Ee=y,window.addEventListener("mousemove",g),window.addEventListener("mouseup",y),le.skipRecording(),e.forceUpdate()}}},onDoubleClick:function(t){var n=t.clientX-250-e.state.scrollX,r=t.clientY-0-e.state.scrollY;if(!q(oe,n,r)){var a=E("text",n,r,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor,"hachure",1,1,100);ge(a)&&(T(a),oe.push(a),e.setState({draggingElement:null,elementType:"selection"}),a.isSelected=!0,e.forceUpdate())}}}))}},{key:"componentDidUpdate",value:function(){var e,t;H(oe,Ce,Se,{scrollX:this.state.scrollX,scrollY:this.state.scrollY,viewBackgroundColor:this.state.viewBackgroundColor}),e=oe,t=this.state,localStorage.setItem("excalidraw",JSON.stringify(e)),localStorage.setItem("excalidraw-state",JSON.stringify(t)),le.isRecording()&&(le.pushEntry(le.generateCurrentEntry(oe)),le.clearRedoStack()),le.resumeRecording()}}]),t}(s.a.Component),xe=document.getElementById("root");h.a.render(s.a.createElement(ke,null),xe);var Se=document.getElementById("canvas"),Ce=f.a.canvas(Se),be=Se.getContext("2d");h.a.render(s.a.createElement(ke,null),xe)},93:function(e,t,n){e.exports=n(264)}},[[93,1,2]]]);
//# sourceMappingURL=main.4f4a84a1.chunk.js.map