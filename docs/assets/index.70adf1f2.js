var Y=Object.defineProperty;var k=(s,e,t)=>e in s?Y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(k(s,typeof e!="symbol"?e+"":e,t),t);const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};W();var K="data:image/png;base64,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",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAA30lEQVRIS9WVyRHDIAxFTSfuIKf0X0BO6SCdJKBIGgGSEF5mbA4+sDz+14LTsmF8Hs/v+n4l7ag66d1RYGX9FsAitHM4ZZnsouWLARV1+xQeCpQwET+qrioPoaQY6vYDczEPm6NTqLUVzlkN5Fs+C6iVBPSwMVhlJVc0/ilACfXUVZd3CptM0vo2YL6KD2b78s0bAVklK2xLowDFQzoHbJLBiRTQyI8CxMHHAuIaKR1Ba6DRVgDBeMaBuNOMUxAIjqNlMVJH6yl58YtSxL4/0IvfJPT6QKjDSBeEnR8O/AHYvIkcXHLF6QAAAABJRU5ErkJggg==",Z="./assets/pixel.01918d86.ttf",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAtCAYAAAAuj3x7AAABVElEQVRoQ+3aTa7CMAxG0XYHDNn/6hiygyIBg6IqzeefmFa9TF9iJ8fGVNWbJz4lAnNJFpJMQBc1wRDo5flYeuefb/du7qw4vbNU/L17Wc8hsoCy4njukL0H6GzRRrwQtNJxRffYTaOMqdHnBHq08Dc+0EeFPsu4KPLbpGmNKXNHA71fQqCLWhzoIuh1mjU6o2NgAYAeiBvqaH4AfZUxdzTQQPsEinZJHU0Xx6sBdNxQigC0xBRf1IRmXMRxpcc7oIHOFSiKxoweCG1+qcQY8VUDaJ+beZcZep2B7va97P95AlFKBjTQSp8MX6P8O4P04p+O3tZKwWV0JPQ40AmISogh0K3EVxspVlzz6AD6IwC08l1PWPM36ISzv0MceQRFcNNGB9C6gPQcrYfzraSjfW6lu5QiZX39Ixc7REdHLgB0RM+wF2gD1hWWnn50nKVIQBdV6gWjtKguRIE+9gAAAABJRU5ErkJggg==",tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAtCAYAAAAuj3x7AAABIElEQVRoQ+3ZSw6CUBBEUdiBQ/e/OofuAAdOSAymugvKB17H/cHzOg2BeeIXEZgjXWgyAR0agqGhl+djCTlM8+1+qMWhxV0koF1BMR9oEaoTlsStXp+zXoZbHUBXj78ZD3QTbittZNDqX1VWys9WB9DV42zGAw1cU+CdtrVGdlsdV5pQRxpoR6+Qa0EzrQXpVegaXVodQAPdEwhlSRPNFPunAbRvKFUAWmLyg4D2DaUKQEtMfhDQvqFUQYJeV+IJRHL9CAK651bOArpM1ksoQ7NGgO4JhLKY6DNAh67xa5uRn4Ks99Ej4J7lPgF0aFouBR0y27WN9IVl145/Wgzo0MEDDXRIINSGiQY6JBBqw0QDHRIItWGigQ4JhNow0SHoFz6ZeC4X3yntAAAAAElFTkSuQmCC",et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAtCAYAAAAuj3x7AAABJklEQVRoQ+3aQRLCIAyF4XIDl97/dC69QV24YcaiCSQPbH/XSMqXZ9qZWjY+EoEiqUKRDWhRCKZB78/HfnTGcrtPu6ZM82mHAjqzrdXeQAdDt0CDy6RtFzXK0kcH0O8MAP3jt7B0ov89xd45ZGlGSqKB/mwV0N74HqxPSfTV0urtQwvdnWigv9MD7Y1m53qgO+FGvlajMzpGJB3P4ECvBM0NsK8b7tEBNNB9AqJvkWigRQKiMiR6JWhugOPdMCUaaKDHBUQ7kGigRQKiMiQaaJGAqAyJBlokICpjSnTrWni+5p2hKKdAnwt6idM0LiJjrFn+HGMxcb8ztGw6aw3QInmgRdCWMnUzosaCpe6pRoflwEBblALWAB2AuPIWlxsds5oBtEj+BQY1nC5YdIUmAAAAAElFTkSuQmCC";function it(s,e,t){const i=e.width,n=e.height,r=i*.1,h=i*.1,a="#ffffff",l="#000000",c=2;s.fillStyle=l,s.fillRect(0,0,i,n),s.fillStyle=a,s.fillRect(r,n/2-h/2-c,t*(i-r*2),h),s.strokeStyle=a,s.lineWidth=c,s.strokeRect(r,n/2-h/2-c,i-r*2,h)}class U{constructor(e){o(this,"_animationFrameRequestId",null);o(this,"_lastTime");o(this,"updateFunction");this.updateFunction=e}start(){this._requestAnim()}stop(){this._animationFrameRequestId&&cancelAnimationFrame(this._animationFrameRequestId)}_requestAnim(){this._animationFrameRequestId=requestAnimationFrame(this._loop.bind(this))}_loop(e){if(this._requestAnim(),this._lastTime){const t=(e-this._lastTime)/1e3;this.updateFunction(t)}this._lastTime=e}}class st{constructor(e,t){o(this,"canvas");o(this,"ctx");o(this,"width");o(this,"height");this.canvas=this._createCanvas(e,t),this.ctx=this.canvas.getContext("2d"),this.width=e,this.height=t}clear(e){e?this.rect(0,0,this.width,this.height,e):this.ctx.clearRect(0,0,this.width,this.height)}rect(e,t,i,n,r){this.ctx.fillStyle=r,this.ctx.fillRect(e,t,i,n)}_createCanvas(e,t){const i=document.createElement("canvas");return i.width=e,i.height=t,this._stylizeCanvas(i,e,t),window.onresize=n=>this._scaleCanvas(e,t,i),document.body.appendChild(i),i}_stylizeCanvas(e,t,i){e.style.setProperty("-webkit-optimize-contrast","pixelated"),e.style.setProperty("-ms-interpolation-mode","nearest-neighbor"),e.style.setProperty("image-rendering","crisp-edges"),e.style.setProperty("image-rendering","pixelated"),this._scaleCanvas(t,i,e)}_scaleCanvas(e,t,i){const n=e/t,r=window.innerWidth/window.innerHeight;n<r?(i.style.setProperty("height","90%"),i.style.setProperty("width","auto")):(i.style.setProperty("height","auto"),i.style.setProperty("width","90%"))}}const R=new Map,I=new Map;function nt(){document.addEventListener("keydown",s=>z(s.code)),document.addEventListener("keyup",s=>D(s.code)),document.addEventListener("mousedown",()=>z("Mouse")),document.addEventListener("mouseup",()=>D("Mouse"))}function z(s){I.get(s)||R.set(s,1),I.set(s,!0)}function D(s){I.set(s,!1)}function ot(){for(const[s,e]of R.entries())R.set(s,Math.max(e-1,0))}function rt(s){var t;return((t=R.get(s))!=null?t:0)>0}function ht(s){var e;return(e=I.get(s))!=null?e:!1}const Q=new Map,X=new Map;let F=0,at=0;function ct(){return at++}async function lt(s,e){const t=new FontFace(e,`url(${s})`);F++,await t.load(),F--,document.fonts.add(t)}function E(s){const e=q(s,ft);return ut(e)}function dt(s,e,t){const i=q(s,pt,e,t);return gt(i)}function q(s,e,t=1,i=1){const n=ct(),r=new Image;return r.onload=()=>e(n,r,i,t),r.src=s,F++,n}function ut(s){return function(){const e=Q.get(s);if(!e)throw new Error("this sprite does not exists");return e}}function gt(s){return function(){const e=X.get(s);if(!e)throw new Error("this spriteSheet does not exists");return e}}function ft(s,e){Q.set(s,e)}async function pt(s,e,t=1,i=1){const n=await Promise.all(At(e,t,i));X.set(s,n)}function At(s,e,t){const i=s.width/e,n=s.height/t,r=[];for(let h=0;h<s.height;h+=n)for(let a=0;a<s.width;a+=i)r.push(createImageBitmap(s,a,h,i,n));return r}function mt(){return(Q.size+X.size)/F}class _t{constructor(e,t){o(this,"_drawing");o(this,"_gameLoop");o(this,"_loadingLoop");o(this,"_currentScene",null);this._drawing=new st(e,t),this._gameLoop=new U(this._gameUpdate.bind(this)),this._loadingLoop=new U(this._loadingUpdate.bind(this))}_gameUpdate(e){var t,i,n;this._drawing.clear(),(t=this._currentScene)!=null&&t.inProgress||(i=this._currentScene)==null||i.start(this),(n=this._currentScene)==null||n.update(e),ot()}_loadingUpdate(){const e=mt();e>=1?(this._loadingLoop.stop(),this._gameLoop.start()):it(this.ctx,this.canvas,e)}start(){nt(),this._loadingLoop.start()}get ctx(){return this._drawing.ctx}get canvas(){return this._drawing.canvas}set scene(e){var t;(t=this._currentScene)==null||t.exit(),this._currentScene=e}get width(){return this.canvas.width}get height(){return this.canvas.height}}const M=class{constructor(...e){o(this,"_components",[]);o(this,"id");o(this,"game",null);o(this,"scene",null);o(this,"tags",[]);o(this,"onUpdate");this.id=M._newId(),e&&(this.tags=e)}static _newId(){return this._id++,this._id}add(...e){return e.forEach(t=>{this._components.push(t)}),this}remove(e){var i;const t=this._components.findIndex(n=>n instanceof e);(i=this._components[t])==null||i.beforeRemove(),this._components=this._components.filter(n=>!(n instanceof e))}get(e){const t=this._components.find(i=>i instanceof e);return t&&t instanceof e?t:null}destroy(){var e;(e=this.scene)==null||e.remove(this)}start(e){this.scene=e,this.game=e.game,this._components.forEach(t=>t.start(this))}update(e){this._components.forEach(t=>t.update(e)),this.onUpdate&&this.onUpdate.bind(this)(e)}beforeRemove(){this._components.forEach(e=>e.beforeRemove())}includeAllTags(e){for(const t of e)if(!this.tags.includes(t))return!1;return!0}};let A=M;o(A,"_id",0);class wt{constructor(){o(this,"_queue",[])}add(e,t){this._queue.push({render:e,layer:t})}update(){var e;for(this._queue=this._queue.sort((t,i)=>t.layer-i.layer);this._queue.length>0;){const t=(e=this._queue.shift())==null?void 0:e.render;t&&t()}}clear(){this._queue=[]}}class j{constructor(){o(this,"inProgress",!1);o(this,"_actors",[]);o(this,"_toRemove",[]);o(this,"game",null);o(this,"background");o(this,"renderingQueue");o(this,"onUpdate");this.renderingQueue=new wt}start(e){this.game=e,this.inProgress=!0;for(const[t,i]of this._actors.entries())i.start(this)}update(e){this._drawBackground();for(const t of this._actors.values())t.update(e);this.onUpdate&&this.onUpdate(e),this.renderingQueue.update(),this._toRemove.length&&this._deleteActors()}_drawBackground(){this.background&&this.game&&(this.game.ctx.fillStyle=this.background,this.game.ctx.fillRect(0,0,this.game.width,this.game.height))}_deleteActors(){this._actors.filter(t=>this._toRemove.includes(t.id)).forEach(t=>t.beforeRemove()),this._actors=this._actors.filter(t=>!this._toRemove.includes(t.id)),this._toRemove=[]}exit(){this._actors.forEach(e=>e.beforeRemove()),this.inProgress=!1}add(...e){e.forEach(t=>{this._actors.push(t),this.inProgress&&t.start(this)})}remove(...e){e.forEach(t=>{this._toRemove.push(t.id)})}getAllByTags(...e){if(e.length===0)return[...this._actors];const t=[];return this._actors.forEach(i=>{i.includeAllTags(e)&&t.push(i)}),t}getAllByComponent(e){const t=[];return this._actors.forEach(i=>{i.get(e)&&t.push(i)}),t}}class y{constructor(){o(this,"_game",null);o(this,"_actor",null);o(this,"_scene",null)}start(e){this._actor=e,this._game=e.game,this._scene=e.scene}update(e){}beforeRemove(){}}class g extends y{constructor(t,i){super();o(this,"x");o(this,"y");o(this,"width",0);o(this,"height",0);this.x=t,this.y=i}}class V extends y{constructor(){super(...arguments);o(this,"layer",1)}update(t){var i;super.update(t),(i=this._scene)==null||i.renderingQueue.add(this.render.bind(this),this.layer)}render(){}}class N extends V{constructor(t){super();o(this,"_position",null);o(this,"_getImage");o(this,"flipX",!1);o(this,"flipY",!1);this._getImage=t}start(t){super.start(t),this._position=t.get(g)}update(t){super.update(t)}render(){var l,c,p,u,f,d,x,B,b;const t=Math.floor((c=(l=this._position)==null?void 0:l.x)!=null?c:0),i=Math.floor((u=(p=this._position)==null?void 0:p.y)!=null?u:0),n=this.flipX?-1:1,r=this.flipY?-1:1,h=this.flipX?-this.width:0,a=this.flipY?-this.height:0;(f=this._game)==null||f.ctx.save(),(d=this._game)==null||d.ctx.translate(t,i),(x=this._game)==null||x.ctx.scale(n,r),(B=this._game)==null||B.ctx.drawImage(this._image,h,a),(b=this._game)==null||b.ctx.restore()}get _image(){return this._getImage()}get width(){return this._getImage().width}get height(){return this._getImage().height}}class yt extends V{constructor(t,i,n){super();o(this,"_position",null);o(this,"_getSpriteSheet");o(this,"_currentAnim");o(this,"_cursor",0);o(this,"fps",5);o(this,"_nextFrameTime",0);o(this,"_delayBetweenFrame",0);o(this,"_playing",!0);o(this,"_looping",!0);o(this,"onAnimationEnd");o(this,"flipX",!1);o(this,"flipY",!1);this._getSpriteSheet=t,this._currentAnim=i;const{fps:r,playing:h,looping:a,start:l,onAnimationEnd:c}={...n};this.fps=r!=null?r:this.fps,this._playing=h!=null?h:this.playing,this._looping=a!=null?a:this._looping,this._cursor=l!=null?l:0,this.onAnimationEnd=c}start(t){super.start(t),this._position=t.get(g)}update(t){super.update(t)}render(){this.playing&&this._anim(),this._flipImage()}_flipImage(){var l,c,p,u,f,d,x,B,b;const t=Math.floor((c=(l=this._position)==null?void 0:l.x)!=null?c:0),i=Math.floor((u=(p=this._position)==null?void 0:p.y)!=null?u:0),n=this.flipX?-1:1,r=this.flipY?-1:1,h=this.flipX?-this.width:0,a=this.flipY?-this.height:0;(f=this._game)==null||f.ctx.save(),(d=this._game)==null||d.ctx.translate(t,i),(x=this._game)==null||x.ctx.scale(n,r),(B=this._game)==null||B.ctx.drawImage(this._image,h,a),(b=this._game)==null||b.ctx.restore()}get _image(){return this._getSpriteSheet()[this._currentAnim[this._cursor]]}_anim(){this._delayBetweenFrame=1e3/this.fps,window.performance.now()>this._nextFrameTime&&this.frame++}play(t){const{fps:i,looping:n,start:r,onAnimationEnd:h}={...t};this.fps=i!=null?i:this.fps,this._looping=n!=null?n:this._looping,this._cursor=r!=null?r:0,this._delayBetweenFrame=1e3/this.fps,this.onAnimationEnd=h;const a=window.performance.now();this._nextFrameTime=a+this._delayBetweenFrame,this._setPlaying(!0)}_setPlaying(t){this._playing=t,!this.playing&&this.onAnimationEnd&&this._actor&&this.onAnimationEnd(this._actor)}pause(t){this._setPlaying(!1),this.frame=t!=null?t:this.frame}get frame(){return this._cursor}set frame(t){this._cursor=t,this._resetTimer(),this._cursor>=this._currentAnim.length&&(this._looping?this._cursor=0:(this._cursor=this._currentAnim.length-1,this._setPlaying(!1)))}_resetTimer(){const t=window.performance.now();this._nextFrameTime=t+this._delayBetweenFrame}get playing(){return this._playing}get width(){return this._getSpriteSheet()[0].width}get height(){return this._getSpriteSheet()[0].height}set anim(t){this._currentAnim=t,this._cursor=Math.min(this._cursor,t.length-1)}}class m extends y{constructor(t,i){super();o(this,"_position",null);o(this,"_size");o(this,"_offset");this._size=t,this._offset=i!=null?i:{x:0,y:0}}start(t){super.start(t),this._position=t.get(g)}isOverlapping(...t){var r;const i=(r=this._scene)==null?void 0:r.getAllByTags(...t),n=[];return i==null||i.forEach(h=>{var a,l;if(h.id!==((a=this._actor)==null?void 0:a.id)){const c=(l=h.get(m))==null?void 0:l.box;c&&this._rectCollision(this.box,c)&&n.push(h)}}),n.length===0?!1:n}isColliding(t){var n,r,h,a,l;if(!((r=(n=this._actor)==null?void 0:n.get(_))!=null&&r.solid))return null;const i=(h=this._scene)==null?void 0:h.getAllByComponent(_);if(i)for(const c of i){const p=this._zoneCollision(t),u=c.get(m);if(((a=c.get(_))==null?void 0:a.solid)&&c.id!==((l=this._actor)==null?void 0:l.id)&&this._rectCollision(p,u))return u}return null}_rectCollision(t,i){return t.x<i.x+i.width&&t.x+t.width>i.x&&t.y<i.y+i.height&&t.height+t.y>i.y}_zoneCollision(t){switch(t){case"left":return{x:this.box.x-1,y:this.box.y+1,width:1,height:this.box.height-2};case"right":return{x:this.box.x+this.box.width,y:this.box.y+1,width:1,height:this.box.height-2};case"top":return{x:this.box.x,y:this.box.y,width:this.box.width-2,height:1};case"bottom":return{x:this.box.x+1,y:this.box.y+this.box.height,width:this.box.width-2,height:1}}}get box(){return{x:this.x,y:this.y,width:this.width,height:this.height}}get x(){var t,i;return(i=(t=this._position)==null?void 0:t.x)!=null?i:0+this._offset.x}get y(){var t,i;return(i=(t=this._position)==null?void 0:t.y)!=null?i:0+this._offset.y}get width(){return this._size.width-2*this._offset.x}get height(){return this._size.height-2*this._offset.y}get onFloor(){return this.isColliding("bottom")!==null}get onCeil(){return this.isColliding("top")!==null}get onWall(){return this.isColliding("left")!==null||this.isColliding("right")!==null}}class _ extends y{constructor(t){super();o(this,"position",null);o(this,"_boxCollider",null);o(this,"velocity",{x:0,y:0});o(this,"maxVelocity");o(this,"solid",!0);if(t){const{maxVelocity:i,solid:n}=t;i&&(this.maxVelocity=i),this.solid=n!=null?n:!0}}start(t){super.start(t),this.position=t.get(g),this._boxCollider=t.get(m)}update(t){var n,r,h,a,l,c,p;const i=this.position;if(this._clampVelocity(t),i){i.x+=this.velocity.x*t;const u=this.xDirection;if(u&&this.solid){const d=(n=this._boxCollider)==null?void 0:n.isColliding(u);d&&u==="right"&&(i.x=d.x-((h=(r=this._boxCollider)==null?void 0:r.width)!=null?h:0)),d&&u==="left"&&(i.x=d.x+d.width)}i.y+=this.velocity.y*t;const f=this.yDirection;if(f&&this.solid){const d=(l=(a=this._boxCollider)==null?void 0:a.isColliding(f))!=null?l:0;d&&f==="top"&&(i.y=d.y+d.height),d&&f==="bottom"&&(i.y=d.y-((p=(c=this._boxCollider)==null?void 0:c.height)!=null?p:0))}}}_clampVelocity(t){const i=Math.sqrt(this.velocity.x**2+this.velocity.y**2);if(this.maxVelocity&&i>this.maxVelocity){const n=this.maxVelocity/i*t;this.velocity.x=this.velocity.x*n,this.velocity.y=this.velocity.y*n}}get xDirection(){return this.velocity.x>0?"right":this.velocity.x<0?"left":null}get yDirection(){return this.velocity.y>0?"bottom":this.velocity.y<0?"top":null}}class xt extends y{constructor(t){super();o(this,"_body",null);o(this,"_boxCollider",null);o(this,"gravity");this.gravity=t}start(t){super.start(t),this._body=t.get(_),this._boxCollider=t.get(m)}update(){var t;this._body&&(this._body.velocity.y+=this.gravity,(t=this._boxCollider)!=null&&t.onFloor&&(this._body.velocity.y=Math.min(this._body.velocity.y,0)))}}function C(s,e){return Math.floor(Math.random()*(e+1))+s}function Bt(s){const e=C(0,s.length-1);return s[e]}class bt extends V{constructor(t,i,n){super();o(this,"_position",null);o(this,"width");o(this,"height");o(this,"color");this.width=t,this.height=i,this.color=n}start(t){super.start(t),this._position=t.get(g)}update(t){super.update(t)}render(){if(this._game){const t=this._game.ctx,i=this._position;t&&i&&(t.fillStyle=this.color,t.fillRect(i.x,i.y,this.width,this.height))}}}class S extends V{constructor(t,i="monospace",n=12,r="#000000"){super();o(this,"_position",null);o(this,"color");o(this,"content");o(this,"fontSize");o(this,"font");o(this,"_ctx");this.content=t,this.fontSize=n,this.color=r!=null?r:"#000000",this.font=i!=null?i:"monospace";const h=document.createElement("canvas");this._ctx=h.getContext("2d")}start(t){super.start(t),this._position=t.get(g)}update(t){super.update(t)}render(){if(this._game){const t=this._game.ctx,i=this._position;t&&i&&(t.textBaseline="top",t.fillStyle=this.color,t.font=`${this.fontSize}px ${this.font}`,t.fillText(this.content,i.x,i.y))}}get width(){return this._ctx.font=`${this.fontSize}px font`,this._ctx.measureText(this.content).width}get height(){return this._ctx.textBaseline="top",this._ctx.font=`${this.fontSize}px font`,this._ctx.measureText(this.content).fontBoundingBoxDescent-this._ctx.measureText(this.content).fontBoundingBoxAscent}}const vt=600,Ct=250;lt(Z,"pixelFont");const Et=dt(K,2,2),Rt=E(J),w=new _t(vt,Ct),It=[E($),E(tt),E(et)];class Ft extends y{constructor(t,i){super();o(this,"_body",null);o(this,"_boxCollider",null);o(this,"_lastJumpRequest",0);o(this,"_lastTimeOnFloor",0);o(this,"jumpTimeTolerence",-1/0);o(this,"velocity");this.velocity=t,this.jumpTimeTolerence=i!=null?i:this.jumpTimeTolerence}start(t){super.start(t),this._body=t.get(_),this._boxCollider=t.get(m)}update(){var i;const t=window.performance.now();(i=this._boxCollider)!=null&&i.onFloor&&(this._lastTimeOnFloor=t,t-this._lastJumpRequest<this.jumpTimeTolerence&&this._jump())}jump(){var i,n;const t=window.performance.now();(i=this._boxCollider)!=null&&i.onFloor?this._jump():t-this._lastTimeOnFloor<this.jumpTimeTolerence&&((n=this._body)==null?void 0:n.yDirection)==="bottom"?this._jump():this._lastJumpRequest=window.performance.now()}_jump(){this._body&&(this._body.velocity.y=-this.velocity)}}function Pt(){const s=new A,e=new g(150,100),t=new S("Game Over...","pixelFont",48,"#fff");return s.add(e,t),s}function Vt(s){const e=new A,t=new g(150,60),i=new S(`score : ${s}`,"pixelFont",24,"#fff");return e.add(t,i),e}function Qt(s){const e=new j;return e.add(Pt(),Vt(s)),e.background="#000000",e.onUpdate=()=>{ht("Space")&&(w.scene=G())},e}let v=0,H=1,L=1,P=0;function Xt(){const s=new A("player"),e=new g(100,0),t=new yt(Et,[0,1,2,3]),i=new m(t,{x:10,y:0}),n=new _,r=new xt(15),h=new Ft(400);return s.add(e,t,i,n,r,h),s.onUpdate=()=>{rt("Space")&&h.jump()},s}function St(){const s=new A("player"),e=new g(0,230),t=new bt(600,20,"#000000"),i=new m(t),n=new _;return s.add(e,t,n,i),s}function Mt(){const s=new A,e=new g(400,20),t=new S("score : 0","pixelFont",24,"#000");return s.add(e,t),s.onUpdate=()=>{t.content=`score : ${P}`},s}function T(){const s=new A("ennemie"),e=new g(600,200),t=new N(Rt),i=new m(t),n=new _({solid:!1});return n.velocity.x=-230,s.add(e,t,n,i),s.onUpdate=()=>{e.x<-t.width&&(s.destroy(),P++),i.isOverlapping("player")&&(w.scene=Qt(P))},s}function O(s){const e=s?C(s-100,s+100):600,t=new A("ennemie"),i=new g(e,C(20,30)),n=Bt(It),r=new N(n);r.layer=-1;const h=new m(r),a=new _({solid:!1});return a.velocity.x=-50,t.add(i,r,a,h),t}function G(){P=0;const s=new j,e=w.ctx.createLinearGradient(0,w.height*.3,0,w.height);e.addColorStop(0,"#9198e5"),e.addColorStop(1,"#e66465"),s.background=e,s.add(Xt(),St(),T(),Mt());for(let t=0;t<=w.width;t+=50)s.add(O(t));return s.onUpdate=t=>{v+=t,v>H&&(s.add(T()),H=v+C(1,2)),v>L&&(s.add(O()),L=v+C(1,2))},s}w.start();w.scene=G();
