(()=>{"use strict";var r={n:a=>{var t=a&&a.__esModule?()=>a.default:()=>a;return r.d(t,{a:t}),t},d:(a,t)=>{for(var e in t)r.o(t,e)&&!r.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:t[e]})},o:(r,a)=>Object.prototype.hasOwnProperty.call(r,a)};const a=require("express");var t=r.n(a);class e{constructor(r,a){this.data=r,this.data2=a}cuadrado(){return 4*this.data}circulo(){return this.data,14}rectangulo(){return"number"==typeof this.data2?2*(this.data+this.data2):null}}class o{constructor(r,a){this.data=r,this.data2=a}cuadrado(){return this.data*this.data}circulo(){return this.data,this.data,14}rectangulo(){return"number"==typeof this.data2?this.data*this.data2:null}}const u=t()();u.get("/cuadrado",((r,a)=>{const{lado:t,operacion:u}=r.query,c={figura:"Cuadrado",calculo:u,entryParams:t,result:"perimetro"===u?new e(Number(t)).cuadrado():new o(Number(t)).cuadrado()};a.json(c)})),u.get("/circulo",((r,a)=>{const{radio:t,operacion:u}=r.query,c={figura:"Circulo",calculo:u,entryParams:t,result:"perimetro"===u?new e(Number(t)).circulo():new o(Number(t)).circulo()};a.json(c)})),u.get("/rectangulo",((r,a)=>{const{ladoUno:t,ladoDos:u,operacion:c}=r.query,n={figura:"Rectangulo",calculo:c,entryParams:[t,u],result:"perimetro"===c?new e(Number(t),Number(u)).rectangulo():new o(Number(t),Number(u)).rectangulo()};a.json(n)})),u.listen(8080,(()=>{console.log("conectado al puerto: 8080")}))})();