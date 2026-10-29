(()=>{var Zm=Object.defineProperty;var $o=(r,e,t)=>()=>{if(t)throw t[0];try{return r&&(e=r(r=0)),e}catch(n){throw t=[n],n}};var Jm=(r,e)=>{for(var t in e)Zm(r,t,{get:e[t],enumerable:!0})};function $t(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(At[255&r]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[255&e]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[63&t|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[255&n]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function yc(r,e){return(r%e+e)%e}function ds(r,e,t){return(1-t)*r+t*e}function _c(r){return(r&r-1)==0&&r!==0}function no(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}function Bf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qg(){let r=_s("canvas");return r.style.display="block",r}function ps(r){r in yp||(yp[r]=!0,console.warn(r))}function vr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ul(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}function kl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?io.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function zl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ei.fromArray(r,s);let o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function ql(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function a0(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Ua(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,lr),r.getVertexPosition(l,cr),r.getVertexPosition(c,hr);let h=(function(u,d,p,m,v,f,_,g){let y;if(y=d.side===Ot?m.intersectTriangle(_,f,v,!0,g):m.intersectTriangle(v,f,_,d.side===Mn,g),y===null)return null;Da.copy(g),Da.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(Da);return x<p.near||x>p.far?null:{distance:x,point:Da.clone(),object:u}})(r,e,t,n,lr,cr,hr,Na);if(h){i&&(La.fromBufferAttribute(i,o),Pa.fromBufferAttribute(i,l),Ia.fromBufferAttribute(i,c),h.uv=Pi.getInterpolation(Na,lr,cr,hr,La,Pa,Ia,new pe)),s&&(La.fromBufferAttribute(s,o),Pa.fromBufferAttribute(s,l),Ia.fromBufferAttribute(s,c),h.uv1=Pi.getInterpolation(Na,lr,cr,hr,La,Pa,Ia,new pe),h.uv2=h.uv1),a&&(Pp.fromBufferAttribute(a,o),Ip.fromBufferAttribute(a,l),Np.fromBufferAttribute(a,c),h.normal=Pi.getInterpolation(Na,lr,cr,hr,Pp,Ip,Np,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new E,materialIndex:0};Pi.getNormal(lr,cr,hr,u.normal),h.face=u}return h}function Er(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(r){let e={};for(let t=0;t<r.length;t++){let n=Er(r[t]);for(let i in n)e[i]=n[i]}return e}function Gf(r){return r.getRenderTarget()===null?r.outputColorSpace:Ye.workingColorSpace}function Vf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function u0(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer(),p;if(r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let p=0,m=d.length;p<m;p++){let v=d[p];t?r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}function d0(r,e,t,n,i,s,a){let o=new we(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(v,f){v.getRGB(Oa,Gf(r)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(v,f=1){o.set(v),h=f,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,m(o,h)},render:function(v,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?m(o,h):g&&g.isColor&&(m(g,1),_=!0);let y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Oo)?(c===void 0&&(c=new it(new Fn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Er(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(g.colorSpace)!==nt,u===g&&d===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new it(new zi(2,2),new Bn({name:"BackgroundMaterial",uniforms:Er(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function p0(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(A){return n.isWebGL2?r.bindVertexArray(A):s.bindVertexArrayOES(A)}function d(A){return n.isWebGL2?r.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function p(A){let M=[],S=[],D=[];for(let N=0;N<i;N++)M[N]=0,S[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:S,attributeDivisors:D,object:A,attributes:{},index:null}}function m(){let A=c.newAttributes;for(let M=0,S=A.length;M<S;M++)A[M]=0}function v(A){f(A,0)}function f(A,M){let S=c.newAttributes,D=c.enabledAttributes,N=c.attributeDivisors;S[A]=1,D[A]===0&&(r.enableVertexAttribArray(A),D[A]=1),N[A]!==M&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,M),N[A]=M)}function _(){let A=c.newAttributes,M=c.enabledAttributes;for(let S=0,D=M.length;S<D;S++)M[S]!==A[S]&&(r.disableVertexAttribArray(S),M[S]=0)}function g(A,M,S,D,N,z,te){te===!0?r.vertexAttribIPointer(A,M,S,N,z):r.vertexAttribPointer(A,M,S,D,N,z)}function y(){x(),h=!0,c!==l&&(c=l,u(c.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(A,M,S,D,N){let z=!1;if(a){let te=(function(L,X,q){let he=q.wireframe===!0,ye=o[L.id];ye===void 0&&(ye={},o[L.id]=ye);let re=ye[X.id];re===void 0&&(re={},ye[X.id]=re);let J=re[he];return J===void 0&&(J=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),re[he]=J),J})(D,S,M);c!==te&&(c=te,u(c.object)),z=(function(L,X,q,he){let ye=c.attributes,re=X.attributes,J=0,se=q.getAttributes();for(let H in se)if(se[H].location>=0){let Q=ye[H],me=re[H];if(me===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),Q===void 0||Q.attribute!==me||me&&Q.data!==me.data)return!0;J++}return c.attributesNum!==J||c.index!==he})(A,D,S,N),z&&(function(L,X,q,he){let ye={},re=X.attributes,J=0,se=q.getAttributes();for(let H in se)if(se[H].location>=0){let Q=re[H];Q===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let me={};me.attribute=Q,Q&&Q.data&&(me.data=Q.data),ye[H]=me,J++}c.attributes=ye,c.attributesNum=J,c.index=he})(A,D,S,N)}else{let te=M.wireframe===!0;c.geometry===D.id&&c.program===S.id&&c.wireframe===te||(c.geometry=D.id,c.program=S.id,c.wireframe=te,z=!0)}N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,(function(te,L,X,q){if(n.isWebGL2===!1&&(te.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let he=q.attributes,ye=X.getAttributes(),re=L.defaultAttributeValues;for(let J in ye){let se=ye[J];if(se.location>=0){let H=he[J];if(H===void 0&&(J==="instanceMatrix"&&te.instanceMatrix&&(H=te.instanceMatrix),J==="instanceColor"&&te.instanceColor&&(H=te.instanceColor)),H!==void 0){let Q=H.normalized,me=H.itemSize,w=t.get(H);if(w===void 0)continue;let T=w.buffer,F=w.type,ee=w.bytesPerElement,I=n.isWebGL2===!0&&(F===r.INT||F===r.UNSIGNED_INT||H.gpuType===Lf);if(H.isInterleavedBufferAttribute){let G=H.data,R=G.stride,P=H.offset;if(G.isInstancedInterleavedBuffer){for(let O=0;O<se.locationSize;O++)f(se.location+O,G.meshPerAttribute);te.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let O=0;O<se.locationSize;O++)v(se.location+O);r.bindBuffer(r.ARRAY_BUFFER,T);for(let O=0;O<se.locationSize;O++)g(se.location+O,me/se.locationSize,F,Q,R*ee,(P+me/se.locationSize*O)*ee,I)}else{if(H.isInstancedBufferAttribute){for(let G=0;G<se.locationSize;G++)f(se.location+G,H.meshPerAttribute);te.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let G=0;G<se.locationSize;G++)v(se.location+G);r.bindBuffer(r.ARRAY_BUFFER,T);for(let G=0;G<se.locationSize;G++)g(se.location+G,me/se.locationSize,F,Q,me*ee,me/se.locationSize*G*ee,I)}}else if(re!==void 0){let Q=re[J];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(se.location,Q);break;case 3:r.vertexAttrib3fv(se.location,Q);break;case 4:r.vertexAttrib4fv(se.location,Q);break;default:r.vertexAttrib1fv(se.location,Q)}}}}_()})(A,M,S,D),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))},reset:y,resetDefaultState:x,dispose:function(){y();for(let A in o){let M=o[A];for(let S in M){let D=M[S];for(let N in D)d(D[N].object),delete D[N];delete M[S]}delete o[A]}},releaseStatesOfGeometry:function(A){if(o[A.id]===void 0)return;let M=o[A.id];for(let S in M){let D=M[S];for(let N in D)d(D[N].object),delete D[N];delete M[S]}delete o[A.id]},releaseStatesOfProgram:function(A){for(let M in o){let S=o[M];if(S[A.id]===void 0)continue;let D=S[A.id];for(let N in D)d(D[N].object),delete D[N];delete S[A.id]}},initAttributes:m,enableAttribute:v,disableUnusedAttributes:_}}function f0(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function m0(r,e,t){let n;function i(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,y=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:g&&y,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function g0(r){let e=this,t=null,n=0,i=!1,s=!1,a=new kn,o=new Oe,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,v=null;if(m!==0){if(v=l.value,p!==!0||v===null){let f=d+4*m,_=u.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<f)&&(v=new Float32Array(f));for(let g=0,y=d;g!==m;++g,y+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(v,y),v[y+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,f=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,g=4*_,y=f.clippingState||null;l.value=y,y=c(p,u,g,d);for(let x=0;x!==g;++x)y[x]=t[x];f.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}}}function v0(r){let e=new WeakMap;function t(i,s){return s===fc?i.mapping=_r:s===mc&&(i.mapping=xr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===fc||s===mc){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Sc(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}function Op(r,e,t){let n=new zn(r,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function zp(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fp(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y0(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===fc||s===mc,o=s===_r||s===xr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new uo(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&(function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u})(l)){t===null&&(t=new uo(r));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function _0(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function x0(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let f=0,_=v.length;f<_;f+=3){let g=v[f+0],y=v[f+1],x=v[f+2];c.push(g,y,y,x,x,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let f=0,_=v.length/3-1;f<_;f+=3){let g=f+0,y=f+1,x=f+2;c.push(g,y,y,x,x,g)}}}let p=new(Bf(c)?co:lo)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function b0(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,s,1)}}}function M0(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function S0(r,e){return r[0]-e[0]}function T0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function w0(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Qe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,m=s.get(c);if(m===void 0||m.count!==p){let X=function(){te.dispose(),s.delete(c),c.removeEventListener("dispose",X)};m!==void 0&&m.texture.dispose();let _=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],M=c.morphAttributes.color||[],S=0;_===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let D=c.attributes.position.count*S,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let z=new Float32Array(D*N*4*p),te=new so(z,D,N,p);te.type=On,te.needsUpdate=!0;let L=4*S;for(let q=0;q<p;q++){let he=x[q],ye=A[q],re=M[q],J=D*N*4*q;for(let se=0;se<he.count;se++){let H=se*L;_===!0&&(a.fromBufferAttribute(he,se),z[J+H+0]=a.x,z[J+H+1]=a.y,z[J+H+2]=a.z,z[J+H+3]=0),g===!0&&(a.fromBufferAttribute(ye,se),z[J+H+4]=a.x,z[J+H+5]=a.y,z[J+H+6]=a.z,z[J+H+7]=0),y===!0&&(a.fromBufferAttribute(re,se),z[J+H+8]=a.x,z[J+H+9]=a.y,z[J+H+10]=a.z,z[J+H+11]=re.itemSize===4?a.w:1)}}m={count:p,texture:te,size:new pe(D,N)},s.set(c,m),c.addEventListener("dispose",X)}let v=0;for(let _=0;_<u.length;_++)v+=u[_];let f=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let g=0;g<d;g++)p[g]=[g,0];n[c.id]=p}for(let g=0;g<d;g++){let y=p[g];y[0]=g,y[1]=u[g]}p.sort(T0);for(let g=0;g<8;g++)g<d&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(S0);let m=c.morphAttributes.position,v=c.morphAttributes.normal,f=0;for(let g=0;g<8;g++){let y=o[g],x=y[0],A=y[1];x!==Number.MAX_SAFE_INTEGER&&A?(m&&c.getAttribute("morphTarget"+g)!==m[x]&&c.setAttribute("morphTarget"+g,m[x]),v&&c.getAttribute("morphNormal"+g)!==v[x]&&c.setAttribute("morphNormal"+g,v[x]),i[g]=A,f+=A):(m&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),v&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),i[g]=0)}let _=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",_),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function E0(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}function Nr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Bp[i];if(s===void 0&&(s=new Float32Array(i),Bp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bo(r,e){let t=Hp[e];t===void 0&&(t=new Int32Array(e),Hp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function A0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function R0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function C0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function L0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function P0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,n))return;Wp.set(n),r.uniformMatrix2fv(this.addr,!1,Wp),_t(t,n)}}function I0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,n))return;Vp.set(n),r.uniformMatrix3fv(this.addr,!1,Vp),_t(t,n)}}function N0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,n))return;Gp.set(n),r.uniformMatrix4fv(this.addr,!1,Gp),_t(t,n)}}function D0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function U0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function k0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function O0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function z0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function F0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function B0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function H0(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function G0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?jf:Wf;t.setTexture2D(e||s,i)}function V0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qf,i)}function W0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yf,i)}function j0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xf,i)}function X0(r,e){r.uniform1fv(this.addr,e)}function q0(r,e){let t=Nr(e,this.size,2);r.uniform2fv(this.addr,t)}function Y0(r,e){let t=Nr(e,this.size,3);r.uniform3fv(this.addr,t)}function K0(r,e){let t=Nr(e,this.size,4);r.uniform4fv(this.addr,t)}function Z0(r,e){let t=Nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function J0(r,e){let t=Nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $0(r,e){let t=Nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Q0(r,e){r.uniform1iv(this.addr,e)}function ev(r,e){r.uniform2iv(this.addr,e)}function tv(r,e){r.uniform3iv(this.addr,e)}function nv(r,e){r.uniform4iv(this.addr,e)}function iv(r,e){r.uniform1uiv(this.addr,e)}function rv(r,e){r.uniform2uiv(this.addr,e)}function sv(r,e){r.uniform3uiv(this.addr,e)}function av(r,e){r.uniform4uiv(this.addr,e)}function ov(r,e,t){let n=this.cache,i=e.length,s=Bo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wf,s[a])}function lv(r,e,t){let n=this.cache,i=e.length,s=Bo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||qf,s[a])}function cv(r,e,t){let n=this.cache,i=e.length,s=Bo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Yf,s[a])}function hv(r,e,t){let n=this.cache,i=e.length,s=Bo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xf,s[a])}function jp(r,e){r.seq.push(e),r.map[e.id]=e}function uv(r,e,t){let n=r.name,i=n.length;for(tc.lastIndex=0;;){let s=tc.exec(n),a=tc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){jp(t,c===void 0?new Tc(o,r,e):new wc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Ec(o),jp(t,h)),t=h}}}function Xp(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function qp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function fv(r,e){let t=(function(n){let i=Ye.getPrimaries(Ye.workingColorSpace),s=Ye.getPrimaries(n),a;switch(i===s?a="":i===eo&&s===Qa?a="LinearDisplayP3ToLinearSRGB":i===Qa&&s===eo&&(a="LinearSRGBToLinearDisplayP3"),n){case vt:case Fo:return[a,"LinearTransferOETF"];case Ze:case xh:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mv(r,e){let t;switch(e){case Hg:t="Linear";break;case Gg:t="Reinhard";break;case Vg:t="OptimizedCineon";break;case vh:t="ACESFilmic";break;case jg:t="AgX";break;case Wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pr(r){return r!==""}function Yp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ac(r){return r.replace(gv,yv)}function yv(r,e){let t=Ie[e];if(t===void 0){let n=vv.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ac(t)}function Zp(r){return r.replace(_v,xv)}function xv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jp(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bv(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(L){let X="SHADOWMAP_TYPE_BASIC";return L.shadowMapType===Af?X="SHADOWMAP_TYPE_PCF":L.shadowMapType===gh?X="SHADOWMAP_TYPE_PCF_SOFT":L.shadowMapType===Un&&(X="SHADOWMAP_TYPE_VSM"),X})(t),c=(function(L){let X="ENVMAP_TYPE_CUBE";if(L.envMap)switch(L.envMapMode){case _r:case xr:X="ENVMAP_TYPE_CUBE";break;case Oo:X="ENVMAP_TYPE_CUBE_UV"}return X})(t),h=(function(L){let X="ENVMAP_MODE_REFLECTION";return L.envMap&&L.envMapMode===xr&&(X="ENVMAP_MODE_REFRACTION"),X})(t),u=(function(L){let X="ENVMAP_BLENDING_NONE";if(L.envMap)switch(L.combine){case Rf:X="ENVMAP_BLENDING_MULTIPLY";break;case Fg:X="ENVMAP_BLENDING_MIX";break;case Bg:X="ENVMAP_BLENDING_ADD"}return X})(t),d=(function(L){let X=L.envMapCubeUVHeight;if(X===null)return null;let q=Math.log2(X)-2,he=1/X;return{texelWidth:1/(3*Math.max(Math.pow(2,q),112)),texelHeight:he,maxMip:q}})(t),p=t.isWebGL2?"":(function(L){return[L.extensionDerivatives||L.envMapCubeUVHeight||L.bumpMap||L.normalMapTangentSpace||L.clearcoatNormalMap||L.flatShading||L.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(L.extensionFragDepth||L.logarithmicDepthBuffer)&&L.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",L.extensionDrawBuffers&&L.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(L.extensionShaderTextureLOD||L.envMap||L.transmission)&&L.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)})(t),m=(function(L){return[L.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pr).join(`
`)})(t),v=(function(L){let X=[];for(let q in L){let he=L[q];he!==!1&&X.push("#define "+q+" "+he)}return X.join(`
`)})(s),f=i.createProgram(),_,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pr).join(`
`),_.length>0&&(_+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(_=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[p,Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ai?mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),a=Ac(a),a=Yp(a,t),a=Kp(a,t),o=Ac(o),o=Yp(o,t),o=Kp(o,t),a=Zp(a),o=Zp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=y+_+a,A=y+g+o,M=Xp(i,i.VERTEX_SHADER,x),S=Xp(i,i.FRAGMENT_SHADER,A);function D(L){if(r.debug.checkShaderErrors){let X=i.getProgramInfoLog(f).trim(),q=i.getShaderInfoLog(M).trim(),he=i.getShaderInfoLog(S).trim(),ye=!0,re=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(ye=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,M,S);else{let J=qp(i,M,"vertex"),se=qp(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+J+`
`+se)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):q!==""&&he!==""||(re=!1);re&&(L.diagnostics={runnable:ye,programLog:X,vertexShader:{log:q,prefix:_},fragmentShader:{log:he,prefix:g}})}i.deleteShader(M),i.deleteShader(S),N=new yr(i,f),z=(function(X,q){let he={},ye=X.getProgramParameter(q,X.ACTIVE_ATTRIBUTES);for(let re=0;re<ye;re++){let J=X.getActiveAttrib(q,re),se=J.name,H=1;J.type===X.FLOAT_MAT2&&(H=2),J.type===X.FLOAT_MAT3&&(H=3),J.type===X.FLOAT_MAT4&&(H=4),he[se]={type:J.type,location:X.getAttribLocation(q,se),locationSize:H}}return he})(i,f)}let N,z;i.attachShader(f,M),i.attachShader(f,S),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),this.getUniforms=function(){return N===void 0&&D(this),N},this.getAttributes=function(){return z===void 0&&D(this),z};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=i.getProgramParameter(f,dv)),te},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=S,this}function Sv(r,e,t,n,i,s,a){let o=new oo,l=new Rc,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,_,g,y,x){let A=y.fog,M=x.geometry,S=f.isMeshStandardMaterial?y.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||S),N=D&&D.mapping===Oo?D.image.height:null,z=m[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let te=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,L=te!==void 0?te.length:0,X,q,he,ye,re=0;if(M.morphAttributes.position!==void 0&&(re=1),M.morphAttributes.normal!==void 0&&(re=2),M.morphAttributes.color!==void 0&&(re=3),z){let wt=yn[z];X=wt.vertexShader,q=wt.fragmentShader}else X=f.vertexShader,q=f.fragmentShader,l.update(f),he=l.getVertexShaderID(f),ye=l.getFragmentShaderID(f);let J=r.getRenderTarget(),se=x.isInstancedMesh===!0,H=x.isBatchedMesh===!0,Q=!!f.map,me=!!f.matcap,w=!!D,T=!!f.aoMap,F=!!f.lightMap,ee=!!f.bumpMap,I=!!f.normalMap,G=!!f.displacementMap,R=!!f.emissiveMap,P=!!f.metalnessMap,O=!!f.roughnessMap,Y=f.anisotropy>0,U=f.clearcoat>0,b=f.iridescence>0,oe=f.sheen>0,V=f.transmission>0,j=Y&&!!f.anisotropyMap,ce=U&&!!f.clearcoatMap,ge=U&&!!f.clearcoatNormalMap,_e=U&&!!f.clearcoatRoughnessMap,xe=b&&!!f.iridescenceMap,Le=b&&!!f.iridescenceThicknessMap,be=oe&&!!f.sheenColorMap,Me=oe&&!!f.sheenRoughnessMap,Ne=!!f.specularMap,xt=!!f.specularColorMap,Te=!!f.specularIntensityMap,je=V&&!!f.transmissionMap,Fe=V&&!!f.thicknessMap,ea=!!f.gradientMap,ji=!!f.alphaMap,ta=f.alphaTest>0,Xt=!!f.alphaHash,Bt=!!f.extensions,Xi=!!M.attributes.uv1,$=!!M.attributes.uv2,na=!!M.attributes.uv3,Hr=ai;return f.toneMapped&&(J!==null&&J.isXRRenderTarget!==!0||(Hr=r.toneMapping)),{isWebGL2:h,shaderID:z,shaderType:f.type,shaderName:f.name,vertexShader:X,fragmentShader:q,defines:f.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:H,instancing:se,instancingColor:se&&x.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vt,map:Q,matcap:me,envMap:w,envMapMode:w&&D.mapping,envMapCubeUVHeight:N,aoMap:T,lightMap:F,bumpMap:ee,normalMap:I,displacementMap:d&&G,emissiveMap:R,normalMapObjectSpace:I&&f.normalMapType===1,normalMapTangentSpace:I&&f.normalMapType===0,metalnessMap:P,roughnessMap:O,anisotropy:Y,anisotropyMap:j,clearcoat:U,clearcoatMap:ce,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,iridescence:b,iridescenceMap:xe,iridescenceThicknessMap:Le,sheen:oe,sheenColorMap:be,sheenRoughnessMap:Me,specularMap:Ne,specularColorMap:xt,specularIntensityMap:Te,transmission:V,transmissionMap:je,thicknessMap:Fe,gradientMap:ea,opaque:f.transparent===!1&&f.blending===1,alphaMap:ji,alphaTest:ta,alphaHash:Xt,combine:f.combine,mapUv:Q&&v(f.map.channel),aoMapUv:T&&v(f.aoMap.channel),lightMapUv:F&&v(f.lightMap.channel),bumpMapUv:ee&&v(f.bumpMap.channel),normalMapUv:I&&v(f.normalMap.channel),displacementMapUv:G&&v(f.displacementMap.channel),emissiveMapUv:R&&v(f.emissiveMap.channel),metalnessMapUv:P&&v(f.metalnessMap.channel),roughnessMapUv:O&&v(f.roughnessMap.channel),anisotropyMapUv:j&&v(f.anisotropyMap.channel),clearcoatMapUv:ce&&v(f.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(f.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(f.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(f.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(f.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(f.sheenRoughnessMap.channel),specularMapUv:Ne&&v(f.specularMap.channel),specularColorMapUv:xt&&v(f.specularColorMap.channel),specularIntensityMapUv:Te&&v(f.specularIntensityMap.channel),transmissionMapUv:je&&v(f.transmissionMap.channel),thicknessMapUv:Fe&&v(f.thicknessMap.channel),alphaMapUv:ji&&v(f.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(I||Y),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,vertexUv1s:Xi,vertexUv2s:$,vertexUv3s:na,pointsUvs:x.isPoints===!0&&!!M.attributes.uv&&(Q||ji),fog:!!A,useFog:f.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:x.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:re,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:Hr,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Q&&f.map.isVideoTexture===!0&&Ye.getTransfer(f.map.colorSpace)===nt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Ot,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Bt&&f.extensions.derivatives===!0,extensionFragDepth:Bt&&f.extensions.fragDepth===!0,extensionDrawBuffers:Bt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Bt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Bt&&f.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let _=[];if(f.shaderID?_.push(f.shaderID):(_.push(f.customVertexShaderID),_.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)_.push(g),_.push(f.defines[g]);return f.isRawShaderMaterial===!1&&((function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)})(_,f),(function(g,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),g.push(o.mask)})(_,f),_.push(r.outputColorSpace)),_.push(f.customProgramCacheKey),_.join()},getUniforms:function(f){let _=m[f.type],g;if(_){let y=yn[_];g=l0.clone(y.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,_){let g;for(let y=0,x=c.length;y<x;y++){let A=c[y];if(A.cacheKey===_){g=A,++g.usedTimes;break}}return g===void 0&&(g=new bv(r,_,f,s),c.push(g)),g},releaseProgram:function(f){if(--f.usedTimes==0){let _=c.indexOf(f);c[_]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function Tv(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function wv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $p(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qp(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||wv),n.length>1&&n.sort(o||$p),i.length>1&&i.sort(o||$p)}}}function Ev(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Qp,r.set(e,[i])):t>=n.length?(i=new Qp,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Av(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new we};break;case"SpotLight":t={position:new E,direction:new E,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new E,halfWidth:new E,halfHeight:new E}}return r[e.id]=t,t}}}function Cv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Lv(r,e){let t=new Av,n=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new E);let s=new E,a=new Ee,o=new Ee;return{setup:function(l,c){let h=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,m=0,v=0,f=0,_=0,g=0,y=0,x=0,A=0,M=0,S=0;l.sort(Cv);let D=c===!0?Math.PI:1;for(let z=0,te=l.length;z<te;z++){let L=l[z],X=L.color,q=L.intensity,he=L.distance,ye=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=X.r*q*D,u+=X.g*q*D,d+=X.b*q*D;else if(L.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(L.sh.coefficients[re],q);S++}else if(L.isDirectionalLight){let re=t.get(L);if(re.color.copy(L.color).multiplyScalar(L.intensity*D),L.castShadow){let J=L.shadow,se=n.get(L);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=ye,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=re,p++}else if(L.isSpotLight){let re=t.get(L);re.position.setFromMatrixPosition(L.matrixWorld),re.color.copy(X).multiplyScalar(q*D),re.distance=he,re.coneCos=Math.cos(L.angle),re.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),re.decay=L.decay,i.spot[v]=re;let J=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[v]=J.matrix,L.castShadow){let se=n.get(L);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,i.spotShadow[v]=se,i.spotShadowMap[v]=ye,x++}v++}else if(L.isRectAreaLight){let re=t.get(L);re.color.copy(X).multiplyScalar(q),re.halfWidth.set(.5*L.width,0,0),re.halfHeight.set(0,.5*L.height,0),i.rectArea[f]=re,f++}else if(L.isPointLight){let re=t.get(L);if(re.color.copy(L.color).multiplyScalar(L.intensity*D),re.distance=L.distance,re.decay=L.decay,L.castShadow){let J=L.shadow,se=n.get(L);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,se.shadowCameraNear=J.camera.near,se.shadowCameraFar=J.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=ye,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=re,m++}else if(L.isHemisphereLight){let re=t.get(L);re.skyColor.copy(L.color).multiplyScalar(q*D),re.groundColor.copy(L.groundColor).multiplyScalar(q*D),i.hemi[_]=re,_++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let N=i.hash;N.directionalLength===p&&N.pointLength===m&&N.spotLength===v&&N.rectAreaLength===f&&N.hemiLength===_&&N.numDirectionalShadows===g&&N.numPointShadows===y&&N.numSpotShadows===x&&N.numSpotMaps===A&&N.numLightProbes===S||(i.directional.length=p,i.spot.length=v,i.rectArea.length=f,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=S,N.directionalLength=p,N.pointLength=m,N.spotLength=v,N.rectAreaLength=f,N.hemiLength=_,N.numDirectionalShadows=g,N.numPointShadows=y,N.numSpotShadows=x,N.numSpotMaps=A,N.numLightProbes=S,i.version=Rv++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,m=0,v=c.matrixWorldInverse;for(let f=0,_=l.length;f<_;f++){let g=l[f];if(g.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),h++}else if(g.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),d++}else if(g.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),y.halfWidth.set(.5*g.width,0,0),y.halfHeight.set(0,.5*g.height,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(v),u++}else if(g.isHemisphereLight){let y=i.hemi[m];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(v),m++}}},state:i}}function ef(r,e){let t=new Lv(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function Pv(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new ef(r,e),t.set(n,[a])):i>=s.length?(a=new ef(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}function Iv(r,e,t){let n=new Ar,i=new pe,s=new pe,a=new Qe,o=new Lc({depthPacking:3201}),l=new Pc,c={},h=t.maxTextureSize,u={[Mn]:Ot,[Ot]:Mn,2:2},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Je;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new it(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Af;let _=this.type;function g(M,S){let D=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(S,null,D,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(S,null,D,p,v,null)}function y(M,S,D,N){let z=null,te=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(te!==void 0)z=te;else if(z=D.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=z.uuid,X=S.uuid,q=c[L];q===void 0&&(q={},c[L]=q);let he=q[X];he===void 0&&(he=z.clone(),q[X]=he,S.addEventListener("dispose",A)),z=he}return z.visible=S.visible,z.wireframe=S.wireframe,z.side=N===Un?S.shadowSide!==null?S.shadowSide:S.side:S.shadowSide!==null?S.shadowSide:u[S.side],z.alphaMap=S.alphaMap,z.alphaTest=S.alphaTest,z.map=S.map,z.clipShadows=S.clipShadows,z.clippingPlanes=S.clippingPlanes,z.clipIntersection=S.clipIntersection,z.displacementMap=S.displacementMap,z.displacementScale=S.displacementScale,z.displacementBias=S.displacementBias,z.wireframeLinewidth=S.wireframeLinewidth,z.linewidth=S.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(r.properties.get(z).light=D),z}function x(M,S,D,N,z){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&z===Un)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);let L=e.update(M),X=M.material;if(Array.isArray(X)){let q=L.groups;for(let he=0,ye=q.length;he<ye;he++){let re=q[he],J=X[re.materialIndex];if(J&&J.visible){let se=y(M,J,N,z);M.onBeforeShadow(r,M,S,D,L,se,re),r.renderBufferDirect(D,null,L,se,M,re),M.onAfterShadow(r,M,S,D,L,se,re)}}}else if(X.visible){let q=y(M,X,N,z);M.onBeforeShadow(r,M,S,D,L,q,null),r.renderBufferDirect(D,null,L,q,M,null),M.onAfterShadow(r,M,S,D,L,q,null)}}let te=M.children;for(let L=0,X=te.length;L<X;L++)x(te[L],S,D,N,z)}function A(M){M.target.removeEventListener("dispose",A);for(let S in c){let D=c[S],N=M.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}this.render=function(M,S,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;let N=r.getRenderTarget(),z=r.getActiveCubeFace(),te=r.getActiveMipmapLevel(),L=r.state;L.setBlending(0),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let X=_!==Un&&this.type===Un,q=_===Un&&this.type!==Un;for(let he=0,ye=M.length;he<ye;he++){let re=M[he],J=re.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let se=J.getFrameExtents();if(i.multiply(se),s.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/se.x),i.x=s.x*se.x,J.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/se.y),i.y=s.y*se.y,J.mapSize.y=s.y)),J.map===null||X===!0||q===!0){let Q=this.type!==Un?{minFilter:Mt,magFilter:Mt}:{};J.map!==null&&J.map.dispose(),J.map=new zn(i.x,i.y,Q),J.map.texture.name=re.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();let H=J.getViewportCount();for(let Q=0;Q<H;Q++){let me=J.getViewport(Q);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),L.viewport(a),J.updateMatrices(re,Q),n=J.getFrustum(),x(S,D,J.camera,re,this.type)}J.isPointLightShadow!==!0&&this.type===Un&&g(J,D),J.needsUpdate=!1}_=this.type,f.needsUpdate=!1,r.setRenderTarget(N,z,te)}}function Nv(r,e,t){let n=t.isWebGL2,i=new function(){let b=!1,oe=new Qe,V=null,j=new Qe(0,0,0,0);return{setMask:function(ce){V===ce||b||(r.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){b=ce},setClear:function(ce,ge,_e,xe,Le){Le===!0&&(ce*=xe,ge*=xe,_e*=xe),oe.set(ce,ge,_e,xe),j.equals(oe)===!1&&(r.clearColor(ce,ge,_e,xe),j.copy(oe))},reset:function(){b=!1,V=null,j.set(-1,0,0,0)}}},s=new function(){let b=!1,oe=null,V=null,j=null;return{setTest:function(ce){ce?ee(r.DEPTH_TEST):I(r.DEPTH_TEST)},setMask:function(ce){oe===ce||b||(r.depthMask(ce),oe=ce)},setFunc:function(ce){if(V!==ce){switch(ce){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}V=ce}},setLocked:function(ce){b=ce},setClear:function(ce){j!==ce&&(r.clearDepth(ce),j=ce)},reset:function(){b=!1,oe=null,V=null,j=null}}},a=new function(){let b=!1,oe=null,V=null,j=null,ce=null,ge=null,_e=null,xe=null,Le=null;return{setTest:function(be){b||(be?ee(r.STENCIL_TEST):I(r.STENCIL_TEST))},setMask:function(be){oe===be||b||(r.stencilMask(be),oe=be)},setFunc:function(be,Me,Ne){V===be&&j===Me&&ce===Ne||(r.stencilFunc(be,Me,Ne),V=be,j=Me,ce=Ne)},setOp:function(be,Me,Ne){ge===be&&_e===Me&&xe===Ne||(r.stencilOp(be,Me,Ne),ge=be,_e=Me,xe=Ne)},setLocked:function(be){b=be},setClear:function(be){Le!==be&&(r.clearStencil(be),Le=be)},reset:function(){b=!1,oe=null,V=null,j=null,ce=null,ge=null,_e=null,xe=null,Le=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,_=null,g=null,y=null,x=null,A=null,M=new we(0,0,0),S=0,D=!1,N=null,z=null,te=null,L=null,X=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),he=!1,ye=0,re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(re)[1]),he=ye>=1):re.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),he=ye>=2);let J=null,se={},H=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),me=new Qe().fromArray(H),w=new Qe().fromArray(Q);function T(b,oe,V,j){let ce=new Uint8Array(4),ge=r.createTexture();r.bindTexture(b,ge),r.texParameteri(b,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(b,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _e=0;_e<V;_e++)!n||b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY?r.texImage2D(oe+_e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage3D(oe,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ce);return ge}let F={};function ee(b){c[b]!==!0&&(r.enable(b),c[b]=!0)}function I(b){c[b]!==!1&&(r.disable(b),c[b]=!1)}F[r.TEXTURE_2D]=T(r.TEXTURE_2D,r.TEXTURE_2D,1),F[r.TEXTURE_CUBE_MAP]=T(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(F[r.TEXTURE_2D_ARRAY]=T(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),F[r.TEXTURE_3D]=T(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),s.setFunc(3),O(!1),Y(1),ee(r.CULL_FACE),P(0);let G={[Li]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)G[103]=r.MIN,G[104]=r.MAX;else{let b=e.get("EXT_blend_minmax");b!==null&&(G[103]=b.MIN_EXT,G[104]=b.MAX_EXT)}let R={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[dc]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[pc]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function P(b,oe,V,j,ce,ge,_e,xe,Le,be){if(b!==0){if(m===!1&&(ee(r.BLEND),m=!0),b===5)ce=ce||oe,ge=ge||V,_e=_e||j,oe===f&&ce===y||(r.blendEquationSeparate(G[oe],G[ce]),f=oe,y=ce),V===_&&j===g&&ge===x&&_e===A||(r.blendFuncSeparate(R[V],R[j],R[ge],R[_e]),_=V,g=j,x=ge,A=_e),xe.equals(M)!==!1&&Le===S||(r.blendColor(xe.r,xe.g,xe.b,Le),M.copy(xe),S=Le),v=b,D=!1;else if(b!==v||be!==D){if(f===Li&&y===Li||(r.blendEquation(r.FUNC_ADD),f=Li,y=Li),be)switch(b){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}_=null,g=null,x=null,A=null,M.set(0,0,0),S=0,v=b,D=be}}else m===!0&&(I(r.BLEND),m=!1)}function O(b){N!==b&&(b?r.frontFace(r.CW):r.frontFace(r.CCW),N=b)}function Y(b){b!==0?(ee(r.CULL_FACE),b!==z&&(b===1?r.cullFace(r.BACK):b===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):I(r.CULL_FACE),z=b}function U(b,oe,V){b?(ee(r.POLYGON_OFFSET_FILL),L===oe&&X===V||(r.polygonOffset(oe,V),L=oe,X=V)):I(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:ee,disable:I,bindFramebuffer:function(b,oe){return h[b]!==oe&&(r.bindFramebuffer(b,oe),h[b]=oe,n&&(b===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=oe),b===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=oe)),!0)},drawBuffers:function(b,oe){let V=d,j=!1;if(b)if(V=u.get(oe),V===void 0&&(V=[],u.set(oe,V)),b.isWebGLMultipleRenderTargets){let ce=b.texture;if(V.length!==ce.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,_e=ce.length;ge<_e;ge++)V[ge]=r.COLOR_ATTACHMENT0+ge;V.length=ce.length,j=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,j=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,j=!0);j&&(t.isWebGL2?r.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))},useProgram:function(b){return p!==b&&(r.useProgram(b),p=b,!0)},setBlending:P,setMaterial:function(b,oe){b.side===2?I(r.CULL_FACE):ee(r.CULL_FACE);let V=b.side===Ot;oe&&(V=!V),O(V),b.blending===1&&b.transparent===!1?P(0):P(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),i.setMask(b.colorWrite);let j=b.stencilWrite;a.setTest(j),j&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),U(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):I(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:O,setCullFace:Y,setLineWidth:function(b){b!==te&&(he&&r.lineWidth(b),te=b)},setPolygonOffset:U,setScissorTest:function(b){b?ee(r.SCISSOR_TEST):I(r.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=r.TEXTURE0+q-1),J!==b&&(r.activeTexture(b),J=b)},bindTexture:function(b,oe,V){V===void 0&&(V=J===null?r.TEXTURE0+q-1:J);let j=se[V];j===void 0&&(j={type:void 0,texture:void 0},se[V]=j),j.type===b&&j.texture===oe||(J!==V&&(r.activeTexture(V),J=V),r.bindTexture(b,oe||F[b]),j.type=b,j.texture=oe)},unbindTexture:function(){let b=se[J];b!==void 0&&b.type!==void 0&&(r.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,oe){let V=l.get(oe);V===void 0&&(V=new WeakMap,l.set(oe,V));let j=V.get(b);j===void 0&&(j=r.getUniformBlockIndex(oe,b.name),V.set(b,j))},uniformBlockBinding:function(b,oe){let V=l.get(oe).get(b);o.get(oe)!==V&&(r.uniformBlockBinding(oe,V,b.__bindingPointIndex),o.set(oe,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){me.equals(b)===!1&&(r.scissor(b.x,b.y,b.z,b.w),me.copy(b))},viewport:function(b){w.equals(b)===!1&&(r.viewport(b.x,b.y,b.z,b.w),w.copy(b))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},J=null,se={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,_=null,g=null,y=null,x=null,A=null,M=new we(0,0,0),S=0,D=!1,N=null,z=null,te=null,L=null,X=null,me.set(0,0,r.canvas.width,r.canvas.height),w.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Dv(r,e,t,n,i,s,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,T){return p?new OffscreenCanvas(w,T):_s("canvas")}function v(w,T,F,ee){let I=1;if((w.width>ee||w.height>ee)&&(I=ee/Math.max(w.width,w.height)),I<1||T===!0){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let G=T?no:Math.floor,R=G(I*w.width),P=G(I*w.height);u===void 0&&(u=m(R,P));let O=F?m(R,P):u;return O.width=R,O.height=P,O.getContext("2d").drawImage(w,0,0,R,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+R+"x"+P+")."),O}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function f(w){return _c(w.width)&&_c(w.height)}function _(w,T){return w.generateMipmaps&&T&&w.minFilter!==Mt&&w.minFilter!==kt}function g(w){r.generateMipmap(w)}function y(w,T,F,ee,I=!1){if(o===!1)return T;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=T;if(T===r.RED&&(F===r.FLOAT&&(G=r.R32F),F===r.HALF_FLOAT&&(G=r.R16F),F===r.UNSIGNED_BYTE&&(G=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(G=r.R8UI),F===r.UNSIGNED_SHORT&&(G=r.R16UI),F===r.UNSIGNED_INT&&(G=r.R32UI),F===r.BYTE&&(G=r.R8I),F===r.SHORT&&(G=r.R16I),F===r.INT&&(G=r.R32I)),T===r.RG&&(F===r.FLOAT&&(G=r.RG32F),F===r.HALF_FLOAT&&(G=r.RG16F),F===r.UNSIGNED_BYTE&&(G=r.RG8)),T===r.RGBA){let R=I?$a:Ye.getTransfer(ee);F===r.FLOAT&&(G=r.RGBA32F),F===r.HALF_FLOAT&&(G=r.RGBA16F),F===r.UNSIGNED_BYTE&&(G=R===nt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return G!==r.R16F&&G!==r.R32F&&G!==r.RG16F&&G!==r.RG32F&&G!==r.RGBA16F&&G!==r.RGBA32F||e.get("EXT_color_buffer_float"),G}function x(w,T,F){return _(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Mt&&w.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function A(w){return w===Mt||w===Ja||w===us?r.NEAREST:r.LINEAR}function M(w){let T=w.target;T.removeEventListener("dispose",M),(function(F){let ee=n.get(F);if(ee.__webglInit===void 0)return;let I=F.source,G=d.get(I);if(G){let R=G[ee.__cacheKey];R.usedTimes--,R.usedTimes===0&&D(F),Object.keys(G).length===0&&d.delete(I)}n.remove(F)})(T),T.isVideoTexture&&h.delete(T)}function S(w){let T=w.target;T.removeEventListener("dispose",S),(function(F){let ee=F.texture,I=n.get(F),G=n.get(ee);if(G.__webglTexture!==void 0&&(r.deleteTexture(G.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(I.__webglFramebuffer[R]))for(let P=0;P<I.__webglFramebuffer[R].length;P++)r.deleteFramebuffer(I.__webglFramebuffer[R][P]);else r.deleteFramebuffer(I.__webglFramebuffer[R]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[R])}else{if(Array.isArray(I.__webglFramebuffer))for(let R=0;R<I.__webglFramebuffer.length;R++)r.deleteFramebuffer(I.__webglFramebuffer[R]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let R=0;R<I.__webglColorRenderbuffer.length;R++)I.__webglColorRenderbuffer[R]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[R]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let R=0,P=ee.length;R<P;R++){let O=n.get(ee[R]);O.__webglTexture&&(r.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(ee[R])}n.remove(ee),n.remove(F)})(T)}function D(w){let T=n.get(w);r.deleteTexture(T.__webglTexture);let F=w.source;delete d.get(F)[T.__cacheKey],a.memory.textures--}let N=0;function z(w,T){let F=n.get(w);if(w.isVideoTexture&&(function(ee){let I=a.render.frame;h.get(ee)!==I&&(h.set(ee,I),ee.update())})(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(ee.complete!==!1)return void ye(F,w,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}let te={[fn]:r.REPEAT,[dn]:r.CLAMP_TO_EDGE,[vs]:r.MIRRORED_REPEAT},L={[Mt]:r.NEAREST,[Ja]:r.NEAREST_MIPMAP_NEAREST,[us]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[ki]:r.LINEAR_MIPMAP_LINEAR},X={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function q(w,T,F){if(F?(r.texParameteri(w,r.TEXTURE_WRAP_S,te[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,te[T.wrapT]),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,te[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,L[T.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),T.wrapS===dn&&T.wrapT===dn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,A(T.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Mt&&T.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,X[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Mt||T.minFilter!==us&&T.minFilter!==ki||T.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===ys&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function he(w,T){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",M));let ee=T.source,I=d.get(ee);I===void 0&&(I={},d.set(ee,I));let G=(function(R){let P=[];return P.push(R.wrapS),P.push(R.wrapT),P.push(R.wrapR||0),P.push(R.magFilter),P.push(R.minFilter),P.push(R.anisotropy),P.push(R.internalFormat),P.push(R.format),P.push(R.type),P.push(R.generateMipmaps),P.push(R.premultiplyAlpha),P.push(R.flipY),P.push(R.unpackAlignment),P.push(R.colorSpace),P.join()})(T);if(G!==w.__cacheKey){I[G]===void 0&&(I[G]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),I[G].usedTimes++;let R=I[w.__cacheKey];R!==void 0&&(I[w.__cacheKey].usedTimes--,R.usedTimes===0&&D(T)),w.__cacheKey=G,w.__webglTexture=I[G].texture}return F}function ye(w,T,F){let ee=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=r.TEXTURE_3D);let I=he(w,T),G=T.source;t.bindTexture(ee,w.__webglTexture,r.TEXTURE0+F);let R=n.get(G);if(G.version!==R.__version||I===!0){t.activeTexture(r.TEXTURE0+F);let P=Ye.getPrimaries(Ye.workingColorSpace),O=T.colorSpace===_n?null:Ye.getPrimaries(T.colorSpace),Y=T.colorSpace===_n||P===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let U=(function(Me){return!o&&(Me.wrapS!==dn||Me.wrapT!==dn||Me.minFilter!==Mt&&Me.minFilter!==kt)})(T)&&f(T.image)===!1,b=v(T.image,U,!1,i.maxTextureSize);b=me(T,b);let oe=f(b)||o,V=s.convert(T.format,T.colorSpace),j,ce=s.convert(T.type),ge=y(T.internalFormat,V,ce,T.colorSpace,T.isVideoTexture);q(ee,T,oe);let _e=T.mipmaps,xe=o&&T.isVideoTexture!==!0&&ge!==kf,Le=R.__version===void 0||I===!0,be=x(T,b,oe);if(T.isDepthTexture)ge=r.DEPTH_COMPONENT,o?ge=T.type===On?r.DEPTH_COMPONENT32F:T.type===ri?r.DEPTH_COMPONENT24:T.type===Ni?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:T.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Di&&ge===r.DEPTH_COMPONENT&&T.type!==_h&&T.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ri,ce=s.convert(T.type)),T.format===br&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,T.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ni,ce=s.convert(T.type))),Le&&(xe?t.texStorage2D(r.TEXTURE_2D,1,ge,b.width,b.height):t.texImage2D(r.TEXTURE_2D,0,ge,b.width,b.height,0,V,ce,null));else if(T.isDataTexture)if(_e.length>0&&oe){xe&&Le&&t.texStorage2D(r.TEXTURE_2D,be,ge,_e[0].width,_e[0].height);for(let Me=0,Ne=_e.length;Me<Ne;Me++)j=_e[Me],xe?t.texSubImage2D(r.TEXTURE_2D,Me,0,0,j.width,j.height,V,ce,j.data):t.texImage2D(r.TEXTURE_2D,Me,ge,j.width,j.height,0,V,ce,j.data);T.generateMipmaps=!1}else xe?(Le&&t.texStorage2D(r.TEXTURE_2D,be,ge,b.width,b.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,V,ce,b.data)):t.texImage2D(r.TEXTURE_2D,0,ge,b.width,b.height,0,V,ce,b.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xe&&Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ge,_e[0].width,_e[0].height,b.depth);for(let Me=0,Ne=_e.length;Me<Ne;Me++)j=_e[Me],T.format!==pn?V!==null?xe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,j.width,j.height,b.depth,V,j.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,ge,j.width,j.height,b.depth,0,j.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,j.width,j.height,b.depth,V,ce,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,ge,j.width,j.height,b.depth,0,V,ce,j.data)}else{xe&&Le&&t.texStorage2D(r.TEXTURE_2D,be,ge,_e[0].width,_e[0].height);for(let Me=0,Ne=_e.length;Me<Ne;Me++)j=_e[Me],T.format!==pn?V!==null?xe?t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,j.width,j.height,V,j.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,ge,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage2D(r.TEXTURE_2D,Me,0,0,j.width,j.height,V,ce,j.data):t.texImage2D(r.TEXTURE_2D,Me,ge,j.width,j.height,0,V,ce,j.data)}else if(T.isDataArrayTexture)xe?(Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ge,b.width,b.height,b.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,V,ce,b.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,b.width,b.height,b.depth,0,V,ce,b.data);else if(T.isData3DTexture)xe?(Le&&t.texStorage3D(r.TEXTURE_3D,be,ge,b.width,b.height,b.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,V,ce,b.data)):t.texImage3D(r.TEXTURE_3D,0,ge,b.width,b.height,b.depth,0,V,ce,b.data);else if(T.isFramebufferTexture){if(Le)if(xe)t.texStorage2D(r.TEXTURE_2D,be,ge,b.width,b.height);else{let Me=b.width,Ne=b.height;for(let xt=0;xt<be;xt++)t.texImage2D(r.TEXTURE_2D,xt,ge,Me,Ne,0,V,ce,null),Me>>=1,Ne>>=1}}else if(_e.length>0&&oe){xe&&Le&&t.texStorage2D(r.TEXTURE_2D,be,ge,_e[0].width,_e[0].height);for(let Me=0,Ne=_e.length;Me<Ne;Me++)j=_e[Me],xe?t.texSubImage2D(r.TEXTURE_2D,Me,0,0,V,ce,j):t.texImage2D(r.TEXTURE_2D,Me,ge,V,ce,j);T.generateMipmaps=!1}else xe?(Le&&t.texStorage2D(r.TEXTURE_2D,be,ge,b.width,b.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,V,ce,b)):t.texImage2D(r.TEXTURE_2D,0,ge,V,ce,b);_(T,oe)&&g(ee),R.__version=G.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function re(w,T,F,ee,I,G){let R=s.convert(F.format,F.colorSpace),P=s.convert(F.type),O=y(F.internalFormat,R,P,F.colorSpace);if(!n.get(T).__hasExternalTextures){let Y=Math.max(1,T.width>>G),U=Math.max(1,T.height>>G);I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?t.texImage3D(I,G,O,Y,U,T.depth,0,R,P,null):t.texImage2D(I,G,O,Y,U,0,R,P,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Q(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,I,n.get(F).__webglTexture,0,H(T)):(I===r.TEXTURE_2D||I>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,I,n.get(F).__webglTexture,G),t.bindFramebuffer(r.FRAMEBUFFER,null)}function J(w,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let ee=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||Q(T)){let I=T.depthTexture;I&&I.isDepthTexture&&(I.type===On?ee=r.DEPTH_COMPONENT32F:I.type===ri&&(ee=r.DEPTH_COMPONENT24));let G=H(T);Q(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G,ee,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,G,ee,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){let ee=H(T);F&&Q(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,T.width,T.height):Q(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{let ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let I=0;I<ee.length;I++){let G=ee[I],R=s.convert(G.format,G.colorSpace),P=s.convert(G.type),O=y(G.internalFormat,R,P,G.colorSpace),Y=H(T);F&&Q(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,O,T.width,T.height):Q(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,O,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,O,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(w){let T=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(ee,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,ee),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(I.depthTexture).__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),z(I.depthTexture,0);let G=n.get(I.depthTexture).__webglTexture,R=H(I);if(I.depthTexture.format===Di)Q(I)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0,R):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0);else{if(I.depthTexture.format!==br)throw new Error("Unknown depthTexture format");Q(I)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0,R):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0)}})(T.__webglFramebuffer,w)}else if(F){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=r.createRenderbuffer(),J(T.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),J(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function H(w){return Math.min(i.maxSamples,w.samples)}function Q(w){let T=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(w,T){let F=w.colorSpace,ee=w.format,I=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===vc||F!==vt&&F!==_n&&(Ye.getTransfer(F)===nt?o===!1?e.has("EXT_sRGB")===!0&&ee===pn?(w.format=vc,w.minFilter=kt,w.generateMipmaps=!1):T=io.sRGBToLinear(T):ee===pn&&I===Ii||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}this.allocateTextureUnit=function(){let w=N;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),N+=1,w},this.resetTextureUnits=function(){N=0},this.setTexture2D=z,this.setTexture2DArray=function(w,T){let F=n.get(w);w.version>0&&F.__version!==w.version?ye(F,w,T):t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)},this.setTexture3D=function(w,T){let F=n.get(w);w.version>0&&F.__version!==w.version?ye(F,w,T):t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(w,T){let F=n.get(w);w.version>0&&F.__version!==w.version?(function(ee,I,G){if(I.image.length!==6)return;let R=he(ee,I),P=I.source;t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+G);let O=n.get(P);if(P.version!==O.__version||R===!0){t.activeTexture(r.TEXTURE0+G);let Y=Ye.getPrimaries(Ye.workingColorSpace),U=I.colorSpace===_n?null:Ye.getPrimaries(I.colorSpace),b=I.colorSpace===_n||Y===U?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let oe=I.isCompressedTexture||I.image[0].isCompressedTexture,V=I.image[0]&&I.image[0].isDataTexture,j=[];for(let Te=0;Te<6;Te++)j[Te]=oe||V?V?I.image[Te].image:I.image[Te]:v(I.image[Te],!1,!0,i.maxCubemapSize),j[Te]=me(I,j[Te]);let ce=j[0],ge=f(ce)||o,_e=s.convert(I.format,I.colorSpace),xe=s.convert(I.type),Le=y(I.internalFormat,_e,xe,I.colorSpace),be=o&&I.isVideoTexture!==!0,Me=O.__version===void 0||R===!0,Ne,xt=x(I,ce,ge);if(q(r.TEXTURE_CUBE_MAP,I,ge),oe){be&&Me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Le,ce.width,ce.height);for(let Te=0;Te<6;Te++){Ne=j[Te].mipmaps;for(let je=0;je<Ne.length;je++){let Fe=Ne[je];I.format!==pn?_e!==null?be?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,0,0,Fe.width,Fe.height,_e,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,Le,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,0,0,Fe.width,Fe.height,_e,xe,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,Le,Fe.width,Fe.height,0,_e,xe,Fe.data)}}}else{Ne=I.mipmaps,be&&Me&&(Ne.length>0&&xt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Le,j[0].width,j[0].height));for(let Te=0;Te<6;Te++)if(V){be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,j[Te].width,j[Te].height,_e,xe,j[Te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Le,j[Te].width,j[Te].height,0,_e,xe,j[Te].data);for(let je=0;je<Ne.length;je++){let Fe=Ne[je].image[Te].image;be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,0,0,Fe.width,Fe.height,_e,xe,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,Le,Fe.width,Fe.height,0,_e,xe,Fe.data)}}else{be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,_e,xe,j[Te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Le,_e,xe,j[Te]);for(let je=0;je<Ne.length;je++){let Fe=Ne[je];be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,0,0,_e,xe,Fe.image[Te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,Le,_e,xe,Fe.image[Te])}}}_(I,ge)&&g(r.TEXTURE_CUBE_MAP),O.__version=P.version,I.onUpdate&&I.onUpdate(I)}ee.__version=I.version})(F,w,T):t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(w,T,F){let ee=n.get(w);T!==void 0&&re(ee.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&se(w)},this.setupRenderTarget=function(w){let T=w.texture,F=n.get(w),ee=n.get(T);w.addEventListener("dispose",S),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=T.version,a.memory.textures++);let I=w.isWebGLCubeRenderTarget===!0,G=w.isWebGLMultipleRenderTargets===!0,R=f(w)||o;if(I){F.__webglFramebuffer=[];for(let P=0;P<6;P++)if(o&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[P]=[];for(let O=0;O<T.mipmaps.length;O++)F.__webglFramebuffer[P][O]=r.createFramebuffer()}else F.__webglFramebuffer[P]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let P=0;P<T.mipmaps.length;P++)F.__webglFramebuffer[P]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(G)if(i.drawBuffers){let P=w.texture;for(let O=0,Y=P.length;O<Y;O++){let U=n.get(P[O]);U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Q(w)===!1){let P=G?T:[T];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let O=0;O<P.length;O++){let Y=P[O];F.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[O]);let U=s.convert(Y.format,Y.colorSpace),b=s.convert(Y.type),oe=y(Y.internalFormat,U,b,Y.colorSpace,w.isXRRenderTarget===!0),V=H(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,V,oe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,F.__webglColorRenderbuffer[O])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),J(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),q(r.TEXTURE_CUBE_MAP,T,R);for(let P=0;P<6;P++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)re(F.__webglFramebuffer[P][O],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,O);else re(F.__webglFramebuffer[P],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);_(T,R)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){let P=w.texture;for(let O=0,Y=P.length;O<Y;O++){let U=P[O],b=n.get(U);t.bindTexture(r.TEXTURE_2D,b.__webglTexture),q(r.TEXTURE_2D,U,R),re(F.__webglFramebuffer,w,U,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,0),_(U,R)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let P=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?P=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,ee.__webglTexture),q(P,T,R),o&&T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)re(F.__webglFramebuffer[O],w,T,r.COLOR_ATTACHMENT0,P,O);else re(F.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,P,0);_(T,R)&&g(P),t.unbindTexture()}w.depthBuffer&&se(w)},this.updateRenderTargetMipmap=function(w){let T=f(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,I=F.length;ee<I;ee++){let G=F[ee];if(_(G,T)){let R=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,P=n.get(G).__webglTexture;t.bindTexture(R,P),g(R),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(o&&w.samples>0&&Q(w)===!1){let T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,ee=w.height,I=r.COLOR_BUFFER_BIT,G=[],R=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=n.get(w),O=w.isWebGLMultipleRenderTargets===!0;if(O)for(let Y=0;Y<T.length;Y++)t.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let Y=0;Y<T.length;Y++){G.push(r.COLOR_ATTACHMENT0+Y),w.depthBuffer&&G.push(R);let U=P.__ignoreDepthValues!==void 0&&P.__ignoreDepthValues;if(U===!1&&(w.depthBuffer&&(I|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(I|=r.STENCIL_BUFFER_BIT)),O&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,P.__webglColorRenderbuffer[Y]),U===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[R]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])),O){let b=n.get(T[Y]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,b,0)}r.blitFramebuffer(0,0,F,ee,0,0,F,ee,I,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,G)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),O)for(let Y=0;Y<T.length;Y++){t.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,P.__webglColorRenderbuffer[Y]);let U=n.get(T[Y]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Q}function Uv(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=Ye.getTransfer(s);if(i===Ii)return r.UNSIGNED_BYTE;if(i===Pf)return r.UNSIGNED_SHORT_4_4_4_4;if(i===If)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===_h)return r.UNSIGNED_SHORT;if(i===Lf)return r.INT;if(i===ri)return r.UNSIGNED_INT;if(i===On)return r.FLOAT;if(i===ys)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===pn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Di)return r.DEPTH_COMPONENT;if(i===br)return r.DEPTH_STENCIL;if(i===vc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===Nf)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Df)return r.RG_INTEGER;if(i===Uf)return r.RGBA_INTEGER;if(i===Rl||i===Cl||i===Ll||i===Pl)if(o===nt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Rl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Rl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Gd||i===Vd||i===Wd||i===jd){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===kf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Xd||i===qd){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===Xd)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===qd)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Yd||i===Kd||i===Zd||i===Jd||i===$d||i===Qd||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===ap||i===op){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Yd)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qd)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ep)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tp)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===np)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ip)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rp)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sp)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ap)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===op)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===Il||i===lp||i===cp){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===Il)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===hp||i===up||i===dp){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===Il)return a.COMPRESSED_RED_RGTC1_EXT;if(i===hp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===up)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Ni?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}function Ov(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Ot&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Ot&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Gf(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function zv(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,m){let v=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let _=m[f];if(typeof v=="number"||typeof v=="boolean"){if(_!==v)return m[f]=v,!0}else if(_.equals(v)===!1)return _.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(f){let _=f.uniforms,g=0,y=16;for(let A=0,M=_.length;A<M;A++){let S=Array.isArray(_[A])?_[A]:[_[A]];for(let D=0,N=S.length;D<N;D++){let z=S[D],te=Array.isArray(z.value)?z.value:[z.value];for(let L=0,X=te.length;L<X;L++){let q=c(te[L]),he=g%y;he!==0&&y-he<q.boundary&&(g+=y-he),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=g,g+=q.storage}}}let x=g%y;x>0&&(g+=y-x),f.__size=g,f.__cache={}})(u),p=(function(f){let _=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=_;let g=r.createBuffer(),y=f.__size,x=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,y,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,g),g})(u),i[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let v=e.render.frame;s[u.id]!==v&&((function(f){let _=i[f.id],g=f.uniforms,y=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let x=0,A=g.length;x<A;x++){let M=Array.isArray(g[x])?g[x]:[g[x]];for(let S=0,D=M.length;S<D;S++){let N=M[S];if(l(N,x,S,y)===!0){let z=N.__offset,te=Array.isArray(N.value)?N.value:[N.value],L=0;for(let X=0;X<te.length;X++){let q=te[X],he=c(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,z+L,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,L),L+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}function gf(r,e,t,n,i,s,a){let o=Oc.distanceSqToPoint(r);if(o<t){let l=new E;Oc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}function Mh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}function vf(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function ms(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function gs(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}function yf(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=_f(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=_f(s,r[s],r[s+1],a);return a&&Ho(a,a.next)&&(Ps(a),a=a.next),a}function Hi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Ho(n,n.next)&&ot(n.prev,n,n.next)!==0)n=n.next;else{if(Ps(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Cs(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=Yc(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(v){let f,_,g,y,x,A,M,S,D=1;do{for(_=v,v=null,x=null,A=0;_;){for(A++,g=_,M=0,f=0;f<D&&(M++,g=g.nextZ,g);f++);for(S=D;M>0||S>0&&g;)M!==0&&(S===0||!g||_.z<=g.z)?(y=_,_=_.nextZ,M--):(y=g,g=g.nextZ,S--),x?x.nextZ=y:v=y,y.prevZ=x,x=y;_=g}x.nextZ=null,D*=2}while(A>1)})(m)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Wv(r,n,i,s):Vv(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Ps(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Cs(r=jv(Hi(r),e,t),e,t,n,i,s,2):a===2&&Xv(r,e,t,n,i,s):Cs(Hi(r),e,t,n,i,s,1);break}}function Vv(r){let e=r.prev,t=r,n=r.next;if(ot(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&mr(i,o,s,l,a,c,m.x,m.y)&&ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wv(r,e,t,n){let i=r.prev,s=r,a=r.next;if(ot(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,_=Yc(p,m,e,t,n),g=Yc(v,f,e,t,n),y=r.prevZ,x=r.nextZ;for(;y&&y.z>=_&&x&&x.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==i&&y!==a&&mr(o,h,l,u,c,d,y.x,y.y)&&ot(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=v&&x.y>=m&&x.y<=f&&x!==i&&x!==a&&mr(o,h,l,u,c,d,x.x,x.y)&&ot(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==i&&y!==a&&mr(o,h,l,u,c,d,y.x,y.y)&&ot(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=g;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=f&&x!==i&&x!==a&&mr(o,h,l,u,c,d,x.x,x.y)&&ot(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jv(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Ho(i,s)&&Kf(i,n,n.next,s)&&Ls(i,s)&&Ls(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ps(n),Ps(n.next),n=r=s),n=n.next}while(n!==r);return Hi(n)}function Xv(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jv(a,o)){let l=Zf(a,o);return a=Hi(a,a.next),l=Hi(l,l.next),Cs(a,e,t,n,i,s,0),void Cs(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function qv(r,e){return r.x-e.x}function Yv(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&mr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),Ls(o,i)&&(m<v||m===v&&(o.x>a.x||o.x===a.x&&Kv(a,o)))&&(a=o,v=m)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Zf(t,r);return Hi(n,n.next),Hi(t,t.next)}function Kv(r,e){return ot(r.prev,r,e.prev)<0&&ot(e.next,r,r.next)<0}function Yc(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Zv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function mr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Jv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Kf(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Ls(r,e)&&Ls(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(ot(r.prev,r,e.prev)||ot(r,e.prev,e))||Ho(r,e)&&ot(r.prev,r,r.next)>0&&ot(e.prev,e,e.next)>0)}function ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ho(r,e){return r.x===e.x&&r.y===e.y}function Kf(r,e,t,n){let i=Ka(ot(r,e,t)),s=Ka(ot(r,e,n)),a=Ka(ot(t,n,r)),o=Ka(ot(t,n,e));return i!==s&&a!==o||!(i!==0||!Ya(r,t,e))||!(s!==0||!Ya(r,n,e))||!(a!==0||!Ya(t,r,n))||!(o!==0||!Ya(t,e,n))}function Ya(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ka(r){return r>0?1:r<0?-1:0}function Ls(r,e){return ot(r.prev,r,r.next)<0?ot(r,e,r.next)>=0&&ot(r,r.prev,e)>=0:ot(r,e,r.prev)<0||ot(r,r.next,e)<0}function Zf(r,e){let t=new Kc(r.i,r.x,r.y),n=new Kc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function _f(r,e,t,n){let i=new Kc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ps(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Kc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xf(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function bf(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}function Mf(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}function Za(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Qv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ey(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,i){return r[n]-r[i]})),t}function Sf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Jf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function ty(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hn;case"vector":case"vector2":case"vector3":case"vector4":return Gn;case"color":return Co;case"quaternion":return bn;case"bool":case"boolean":return ni;case"string":return ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(r.type);if(r.times===void 0){let t=[],n=[];Jf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Af,gh,Un,Mn,Ot,ko,Li,dc,pc,Rf,Fg,Bg,ai,Hg,Gg,Vg,vh,Wg,jg,Hd,Xg,Cf,_r,xr,fc,mc,Oo,fn,dn,vs,Mt,Ja,us,kt,yh,ki,Ii,_h,Lf,ri,On,ys,Pf,If,Ni,pn,Di,br,Nf,Df,Uf,Rl,Cl,Ll,Pl,Gd,Vd,Wd,jd,kf,Xd,qd,Yd,Kd,Zd,Jd,$d,Qd,ep,tp,np,ip,rp,sp,ap,op,Il,lp,cp,hp,up,dp,Mr,Oi,Nl,pp,fp,mp,Of,zo,Us,zf,Ui,_n,Ze,vt,xh,Fo,$a,nt,Qa,eo,$i,gc,gp,vc,Sr,to,li,At,vp,gr,Tr,Ff,pe,Oe,Dl,yp,_p,xp,va,Yg,Ye,Qi,io,Kg,ro,Zg,St,Qe,xc,zn,so,bc,Nt,E,Ol,bp,Tt,Cn,cn,ya,er,tr,nr,Jn,$n,wi,is,_a,xa,Ei,Jg,rs,Fl,zt,Ln,Bl,ba,Qn,Hl,Ma,Gl,wr,Ee,ir,hn,$g,Qg,ei,Sa,Gt,Mp,Sp,ao,oo,e0,Tp,rr,Pn,Ta,ss,t0,n0,wp,Ep,Ap,i0,r0,lt,un,In,Vl,Nn,sr,ar,Rp,Wl,jl,Xl,wa,Pi,Hf,ti,Ea,we,Rt,s0,Wt,Sn,I_,ut,Aa,gt,lo,co,Ae,o0,Jt,Yl,or,Vt,as,bt,Je,Cp,Ai,Ra,Lp,lr,cr,hr,Kl,Ca,La,Pa,Ia,Pp,Ip,Np,Na,Da,it,Fn,l0,Bn,xs,mt,ur,Mc,ho,Sc,Zl,c0,h0,kn,Ri,ka,Ar,zi,Ie,fe,yn,Oa,Rr,Dp,os,Jl,Up,$l,Ql,ec,Ci,dr,kp,uo,po,Wf,jf,Xf,qf,Yf,Bp,Hp,Gp,Vp,Wp,Tc,wc,Ec,tc,yr,dv,pv,gv,vv,_v,Mv,Rc,Cc,Rv,Lc,Pc,Ic,Ct,kv,fs,Nc,bs,Dc,fo,mo,Ms,Pt,Ss,N_,D_,U_,k_,O_,z_,F_,B_,H_,G_,V_,W_,j_,X_,tf,nf,rf,Fv,sf,Fa,nc,af,ic,go,Ts,Uc,of,Bv,vo,Fi,fr,lf,Ba,cf,Hv,ls,cs,yo,kc,q_,Y_,K_,Z_,J_,$_,Q_,ex,tx,nx,ws,hf,uf,df,rc,Ha,Cr,pf,ff,_o,xo,Es,mf,Oc,Ga,Va,bo,ci,en,As,zc,Wa,sc,ac,oc,Fc,Mo,Bc,So,Hc,To,wo,Eo,Ao,Gc,Rs,Lr,Vc,Wc,jt,jc,Bi,Xc,ja,Xa,lc,qa,qc,Ro,Gv,oi,Zc,$v,Jc,$c,Qc,eh,Is,th,nh,ih,rh,sh,ix,mn,tn,hi,ah,oh,lh,Qt,ni,Co,Hn,ch,bn,ii,Gn,Lo,si,hh,ny,Vn,Dn,uh,Ns,dh,Po,Pr,Io,cc,Tf,wf,Ds,ph,No,Ef,hs,hc,fh,Do,mh,Ir,ui,Uo,rx,sx,ax,ox,lx,cx,hx,ux,dx,px,fx,Sh,iy,uc,ry,sy,ay,tt,mx,gx,vx,yx,_x,xx,bx,Mx,Sx,Tx,wx,Ex,Ax,Rx,Cx,Lx,Px,Ix,Dr=$o(()=>{Af=1,gh=2,Un=3,Mn=0,Ot=1,ko=2,Li=100,dc=204,pc=205,Rf=0,Fg=1,Bg=2,ai=0,Hg=1,Gg=2,Vg=3,vh=4,Wg=5,jg=6,Hd="attached",Xg="detached",Cf=300,_r=301,xr=302,fc=303,mc=304,Oo=306,fn=1e3,dn=1001,vs=1002,Mt=1003,Ja=1004,us=1005,kt=1006,yh=1007,ki=1008,Ii=1009,_h=1012,Lf=1013,ri=1014,On=1015,ys=1016,Pf=1017,If=1018,Ni=1020,pn=1023,Di=1026,br=1027,Nf=1029,Df=1031,Uf=1033,Rl=33776,Cl=33777,Ll=33778,Pl=33779,Gd=35840,Vd=35841,Wd=35842,jd=35843,kf=36196,Xd=37492,qd=37496,Yd=37808,Kd=37809,Zd=37810,Jd=37811,$d=37812,Qd=37813,ep=37814,tp=37815,np=37816,ip=37817,rp=37818,sp=37819,ap=37820,op=37821,Il=36492,lp=36494,cp=36495,hp=36284,up=36285,dp=36286,Mr=2300,Oi=2301,Nl=2302,pp=2400,fp=2401,mp=2402,Of=0,zo=1,Us=2,zf=3e3,Ui=3001,_n="",Ze="srgb",vt="srgb-linear",xh="display-p3",Fo="display-p3-linear",$a="linear",nt="srgb",Qa="rec709",eo="p3",$i=7680,gc=35044,gp="300 es",vc=1035,Sr=2e3,to=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vp=1234567,gr=Math.PI/180,Tr=180/Math.PI;Ff={DEG2RAD:gr,RAD2DEG:Tr,generateUUID:$t,clamp:ft,euclideanModulo:yc,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:ds,damp:function(r,e,t,n){return ds(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(yc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(vp=r);let e=vp+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*gr},radToDeg:function(r){return r*Tr},isPowerOfTwo:_c,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:no,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Ke,denormalize:xn},pe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=i[0],f=i[3],_=i[6],g=i[1],y=i[4],x=i[7],A=i[2],M=i[5],S=i[8];return s[0]=a*v+o*g+l*A,s[3]=a*f+o*y+l*M,s[6]=a*_+o*x+l*S,s[1]=c*v+h*g+u*A,s[4]=c*f+h*y+u*M,s[7]=c*_+h*x+u*S,s[2]=d*v+p*g+m*A,s[5]=d*f+p*y+m*M,s[8]=d*_+p*x+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dl=new Oe;yp={};_p=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xp=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),va={[vt]:{transfer:$a,primaries:Qa,toReference:r=>r,fromReference:r=>r},[Ze]:{transfer:nt,primaries:Qa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fo]:{transfer:$a,primaries:eo,toReference:r=>r.applyMatrix3(xp),fromReference:r=>r.applyMatrix3(_p)},[xh]:{transfer:nt,primaries:eo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xp),fromReference:r=>r.applyMatrix3(_p).convertLinearToSRGB()}},Yg=new Set([vt,Fo]),Ye={enabled:!0,_workingColorSpace:vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Yg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=va[e].toReference;return(0,va[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return va[r].primaries},getTransfer:function(r){return r===_n?$a:va[r].transfer}};io=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=_s("canvas")),Qi.width=e.width,Qi.height=e.height;let n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*vr(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*vr(t[n]/255)):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kg=0,ro=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=$t(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(kl(i[a].image)):s.push(kl(i[a]))}else s=kl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};Zg=0,St=class r extends li{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=$t(),this.name="",this.source=new ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ui?Ze:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fn:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case fn:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?Ui:zf}set encoding(e){ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ui?Ze:_n}};St.DEFAULT_IMAGE=null,St.DEFAULT_MAPPING=Cf,St.DEFAULT_ANISOTROPY=1;Qe=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],f=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(p+1)/2,A=(_+1)/2,M=(h+d)/4,S=(u+v)/4,D=(m+f)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=M/n,s=S/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=M/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=S/s,i=D/s),this.set(n,i,s,t),this}let g=Math.sqrt((f-m)*(f-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(f-m)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ui?Ze:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},so=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bc=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==m){let f=1-o,_=l*d+c*p+h*m+u*v,g=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){let A=Math.sqrt(y),M=Math.atan2(A,_*g);f=Math.sin(f*M)/A,o=Math.sin(o*M)/A}let x=o*g;if(l=l*f+d*x,c=c*f+p*x,h=h*f+m*x,u=u*f+v*x,f===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new E,bp=new Nt,Tt=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),_a.subVectors(this.max,is),er.subVectors(e.a,is),tr.subVectors(e.b,is),nr.subVectors(e.c,is),Jn.subVectors(tr,er),$n.subVectors(nr,tr),wi.subVectors(er,nr);let t=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-wi.z,wi.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,wi.z,0,-wi.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-wi.y,wi.x,0];return!!zl(t,er,tr,nr,_a)&&(t=[1,0,0,0,1,0,0,0,1],!!zl(t,er,tr,nr,_a)&&(xa.crossVectors(Jn,$n),t=[xa.x,xa.y,xa.z],zl(t,er,tr,nr,_a)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(cn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Cn=[new E,new E,new E,new E,new E,new E,new E,new E],cn=new E,ya=new Tt,er=new E,tr=new E,nr=new E,Jn=new E,$n=new E,wi=new E,is=new E,_a=new E,xa=new E,Ei=new E;Jg=new Tt,rs=new E,Fl=new E,zt=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);let t=rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(Fl)),this.expandByPoint(rs.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new E,Bl=new E,ba=new E,Qn=new E,Hl=new E,Ma=new E,Gl=new E,wr=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Bl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ba),o=Qn.dot(this.direction),l=-Qn.dot(ba),c=Qn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bl).addScaledVector(ba,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,s){Hl.subVectors(t,e),Ma.subVectors(n,e),Gl.crossVectors(Hl,Ma);let a,o=this.direction.dot(Gl);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Qn.subVectors(this.origin,e);let l=a*this.direction.dot(Ma.crossVectors(Qn,Ma));if(l<0)return null;let c=a*this.direction.dot(Hl.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(Gl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=m,_[11]=v,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),a=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($g,e,Qg)}lookAt(e,t,n){let i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ei.crossVectors(n,Gt),ei.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ei.crossVectors(n,Gt)),ei.normalize(),Sa.crossVectors(Gt,ei),i[0]=ei.x,i[4]=Sa.x,i[8]=Gt.x,i[1]=ei.y,i[5]=Sa.y,i[9]=Gt.y,i[2]=ei.z,i[6]=Sa.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],f=n[10],_=n[14],g=n[3],y=n[7],x=n[11],A=n[15],M=i[0],S=i[4],D=i[8],N=i[12],z=i[1],te=i[5],L=i[9],X=i[13],q=i[2],he=i[6],ye=i[10],re=i[14],J=i[3],se=i[7],H=i[11],Q=i[15];return s[0]=a*M+o*z+l*q+c*J,s[4]=a*S+o*te+l*he+c*se,s[8]=a*D+o*L+l*ye+c*H,s[12]=a*N+o*X+l*re+c*Q,s[1]=h*M+u*z+d*q+p*J,s[5]=h*S+u*te+d*he+p*se,s[9]=h*D+u*L+d*ye+p*H,s[13]=h*N+u*X+d*re+p*Q,s[2]=m*M+v*z+f*q+_*J,s[6]=m*S+v*te+f*he+_*se,s[10]=m*D+v*L+f*ye+_*H,s[14]=m*N+v*X+f*re+_*Q,s[3]=g*M+y*z+x*q+A*J,s[7]=g*S+y*te+x*he+A*se,s[11]=g*D+y*L+x*ye+A*H,s[15]=g*N+y*X+x*re+A*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],f=e[14],_=e[15],g=u*f*c-v*d*c+v*l*p-o*f*p-u*l*_+o*d*_,y=m*d*c-h*f*c-m*l*p+a*f*p+h*l*_-a*d*_,x=h*v*c-m*u*c+m*o*p-a*v*p-h*o*_+a*u*_,A=m*u*l-h*v*l-m*o*d+a*v*d+h*o*f-a*u*f,M=t*g+n*y+i*x+s*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/M;return e[0]=g*S,e[1]=(v*d*s-u*f*s-v*i*p+n*f*p+u*i*_-n*d*_)*S,e[2]=(o*f*s-v*l*s+v*i*c-n*f*c-o*i*_+n*l*_)*S,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*S,e[4]=y*S,e[5]=(h*f*s-m*d*s+m*i*p-t*f*p-h*i*_+t*d*_)*S,e[6]=(m*l*s-a*f*s-m*i*c+t*f*c+a*i*_-t*l*_)*S,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*S,e[8]=x*S,e[9]=(m*u*s-h*v*s-m*n*p+t*v*p+h*n*_-t*u*_)*S,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*_+t*o*_)*S,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*S,e[12]=A*S,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*f+t*u*f)*S,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*f-t*o*f)*S,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,v=a*h,f=a*u,_=o*u,g=l*c,y=l*h,x=l*u,A=n.x,M=n.y,S=n.z;return i[0]=(1-(v+_))*A,i[1]=(p+x)*A,i[2]=(m-y)*A,i[3]=0,i[4]=(p-x)*M,i[5]=(1-(d+_))*M,i[6]=(f+g)*M,i[7]=0,i[8]=(m+y)*S,i[9]=(f-g)*S,i[10]=(1-(d+v))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=ir.set(i[0],i[1],i[2]).length(),a=ir.set(i[4],i[5],i[6]).length(),o=ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);let l=1/s,c=1/a,h=1/o;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,m;if(o===Sr)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==to)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,m,v;if(o===Sr)m=(a+s)*u,v=-2*u;else{if(o!==to)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ir=new E,hn=new Ee,$g=new E(0,0,0),Qg=new E(1,1,1),ei=new E,Sa=new E,Gt=new E,Mp=new Ee,Sp=new Nt,ao=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ao.DEFAULT_ORDER="XYZ";oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},e0=0,Tp=new E,rr=new Nt,Pn=new Ee,Ta=new E,ss=new E,t0=new E,n0=new Nt,wp=new E(1,0,0),Ep=new E(0,1,0),Ap=new E(0,0,1),i0={type:"added"},r0={type:"removed"},lt=class r extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new E,t=new ao,n=new Nt,i=new E(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Oe}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Ep,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,t){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Ep,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ss,Ta,this.up):Pn.lookAt(Ta,ss,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(Pn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,t0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};lt.DEFAULT_UP=new E(0,1,0),lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;un=new E,In=new E,Vl=new E,Nn=new E,sr=new E,ar=new E,Rp=new E,Wl=new E,jl=new E,Xl=new E,wa=!1,Pi=class r{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){un.subVectors(i,t),In.subVectors(n,t),Vl.subVectors(e,t);let a=un.dot(un),o=un.dot(In),l=un.dot(Vl),c=In.dot(In),h=In.dot(Vl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,n,i,s,a,o,l){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),In.subVectors(e,t),un.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),.5*un.cross(In).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;sr.subVectors(i,n),ar.subVectors(s,n),Wl.subVectors(e,n);let l=sr.dot(Wl),c=ar.dot(Wl);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,i);let h=sr.dot(jl),u=ar.dot(jl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(sr,a);Xl.subVectors(e,s);let p=sr.dot(Xl),m=ar.dot(Xl);if(m>=0&&p<=m)return t.copy(s);let v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ar,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return Rp.subVectors(s,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Rp,o);let _=1/(f+v+d);return a=v*_,o=d*_,t.copy(n).addScaledVector(sr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ea={h:0,s:0,l:0};we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=yc(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){let n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Ul(e.r),this.g=Ul(e.g),this.b=Ul(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return Ye.fromWorkingColorSpace(Rt.copy(this),e),65536*Math.round(ft(255*Rt.r,0,255))+256*Math.round(ft(255*Rt.g,0,255))+Math.round(ft(255*Rt.b,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Rt.copy(this),t);let n=Rt.r,i=Rt.g,s=Rt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Ze){Ye.fromWorkingColorSpace(Rt.copy(this),e);let t=Rt.r,n=Rt.g,i=Rt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Ea);let n=ds(ti.h,Ea.h,t),i=ds(ti.s,Ea.s,t),s=ds(ti.l,Ea.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new we;we.NAMES=Hf;s0=0,Wt=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=1,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends Wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},I_=a0();ut=new E,Aa=new pe,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}},lo=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},co=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ae=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},o0=0,Jt=new Ee,Yl=new lt,or=new E,Vt=new Tt,as=new Tt,bt=new E,Je=class r extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bf(e)?co:lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ae(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Vt.min,as.min),Vt.expandByPoint(bt),bt.addVectors(Vt.max,as.max),Vt.expandByPoint(bt)):(Vt.expandByPoint(as.min),Vt.expandByPoint(as.max))}Vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),bt.add(or)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let z=0;z<o;z++)c[z]=new E,h[z]=new E;let u=new E,d=new E,p=new E,m=new pe,v=new pe,f=new pe,_=new E,g=new E;function y(z,te,L){u.fromArray(i,3*z),d.fromArray(i,3*te),p.fromArray(i,3*L),m.fromArray(a,2*z),v.fromArray(a,2*te),f.fromArray(a,2*L),d.sub(u),p.sub(u),v.sub(m),f.sub(m);let X=1/(v.x*f.y-f.x*v.y);isFinite(X)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(X),g.copy(p).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(X),c[z].add(_),c[te].add(_),c[L].add(_),h[z].add(g),h[te].add(g),h[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let z=0,te=x.length;z<te;++z){let L=x[z],X=L.start;for(let q=X,he=X+L.count;q<he;q+=3)y(n[q+0],n[q+1],n[q+2])}let A=new E,M=new E,S=new E,D=new E;function N(z){S.fromArray(s,3*z),D.copy(S);let te=c[z];A.copy(te),A.sub(S.multiplyScalar(S.dot(te))).normalize(),M.crossVectors(D,te);let L=M.dot(h[z])<0?-1:1;l[4*z]=A.x,l[4*z+1]=A.y,l[4*z+2]=A.z,l[4*z+3]=L}for(let z=0,te=x.length;z<te;++z){let L=x[z],X=L.start;for(let q=X,he=X+L.count;q<he;q+=3)N(n[q+0]),N(n[q+1]),N(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new E,s=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let v=0,f=l.length;v<f;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let _=0;_<h;_++)d[m++]=c[p++]}return new gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cp=new Ee,Ai=new wr,Ra=new zt,Lp=new E,lr=new E,cr=new E,hr=new E,Kl=new E,Ca=new E,La=new pe,Pa=new pe,Ia=new pe,Pp=new E,Ip=new E,Np=new E,Na=new E,Da=new E,it=class extends lt{constructor(e=new Je,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Kl.fromBufferAttribute(u,e),a?Ca.addScaledVector(Kl,h):Ca.addScaledVector(Kl.sub(t),h))}t.add(Ca)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),Ra.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Ra,Lp)===null||Ai.origin.distanceToSquared(Lp)>(e.far-e.near)**2))return;Cp.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Cp),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ai)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],_=a[f.materialIndex];for(let g=Math.max(f.start,p.start),y=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));g<y;g+=3)i=Ua(this,_,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);m<v;m+=3)i=Ua(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],_=a[f.materialIndex];for(let g=Math.max(f.start,p.start),y=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));g<y;g+=3)i=Ua(this,_,e,n,c,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);m<v;m+=3)i=Ua(this,a,e,n,c,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};Fn=class r extends Je{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(v,f,_,g,y,x,A,M,S,D,N){let z=x/S,te=A/D,L=x/2,X=A/2,q=M/2,he=S+1,ye=D+1,re=0,J=0,se=new E;for(let H=0;H<ye;H++){let Q=H*te-X;for(let me=0;me<he;me++){let w=me*z-L;se[v]=w*g,se[f]=Q*y,se[_]=q,c.push(se.x,se.y,se.z),se[v]=0,se[f]=0,se[_]=M>0?1:-1,h.push(se.x,se.y,se.z),u.push(me/S),u.push(1-H/D),re+=1}}for(let H=0;H<D;H++)for(let Q=0;Q<S;Q++){let me=d+Q+he*H,w=d+Q+he*(H+1),T=d+(Q+1)+he*(H+1),F=d+(Q+1)+he*H;l.push(me,w,F),l.push(w,T,F),J+=6}o.addGroup(p,J,N),p+=J,d+=re}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l0={clone:Er,merge:It},Bn=class extends Wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xs=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mt=class extends xs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Tr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*gr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Tr*Math.atan(Math.tan(.5*gr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*gr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ur=-90,Mc=class extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new mt(ur,1,e,t);i.layers=this.layers,this.add(i);let s=new mt(ur,1,e,t);s.layers=this.layers,this.add(s);let a=new mt(ur,1,e,t);a.layers=this.layers,this.add(a);let o=new mt(ur,1,e,t);o.layers=this.layers,this.add(o);let l=new mt(ur,1,e,t);l.layers=this.layers,this.add(l);let c=new mt(ur,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==to)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ho=class extends St{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:_r,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ui?Ze:_n),this.texture=new ho(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fn(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:0});s.uniforms.tEquirect.value=t;let a=new it(i,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=kt),new Mc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Zl=new E,c0=new E,h0=new Oe,kn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Zl.subVectors(n,t).cross(c0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||h0.getNormalMatrix(e),i=this.coplanarPoint(Zl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new zt,ka=new E,Ar=class{constructor(e=new kn,t=new kn,n=new kn,i=new kn,s=new kn,a=new kn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],m=i[9],v=i[10],f=i[11],_=i[12],g=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,f-p,x-_).normalize(),n[1].setComponents(l+s,d+c,f+p,x+_).normalize(),n[2].setComponents(l+a,d+h,f+m,x+g).normalize(),n[3].setComponents(l-a,d-h,f-m,x-g).normalize(),n[4].setComponents(l-o,d-u,f-v,x-y).normalize(),t===Sr)n[5].setComponents(l+o,d+u,f+v,x+y).normalize();else{if(t!==to)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ka.x=i.normal.x>0?e.max.x:e.min.x,ka.y=i.normal.y>0?e.max.y:e.min.y,ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};zi=class r extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],v=[],f=[];for(let _=0;_<h;_++){let g=_*d-a;for(let y=0;y<c;y++){let x=y*u-s;m.push(x,-g,0),v.push(0,0,1),f.push(y/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let g=0;g<o;g++){let y=g+c*_,x=g+c*(_+1),A=g+1+c*(_+1),M=g+1+c*_;p.push(y,x,M),p.push(x,A,M)}this.setIndex(p),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ie={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},fe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},yn={basic:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new we(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:It([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:It([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new we(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:It([fe.points,fe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:It([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:It([fe.common,fe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:It([fe.sprite,fe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:It([fe.common,fe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:It([fe.lights,fe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};yn.physical={uniforms:It([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};Oa={r:0,b:0,g:0};Rr=class extends xs{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dp=[.125,.215,.35,.446,.526,.582],os=20,Jl=new Rr,Up=new we,$l=null,Ql=0,ec=0,Ci=(1+Math.sqrt(5))/2,dr=1/Ci,kp=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Ci,dr),new E(0,Ci,-dr),new E(dr,0,Ci),new E(-dr,0,Ci),new E(Ci,dr,0),new E(-Ci,dr,0)],uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Ql,ec),e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:ys,format:pn,colorSpace:vt,depthBuffer:!1},i=Op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Dp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=Dp[d-a+4-1]:d===0&&(m=0),c.push(m);let v=1/(p-2),f=-v,_=1+v,g=[f,f,_,f,_,_,f,f,_,_,f,_],y=6,x=6,A=3,M=2,S=1,D=new Float32Array(A*x*y),N=new Float32Array(M*x*y),z=new Float32Array(S*x*y);for(let L=0;L<y;L++){let X=L%3*2/3-1,q=L>2?0:-1,he=[X,q,0,X+2/3,q,0,X+2/3,q+1,0,X,q,0,X+2/3,q+1,0,X,q+1,0];D.set(he,A*x*L),N.set(g,M*x*L);let ye=[L,L,L,L,L,L];z.set(ye,S*x*L)}let te=new Je;te.setAttribute("position",new gt(D,A)),te.setAttribute("uv",new gt(N,M)),te.setAttribute("faceIndex",new gt(z,S)),o.push(te),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(os),h=new E(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Jl)}_sceneToCubeUV(e,t,n,i){let s=new mt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Up),l.toneMapping=ai,l.autoClear=!1;let u=new Sn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),d=new it(new Fn,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Up),p=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):f===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let _=this._cubeSize;za(i,f*_,v>2?_:0,_,_),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===_r||e.mapping===xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;za(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Jl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=kp[(i-1)%kp.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new it(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,v=isFinite(s)?1+Math.floor(3*m):os;v>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let f=[],_=0;for(let x=0;x<os;++x){let A=x/m,M=Math.exp(-A*A/2);f.push(M),x===0?_+=M:x<v&&(_+=2*M)}for(let x=0;x<f.length;x++)f[x]=f[x]/_;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let y=this._sizeLods[i];za(t,3*y*(i>g-4?i-g+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,Jl)}};po=class extends St{constructor(e,t,n,i,s,a,o,l,c,h){if((h=h!==void 0?h:Di)!==Di&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=ri),n===void 0&&h===br&&(n=Ni),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wf=new St,jf=new po(1,1);jf.compareFunction=515;Xf=new so,qf=new bc,Yf=new ho,Bp=[],Hp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return L0;case 35674:return P0;case 35675:return I0;case 35676:return N0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return k0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return F0;case 36295:return B0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return j0}})(t.type)}},wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return K0;case 35674:return Z0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return Q0;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}})(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);uv(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};dv=37297,pv=0;gv=/^[ \t]*#include +<([\w\d./]+)>/gm;vv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);_v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Mv=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cc(e),t.set(e,n)),n}},Cc=class{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}};Rv=0;Lc=class extends Wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ic=class extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ct=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},kv={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),_=this._getHandJoint(c,v);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=f.radius),_.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nc=class extends li{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,v=t.getContextAttributes(),f=null,_=null,g=[],y=[],x=new pe,A=null,M=new mt;M.layers.enable(1),M.viewport=new Qe;let S=new mt;S.layers.enable(2),S.viewport=new Qe;let D=[M,S],N=new Ic;N.layers.enable(1),N.layers.enable(2);let z=null,te=null;function L(H){let Q=y.indexOf(H.inputSource);if(Q===-1)return;let me=g[Q];me!==void 0&&(me.update(H.inputSource,H.frame,c||a),me.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",q);for(let H=0;H<g.length;H++){let Q=y[H];Q!==null&&(y[H]=null,g[H].disconnect(Q))}z=null,te=null,e.setRenderTarget(f),p=null,d=null,u=null,i=null,_=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}function q(H){for(let Q=0;Q<H.removed.length;Q++){let me=H.removed[Q],w=y.indexOf(me);w>=0&&(y[w]=null,g[w].disconnect(me))}for(let Q=0;Q<H.added.length;Q++){let me=H.added[Q],w=y.indexOf(me);if(w===-1){for(let F=0;F<g.length;F++){if(F>=y.length){y.push(me),w=F;break}if(y[F]===null){y[F]=me,w=F;break}}if(w===-1)break}let T=g[w];T&&T.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=g[H];return Q===void 0&&(Q=new fs,g[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=g[H];return Q===void 0&&(Q=new fs,g[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=g[H];return Q===void 0&&(Q=new fs,g[H]=Q),Q.getHandSpace()},this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",X),i.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new zn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Q=null,me=null,w=null;v.depth&&(w=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=v.stencil?br:Di,me=v.stencil?Ni:ri);let T={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(T),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new zn(d.textureWidth,d.textureHeight,{format:pn,type:Ii,depthTexture:new po(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(_).__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let he=new E,ye=new E;function re(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;N.near=S.near=M.near=H.near,N.far=S.far=M.far=H.far,z===N.near&&te===N.far||(i.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,te=N.far);let Q=H.parent,me=N.cameras;re(N,Q);for(let w=0;w<me.length;w++)re(me[w],Q);me.length===2?(function(w,T,F){he.setFromMatrixPosition(T.matrixWorld),ye.setFromMatrixPosition(F.matrixWorld);let ee=he.distanceTo(ye),I=T.projectionMatrix.elements,G=F.projectionMatrix.elements,R=I[14]/(I[10]-1),P=I[14]/(I[10]+1),O=(I[9]+1)/I[5],Y=(I[9]-1)/I[5],U=(I[8]-1)/I[0],b=(G[8]+1)/G[0],oe=R*U,V=R*b,j=ee/(-U+b),ce=j*-U;T.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ce),w.translateZ(j),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();let ge=R+j,_e=P+j,xe=oe-ce,Le=V+(ee-ce),be=O*P/_e*ge,Me=Y*P/_e*ge;w.projectionMatrix.makePerspective(xe,Le,be,Me,ge,_e),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()})(N,M,S):N.projectionMatrix.copy(M.projectionMatrix),(function(w,T,F){F===null?w.matrix.copy(T.matrixWorld):(w.matrix.copy(F.matrixWorld),w.matrix.invert(),w.matrix.multiply(T.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(T.projectionMatrix),w.projectionMatrixInverse.copy(T.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Tr*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(H,N,Q)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let J=null,se=new Vf;se.setAnimationLoop((function(H,Q){if(h=Q.getViewerPose(c||a),m=Q,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let w=!1;me.length!==N.cameras.length&&(N.cameras.length=0,w=!0);for(let T=0;T<me.length;T++){let F=me[T],ee=null;if(p!==null)ee=p.getViewport(F);else{let G=u.getViewSubImage(d,F);ee=G.viewport,T===0&&(e.setRenderTargetTextures(_,G.colorTexture,d.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(_))}let I=D[T];I===void 0&&(I=new mt,I.layers.enable(T),I.viewport=new Qe,D[T]=I),I.matrix.fromArray(F.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(F.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ee.x,ee.y,ee.width,ee.height),T===0&&(N.matrix.copy(I.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),w===!0&&N.cameras.push(I)}}for(let me=0;me<g.length;me++){let w=y[me],T=g[me];w!==null&&T!==void 0&&T.update(w,Q,c||a)}J&&J(H,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null})),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}};bs=class{constructor(e={}){let{canvas:t=qg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),m=new Int32Array(4),v=null,f=null,_=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;let y=this,x=!1,A=0,M=0,S=null,D=-1,N=null,z=new Qe,te=new Qe,L=null,X=new we(0),q=0,he=t.width,ye=t.height,re=1,J=null,se=null,H=new Qe(0,0,he,ye),Q=new Qe(0,0,he,ye),me=!1,w=new Ar,T=!1,F=!1,ee=null,I=new Ee,G=new pe,R=new E,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function O(){return S===null?re:1}let Y,U,b,oe,V,j,ce,ge,_e,xe,Le,be,Me,Ne,xt,Te,je,Fe,ea,ji,ta,Xt,Bt,Xi,$=n;function na(C,K){for(let ne=0;ne<C.length;ne++){let ue=C[ne],ae=t.getContext(ue,K);if(ae!==null)return ae}return null}try{let C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",gu,!1),t.addEventListener("webglcontextrestored",vu,!1),t.addEventListener("webglcontextcreationerror",yu,!1),$===null){let K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),$=na(K,C),$===null)throw na(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function Hr(){Y=new _0($),U=new m0($,Y,e),Y.init(U),Xt=new Uv($,Y,U),b=new Nv($,Y,U),oe=new M0($),V=new Tv,j=new Dv($,Y,b,V,U,Xt,oe),ce=new v0(y),ge=new y0(y),_e=new u0($,U),Bt=new p0($,Y,_e,U),xe=new x0($,_e,oe,Bt),Le=new E0($,xe,_e,oe),ea=new w0($,U,j),Te=new g0(V),be=new Sv(y,ce,ge,Y,U,Bt,Te),Me=new Ov(y,V),Ne=new Ev,xt=new Pv(Y,U),Fe=new d0(y,ce,ge,b,Le,d,l),je=new Iv(y,Le,U),Xi=new zv($,oe,U,b),ji=new f0($,Y,oe,U),ta=new b0($,Y,oe,U),oe.programs=be.programs,y.capabilities=U,y.extensions=Y,y.properties=V,y.renderLists=Ne,y.shadowMap=je,y.state=b,y.info=oe}Hr();let wt=new Nc(y,$);function gu(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function vu(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let C=oe.autoReset,K=je.enabled,ne=je.autoUpdate,ue=je.needsUpdate,ae=je.type;Hr(),oe.autoReset=C,je.enabled=K,je.autoUpdate=ne,je.needsUpdate=ue,je.type=ae}function yu(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _u(C){let K=C.target;K.removeEventListener("dispose",_u),(function(ne){(function(ue){let ae=V.get(ue).programs;ae!==void 0&&(ae.forEach((function(ve){be.releaseProgram(ve)})),ue.isShaderMaterial&&be.releaseShaderCache(ue))})(ne),V.remove(ne)})(K)}function xu(C,K,ne){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=Ot,C.needsUpdate=!0,ra(C,K,ne),C.side=Mn,C.needsUpdate=!0,ra(C,K,ne),C.side=2):ra(C,K,ne)}this.xr=wt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let C=Y.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Y.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(C){C!==void 0&&(re=C,this.setSize(he,ye,!1))},this.getSize=function(C){return C.set(he,ye)},this.setSize=function(C,K,ne=!0){wt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(he=C,ye=K,t.width=Math.floor(C*re),t.height=Math.floor(K*re),ne===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K))},this.getDrawingBufferSize=function(C){return C.set(he*re,ye*re).floor()},this.setDrawingBufferSize=function(C,K,ne){he=C,ye=K,re=ne,t.width=Math.floor(C*ne),t.height=Math.floor(K*ne),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,K,ne,ue){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,K,ne,ue),b.viewport(z.copy(H).multiplyScalar(re).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,K,ne,ue){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,K,ne,ue),b.scissor(te.copy(Q).multiplyScalar(re).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){b.setScissorTest(me=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(C=!0,K=!0,ne=!0){let ue=0;if(C){let ae=!1;if(S!==null){let ve=S.texture.format;ae=ve===Uf||ve===Df||ve===Nf}if(ae){let ve=S.texture.type,Re=ve===Ii||ve===ri||ve===_h||ve===Ni||ve===Pf||ve===If,Ce=Fe.getClearColor(),Ue=Fe.getClearAlpha(),ze=Ce.r,Be=Ce.g,Ge=Ce.b;Re?(p[0]=ze,p[1]=Be,p[2]=Ge,p[3]=Ue,$.clearBufferuiv($.COLOR,0,p)):(m[0]=ze,m[1]=Be,m[2]=Ge,m[3]=Ue,$.clearBufferiv($.COLOR,0,m))}else ue|=$.COLOR_BUFFER_BIT}K&&(ue|=$.DEPTH_BUFFER_BIT),ne&&(ue|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gu,!1),t.removeEventListener("webglcontextrestored",vu,!1),t.removeEventListener("webglcontextcreationerror",yu,!1),Ne.dispose(),xt.dispose(),V.dispose(),ce.dispose(),ge.dispose(),Le.dispose(),Bt.dispose(),Xi.dispose(),be.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",bu),wt.removeEventListener("sessionend",Mu),ee&&(ee.dispose(),ee=null),mi.stop()},this.renderBufferDirect=function(C,K,ne,ue,ae,ve){K===null&&(K=P);let Re=ae.isMesh&&ae.matrixWorld.determinant()<0,Ce=(function(pt,qt,Ut,Ve,Xe){qt.isScene!==!0&&(qt=P),j.resetTextureUnits();let Gr=qt.fog,Yo=Ve.isMeshStandardMaterial?qt.environment:null,Hm=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:vt,sa=(Ve.isMeshStandardMaterial?ge:ce).get(Ve.envMap||Yo),Gm=Ve.vertexColors===!0&&!!Ut.attributes.color&&Ut.attributes.color.itemSize===4,Vm=!!Ut.attributes.tangent&&(!!Ve.normalMap||Ve.anisotropy>0),Wm=!!Ut.morphAttributes.position,jm=!!Ut.morphAttributes.normal,Xm=!!Ut.morphAttributes.color,Ru=ai;Ve.toneMapped&&(S!==null&&S.isXRRenderTarget!==!0||(Ru=y.toneMapping));let Cu=Ut.morphAttributes.position||Ut.morphAttributes.normal||Ut.morphAttributes.color,qm=Cu!==void 0?Cu.length:0,qe=V.get(Ve),Ym=f.state.lights;if(T===!0&&(F===!0||pt!==N)){let Yt=pt===N&&Ve.id===D;Te.setState(Ve,pt,Yt)}let an=!1;Ve.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==Ym.state.version||qe.outputColorSpace!==Hm||Xe.isBatchedMesh&&qe.batching===!1?an=!0:Xe.isBatchedMesh||qe.batching!==!0?Xe.isInstancedMesh&&qe.instancing===!1?an=!0:Xe.isInstancedMesh||qe.instancing!==!0?Xe.isSkinnedMesh&&qe.skinning===!1?an=!0:Xe.isSkinnedMesh||qe.skinning!==!0?Xe.isInstancedMesh&&qe.instancingColor===!0&&Xe.instanceColor===null||Xe.isInstancedMesh&&qe.instancingColor===!1&&Xe.instanceColor!==null||qe.envMap!==sa||Ve.fog===!0&&qe.fog!==Gr?an=!0:qe.numClippingPlanes===void 0||qe.numClippingPlanes===Te.numPlanes&&qe.numIntersection===Te.numIntersection?(qe.vertexAlphas!==Gm||qe.vertexTangents!==Vm||qe.morphTargets!==Wm||qe.morphNormals!==jm||qe.morphColors!==Xm||qe.toneMapping!==Ru||U.isWebGL2===!0&&qe.morphTargetsCount!==qm)&&(an=!0):an=!0:an=!0:an=!0:an=!0:(an=!0,qe.__version=Ve.version);let vi=qe.currentProgram;an===!0&&(vi=ra(Ve,qt,Xe));let Lu=!1,Vr=!1,Ko=!1,Et=vi.getUniforms(),yi=qe.uniforms;if(b.useProgram(vi.program)&&(Lu=!0,Vr=!0,Ko=!0),Ve.id!==D&&(D=Ve.id,Vr=!0),Lu||N!==pt){Et.setValue($,"projectionMatrix",pt.projectionMatrix),Et.setValue($,"viewMatrix",pt.matrixWorldInverse);let Yt=Et.map.cameraPosition;Yt!==void 0&&Yt.setValue($,R.setFromMatrixPosition(pt.matrixWorld)),U.logarithmicDepthBuffer&&Et.setValue($,"logDepthBufFC",2/(Math.log(pt.far+1)/Math.LN2)),(Ve.isMeshPhongMaterial||Ve.isMeshToonMaterial||Ve.isMeshLambertMaterial||Ve.isMeshBasicMaterial||Ve.isMeshStandardMaterial||Ve.isShaderMaterial)&&Et.setValue($,"isOrthographic",pt.isOrthographicCamera===!0),N!==pt&&(N=pt,Vr=!0,Ko=!0)}if(Xe.isSkinnedMesh){Et.setOptional($,Xe,"bindMatrix"),Et.setOptional($,Xe,"bindMatrixInverse");let Yt=Xe.skeleton;Yt&&(U.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Et.setValue($,"boneTexture",Yt.boneTexture,j)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Xe.isBatchedMesh&&(Et.setOptional($,Xe,"batchingTexture"),Et.setValue($,"batchingTexture",Xe._matricesTexture,j));let Zo=Ut.morphAttributes;(Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0&&U.isWebGL2===!0)&&ea.update(Xe,Ut,vi),(Vr||qe.receiveShadow!==Xe.receiveShadow)&&(qe.receiveShadow=Xe.receiveShadow,Et.setValue($,"receiveShadow",Xe.receiveShadow)),Ve.isMeshGouraudMaterial&&Ve.envMap!==null&&(yi.envMap.value=sa,yi.flipEnvMap.value=sa.isCubeTexture&&sa.isRenderTargetTexture===!1?-1:1),Vr&&(Et.setValue($,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&(on=Ko,(gn=yi).ambientLightColor.needsUpdate=on,gn.lightProbe.needsUpdate=on,gn.directionalLights.needsUpdate=on,gn.directionalLightShadows.needsUpdate=on,gn.pointLights.needsUpdate=on,gn.pointLightShadows.needsUpdate=on,gn.spotLights.needsUpdate=on,gn.spotLightShadows.needsUpdate=on,gn.rectAreaLights.needsUpdate=on,gn.hemisphereLights.needsUpdate=on),Gr&&Ve.fog===!0&&Me.refreshFogUniforms(yi,Gr),Me.refreshMaterialUniforms(yi,Ve,re,ye,ee),yr.upload($,Eu(qe),yi,j));var gn,on;if(Ve.isShaderMaterial&&Ve.uniformsNeedUpdate===!0&&(yr.upload($,Eu(qe),yi,j),Ve.uniformsNeedUpdate=!1),Ve.isSpriteMaterial&&Et.setValue($,"center",Xe.center),Et.setValue($,"modelViewMatrix",Xe.modelViewMatrix),Et.setValue($,"normalMatrix",Xe.normalMatrix),Et.setValue($,"modelMatrix",Xe.matrixWorld),Ve.isShaderMaterial||Ve.isRawShaderMaterial){let Yt=Ve.uniformsGroups;for(let Jo=0,Km=Yt.length;Jo<Km;Jo++)if(U.isWebGL2){let Pu=Yt[Jo];Xi.update(Pu,vi),Xi.bind(Pu,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi})(C,K,ne,ue,ae);b.setMaterial(ue,Re);let Ue=ne.index,ze=1;if(ue.wireframe===!0){if(Ue=xe.getWireframeAttribute(ne),Ue===void 0)return;ze=2}let Be=ne.drawRange,Ge=ne.attributes.position,st=Be.start*ze,sn=(Be.start+Be.count)*ze;ve!==null&&(st=Math.max(st,ve.start*ze),sn=Math.min(sn,(ve.start+ve.count)*ze)),Ue!==null?(st=Math.max(st,0),sn=Math.min(sn,Ue.count)):Ge!=null&&(st=Math.max(st,0),sn=Math.min(sn,Ge.count));let wn=sn-st;if(wn<0||wn===1/0)return;let gi;Bt.setup(ae,ue,Ce,ne,Ue);let at=ji;if(Ue!==null&&(gi=_e.get(Ue),at=ta,at.setIndex(gi)),ae.isMesh)ue.wireframe===!0?(b.setLineWidth(ue.wireframeLinewidth*O()),at.setMode($.LINES)):at.setMode($.TRIANGLES);else if(ae.isLine){let pt=ue.linewidth;pt===void 0&&(pt=1),b.setLineWidth(pt*O()),ae.isLineSegments?at.setMode($.LINES):ae.isLineLoop?at.setMode($.LINE_LOOP):at.setMode($.LINE_STRIP)}else ae.isPoints?at.setMode($.POINTS):ae.isSprite&&at.setMode($.TRIANGLES);if(ae.isBatchedMesh)at.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)at.renderInstances(st,wn,ae.count);else if(ne.isInstancedBufferGeometry){let pt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,qt=Math.min(ne.instanceCount,pt);at.renderInstances(st,wn,qt)}else at.render(st,wn)},this.compile=function(C,K,ne=null){ne===null&&(ne=C),f=xt.get(ne),f.init(),g.push(f),ne.traverseVisible((function(ae){ae.isLight&&ae.layers.test(K.layers)&&(f.pushLight(ae),ae.castShadow&&f.pushShadow(ae))})),C!==ne&&C.traverseVisible((function(ae){ae.isLight&&ae.layers.test(K.layers)&&(f.pushLight(ae),ae.castShadow&&f.pushShadow(ae))})),f.setupLights(y._useLegacyLights);let ue=new Set;return C.traverse((function(ae){let ve=ae.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let Ce=ve[Re];xu(Ce,ne,ae),ue.add(Ce)}else xu(ve,ne,ae),ue.add(ve)})),g.pop(),f=null,ue},this.compileAsync=function(C,K,ne=null){let ue=this.compile(C,K,ne);return new Promise((ae=>{function ve(){ue.forEach((function(Re){V.get(Re).currentProgram.isReady()&&ue.delete(Re)})),ue.size!==0?setTimeout(ve,10):ae(C)}Y.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)}))};let qo=null;function bu(){mi.stop()}function Mu(){mi.start()}let mi=new Vf;function Su(C,K,ne,ue){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||w.intersectsSprite(C)){ue&&R.setFromMatrixPosition(C.matrixWorld).applyMatrix4(I);let ve=Le.update(C),Re=C.material;Re.visible&&v.push(C,ve,Re,ne,R.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||w.intersectsObject(C))){let ve=Le.update(C),Re=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),R.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),R.copy(ve.boundingSphere.center)),R.applyMatrix4(C.matrixWorld).applyMatrix4(I)),Array.isArray(Re)){let Ce=ve.groups;for(let Ue=0,ze=Ce.length;Ue<ze;Ue++){let Be=Ce[Ue],Ge=Re[Be.materialIndex];Ge&&Ge.visible&&v.push(C,ve,Ge,ne,R.z,Be)}}else Re.visible&&v.push(C,ve,Re,ne,R.z,null)}}let ae=C.children;for(let ve=0,Re=ae.length;ve<Re;ve++)Su(ae[ve],K,ne,ue)}function Tu(C,K,ne,ue){let ae=C.opaque,ve=C.transmissive,Re=C.transparent;f.setupLightsView(ne),T===!0&&Te.setGlobalState(y.clippingPlanes,ne),ve.length>0&&(function(Ce,Ue,ze,Be){if((ze.isScene===!0?ze.overrideMaterial:null)!==null)return;let st=U.isWebGL2;ee===null&&(ee=new zn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?ys:Ii,minFilter:ki,samples:st?4:0})),y.getDrawingBufferSize(G),st?ee.setSize(G.x,G.y):ee.setSize(no(G.x),no(G.y));let sn=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(X),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear();let wn=y.toneMapping;y.toneMapping=ai,ia(Ce,ze,Be),j.updateMultisampleRenderTarget(ee),j.updateRenderTargetMipmap(ee);let gi=!1;for(let at=0,pt=Ue.length;at<pt;at++){let qt=Ue[at],Ut=qt.object,Ve=qt.geometry,Xe=qt.material,Gr=qt.group;if(Xe.side===2&&Ut.layers.test(Be.layers)){let Yo=Xe.side;Xe.side=Ot,Xe.needsUpdate=!0,wu(Ut,ze,Be,Ve,Xe,Gr),Xe.side=Yo,Xe.needsUpdate=!0,gi=!0}}gi===!0&&(j.updateMultisampleRenderTarget(ee),j.updateRenderTargetMipmap(ee)),y.setRenderTarget(sn),y.setClearColor(X,q),y.toneMapping=wn})(ae,ve,K,ne),ue&&b.viewport(z.copy(ue)),ae.length>0&&ia(ae,K,ne),ve.length>0&&ia(ve,K,ne),Re.length>0&&ia(Re,K,ne),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ia(C,K,ne){let ue=K.isScene===!0?K.overrideMaterial:null;for(let ae=0,ve=C.length;ae<ve;ae++){let Re=C[ae],Ce=Re.object,Ue=Re.geometry,ze=ue===null?Re.material:ue,Be=Re.group;Ce.layers.test(ne.layers)&&wu(Ce,K,ne,Ue,ze,Be)}}function wu(C,K,ne,ue,ae,ve){C.onBeforeRender(y,K,ne,ue,ae,ve),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(y,K,ne,ue,C,ve),ae.transparent===!0&&ae.side===2&&ae.forceSinglePass===!1?(ae.side=Ot,ae.needsUpdate=!0,y.renderBufferDirect(ne,K,ue,ae,C,ve),ae.side=Mn,ae.needsUpdate=!0,y.renderBufferDirect(ne,K,ue,ae,C,ve),ae.side=2):y.renderBufferDirect(ne,K,ue,ae,C,ve),C.onAfterRender(y,K,ne,ue,ae,ve)}function ra(C,K,ne){K.isScene!==!0&&(K=P);let ue=V.get(C),ae=f.state.lights,ve=f.state.shadowsArray,Re=ae.state.version,Ce=be.getParameters(C,ae.state,ve,K,ne),Ue=be.getProgramCacheKey(Ce),ze=ue.programs;ue.environment=C.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(C.isMeshStandardMaterial?ge:ce).get(C.envMap||ue.environment),ze===void 0&&(C.addEventListener("dispose",_u),ze=new Map,ue.programs=ze);let Be=ze.get(Ue);if(Be!==void 0){if(ue.currentProgram===Be&&ue.lightsStateVersion===Re)return Au(C,Ce),Be}else Ce.uniforms=be.getUniforms(C),C.onBuild(ne,Ce,y),C.onBeforeCompile(Ce,y),Be=be.acquireProgram(Ce,Ue),ze.set(Ue,Be),ue.uniforms=Ce.uniforms;let Ge=ue.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(Ge.clippingPlanes=Te.uniform),Au(C,Ce),ue.needsLights=(function(st){return st.isMeshLambertMaterial||st.isMeshToonMaterial||st.isMeshPhongMaterial||st.isMeshStandardMaterial||st.isShadowMaterial||st.isShaderMaterial&&st.lights===!0})(C),ue.lightsStateVersion=Re,ue.needsLights&&(Ge.ambientLightColor.value=ae.state.ambient,Ge.lightProbe.value=ae.state.probe,Ge.directionalLights.value=ae.state.directional,Ge.directionalLightShadows.value=ae.state.directionalShadow,Ge.spotLights.value=ae.state.spot,Ge.spotLightShadows.value=ae.state.spotShadow,Ge.rectAreaLights.value=ae.state.rectArea,Ge.ltc_1.value=ae.state.rectAreaLTC1,Ge.ltc_2.value=ae.state.rectAreaLTC2,Ge.pointLights.value=ae.state.point,Ge.pointLightShadows.value=ae.state.pointShadow,Ge.hemisphereLights.value=ae.state.hemi,Ge.directionalShadowMap.value=ae.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ge.spotShadowMap.value=ae.state.spotShadowMap,Ge.spotLightMatrix.value=ae.state.spotLightMatrix,Ge.spotLightMap.value=ae.state.spotLightMap,Ge.pointShadowMap.value=ae.state.pointShadowMap,Ge.pointShadowMatrix.value=ae.state.pointShadowMatrix),ue.currentProgram=Be,ue.uniformsList=null,Be}function Eu(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=yr.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Au(C,K){let ne=V.get(C);ne.outputColorSpace=K.outputColorSpace,ne.batching=K.batching,ne.instancing=K.instancing,ne.instancingColor=K.instancingColor,ne.skinning=K.skinning,ne.morphTargets=K.morphTargets,ne.morphNormals=K.morphNormals,ne.morphColors=K.morphColors,ne.morphTargetsCount=K.morphTargetsCount,ne.numClippingPlanes=K.numClippingPlanes,ne.numIntersection=K.numClipIntersection,ne.vertexAlphas=K.vertexAlphas,ne.vertexTangents=K.vertexTangents,ne.toneMapping=K.toneMapping}mi.setAnimationLoop((function(C){qo&&qo(C)})),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(C){qo=C,wt.setAnimationLoop(C),C===null?mi.stop():mi.start()},wt.addEventListener("sessionstart",bu),wt.addEventListener("sessionend",Mu),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(K),K=wt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,K,S),f=xt.get(C,g.length),f.init(),g.push(f),I.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),w.setFromProjectionMatrix(I),F=this.localClippingEnabled,T=Te.init(this.clippingPlanes,F),v=Ne.get(C,_.length),v.init(),_.push(v),Su(C,K,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(J,se),this.info.render.frame++,T===!0&&Te.beginShadows();let ne=f.state.shadowsArray;if(je.render(ne,C,K),T===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),Fe.render(v,C),f.setupLights(y._useLegacyLights),K.isArrayCamera){let ue=K.cameras;for(let ae=0,ve=ue.length;ae<ve;ae++){let Re=ue[ae];Tu(v,C,Re,Re.viewport)}}else Tu(v,C,K);S!==null&&(j.updateMultisampleRenderTarget(S),j.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(y,C,K),Bt.resetDefaultState(),D=-1,N=null,g.pop(),f=g.length>0?g[g.length-1]:null,_.pop(),v=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,K,ne){V.get(C.texture).__webglTexture=K,V.get(C.depthTexture).__webglTexture=ne;let ue=V.get(C);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=ne===void 0,ue.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){let ne=V.get(C);ne.__webglFramebuffer=K,ne.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ne=0){S=C,A=K,M=ne;let ue=!0,ae=null,ve=!1,Re=!1;if(C){let Ce=V.get(C);Ce.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer($.FRAMEBUFFER,null),ue=!1):Ce.__webglFramebuffer===void 0?j.setupRenderTarget(C):Ce.__hasExternalTextures&&j.rebindTextures(C,V.get(C.texture).__webglTexture,V.get(C.depthTexture).__webglTexture);let Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Re=!0);let ze=V.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ae=Array.isArray(ze[K])?ze[K][ne]:ze[K],ve=!0):ae=U.isWebGL2&&C.samples>0&&j.useMultisampledRTT(C)===!1?V.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?ze[ne]:ze,z.copy(C.viewport),te.copy(C.scissor),L=C.scissorTest}else z.copy(H).multiplyScalar(re).floor(),te.copy(Q).multiplyScalar(re).floor(),L=me;if(b.bindFramebuffer($.FRAMEBUFFER,ae)&&U.drawBuffers&&ue&&b.drawBuffers(C,ae),b.viewport(z),b.scissor(te),b.setScissorTest(L),ve){let Ce=V.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce.__webglTexture,ne)}else if(Re){let Ce=V.get(C.texture),Ue=K||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ce.__webglTexture,ne||0,Ue)}D=-1},this.readRenderTargetPixels=function(C,K,ne,ue,ae,ve,Re){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=V.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){b.bindFramebuffer($.FRAMEBUFFER,Ce);try{let Ue=C.texture,ze=Ue.format,Be=Ue.type;if(ze!==pn&&Xt.convert(ze)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ge=Be===ys&&(Y.has("EXT_color_buffer_half_float")||U.isWebGL2&&Y.has("EXT_color_buffer_float"));if(!(Be===Ii||Xt.convert(Be)===$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)||Be===On&&(U.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float"))||Ge))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");K>=0&&K<=C.width-ue&&ne>=0&&ne<=C.height-ae&&$.readPixels(K,ne,ue,ae,Xt.convert(ze),Xt.convert(Be),ve)}finally{let Ue=S!==null?V.get(S).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,K,ne=0){let ue=Math.pow(2,-ne),ae=Math.floor(K.image.width*ue),ve=Math.floor(K.image.height*ue);j.setTexture2D(K,0),$.copyTexSubImage2D($.TEXTURE_2D,ne,0,0,C.x,C.y,ae,ve),b.unbindTexture()},this.copyTextureToTexture=function(C,K,ne,ue=0){let ae=K.image.width,ve=K.image.height,Re=Xt.convert(ne.format),Ce=Xt.convert(ne.type);j.setTexture2D(ne,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ne.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ne.unpackAlignment),K.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ue,C.x,C.y,ae,ve,Re,Ce,K.image.data):K.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ue,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,Re,K.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,ue,C.x,C.y,Re,Ce,K.image),ue===0&&ne.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ne,ue,ae=0){if(y.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ve=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,Ce=C.max.z-C.min.z+1,Ue=Xt.convert(ue.format),ze=Xt.convert(ue.type),Be;if(ue.isData3DTexture)j.setTexture3D(ue,0),Be=$.TEXTURE_3D;else{if(!ue.isDataArrayTexture&&!ue.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");j.setTexture2DArray(ue,0),Be=$.TEXTURE_2D_ARRAY}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ue.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ue.unpackAlignment);let Ge=$.getParameter($.UNPACK_ROW_LENGTH),st=$.getParameter($.UNPACK_IMAGE_HEIGHT),sn=$.getParameter($.UNPACK_SKIP_PIXELS),wn=$.getParameter($.UNPACK_SKIP_ROWS),gi=$.getParameter($.UNPACK_SKIP_IMAGES),at=ne.isCompressedTexture?ne.mipmaps[ae]:ne.image;$.pixelStorei($.UNPACK_ROW_LENGTH,at.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,at.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,C.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,C.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?$.texSubImage3D(Be,ae,K.x,K.y,K.z,ve,Re,Ce,Ue,ze,at.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Be,ae,K.x,K.y,K.z,ve,Re,Ce,Ue,at.data)):$.texSubImage3D(Be,ae,K.x,K.y,K.z,ve,Re,Ce,Ue,ze,at),$.pixelStorei($.UNPACK_ROW_LENGTH,Ge),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,st),$.pixelStorei($.UNPACK_SKIP_PIXELS,sn),$.pixelStorei($.UNPACK_SKIP_ROWS,wn),$.pixelStorei($.UNPACK_SKIP_IMAGES,gi),ae===0&&ue.generateMipmaps&&$.generateMipmap(Be),b.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){A=0,M=0,S=null,b.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===xh?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?Ui:zf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ui?Ze:vt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Dc=class extends bs{};Dc.prototype.isWebGL1Renderer=!0;fo=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mo=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ms=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pt=new E,Ss=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},N_=new E,D_=new E,U_=new E,k_=new pe,O_=new pe,z_=new Ee,F_=new E,B_=new E,H_=new E,G_=new pe,V_=new pe,W_=new pe,j_=new E,X_=new E,tf=new E,nf=new Qe,rf=new Qe,Fv=new E,sf=new Ee,Fa=new E,nc=new zt,af=new Ee,ic=new wr,go=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hd,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nc.copy(this.boundingSphere),nc.applyMatrix4(i),e.ray.intersectsSphere(nc)!==!1&&(af.copy(i).invert(),ic.copy(e.ray).applyMatrix4(af),this.boundingBox!==null&&ic.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;nf.fromBufferAttribute(i.attributes.skinIndex,e),rf.fromBufferAttribute(i.attributes.skinWeight,e),tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=rf.getComponent(s);if(a!==0){let o=nf.getComponent(s);sf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Fv.copy(tf).applyMatrix4(sf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ts=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Uc=class extends St{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},of=new Ee,Bv=new Ee,vo=class r{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Bv;of.multiplyMatrices(o,t[s]),of.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Uc(t,e,e,pn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ts),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Fi=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new Ee,lf=new Ee,Ba=[],cf=new Tt,Hv=new Ee,ls=new it,cs=new zt,yo=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),cf.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(cf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),cs.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),e.ray.intersectsSphere(cs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fr),lf.multiplyMatrices(n,fr),ls.matrixWorld=lf,ls.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){let l=Ba[a];l.instanceId=s,l.object=this,t.push(l)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},kc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}},q_=new Ee,Y_=new Ee,K_=new Ee,Z_=new Ee,J_=new Ar,$_=new Tt,Q_=new zt,ex=new E,tx=new kc,nx=new it,ws=class extends Wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hf=new E,uf=new E,df=new Ee,rc=new wr,Ha=new zt,Cr=class extends lt{constructor(e=new Je,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hf.fromBufferAttribute(t,i-1),uf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hf.distanceTo(uf);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(i),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;df.copy(i).invert(),rc.copy(e.ray).applyMatrix4(df);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,h=new E,u=new E,d=new E,p=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null)for(let f=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count)-1;f<_;f+=p){let g=m.getX(f),y=m.getX(f+1);if(c.fromBufferAttribute(v,g),h.fromBufferAttribute(v,y),rc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}else for(let f=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count)-1;f<_;f+=p){if(c.fromBufferAttribute(v,f),h.fromBufferAttribute(v,f+1),rc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(d);g<e.near||g>e.far||t.push({distance:g,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},pf=new E,ff=new E,_o=class extends Cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pf.fromBufferAttribute(t,i),ff.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pf.distanceTo(ff);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xo=class extends Cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Es=class extends Wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mf=new Ee,Oc=new wr,Ga=new zt,Va=new E,bo=class extends lt{constructor(e=new Je,t=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;mf.copy(i).invert(),Oc.copy(e.ray).applyMatrix4(mf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Va.fromBufferAttribute(h,p),gf(Va,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Va.fromBufferAttribute(h,u),gf(Va,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};ci=class extends St{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new pe:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,i=[],s=[],a=[],o=new E,l=new Ee;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ft(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(ft(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},As=class extends en{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new pe,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zc=class extends As{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};Wa=new E,sc=new Mh,ac=new Mh,oc=new Mh,Fc=class extends en{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Wa.subVectors(i[0],i[1]).add(i[0]),o=Wa);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Wa.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),m<1e-4&&(m=v),f<1e-4&&(f=v),sc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,v,f),ac.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,v,f),oc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,v,f)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),ac.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),oc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(sc.calc(h),ac.calc(h),oc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Mo=class extends en{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,i.x,s.x,a.x,o.x),gs(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends en{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,i.x,s.x,a.x,o.x),gs(e,i.y,s.y,a.y,o.y),gs(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends en{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends en{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends en{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ms(e,i.x,s.x,a.x),ms(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends en{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ms(e,i.x,s.x,a.x),ms(e,i.y,s.y,a.y),ms(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(vf(o,l.x,c.x,h.x,u.x),vf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new pe().fromArray(i))}return this}},Ao=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:Fc,CubicBezierCurve:Mo,CubicBezierCurve3:Bc,EllipseCurve:As,LineCurve:So,LineCurve3:Hc,QuadraticBezierCurve:To,QuadraticBezierCurve3:wo,SplineCurve:Eo}),Gc=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ao[i.type]().fromJSON(i))}return this}},Rs=class extends Gc{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new So(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new To(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Mo(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Eo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new As(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Lr=class r extends Je{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ft(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new pe,p=new E,m=new E,v=new E,f=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:f=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-f,p.z=0*_,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:f=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-f,p.z=0*_,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let g=0;g<=t;g++){let y=n+g*h*i,x=Math.sin(y),A=Math.cos(y);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*x,u.y=e[M].y,u.z=e[M].x*A,a.push(u.x,u.y,u.z),d.x=g/t,d.y=M/(e.length-1),o.push(d.x,d.y);let S=l[3*M+0]*x,D=l[3*M+1],N=l[3*M+0]*A;c.push(S,D,N)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let x=y+g*e.length,A=x,M=x+e.length,S=x+e.length+1,D=x+1;s.push(A,M,D),s.push(S,D,M)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Vc=class r extends Lr{constructor(e=1,t=1,n=4,i=8){let s=new Rs;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Wc=class r extends Je{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new E,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},jt=class r extends Je{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,v=[],f=n/2,_=0;function g(y){let x=m,A=new pe,M=new E,S=0,D=y===!0?e:t,N=y===!0?1:-1;for(let te=1;te<=i;te++)u.push(0,f*N,0),d.push(0,N,0),p.push(.5,.5),m++;let z=m;for(let te=0;te<=i;te++){let L=te/i*l+o,X=Math.cos(L),q=Math.sin(L);M.x=D*q,M.y=f*N,M.z=D*X,u.push(M.x,M.y,M.z),d.push(0,N,0),A.x=.5*X+.5,A.y=.5*q*N+.5,p.push(A.x,A.y),m++}for(let te=0;te<i;te++){let L=x+te,X=z+te;y===!0?h.push(X,X+1,L):h.push(X+1,X,L),S+=3}c.addGroup(_,S,y===!0?1:2),_+=S}(function(){let y=new E,x=new E,A=0,M=(t-e)/n;for(let S=0;S<=s;S++){let D=[],N=S/s,z=N*(t-e)+e;for(let te=0;te<=i;te++){let L=te/i,X=L*l+o,q=Math.sin(X),he=Math.cos(X);x.x=z*q,x.y=-N*n+f,x.z=z*he,u.push(x.x,x.y,x.z),y.set(q,M,he).normalize(),d.push(y.x,y.y,y.z),p.push(L,1-N),D.push(m++)}v.push(D)}for(let S=0;S<i;S++)for(let D=0;D<s;D++){let N=v[D][S],z=v[D+1][S],te=v[D+1][S+1],L=v[D][S+1];h.push(N,z,L),h.push(z,te,L),A+=6}c.addGroup(_,A,0),_+=A})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jc=class r extends jt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bi=class r extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,m,v){let f=v+1,_=[];for(let g=0;g<=f;g++){_[g]=[];let y=d.clone().lerp(m,g/f),x=p.clone().lerp(m,g/f),A=f-g;for(let M=0;M<=A;M++)_[g][M]=M===0&&g===f?y:y.clone().lerp(x,M/A)}for(let g=0;g<f;g++)for(let y=0;y<2*(f-g)-1;y++){let x=Math.floor(y/2);y%2==0?(l(_[g][x+1]),l(_[g+1][x]),l(_[g][x])):(l(_[g][x+1]),l(_[g+1][x+1]),l(_[g+1][x]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,v){v<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,m=new E,v=new E;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],v),o(p,m,v,d)})(i),(function(d){let p=new E;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let d=new E;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let v=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-f)}var p;(function(){let m=new E,v=new E,f=new E,_=new E,g=new pe,y=new pe,x=new pe;for(let A=0,M=0;A<s.length;A+=9,M+=6){m.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),f.set(s[A+6],s[A+7],s[A+8]),g.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),x.set(a[M+4],a[M+5]),_.copy(m).add(v).add(f).divideScalar(3);let S=u(_);h(g,M+0,m,S),h(y,M+2,v,S),h(x,M+4,f,S)}})(),(function(){for(let m=0;m<a.length;m+=6){let v=a[m+0],f=a[m+2],_=a[m+4],g=Math.max(v,f,_),y=Math.min(v,f,_);g>.9&&y<.1&&(v<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),_<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Xc=class r extends Bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ja=new E,Xa=new E,lc=new E,qa=new Pi,qc=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(gr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:f,c:_}=qa;if(v.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),qa.getNormal(lc),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,x=u[g],A=u[y],M=qa[h[g]],S=qa[h[y]],D=`${x}_${A}`,N=`${A}_${x}`;N in d&&d[N]?(lc.dot(d[N].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(S.x,S.y,S.z)),d[N]=null):D in d||(d[D]={index0:c[g],index1:c[y],normal:lc.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:f}=d[m];ja.fromBufferAttribute(o,v),Xa.fromBufferAttribute(o,f),p.push(ja.x,ja.y,ja.z),p.push(Xa.x,Xa.y,Xa.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ro=class extends Rs{constructor(e){super(e),this.uuid=$t(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Rs().fromJSON(i))}return this}},Gv=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=yf(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(m,v,f,_){let g=[],y,x,A,M,S;for(y=0,x=v.length;y<x;y++)A=v[y]*_,M=y<x-1?v[y+1]*_:m.length,S=yf(m,A,M,_,!1),S===S.next&&(S.steiner=!0),g.push(Zv(S));for(g.sort(qv),y=0;y<g.length;y++)f=Yv(g[y],f);return f})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Cs(s,a,t,o,l,p,0),a};oi=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];xf(e),bf(n,e);let a=e.length;t.forEach(xf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,bf(n,t[l]);let o=Gv(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};Zc=class r extends Je{constructor(e=new Ro([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:$v,y,x,A,M,S,D=!1;_&&(y=_.getSpacedPoints(h),D=!0,d=!1,x=_.computeFrenetFrames(h,!1),A=new E,M=new E,S=new E),d||(f=0,p=0,m=0,v=0);let N=o.extractPoints(c),z=N.shape,te=N.holes;if(!oi.isClockWise(z)){z=z.reverse();for(let R=0,P=te.length;R<P;R++){let O=te[R];oi.isClockWise(O)&&(te[R]=O.reverse())}}let L=oi.triangulateShape(z,te),X=z;for(let R=0,P=te.length;R<P;R++){let O=te[R];z=z.concat(O)}function q(R,P,O){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(P,O)}let he=z.length,ye=L.length;function re(R,P,O){let Y,U,b,oe=R.x-P.x,V=R.y-P.y,j=O.x-R.x,ce=O.y-R.y,ge=oe*oe+V*V,_e=oe*ce-V*j;if(Math.abs(_e)>Number.EPSILON){let xe=Math.sqrt(ge),Le=Math.sqrt(j*j+ce*ce),be=P.x-V/xe,Me=P.y+oe/xe,Ne=((O.x-ce/Le-be)*ce-(O.y+j/Le-Me)*j)/(oe*ce-V*j);Y=be+oe*Ne-R.x,U=Me+V*Ne-R.y;let xt=Y*Y+U*U;if(xt<=2)return new pe(Y,U);b=Math.sqrt(xt/2)}else{let xe=!1;oe>Number.EPSILON?j>Number.EPSILON&&(xe=!0):oe<-Number.EPSILON?j<-Number.EPSILON&&(xe=!0):Math.sign(V)===Math.sign(ce)&&(xe=!0),xe?(Y=-V,U=oe,b=Math.sqrt(ge)):(Y=oe,U=V,b=Math.sqrt(ge/2))}return new pe(Y/b,U/b)}let J=[];for(let R=0,P=X.length,O=P-1,Y=R+1;R<P;R++,O++,Y++)O===P&&(O=0),Y===P&&(Y=0),J[R]=re(X[R],X[O],X[Y]);let se=[],H,Q=J.concat();for(let R=0,P=te.length;R<P;R++){let O=te[R];H=[];for(let Y=0,U=O.length,b=U-1,oe=Y+1;Y<U;Y++,b++,oe++)b===U&&(b=0),oe===U&&(oe=0),H[Y]=re(O[Y],O[b],O[oe]);se.push(H),Q=Q.concat(H)}for(let R=0;R<f;R++){let P=R/f,O=p*Math.cos(P*Math.PI/2),Y=m*Math.sin(P*Math.PI/2)+v;for(let U=0,b=X.length;U<b;U++){let oe=q(X[U],J[U],Y);T(oe.x,oe.y,-O)}for(let U=0,b=te.length;U<b;U++){let oe=te[U];H=se[U];for(let V=0,j=oe.length;V<j;V++){let ce=q(oe[V],H[V],Y);T(ce.x,ce.y,-O)}}}let me=m+v;for(let R=0;R<he;R++){let P=d?q(z[R],Q[R],me):z[R];D?(M.copy(x.normals[0]).multiplyScalar(P.x),A.copy(x.binormals[0]).multiplyScalar(P.y),S.copy(y[0]).add(M).add(A),T(S.x,S.y,S.z)):T(P.x,P.y,0)}for(let R=1;R<=h;R++)for(let P=0;P<he;P++){let O=d?q(z[P],Q[P],me):z[P];D?(M.copy(x.normals[R]).multiplyScalar(O.x),A.copy(x.binormals[R]).multiplyScalar(O.y),S.copy(y[R]).add(M).add(A),T(S.x,S.y,S.z)):T(O.x,O.y,u/h*R)}for(let R=f-1;R>=0;R--){let P=R/f,O=p*Math.cos(P*Math.PI/2),Y=m*Math.sin(P*Math.PI/2)+v;for(let U=0,b=X.length;U<b;U++){let oe=q(X[U],J[U],Y);T(oe.x,oe.y,u+O)}for(let U=0,b=te.length;U<b;U++){let oe=te[U];H=se[U];for(let V=0,j=oe.length;V<j;V++){let ce=q(oe[V],H[V],Y);D?T(ce.x,ce.y+y[h-1].y,y[h-1].x+O):T(ce.x,ce.y,u+O)}}}function w(R,P){let O=R.length;for(;--O>=0;){let Y=O,U=O-1;U<0&&(U=R.length-1);for(let b=0,oe=h+2*f;b<oe;b++){let V=he*b,j=he*(b+1);ee(P+Y+V,P+U+V,P+U+j,P+Y+j)}}}function T(R,P,O){l.push(R),l.push(P),l.push(O)}function F(R,P,O){I(R),I(P),I(O);let Y=i.length/3,U=g.generateTopUV(n,i,Y-3,Y-2,Y-1);G(U[0]),G(U[1]),G(U[2])}function ee(R,P,O,Y){I(R),I(P),I(Y),I(P),I(O),I(Y);let U=i.length/3,b=g.generateSideWallUV(n,i,U-6,U-3,U-2,U-1);G(b[0]),G(b[1]),G(b[3]),G(b[1]),G(b[2]),G(b[3])}function I(R){i.push(l[3*R+0]),i.push(l[3*R+1]),i.push(l[3*R+2])}function G(R){s.push(R.x),s.push(R.y)}(function(){let R=i.length/3;if(d){let P=0,O=he*P;for(let Y=0;Y<ye;Y++){let U=L[Y];F(U[2]+O,U[1]+O,U[0]+O)}P=h+2*f,O=he*P;for(let Y=0;Y<ye;Y++){let U=L[Y];F(U[0]+O,U[1]+O,U[2]+O)}}else{for(let P=0;P<ye;P++){let O=L[P];F(O[2],O[1],O[0])}for(let P=0;P<ye;P++){let O=L[P];F(O[0]+he*h,O[1]+he*h,O[2]+he*h)}}n.addGroup(R,i.length/3-R,0)})(),(function(){let R=i.length/3,P=0;w(X,P),P+=X.length;for(let O=0,Y=te.length;O<Y;O++){let U=te[O];w(U,P),P+=U.length}n.addGroup(R,i.length/3-R,1)})()}this.setAttribute("position",new Ae(i,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ao[i.type]().fromJSON(i)),new r(n,e.options)}},$v={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new pe(s,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],v=e[3*s],f=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(d,1-m),new pe(v,1-_)]:[new pe(o,1-l),new pe(h,1-u),new pe(p,1-m),new pe(f,1-_)]}},Jc=class r extends Bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$c=class r extends Bi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qc=class r extends Je{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new E,m=new pe;for(let v=0;v<=i;v++){for(let f=0;f<=n;f++){let _=s+f/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){let f=v*(n+1);for(let _=0;_<n;_++){let g=_+f,y=g,x=g+n+1,A=g+n+2,M=g+1;o.push(y,x,M),o.push(x,A,M)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},eh=class r extends Je{constructor(e=new Ro([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;oi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,_=m.length;f<_;f++){let g=m[f];oi.isClockWise(g)===!0&&(m[f]=g.reverse())}let v=oi.triangulateShape(p,m);for(let f=0,_=m.length;f<_;f++){let g=m[f];p=p.concat(g)}for(let f=0,_=p.length;f<_;f++){let g=p[f];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let f=0,_=v.length;f<_;f++){let g=v[f],y=g[0]+u,x=g[1]+u,A=g[2]+u;n.push(y,x,A),l+=3}}this.setIndex(n),this.setAttribute("position",new Ae(i,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Is=class r extends Je{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],m=[],v=[],f=[];for(let _=0;_<=n;_++){let g=[],y=_/n,x=0;_===0&&a===0?x=.5/t:_===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let M=A/t;u.x=-e*Math.cos(i+M*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+M*s)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(M+x,1-y),g.push(c++)}h.push(g)}for(let _=0;_<n;_++)for(let g=0;g<t;g++){let y=h[_][g+1],x=h[_][g],A=h[_+1][g],M=h[_+1][g+1];(_!==0||a>0)&&p.push(y,x,M),(_!==n-1||l<Math.PI)&&p.push(x,A,M)}this.setIndex(p),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},th=class r extends Bi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},nh=class r extends Je{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let v=m/i*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(v),u.y=(e+t*Math.cos(f))*Math.sin(v),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let v=(i+1)*p+m-1,f=(i+1)*(p-1)+m-1,_=(i+1)*(p-1)+m,g=(i+1)*p+m;a.push(v,f,g),a.push(f,_,g)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ih=class r extends Je{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,m=new E,v=new E,f=new E,_=new E;for(let y=0;y<=n;++y){let x=y/n*s*Math.PI*2;g(x,s,a,e,p),g(x+.01,s,a,e,m),f.subVectors(m,p),_.addVectors(m,p),v.crossVectors(f,_),_.crossVectors(v,f),v.normalize(),_.normalize();for(let A=0;A<=i;++A){let M=A/i*Math.PI*2,S=-t*Math.cos(M),D=t*Math.sin(M);u.x=p.x+(S*_.x+D*v.x),u.y=p.y+(S*_.y+D*v.y),u.z=p.z+(S*_.z+D*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(A/i)}}for(let y=1;y<=n;y++)for(let x=1;x<=i;x++){let A=(i+1)*(y-1)+(x-1),M=(i+1)*y+(x-1),S=(i+1)*y+x,D=(i+1)*(y-1)+x;o.push(A,M,D),o.push(M,S,D)}function g(y,x,A,M,S){let D=Math.cos(y),N=Math.sin(y),z=A/x*y,te=Math.cos(z);S.x=M*(2+te)*.5*D,S.y=M*(2+te)*N*.5,S.z=M*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},rh=class r extends Je{constructor(e=new wo(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new pe,h=new E,u=[],d=[],p=[],m=[];function v(f){h=e.getPointAt(f/t,h);let _=a.normals[f],g=a.binormals[f];for(let y=0;y<=i;y++){let x=y/i*Math.PI*2,A=Math.sin(x),M=-Math.cos(x);l.x=M*_.x+A*g.x,l.y=M*_.y+A*g.y,l.z=M*_.z+A*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)v(f);v(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let _=0;_<=i;_++)c.x=f/t,c.y=_/i,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let _=1;_<=i;_++){let g=(i+1)*(f-1)+(_-1),y=(i+1)*f+(_-1),x=(i+1)*f+_,A=(i+1)*(f-1)+_;m.push(g,y,A),m.push(y,x,A)}})()})(),this.setIndex(m),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ao[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},sh=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let v=0;v<3;v++){let f=o.getX(p+v),_=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,_),Mf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Mf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};ix=Object.freeze({__proto__:null,BoxGeometry:Fn,CapsuleGeometry:Vc,CircleGeometry:Wc,ConeGeometry:jc,CylinderGeometry:jt,DodecahedronGeometry:Xc,EdgesGeometry:qc,ExtrudeGeometry:Zc,IcosahedronGeometry:Jc,LatheGeometry:Lr,OctahedronGeometry:$c,PlaneGeometry:zi,PolyhedronGeometry:Bi,RingGeometry:Qc,ShapeGeometry:eh,SphereGeometry:Is,TetrahedronGeometry:th,TorusGeometry:nh,TorusKnotGeometry:ih,TubeGeometry:rh,WireframeGeometry:sh}),mn=class extends Wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},tn=class extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};hi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ah=class extends hi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pp,endingEnd:pp}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fp:s=e,o=2*t-n;break;case mp:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fp:a=e,l=2*n-t;break;case mp:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),v=m*m,f=v*m,_=-d*f+2*d*v-d*m,g=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*m+1,y=(-1-p)*f+(1.5+p)*v+.5*m,x=p*f-p*v;for(let A=0;A!==o;++A)s[A]=_*a[h+A]+g*a[c+A]+y*a[l+A]+x*a[u+A];return s}},oh=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},lh=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Za(t,this.TimeBufferType),this.values=Za(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Za(e.times,Array),values:Za(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ah(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Oi:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Oi;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Qv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Qt.prototype.TimeBufferType=Float32Array,Qt.prototype.ValueBufferType=Float32Array,Qt.prototype.DefaultInterpolation=Oi;ni=class extends Qt{};ni.prototype.ValueTypeName="bool",ni.prototype.ValueBufferType=Array,ni.prototype.DefaultInterpolation=Mr,ni.prototype.InterpolantFactoryMethodLinear=void 0,ni.prototype.InterpolantFactoryMethodSmooth=void 0;Co=class extends Qt{};Co.prototype.ValueTypeName="color";Hn=class extends Qt{};Hn.prototype.ValueTypeName="number";ch=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Nt.slerpFlat(s,0,a,c-o,a,c,l);return s}},bn=class extends Qt{InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}};bn.prototype.ValueTypeName="quaternion",bn.prototype.DefaultInterpolation=Oi,bn.prototype.InterpolantFactoryMethodSmooth=void 0;ii=class extends Qt{};ii.prototype.ValueTypeName="string",ii.prototype.ValueBufferType=Array,ii.prototype.DefaultInterpolation=Mr,ii.prototype.InterpolantFactoryMethodLinear=void 0,ii.prototype.InterpolantFactoryMethodSmooth=void 0;Gn=class extends Qt{};Gn.prototype.ValueTypeName="vector";Lo=class{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ty(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Qt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=ey(l);l=Sf(l,1,h),c=Sf(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new Hn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,m){if(d.length!==0){let v=[],f=[];Jf(d,v,f,p),v.length!==0&&m.push(new h(u,v,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(let m in d){let v=[],f=[];for(let _=0;_!==u[p].morphTargets.length;++_){let g=u[p];v.push(g.time),f.push(g.morphTarget===m?1:0)}i.push(new Hn(".morphTargetInfluence["+m+"]",v,f))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(Gn,d+".position",u,"pos",i),n(bn,d+".quaternion",u,"rot",i),n(Gn,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};si={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},hh=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},ny=new hh,Vn=class{constructor(e){this.manager=e!==void 0?e:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";Dn={},uh=class extends Error{constructor(e,t){super(e),this.response=t}},Ns=class extends Vn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=si.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(Dn[e]!==void 0)return void Dn[e].push({onLoad:t,onProgress:n,onError:i});Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Dn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,m=p!==0,v=0,f=new ReadableStream({start(_){(function g(){u.read().then((({done:y,value:x})=>{if(y)_.close();else{v+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:p});for(let M=0,S=h.length;M<S;M++){let D=h[M];D.onProgress&&D.onProgress(A)}_.enqueue(x),g()}}))})()}});return new Response(f)}throw new uh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{si.add(e,c);let h=Dn[e];delete Dn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{let h=Dn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},dh=class extends Vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=si.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=_s("img");function l(){h(),si.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}},Po=class extends Vn{constructor(e){super(e)}load(e,t,n,i){let s=new St,a=new dh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},Pr=class extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Io=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cc=new Ee,Tf=new E,wf=new E,Ds=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tf),wf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wf),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=class extends Ds{constructor(){super(new mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Tr*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},No=class extends Pr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ef=new Ee,hs=new E,hc=new E,fh=class extends Ds{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(hs),hc.copy(n.position),hc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hc),n.updateMatrixWorld(),i.makeTranslation(-hs.x,-hs.y,-hs.z),Ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef)}},Do=class extends Pr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},mh=class extends Ds{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ui=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Uo=class extends Vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=si.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then((c=>{t&&t(c),s.manager.itemEnd(e)})).catch((c=>{i&&i(c)})):(setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))})).then((function(c){return si.add(e,c),t&&t(c),s.manager.itemEnd(e),c})).catch((function(c){i&&i(c),si.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)}));si.add(e,l),s.manager.itemStart(e)}},rx=new Ee,sx=new Ee,ax=new Ee,ox=new E,lx=new Nt,cx=new E,hx=new E,ux=new E,dx=new Nt,px=new E,fx=new E,Sh="\\[\\]\\.:\\/",iy=new RegExp("["+Sh+"]","g"),uc="[^"+Sh+"]",ry="[^"+Sh.replace("\\.","")+"]",sy=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",uc)+/(WCOD+)?/.source.replace("WCOD",ry)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc)+"$"),ay=["material","materials","bones","map"],tt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iy,"")}static parseTrackName(e){let t=sy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ay.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=class{constructor(r,e,t){let n=t||tt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];mx=new Float32Array(1),gx=new pe,vx=new E,yx=new E,_x=new E,xx=new E,bx=new Ee,Mx=new Ee,Sx=new E,Tx=new we,wx=new we,Ex=new E,Ax=new E,Rx=new E,Cx=new E,Lx=new xs,Px=new Tt,Ix=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});function Eh(r,e){if(e===Of)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Us||e===zo){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Us)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var dm=$o(()=>{Dr()});var ym={};Jm(ym,{GLTFLoader:()=>Lh});function vy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function xy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),r.DefaultMaterial}function Gi(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function by(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function My(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sy(r){let e,t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ch(t.attributes):e=r.indices+":"+Ch(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ch(r.targets[n]);return e}function Ch(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function eu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ty(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function Ey(r,e,t){let n=e.attributes,i=new Tt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){let h=eu(Ur[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new E,l=new E;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){let v=eu(Ur[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new zt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function gm(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=Qh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),fi(r,e),Ey(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?by(r,e.targets,t):r})}var Lh,He,Ph,Ih,Nh,Dh,Uh,kh,Oh,zh,Fh,Bh,Hh,Gh,Vh,Wh,jh,Xh,qh,vm,Hs,pm,Yh,Kh,Zh,Jh,Go,yy,$h,nn,Ur,fm,mm,Ah,Qh,pi,_y,Rh,wy,tu,_m=$o(()=>{Dr();dm();Lh=class extends Vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ui.extractUrlBase(e);a=ui.resolveURL(c,this.path)}else a=ui.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ns(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vm){try{a[He.KHR_BINARY_GLTF]=new Yh(e)}catch(u){i&&i(u);return}s=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new tu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:a[u]=new Ih;break;case He.KHR_DRACO_MESH_COMPRESSION:a[u]=new Kh(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[u]=new Zh;break;case He.KHR_MESH_QUANTIZATION:a[u]=new Jh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ph=class{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],vt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ir(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Do(h),c.distance=u;break;case"spot":c=new No(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Ih=class{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Sn}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ze))}return Promise.all(i)}},Nh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Dh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(o,o)}return Promise.all(s)}},Uh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},kh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ze)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Oh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},zh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],vt),Promise.all(s)}},Fh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],vt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ze)),Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Wh=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},jh=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Xh=class{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},qh=class{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==nn.TRIANGLES&&c.mode!==nn.TRIANGLE_STRIP&&c.mode!==nn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let m of u){let v=new Ee,f=new E,_=new Nt,g=new E(1,1,1),y=new yo(m.geometry,m.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,x),l.SCALE&&g.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(f,_,g));for(let x in l)if(x==="_COLOR_0"){let A=l[x];y.instanceColor=new Fi(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);lt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},vm="glTF",Hs=12,pm={JSON:1313821514,BIN:5130562},Yh=class{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Hs,s=new DataView(e,Hs),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===pm.JSON){let c=new Uint8Array(e,Hs+a,o);this.content=n.decode(c)}else if(l===pm.BIN){let c=Hs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Kh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Qh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Qh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Ur[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let v=p.attributes[m],f=l[m];f!==void 0&&(v.normalized=f)}u(p)},o,c,vt,d)})})}},Zh=class{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Jh=class{constructor(){this.name=He.KHR_MESH_QUANTIZATION}},Go=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,m=e*c,v=m-c,f=-2*p+3*d,_=p-d,g=1-f,y=_-d+u;for(let x=0;x!==o;x++){let A=a[v+x+o],M=a[v+x+l]*h,S=a[m+x+o],D=a[m+x]*h;s[x]=g*A+y*M+f*S+_*D}return s}},yy=new Nt,$h=class extends Go{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return yy.fromArray(s).normalize().toArray(s),s}},nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fm={9728:Mt,9729:kt,9984:Ja,9985:yh,9986:us,9987:ki},mm={33071:dn,33648:vs,10497:fn},Ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_y={CUBICSPLINE:void 0,LINEAR:Oi,STEP:Mr},Rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};wy=new Ee,tu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Po(this.options.manager):this.textureLoader=new Uo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Gi(s,o,i),fi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(ui.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Ah[i.type],o=Ur[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new gt(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Ah[i.type],c=Ur[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,f;if(p&&p!==u){let _=Math.floor(d/p),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count,y=t.cache.get(g);y||(v=new c(o,_*p,i.count*p/h),y=new Ms(v,p/h),t.cache.add(g,y)),f=new Ss(y,l,d%p/h,m)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),f=new gt(v,l,m);if(i.sparse!==void 0){let _=Ah.SCALAR,g=Ur[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new g(a[1],y,i.sparse.count*_),M=new c(a[2],x,i.sparse.count*l);o!==null&&(f=new gt(f.array.slice(),f.itemSize,f.normalized));for(let S=0,D=A.length;S<D;S++){let N=A[S];if(f.setX(N,M[S*l]),l>=2&&f.setY(N,M[S*l+1]),l>=3&&f.setZ(N,M[S*l+2]),l>=4&&f.setW(N,M[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=fm[d.magFilter]||kt,h.minFilter=fm[d.minFilter]||ki,h.wrapS=mm[d.wrapS]||fn,h.wrapT=mm[d.wrapT]||fn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){let f=new St(v);f.needsUpdate=!0,d(f)}),t.load(ui.resolveURL(u,s.path),m,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||Ty(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Es,Wt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ws,Wt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){let u=i[He.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ze)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=ko);let h=s.alphaMode||Rh.OPAQUE;if(h===Rh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Rh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Sn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new pe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Sn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Sn){let u=s.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],vt)}return s.emissiveTexture!==void 0&&a!==Sn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ze)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),fi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Gi(i,u,s),u})}createUniqueName(e){let t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return gm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Sy(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=gm(new Je,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?xy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let v=h[p],f=a[p],_,g=c[p];if(f.mode===nn.TRIANGLES||f.mode===nn.TRIANGLE_STRIP||f.mode===nn.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new go(v,g):new it(v,g),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),f.mode===nn.TRIANGLE_STRIP?_.geometry=Eh(_.geometry,zo):f.mode===nn.TRIANGLE_FAN&&(_.geometry=Eh(_.geometry,Us));else if(f.mode===nn.LINES)_=new _o(v,g);else if(f.mode===nn.LINE_STRIP)_=new Cr(v,g);else if(f.mode===nn.LINE_LOOP)_=new xo(v,g);else if(f.mode===nn.POINTS)_=new bo(v,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&My(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),fi(_,s),f.extensions&&Gi(i,_,f),t.assignFinalMaterial(_),u.push(_)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Gi(i,u[0],s),u[0];let d=new Ct;s.extensions&&Gi(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mt(Ff.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Rr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ee;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vo(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],m=i.samplers[p.sampler],v=p.target,f=v.node,_=i.parameters!==void 0?i.parameters[m.input]:m.input,g=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",g)),c.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],m=u[2],v=u[3],f=u[4],_=[];for(let g=0,y=d.length;g<y;g++){let x=d[g],A=p[g],M=m[g],S=v[g],D=f[g];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let N=n._createAnimationTracks(x,A,M,S,D);if(N)for(let z=0;z<N.length;z++)_.push(N[z])}return new Lo(s,void 0,_)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,wy)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Ts:c.length>1?h=new Ct:c.length===1?h=c[0]:h=new lt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),fi(h,s),s.extensions&&Gi(n,h,s),s.matrix!==void 0){let u=new Ee;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ct;n.name&&(s.name=i.createUniqueName(n.name)),fi(s,n),n.extensions&&Gi(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof Wt||d instanceof St)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];pi[s.path]===pi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(pi[s.path]){case pi.weights:c=Hn;break;case pi.rotation:c=bn;break;case pi.position:case pi.scale:c=Gn;break;default:n.itemSize===1?c=Hn:c=Gn;break}let h=i.interpolation!==void 0?_y[i.interpolation]:Oi,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let m=new c(l[d]+"."+pi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=eu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof bn?$h:Go;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var B=r=>document.getElementById(r),qi=r=>new Promise(e=>setTimeout(e,r)),rt=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Qo={},de={on(r,e){(Qo[r]=Qo[r]||[]).push(e)},emit(r,...e){for(let t of Qo[r]||[])try{t(...e)}catch(n){console.error(r,n)}}},Wr=[];function De(r){let e=new Date,t=i=>String(i).padStart(2,"0"),n=`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}  ${r}`;Wr.push(n),Wr.length>500&&Wr.shift(),de.emit("log",n)}var Wn={get(r,e){try{let t=localStorage.getItem("triki."+r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{return localStorage.setItem("triki."+r,JSON.stringify(e)),!0}catch{return!1}}},aa="29.10.2026a",ie=Object.assign({accScale:2048,gyroScale:16.4,stance:"regular",freq:104,keepalive:!1,autoRe:!0,beep:!0,gps:!1,mount:null,lang:null,device:null,autoConnect:!0,mode:"tracker",gameMode:"free",gameBest:0,gameBestCombo:0,rpSpeed:.5},Wn.get("settings",{}));function $e(){Wn.set("settings",ie)}var Iu={"lang.name":"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430","mode.aria":"\u0420\u0435\u0436\u0438\u043C","mode.tracker":"\u0422\u0440\u0435\u043A\u0435\u0440","mode.game":"\u0413\u0440\u0430","game.demo":"\u0414\u0435\u043C\u043E \u0433\u0440\u0438 \u0431\u0435\u0437 Triki","game.h":"\u0413\u0440\u0430 \u0437 Triki","game.free":"\u0412\u0456\u043B\u044C\u043D\u0435 \u043A\u0430\u0442\u0430\u043D\u043D\u044F","game.skate":"S.K.A.T.E.","game.freeNote":"\u0420\u043E\u0431\u0438 \u0442\u0440\u044E\u043A\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443. \u0420\u0456\u0437\u043D\u0456 \u0442\u0440\u044E\u043A\u0438 \u043F\u0456\u0434\u0440\u044F\u0434 \u0434\u0430\u044E\u0442\u044C \u043A\u043E\u043C\u0431\u043E, \u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0439\u043E\u0433\u043E \u043E\u0431\u043D\u0443\u043B\u044F\u0454.","game.skateNote":"\u0421\u0430\u0439\u0442 \u043D\u0430\u0437\u0438\u0432\u0430\u0454 \u0442\u0440\u044E\u043A, \u0442\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u0448. \u041D\u0435 \u0432\u0438\u0439\u0448\u043B\u043E \u2014 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0448 \u043B\u0456\u0442\u0435\u0440\u0443. \u0417\u0431\u0435\u0440\u0435\u0448 S.K.A.T.E. \u2014 \u0433\u0440\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E.","game.level":"\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438 Triki","game.restart":"\u041F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E","game.score":"\u0420\u0430\u0445\u0443\u043D\u043E\u043A","game.best":"\u0420\u0435\u043A\u043E\u0440\u0434","game.landed":"\u0417\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E","game.attempts":"\u0421\u043F\u0440\u043E\u0431","game.bestCombo":"\u041D\u0430\u0439\u0434\u043E\u0432\u0448\u0435 \u043A\u043E\u043C\u0431\u043E","game.list":"\u0422\u0440\u044E\u043A\u0438 \u0432 \u0433\u0440\u0456","game.listEmpty":"\u0429\u0435 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0442\u0440\u044E\u043A\u0443. \u041F\u043E\u0447\u043D\u0438 \u0437 ollie.","game.how":"\u042F\u043A \u0433\u0440\u0430\u0442\u0438","game.howIntro":"\u0422\u0443\u0442 Triki \u043F\u0440\u0430\u0446\u044E\u0454 \u044F\u043A \u0444\u0456\u043D\u0433\u0435\u0440\u0431\u043E\u0440\u0434: \u0442\u0440\u0438\u043C\u0430\u0454\u0448 \u0439\u043E\u0433\u043E \u0432 \u0440\u0443\u0446\u0456, \u0430 \u0441\u0430\u0439\u0442 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0454 \u0442\u0440\u044E\u043A \u0437\u0430 \u0440\u0443\u0445\u043E\u043C. \u0414\u043E\u0448\u043A\u0430 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0456 \u0441\u0442\u043E\u0457\u0442\u044C \u0456 \u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0442\u0440\u044E\u043A, \u043A\u043E\u043B\u0438 \u0442\u0438 \u0439\u043E\u0433\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0448.","game.how1":"<b>\u0425\u0432\u0430\u0442.</b> \u041F\u043E\u043A\u043B\u0430\u0434\u0438 Triki \u043D\u0430 \u0431\u0456\u043A \u0432\u043A\u0430\u0437\u0456\u0432\u043D\u043E\u0433\u043E \u043F\u0430\u043B\u044C\u0446\u044F, \u0432\u0435\u043B\u0438\u043A\u0438\u0439 \u043F\u0430\u043B\u0435\u0446\u044C \u0437\u0432\u0435\u0440\u0445\u0443. \u0422\u0440\u0438\u043C\u0430\u0439 \u0439\u043E\u0433\u043E \u044F\u043A \u0434\u043E\u0448\u043A\u0443 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0456: \u043D\u0456\u0441 \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438 Triki\xBB \u0456 \u043F\u043E\u0442\u0440\u0438\u043C\u0430\u0439 \u0440\u0456\u0432\u043D\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0443.","game.how2":"<b>Ollie.</b> \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043D\u0430 \u043B\u0456\u0432\u0438\u0439 \u043A\u0440\u0430\u0439 (\u0445\u0432\u0456\u0441\u0442), \u0449\u043E\u0431 \u043F\u0440\u0430\u0432\u0438\u0439 \u043A\u0440\u0430\u0439 (\u043D\u0456\u0441) \u043F\u0456\u0434\u043D\u044F\u0432\u0441\u044F, \u0456 \u043F\u043E\u0432\u0435\u0440\u043D\u0438 Triki \u0440\u0456\u0432\u043D\u043E. \u0426\u0435 \u043F\u043E\u043F, \u0437 \u043D\u044C\u043E\u0433\u043E \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u043A\u043E\u0436\u0435\u043D \u0442\u0440\u044E\u043A.","game.how3":"<b>Kickflip \u0456 heelflip.</b> \u041F\u0456\u0441\u043B\u044F \u043F\u043E\u043F\u0443 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0438 Triki \u043D\u0430 \u043F\u043E\u0432\u043D\u0438\u0439 \u043E\u0431\u0435\u0440\u0442 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0434\u043E\u0432\u0433\u043E\u0457 \u043E\u0441\u0456: \u0434\u0430\u043B\u044C\u043D\u0456\u043C \u043A\u0440\u0430\u0454\u043C \u0443\u0433\u043E\u0440\u0443 \u2014 kickflip, \u0431\u043B\u0438\u0436\u043D\u0456\u043C \u2014 heelflip. \u0417\u0443\u043F\u0438\u043D\u0438 \u0439\u043E\u0433\u043E \u0440\u0456\u0432\u043D\u043E.","game.how4":"<b>Shuvit.</b> \u041F\u0456\u0441\u043B\u044F \u043F\u043E\u043F\u0443 \u0440\u043E\u0437\u0432\u0435\u0440\u043D\u0438 Triki \u043D\u0430 \u043F\u0456\u0432 \u043E\u0431\u0435\u0440\u0442\u0443, \u043D\u0435 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u044E\u0447\u0438: \u043D\u0456\u0441 \u0432\u0456\u0434 \u0441\u0435\u0431\u0435 \u2014 BS pop shuvit, \u0434\u043E \u0441\u0435\u0431\u0435 \u2014 FS. \u041F\u043E\u0432\u043D\u0438\u0439 \u043E\u0431\u0435\u0440\u0442 \u2014 360 shuvit.","game.how5":"<b>\u041A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u0457.</b> \u0424\u043B\u0456\u043F, \u0430 \u0437\u0430 \u043D\u0438\u043C \u0440\u043E\u0437\u0432\u043E\u0440\u043E\u0442 \u0434\u0430\u044E\u0442\u044C varial kickflip, hardflip, inward heelflip, 360 flip, laser flip. \u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0438 Triki \u043A\u0456\u043D\u0435\u0446\u044C \u0447\u0435\u0440\u0435\u0437 \u043A\u0456\u043D\u0435\u0446\u044C \u2014 impossible.","game.how6":"<b>\u041F\u0430\u0434\u0456\u043D\u043D\u044F.</b> \u0417\u0443\u043F\u0438\u043D\u0438\u0432\u0441\u044F \u0434\u043E\u0433\u043E\u0440\u0438 \u0434\u043D\u043E\u043C \u0430\u0431\u043E \u043D\u0435 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432 \u0442\u0440\u044E\u043A \u0437\u0430 3 \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u2014 \u0442\u0440\u044E\u043A \u043D\u0435 \u0437\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E, \u043A\u043E\u043C\u0431\u043E \u0437\u0433\u043E\u0440\u0430\u0454. \u0414\u043B\u044F goofy (\u0443 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445) \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0438 \u0434\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0456.","hud.connect":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438 Triki \u0430\u0431\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438 \u0434\u0435\u043C\u043E \u0433\u0440\u0438","hud.level":"\u0422\u0440\u0438\u043C\u0430\u0439 Triki \u0440\u0456\u0432\u043D\u043E\u2026","hud.ready":"\u0413\u043E\u0442\u043E\u0432\u043E. \u041F\u043E\u043F!","hud.air":"\u0444\u043B\u0456\u043F {r}\xB0 \xB7 \u0440\u043E\u0437\u0432\u043E\u0440\u043E\u0442 {y}\xB0","hud.timeout":"\u0417\u0430\u0434\u043E\u0432\u0433\u043E: \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0439 \u0442\u0440\u044E\u043A \u0437\u0430 3 \u0441\u0435\u043A\u0443\u043D\u0434\u0438","hud.flipped":"\u0414\u043E\u0433\u043E\u0440\u0438 \u0434\u043D\u043E\u043C \u2014 \u043F\u0430\u0434\u0456\u043D\u043D\u044F","hud.reset":"\u041F\u043E\u0432\u0435\u0440\u043D\u0438 Triki \u0440\u0456\u0432\u043D\u043E","hud.do":"\u0417\u0440\u043E\u0431\u0438","hud.over":"S.K.A.T.E. \u041A\u0456\u043D\u0435\u0446\u044C \u0433\u0440\u0438 \xB7 \u0442\u0440\u044E\u043A\u0456\u0432: {n}","game.sloppy":"\u043D\u0435\u0442\u043E\u0447\u043D\u043E","game.repeat":"\u043F\u043E\u0432\u0442\u043E\u0440","game.miss":"\u043C\u0438\u043C\u043E","game.hit":"\u0454!","game.letter":"\u043B\u0456\u0442\u0435\u0440\u0430 {l}","log.gameDemo":"\u0414\u0435\u043C\u043E \u0433\u0440\u0438: \u0440\u0443\u043A\u0430 \u0440\u043E\u0431\u0438\u0442\u044C \u0442\u0440\u044E\u043A\u0438 \u043F\u043E \u0447\u0435\u0440\u0437\u0456","log.mode":"\u0420\u0435\u0436\u0438\u043C: {m}","scene.aria":"3D-\u043C\u043E\u0434\u0435\u043B\u044C \u0434\u043E\u0448\u043A\u0438, \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454 \u0440\u0443\u0445 Triki","settings.aria":"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",air:"\u0423 \u043F\u043E\u0432\u0456\u0442\u0440\u0456","cta.connect":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 Triki","cta.connectSaved":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 {name}","cta.demo":"\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437 Triki","cta.hintFirst":"\u0412\u0456\u0434\u043A\u0440\u0438\u0454\u0442\u044C\u0441\u044F \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457\u0432. \u0412\u0438\u0431\u0435\u0440\u0438 \u0432 \u043D\u044C\u043E\u043C\u0443 \xABTriki \u2026\xBB, \u0456 \u0441\u0430\u0439\u0442 \u0439\u043E\u0433\u043E \u0437\u0430\u043F\u0430\u043C'\u044F\u0442\u0430\u0454.","cta.hintSaved":"\u042F\u043A\u0449\u043E \u0432\u0456\u0434\u043A\u0440\u0438\u0454\u0442\u044C\u0441\u044F \u0441\u043F\u0438\u0441\u043E\u043A, \u0432\u0438\u0431\u0435\u0440\u0438 \xAB{name}\xBB.","h.last":"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0442\u0440\u044E\u043A","h.list":"\u0422\u0440\u044E\u043A\u0438 \u0446\u0456\u0454\u0457 \u0441\u0435\u0441\u0456\u0457","h.stats":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0435\u0441\u0456\u0457","list.empty":"\u041F\u043E\u043A\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u044C\u043E. \u041A\u043E\u0436\u0435\u043D \u0442\u0440\u044E\u043A \u0437'\u044F\u0432\u0438\u0442\u044C\u0441\u044F \u0442\u0443\u0442. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u043D\u0430 \u0442\u0440\u044E\u043A, \u0449\u043E\u0431 \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u043F\u043E\u0432\u0442\u043E\u0440.","stats.new":"\u041F\u043E\u0447\u0430\u0442\u0438 \u043D\u043E\u0432\u0443 \u0441\u0435\u0441\u0456\u044E","stats.newConfirm":"\u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u0449\u0435 \u0440\u0430\u0437: \u043F\u043E\u0442\u043E\u0447\u043D\u0430 \u0441\u0435\u0441\u0456\u044F \u043F\u0456\u0434\u0435 \u0432 \u0456\u0441\u0442\u043E\u0440\u0456\u044E","stats.history":"\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456 \u0441\u0435\u0441\u0456\u0457 ({n})","hist.item":"{date} {time} \xB7 \u0441\u043F\u0440\u043E\u0431: {n} \xB7 \u0432\u0434\u0430\u043B\u0438\u0445 {rate}%","sheet.title":"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F","sheet.done":"\u0413\u043E\u0442\u043E\u0432\u043E","g.lang":"\u041C\u043E\u0432\u0430","g.conn":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F","conn.info.on":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E: {name}.","conn.info.saved":"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0439 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439: {name}. \u0421\u0430\u0439\u0442 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u0438\u043C\u0435\u0442\u044C\u0441\u044F \u0434\u043E \u043D\u044C\u043E\u0433\u043E \u0441\u0430\u043C.","conn.info.savedManual":"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0439 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439: {name}. \u0426\u0435\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u0432\u043C\u0456\u0454 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u0438\u0441\u044C \u0441\u0430\u043C, \u0442\u043E\u043C\u0443 \u0432\u0456\u0434\u043A\u0440\u0438\u0454 \u0441\u043F\u0438\u0441\u043E\u043A: \u0432\u0438\u0431\u0435\u0440\u0438 \u0432 \u043D\u044C\u043E\u043C\u0443 {name}.","conn.info.first":"Triki \u0449\u0435 \u043D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438\xBB: \u0432\u0456\u0434\u043A\u0440\u0438\u0454\u0442\u044C\u0441\u044F \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u0441\u0456\u0445 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457\u0432, \u0432\u0438\u0431\u0435\u0440\u0438 \u0432 \u043D\u044C\u043E\u043C\u0443 \xABTriki \u2026\xBB. \u0421\u0430\u0439\u0442 \u0437\u0430\u043F\u0430\u043C'\u044F\u0442\u0430\u0454 \u0432\u0438\u0431\u0456\u0440.","b.connect":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438","b.chooseOther":"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0456\u043D\u0448\u0438\u0439 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439","b.forget":"\u0417\u0430\u0431\u0443\u0442\u0438 \u0446\u0435\u0439 Triki","b.disconnect":"\u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438","opt.autoConnect":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u0438\u0441\u044C \u0434\u043E \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E\u0433\u043E Triki, \u0449\u043E\u0439\u043D\u043E \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u044E \u0441\u0430\u0439\u0442","opt.freq":"\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0432\u0438\u043C\u0456\u0440\u0456\u0432 (\u043C\u0435\u043D\u0448\u0435 \u2014 \u0447\u0430\u0441\u0442\u0456\u0448\u0435)","freq.std":"\u044F\u043A \u0443 \u017Bappka","b.rateTest":"\u0422\u0435\u0441\u0442 \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456","rate.p":"\u0427\u0438\u043C \u0447\u0430\u0441\u0442\u0456\u0448\u0435 Triki \u043F\u0440\u0438\u0441\u0438\u043B\u0430\u0454 \u0432\u0438\u043C\u0456\u0440\u0438, \u0442\u0438\u043C \u0442\u043E\u0447\u043D\u0456\u0448\u0435 \u0432\u0438\u0434\u043D\u043E \u0442\u0440\u044E\u043A \u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u0456. \u0422\u0435\u0441\u0442 \u0441\u0430\u043C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044C, \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0432\u0438\u043C\u0456\u0440\u0456\u0432 \u0432\u0441\u0442\u0438\u0433\u0430\u0454 \u0434\u043E\u0445\u043E\u0434\u0438\u0442\u0438 \u0434\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u0456 \u0432\u0438\u0431\u0435\u0440\u0435 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0435. \u041F\u0456\u0434 \u0447\u0430\u0441 \u0442\u0435\u0441\u0442\u0443 (~16 \u0441) \u0442\u0440\u0438\u043C\u0430\u0439 Triki \u0432 \u0440\u0443\u0446\u0456 \u0439 \u043B\u0435\u0433\u0435\u043D\u044C\u043A\u043E \u043D\u0438\u043C \u043F\u043E\u0432\u043E\u0440\u0443\u0448\u0443\u0439.","rate.running":"\u0422\u0435\u0441\u0442 \u0456\u0434\u0435 ({i}/{n})\u2026 \u043B\u0435\u0433\u0435\u043D\u044C\u043A\u043E \u043F\u043E\u0432\u043E\u0440\u0443\u0448\u0443\u0439 Triki \u0432 \u0440\u0443\u0446\u0456.","rate.result":"\u0412\u0438\u0431\u0440\u0430\u043D\u043E {v}: \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u0434\u0430\u043D\u0438\u0445 {hz} \u0413\u0446 (\u0437 104 \u0431\u0443\u043B\u043E {hz0} \u0413\u0446).","rate.failed":"\u0422\u0435\u0441\u0442 \u043D\u0435 \u0432\u0434\u0430\u0432\u0441\u044F: {e}. \u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0432 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0454 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F.","rate.needConn":"\u0421\u043F\u0435\u0440\u0448\u0443 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438 Triki.","log.rateStep":"\u0422\u0435\u0441\u0442 \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456: {v} \u2192 {hz} \u0413\u0446, \u0434\u0456\u0440\u043E\u043A {holes}%, \u043D\u0430\u0439\u0434\u043E\u0432\u0448\u0430 \u043F\u0430\u0443\u0437\u0430 {gap} \u0441","log.rateBest":"\u0422\u0435\u0441\u0442 \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456: \u0432\u0438\u0431\u0440\u0430\u043D\u043E {v} ({hz} \u0413\u0446)","opt.keepalive":"\u0411\u0443\u0434\u0438\u0442\u0438 Triki \u0449\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u0438 (\u044F\u043A\u0449\u043E \u0441\u0430\u043C \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0454\u0442\u044C\u0441\u044F)","opt.autoRe":"\u041F\u0435\u0440\u0435\u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u0438\u0441\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E","unit.hz":"\u0413\u0446","g.mount":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u0434\u043E\u0448\u0446\u0456","mount.intro":"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \u043C\u0430\u0454 \u0437\u043D\u0430\u0442\u0438, \u044F\u043A Triki \u0437\u0430\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0438\u0439, \u0456\u043D\u0430\u043A\u0448\u0435 \u043F\u0435\u0440\u0435\u043F\u043B\u0443\u0442\u0430\u0454 kickflip \u0437 shuvit. \u0417\u0430\u0439\u043C\u0430\u0454 10 \u0441\u0435\u043A\u0443\u043D\u0434.","mount.done":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u043E. \u042F\u043A\u0449\u043E \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0435\u0448 Triki \u043D\u0430 \u0434\u043E\u0448\u0446\u0456, \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0439 \u0449\u0435 \u0440\u0430\u0437.","mount.resetDone":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u0441\u043A\u0438\u043D\u0443\u0442\u043E. \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0439 \u0439\u043E\u0433\u043E, \u043A\u043E\u043B\u0438 \u0437\u0430\u043A\u0440\u0456\u043F\u0438\u0448 Triki \u043D\u0430 \u0434\u043E\u0448\u0446\u0456.","mount.needConn":"\u0421\u043F\u0435\u0440\u0448\u0443 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438 Triki, \u043F\u043E\u0442\u0456\u043C \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0439 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F.","mount.auto":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u0437\u0430 \u0442\u0432\u043E\u0457\u043C\u0438 \u043F\u043E\u043F\u0430\u043C\u0438 \u0439 \u0444\u043B\u0456\u043F\u0430\u043C\u0438. \u041C\u0430\u0439\u0441\u0442\u0435\u0440 \u043C\u043E\u0436\u043D\u0430 \u043F\u0440\u043E\u0439\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E.","log.mountYaw":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F Triki \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u043E \u0437\u0430 \u0442\u0440\u044E\u043A\u0430\u043C\u0438: \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043D\u0430 {deg}\xB0","b.wizard":"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F","b.reset":"\u0421\u043A\u0438\u043D\u0443\u0442\u0438","wiz.1":"\u041A\u0440\u043E\u043A 1 \u0437 2. \u041F\u043E\u0441\u0442\u0430\u0432 \u0434\u043E\u0448\u043A\u0443 \u043A\u043E\u043B\u0435\u0441\u0430\u043C\u0438 \u043D\u0430 \u0440\u0456\u0432\u043D\u0443 \u043F\u0456\u0434\u043B\u043E\u0433\u0443 \u0439 \u043D\u0435 \u0447\u0456\u043F\u0430\u0439 \u0457\u0457. \u041F\u043E\u0442\u0456\u043C \u043D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0413\u043E\u0442\u043E\u0432\u043E\xBB.","wiz.2":"\u041A\u0440\u043E\u043A 2 \u0437 2. \u041F\u0456\u0434\u043D\u0456\u043C\u0438 \u043D\u0456\u0441 \u0434\u043E\u0448\u043A\u0438 (\u0437\u0430\u0434\u043D\u0456 \u043A\u043E\u043B\u0435\u0441\u0430 \u043D\u0430 \u043F\u0456\u0434\u043B\u043E\u0437\u0456) \u0456 \u0442\u0440\u0438\u043C\u0430\u0439 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E. \u041F\u043E\u0442\u0456\u043C \u043D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0413\u043E\u0442\u043E\u0432\u043E\xBB.","wiz.hold":"\u041D\u0435 \u0440\u0443\u0445\u0430\u0439 \u0434\u043E\u0448\u043A\u0443\u2026","wiz.noData":"\u0414\u0430\u043D\u0438\u0445 \u043D\u0435 \u043F\u0440\u0438\u0439\u0448\u043B\u043E. \u041F\u0435\u0440\u0435\u0432\u0456\u0440 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0456 \u043D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0413\u043E\u0442\u043E\u0432\u043E\xBB \u0449\u0435 \u0440\u0430\u0437.","wiz.moved":"\u0414\u043E\u0448\u043A\u0430 \u0440\u0443\u0445\u0430\u043B\u0430\u0441\u044C.","wiz.tilt":"\u041D\u0456\u0441 \u043F\u0456\u0434\u043D\u044F\u0442\u043E \u043B\u0438\u0448\u0435 \u043D\u0430 {deg}\xB0. \u041F\u0456\u0434\u043D\u0456\u043C\u0438 \u0432\u0438\u0449\u0435 \u0439 \u043D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0413\u043E\u0442\u043E\u0432\u043E\xBB.","b.done":"\u0413\u043E\u0442\u043E\u0432\u043E","b.cancel":"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438","opt.stance":"\u0421\u0442\u0456\u0439\u043A\u0430","stance.regular":"Regular (\u043B\u0456\u0432\u0430 \u043D\u043E\u0433\u0430 \u0441\u043F\u0435\u0440\u0435\u0434\u0443)","stance.goofy":"Goofy (\u043F\u0440\u0430\u0432\u0430 \u043D\u043E\u0433\u0430 \u0441\u043F\u0435\u0440\u0435\u0434\u0443)","g.speed":"\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C","speed.p":"Triki \u043D\u0435 \u0432\u0438\u043C\u0456\u0440\u044E\u0454 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u0457\u0437\u0434\u0438. \u0407\u0457 \u043C\u043E\u0436\u043D\u0430 \u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0447\u0435\u0440\u0435\u0437 GPS \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u044F\u043A\u0449\u043E \u0432\u0456\u043D \u0443 \u0442\u0435\u0431\u0435 \u0432 \u043A\u0438\u0448\u0435\u043D\u0456.","opt.gps":"\u0420\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u0447\u0435\u0440\u0435\u0437 GPS","g.other":"\u0406\u043D\u0448\u0435","opt.beep":"\u0417\u0432\u0443\u043A \u043F\u0456\u0441\u043B\u044F \u0442\u0440\u044E\u043A\u0443","b.demo":"\u0414\u0435\u043C\u043E \u0431\u0435\u0437 Triki","b.demoExit":"\u0412\u0438\u0439\u0442\u0438 \u0437 \u0434\u0435\u043C\u043E","preload.note":"\u0422\u0443\u0442 \u0442\u0432\u043E\u0457 \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456 \u0442\u0440\u044E\u043A\u0438, \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0456 \u043D\u043E\u0432\u043E\u044E \u0432\u0435\u0440\u0441\u0456\u0454\u044E: \u0441\u043F\u0440\u043E\u0431\u0438 \u0437 \u043A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F 9 \u0436\u043E\u0432\u0442\u043D\u044F \u0456 \u0437\u0430\u043F\u0438\u0441\u0438 15 \u0436\u043E\u0432\u0442\u043D\u044F (\u043E\u043B\u043B\u0456 \u043D\u0430 \u043C\u0456\u0441\u0446\u0456 \u0439 \u043D\u0430 \u0445\u043E\u0434\u0443, \u043A\u0456\u043A\u0444\u043B\u0456\u043F\u0438 \u043D\u0430 \u0445\u043E\u0434\u0443 \u0439 \u043D\u0430 \u043C\u0456\u0441\u0446\u0456). \u0417\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0457\u0437\u0434\u0438 \u0439 \u0457\u0437\u0434\u0438 \u043F\u043E \u043D\u0435\u0440\u0456\u0432\u043D\u043E\u043C\u0443 \u0434\u0430\u043B\u0438 \u043D\u0443\u043B\u044C \u0445\u0438\u0431\u043D\u0438\u0445 \u0442\u0440\u044E\u043A\u0456\u0432. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u043D\u0430 \u0442\u0440\u044E\u043A, \u0449\u043E\u0431 \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u043F\u043E\u0432\u0442\u043E\u0440 \u0456\u0437 \u0442\u0430\u0439\u043C\u043B\u0430\u0439\u043D\u043E\u043C.","demo.note":"\u0426\u0435 \u0434\u0435\u043C\u043E: \u0442\u0440\u044E\u043A\u0438 \u043D\u0435\u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456 \u0439 \u0437\u043D\u0438\u043A\u043D\u0443\u0442\u044C, \u0449\u043E\u0439\u043D\u043E \u0432\u0438\u0439\u0434\u0435\u0448 \u0456\u0437 \u0434\u0435\u043C\u043E. \u0422\u0432\u043E\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u044C\u0441\u044F.","g.data":"\u0414\u0430\u043D\u0456","data.p":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0432\u0441\u0456 \u0442\u0440\u044E\u043A\u0438 \u0441\u0435\u0441\u0456\u0457 \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u0441\u0438\u0440\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438 \u0441\u0435\u043D\u0441\u043E\u0440\u0430. \u0417 \u043D\u0438\u0445 \u0431\u0443\u0434\u0443\u0432\u0430\u0442\u0438\u043C\u0435\u043C\u043E \u0431\u0430\u0437\u0443 \u0442\u0440\u044E\u043A\u0456\u0432.","b.export":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0435\u0441\u0456\u044E","b.rec":"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0441\u0438\u0440\u0456 \u0434\u0430\u043D\u0456","b.recStop":"\u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441","export.note":"{name}: \u044F\u043A\u0449\u043E \u0444\u0430\u0439\u043B \u043D\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0441\u044F, \u0441\u043A\u043E\u043F\u0456\u044E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0456 \u0432\u0441\u0442\u0430\u0432 \u0443 \u043D\u043E\u0442\u0430\u0442\u043A\u0438 \u0447\u0438 \u043C\u0435\u0441\u0435\u043D\u0434\u0436\u0435\u0440.","b.copy":"\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438","b.hide":"\u0421\u0445\u043E\u0432\u0430\u0442\u0438","g.diag":"\u0414\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430","diag.rate":"\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u0434\u0430\u043D\u0438\u0445","diag.version":"\u0412\u0435\u0440\u0441\u0456\u044F \u0441\u0430\u0439\u0442\u0443","diag.samples":"\u0412\u0438\u043C\u0456\u0440\u0456\u0432","diag.packets":"\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u043F\u0430\u043A\u0435\u0442\u0456\u0432","diag.calib":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F","diag.shifted":"\u0412\u0456\u0434\u043A\u0438\u043D\u0443\u0442\u043E \u0437\u0441\u0443\u043D\u0443\u0442\u0438\u0445 \u043F\u0430\u043A\u0435\u0442\u0456\u0432","diag.calibNo":"\u0449\u0435 \u043D\u0456","diag.bytes":"\u0411","b.calib":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u0442\u0438 (2 \u0441 \u0441\u043F\u043E\u043A\u043E\u044E)","b.shareLog":"\u041F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044C \u0436\u0443\u0440\u043D\u0430\u043B\u043E\u043C","banner.nobt":"\u0426\u0435\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u0432\u043C\u0456\u0454 Bluetooth. \u041D\u0430 iPhone \u0432\u0456\u0434\u043A\u0440\u0438\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456 <b>Bluefy</b>, \u043D\u0430 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u0456 \u2014 \u0443 Chrome \u0430\u0431\u043E Edge. \u0414\u0435\u043C\u043E \u043F\u0440\u0430\u0446\u044E\u0454 \u0439 \u0442\u0443\u0442.","banner.nottriki":"\u0412\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u2014 \u043D\u0435 Triki. \u0421\u043F\u0440\u043E\u0431\u0443\u0439 \u0456\u043D\u0448\u0438\u0439 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443.","banner.scene":"3D \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u043E\u0441\u044C \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457. \u0422\u0440\u044E\u043A\u0438 \u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C \u0456 \u0431\u0435\u0437 \u043D\u044C\u043E\u0433\u043E.","banner.artifact":"\u0426\u0435 \u0434\u0435\u043C\u043E \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0443, Bluetooth \u0442\u0443\u0442 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u0438\u0439. \u041D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437 Triki\xBB: \u0442\u0440\u044E\u043A\u0438, \u043F\u043E\u0432\u0442\u043E\u0440 \u0456 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C \u043D\u0430 \u0442\u0435\u0441\u0442\u043E\u0432\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.","banner.blocked":"\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u0437\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0432 Bluetooth \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456. \u0412\u0456\u0434\u043A\u0440\u0438\u0439 \u0441\u0430\u0439\u0442 \u0443 Bluefy \u0437\u0430 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u043C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C.","unit.kmh":"\u043A\u043C/\u0433\u043E\u0434","unit.cm":"\u0441\u043C","unit.ms":"\u043C\u0441","unit.dps":"\xB0/\u0441","unit.min":"\u0445\u0432","unit.km":"\u043A\u043C","unit.s":"\u0441","last.empty":"\u0422\u0443\u0442 \u0437'\u044F\u0432\u0438\u0442\u044C\u0441\u044F \u0442\u0432\u0456\u0439 \u043F\u0435\u0440\u0448\u0438\u0439 \u0442\u0440\u044E\u043A: \u043D\u0430\u0437\u0432\u0430, \u0432\u0438\u0441\u043E\u0442\u0430, \u0447\u0430\u0441 \u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u0456 \u0439 \u0447\u0438 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0438\u0442\u0438\u0441\u044C.","last.landed":"\u041F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u043E","last.bailed":"\u041D\u0435\u0432\u0434\u0430\u043B\u043E","last.air":"\u0427\u0430\u0441 \u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u0456","last.flip":"\u0424\u043B\u0456\u043F","last.spin":"\u0420\u043E\u0437\u0432\u043E\u0440\u043E\u0442 \u0434\u043E\u0448\u043A\u0438","last.peak":"\u041D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0435 \u043E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F","last.impact":"\u0423\u0434\u0430\u0440 \u043F\u0440\u0438 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u043D\u0456","last.noMount":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F Triki \u043D\u0430 \u0434\u043E\u0448\u0446\u0456 \u0449\u0435 \u043D\u0435 \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0435, \u0442\u043E\u0436 \u043D\u0430\u0437\u0432\u0430 \u0442\u0440\u044E\u043A\u0443 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u044E. \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0439 \u0439\u043E\u0433\u043E \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445.","last.replay":"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u043F\u043E\u0432\u0442\u043E\u0440","cl.ok":"\u0447\u0438\u0441\u0442\u043E","cl.bail":"\u0432\u043F\u0430\u0432","cl.cal":"\u043A\u0430\u043B\u0456\u0431\u0440. #{n}","row.edit":"\u0412\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438","edit.landed":"\u041F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u043E","edit.bailed":"\u041D\u0435\u0432\u0434\u0430\u043B\u043E","edit.actually":"\u041D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0446\u0435 \u0431\u0443\u0432","edit.delete":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438: \u0446\u0435 \u0431\u0443\u0432 \u043D\u0435 \u0442\u0440\u044E\u043A","edit.noReplay":"\u0414\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0442\u0440\u044E\u043A\u0443 \u043D\u0435\u043C\u0430\u0454 \u0434\u0430\u043D\u0438\u0445 \u043F\u043E\u0432\u0442\u043E\u0440\u0443.","st.attempts":"\u0421\u043F\u0440\u043E\u0431","st.rate":"\u0412\u0434\u0430\u043B\u0438\u0445","st.maxH":"\u041D\u0430\u0439\u0432\u0438\u0449\u0438\u0439 \u0441\u0442\u0440\u0438\u0431\u043E\u043A","st.avgH":"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0438\u0441\u043E\u0442\u0430","st.maxAir":"\u041D\u0430\u0439\u0434\u043E\u0432\u0448\u0435 \u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u0456","st.maxSpin":"\u041D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0435 \u043E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F","st.duration":"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C","st.topSpeed":"\u041C\u0430\u043A\u0441. \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C","st.avgSpeed":"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C","st.dist":"\u041F\u0440\u043E\u0457\u0445\u0430\u043D\u043E","bt.of":"{o} \u0437 {a}","conn.idle":"\u041D\u0435 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E","conn.choosing":"\u0412\u0438\u0431\u0456\u0440 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E\u2026","conn.connecting":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C\u2026","conn.searching":"\u0428\u0443\u043A\u0430\u044E {name}\u2026","conn.reconnecting":"\u041F\u0435\u0440\u0435\u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C\u2026","conn.notTriki":"\u0426\u0435 \u043D\u0435 Triki","conn.failed":"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438\u0441\u044C","conn.disconnected":"\u0412\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E","conn.demo":"\u0414\u0435\u043C\u043E","conn.notFound":"{name} \u043D\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454","trick.Other":"\u0406\u043D\u0448\u0435","flag.partial":"\u0447\u0430\u0441\u0442\u043A\u043E\u0432\u0438\u0439 \u043E\u0431\u0435\u0440\u0442 {d}\xB0","flag.under":"\u043D\u0435\u0434\u043E\u043A\u0440\u0443\u0447\u0435\u043D\u043E \u043D\u0430 {d}\xB0","flag.over":"\u043F\u0435\u0440\u0435\u043A\u0440\u0443\u0447\u0435\u043D\u043E \u043D\u0430 {d}\xB0","flag.yaw":"\u043D\u0435\u0442\u043E\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u0432\u043E\u0440\u043E\u0442","flag.clipped":"\u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u043E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F \u0434\u043E\u043C\u0430\u043B\u044C\u043E\u0432\u0430\u043D\u043E: \u0441\u0435\u043D\u0441\u043E\u0440 \u0443\u043F\u0438\u0440\u0430\u0432\u0441\u044F \u0432 \u043C\u0435\u0436\u0443","flag.gap":"Bluetooth \u0437\u0430\u0433\u0443\u0431\u0438\u0432 \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u043F\u043E\u043B\u044C\u043E\u0442\u0443 \u2014 \u043E\u0431\u0435\u0440\u0442\u0438 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u0456","reason.flipped":"\u0434\u043E\u0448\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u043B\u0430\u0441\u044C","reason.side":"\u0434\u043E\u0448\u043A\u0430 \u0432\u043F\u0430\u043B\u0430 \u043D\u0430 \u0431\u0456\u043A","reason.unstable":"\u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0435 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0435\u043D\u043D\u044F","cal.title":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0440\u044E\u043A\u0456\u0432 (\u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u043E)","cal.p":"\u0412\u0438\u0431\u0435\u0440\u0438 \u0442\u0440\u044E\u043A, \u043D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0417\u0430\u043F\u0438\u0441\xBB \u0456 \u0437\u0440\u043E\u0431\u0438 \u0439\u043E\u0433\u043E \u043A\u0456\u043B\u044C\u043A\u0430 \u0440\u0430\u0437\u0456\u0432, \u043A\u0440\u0430\u0449\u0435 5\u201310. \u041D\u0435\u0432\u0434\u0430\u043B\u0456 \u0441\u043F\u0440\u043E\u0431\u0438 \u0442\u0435\u0436 \u043F\u0456\u0434\u0445\u043E\u0434\u044F\u0442\u044C, \u044F\u043A\u0449\u043E \u0434\u043E\u0448\u043A\u0430 \u043A\u0440\u0443\u0442\u0438\u043B\u0430\u0441\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E. \u041F\u043E\u0442\u0456\u043C \u043D\u0430\u0442\u0438\u0441\u043D\u0438 \xAB\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438\xBB: \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \u0437\u0430\u043F\u0430\u043C'\u044F\u0442\u0430\u0454, \u0432 \u044F\u043A\u0438\u0439 \u0431\u0456\u043A \u0443 \u0442\u0435\u0431\u0435 \u043A\u0440\u0443\u0442\u044F\u0442\u044C\u0441\u044F kickflip \u0456 shuvit.","cal.note":"\u041F\u043E\u043A\u0438 \u0439\u0434\u0435 \u0437\u0430\u043F\u0438\u0441, \u0441\u043F\u0440\u043E\u0431\u0438 \u043D\u0435 \u043F\u043E\u0442\u0440\u0430\u043F\u043B\u044F\u044E\u0442\u044C \u0443 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0441\u0435\u0441\u0456\u0457.","cal.count":"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E: {n}","cal.rec":"\u0417\u0430\u043F\u0438\u0441","cal.stop":"\u0421\u0442\u043E\u043F","cal.recording":"\u0417\u0430\u043F\u0438\u0441 {trick}: \u0440\u043E\u0431\u0438 \u0442\u0440\u044E\u043A. \u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E {n}.","cal.bar":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F \xB7 {trick} \xB7 {n}","cal.delLast":"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439","cal.apply":"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438","cal.export":"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0441\u0438","cal.clear":"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0435","cal.clearConfirm":"\u041D\u0430\u0442\u0438\u0441\u043D\u0438 \u0449\u0435 \u0440\u0430\u0437, \u0449\u043E\u0431 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0441\u0456 \u0437\u0430\u043F\u0438\u0441\u0438","cal.applied":"\u0417\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0430\u043D\u043E. \u0412\u0456\u0441\u044C \u0444\u043B\u0456\u043F\u0430 \u0432\u0456\u0434\u0445\u0438\u043B\u0435\u043D\u0430 \u0432\u0456\u0434 \u043E\u0441\u0456 \u043D\u043E\u0441\u0430 \u043D\u0430 {a}\xB0, \u0432\u0456\u0441\u044C shuvit \u0432\u0456\u0434 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0456 \u043D\u0430 {b}\xB0.","cal.need":"\u0417\u0430\u043C\u0430\u043B\u043E \u0437\u0430\u043F\u0438\u0441\u0456\u0432: \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0445\u043E\u0447\u0430 \u0431 2 kickflip \u0430\u0431\u043E heelflip \u0456 2 shuvit (BS \u0430\u0431\u043E FS).","cal.sameFlip":"Kickflip \u0456 heelflip \u043A\u0440\u0443\u0442\u0438\u043B\u0438\u0441\u044C \u0432 \u043E\u0434\u0438\u043D \u0431\u0456\u043A. \u041F\u0435\u0440\u0435\u0432\u0456\u0440, \u0447\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u0442\u0440\u044E\u043A \u043F\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u043F\u0438\u0441\u0443.","cal.sameShuv":"BS \u0456 FS shuvit \u043A\u0440\u0443\u0442\u0438\u043B\u0438\u0441\u044C \u0432 \u043E\u0434\u0438\u043D \u0431\u0456\u043A. \u041F\u0435\u0440\u0435\u0432\u0456\u0440, \u0447\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u0442\u0440\u044E\u043A \u043F\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u043F\u0438\u0441\u0443.","cal.status":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u0454 \u0437 {date}.","cal.statusNo":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0449\u0435 \u043D\u0435 \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0430\u043D\u0435: \u0442\u0440\u044E\u043A\u0438 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F \u0437\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u043C\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u043C\u0438.","cal.demo":"\u0417\u0430\u0440\u0430\u0437 \u043F\u0440\u0430\u0446\u044E\u0454 \u0434\u0435\u043C\u043E: \u0434\u0430\u043D\u0456 \u0442\u0430\u043C \u043D\u0435\u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456, \u0442\u043E\u0436 \u0437\u0430\u043F\u0438\u0441\u0438 \u0433\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438.","cal.reset":"\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u043A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F","cal.demoApply":"\u0423 \u0434\u0435\u043C\u043E \u043A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0435 \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F, \u0431\u043E \u0434\u0430\u043D\u0456 \u0442\u0430\u043C \u043D\u0435\u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456. \u0417\u0430\u043F\u0438\u0448\u0438 \u0442\u0440\u044E\u043A\u0438 \u0437 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u043C Triki.","rp.title":"\u041F\u043E\u0432\u0442\u043E\u0440","rp.frame":"\u043A\u0430\u0434\u0440 {i}/{n}","rp.height":"\u0432\u0438\u0441\u043E\u0442\u0430","rp.flip":"\u0444\u043B\u0456\u043F","rp.spin":"\u0440\u043E\u0437\u0432\u043E\u0440\u043E\u0442","rp.start":"\u041D\u0430 \u043F\u043E\u0447\u0430\u0442\u043E\u043A","rp.back":"\u041A\u0430\u0434\u0440 \u043D\u0430\u0437\u0430\u0434","rp.play":"\u0412\u0456\u0434\u0442\u0432\u043E\u0440\u0438\u0442\u0438","rp.pause":"\u041F\u0430\u0443\u0437\u0430","rp.fwd":"\u041A\u0430\u0434\u0440 \u0432\u043F\u0435\u0440\u0435\u0434","rp.end":"\u0423 \u043A\u0456\u043D\u0435\u0446\u044C","rp.close":"\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043F\u043E\u0432\u0442\u043E\u0440","rp.speed":"\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u0443","rp.drag":"\u0422\u044F\u0433\u043D\u0438 \u043F\u043E \u0435\u043A\u0440\u0430\u043D\u0443, \u0449\u043E\u0431 \u043E\u0431\u0435\u0440\u0442\u0430\u0442\u0438 \u043A\u0430\u043C\u0435\u0440\u0443","rp.timeline":"\u0422\u0430\u0439\u043C\u043B\u0430\u0439\u043D \u043F\u043E\u0432\u0442\u043E\u0440\u0443","rp.fromPop":"{s} \u0441 \u0432\u0456\u0434 \u043F\u043E\u043F\u0443","log.cmdFail":"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043F\u0440\u043E\u0439\u0448\u043B\u0430: {e}","log.notTriki":"\xAB{name}\xBB \u2014 \u043D\u0435 Triki","log.error":"\u041F\u043E\u043C\u0438\u043B\u043A\u0430: {e}","log.cancel":"\u0412\u0438\u0431\u0456\u0440 \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E \u0430\u0431\u043E Triki \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E","log.connected":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E: {name}","log.disconnected":"Triki \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0432\u0441\u044F","log.packet":"\u0420\u043E\u0437\u043C\u0456\u0440 \u043F\u0430\u043A\u0435\u0442\u0430 {n} \u0411","log.calibStart":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F: \u043D\u0435 \u0440\u0443\u0445\u0430\u0439 Triki 2 \u0441\u2026","log.calibFew":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F: \u0437\u0430\u043C\u0430\u043B\u043E \u0434\u0430\u043D\u0438\u0445","log.calibMoved":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F: Triki \u0440\u0443\u0445\u0430\u0432\u0441\u044F. \u041F\u043E\u043A\u043B\u0430\u0434\u0438 \u0439\u043E\u0433\u043E \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E.","log.calibDone":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F: 1 g = {lsb}, \u0434\u0440\u0435\u0439\u0444 {drift} \xB0/\u0441","log.trick":"\u0422\u0440\u044E\u043A: {name}, {h} \u0441\u043C, {res}","log.demo":"\u0414\u0435\u043C\u043E: \u0440\u0456\u0437\u043D\u0456 \u0442\u0440\u044E\u043A\u0438 \u043F\u043E \u0447\u0435\u0440\u0437\u0456, \u043A\u043E\u0436\u043D\u0456 3,5 \u0441","log.gpsNo":"GPS \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0443 \u0446\u044C\u043E\u043C\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456","log.gps":"GPS: {e}","log.model":"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u0441\u0432\u043E\u044E \u043C\u043E\u0434\u0435\u043B\u044C \u0434\u043E\u0448\u043A\u0438","log.modelFail":"models/board.glb \u043D\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u043B\u0430\u0441\u044C: {e}","log.mount":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F Triki \u043D\u0430 \u0434\u043E\u0448\u0446\u0456 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E","log.recStart":"\u0417\u0430\u043F\u0438\u0441 \u0441\u0438\u0440\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043F\u043E\u0447\u0430\u0442\u043E","log.copied":"\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E","log.known":"\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C \u0434\u043E \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E\u0433\u043E {name}","log.knownFail":"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0439 Triki \u043D\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0432: {e}","log.noKnown":"\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u0432\u043C\u0456\u0454 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u0438\u0441\u044C \u0434\u043E \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0445 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457\u0432 \u0441\u0430\u043C, \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u044E \u0441\u043F\u0438\u0441\u043E\u043A","log.saved":"\u0417\u0430\u043F\u0430\u043C'\u044F\u0442\u0430\u0432 {name}","log.forgot":"\u0417\u0430\u0431\u0443\u0432 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0439 Triki","log.calSample":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F: {trick} #{n}","log.calApplied":"\u041A\u0430\u043B\u0456\u0431\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0440\u044E\u043A\u0456\u0432 \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0430\u043D\u043E"},Nu={"lang.name":"English","mode.aria":"Mode","mode.tracker":"Tracker","mode.game":"Game","game.demo":"Game demo without a Triki","game.h":"Triki game","game.free":"Free skate","game.skate":"S.K.A.T.E.","game.freeNote":"Do tricks in any order. Different tricks in a row build a combo, a bail resets it.","game.skateNote":"The site calls a trick and you repeat it. Miss and you get a letter. Spell S.K.A.T.E. and the game is over.","game.level":"Level the Triki","game.restart":"Start over","game.score":"Score","game.best":"Best","game.landed":"Landed","game.attempts":"Attempts","game.bestCombo":"Longest combo","game.list":"Tricks this game","game.listEmpty":"No tricks yet. Start with an ollie.","game.how":"How to play","game.howIntro":"Here the Triki works like a fingerboard: you hold it in your hand and the site recognises the trick from the motion. The board on screen stands still and shows the trick once you finish it.","game.how1":"<b>Grip.</b> Rest the Triki on the side of your index finger with your thumb on top. Hold it like the board on screen: nose to the right. Tap \u201CLevel the Triki\u201D and hold it level for a second.","game.how2":"<b>Ollie.</b> Press the left end (the tail) with your thumb so the right end (the nose) lifts, then bring the Triki back level. That\u2019s the pop, and every trick starts with it.","game.how3":"<b>Kickflip and heelflip.</b> After the pop, roll the Triki a full turn around its long axis: far edge up for a kickflip, near edge up for a heelflip. Stop it level.","game.how4":"<b>Shuvit.</b> After the pop, spin the Triki half a turn without flipping it: nose away from you for a BS pop shuvit, towards you for FS. A full turn is a 360 shuvit.","game.how5":"<b>Combos.</b> A flip followed by a spin gives a varial kickflip, hardflip, inward heelflip, 360 flip or laser flip. Turn the Triki end over end for an impossible.","game.how6":"<b>Bails.</b> Stop upside down or take longer than 3 seconds and the trick doesn\u2019t count, and your combo is gone. For goofy (in Settings) all directions are mirrored.","hud.connect":"Connect a Triki or start the game demo","hud.level":"Hold the Triki level\u2026","hud.ready":"Ready. Pop it!","hud.air":"flip {r}\xB0 \xB7 spin {y}\xB0","hud.timeout":"Too slow: finish the trick within 3 seconds","hud.flipped":"Upside down: bail","hud.reset":"Bring the Triki back level","hud.do":"Do a","hud.over":"S.K.A.T.E. Game over \xB7 tricks: {n}","game.sloppy":"sloppy","game.repeat":"repeat","game.miss":"miss","game.hit":"got it!","game.letter":"letter {l}","log.gameDemo":"Game demo: the hand does tricks in turn","log.mode":"Mode: {m}","scene.aria":"3D board model that follows the Triki","settings.aria":"Settings",air:"In the air","cta.connect":"Connect Triki","cta.connectSaved":"Connect {name}","cta.demo":"Try without a Triki","cta.hintFirst":"A list of devices opens. Pick \u201CTriki \u2026\u201D in it and the site will remember it.","cta.hintSaved":"If a list opens, pick \u201C{name}\u201D.","h.last":"Last trick","h.list":"Tricks this session","h.stats":"Session stats","list.empty":"Nothing yet. Every trick shows up here. Tap a trick to watch its replay.","stats.new":"Start a new session","stats.newConfirm":"Tap again: this session moves to history","stats.history":"Past sessions ({n})","hist.item":"{date} {time} \xB7 attempts: {n} \xB7 landed {rate}%","sheet.title":"Settings","sheet.done":"Done","g.lang":"Language","g.conn":"Connection","conn.info.on":"Connected: {name}.","conn.info.saved":"Saved device: {name}. The site will connect to it by itself.","conn.info.savedManual":"Saved device: {name}. This browser can\u2019t connect on its own, so it opens the list: pick {name} there.","conn.info.first":"No Triki chosen yet. Tap \u201CConnect\u201D: a list of all devices opens, pick \u201CTriki \u2026\u201D in it. The site remembers your choice.","b.connect":"Connect","b.chooseOther":"Choose another device","b.forget":"Forget this Triki","b.disconnect":"Disconnect","opt.autoConnect":"Connect to the saved Triki as soon as I open the site","opt.freq":"Sample interval (lower = more often)","freq.std":"same as \u017Bappka","b.rateTest":"Speed test","rate.p":"The more often the Triki sends samples, the more precisely a trick shows up in the air. The test checks how many samples actually reach your phone and picks the best setting. During the test (~16 s) hold the Triki in your hand and move it gently.","rate.running":"Testing ({i}/{n})\u2026 keep moving the Triki gently in your hand.","rate.result":"Chosen {v}: data rate {hz} Hz (104 gave {hz0} Hz).","rate.failed":"The test failed: {e}. The previous setting is back.","rate.needConn":"Connect the Triki first.","log.rateStep":"Speed test: {v} \u2192 {hz} Hz, gaps {holes}%, longest pause {gap} s","log.rateBest":"Speed test: chose {v} ({hz} Hz)","opt.keepalive":"Wake the Triki every second (if it keeps disconnecting)","opt.autoRe":"Reconnect automatically","unit.hz":"Hz","g.mount":"Position on the board","mount.intro":"The app needs to know how the Triki is mounted, otherwise it mixes up a kickflip and a shuvit. Takes 10 seconds.","mount.done":"Position set. If you move the Triki on the board, set it up again.","mount.resetDone":"Position cleared. Set it up once the Triki is mounted on the board.","mount.needConn":"Connect the Triki first, then set up the position.","mount.auto":"Position refined automatically from your pops and flips. You can run the setup again, but you don't have to.","log.mountYaw":"Triki position refined from your tricks: turned by {deg}\xB0","b.wizard":"Set up position","b.reset":"Reset","wiz.1":"Step 1 of 2. Put the board wheels down on a flat floor and don\u2019t touch it. Then tap \u201CDone\u201D.","wiz.2":"Step 2 of 2. Lift the nose (back wheels stay on the floor) and hold still. Then tap \u201CDone\u201D.","wiz.hold":"Don\u2019t move the board\u2026","wiz.noData":"No data came in. Check the connection and tap \u201CDone\u201D again.","wiz.moved":"The board moved.","wiz.tilt":"The nose is only lifted {deg}\xB0. Lift it higher and tap \u201CDone\u201D.","b.done":"Done","b.cancel":"Cancel","opt.stance":"Stance","stance.regular":"Regular (left foot forward)","stance.goofy":"Goofy (right foot forward)","g.speed":"Speed","speed.p":"The Triki doesn\u2019t measure riding speed. It can be estimated from the phone\u2019s GPS if the phone is in your pocket.","opt.gps":"Estimate speed with GPS","g.other":"Other","opt.beep":"Sound after a trick","b.demo":"Demo without a Triki","b.demoExit":"Exit demo","preload.note":"These are your real tricks, recognised by the new version: calibration attempts from 9 October and recordings from 15 October (ollies standing and rolling, kickflips rolling and standing). The plain riding and rough-road recordings gave zero false tricks. Tap a trick to watch its replay with the timeline.","demo.note":"This is the demo: these tricks are fake and disappear as soon as you exit it. Your own stats stay as they were.","g.data":"Data","data.p":"Export saves every trick of the session together with the raw sensor data. We\u2019ll build the trick database from it.","b.export":"Export session","b.rec":"Record raw data","b.recStop":"Stop recording","export.note":"{name}: if the file didn\u2019t save, copy the text and paste it into your notes or a messenger.","b.copy":"Copy","b.hide":"Hide","g.diag":"Diagnostics","diag.rate":"Data rate","diag.version":"Site version","diag.samples":"Samples","diag.packets":"Packet sizes","diag.calib":"Calibration","diag.shifted":"Shifted packets dropped","diag.calibNo":"not yet","diag.bytes":"B","b.calib":"Calibrate (2 s still)","b.shareLog":"Share log","banner.nobt":"This browser has no Bluetooth. On iPhone open the page in the <b>Bluefy</b> browser, on a computer use Chrome or Edge. The demo works here too.","banner.nottriki":"That device isn\u2019t a Triki. Try another one in the list.","banner.scene":"3D couldn\u2019t start on this device. Tricks and stats work without it.","banner.artifact":"This is a preview demo, Bluetooth is off here. Tap \u201CTry without a Triki\u201D: tricks, replay and stats run on test data.","banner.blocked":"The browser blocked Bluetooth on this page. Open the site in Bluefy from its normal link.","unit.kmh":"km/h","unit.cm":"cm","unit.ms":"ms","unit.dps":"\xB0/s","unit.min":"min","unit.km":"km","unit.s":"s","last.empty":"Your first trick shows up here: name, height, airtime and whether you landed it.","last.landed":"Landed","last.bailed":"Bailed","last.air":"Airtime","last.flip":"Flip","last.spin":"Board spin","last.peak":"Fastest rotation","last.impact":"Landing impact","last.noMount":"The Triki\u2019s position on the board isn\u2019t set up yet, so the trick name may be off. Set it up in Settings.","last.replay":"Watch replay","cl.ok":"clean","cl.bail":"bail","cl.cal":"calib #{n}","row.edit":"Edit","edit.landed":"Landed","edit.bailed":"Bailed","edit.actually":"It was actually","edit.delete":"Delete: it wasn\u2019t a trick","edit.noReplay":"There\u2019s no replay data for this trick.","st.attempts":"Attempts","st.rate":"Landed","st.maxH":"Highest pop","st.avgH":"Average height","st.maxAir":"Longest airtime","st.maxSpin":"Fastest rotation","st.duration":"Duration","st.topSpeed":"Top speed","st.avgSpeed":"Average speed","st.dist":"Distance","bt.of":"{o} of {a}","conn.idle":"Not connected","conn.choosing":"Choosing a device\u2026","conn.connecting":"Connecting\u2026","conn.searching":"Looking for {name}\u2026","conn.reconnecting":"Reconnecting\u2026","conn.notTriki":"Not a Triki","conn.failed":"Couldn\u2019t connect","conn.disconnected":"Disconnected","conn.demo":"Demo","conn.notFound":"{name} isn\u2019t responding","trick.Other":"Other","flag.partial":"partial rotation {d}\xB0","flag.under":"under-rotated by {d}\xB0","flag.over":"over-rotated by {d}\xB0","flag.yaw":"imprecise board spin","flag.clipped":"part of the rotation was filled in: the sensor hit its limit","flag.gap":"Bluetooth dropped part of the flight, so the rotation is approximate","reason.flipped":"the board flipped over","reason.side":"the board landed on its side","reason.unstable":"unstable landing","cal.title":"Trick calibration (temporary)","cal.p":"Pick a trick, tap \u201CRecord\u201D and do it several times, 5\u201310 is best. Bailed attempts count too if the board spun the right way. Then tap \u201CApply\u201D: the app remembers which way your kickflip and shuvit spin.","cal.note":"While recording, attempts don\u2019t go into the session stats.","cal.count":"recorded: {n}","cal.rec":"Record","cal.stop":"Stop","cal.recording":"Recording {trick}: do the trick. Recorded {n}.","cal.bar":"Calibration \xB7 {trick} \xB7 {n}","cal.delLast":"Delete last","cal.apply":"Apply","cal.export":"Export recordings","cal.clear":"Clear all","cal.clearConfirm":"Tap again to delete every recording","cal.applied":"Applied. The flip axis is {a}\xB0 off the nose axis, the shuvit axis {b}\xB0 off vertical.","cal.need":"Not enough recordings: you need at least 2 kickflips or heelflips and 2 shuvits (BS or FS).","cal.sameFlip":"Kickflip and heelflip spun the same way. Check that the right trick was picked while recording.","cal.sameShuv":"BS and FS shuvit spun the same way. Check that the right trick was picked while recording.","cal.status":"Calibration active since {date}.","cal.statusNo":"Calibration not applied yet: tricks are named with the default settings.","cal.demo":"The demo is running: its data is fake, so recordings are only good for testing.","cal.reset":"Turn calibration off","cal.demoApply":"Calibration isn\u2019t applied in the demo because its data is fake. Record tricks with a connected Triki.","rp.title":"Replay","rp.frame":"frame {i}/{n}","rp.height":"height","rp.flip":"flip","rp.spin":"spin","rp.start":"To start","rp.back":"Previous frame","rp.play":"Play","rp.pause":"Pause","rp.fwd":"Next frame","rp.end":"To end","rp.close":"Close replay","rp.speed":"Replay speed","rp.drag":"Drag on the screen to orbit the camera","rp.timeline":"Replay timeline","rp.fromPop":"{s} s from pop","log.cmdFail":"Command failed: {e}","log.notTriki":"\u201C{name}\u201D isn\u2019t a Triki","log.error":"Error: {e}","log.cancel":"Choice cancelled or no Triki found","log.connected":"Connected: {name}","log.disconnected":"Triki disconnected","log.packet":"Packet size {n} B","log.calibStart":"Calibration: keep the Triki still for 2 s\u2026","log.calibFew":"Calibration: not enough data","log.calibMoved":"Calibration: the Triki moved. Put it down and keep it still.","log.calibDone":"Calibration: 1 g = {lsb}, drift {drift} \xB0/s","log.trick":"Trick: {name}, {h} cm, {res}","log.demo":"Demo: different tricks in turn, every 3.5 s","log.gpsNo":"GPS isn\u2019t available in this browser","log.gps":"GPS: {e}","log.model":"Loaded your own board model","log.modelFail":"models/board.glb didn\u2019t open: {e}","log.mount":"Triki position on the board saved","log.recStart":"Raw data recording started","log.copied":"Copied","log.known":"Connecting to the saved {name}","log.knownFail":"The saved Triki didn\u2019t respond: {e}","log.noKnown":"The browser can\u2019t connect to saved devices on its own, opening the list","log.saved":"Remembered {name}","log.forgot":"Forgot the saved Triki","log.calSample":"Calibration: {trick} #{n}","log.calApplied":"Trick calibration applied"},$m={"lang.name":"Polski","mode.aria":"Tryb","mode.tracker":"Tracker","mode.game":"Gra","game.demo":"Demo gry bez Triki","game.h":"Gra z Triki","game.free":"Wolna jazda","game.skate":"S.K.A.T.E.","game.freeNote":"R\xF3b triki w dowolnej kolejno\u015Bci. R\xF3\u017Cne triki pod rz\u0105d buduj\u0105 combo, gleba je zeruje.","game.skateNote":"Strona podaje trik, a ty go powtarzasz. Nie wysz\u0142o \u2014 dostajesz liter\u0119. Zbierzesz S.K.A.T.E. i gra si\u0119 ko\u0144czy.","game.level":"Wyr\xF3wnaj Triki","game.restart":"Zacznij od nowa","game.score":"Wynik","game.best":"Rekord","game.landed":"Zaliczone","game.attempts":"Pr\xF3by","game.bestCombo":"Najd\u0142u\u017Csze combo","game.list":"Triki w tej grze","game.listEmpty":"Jeszcze \u017Cadnego triku. Zacznij od ollie.","game.how":"Jak gra\u0107","game.howIntro":"Tutaj Triki dzia\u0142a jak fingerboard: trzymasz go w d\u0142oni, a strona rozpoznaje trik po ruchu. Deska na ekranie stoi i pokazuje trik, gdy go sko\u0144czysz.","game.how1":"<b>Chwyt.</b> Po\u0142\xF3\u017C Triki na boku palca wskazuj\u0105cego, kciuk na g\xF3rze. Trzymaj go jak desk\u0119 na ekranie: nosem w prawo. Dotknij \u201EWyr\xF3wnaj Triki\u201D i przytrzymaj go poziomo przez sekund\u0119.","game.how2":"<b>Ollie.</b> Naci\u015Bnij kciukiem lewy koniec (tail), \u017Ceby prawy (nos) si\u0119 uni\xF3s\u0142, i wr\xF3\u0107 Triki do poziomu. To jest pop, od niego zaczyna si\u0119 ka\u017Cdy trik.","game.how3":"<b>Kickflip i heelflip.</b> Po popie obr\xF3\u0107 Triki o pe\u0142ny obr\xF3t wok\xF3\u0142 d\u0142ugiej osi: dalsz\u0105 kraw\u0119dzi\u0105 w g\xF3r\u0119 to kickflip, bli\u017Csz\u0105 to heelflip. Zatrzymaj go poziomo.","game.how4":"<b>Shuvit.</b> Po popie obr\xF3\u0107 Triki o p\xF3\u0142 obrotu bez przewracania: nosem od siebie to BS pop shuvit, do siebie FS. Pe\u0142ny obr\xF3t to 360 shuvit.","game.how5":"<b>Kombinacje.</b> Flip, a po nim obr\xF3t daj\u0105 varial kickflipa, hardflipa, inward heelflipa, 360 flipa albo laser flipa. Przewr\xF3\u0107 Triki koniec przez koniec, a b\u0119dzie impossible.","game.how6":"<b>Gleba.</b> Zatrzymasz si\u0119 do g\xF3ry nogami albo nie sko\u0144czysz triku w 3 sekundy, to trik si\u0119 nie liczy, a combo przepada. Dla goofy (w ustawieniach) kierunki s\u0105 odwr\xF3cone.","hud.connect":"Po\u0142\u0105cz Triki albo uruchom demo gry","hud.level":"Trzymaj Triki poziomo\u2026","hud.ready":"Gotowe. Pop!","hud.air":"flip {r}\xB0 \xB7 obr\xF3t {y}\xB0","hud.timeout":"Za wolno: sko\u0144cz trik w 3 sekundy","hud.flipped":"Do g\xF3ry nogami: gleba","hud.reset":"Wr\xF3\u0107 Triki do poziomu","hud.do":"Zr\xF3b","hud.over":"S.K.A.T.E. Koniec gry \xB7 triki: {n}","game.sloppy":"niedok\u0142adnie","game.repeat":"powt\xF3rka","game.miss":"pud\u0142o","game.hit":"jest!","game.letter":"litera {l}","log.gameDemo":"Demo gry: r\u0119ka robi triki po kolei","log.mode":"Tryb: {m}","scene.aria":"Model 3D deski, kt\xF3ry powtarza ruch Triki","settings.aria":"Ustawienia",air:"W powietrzu","cta.connect":"Po\u0142\u0105cz Triki","cta.connectSaved":"Po\u0142\u0105cz {name}","cta.demo":"Wypr\xF3buj bez Triki","cta.hintFirst":"Otworzy si\u0119 lista urz\u0105dze\u0144. Wybierz w niej \u201ETriki \u2026\u201D, a strona go zapami\u0119ta.","cta.hintSaved":"Je\u015Bli otworzy si\u0119 lista, wybierz \u201E{name}\u201D.","h.last":"Ostatni trik","h.list":"Triki z tej sesji","h.stats":"Statystyki sesji","list.empty":"Na razie pusto. Ka\u017Cdy trik pojawi si\u0119 tutaj. Dotknij triku, \u017Ceby obejrze\u0107 powt\xF3rk\u0119.","stats.new":"Zacznij now\u0105 sesj\u0119","stats.newConfirm":"Dotknij jeszcze raz: ta sesja trafi do historii","stats.history":"Poprzednie sesje ({n})","hist.item":"{date} {time} \xB7 pr\xF3by: {n} \xB7 udane {rate}%","sheet.title":"Ustawienia","sheet.done":"Gotowe","g.lang":"J\u0119zyk","g.conn":"Po\u0142\u0105czenie","conn.info.on":"Po\u0142\u0105czono: {name}.","conn.info.saved":"Zapisane urz\u0105dzenie: {name}. Strona b\u0119dzie si\u0119 z nim \u0142\u0105czy\u0107 sama.","conn.info.savedManual":"Zapisane urz\u0105dzenie: {name}. Ta przegl\u0105darka nie umie \u0142\u0105czy\u0107 si\u0119 sama, wi\u0119c otworzy list\u0119: wybierz w niej {name}.","conn.info.first":"Triki nie jest jeszcze wybrany. Dotknij \u201EPo\u0142\u0105cz\u201D: otworzy si\u0119 lista wszystkich urz\u0105dze\u0144, wybierz w niej \u201ETriki \u2026\u201D. Strona zapami\u0119ta wyb\xF3r.","b.connect":"Po\u0142\u0105cz","b.chooseOther":"Wybierz inne urz\u0105dzenie","b.forget":"Zapomnij ten Triki","b.disconnect":"Roz\u0142\u0105cz","opt.autoConnect":"\u0141\u0105cz z zapisanym Triki od razu po otwarciu strony","opt.freq":"Odst\u0119p pomiar\xF3w (mniej = cz\u0119\u015Bciej)","freq.std":"jak w \u017Bappce","b.rateTest":"Test szybko\u015Bci","rate.p":"Im cz\u0119\u015Bciej Triki wysy\u0142a pomiary, tym dok\u0142adniej wida\u0107 trik w powietrzu. Test sprawdzi, ile pomiar\xF3w faktycznie dochodzi do telefonu, i wybierze najlepsze ustawienie. W trakcie testu (~16 s) trzymaj Triki w d\u0142oni i delikatnie nim poruszaj.","rate.running":"Test trwa ({i}/{n})\u2026 delikatnie poruszaj Triki w d\u0142oni.","rate.result":"Wybrano {v}: cz\u0119stotliwo\u015B\u0107 danych {hz} Hz (przy 104 by\u0142o {hz0} Hz).","rate.failed":"Test si\u0119 nie uda\u0142: {e}. Przywr\xF3cono poprzednie ustawienie.","rate.needConn":"Najpierw po\u0142\u0105cz Triki.","log.rateStep":"Test szybko\u015Bci: {v} \u2192 {hz} Hz, dziur {holes}%, najd\u0142u\u017Csza przerwa {gap} s","log.rateBest":"Test szybko\u015Bci: wybrano {v} ({hz} Hz)","opt.keepalive":"Bud\u017A Triki co sekund\u0119 (je\u015Bli sam si\u0119 roz\u0142\u0105cza)","opt.autoRe":"\u0141\u0105cz ponownie automatycznie","unit.hz":"Hz","g.mount":"Po\u0142o\u017Cenie na desce","mount.intro":"Aplikacja musi wiedzie\u0107, jak Triki jest zamocowany, inaczej pomyli kickflipa z shuvitem. Zajmuje 10 sekund.","mount.done":"Po\u0142o\u017Cenie ustawione. Je\u015Bli prze\u0142o\u017Cysz Triki na desce, ustaw je jeszcze raz.","mount.resetDone":"Po\u0142o\u017Cenie zresetowane. Ustaw je, gdy zamocujesz Triki na desce.","mount.needConn":"Najpierw po\u0142\u0105cz Triki, potem ustaw po\u0142o\u017Cenie.","mount.auto":"Po\u0142o\u017Cenie poprawione automatycznie na podstawie Twoich pop\xF3w i flip\xF3w. Mo\u017Cesz ponownie przej\u015B\u0107 kreator, ale nie musisz.","log.mountYaw":"Po\u0142o\u017Cenie Triki poprawione na podstawie trik\xF3w: obr\xF3t o {deg}\xB0","b.wizard":"Ustaw po\u0142o\u017Cenie","b.reset":"Resetuj","wiz.1":"Krok 1 z 2. Postaw desk\u0119 k\xF3\u0142kami na r\xF3wnej pod\u0142odze i jej nie dotykaj. Potem dotknij \u201EGotowe\u201D.","wiz.2":"Krok 2 z 2. Podnie\u015B nos deski (tylne k\xF3\u0142ka na pod\u0142odze) i trzymaj nieruchomo. Potem dotknij \u201EGotowe\u201D.","wiz.hold":"Nie ruszaj deski\u2026","wiz.noData":"Nie przysz\u0142y \u017Cadne dane. Sprawd\u017A po\u0142\u0105czenie i dotknij \u201EGotowe\u201D jeszcze raz.","wiz.moved":"Deska si\u0119 rusza\u0142a.","wiz.tilt":"Nos jest podniesiony tylko o {deg}\xB0. Podnie\u015B wy\u017Cej i dotknij \u201EGotowe\u201D.","b.done":"Gotowe","b.cancel":"Anuluj","opt.stance":"Pozycja","stance.regular":"Regular (lewa noga z przodu)","stance.goofy":"Goofy (prawa noga z przodu)","g.speed":"Pr\u0119dko\u015B\u0107","speed.p":"Triki nie mierzy pr\u0119dko\u015Bci jazdy. Mo\u017Cna j\u0105 liczy\u0107 w przybli\u017Ceniu przez GPS telefonu, je\u015Bli masz go w kieszeni.","opt.gps":"Licz pr\u0119dko\u015B\u0107 przez GPS","g.other":"Inne","opt.beep":"D\u017Awi\u0119k po triku","b.demo":"Demo bez Triki","b.demoExit":"Wyjd\u017A z demo","preload.note":"To twoje prawdziwe triki rozpoznane przez now\u0105 wersj\u0119: pr\xF3by z kalibracji z 9 pa\u017Adziernika i nagrania z 15 pa\u017Adziernika (ollie w miejscu i w ruchu, kickflipy w ruchu i w miejscu). Nagrania zwyk\u0142ej jazdy i jazdy po nier\xF3wnej drodze da\u0142y zero fa\u0142szywych trik\xF3w. Dotknij triku, \u017Ceby obejrze\u0107 powt\xF3rk\u0119 z osi\u0105 czasu.","demo.note":"To jest demo: te triki s\u0105 nieprawdziwe i znikn\u0105, gdy tylko wyjdziesz z demo. Twoje statystyki si\u0119 nie zmieni\u0105.","g.data":"Dane","data.p":"Eksport zapisuje wszystkie triki z sesji razem z surowymi danymi czujnika. Na ich podstawie zbudujemy baz\u0119 trik\xF3w.","b.export":"Eksportuj sesj\u0119","b.rec":"Nagraj surowe dane","b.recStop":"Zatrzymaj nagrywanie","export.note":"{name}: je\u015Bli plik si\u0119 nie zapisa\u0142, skopiuj tekst i wklej go do notatek albo komunikatora.","b.copy":"Kopiuj","b.hide":"Ukryj","g.diag":"Diagnostyka","diag.rate":"Cz\u0119stotliwo\u015B\u0107 danych","diag.version":"Wersja strony","diag.samples":"Pomiary","diag.packets":"Rozmiary pakiet\xF3w","diag.calib":"Kalibracja","diag.shifted":"Odrzucone przesuni\u0119te pakiety","diag.calibNo":"jeszcze nie","diag.bytes":"B","b.calib":"Kalibruj (2 s bez ruchu)","b.shareLog":"Udost\u0119pnij dziennik","banner.nobt":"Ta przegl\u0105darka nie obs\u0142uguje Bluetooth. Na iPhonie otw\xF3rz stron\u0119 w przegl\u0105darce <b>Bluefy</b>, na komputerze w Chrome albo Edge. Demo dzia\u0142a tak\u017Ce tutaj.","banner.nottriki":"Wybrane urz\u0105dzenie to nie Triki. Spr\xF3buj innego z listy.","banner.scene":"Nie uda\u0142o si\u0119 uruchomi\u0107 3D na tym urz\u0105dzeniu. Triki i statystyki dzia\u0142aj\u0105 bez niego.","banner.artifact":"To demo do podgl\u0105du, Bluetooth jest tu wy\u0142\u0105czony. Dotknij \u201EWypr\xF3buj bez Triki\u201D: triki, powt\xF3rka i statystyki dzia\u0142aj\u0105 na danych testowych.","banner.blocked":"Przegl\u0105darka zablokowa\u0142a Bluetooth na tej stronie. Otw\xF3rz stron\u0119 w Bluefy przez zwyk\u0142y link.","unit.kmh":"km/h","unit.cm":"cm","unit.ms":"ms","unit.dps":"\xB0/s","unit.min":"min","unit.km":"km","unit.s":"s","last.empty":"Tu pojawi si\u0119 tw\xF3j pierwszy trik: nazwa, wysoko\u015B\u0107, czas w powietrzu i czy uda\u0142o si\u0119 wyl\u0105dowa\u0107.","last.landed":"Wyl\u0105dowany","last.bailed":"Nieudany","last.air":"Czas w powietrzu","last.flip":"Flip","last.spin":"Obr\xF3t deski","last.peak":"Najszybszy obr\xF3t","last.impact":"Uderzenie przy l\u0105dowaniu","last.noMount":"Po\u0142o\u017Cenie Triki na desce nie jest jeszcze ustawione, wi\u0119c nazwa triku mo\u017Ce by\u0107 niedok\u0142adna. Ustaw je w ustawieniach.","last.replay":"Obejrzyj powt\xF3rk\u0119","cl.ok":"czysto","cl.bail":"gleba","cl.cal":"kalib. #{n}","row.edit":"Popraw","edit.landed":"Wyl\u0105dowany","edit.bailed":"Nieudany","edit.actually":"Tak naprawd\u0119 to by\u0142","edit.delete":"Usu\u0144: to nie by\u0142 trik","edit.noReplay":"Dla tego triku nie ma danych powt\xF3rki.","st.attempts":"Pr\xF3by","st.rate":"Udane","st.maxH":"Najwy\u017Cszy skok","st.avgH":"\u015Arednia wysoko\u015B\u0107","st.maxAir":"Najd\u0142u\u017Cej w powietrzu","st.maxSpin":"Najszybszy obr\xF3t","st.duration":"Czas trwania","st.topSpeed":"Maks. pr\u0119dko\u015B\u0107","st.avgSpeed":"\u015Arednia pr\u0119dko\u015B\u0107","st.dist":"Przejechano","bt.of":"{o} z {a}","conn.idle":"Nie po\u0142\u0105czono","conn.choosing":"Wyb\xF3r urz\u0105dzenia\u2026","conn.connecting":"\u0141\u0105cz\u0119\u2026","conn.searching":"Szukam {name}\u2026","conn.reconnecting":"\u0141\u0105cz\u0119 ponownie\u2026","conn.notTriki":"To nie Triki","conn.failed":"Nie uda\u0142o si\u0119 po\u0142\u0105czy\u0107","conn.disconnected":"Roz\u0142\u0105czono","conn.demo":"Demo","conn.notFound":"{name} nie odpowiada","trick.Other":"Inny","flag.partial":"cz\u0119\u015Bciowy obr\xF3t {d}\xB0","flag.under":"niedokr\u0119cony o {d}\xB0","flag.over":"przekr\u0119cony o {d}\xB0","flag.yaw":"niedok\u0142adny obr\xF3t deski","flag.clipped":"cz\u0119\u015B\u0107 obrotu odtworzono: czujnik osi\u0105gn\u0105\u0142 limit","flag.gap":"Bluetooth zgubi\u0142 cz\u0119\u015B\u0107 lotu, wi\u0119c obr\xF3t jest przybli\u017Cony","reason.flipped":"deska si\u0119 odwr\xF3ci\u0142a","reason.side":"deska upad\u0142a na bok","reason.unstable":"niestabilne l\u0105dowanie","cal.title":"Kalibracja trik\xF3w (tymczasowa)","cal.p":"Wybierz trik, dotknij \u201ENagrywaj\u201D i zr\xF3b go kilka razy, najlepiej 5\u201310. Nieudane pr\xF3by te\u017C si\u0119 licz\u0105, je\u015Bli deska obr\xF3ci\u0142a si\u0119 prawid\u0142owo. Potem dotknij \u201EZastosuj\u201D: aplikacja zapami\u0119ta, w kt\xF3r\u0105 stron\u0119 obraca si\u0119 tw\xF3j kickflip i shuvit.","cal.note":"Podczas nagrywania pr\xF3by nie trafiaj\u0105 do statystyk sesji.","cal.count":"nagrane: {n}","cal.rec":"Nagrywaj","cal.stop":"Stop","cal.recording":"Nagrywanie {trick}: r\xF3b trik. Nagrane: {n}.","cal.bar":"Kalibracja \xB7 {trick} \xB7 {n}","cal.delLast":"Usu\u0144 ostatni","cal.apply":"Zastosuj","cal.export":"Eksportuj nagrania","cal.clear":"Wyczy\u015B\u0107 wszystko","cal.clearConfirm":"Dotknij jeszcze raz, \u017Ceby usun\u0105\u0107 wszystkie nagrania","cal.applied":"Zastosowano. O\u015B flipa odchyla si\u0119 od osi nosa o {a}\xB0, o\u015B shuvita od pionu o {b}\xB0.","cal.need":"Za ma\u0142o nagra\u0144: potrzeba co najmniej 2 kickflip\xF3w albo heelflip\xF3w i 2 shuvit\xF3w (BS albo FS).","cal.sameFlip":"Kickflip i heelflip obraca\u0142y si\u0119 w t\u0119 sam\u0105 stron\u0119. Sprawd\u017A, czy przy nagrywaniu wybrano w\u0142a\u015Bciwy trik.","cal.sameShuv":"BS i FS shuvit obraca\u0142y si\u0119 w t\u0119 sam\u0105 stron\u0119. Sprawd\u017A, czy przy nagrywaniu wybrano w\u0142a\u015Bciwy trik.","cal.status":"Kalibracja dzia\u0142a od {date}.","cal.statusNo":"Kalibracja nie jest jeszcze zastosowana: triki s\u0105 rozpoznawane wed\u0142ug ustawie\u0144 domy\u015Blnych.","cal.demo":"Dzia\u0142a demo: dane s\u0105 w nim nieprawdziwe, wi\u0119c nagrania nadaj\u0105 si\u0119 tylko do test\xF3w.","cal.reset":"Wy\u0142\u0105cz kalibracj\u0119","cal.demoApply":"W demo kalibracja nie jest stosowana, bo dane s\u0105 nieprawdziwe. Nagraj triki z po\u0142\u0105czonym Triki.","rp.title":"Powt\xF3rka","rp.frame":"klatka {i}/{n}","rp.height":"wysoko\u015B\u0107","rp.flip":"flip","rp.spin":"obr\xF3t","rp.start":"Na pocz\u0105tek","rp.back":"Poprzednia klatka","rp.play":"Odtw\xF3rz","rp.pause":"Pauza","rp.fwd":"Nast\u0119pna klatka","rp.end":"Na koniec","rp.close":"Zamknij powt\xF3rk\u0119","rp.speed":"Pr\u0119dko\u015B\u0107 powt\xF3rki","rp.drag":"Przeci\u0105gnij po ekranie, \u017Ceby obraca\u0107 kamer\u0119","rp.timeline":"O\u015B czasu powt\xF3rki","rp.fromPop":"{s} s od popu","log.cmdFail":"Polecenie nie przesz\u0142o: {e}","log.notTriki":"\u201E{name}\u201D to nie Triki","log.error":"B\u0142\u0105d: {e}","log.cancel":"Wyb\xF3r anulowany albo nie znaleziono Triki","log.connected":"Po\u0142\u0105czono: {name}","log.disconnected":"Triki si\u0119 roz\u0142\u0105czy\u0142","log.packet":"Rozmiar pakietu {n} B","log.calibStart":"Kalibracja: nie ruszaj Triki przez 2 s\u2026","log.calibFew":"Kalibracja: za ma\u0142o danych","log.calibMoved":"Kalibracja: Triki si\u0119 rusza\u0142. Po\u0142\xF3\u017C go nieruchomo.","log.calibDone":"Kalibracja: 1 g = {lsb}, dryf {drift} \xB0/s","log.trick":"Trik: {name}, {h} cm, {res}","log.demo":"Demo: r\xF3\u017Cne triki po kolei, co 3,5 s","log.gpsNo":"GPS niedost\u0119pny w tej przegl\u0105darce","log.gps":"GPS: {e}","log.model":"Wczytano w\u0142asny model deski","log.modelFail":"Nie uda\u0142o si\u0119 otworzy\u0107 models/board.glb: {e}","log.mount":"Zapisano po\u0142o\u017Cenie Triki na desce","log.recStart":"Rozpocz\u0119to nagrywanie surowych danych","log.copied":"Skopiowano","log.known":"\u0141\u0105cz\u0119 z zapisanym {name}","log.knownFail":"Zapisany Triki nie odpowiedzia\u0142: {e}","log.noKnown":"Przegl\u0105darka nie umie sama \u0142\u0105czy\u0107 si\u0119 z zapisanymi urz\u0105dzeniami, otwieram list\u0119","log.saved":"Zapami\u0119tano {name}","log.forgot":"Zapomniano zapisany Triki","log.calSample":"Kalibracja: {trick} #{n}","log.calApplied":"Zastosowano kalibracj\u0119 trik\xF3w"},oa={uk:Iu,en:Nu,pl:$m};var Qm={uk:"uk-UA",en:"en-GB",pl:"pl-PL"};function eg(){if(ie.lang&&oa[ie.lang])return ie.lang;let r=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"];for(let e of r){let t=String(e).slice(0,2).toLowerCase();if(oa[t])return t}return"en"}var Yi=eg(),el=()=>Qm[Yi];function W(r,e){let t=oa[Yi][r];return t==null&&(t=Nu[r]),t==null?r:e?t.replace(/\{(\w+)\}/g,(n,i)=>e[i]!=null?e[i]:n):t}function Pe(r,e=0){let t=+Number(r).toFixed(e);return t||(t=0),t.toLocaleString(el(),{minimumFractionDigits:e,maximumFractionDigits:e})}var jr=r=>new Date(r).toLocaleTimeString(el(),{hour:"2-digit",minute:"2-digit",hour12:!1}),Du=r=>new Date(r).toLocaleDateString(el()),Kt=r=>r==="Other"||r==="\u0406\u043D\u0448\u0435"?W("trick.Other"):r;function Uu(r){return typeof r=="string"?r:W("flag."+r.k,{d:r.d!=null?Pe(r.d):""})}function ku(r){return r?Iu["reason."+r]?W("reason."+r):r:""}function tl(r=document){document.documentElement.lang=Yi;for(let e of r.querySelectorAll("[data-i18n]"))e.textContent=W(e.dataset.i18n);for(let e of r.querySelectorAll("[data-i18n-html]"))e.innerHTML=W(e.dataset.i18nHtml);for(let e of r.querySelectorAll("[data-i18n-aria]"))e.setAttribute("aria-label",W(e.dataset.i18nAria))}function Ou(r){oa[r]&&(Yi=r,ie.lang=r,$e(),tl(),de.emit("lang"))}var le={dot:(r,e)=>r[0]*e[0]+r[1]*e[1]+r[2]*e[2],add:(r,e)=>[r[0]+e[0],r[1]+e[1],r[2]+e[2]],sub:(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]],mul:(r,e)=>[r[0]*e,r[1]*e,r[2]*e],len:r=>Math.hypot(r[0],r[1],r[2]),norm:r=>{let e=Math.hypot(r[0],r[1],r[2])||1;return[r[0]/e,r[1]/e,r[2]/e]},cross:(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]};function la(r,e){let t=le.norm(r),n=e?le.sub(e,le.mul(t,le.dot(e,t))):null;(!n||le.len(n)<.15)&&(n=le.sub([1,0,0],le.mul(t,t[0])),le.len(n)<.1&&(n=le.sub([0,1,0],le.mul(t,t[1]))));let i=le.norm(n),s=le.cross(t,i);return[i,s,t]}function tg(r,e,t,n,i){let s=Math.hypot(e,t,n)*i;if(s<1e-9)return r;let a=Math.sin(s/2)/(s/i),o=Math.cos(s/2),l=e*a,c=t*a,h=n*a,[u,d,p,m]=r,v=[u*o-d*l-p*c-m*h,u*l+d*o+p*h-m*c,u*c-d*h+p*o+m*l,u*h+d*c-p*l+m*o],f=Math.hypot(v[0],v[1],v[2],v[3]);return[v[0]/f,v[1]/f,v[2]/f,v[3]/f]}function Ht(r,e,t,n,i=2){let[s,a,o]=e,l=le.len(t);if(l>.75&&l<1.25){let[c,h,u,d]=r,p=t[0]/l,m=t[1]/l,v=t[2]/l,f=2*(h*d-c*u),_=2*(c*h+u*d),g=c*c-h*h-u*u+d*d;s+=i*(m*g-v*_),a+=i*(v*f-p*g),o+=i*(p*_-m*f)}return tg(r,s,a,o,n)}var En=([r,e,t,n])=>[2*(e*n-r*t),2*(r*e+t*n),r*r-e*e-t*t+n*n];function zu(r){let e=le.norm(r),t=e[2];if(t<-.9999)return[0,1,0,0];let n=le.cross(e,[0,0,1]),i=[1+t,n[0],n[1],n[2]],s=Math.hypot(...i);return i.map(a=>a/s)}function nl(r,e,t,n){let i=[1,0,0],s=le.dot(i,r),a=1-s*s;if(a>.15){let o=le.norm(le.cross(r,i)),l=le.dot(e,o),c=le.sub(e,le.mul(o,l)),h=le.dot(c,i),u=le.dot(c,r);n.roll+=(h-s*u)/a*t,n.yaw+=(u-s*h)/a*t,n.pitch+=l*t}else n.roll+=e[0]*t,n.pitch+=e[1]*t,n.yaw+=e[2]*t}function Fu(r,e,t,n){return nl(En(r),e,t,n),Ht(r,e.map(i=>i*Math.PI/180),[0,0,0],t)}function ln(r,e){let[t,n,i,s]=r,[a,o,l,c]=e;return[t*a-n*o-i*l-s*c,t*o+n*a+i*c-s*l,t*l-n*c+i*a+s*o,t*c+n*l-i*o+s*a]}function Xr(r,e){let t=le.norm(r),n=le.norm(e),i=le.dot(t,n);if(i<-.9999){let l=Math.abs(t[0])<.9?[1,0,0]:[0,1,0],c=le.norm(le.cross(t,l));return[0,c[0],c[1],c[2]]}let s=le.cross(t,n),a=[1+i,s[0],s[1],s[2]],o=Math.hypot(...a);return a.map(l=>l/o)}function jn(r,e,t){let n=r[0]*e[0]+r[1]*e[1]+r[2]*e[2]+r[3]*e[3];if(n<0&&(e=e.map(l=>-l),n=-n),n>.9995){let l=r.map((h,u)=>h+(e[u]-h)*t),c=Math.hypot(...l);return l.map(h=>h/c)}let i=Math.acos(n),s=Math.sin(i),a=Math.sin((1-t)*i)/s,o=Math.sin(t*i)/s;return r.map((l,c)=>l*a+e[c]*o)}var Xn=32766,k={source:null,bias:[0,0,0],buf:[],n:0,arrivals:[],fs:25,q:[1,0,0,0],lastLandN:-1,calib:null,calibInfo:null,autoMount:null,pktSizes:{},unknown:0,rec:null,tap:null,collect:null,connectedAt:0,airSince:null},_i=()=>ie.mount||k.autoMount;function Bu(r){let e=_i();return e?[le.dot(e[0],r),le.dot(e[1],r),le.dot(e[2],r)]:r}var il=()=>k.arrivals.length/2;function qr(){Object.assign(k,{buf:[],n:0,arrivals:[],fs:25,fixedFs:null,q:[1,0,0,0],lastLandN:-1,pktSizes:{},lastImpact:-1e9,lastSpinT:-1e9,lowRun:0,lastTakeoff:-1e9,lastT:null,shifted:0,aLP:null,lastFast:-1e9,ground:!1,unknown:0,connectedAt:performance.now(),airSince:null})}function ng(r,e){let t=r.length,n=[];if(t<14||r[0]!==34||r[1]!==0)return n;let i=a=>{let o=[];for(let l=0;l<6;l++)o.push(e.getInt16(a+2*l,!0));return o},s=t%14===0;for(let a=0;s&&a<t;a+=14)(r[a]!==34||r[a+1]!==0)&&(s=!1);if(s){for(let a=0;a<t;a+=14)n.push(i(a+2));return n}if((t-2)%12===0&&t>14){let a=!0;for(let o=1;o<(t-2)/12;o++)r[2+12*o]===34&&r[3+12*o]===0&&(a=!1);if(a){for(let o=0;o<(t-2)/12;o++)n.push(i(2+12*o));return n}}return n.push(i(2)),n}function rl(r){let e=performance.now(),t=r.timeStamp,n=r.target.value,i=t>0&&t<=e+1&&e-t<1e3?t:e,s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);k.pktSizes[s.length]||De(W("log.packet",{n:s.length})),k.pktSizes[s.length]=(k.pktSizes[s.length]||0)+1;let a=ng(s,n);if(!a.length){k.unknown++;return}for(let o of a)sl([o[3],o[4],o[5],o[0],o[1],o[2]],i,!1)}function ig(r){let e=ie.accScale;if(Math.hypot(r[0],r[1],r[2])>.5*e)return!1;for(let n=1;n<6;n++){let i=[0,1,2,3,4,5].map(o=>r[(o+n)%6]),s=Math.hypot(i[0],i[1],i[2]),a=Math.hypot(i[3]-k.bias[0],i[4]-k.bias[1],i[5]-k.bias[2])/ie.gyroScale;if(s>.8*e&&s<1.25*e&&a<120)return!0}return!1}function sl(r,e,t){if(k.rec&&k.rec.rows.push([((e-k.rec.t0)/1e3).toFixed(4),...r]),!t&&ig(r)){k.shifted=(k.shifted||0)+1;return}for(k.n++,k.rateProbe&&k.rateProbe.push(e),k.calib&&k.calib.push(r.slice()),k.collect&&k.collect.push(r.slice()),k.arrivals.push(e);k.arrivals.length&&k.arrivals[0]<e-2e3;)k.arrivals.shift();k.fixedFs?k.fs=k.fixedFs:e-k.connectedAt>1500&&k.arrivals.length>5&&(k.fs=.7*k.fs+.3*il());let n=k.lastT;k.lastT=e;let i=k.fixedFs||n==null?1/Math.max(1,k.fs):Math.min(Math.max((e-n)/1e3,0),.12),s=r.slice(0,3).map(v=>v/ie.accScale),a=r.slice(3,6).map((v,f)=>(v-k.bias[f])/ie.gyroScale);k.tap&&k.tap(s,a,e,i),t||(s=Bu(s),a=Bu(a));let o=le.len(s);k.buf.push({n:k.n,raw:r,a:s,g:a,amag:o,t:e});let l=Math.min(4e3,Math.ceil(k.fs*7)+60);k.buf.length>l&&k.buf.splice(0,k.buf.length-l);let c=le.len(a);o>=2.6&&(k.lastImpact=e),c>200&&o<3.5&&(k.lastSpinT=e);let h=s[2]<.35||o<.5;h&&!k.lowRun&&(k.lowSince=e),k.lowRun=h?(k.lowRun||0)+1:0,!k.airSince&&e-(k.lastTakeoff||-1e9)>800&&e-(k.lastImpact||-1e9)<350&&e-(k.lastSpinT||-1e9)<250&&k.lowRun>=2&&e-k.lowSince>=30?(k.airSince=e,k.lastTakeoff=e,de.emit("takeoff")):k.airSince&&(o>=2&&s[2]>.5||e-k.airSince>1200)&&(k.airSince=null,k.aLP=[0,0,1]);let u=o<3.5?1-Math.exp(-i/.3):0;k.aLP=k.aLP?le.add(k.aLP,le.mul(le.sub(s,k.aLP),u)):s.slice(),c>120&&o<3.5&&(k.lastFast=e);let d=le.len(k.aLP),p=d>0?k.aLP[2]/d:0;k.ground=!k.airSince&&e-(k.lastFast||-1e9)>200&&d>.7&&d<1.4&&p>Math.cos(25*Math.PI/180);let m=k.airSince||e-(k.lastFast||-1e9)<300;if(k.q=Ht(k.q,a.map(v=>v*Math.PI/180),o<3.5?s:[0,0,0],i,k.ground||m?0:1),k.ground){let v=Xr([0,0,1],En(k.q));k.q=ln(k.q,jn([1,0,0,0],v,1-Math.exp(-i/.1)))}}function Hu(r){let e=s=>r.reduce((a,o)=>a+o[s],0)/r.length,t=s=>{let a=e(s);return Math.sqrt(r.reduce((o,l)=>o+(l[s]-a)**2,0)/r.length)},n=r.map(s=>Math.hypot(s[0],s[1],s[2])),i=n.reduce((s,a)=>s+a,0)/n.length;return{gyroSd:Math.max(t(3),t(4),t(5))/ie.gyroScale,magMean:i,magSd:Math.sqrt(n.reduce((s,a)=>s+(a-i)**2,0)/n.length),acc:[e(0),e(1),e(2)].map(s=>s/ie.accScale),bias:[e(3),e(4),e(5)]}}function Ki(r){k.calib=[],r||De(W("log.calibStart")),setTimeout(()=>rg(r),2e3)}function rg(r){let e=k.calib;if(k.calib=null,!e||e.length<5){r||De(W("log.calibFew"));return}let t=Hu(e);if(t.gyroSd>3||t.magSd>.05*t.magMean){r||De(W("log.calibMoved"));return}k.bias=t.bias,k.source!=="demo"&&(k.calibInfo={lsb:Math.round(t.magMean)},ie.mount||(k.autoMount=la(t.acc,null)),k.q=[1,0,0,0],De(W("log.calibDone",{lsb:Math.round(t.magMean),drift:t.bias.map(n=>(n/ie.gyroScale).toFixed(1)).join(" / ")})),de.emit("calib"))}function Gu(r){return new Promise(e=>{k.collect=[],setTimeout(()=>{let t=k.collect;k.collect=null,e(t&&t.length>=5?Hu(t):null)},r)})}var sg=2,ag=2.6,qn=3.5,Vu=.2,Wu=.85,ju=200,og=150,Xu=.35,Yu=["Ollie","Kickflip","Heelflip","BS pop shuvit","FS pop shuvit","BS 360 shuvit","FS 360 shuvit","Varial kickflip","Varial heelflip","Hardflip","Inward heelflip","360 flip","Laser flip","Double kickflip","Double heelflip","Impossible","Other"];function al(r){let e=r.slice(),t=r.length;for(let n=0;n<t;){if(Math.abs(r[n])<Xn){n++;continue}let i=n;for(;n<t&&Math.abs(r[n])>=Xn;)n++;let s=n-1,a=[];for(let x=i-3;x<i;x++)x>=0&&Math.abs(r[x])<Xn&&a.push(x);for(let x=s+1;x<=s+3;x++)x<t&&Math.abs(r[x])<Xn&&a.push(x);if(a.length<3)continue;let o=0,l=0,c=0,h=0,u=0,d=0,p=0,m=0;for(let x of a){let A=r[x];o++,l+=x,c+=x*x,h+=x**3,u+=x**4,d+=A,p+=x*A,m+=x*x*A}let v=[[u,h,c,m],[h,c,l,p],[c,l,o,d]];for(let x=0;x<3;x++){let A=x;for(let M=x+1;M<3;M++)Math.abs(v[M][x])>Math.abs(v[A][x])&&(A=M);[v[x],v[A]]=[v[A],v[x]];for(let M=0;M<3;M++)if(M!==x){let S=v[M][x]/v[x][x];for(let D=x;D<4;D++)v[M][D]-=S*v[x][D]}}let f=v[0][3]/v[0][0],_=v[1][3]/v[1][1],g=v[2][3]/v[2][2],y=Math.sign(r[i]);for(let x=i;x<=s;x++)e[x]=y*Math.min(Math.max(Math.abs(f*x*x+_*x+g),Xn),2.5*Xn)}return e}function ol(r,e){let{roll:t,yaw:n,pitch:i}=r;return ie.stance!=="goofy"&&!e&&(t=-t,n=-n),{roll:t,pitch:i,yaw:n}}function ll(r,e,t){let n=Math.round(r/360),i=Math.round(e/180),s=r-n*360,a=e-i*180,o=[];if(Math.abs(s)>50&&o.push(n===0?{k:"partial",d:Math.round(Math.abs(r))}:Math.abs(r)<Math.abs(n*360)?{k:"under",d:Math.round(Math.abs(s))}:{k:"over",d:Math.round(Math.abs(s))}),Math.abs(a)>40&&o.push({k:"yaw"}),Math.abs(t)>270)return{name:"Impossible",flags:o,conf:.6};let l=Math.abs(n),c=Math.abs(i),h=n>0,u=i>0,d;return!l&&!c?d="Ollie":!c&&l<=3?d=["","","Double ","Triple "][l]+(h?"kickflip":"heelflip"):!l&&c===1?d=(u?"BS":"FS")+" pop shuvit":!l&&c===2?d=(u?"BS":"FS")+" 360 shuvit":l===1&&c===1?d=h?u?"Varial kickflip":"Hardflip":u?"Inward heelflip":"Varial heelflip":l===1&&c===2?d=h?u?"360 flip":"FS 360 kickflip":u?"BS 360 heelflip":"Laser flip":d="Other",{name:d[0].toUpperCase()+d.slice(1),flags:o,conf:1-Math.min(1,(Math.abs(s)/180+Math.abs(a)/90)/2)}}function qu(r,e,t,n,i){let s=r.length,a=n,o=n;for(;a>0&&t[n]-t[a-1]<=.4;)a--;for(;o>a&&t[n]-t[o-1]<.12;)o--;let l=[0,0,0];for(let u=a;u<o;u++)l=le.add(l,e[u]);let c=zu(o>a&&le.len(l)>.3*(o-a)?l:[0,0,1]);for(let u=o;u<n;u++)c=Ht(c,r[u].map(d=>d*Math.PI/180),e[u],t[u+1]-t[u],2);let h={roll:0,yaw:0,pitch:0};for(let u=n;u<i&&u+1<s;u++){let d=le.mul(le.add(r[u],r[u+1]),.5);c=Fu(c,d,t[u+1]-t[u],h)}return h}var ht={};function xi(){Object.assign(ht,{sx:0,sy:0,w:0,n:0,c2:0,s2:0,wf:0})}xi();function lg(r,e,t,n,i){let s=[0,0,0],a=n+1;for(;a<i&&e[a]-e[n]<=.05;a++)t[a]<qn&&(s=le.add(s,r[a]));if(!le.len(s)){for(;a<i&&e[a]-e[n]<=.1;a++)if(t[a]<qn){s=r[a];break}}let o=Math.hypot(s[0],s[1]),l=o>=150&&Math.abs(s[2])<o?{x:-s[1]/o,y:s[0]/o,w:Math.min(o,1e3)}:null,c=0,h=0,u=0;for(let d=n+1;d<i;d++){let p=r[d],m=Math.hypot(p[0],p[1]);if(t[d]>=qn||m<600||Math.abs(p[2])>.5*m)continue;let v=2*Math.atan2(p[1],p[0]);c+=m*Math.cos(v),h+=m*Math.sin(v),u+=m}return{pop:l,flip:u?{c2:c,s2:h,w:u}:null}}function cg(r){if(k.source!=="ble")return!1;r.pop&&(ht.sx+=r.pop.x*r.pop.w,ht.sy+=r.pop.y*r.pop.w,ht.w+=r.pop.w,ht.n++),r.flip&&(ht.c2+=r.flip.c2,ht.s2+=r.flip.s2,ht.wf+=r.flip.w);let e=Math.hypot(ht.sx,ht.sy),t=Math.hypot(ht.c2,ht.s2);if(!ht.n||e<.75*ht.w)return!1;let n=Math.atan2(ht.sy,ht.sx),i=30;if(ht.wf>=3e3&&t>=.85*ht.wf){let d=Math.atan2(ht.s2,ht.c2)/2;if(Math.cos(d-n)<0&&(d+=Math.PI),ht.n<2&&Math.cos(d-n)<Math.cos(35*Math.PI/180))return!1;n=Math.atan2(Math.sin(d),Math.cos(d)),i=12}else if(ht.n<2)return!1;let s=n*180/Math.PI;if(Math.abs(s)<i)return!1;let a=_i();if(!a)return!1;let o=Math.cos(n),l=Math.sin(n),c=le.norm(le.add(le.mul(a[0],o),le.mul(a[1],l))),h=a[2],u=le.cross(h,c);return ie.mount?(ie.mount=[c,u,h],$e()):k.autoMount=[c,u,h],xi(),de.emit("mount-yaw",Math.round(s)),!0}function Ku(){let r=k.buf,e=r.length;if(e<20)return;let t=k.fs,n=k.source==="demo",i=n?r.map(_=>(_.n-r[0].n)/t):r.map(_=>(_.t-r[0].t)/1e3),s=r.map(_=>_.amag),a=r.map(_=>_.a[2]),o=[0,1,2].map(_=>al(r.map(g=>g.raw[3+_]))),l=r.map((_,g)=>[0,1,2].map(y=>(o[y][g]-k.bias[y])/ie.gyroScale)),c=n?null:_i(),h=_=>_?l.map(g=>[le.dot(_[0],g),le.dot(_[1],g),le.dot(_[2],g)]):l,u=h(c),d=l.map(le.len),p=_=>{let g=0,y=e;for(;g<y;){let x=g+y>>1;i[x]<_?g=x+1:y=x}return g},m=(_,g)=>{let y=[];for(let x=Math.max(0,_);x<Math.min(e,g);x++)s[x]<qn&&y.push(d[x]);return y},v=_=>_.length?_.slice().sort((g,y)=>g-y)[_.length>>1]:NaN,f=[];for(let _=1;_<e-1;_++)if(s[_]>=sg&&s[_]>=s[_-1]&&s[_]>s[_+1]){let g=f[f.length-1];f.length&&i[_]-i[g]<.06?s[_]>s[g]&&(f[f.length-1]=_):f.push(_)}for(let _=0;_<f.length;_++){let g=f[_];if(!(r[g].n<=k.lastLandN||s[g]<ag)&&Math.max(0,...m(g+1,p(i[g]+.2)))>=ju)for(let y=_+1;y<f.length;y++){let x=f[y];if(i[x]-i[g]<Vu)continue;if(i[x]-i[g]>Wu+.12)break;for(let U=y+1;U<f.length&&i[f[U]]-i[f[y]]<=.2;U++)a[f[U]]>a[x]&&(x=f[U]);let A=x;for(;A>g+1&&i[x]-i[A-1]<.12&&s[A-1]>=1.5;)A--;let M=i[A]-i[g];if(M<Vu)continue;if(M>Wu)break;if(i[e-1]<i[x]+.8)return;let S=p(i[x]+.35);if(m(x+1,S).length<3){S=x+1;for(let U=0;S<e&&U<4;S++)s[S]<qn&&U++}let D=m(x+1,S),N=0;for(let U=x+1;U<S;U++)a[U]>=Xu&&N++;let z=v(D),te=z<og||z<300&&N>=.6*(S-x-1);if(D.length<2||!te)continue;let L=v(s.slice(p(i[x]+.1),Math.max(p(i[x]+.6),S)));if(!(L>.7&&L<1.9))continue;let X=0,q=0;for(let U=g+1;U<A;U++)X++,(a[U]<Xu||s[U]<.5)&&q++;if(X<2||q<.6*X||!(Math.max(0,...m(g+1,A))>=ju))continue;let he=U=>U.map((b,oe)=>{if(s[oe]<qn||oe<=g)return b;let V=oe-1,j=oe+1;for(;V>g&&s[V]>=qn;)V--;for(;j<e-1&&s[j]>=qn;)j++;return le.mul(le.add(U[V],U[j]),.5)}),ye=r.map(U=>U.a),re=qu(he(u),ye,i,g,A);!n&&Math.abs(re.yaw)<60&&cg(lg(u,i,s,g,A))&&(c=_i(),u=h(c),re=qu(he(u),ye,i,g,A));let J=0;for(let U=g+1;U<=A;U++)J=Math.max(J,i[U]-i[U-1]);let se=[0,0,0];for(let U=g;U<A;U++)for(let b=0;b<3;b++)se[b]+=l[U][b]*(i[U+1]-i[U]);let[H,Q]=[p(i[x]+.1),Math.max(p(i[x]+.7),S)],me=0;for(let U=H;U<Q;U++)me+=a[U];let w=Q>H?me/(Q-H):1,T=Math.max(0,...m(p(i[x]+.3),p(i[x]+.9))),F=w>.6&&T<400,ee=F?"":w<-.5?"flipped":w<.6?"side":"unstable",I=0;for(let U=g;U<=x;U++)r[U].raw.slice(3).some(b=>Math.abs(b)>=Xn)&&I++;let G=ol(re,n),R=ll(G.roll,G.yaw,G.pitch);I&&R.flags.push({k:"clipped"}),J>.2&&(R.flags.push({k:"gap"}),R.conf*=.7);let P=p(i[g]-1),O=Math.min(e,p(i[x]+.9)+1),Y={...R,air:M,height:9.81*M*M/8*100,roll:G.roll,pitch:G.pitch,yaw:G.yaw,angS:se.map(U=>+U.toFixed(1)),landG:s[x],peakSpin:Math.max(...m(g+1,A)),landed:F,reason:ee,snip:{fs:+t.toFixed(1),pop:g-P,land:A-P,rows:r.slice(P,O).map(U=>U.raw),t:n?void 0:r.slice(P,O).map(U=>Math.round(U.t-r[P].t)),bias:k.bias.map(U=>+U.toFixed(1)),M:c&&c.map(U=>U.map(b=>+b.toFixed(4))),bf:n||void 0}};k.lastLandN=r[x].n,de.emit("trick",Y);break}}}var ca=()=>({id:Date.now(),start:Date.now(),tricks:[],gps:{max:0,sum:0,n:0,dist:0}}),ke=Wn.get("session",null);(!ke||!Array.isArray(ke.tricks))&&(ke=ca());ke.gps||(ke.gps={max:0,sum:0,n:0,dist:0});var vn=r=>r.label||r.name,Zt=r=>r.landedOverride!=null?r.landedOverride:r.landed,Yr=()=>ke.tricks.filter(r=>!r.deleted),Yn=null,cl=()=>!!Yn;function hl(r){if(r&&!Yn)Yn=ke,ke=ca();else if(!r&&Yn)ke=Yn,Yn=null;else return;de.emit("session")}function Zu(r){ke={...r,preloaded:!0},de.emit("session")}var Ju=()=>!!ke.preloaded;function Kr(){if(!(Yn||ke.preloaded)&&!Wn.set("session",ke)){for(let r of ke.tricks)if(r.snip&&(delete r.snip,Wn.set("session",ke)))return}}function $u(r){return Object.assign(r,{id:Date.now()+"-"+Math.round(Math.random()*1e5),time:Date.now()}),ke.tricks.push(r),Kr(),de.emit("session"),r}function Zr(r,e){let t=ke.tricks.find(n=>n.id===r);t&&(Object.assign(t,e),Kr(),de.emit("session"))}function ul(r=ke){let e=r.tricks.filter(s=>!s.deleted),t=e.filter(Zt),n=e.map(s=>s.height),i=r===ke?Date.now():e.length?e[e.length-1].time:r.start;return{attempts:e.length,landed:t.length,rate:e.length?Math.round(100*t.length/e.length):0,maxH:n.length?Math.max(...n):0,avgH:n.length?n.reduce((s,a)=>s+a,0)/n.length:0,maxAir:e.length?Math.max(...e.map(s=>s.air)):0,maxSpin:e.length?Math.max(...e.map(s=>s.peakSpin)):0,minutes:Math.max(0,Math.round((i-r.start)/6e4)),gpsMax:r.gps.max,gpsAvg:r.gps.n?r.gps.sum/r.gps.n:0,dist:r.gps.dist}}function dl(){return Wn.get("history",[])}function pl(){if(Yn){ke=ca(),de.emit("session");return}let r=ul(ke);if(r.attempts){let e=dl();e.unshift({start:ke.start,...r}),Wn.set("history",e.slice(0,50))}ke=ca(),Kr(),de.emit("session")}{let r=ke.tricks.length?ke.tricks[ke.tricks.length-1].time:ke.start;ke.tricks.length&&Date.now()-r>6*3600*1e3&&pl()}var ed="6e400001-b5a3-f393-e0a9-e50e24dcca9e",hg="6e400002-b5a3-f393-e0a9-e50e24dcca9e",ug="6e400003-b5a3-f393-e0a9-e50e24dcca9e",dg="6e400004-b5a3-f393-e0a9-e50e24dcca9e",td=[32,0,0,0,0,0,0],Se={device:null,rx:null,led:null,battery:null,want:!1,reconnecting:!1,ka:null,q:Promise.resolve(),search:null,knownFailed:!1};var nd=()=>!!navigator.bluetooth,Zi=()=>!!(navigator.bluetooth&&navigator.bluetooth.getDevices),id=()=>!!Se.search,rd=()=>Se.knownFailed,ml=()=>[32,16,0,208,7,ie.freq&255,ie.freq>>8&255,3];function pg(r){let e=Se.q.then(r);return Se.q=e.catch(()=>{}),e}function gl(r,e,t){let n;return Promise.race([r,new Promise((i,s)=>{n=setTimeout(()=>{t&&t(),s(new Error("timeout"))},e)})]).finally(()=>clearTimeout(n))}async function $r(r,e){if(!Se.rx)return;let t=new Uint8Array(r);return pg(async()=>{try{Se.rx.properties.writeWithoutResponse&&Se.rx.writeValueWithoutResponse?await Se.rx.writeValueWithoutResponse(t):Se.rx.writeValueWithResponse?await Se.rx.writeValueWithResponse(t):await Se.rx.writeValue(t)}catch(n){e||De(W("log.cmdFail",{e:n.message}))}})}async function sd(r){if(globalThis.TRIKI_ARTIFACT){de.emit("banner","artifact");return}if(!navigator.bluetooth){de.emit("banner","nobt");return}let e=!!Se.search;if(ha(),!r&&!e&&ie.device&&Zi()&&!Se.knownFailed){de.emit("stop-sources"),de.emit("conn","wait","searching",{name:ie.device.name});try{await ad(6e3);return}catch(t){Se.knownFailed=!0,De(W("log.knownFail",{e:t.message})),de.emit("conn","off","notFound",{name:ie.device.name}),de.emit("device");return}}ie.device&&!Zi()&&!r&&De(W("log.noKnown")),await fg()}async function fg(){de.emit("stop-sources"),de.emit("conn","wait","choosing");let r;try{r=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:[ed,"battery_service"]})}catch(e){k.source=null,de.emit("conn","off","idle"),e.name==="SecurityError"&&de.emit("banner","blocked"),De(e.name==="NotFoundError"?W("log.cancel"):W("log.error",{e:e.message}));return}try{await od(r,15e3)}catch(e){e.notTriki?(de.emit("conn","off","notTriki"),de.emit("banner","nottriki"),De(W("log.notTriki",{name:r.name||"?"}))):(de.emit("conn","off","failed"),De(W("log.error",{e:e.message})))}}async function mg(){let r=await navigator.bluetooth.getDevices(),e=ie.device;return r.find(t=>t.id===e.id)||r.find(t=>t.name&&t.name===e.name)||null}async function ad(r,e){let t=await mg();if(!t){let n=new Error("no permission");throw n.final=!0,n}if(De(W("log.known",{name:t.name||ie.device.name})),t.watchAdvertisements){let n=new AbortController,i=new Promise((a,o)=>{t.addEventListener("advertisementreceived",()=>a(),{once:!0}),e&&e.addEventListener("abort",()=>o(new Error("aborted")),{once:!0})}),s=!0;try{await t.watchAdvertisements({signal:n.signal})}catch{s=!1}if(s)try{await gl(i,r)}finally{n.abort()}}if(e&&e.aborted)throw new Error("aborted");await od(t,r)}async function od(r,e){Se.device&&Se.device!==r&&Se.device.removeEventListener("gattserverdisconnected",fl),Se.device=r,r.removeEventListener("gattserverdisconnected",fl),r.addEventListener("gattserverdisconnected",fl),de.emit("stop-sources"),k.source="ble",qr();try{await gl(ld(),e,()=>{try{r.gatt.disconnect()}catch{}})}catch(n){try{r.gatt.disconnect()}catch{}throw k.source=null,n}let t=r.name||ie.device&&ie.device.name||"Triki";(!ie.device||ie.device.id!==r.id||ie.device.name!==t)&&(ie.device={id:r.id,name:t},$e(),De(W("log.saved",{name:t}))),Se.knownFailed=!1,de.emit("device"),de.emit("banner",null),Se.want=!0,Ki(!0),de.emit("source-started")}async function ld(){let r=Se.device;de.emit("conn","wait","connecting");let e=await r.gatt.connect(),t;try{t=await e.getPrimaryService(ed)}catch{let i=new Error("not Triki");throw i.notTriki=!0,i}let n=await t.getCharacteristic(ug);n.removeEventListener("characteristicvaluechanged",rl),n.addEventListener("characteristicvaluechanged",rl),await n.startNotifications(),Se.rx=await t.getCharacteristic(hg);try{Se.led=await t.getCharacteristic(dg)}catch{Se.led=null}try{let i=await e.getPrimaryService("battery_service");Se.battery=(await(await i.getCharacteristic("battery_level")).readValue()).getUint8(0)}catch{Se.battery=null}k.connectedAt=performance.now(),k.arrivals=[],await $r(ml()),de.emit("conn","on","device",{name:r.name||"Triki",battery:Se.battery}),De(W("log.connected",{name:r.name||"Triki"})),clearInterval(Se.ka),Se.ka=setInterval(()=>{ie.keepalive&&r.gatt.connected&&$r(ml(),!0)},1e3)}async function cd(){if(globalThis.TRIKI_ARTIFACT||!ie.device||!ie.autoConnect||!Zi()||Se.search||k.source)return;let r=new AbortController;Se.search=r,de.emit("conn","wait","searching",{name:ie.device.name}),de.emit("device");let e=!1;for(let n=0;n<6&&!r.signal.aborted&&!k.source;n++)try{await ad(1e4,r.signal),e=!0;break}catch(i){if(r.signal.aborted)break;if(i.final){Se.knownFailed=!0,De(W("log.knownFail",{e:i.message}));break}await qi(1e3)}let t=Se.search===r;t&&(Se.search=null),t&&!e&&!k.source&&de.emit("conn","off","idle"),de.emit("device")}function ha(){Se.search&&(Se.search.abort(),Se.search=null,de.emit("device"))}function fl(){clearInterval(Se.ka),k.source==="ble"&&(De(W("log.disconnected")),Se.want&&ie.autoRe?gg():(k.source=null,de.emit("conn","off","disconnected")))}async function gg(){if(!Se.reconnecting){for(Se.reconnecting=!0;Se.want&&Se.device&&!Se.device.gatt.connected;){de.emit("conn","wait","reconnecting");try{await gl(ld(),12e3);break}catch{await qi(1e3)}}Se.reconnecting=!1}}async function Jr(){k.source==="ble"&&(await $r(td),await qi(150),await $r(ml()),k.arrivals=[],k.connectedAt=performance.now())}var Qu=[104,52,20,10,5],hd=()=>!!Se.testing;async function ud(r){if(k.source!=="ble"||Se.testing)return null;Se.testing=!0;let e=ie.freq,t=[];try{for(let[o,l]of Qu.entries()){r&&r(o,Qu.length),ie.freq=l,await Jr(),await qi(700),k.rateProbe=[],await qi(2500);let c=k.rateProbe;k.rateProbe=null;let h=0,u=0;for(let p=1;p<c.length;p++){let m=(c[p]-c[p-1])/1e3;m>.2&&h++,u=Math.max(u,m)}let d={v:l,hz:c.length/2.5,holes:c.length>1?h/(c.length-1):1,gap:c.length>1?u:2.5};if(t.push(d),De(W("log.rateStep",{v:l,hz:d.hz.toFixed(1),holes:Math.round(d.holes*100),gap:d.gap.toFixed(2)})),!Se.device||!Se.device.gatt.connected)throw new Error("disconnected")}let n=t.filter(o=>o.gap<.4&&o.holes<.05),i=n.length?n:t,s=Math.max(...i.map(o=>o.hz)),a=i.filter(o=>o.hz>=.9*s).sort((o,l)=>l.v-o.v)[0];return ie.freq=a.v,$e(),await Jr(),De(W("log.rateBest",{v:a.v,hz:a.hz.toFixed(0)})),{res:t,best:a,before:t.find(o=>o.v===e)||null}}catch(n){ie.freq=e,$e();try{await Jr()}catch{}return De(W("rate.failed",{e:n.message})),{error:n.message}}finally{Se.testing=!1,k.rateProbe=null}}async function vl(){Se.want=!1,ha(),clearInterval(Se.ka),k.source==="ble"&&Se.device&&Se.device.gatt.connected&&(await $r(td),k.source=null,Se.device.gatt.disconnect()),k.source=null,de.emit("conn","off","idle")}async function dd(){let r=ie.device;if(r){k.source==="ble"&&await vl(),ie.device=null,$e(),Se.knownFailed=!1;try{if(Zi()){let t=(await navigator.bluetooth.getDevices()).find(n=>n.id===r.id);t&&t.forget&&await t.forget()}}catch{}De(W("log.forgot")),de.emit("device"),de.emit("conn","off","idle")}}var Qr=Math.PI/180,md=25,pd=12,vg=22,ua=70,yg=.18,_g=.45,xg=3,bg=.5,Mg=100,Sg=.8,Tg=35,_l={Ollie:[0,0,0],Kickflip:[360,0,0],Heelflip:[-360,0,0],"BS pop shuvit":[0,180,0],"FS pop shuvit":[0,-180,0],"BS 360 shuvit":[0,360,0],"FS 360 shuvit":[0,-360,0],"Varial kickflip":[360,180,0],Hardflip:[360,-180,0],"Inward heelflip":[-360,180,0],"Varial heelflip":[-360,-180,0],"360 flip":[360,360,0],"FS 360 kickflip":[360,-360,0],"BS 360 heelflip":[-360,360,0],"Laser flip":[-360,-360,0],"Double kickflip":[720,0,0],"Double heelflip":[-720,0,0],"Triple kickflip":[1080,0,0],"Triple heelflip":[-1080,0,0],Impossible:[0,0,360]},wg={Ollie:100,Kickflip:300,Heelflip:300,"BS pop shuvit":200,"FS pop shuvit":200,"BS 360 shuvit":400,"FS 360 shuvit":400,"Varial kickflip":500,"Varial heelflip":500,Hardflip:550,"Inward heelflip":550,"360 flip":800,"FS 360 kickflip":800,"BS 360 heelflip":800,"Laser flip":900,"Double kickflip":600,"Double heelflip":600,"Triple kickflip":900,"Triple heelflip":900,Impossible:700,Other:50},Eg=[["Ollie","Kickflip","Heelflip","BS pop shuvit","FS pop shuvit"],["Varial kickflip","Varial heelflip","Hardflip","Inward heelflip","BS 360 shuvit","FS 360 shuvit"],["360 flip","Laser flip","Impossible","Double kickflip"]],gd="SKATE",Z={on:!1,phase:"off",q:null,up:[0,0,1],u0:null,tilt:0,spin:0,e1:null,e2:null,hist:[],lastFlat:0,popPeak:0,levelBuf:[],stillFor:0,coolFor:0,air:null,msg:null,play:vd()};function vd(){return{mode:ie.gameMode==="skate"?"skate":"free",score:0,attempts:0,landed:0,streak:0,comboNames:[],lastLand:0,bestCombo:0,list:[],target:null,letters:0,hits:0,over:!1}}var Kn=()=>de.emit("game"),Ag=(r,e)=>Math.acos(Math.max(-1,Math.min(1,le.dot(le.norm(r),le.norm(e)))))/Qr,Rg=([r,e,t,n])=>[2*(e*n-r*t),2*(r*e+t*n),r*r-e*e-t*t+n*n];function Cg(r){let e=le.norm(r),t=e[2];if(t<-.9999)return[0,1,0,0];let n=le.cross(e,[0,0,1]),i=[1+t,n[0],n[1],n[2]],s=Math.hypot(...i);return i.map(a=>a/s)}function yd(){Z.on=!0,k.tap=wd,da(),es()}function _d(){Z.on=!1,Z.phase="off",Z.air=null,k.tap===wd&&(k.tap=null),Kn()}function es(){Z.on&&(Z.phase="level",Z.levelBuf=[],Z.air=null,Z.msg=null,Kn())}function da(){Z.play=vd(),Z.play.mode==="skate"&&Ed(),Z.phase==="over"&&(Z.phase=Z.u0?"ready":"level"),Z.msg=null,Kn()}function xd(r){ie.gameMode=r,$e(),da()}function fd(r){Z.u0=le.norm(r);let e=Z.noseRef&&Math.abs(le.dot(Z.noseRef,Z.u0))<.9?Z.noseRef:null;e||(e=Math.abs(Z.u0[0])<.9?[1,0,0]:[0,1,0]),Z.e1=le.norm(le.sub(e,le.mul(Z.u0,le.dot(e,Z.u0)))),Z.e2=le.cross(Z.u0,Z.e1)}function bd(){if(!Z.u0)return null;let r=1/Math.sin(45*Qr);return[le.dot(Z.up,Z.e1)*r,le.dot(Z.up,Z.e2)*r]}var Md=()=>Math.sin(md*Qr)/Math.sin(45*Qr);function Sd(){return Z.air?Td(Z.air):null}function Td(r){let e=le.dot(r.ang,r.x),t=le.dot(r.ang,r.z),n=le.dot(r.ang,r.y);return ie.stance==="goofy"&&(e=-e,t=-t),{roll:e,yaw:t,pitch:n}}function wd(r,e,t,n){if(!Z.on)return;let i=n??1/Math.max(5,k.fs);Z.clock=(Z.clock||0)+i;let s=Z.clock*1e3;e=e.map(l=>Math.abs(l)>1990?l*1.25:l),Z.spin=le.len(e),Z.q||(Z.q=Cg(le.len(r)>.3?r:[0,0,1])),Z.q=Ht(Z.q,e.map(l=>l*Qr),Z.spin>150?[0,0,0]:r,i,1),Z.up=Rg(Z.q);let a=le.len(r),o=Z.spin<ua&&a>.8&&a<1.2;for(o&&Z.spin<40&&(Z.q=Ht(Z.q,[0,0,0],r,i,6)),Z.hist.push({t:s,w:e,dt:i});Z.hist.length&&Z.hist[0].t<s-1200;)Z.hist.shift();if(Z.phase==="level"){if(Z.spin<Tg?Z.levelBuf.push(Z.up.slice()):Z.levelBuf=[],Z.levelBuf.length>=Math.round(Sg*k.fs)){let l=[0,0,0];for(let c of Z.levelBuf)for(let h=0;h<3;h++)l[h]+=c[h];fd(l),Z.phase=Z.play.over?"over":"ready",Z.lastFlat=s,Z.popPeak=0,Kn()}return}if(Z.u0){if(Z.tilt=Ag(o?r:Z.up,Z.u0),Z.phase==="cool"){Z.tilt<pd+6&&Z.spin<ua?Z.coolFor+=i:Z.coolFor=0,Z.coolFor>.2&&(Z.phase=Z.play.over?"over":"ready",Z.lastFlat=s,Z.popPeak=0,Kn());return}if(Z.phase==="ready"||Z.phase==="over"){Z.tilt<pd&&(Z.lastFlat=s,Z.popPeak=0),Z.popPeak=Math.max(Z.popPeak,Z.spin),Z.spin<25&&Z.tilt<30?(Z.stillFor+=i,Z.stillFor>1.5&&fd(le.sub(le.mul(Z.u0,.97),le.mul(le.norm(Z.up),-.03)))):Z.stillFor=0,Z.phase==="ready"&&Z.tilt>md&&(s-Z.lastFlat)/1e3<bg&&Z.popPeak>Mg&&Lg(s);return}if(Z.phase==="air"){let l=Z.air;for(let c=0;c<3;c++)l.ang[c]+=e[c]*i;l.dur+=i,Z.tilt<vg&&Z.spin<ua?l.still+=i:l.still=0,Z.tilt>140&&Z.spin<ua?l.upside+=i:l.upside=0,l.still>=yg&&l.dur>.25?yl(!0,""):l.upside>=_g?yl(!1,"flipped"):l.dur>xg&&yl(!1,"timeout")}}}function Lg(r){let e=Z.u0,t=Z.up,i=le.norm(le.sub(t,le.mul(e,le.dot(t,e)))),s=e,a=le.cross(s,i),o=[0,0,0],l=0;for(let c of Z.hist)if(c.t>=Z.lastFlat){for(let h=0;h<3;h++)o[h]+=c.w[h]*c.dt;l+=c.dt}Z.air={x:i,y:a,z:s,ang:o,dur:l,still:0,upside:0,t0:Z.lastFlat},Z.noseRef=i,Z.e1=i,Z.e2=a,Z.phase="air",Z.msg=null,Kn()}function yl(r,e){let t=Z.air,n=Z.play;if(Z.air=null,Z.phase="cool",Z.coolFor=0,n.over){Kn();return}let i=Td(t),s=(h,u,d)=>!r&&Math.abs(h)>d&&Math.abs(h)<u?Math.sign(h)*u:h,a=ll(s(i.roll,360,120),s(i.yaw,180,90),s(i.pitch,360,150)),o=a.name,l=a.flags.some(h=>h.k==="under"||h.k==="over"||h.k==="yaw"),c={id:Date.now()+"-"+Math.round(Math.random()*1e4),time:Date.now(),name:o,ok:r,reason:e,sloppy:l,roll:Math.round(i.roll),yaw:Math.round(i.yaw),pitch:Math.round(i.pitch),dur:+t.dur.toFixed(2),points:0,mult:1};if(n.attempts++,r){n.landed++;let h=Date.now();h-n.lastLand<6e3&&n.streak>0?n.streak++:(n.streak=1,n.comboNames=[]),n.lastLand=h;let u=n.comboNames.includes(o);n.comboNames.push(o),c.mult=Math.min(4,1+.5*(n.streak-1)),c.repeat=u,c.points=Math.round((wg[o]||50)*c.mult*(l?.7:1)*(u?.5:1)),n.bestCombo=Math.max(n.bestCombo,n.streak)}else n.streak=0,n.comboNames=[];n.mode==="skate"?(c.target=n.target,c.hit=r&&o===n.target,c.hit?(n.hits++,n.score+=c.points,Ed()):(c.points=0,n.letters++,c.letter=gd[n.letters-1],n.letters>=5&&(n.over=!0))):n.score+=c.points,n.list.unshift(c),n.list.length=Math.min(n.list.length,60),n.score>(ie.gameBest||0)&&(ie.gameBest=n.score,$e()),n.bestCombo>(ie.gameBestCombo||0)&&(ie.gameBestCombo=n.bestCombo,$e()),Z.msg=r?null:e,n.over&&(Z.phase="cool"),de.emit("game-trick",c),Kn()}function Ed(){let r=Z.play,e=r.hits<3?1:r.hits<8?2:3,t=Eg.slice(0,e).flat().filter(n=>n!==r.target);r.target=t[Math.floor(Math.random()*t.length)]}var Ad=[{name:"Ollie",roll:0,yaw:0,air:.42},{name:"Kickflip",roll:360,yaw:0,air:.46},{name:"Heelflip",roll:-360,yaw:0,air:.45},{name:"BS pop shuvit",roll:0,yaw:180,air:.4},{name:"FS pop shuvit",roll:0,yaw:-180,air:.41},{name:"Varial kickflip",roll:360,yaw:180,air:.48},{name:"Hardflip",roll:360,yaw:-180,air:.48},{name:"Kickflip",roll:360,yaw:0,air:.44,fail:!0},{name:"Inward heelflip",roll:-360,yaw:180,air:.47},{name:"Varial heelflip",roll:-360,yaw:-180,air:.47},{name:"BS 360 shuvit",roll:0,yaw:360,air:.5},{name:"360 flip",roll:360,yaw:360,air:.52},{name:"Laser flip",roll:-360,yaw:-360,air:.53}],pa=25,Rd=3.5,xl=3,fa=null,Ji=null,bi=(r,e,t,n)=>r>=e&&r<=e+t?n*Math.PI/(2*t)*Math.sin(Math.PI*(r-e)/t):0,Mi=(r,e,t,n)=>r<=e?0:r>=e+t?n:n*(1-Math.cos(Math.PI*(r-e)/t))/2,Cd=(r,e,t)=>t*Math.exp(-.5*(r/e)*(r/e)),ma=(r,e)=>[...r.map(t=>t*2048),...e.map(t=>t*16.4)].map(t=>Math.round(t)),Tl=r=>r.map(e=>Math.max(-32768,Math.min(32767,e))),bl=(r,e)=>{let t=e*Math.PI/360,n=Math.sin(t);return[Math.cos(t),r[0]*n,r[1]*n,r[2]*n]};function Ml(r,e){let t=r.air,n=e-t,i=Mi(e,-.02,.12,-32)+Mi(e,.12,.16,32)+(r.pitch?Mi(e,.06,.7*t,r.pitch):0),s=r.roll?Mi(e,.06,.7*t,r.roll):0,a=r.yaw?Mi(e,.07,.7*t,r.yaw):0;return r.fail&&(s+=Mi(n,.22,.2,180)+Mi(n,1.6,.4,180)),ln(ln(bl([0,0,1],a),bl([0,1,0],i)),bl([1,0,0],s))}function Id(r,e){let t=r.air,n=e-t,i=.0025,s=Ml(r,e-i),a=Ml(r,e+i),o=ln([s[0],-s[1],-s[2],-s[3]],a),l=2*Math.acos(Math.max(-1,Math.min(1,Math.abs(o[0])))),c=Math.hypot(o[1],o[2],o[3])||1,h=o[0]<0?-1:1,u=[o[1],o[2],o[3]].map(p=>h*p/c*l/(2*i)*180/Math.PI),d=En(Ml(r,e));return e>.015&&n<-.005&&(d=[0,0,0]),d[2]+=Cd(e,.015,4.2)+Cd(n,.015,4.8),{a:d,g:u}}function Pg(r){if(r<xl)return Tl(ma([0,0,1],[0,0,0]));let e=Math.floor((r-xl)/Rd),t=xl+e*Rd+.8,{a:n,g:i}=Id(Ad[e%Ad.length],r-t);return Tl(ma(n,i))}function Nd(r,e){let t=_l[r]||[0,0,0],n=50,i=Math.min(.62,.42+.03*(Math.abs(t[0])/360+Math.abs(t[1])/180+Math.abs(t[2])/360)),s={roll:t[0],yaw:t[1],pitch:t[2],air:i,fail:e},a=-.35,o=i+(e?2.15:.6),l=[];for(let c=0;a+c/n<=o;c++){let{a:h,g:u}=Id(s,a+c/n);l.push(ma(h,u))}return{fs:n,pop:Math.round(-a*n),land:Math.round((i-a)*n),rows:l,bias:[0,0,0],M:null,bf:!0,synth:!0}}var Ld=["Ollie","Kickflip","Heelflip","BS pop shuvit","FS pop shuvit","Varial kickflip","BAIL","Hardflip","360 flip","Inward heelflip","BS 360 shuvit","Laser flip","Impossible"],Pd=3.4,Sl=2.2,An=null;function Ig(r){let e=Z.play;if(e.mode==="skate"&&e.target&&!e.over)return r%4===3?{name:e.target==="Kickflip"?"Heelflip":"Kickflip"}:{name:e.target};let t=Ld[r%Ld.length];return t==="BAIL"?{name:"Kickflip",bail:!0}:{name:t}}function Ng(){An={q:[1,0,0,0],i:-1,ges:null}}function Dg(r){let e=1/pa,t=[0,0,0];if(r>=Sl){let l=Math.floor((r-Sl)/Pd),c=r-Sl-l*Pd;An.i!==l&&(An.i=l,An.ges=Ig(l));let h=An.ges,u=_l[h.name]||[0,0,0];if(t[1]+=bi(c,.5,.14,-32)+bi(c,.66,.16,32),h.bail)t[0]+=bi(c,.86,.3,180),t[0]+=bi(c,2.3,.5,180);else{let d=Math.abs(u[0])>400?.62:.34,p=Math.abs(u[1])>200?.42:.32,m=u[0]?.86+d-.04:.86;t[0]+=bi(c,.86,d,u[0]),t[2]+=bi(c,m,p,u[1]),t[1]+=bi(c,.86,.4,u[2])}c<e&&(An.q=[1,0,0,0])}An.q=Ht(An.q,t.map(l=>l*Math.PI/180),[0,0,0],e);let[n,i,s,a]=An.q,o=[2*(i*a-n*s),2*(n*i+s*a),n*n-i*i-s*s+a*a];return Tl(ma(le.norm(o),t))}function Dd(r="tracker"){de.emit("stop-sources"),Ji=r,k.source="demo",qr(),k.fixedFs=pa,Ji==="tracker"&&hl(!0),Ng();let e=Ji==="game"?Dg:Pg,t=performance.now(),n=0;fa=setInterval(()=>{let i=performance.now(),s=(i-t)/1e3*pa;for(;n<s;)sl(e(n/pa),i,!0),n++},20),de.emit("conn","on","demo"),De(W(Ji==="game"?"log.gameDemo":"log.demo")),Ji==="tracker"&&Ki(!0),de.emit("source-started")}function ts(){fa&&(clearInterval(fa),fa=null,hl(!1),Ji=null,k.source==="demo"&&(k.source=null,qr(),de.emit("conn","off","idle")),de.emit("demo-stopped"))}var Si="",Ud="",wl=null,kd=0,Zn=null;function Od(){let r=Z.play,e=Pe(r.score);e!==wl&&(B("hudScore").textContent=e,wl=e);let t=B("hudCombo"),n=Math.min(4,1+.5*(r.streak-1));t.hidden=!(r.streak>1&&Date.now()-r.lastLand<6e3),t.hidden||(t.textContent="\xD7"+Pe(n,n%1?1:0)),B("hudSkate").hidden=r.mode!=="skate",r.mode==="skate"&&(B("hudTarget").textContent=r.over?"\u2014":Kt(r.target||""),[...B("hudLetters").children].forEach((i,s)=>i.classList.toggle("got",s<r.letters))),El()}function Ug(){if(!k.source)return{text:W("hud.connect"),cls:""};if(Z.play.over)return{text:W("hud.over",{n:Z.play.hits}),cls:"bad"};if(Zn&&Date.now()<Zn.until)return Zn;switch(Z.phase){case"level":return{text:W("hud.level"),cls:""};case"air":{let r=Sd();return{text:W("hud.air",{r:Pe(r?r.roll:0),y:Pe(r?r.yaw:0)}),cls:"inair"}}case"cool":return{text:W("hud.reset"),cls:""};case"ready":return{text:W("hud.ready"),cls:""};default:return{text:"",cls:""}}}function El(){let r=Ug(),e=r.text+"|"+r.cls;if(e===Si)return;Si=e;let t=B("hudStatus");t.textContent=r.text,t.className="hud-status"+(r.cls?" "+r.cls:"")}function zd(){if(ie.mode!=="game")return;let r=B("hudRing"),e=bd(),t=37,n=Math.round(Md()*t*2);r.dataset.size!==String(n)&&(r.style.width=r.style.height=n+"px",r.dataset.size=n),r.classList.toggle("pop",Z.phase==="air"||Date.now()<kd);let i=0,s=0;if(e&&k.source){let o=Math.hypot(e[0],e[1]),l=o>1?1/o:1;i=Math.round(e[0]*l*t),s=Math.round(-e[1]*l*t)}let a=i+","+s;a!==Ud&&(B("hudBubble").style.transform=`translate(${i}px, ${s}px)`,Ud=a),Z.phase==="air"||Zn?El():Si||El()}function kg(){let r=Z.play;for(let t of B("gameModes").children)t.classList.toggle("on",t.dataset.gm===r.mode);B("gameModeNote").textContent=W(r.mode==="skate"?"game.skateNote":"game.freeNote");let e=(t,n)=>`<dt>${W(t)}</dt><dd>${n}</dd>`;B("gameStats").innerHTML=e("game.score",Pe(r.score))+e("game.best",Pe(ie.gameBest||0))+e("game.landed",r.landed)+e("game.attempts",r.attempts)+e("game.bestCombo",Math.max(r.bestCombo,0)),B("gameListEmpty").hidden=r.list.length>0,B("gameList").innerHTML=r.list.map(t=>{let n=[];return t.target&&!t.hit&&n.push(W("game.miss")+(t.letter?" \xB7 "+W("game.letter",{l:t.letter}):"")),t.target&&t.hit&&n.push(W("game.hit")),!t.ok&&t.reason==="timeout"&&n.push(W("hud.timeout")),t.sloppy&&t.ok&&n.push(W("game.sloppy")),t.repeat&&n.push(W("game.repeat")),t.mult>1&&t.points&&n.push("\xD7"+Pe(t.mult,t.mult%1?1:0)),`<li><div class="row grow"><span class="t">${jr(t.time)}</span><span class="n">${rt(Kt(t.name))}${n.length?`<span class="tg">${rt(n.join(" \xB7 "))}</span>`:""}</span><span class="v">${t.points?"+"+Pe(t.points):"\u2014"}</span><span class="r ${t.ok?"":"fail"}">${t.ok?"\u2713":"\u2715"}</span></div></li>`}).join("")}function ga(){Od(),kg()}function Fd(r){kd=Date.now()+500,r.ok?Zn=null:Zn={text:W(r.reason==="timeout"?"hud.timeout":"hud.flipped"),cls:"bad",until:Date.now()+1800};let e=B("hudCombo");e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump"),Si=""}function Bd(){B("gameModes").addEventListener("click",r=>{let e=r.target.closest("[data-gm]");e&&xd(e.dataset.gm)}),B("bLevel").onclick=()=>{Zn=null,es()},B("bGameRestart").onclick=()=>{Zn=null,da()},B("howBox").open=!(ie.gameBest>0),de.on("game",()=>{Si="",ga()}),de.on("lang",()=>{Si="",wl=null,ga()}),de.on("conn",()=>{Si="",Od()})}var ns=null,Ti=null,Rn=null;function Al(r){if(ns!=null&&(navigator.geolocation.clearWatch(ns),ns=null),Rn=null,Ti=null,de.emit("speed",null),!!r){if(!navigator.geolocation){De(W("log.gpsNo"));return}ns=navigator.geolocation.watchPosition(zg,e=>De(W("log.gps",{e:e.message})),{enableHighAccuracy:!0,maximumAge:0,timeout:15e3})}}function zg(r){let e=r.coords,t=r.timestamp,n=e.speed!=null&&e.speed>=0?e.speed*3.6:null;if(Ti&&e.accuracy<25){let s=Math.PI/180,a=(t-Ti.t)/1e3,o=2*6371e3*Math.asin(Math.sqrt(Math.sin((e.latitude-Ti.lat)*s/2)**2+Math.cos(Ti.lat*s)*Math.cos(e.latitude*s)*Math.sin((e.longitude-Ti.lon)*s/2)**2));n==null&&a>.8&&(n=o/a*3.6),n!=null&&n>1.5&&n<60&&(ke.gps.dist+=o)}Ti={lat:e.latitude,lon:e.longitude,t},!(n==null||e.accuracy>30)&&(Rn=Rn==null?n:.6*Rn+.4*n,Rn<60&&(ke.gps.max=Math.max(ke.gps.max,Rn),Rn>2&&(ke.gps.sum+=Rn,ke.gps.n++)),de.emit("speed",Rn))}setInterval(()=>{ns!=null&&(Kr(),de.emit("session"))},5e3);Dr();Dr();Dr();function $f(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Os(r,e){let t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function ks(r,e,t,n,i){for(let s of[0,-i,i])for(let a of[0,-i,i]){let o=e+s,l=t+a;o<-n||l<-n||o>i+n||l>i+n||(r.beginPath(),r.arc(o,l,n,0,Math.PI*2),r.fill())}}function Qf(r=8){let t=$f(7),[n,i]=Os(1024,1024),[s,a]=Os(1024,1024);i.fillStyle="#3f4041",i.fillRect(0,0,1024,1024),a.fillStyle="#7f7f7f",a.fillRect(0,0,1024,1024);for(let h=0;h<70;h++){let u=64+Math.floor(t()*22);i.fillStyle=`rgba(${u},${u},${u+1},0.12)`,ks(i,t()*1024,t()*1024,40+t()*160,1024)}for(let h=0;h<7e4;h++){let u=t()*1024,d=t()*1024,p=.4+t()*t()*1.7,m=38+Math.floor(t()*t()*90);i.fillStyle=`rgb(${m},${m},${m})`,ks(i,u,d,p,1024);let v=110+Math.floor((m-35)*1.1);a.fillStyle=`rgb(${v},${v},${v})`,ks(a,u,d,p,1024)}for(let h=0;h<700;h++){let u=t()*1024,d=t()*1024,p=.8+t()*1.2,m=118+Math.floor(t()*34);i.fillStyle=`rgb(${m},${m},${m-4})`,ks(i,u,d,p,1024),a.fillStyle="#e6e6e6",ks(a,u,d,p,1024)}let o=(h,u,d,p,m)=>{i.strokeStyle="rgba(22,22,22,0.85)",a.strokeStyle="#141414";for(let _ of[i,a])_.lineWidth=m,_.lineCap="round",_.beginPath(),_.moveTo(h,u);let v=h,f=u;for(let _=0;_<p&&(d+=(t()-.5)*.9,v+=Math.cos(d)*6,f+=Math.sin(d)*6,!(v<30||f<30||v>994||f>994));_++)i.lineTo(v,f),a.lineTo(v,f),t()<.05&&m>.8&&(i.stroke(),a.stroke(),o(v,f,d+(t()>.5?1:-1)*(.6+t()),p/3,m*.6),i.beginPath(),a.beginPath(),i.moveTo(v,f),a.moveTo(v,f));i.stroke(),a.stroke()};o(260,300,.4,90,1.8),o(700,650,2.2,70,1.5),o(520,820,-.3,40,1.2);let l=new ci(n),c=new ci(s);l.colorSpace=Ze;for(let h of[l,c])h.wrapS=h.wrapT=fn,h.anisotropy=r;return{map:l,bump:c}}function em(r=4){let t=$f(11),[n,i]=Os(256,256);i.fillStyle="#1b1b1b",i.fillRect(0,0,256,256);for(let a=0;a<9e3;a++){let o=t()<.5?10+t()*14:34+t()*22;i.fillStyle=`rgb(${o},${o},${o})`,i.fillRect(t()*256,t()*256,1.2,1.2)}let s=new ci(n);return s.colorSpace=Ze,s.wrapS=s.wrapT=fn,s.repeat.set(7,2),s.anisotropy=r,s}function tm(){let[t,n]=Os(1024,256);n.fillStyle="#F3C316",n.fillRect(0,0,1024,256),n.fillStyle="#111",n.beginPath(),n.moveTo(1024*.7,0),n.lineTo(1024*.86,256/2),n.lineTo(1024*.7,256),n.lineTo(1024*.62,256),n.lineTo(1024*.78,256/2),n.lineTo(1024*.62,0),n.closePath(),n.fill();for(let s=0;s<3;s++)n.fillRect(1024*(.16+s*.035),0,1024*.012,256);n.beginPath(),n.arc(1024*.42,256/2,256*.17,0,Math.PI*2),n.lineWidth=10,n.strokeStyle="#111",n.stroke();let i=new ci(t);return i.colorSpace=Ze,i}function nm(){let[r,e]=Os(16,64),t=["#D8A766","#C48F52","#D2A062","#1d1d1d","#D2A062","#C48F52","#D8A766"];t.forEach((i,s)=>{e.fillStyle=i,e.fillRect(0,s*64/t.length,16,64/t.length+1)});let n=new ci(r);return n.colorSpace=Ze,n.wrapS=fn,n}var wh=.8,oy=.21,zs=.012,am=.27,Fs=.084,im=.185,om=.027,ly=.032,rm=.09;function cy(r){let e=oy/2,t=wh/2-e,n=Math.abs(r);return n<=t?e:Math.sqrt(Math.max(0,e*e-(n-t)*(n-t)))}function hy(r){let e=Math.abs(r)-am;if(e<=0)return 0;let t=.04,n=.45;return e<t?n*e*e/(2*t):n*t/2+n*(e-t)}function uy(r,e){let t=Math.max(0,1-Math.max(0,Math.abs(r)-am+.02)/.06);return .005*e*e*t}var dy=(r,e)=>hy(r)+uy(r,e);function py(r){let i=[],s=[],a=[],o=[],l=[];for(let f=0;f<=140;f++){let _=-wh/2+wh*f/140,g=cy(_);for(let y=0;y<=18;y++){let x=-1+2*y/18,A=dy(_,x),M=x*g;i.push(_,A+zs/2,M),s.push(_,A-zs/2,M),a.push(f/140,y/18)}}for(let f=0;f<140;f++)for(let _=0;_<18;_++){let g=f*19+_,y=(f+1)*19+_,x=g+1,A=y+1;o.push(g,x,y,x,A,y),l.push(g,y,x,x,y,A)}let c=(f,_)=>{let g=new Je;return g.setAttribute("position",new Ae(f,3)),g.setAttribute("uv",new Ae(a,2)),g.setIndex(_),g.computeVertexNormals(),g},h=[];for(let f=0;f<=140;f++)h.push(f*19);for(let f=140;f>=0;f--)h.push(f*19+18);let u=[],d=[],p=[],m=0;h.forEach((f,_)=>{if(_){let g=h[_-1];m+=Math.hypot(i[f*3]-i[g*3],i[f*3+2]-i[g*3+2])}u.push(i[f*3],i[f*3+1],i[f*3+2],s[f*3],s[f*3+1],s[f*3+2]),d.push(m*20,1,m*20,0)});for(let f=0;f<h.length-1;f++){let _=2*f,g=_+1,y=_+2,x=_+3;p.push(_,g,y,y,g,x)}let v=new Je;return v.setAttribute("position",new Ae(u,3)),v.setAttribute("uv",new Ae(d,2)),v.setIndex(p),v.computeVertexNormals(),[new it(c(i,o),r.grip),new it(c(s,l),r.graphic),new it(v,r.ply)]}function fy(){let r=ly/2,e=om,t=[[.0105,-r],[.019,-r],[.0236,-r+6e-4],[.0262,-r+.0028],[e,-r+.0062],[e,r-.0062],[.0262,r-.0028],[.0236,r-6e-4],[.019,r],[.0105,r]].map(([i,s])=>new pe(i,s)),n=new Lr(t,40);return n.rotateX(Math.PI/2),n}function sm(r,e){let t=new Ct,n=-Math.sign(r),i=-zs/2,s=-Fs+om,a=(u,d,p,m,v)=>{let f=new it(u,d);return f.position.set(p,m,v),t.add(f),f};a(new Fn(.066,.008,.056),e.metal,0,i-.004,0),a(new Fn(.026,.024,.04),e.metal,-n*.006,i-.018,0);let o=a(new jt(.0042,.0042,.034,14),e.steel,n*.013,i-.026,0);o.rotation.z=n*.55;for(let u of[-.016,-.031]){let d=a(new jt(.0095,.0095,.008,20),e.bushing,n*(.013-u*.35),i+u,0);d.rotation.z=n*.55}let l=a(new jt(.0095,.0095,.145,22),e.metal,0,s,0);l.rotation.x=Math.PI/2,a(new Is(.016,20,14),e.metal,0,s+.004,0).scale.set(1,.95,1.9);let h=a(new jt(.004,.004,.212,12),e.steel,0,s,0);h.rotation.x=Math.PI/2;for(let u of[1,-1]){let d=a(new jt(.0062,.0062,.006,6),e.steel,0,s,u*.103);d.rotation.x=Math.PI/2,a(fy(),e.urethane,0,s,u*rm);let p=a(new jt(.0108,.0108,.028,20),e.core,0,s,u*rm);p.rotation.x=Math.PI/2}for(let u of[-.019,.019])for(let d of[-.021,.021])a(new jt(.0038,.0038,.0016,14),e.bolt,u,zs/2+7e-4,d);return t.position.x=r,t}function my(r){let e=new jt(.0225,.0225,.0075,84,1),t=e.attributes.position,n=new E;for(let s=0;s<t.count;s++){n.fromBufferAttribute(t,s);let a=Math.hypot(n.x,n.z);if(a>.02){let o=Math.atan2(n.z,n.x),l=(.0225+.0011*Math.cos(21*o))/a;t.setXYZ(s,n.x*l,n.y,n.z*l)}}e.computeVertexNormals();let i=new it(e,r);return i.position.set(0,-zs/2-.0038,0),i}function lm(r=4){let e=i=>new mn(i),t={grip:e({map:em(r),roughness:1}),graphic:e({map:tm(),roughness:.5}),ply:e({map:nm(),roughness:.75,side:ko}),metal:e({color:10988721,metalness:.75,roughness:.38}),steel:e({color:13948890,metalness:.9,roughness:.25}),bolt:e({color:2829099,metalness:.6,roughness:.4}),bushing:e({color:15975190,roughness:.6}),urethane:e({color:15789540,roughness:.42}),core:e({color:5922145,metalness:.5,roughness:.4}),cap:e({color:12070942,metalness:.35,roughness:.45})},n=new Ct;for(let i of py(t))n.add(i);return n.add(sm(im,t),sm(-im,t),my(t.cap)),n.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)}),n}var gy=9.81,cm=Math.PI/180,hm=[1,0,0,0],di=r=>!!(r&&r.snip&&r.snip.rows&&r.snip.rows.length>4);function Bs(r,e=!0){let t=r.fs||25,n=r.rows,i=n.length,s=Math.min(r.pop,i-1),a=Math.min(Math.max(r.land,s+1),i-1),o=!!r.bf,l=o?null:r.M!==void 0?r.M:_i(),c=r.bias||k.bias,h=R=>l?[le.dot(l[0],R),le.dot(l[1],R),le.dot(l[2],R)]:R,u=r.t&&r.t.length===i?r.t.map(R=>R/1e3):n.map((R,P)=>P/t),d=R=>Math.min(Math.max(R+1<i?u[R+1]-u[R]:1/t,0),.25),p=[0,1,2].map(R=>r.synth?n.map(P=>P[3+R]):al(n.map(P=>P[3+R]))),m=n.map((R,P)=>[0,1,2].map(O=>(p[O][P]-c[O])/ie.gyroScale)),v=n.map(R=>h([R[0]/ie.accScale,R[1]/ie.accScale,R[2]/ie.accScale])),f=v.map(le.len),_=m.map(h).map((R,P,O)=>{if(r.synth||f[P]<3.5)return R;let Y=P-1,U=P+1;for(;Y>0&&f[Y]>=3.5;)Y--;for(;U<i-1&&f[U]>=3.5;)U++;return Y>=0&&U<i?le.mul(le.add(O[Y],O[U]),.5):R}),g=_.map(le.len),y=R=>g[R]<120&&f[R]>.8&&f[R]<1.25,x=(R,P,O)=>Ht(R,_[P].map(Y=>Y*cm),O?v[P]:[0,0,0],d(P),O||2),A=!r.synth,M=R=>ln(R,Xr([0,0,1],En(R))),S=hm,D=new Array(i);for(let R=0;R<s;R++)D[R]=S,S=x(S,R,0),A&&u[s]-u[R+1]>.15&&(S=M(S));let N=[0];for(let R=s;R<a;R++){D[R]=S;let P=A?le.mul(le.add(_[R],_[R+1]),.5):_[R];S=Ht(S,P.map(O=>O*cm),[0,0,0],d(R),0),N.push(N[N.length-1]+le.len(P)*d(R))}let z=null;if(e)z=[0,0,1];else{let R=[0,0,0],P=0;for(let O=a;O<i;O++){let Y=u[O]-u[a];Y>=.15&&Y<=.8&&(R=le.add(R,v[O]),P++)}P&&le.len(R)/P>.6&&(z=le.norm(R))}if(z){let R=Xr(z,En(S)),P=N[N.length-1],O=Math.max(.001,u[a]-u[s]);for(let Y=s;Y<a;Y++){let U=P>20?N[Y-s]/P:(u[Y]-u[s])/O;D[Y]=ln(D[Y],jn(hm,R,U))}S=ln(S,R)}for(let R=a;R<i;R++)D[R]=S,(!e||u[R]-u[a]>=.2)&&(S=x(S,R,y(R)?8:2));let[te,L,X,q]=D[s],he=Math.atan2(2*(L*X+te*q),1-2*(X*X+q*q)),ye=[Math.cos(-he/2),0,0,Math.sin(-he/2)];for(let R=0;R<i;R++)D[R]=ln(ye,D[R]);let re=[],J=[],se={roll:0,yaw:0,pitch:0};for(let R=0;R<i;R++){R>s&&R<=a&&nl(En(D[R-1]),_[R-1],u[R]-u[R-1],se);let P=ol(se,o);re.push(P.roll),J.push(P.yaw)}let H=r.t?30:t,Q=u[0],me=u[i-1]-Q,w=r.t?Math.max(2,Math.round(me*H)+1):i,T=r.t?Math.round((u[s]-Q)*H):s,F=r.t?Math.max(T+1,Math.round((u[a]-Q)*H)):a,ee=(F-T)/H,I={fs:H,n:w,pop:T,land:F,q:[],h:[],roll:[],yaw:[],dur:(w-1)/H},G=0;for(let R=0;R<w;R++){let P=Q+R/H;if(r.t)for(;G<i-2&&u[G+1]<=P;)G++;else G=Math.min(R,i-1);let O=r.t?u[G+1]-u[G]:0,Y=O>0?Math.min(1,Math.max(0,(P-u[G])/O)):0,U=Math.min(i-1,G+1);I.q.push(Y?jn(D[G],D[U],Y):D[G]),I.roll.push(re[G]+(re[U]-re[G])*Y),I.yaw.push(J[G]+(J[U]-J[G])*Y);let b=(R-T)/H;I.h.push(R>T&&R<F?.5*gy*b*(ee-b):0)}return I}function um(r,e){let t=Math.max(0,Math.min(r.n-1,e*r.fs)),n=Math.floor(t),i=t-n,s=Math.min(r.n-1,n+1);return{q:jn(r.q[n],r.q[s],i),h:r.h[n]+(r.h[s]-r.h[n])*i,frame:Math.round(t)}}var Ay=9.81,et=null,We=null,ct={on:!1,az:0,el:0,shift:0,drag:null},dt={y:Fs,vy:0,restY:Fs},nu=[1,0,0,0],Vs=[],iu=new E,xm=new Nt;function bm(r){try{let e=new bs({canvas:r,antialias:!0});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.shadowMap.enabled=!0,e.shadowMap.type=gh,e.toneMapping=vh,e.toneMappingExposure=1.05;let t=e.capabilities.getMaxAnisotropy(),n=new mo,i=new we(13817042);n.background=i,n.fog=new fo(i,3.2,12);let s=new mt(30,1,.03,60);n.add(new Io(16054007,3026478,1.5));let a=new Ir(16774890,2.4);a.position.set(1.2,3.4,1.6),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-1.4,right:1.4,top:1.4,bottom:-1.4,near:.5,far:8}),a.shadow.bias=-4e-4,a.shadow.normalBias=.01,a.shadow.radius=5,n.add(a);let o=Qf(t);o.map.repeat.set(20,20),o.bump.repeat.set(20,20);let l=new it(new zi(40,40),new mn({map:o.map,bumpMap:o.bump,bumpScale:1.6,roughness:.96}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,n.add(l);let c=new it(new zi(.11,40),new mn({color:13618109,roughness:1,transparent:!0,opacity:.55}));c.rotation.x=-Math.PI/2,c.rotation.z=.12,c.position.set(-.75,.002,-.4),c.receiveShadow=!0,n.add(c);let h=new Ct;n.add(h),et={renderer:e,scene:n,cam:s,root:h,model:null,canvas:r,aniso:t,last:performance.now()},Mm(lm(t));let u=()=>{let p=r.clientWidth,m=r.clientHeight;!p||!m||(e.setSize(p,m,!1),et.w=p,et.h=m,ru())};et.resize=u,window.addEventListener("resize",u),u(),r.addEventListener("pointerdown",p=>{if(ct.on){ct.drag={x:p.clientX,y:p.clientY,az:ct.az,el:ct.el};try{r.setPointerCapture(p.pointerId)}catch{}}}),r.addEventListener("pointermove",p=>{!ct.on||!ct.drag||(ct.az=ct.drag.az-(p.clientX-ct.drag.x)*.009,ct.el=ct.drag.el+(p.clientY-ct.drag.y)*.006,ru())});let d=()=>{ct.drag=null};return r.addEventListener("pointerup",d),r.addEventListener("pointercancel",d),de.on("takeoff",()=>{!We&&ie.mode!=="game"&&dt.y<=su()+.01&&(dt.vy=2)}),globalThis.TRIKI_ARTIFACT||Ry(),requestAnimationFrame(Tm),!0}catch(e){return console.error(e),de.emit("scene-failed"),!1}}var Gs=new E(0,.22,0);function ru(){if(!et||!et.w)return;let{cam:r,w:e,h:t}=et,n=e/t<.8;r.aspect=e/t,r.fov=n?42:30;let s=(n?new E(1.02,.36,1.86):new E(1.3,.32,1.55)).sub(Gs),a=s.length(),o=Math.atan2(s.x,s.z)+ct.az,l=Math.max(.03,Math.min(1.25,Math.asin(s.y/a)+ct.el));ct.el=l-Math.asin(s.y/a),r.position.set(Gs.x+a*Math.sin(o)*Math.cos(l),Gs.y+a*Math.sin(l),Gs.z+a*Math.cos(o)*Math.cos(l)),r.lookAt(Gs),ct.shift?r.setViewOffset(e,t,0,ct.shift,e,t):r.clearViewOffset(),r.updateProjectionMatrix()}function Vo(r,e=0){ct.on=r,ct.shift=r?e:0,ct.drag=null,r||(ct.az=0,ct.el=0),et&&(et.canvas.style.touchAction=r?"none":"",ru())}function Mm(r){et.model&&et.root.remove(et.model),et.root.position.set(0,0,0),et.root.quaternion.identity(),et.root.updateMatrixWorld(!0),et.model=r,et.root.add(r),r.updateMatrixWorld(!0);let e=new Ee().copy(et.root.matrixWorld).invert(),t=0;r.traverse(i=>{i.isMesh&&(t+=i.geometry.attributes.position.count)});let n=Math.max(1,Math.floor(t/1500));Vs=[],r.traverse(i=>{if(!i.isMesh)return;let s=i.geometry.attributes.position;for(let a=0;a<s.count;a+=n)Vs.push(new E().fromBufferAttribute(s,a).applyMatrix4(i.matrixWorld).applyMatrix4(e))}),dt.restY=-Math.min(...Vs.map(i=>i.y)),dt.y=dt.restY,dt.vy=0}async function Ry(){try{let r=await fetch("models/board.glb",{cache:"no-cache"});if(!r.ok)return;let e=await r.arrayBuffer(),t={};try{let h=await fetch("models/board.json",{cache:"no-cache"});h.ok&&(t=await h.json())}catch{}let{GLTFLoader:n}=await Promise.resolve().then(()=>(_m(),ym)),s=(await new Promise((h,u)=>new n().parse(e,"./models/",h,u))).scene;s.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)});let a=new Ct;a.add(s),s.rotation.y=(t.rotateY||0)*Math.PI/180;let o=new Tt().setFromObject(a),l=o.getSize(new E);s.scale.multiplyScalar(.8/Math.max(l.x,l.z,1e-6)),o=new Tt().setFromObject(a);let c=o.getCenter(new E);s.position.sub(new E(c.x,o.min.y+Fs,c.z)),Mm(a),De(W("log.model"))}catch(r){De(W("log.modelFail",{e:r.message||r}))}}function su(){let r=1/0;for(let e of Vs)iu.copy(e).applyQuaternion(et.root.quaternion),iu.y<r&&(r=iu.y);return-r}function Ws(r,e={}){let t=e.from!=null?e.from:0;We={tr:r,from:t,to:e.to!=null?e.to:r.dur,t:e.t!=null?e.t:t,speed:e.speed||.5,playing:e.play!==!1,mode:e.mode||"auto",delay:e.delay||0,hold:.45},de.emit("replay",We)}var kr=()=>We,Sm=()=>!!We;function js(){We=null,de.emit("replay",null)}var Lt={play(){We&&(We.t>=We.to-1e-6&&(We.t=We.from),We.playing=!0,We.delay=0,de.emit("replay-state",We))},pause(){We&&(We.playing=!1,de.emit("replay-state",We))},toggle(){We&&(We.playing?Lt.pause():Lt.play())},seek(r){We&&(We.t=Math.max(We.from,Math.min(We.to,r)),We.playing=!1,de.emit("replay-state",We))},step(r){if(!We)return;let e=We.tr.fs,t=Math.round(We.t*e)+r;Lt.seek(t/e)},speed(r){We&&(We.speed=r,de.emit("replay-state",We))}};function Tm(r){let e=Math.min(.05,(r-et.last)/1e3);et.last=r,nu=jn(nu,k.q,1-Math.exp(-e/.04));let t=ie.mode==="game"?[1,0,0,0]:nu,n=null;if(We){let s=We;if(s.playing&&(s.delay>0?s.delay-=e:(s.t+=e*s.speed,s.t>=s.to&&(s.t=s.to,s.mode==="view"&&(s.playing=!1,de.emit("replay-state",s))))),s.mode==="auto"&&s.t>=s.to&&(s.hold-=e,s.hold<=0&&(We=null,de.emit("replay",null))),We){let a=um(s.tr,s.t);t=a.q,n=a.h,de.emit("replay-time",s)}}xm.set(t[1],t[3],-t[2],t[0]),et.root.quaternion.copy(xm);let i=su();n!=null?(dt.y=Math.max(dt.restY+n,i),dt.vy=0):(dt.vy-=Ay*e,dt.y+=dt.vy*e,dt.y<i&&(dt.y=i,dt.vy=dt.vy<-.7?-dt.vy*.22:0)),et.root.position.y=dt.y,et.renderer.render(et.scene,et.cam),de.emit("frame",r),requestAnimationFrame(Tm)}var wm=()=>({y:dt.y,floor:et?su():null,contact:Vs.length,restY:dt.restY});var Cy="M8 5v14l11-7z",Ly="M6 5h4v14H6zM14 5h4v14h-4z",qs=10,Dt=null,Em=null,Or=null,au=null,Wo=()=>!!Dt,Rm=()=>Dt?Dt.id:null;function Cm(r){if(!di(r))return!1;let e;try{e=Bs(r.snip,Zt(r))}catch(i){return console.error(i),!1}Dt={id:r.id,trick:r,tr:e};let t=B("rp");t.hidden=!1,document.body.classList.add("viewing"),B("rpName").textContent=Kt(vn(r)),Ws(e,{mode:"view",from:0,to:e.dur,t:0,speed:ie.rpSpeed||.5,play:!0,delay:.35}),Vo(!0,Math.round(t.offsetHeight*.5));let n=B("rpHint");return n.classList.remove("fade"),clearTimeout(Em),Em=setTimeout(()=>n.classList.add("fade"),3500),Or=null,Xs(kr()),de.emit("viewer",!0),!0}function Ys(){Dt&&(Dt=null,B("rp").hidden=!0,document.body.classList.remove("viewing"),js(),Vo(!1),de.emit("viewer",!1))}var Py=r=>(r>5e-4?"+":r<-5e-4?"\u2212":"")+Pe(Math.abs(r),2);function Iy(r){let e=Math.floor(r/60),t=r-e*60;return`${e}:${t.toFixed(2).padStart(5,"0")}`}function Xs(r){if(!Dt||!r||r.mode!=="view")return;let e=Dt.tr,t=Math.max(0,Math.min(e.n-1,Math.round(r.t*e.fs))),n=`${r.t.toFixed(4)}|${r.playing}|${r.speed}`;if(n===Or)return;Or=n,B("rpTc").textContent=Iy(r.t),B("rpFrame").textContent=W("rp.frame",{i:t+1,n:e.n}),B("rpRel").textContent=W("rp.fromPop",{s:Py((t-e.pop)/e.fs)}),B("rpH").textContent=`${Pe(e.h[t]*100)} ${W("unit.cm")}`,B("rpRoll").textContent=`${Pe(e.roll[t])}\xB0`,B("rpYaw").textContent=`${Pe(e.yaw[t])}\xB0`,B("rpPlayIcon").setAttribute("d",r.playing?Ly:Cy),B("rpPlay").setAttribute("aria-label",W(r.playing?"rp.pause":"rp.play"));for(let s of B("rpSpeed").children)s.classList.toggle("on",+s.dataset.sp===r.speed);let i=B("rpTrack");i.setAttribute("aria-valuemin",1),i.setAttribute("aria-valuemax",e.n),i.setAttribute("aria-valuenow",t+1),i.setAttribute("aria-valuetext",W("rp.frame",{i:t+1,n:e.n})),Ny(r)}function Ny(r){let e=B("rpTrack"),t=Dt.tr,n=t.n,i=Math.min(3,window.devicePixelRatio||1),s=e.clientWidth,a=e.clientHeight;if(!s||!a)return;(e.width!==Math.round(s*i)||e.height!==Math.round(a*i))&&(e.width=Math.round(s*i),e.height=Math.round(a*i));let o=e.getContext("2d");o.setTransform(i,0,0,i,0,0),o.clearRect(0,0,s,a);let l=f=>qs+(s-2*qs)*f/Math.max(1,n-1),c=17,h=a-4,u=r.t*t.fs;o.fillStyle="rgba(255,255,255,0.09)",Dy(o,0,c,s,h-c,6),o.fill();let d=l(t.pop),p=l(t.land);o.fillStyle="rgba(243,195,22,0.26)",o.fillRect(d,c,p-d,h-c),o.fillStyle="#F3C316",o.fillRect(d,h-4,p-d,4);let m=Math.max(1,Math.ceil(n/((s-2*qs)/4)));for(let f=0;f<n;f+=m){let _=f/m%5===0,g=f<=u;o.fillStyle=g?_?"#fff":"rgba(255,255,255,0.78)":_?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.26)";let y=_?17:9;o.fillRect(Math.round(l(f))-.5,h-7-y,1,y)}o.fillStyle="#F3C316",o.fillRect(Math.round(d)-1,c,2,h-c),o.fillRect(Math.round(p)-1,c,2,h-c),o.font='800 11px "Fira Sans Extra Condensed", "Arial Narrow", sans-serif',o.textBaseline="alphabetic",o.textAlign=d<22?"left":"center",o.fillText("POP",d<22?Math.max(0,d-2):d,11),o.textAlign=p>s-24?"right":"center",o.fillText("LAND",p>s-24?Math.min(s,p+2):p,11);let v=l(u);o.fillStyle="#fff",o.fillRect(v-1,c-3,2,h-c+3),o.beginPath(),o.moveTo(v-6,c-7),o.lineTo(v+6,c-7),o.lineTo(v,c+1),o.closePath(),o.fill()}function Dy(r,e,t,n,i,s){r.beginPath(),r.moveTo(e+s,t),r.lineTo(e+n-s,t),r.quadraticCurveTo(e+n,t,e+n,t+s),r.lineTo(e+n,t+i-s),r.quadraticCurveTo(e+n,t+i,e+n-s,t+i),r.lineTo(e+s,t+i),r.quadraticCurveTo(e,t+i,e,t+i-s),r.lineTo(e,t+s),r.quadraticCurveTo(e,t,e+s,t),r.closePath()}function Am(r){if(!Dt)return;let e=B("rpTrack"),t=e.getBoundingClientRect(),n=Dt.tr,i=Math.max(0,Math.min(1,(r-t.left-qs)/Math.max(1,t.width-2*qs)));Lt.seek(i*(n.n-1)/n.fs)}function Lm(){B("rpClose").onclick=Ys,B("rpPlay").onclick=()=>Lt.toggle(),B("rpBack").onclick=()=>Lt.step(-1),B("rpFwd").onclick=()=>Lt.step(1),B("rpStart").onclick=()=>Lt.seek(0),B("rpEnd").onclick=()=>{let t=kr();t&&Lt.seek(t.to)},B("rpSpeed").addEventListener("click",t=>{let n=t.target.closest("[data-sp]");n&&(ie.rpSpeed=+n.dataset.sp,$e(),Lt.speed(ie.rpSpeed))});let r=B("rpTrack");r.addEventListener("pointerdown",t=>{au=t.pointerId;try{r.setPointerCapture(t.pointerId)}catch{}Am(t.clientX)}),r.addEventListener("pointermove",t=>{au===t.pointerId&&Am(t.clientX)});let e=()=>{au=null};r.addEventListener("pointerup",e),r.addEventListener("pointercancel",e),r.addEventListener("keydown",t=>{let n=kr();n&&(t.key==="Home"&&(Lt.seek(0),t.preventDefault()),t.key==="End"&&(Lt.seek(n.to),t.preventDefault()))}),document.addEventListener("keydown",t=>{if(!Dt||B("sheet").classList.contains("open"))return;let n=t.target&&t.target.tagName||"";n==="SELECT"||n==="INPUT"||n==="TEXTAREA"||(t.key==="Escape"?Ys():t.key===" "&&n!=="BUTTON"?(t.preventDefault(),Lt.toggle()):t.key==="ArrowLeft"?(t.preventDefault(),Lt.step(-1)):t.key==="ArrowRight"&&(t.preventDefault(),Lt.step(1)))}),de.on("replay-time",Xs),de.on("replay-state",t=>{Or=null,Xs(t)}),de.on("lang",()=>{Dt&&(B("rpName").textContent=Kt(vn(Dt.trick)),Or=null,Xs(kr()))}),window.addEventListener("resize",()=>{Dt&&(Vo(!0,Math.round(B("rp").offsetHeight*.5)),Or=null,Xs(kr()))})}var Ks=[],Pm=null,Uy=r=>typeof r.tag=="string"?r.tag:r.tag?r.tag.text:W(r.ok?"cl.ok":"cl.bail"),ky=r=>typeof r.tag=="string"?"cal":r.tag?r.tag.cls:r.ok?"ok":"bail";function hu(r,e){Ks.unshift({name:Kt(vn(r)),ok:Zt(r),tag:e}),Ks.length=Math.min(Ks.length,3);let t=B("callout");t.classList.remove("fade"),t.innerHTML=Ks.map((n,i)=>`<div class="cl cl${i}${i===0?" enter":""}"><span class="cn">${rt(n.name)}</span>`+(i===0?`<span class="ct ${ky(n)}">${rt(Uy(n))}</span>`:"")+"</div>").reverse().join(""),clearTimeout(Pm),Pm=setTimeout(()=>t.classList.add("fade"),7e3)}function uu(){Ks.length=0,B("callout").innerHTML=""}var rn={state:"off",key:"idle",p:{}};function du(r,e,t={}){rn={state:r,key:e||"idle",p:t},Wi()}var Oy=()=>rn.key==="device"?rn.p.name+(rn.p.battery!=null?` ${rn.p.battery}%`:""):W("conn."+rn.key,rn.p);function Wi(){let r=Oy(),e=ie.device;B("connText").textContent=r,B("dot").className="dot"+(rn.state==="on"?" on":rn.state==="wait"?" wait":"");let t;rn.state==="on"?t=W("conn.info.on",{name:r}):rn.state==="wait"?t=r:e?t=(rn.key==="notFound"?r+". ":"")+W(Zi()&&!rd()?"conn.info.saved":"conn.info.savedManual",{name:e.name}):t=W("conn.info.first"),B("connInfo").textContent=t,B("cta").hidden=!!k.source,B("bDemoHero").textContent=W(ie.mode==="game"?"game.demo":"cta.demo");let n=k.source==="demo";B("bDemoExit").hidden=!n,B("bDemo").textContent=W(n?"b.demoExit":"b.demo"),B("bDemo").classList.toggle("on",n),B("bDisconnect").disabled=!k.source&&!id(),Fr(),B("bForget").hidden=!e,B("bConnect").textContent=e?W("cta.connectSaved",{name:e.name}):W("cta.connect"),B("ctaHint").textContent=e?W("cta.hintSaved",{name:e.name}):W("cta.hintFirst")}var ou=null;function $s(r){ou=r||null;let e=B("banner");e.innerHTML=r?W("banner."+r):"",e.hidden=!r}var Dm=null;function pu(r){Dm=r;let e=B("speed");if(r==null){e.hidden=!0;return}e.hidden=!1,e.innerHTML=`${Pe(r)}<small>${W("unit.kmh")}</small>`}var zr=null;function zy(){let r=Yr(),e=B("last");if(!r.length){e.innerHTML=`<p class="empty">${rt(W("last.empty"))}</p>`;return}let t=r[r.length-1],n=Zt(t),i=!n&&t.reason&&t.landedOverride==null?": "+ku(t.reason):"";e.innerHTML=`
    <div class="last-head"><div class="last-name">${rt(Kt(vn(t)))}</div><div class="last-h">${Pe(t.height)}<small>${W("unit.cm")}</small></div></div>
    <span class="verdict ${n?"":"fail"}">${rt(n?W("last.landed"):W("last.bailed")+i)}</span>
    <dl class="facts">
      <dt>${W("last.air")}</dt><dd>${Pe(t.air*1e3)} ${W("unit.ms")}</dd>
      <dt>${W("last.flip")}</dt><dd>${Pe(t.roll)}\xB0</dd>
      <dt>${W("last.spin")}</dt><dd>${Pe(t.yaw)}\xB0</dd>
      <dt>${W("last.peak")}</dt><dd>${Pe(t.peakSpin)} ${W("unit.dps")}</dd>
      <dt>${W("last.impact")}</dt><dd>${Pe(t.landG,1)} g</dd>
    </dl>
    ${t.flags&&t.flags.length?`<p class="note">${rt(t.flags.map(Uu).join("; "))}.</p>`:""}
    ${!ie.mount&&!cl()?`<p class="note">${rt(W("last.noMount"))}</p>`:""}
    ${di(t)?`<button class="btn small last-replay" data-replay="${t.id}"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16l13-8z"/></svg>${rt(W("last.replay"))}</button>`:""}`}var Fy='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>';function jo(){let r=Yr().slice().reverse(),e=B("list"),t=Rm();B("listEmpty").hidden=r.length>0,e.innerHTML=r.slice(0,60).map(n=>{let i=Zt(n),s=zr===n.id,a=vn(n);return`<li class="${t===n.id?"playing":""}"><div class="row-w">
        <button class="row" data-act="replay" data-id="${n.id}">
          <span class="t">${jr(n.time)}</span><span class="n">${rt(Kt(a))}</span>
          <span class="v">${Pe(n.height)} ${W("unit.cm")}</span>
          <span class="r ${i?"":"fail"}" aria-label="${rt(i?W("last.landed"):W("last.bailed"))}">${i?"\u2713":"\u2715"}</span></button>
        <button class="row-ed" data-act="edit" data-id="${n.id}" aria-expanded="${s}" aria-label="${rt(W("row.edit"))}">${Fy}</button></div>
      ${s?`<div class="edit">
        ${di(n)?"":`<p class="note">${rt(W("edit.noReplay"))}</p>`}
        <div class="seg"><button class="btn small ${i?"on":""}" data-act="ok" data-id="${n.id}">${rt(W("edit.landed"))}</button>
                         <button class="btn small ${i?"":"on"}" data-act="fail" data-id="${n.id}">${rt(W("edit.bailed"))}</button></div>
        <label>${rt(W("edit.actually"))} <select data-act="label" data-id="${n.id}">
          ${Yu.map(o=>`<option value="${rt(o)}" ${o===a||o==="Other"&&a==="\u0406\u043D\u0448\u0435"?"selected":""}>${rt(Kt(o))}</option>`).join("")}</select></label>
        <div class="seg"><button class="btn small" data-act="del" data-id="${n.id}">${rt(W("edit.delete"))}</button></div>
      </div>`:""}</li>`}).join("")}function Um(){let r=ul(),e=Yr(),t=r.attempts>0,n=(o,l,c="")=>`<dt>${W(o)}</dt><dd>${l}${c?`<small>${c}</small>`:""}</dd>`,i=n("st.attempts",r.attempts)+n("st.rate",t?r.rate:"\u2014",t?"%":"")+n("st.maxH",t?Pe(r.maxH):"\u2014",t?W("unit.cm"):"")+n("st.avgH",t?Pe(r.avgH):"\u2014",t?W("unit.cm"):"")+n("st.maxAir",t?Pe(r.maxAir*1e3):"\u2014",t?W("unit.ms"):"")+n("st.maxSpin",t?Pe(r.maxSpin):"\u2014",t?W("unit.dps"):"")+n("st.duration",r.minutes,W("unit.min"));(ie.gps||r.gpsMax)&&(i+=n("st.topSpeed",r.gpsMax?Pe(r.gpsMax,1):"\u2014",r.gpsMax?W("unit.kmh"):"")+n("st.avgSpeed",r.gpsAvg?Pe(r.gpsAvg,1):"\u2014",r.gpsAvg?W("unit.kmh"):"")+n("st.dist",r.dist?Pe(r.dist/1e3,2):"\u2014",r.dist?W("unit.km"):"")),B("stats").innerHTML=i;let s={};for(let o of e){let l=Kt(vn(o));s[l]=s[l]||{a:0,o:0},s[l].a++,Zt(o)&&s[l].o++}B("bytrick").innerHTML=Object.entries(s).sort((o,l)=>l[1].a-o[1].a).map(([o,l])=>`<div class="bt-row"><span>${rt(o)}</span><span>${W("bt.of",{o:l.o,a:l.a})}</span><div class="bar"><i style="width:${Math.round(100*l.o/l.a)}%"></i></div></div>`).join("");let a=dl();B("historyBox").hidden=!a.length,B("historySum").textContent=W("stats.history",{n:a.length}),B("history").innerHTML=a.map(o=>`<li><span>${rt(W("hist.item",{date:Du(o.start),time:jr(o.start),n:o.attempts,rate:o.rate}))}</span><span>${Pe(o.maxH)} ${W("unit.cm")}</span></li>`).join("")}function Qs(){B("demoNote").hidden=!cl(),B("preloadNote").hidden=!Ju(),zy(),jo(),Um()}function Im(r){let e=ke.tricks.find(t=>t.id===r);if(e){if(!di(e)){zr=r,jo();return}Vi(),window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}),Cm(e)}}function By(){B("list").addEventListener("click",e=>{let t=e.target.closest("button");if(!t)return;let n=t.dataset.id,i=t.dataset.act;if(i==="replay"){Im(n);return}if(i==="edit"){zr=zr===n?null:n,jo();return}i==="ok"&&Zr(n,{landedOverride:!0}),i==="fail"&&Zr(n,{landedOverride:!1}),i==="del"&&(zr=null,Zr(n,{deleted:!0}))}),B("list").addEventListener("change",e=>{let t=e.target;if(t.dataset.act!=="label")return;let n=ke.tricks.find(i=>i.id===t.dataset.id);n&&Zr(n.id,{label:t.value===n.name?void 0:t.value})}),B("last").addEventListener("click",e=>{let t=e.target.closest("[data-replay]");t&&Im(t.dataset.replay)});let r=B("bNewSession");r.onclick=()=>{if(Yr().length&&!r.dataset.armed){r.dataset.armed="1",r.textContent=W("stats.newConfirm"),setTimeout(()=>{delete r.dataset.armed,r.textContent=W("stats.new")},4e3);return}delete r.dataset.armed,r.textContent=W("stats.new"),zr=null,pl()}}var lu=null;function Hy(){let r=B("sheet");clearTimeout(lu),r.hidden=!1,r.offsetHeight,r.classList.add("open"),B("sheetBg").classList.add("open"),Xo()}function Vi(){let r=B("sheet");r.hidden||(r.classList.remove("open"),B("sheetBg").classList.remove("open"),clearTimeout(lu),lu=setTimeout(()=>{r.classList.contains("open")||(r.hidden=!0)},280))}function Xo(){B("diag").innerHTML=`${W("diag.version")}: ${aa}<br>${W("diag.rate")}: ${k.source?Pe(il(),1)+" "+W("unit.hz"):"\u2014"}<br>${W("diag.samples")}: ${k.n}<br>${W("diag.packets")}: ${Object.entries(k.pktSizes).map(([r,e])=>`${r} ${W("diag.bytes")} (${e})`).join(", ")||"\u2014"}<br>${W("diag.calib")}: ${k.calibInfo?"1 g = "+k.calibInfo.lsb:W("diag.calibNo")}`+(k.shifted?`<br>${W("diag.shifted")}: ${k.shifted}`:"")}var Ft=null,Zs=null;function Js(){B("mountInfo").textContent=W(Zs||(ie.mount?"mount.done":"mount.intro"))}function Gy(){if(k.source!=="ble"){Zs="mount.needConn",Js();return}Ft={step:0,g:[]},B("wizText").textContent=W("wiz.1"),B("wizard").hidden=!1}async function Vy(){if(!Ft)return;let r=B("bWizNext"),e=()=>W(Ft.step?"wiz.2":"wiz.1");r.disabled=!0,B("wizText").textContent=W("wiz.hold");let t=await Gu(1500);if(r.disabled=!1,!Ft)return;if(!t){B("wizText").textContent=W("wiz.noData");return}if(t.gyroSd>4){B("wizText").textContent=W("wiz.moved")+" "+e();return}if(Ft.g.push(t.acc),Ft.step===0){k.bias=t.bias,Ft.step=1,B("wizText").textContent=W("wiz.2");return}let n=Math.acos(Math.min(1,le.dot(le.norm(Ft.g[0]),le.norm(Ft.g[1]))))*180/Math.PI;if(n<8){Ft.g.pop(),B("wizText").textContent=W("wiz.tilt",{deg:Pe(n)});return}ie.mount=la(Ft.g[0],Ft.g[1]),k.autoMount=null,$e(),xi(),k.q=[1,0,0,0],Ft=null,B("wizard").hidden=!0,Zs=null,Js(),De(W("log.mount")),Qs()}async function cu(r,e,t){if(globalThis.TRIKI_ARTIFACT){Nm(r,e);return}try{let n=new File([e],r,{type:t});if(navigator.canShare&&navigator.canShare({files:[n]})){await navigator.share({files:[n],title:r});return}}catch(n){if(n.name==="AbortError")return}try{let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=r,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),1e4)}catch{}Nm(r,e)}function Nm(r,e){B("exportBox").hidden=!1,B("exportName").textContent=W("export.note",{name:r}),B("exportText").value=e,B("exportBox").scrollIntoView({block:"nearest",behavior:"smooth"})}var km=()=>{let r=new Date,e=t=>String(t).padStart(2,"0");return`${r.getFullYear()}${e(r.getMonth()+1)}${e(r.getDate())}_${e(r.getHours())}${e(r.getMinutes())}`};function fu(){let r=B("bRec");if(!k.rec){if(!k.source)return;k.rec={t0:performance.now(),rows:[]},r.textContent=W("b.recStop"),r.classList.add("on"),De(W("log.recStart"));return}let e=k.rec;k.rec=null,r.textContent=W("b.rec"),r.classList.remove("on"),e.rows.length&&cu(`triki_${km()}.csv`,`t_sec,ax,ay,az,gx,gy,gz
`+e.rows.map(t=>t.join(",")).join(`
`),"text/csv")}function mu(){for(let r of B("freq").options)r.textContent=r.value==="104"?`104 \xB7 ${W("freq.std")}`:r.value;Fr(),B("lang").value=Yi,B("bRec").textContent=W(k.rec?"b.recStop":"b.rec"),Wi(),Js(),Qs(),Xo(),ou&&$s(ou),pu(Dm)}var Tn=null;function Fr(){B("rateInfo").textContent=Tn?typeof Tn=="string"?W(Tn):W(Tn.k,Tn.p):W("rate.p"),B("bRateTest").disabled=k.source!=="ble"||hd()}async function Wy(){if(k.source!=="ble"){Tn="rate.needConn",Fr();return}let r=await ud((e,t)=>{Tn={k:"rate.running",p:{i:e+1,n:t}},Fr()});r&&(r.error?Tn={k:"rate.failed",p:{e:r.error}}:Tn={k:"rate.result",p:{v:r.best.v,hz:Pe(r.best.hz,0),hz0:r.before?Pe(r.before.hz,0):"\u2014"}},r.error||(B("freq").value=String(ie.freq)),Fr(),Xo())}function Om(r){B("bSettings").onclick=Hy,B("bClose").onclick=Vi,B("sheetBg").onclick=Vi,document.addEventListener("keydown",e=>{e.key==="Escape"&&B("sheet").classList.contains("open")&&Vi()}),B("bConnect").onclick=()=>r.connect(!1),B("bConnect2").onclick=()=>{Vi(),r.connect(!1)},B("bConnectAll").onclick=()=>{Vi(),r.connect(!0)},B("bForget").onclick=r.forget,B("bDisconnect").onclick=r.disconnect,B("bDemo").onclick=()=>{Vi(),k.source==="demo"?r.stopDemo():r.demo()},B("bDemoHero").onclick=r.demo,B("bDemoExit").onclick=r.stopDemo,B("bWizard").onclick=Gy,B("bWizNext").onclick=Vy,B("bWizCancel").onclick=()=>{Ft=null,B("wizard").hidden=!0},B("bMountReset").onclick=()=>{ie.mount=null,$e(),xi(),Zs="mount.resetDone",Js(),Qs()},de.on("mount-yaw",e=>{De(W("log.mountYaw",{deg:Pe(e)})),Zs="mount.auto",Js()}),B("bCalib").onclick=r.calibrate,B("bRec").onclick=fu,B("bExport").onclick=()=>cu(`triki_session_${km()}.json`,JSON.stringify({app:"triki-skate",version:3,exported:new Date().toISOString(),settings:{mount:ie.mount,stance:ie.stance,freq:ie.freq,accScale:ie.accScale,gyroScale:ie.gyroScale},device:ie.device&&ie.device.name,bias:k.bias,session:ke}),"application/json"),B("bCopy").onclick=async()=>{try{await navigator.clipboard.writeText(B("exportText").value),De(W("log.copied"))}catch{B("exportText").select()}},B("bExportHide").onclick=()=>{B("exportBox").hidden=!0},B("bShareLog").onclick=()=>cu("triki_log.txt",Wr.join(`
`),"text/plain"),B("freq").value=String(ie.freq),B("keepalive").checked=ie.keepalive,B("autoRe").checked=ie.autoRe,B("beep").checked=ie.beep,B("gps").checked=ie.gps,B("stance").value=ie.stance,B("autoConnect").checked=ie.autoConnect,B("lang").onchange=e=>Ou(e.target.value),[...B("freq").options].some(e=>+e.value===ie.freq)||B("freq").add(new Option(String(ie.freq),String(ie.freq))),B("freq").value=String(ie.freq),B("freq").onchange=e=>{ie.freq=+e.target.value,$e(),Tn=null,Fr(),r.restartStream()},B("bRateTest").onclick=Wy,B("keepalive").onchange=e=>{ie.keepalive=e.target.checked,$e()},B("autoRe").onchange=e=>{ie.autoRe=e.target.checked,$e()},B("autoConnect").onchange=e=>{ie.autoConnect=e.target.checked,$e()},B("beep").onchange=e=>{ie.beep=e.target.checked,$e()},B("stance").onchange=e=>{ie.stance=e.target.value,$e()},B("gps").onchange=e=>{ie.gps=e.target.checked,$e(),r.gps(ie.gps),Um()},setInterval(()=>{B("sheet").classList.contains("open")&&Xo()},1e3),de.on("log",e=>{let t=document.createElement("div");t.textContent=e;let n=B("log");for(n.prepend(t);n.childNodes.length>300;)n.lastChild.remove()}),de.on("viewer",()=>jo()),By()}function zm(r,e){B("air").classList.toggle("show",!!(k.airSince&&r-k.airSince>60&&!e&&!Wo()))}var Br=null;function Fm(r){try{Br=Br||new(window.AudioContext||window.webkitAudioContext);let e=Br.createOscillator(),t=Br.createGain(),n=Br.currentTime;e.type="triangle",e.frequency.value=r?660:220,t.gain.setValueAtTime(1e-4,n),t.gain.exponentialRampToValueAtTime(.25,n+.01),t.gain.exponentialRampToValueAtTime(1e-4,n+.3),e.connect(t).connect(Br.destination),e.start(),e.stop(n+.35)}catch{}}function Xy(r){if(!(Wo()||!di(r)))try{let e=Bs(r.snip,Zt(r)),t=matchMedia("(prefers-reduced-motion: reduce)").matches;Ws(e,{mode:"auto",from:Math.max(0,e.pop/e.fs-.25),to:Math.min(e.dur,e.land/e.fs+.3),speed:t?1:.5,delay:.1})}catch(e){console.error(e)}}de.on("conn",du);de.on("device",Wi);de.on("banner",$s);de.on("speed",pu);de.on("session",Qs);de.on("lang",mu);de.on("scene-failed",()=>$s("scene"));de.on("stop-sources",()=>{ts(),k.rec&&fu()});de.on("source-started",()=>{xi(),Wi(),ie.mode==="game"&&es()});de.on("frame",r=>{zm(r,Sm()),zd()});de.on("demo-stopped",()=>{Ys(),js(),uu(),Wi()});de.on("trick",r=>{ie.mode!=="game"&&($u(r),Xy(r),hu(r),ie.beep&&Fm(Zt(r)),De(W("log.trick",{name:vn(r),h:Math.round(r.height),res:W(Zt(r)?"last.landed":"last.bailed")})))});de.on("game-trick",r=>{if(Fd(r),r.reason!=="timeout")try{let n=Bs(Nd(r.name,!r.ok),r.ok),i=matchMedia("(prefers-reduced-motion: reduce)").matches;Ws(n,{mode:"auto",from:Math.max(0,n.pop/n.fs-.2),to:n.dur,speed:i?1:.6,delay:.05})}catch(n){console.error(n)}let e=r.mult>1?" \xD7"+Pe(r.mult,r.mult%1?1:0):"",t=r.ok?r.points?{text:"+"+Pe(r.points)+e,cls:"pts"}:{text:W("game.miss"),cls:"cal"}:null;hu({name:r.name,landed:r.ok},t),ie.beep&&Fm(r.ok&&r.points>0)});function Bm(r){r=r==="game"?"game":"tracker";let e=ie.mode!==r;ie.mode=r,$e(),e&&k.source==="demo"&&ts(),Ys(),js(),uu(),document.body.classList.toggle("game",r==="game"),B("trackerMain").hidden=r==="game",B("gameMain").hidden=r!=="game",B("hud").hidden=r!=="game";for(let t of B("modes").children){let n=t.dataset.mode===r;t.classList.toggle("on",n),t.setAttribute("aria-pressed",n)}r==="game"?yd():_d(),Wi(),ga(),e&&De(W("log.mode",{m:W("mode."+r)}))}B("modes").addEventListener("click",r=>{let e=r.target.closest("[data-mode]");e&&Bm(e.dataset.mode)});if(globalThis.TRIKI_PRELOAD){let r=globalThis.TRIKI_PRELOAD;r.stance&&(ie.stance=r.stance),r.mount&&(ie.mount=r.mount),Zu(r.session)}tl();De("Triki Skate "+aa);Om({connect:sd,forget:dd,disconnect:()=>k.source==="demo"?ts():vl(),demo:()=>{ha(),Dd(ie.mode==="game"?"game":"tracker")},stopDemo:ts,calibrate:()=>Ki(!1),restartStream:Jr,gps:Al});Lm();Bd();!nd()&&!globalThis.TRIKI_ARTIFACT&&$s("nobt");du("off","idle");bm(B("scene"));mu();ie.gps&&Al(!0);setInterval(()=>{ie.mode!=="game"&&Ku()},150);Bm(ie.mode);setTimeout(cd,400);window.triki={st:k,S:ie,sceneDebug:wm,game:Z};})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
