!function(e){var t={};function i(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);var o={MosaicoContainer:document.querySelector(".mosaicogrid"),MosaicoHeader:document.querySelector(".mosaico_header"),HeaderContainer:document.querySelector(".header"),TagSelectors:document.getElementsByClassName("TagSelector")},r=[{imgPath:"images/caustics.jpg",link:"http://domenicobrz.github.io/webgl/projects/dispersion-caustics/",description:"",tags:["webgl"]},{imgPath:"images/sidescroller.jpg",link:"http://domenicobrz.github.io/webgl/projects/Sidescroller anim/",description:"",tags:["webgl"]},{imgPath:"images/volumetricart.png",link:"http://domenicobrz.github.io/webgl/projects/Volumetric art/",description:"",tags:["webgl"]},{imgPath:"images/frontend2.jpg",link:"http://domenicobrz.github.io/webgl/projects/frontend 2/",description:"",tags:["threejs","misc"]},{imgPath:"images/webglheader.jpg",link:"http://domenicobrz.github.io/webgl/projects/webgl header/",description:"",tags:["webgl"]},{imgPath:"images/wolfheader.jpg",link:"http://domenicobrz.github.io/webgl/projects/wolf-header/",description:"",tags:["threejs"]},{imgPath:"images/thematrix.jpg",link:"http://domenicobrz.github.io/webgl/projects/enter the matrix/",description:"",tags:["webgl"]},{imgPath:"images/ssr.png",link:"http://domenicobrz.github.io/webgl/projects/SSR/",description:"",tags:["webgl"]},{imgPath:"images/glassabsorption.jpg",link:"http://domenicobrz.github.io/webgl/projects/glass-absorption/",description:"",tags:["threejs"]},{imgPath:"images/2dsoftshadows.jpg",link:"http://domenicobrz.github.io/webgl/projects/2D soft shadows/",description:"",tags:["webgl","geometry"]},{imgPath:"images/flyingsimulator.jpg",link:"http://domenicobrz.github.io/webgl/projects/flying simulation/",description:"",tags:["webgl"]},{imgPath:"images/marchingcubes.jpg",link:"http://domenicobrz.github.io/webgl/projects/marching cubes/",description:"",tags:["webgl","geometry"]},{imgPath:"images/cpufluid.jpg",link:"http://domenicobrz.github.io/webgl/projects/CPU Fluid simulation/",description:"",tags:["webgl"]},{imgPath:"images/audiowaves.jpg",link:"http://domenicobrz.github.io/webgl/projects/Wavelengths visualizer/",description:"",tags:["webgl"]},{imgPath:"images/reflections.jpg",link:"http://domenicobrz.github.io/webgl/projects/Reflections/",description:"",tags:["webgl"]},{imgPath:"images/dxfparser.jpg",link:"http://domenicobrz.github.io/webgl/projects/DXF-Parser/",description:"",tags:["webgl"]},{imgPath:"images/marblenoise.jpg",link:"http://domenicobrz.github.io/webgl/projects/Marble noise experiment/",description:"",tags:["webgl"]},{imgPath:"images/noisefield.jpg",link:"http://domenicobrz.github.io/webgl/projects/Noisefield/",description:"",tags:["webgl"]},{imgPath:"images/tdv.jpg",link:"http://domenicobrz.github.io/webgl/projects/Thomas de vos/",description:"",tags:["webgl"]},{imgPath:"images/mainpage1.jpg",link:"http://domenicobrz.github.io/webgl/projects/testportfolio/",description:"",tags:["webgl","geometry","misc"]},{imgPath:"images/mainpage2.jpg",link:"http://domenicobrz.github.io/webgl/projects/testportfolio2/",description:"",tags:["webgl","geometry"]},{imgPath:"images/dofcannon.jpg",link:"http://domenicobrz.github.io/webgl/projects/Physics Mouse/",description:"",tags:["threejs"]},{imgPath:"images/threedof.jpg",link:"http://domenicobrz.github.io/webgl/projects/threejs DOF/",description:"",tags:["threejs"]},{imgPath:"images/threetest1.jpg",link:"http://domenicobrz.github.io/webgl/projects/ValueNoiseModel/",description:"",tags:["threejs","misc"]},{imgPath:"images/variablelines.jpg",link:"https://github.com/Domenicobrz/Variable-width-lines-algorithm",description:"",tags:["webgl","geometry"]},{imgPath:"images/webglclock.jpg",link:"https://github.com/Domenicobrz/WebGL-clock-widget",description:"",tags:["webgl","misc"]},{imgPath:"images/bpshadows.jpg",link:"https://github.com/Domenicobrz/WebGL-Soft-shadows-through-backprojection",description:"",tags:["webgl"]},{imgPath:"images/dualcontouring.jpg",link:"https://github.com/Domenicobrz/Dual-Contouring-javascript-implementation",description:"",tags:["webgl","misc","geometry"]},{imgPath:"images/webglpathtracer.jpg",link:"http://domenicobrz.github.io/webgl/projects/RTgpu/",description:"",tags:["webgl"]},{imgPath:"images/lineint.jpg",link:"https://github.com/Domenicobrz/Line-Integral-Convolution",description:"",tags:["webgl","misc"]}],n=r;function a(e){if(n=[],"all"!=e)for(var t=0;t<r.length;t++)r[t].tags.includes(e)&&n.push(r[t]);else n=r}var s=!1,g=!1;var l,c,p=2,h=20,d=0,m=0;function b(e){!function(){for(;o.MosaicoContainer.firstChild;)o.MosaicoContainer.removeChild(o.MosaicoContainer.firstChild);u=f,d=0}(),l=h*e,c=h*(e+1),n.length<c&&(c=n.length),m=e,requestAnimationFrame(v)}var u,f=0,w=1,j=2;function v(){if(!(d+l>=c)){if(requestAnimationFrame(v),u===f){var e=document.createElement("div");e.className="mosaicogrid_cell";var t=document.createElement("a");t.setAttribute("href",n[d+l].link),t.setAttribute("target","_blank"),u=w;var i=new Image;i.onload=function(){y(!1),u=j},i.src=n[d+l].imgPath,e.appendChild(t),t.appendChild(i),o.MosaicoContainer.appendChild(e)}u===j&&(d++,u=f)}}function y(e){var t=innerWidth-2*p;(function(){if(s)return g;s=!0;var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?(g=!0,!0):/android/i.test(e)?(g=!0,!0):/iPad|iPhone|iPod/.test(e)&&!window.MSStream?(g=!0,!0):(g=!1,!1)})()&&(t=Math.min(innerWidth,outerWidth)-2*p),innerWidth>600&&(t=580-2*p),innerWidth>900&&(t=700),innerWidth>1200&&(t=770),innerWidth>1400&&(t=820),innerWidth>1600&&(t=1050),o.MosaicoContainer.style.width=t+"px",o.MosaicoHeader.style.width=t+"px";var i=o.MosaicoContainer.getElementsByClassName("mosaicogrid_cell"),r=[0,0];innerWidth>900&&r.push(0),innerWidth>1200&&r.push(0);for(var n=t/r.length-p,a=0;a<i.length;a++){for(var l=0,c=1;c<r.length;c++)r[c]<r[l]&&(l=c);var h=i[a],m=h.firstChild,b=m.firstChild.naturalWidth,u=m.firstChild.naturalHeight;h.style.width=n+"px";var f=Math.round(n/b*u);e?(h.style.top=r[l]+"px",h.style.left=t/r.length*l+"px",h.style.height=f+"px",h.style.opacity=1):a===d&&P(h,r[l],t/r.length*l,f),r[l]+=f+p}var w=0;for(a=0;a<r.length;a++)r[a]>w&&(w=r[a]);o.MosaicoContainer.style.height=w+"px"}function P(e,t,i,o){e.style.top=t-200+"px",e.style.left=i+"px",e.style.height=o+"px",e.style.opacity=0;var r=function(e,t,i,o){return function(){void 0!==e&&(e.style.top=t+"px",e.style.left=i+"px",e.style.height=o+"px",e.style.opacity=1)}}(e,t,i,o);setTimeout(r,50)}window.addEventListener("resize",function(){y(!0)}),window.addEventListener("keydown",function(e){"k"==e.key&&b((m+1)%2)});var k=document.querySelector(".paginator_container"),z=0;function C(){for(;k.firstChild;)k.removeChild(k.firstChild);for(var e=Math.floor((n.length-1)/h)+1,t=0;t<e;t++){var i=document.createElement("a");i.className=t==z?"paginator_page_selector active":"paginator_page_selector",i.textContent=""+(t+1),i.setAttribute("page",""+(t+1)),i.setAttribute("href","#mosaico_header"),i.addEventListener("click",function(e){var t=parseInt(e.target.getAttribute("page"))-1;if(t!==z){z=t;for(var i=0;i<k.children.length;i++)k.children[i].className="paginator_page_selector";e.target.className="paginator_page_selector active",b(z)}}),k.appendChild(i)}}!function(){for(var e=0;e<o.TagSelectors.length;e++)o.TagSelectors[e].addEventListener("click",function(e){for(var t=0;t<o.TagSelectors.length;t++)o.TagSelectors[t].className="TagSelector";e.target.className="TagSelector active",a(e.target.getAttribute("tag")),z=0,C(),b(0)});C(),b(z)}()}]);