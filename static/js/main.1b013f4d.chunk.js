(this.webpackJsonpsoundappreact=this.webpackJsonpsoundappreact||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(21),o=n.n(r),s=(n(74),n(75),n(38)),l=n(5),u=(n(19),n(32)),c=n(68),d=n(8),m=n(9),h=n(13),v=n(12),f=n(110),p=n(39),y=n.n(p),g=n(40),E=n.n(g),b=n(41),w=n.n(b),k=n(42),S=n.n(k),x=n(43),O=n.n(x),I=n(44),j=n.n(I),C=n(45),M=n.n(C),N=n(46),A=n.n(N),L=n(47),D=n.n(L),P=n(48),R=n.n(P),B=n(49),T=n.n(B),W=n(18),z=new(window.AudioContext||window.webkitAudioContext),F=new(function(){function e(){Object(d.a)(this,e),e.soundManager||(this.sounds={},this.playlist=[],this.finishedPlaying=[],e.soundManager=this)}return Object(m.a)(e,[{key:"addSound",value:function(e){this.sounds[e.name]=e}},{key:"endedHandler",value:function(e){this.finishedPlaying.push(!0)}},{key:"refreshPlaylist",value:function(){var e=this;this.playlist=[],this.finishedPlaying=[],Object.keys(this.sounds).map((function(t){var n=e.sounds[t],a=n.soundBuffer,i=z.createBufferSource();i.buffer=a,i.playbackRate.value=n.soundMods.speed,i.onended=e.endedHandler.bind(e),i.connect(n.gainNode).connect(z.destination),e.playlist.push(i)}))}},{key:"playSounds",value:function(){this.refreshPlaylist();var e,t=Object(W.a)(this.playlist);try{for(t.s();!(e=t.n()).done;){e.value.start()}}catch(n){t.e(n)}finally{t.f()}}},{key:"stopSounds",value:function(){var e,t=Object(W.a)(this.playlist);try{for(t.s();!(e=t.n()).done;){e.value.stop()}}catch(n){t.e(n)}finally{t.f()}}},{key:"isPlaying",value:function(){return this.finishedPlaying.length!=this.playlist.length}},{key:"removeSound",value:function(e){return!!this.sounds[e]&&(delete this.sounds[e],!0)}},{key:"clearSounds",value:function(){this.sounds={}}}]),e}()),H={China:new Audio(y.a),MillionDollar:new Audio(E.a),America:new Audio(w.a),Bigger:new Audio(S.a),Rich:new Audio(O.a),Ship:new Audio(j.a),Electro1:new Audio(M.a),Electro2:new Audio(A.a),Electro3:new Audio(T.a),Snare:new Audio(D.a),Dance:new Audio(R.a)},U={China:y.a,MillionDollar:E.a,America:w.a,Bigger:S.a,Rich:O.a,Ship:j.a,Electro1:M.a,Electro2:A.a,Electro3:T.a,Snare:D.a,Dance:R.a},G=n(76),J=n(79),Y=function(){function e(t,n,a,i){var r=this;Object(d.a)(this,e),this.id=t,this.pos=n,this.name=a,this.soundMods=i,this.gainNode=this.getGainNode(),this.color="hsl("+360*Math.random()+", 100%, 75%)",this.setUpAudio().then((function(e){r.soundBuffer=e})).catch((function(e){throw"Error while setting up Audio: "+e}))}return Object(m.a)(e,[{key:"setUpAudio",value:function(){var e=this,t=null;if(Object.keys(U).map((function(n){n.toLowerCase()==e.id.toLowerCase()&&(e.id=n,t=U[n])})),!t)throw"Invalid sound found: "+this.id;return G(t).then((function(t){if(e.soundMods.length){if(e.soundMods.interval){var n=t.duration+e.soundMods.interval*e.soundMods.speed-t.duration;t=J.resize(t,t.sampleRate*n)}var a=Math.ceil(e.soundMods.length/t.duration*e.soundMods.speed);t=J.repeat(t,a),t=J.resize(t,t.sampleRate*e.soundMods.length*e.soundMods.speed)}var i=e.pos*e.soundMods.speed;if(i){var r=z.createBuffer(1,z.sampleRate*i,z.sampleRate);t=J.concat(r,t)}var o=60*e.soundMods.speed;return t.duration>o&&(t=J.resize(t,t.sampleRate*o)),t}))}},{key:"getGainNode",value:function(){var e=z.createGain();return e.gain.value=this.soundMods.volume/100,e}}]),e}(),$=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={sounds:[]},a}return Object(m.a)(n,[{key:"onClick",value:function(e){e.play()}},{key:"componentDidMount",value:function(){for(var e=this,t=function(){var t=Object(c.a)(a[n],2),i=t[0],r=t[1];r.onloadeddata=function(){var e=r.duration,t={name:i,sound:r,duration:e};this.setState({sounds:[].concat(Object(u.a)(this.state.sounds),[t])})}.bind(e)},n=0,a=Object.entries(H);n<a.length;n++)t()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h3",null,"Click here to listen to sounds!"),i.a.createElement("div",{className:"flex-display buttons"},this.state.sounds.map((function(t){return i.a.createElement("div",{key:t.name},i.a.createElement(f.a,{onClick:function(){return e.onClick(t.sound)},variant:"info",size:"lg"},t.name),i.a.createElement("h6",null,i.a.createElement("small",{className:"text-muted"},"dur: ",Math.round(100*t.duration)/100,"s")))}))))}}]),n}(a.Component),V=n(23),Z=n(111);function _(e){if(e.startsWith("Add"))!function(e){var t=e.split(","),n=function(e){var t,n,a=e.split(" "),i=-1;if(5!=a.length||"as"!=a[1].trim()||"at"!=a[3])throw"Invalid Parameter in Add: "+e;t=q(a[0].replace("sound_","").trim()),n=q(a[2]),isNaN(a[4])||(i=parseFloat(a[4]));if(i<0||i>=60)throw"Invalid Parameter in Add: "+e;return{soundID:t,soundPos:i,soundName:n}}(t.shift()),a=function(e){var t,n={length:null,interval:null,volume:100,speed:1},a=Object(W.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;n=K(i,n)}}catch(r){a.e(r)}finally{a.f()}return n}(t),i=new Y(n.soundID,n.soundPos,n.soundName,a);F.addSound(i)}(e.replace("Add","").trim());else if(e.startsWith("Remove")){!function(e){if(!F.removeSound(e))throw"Invalid ID in Remove Sound: "+e}(q(e.replace("Remove","").trim()))}else{if(!e.startsWith("Restart"))throw"Invalid command found: "+e;if(e=e.replace("Restart","").trim())throw"Additional Parameter(s) Found in Restart Command: "+e;F.clearSounds()}}function q(e){if(!e.match(/^[A-Za-z0-9]+$/))throw"Invalid Sound ID specified: "+e;return e}function K(e,t){var n=e.trim().split(" ");if(0==n.length||1==n.length)throw"Invalid Effects: "+e;switch(n[0].trim()){case"length":if(2!=n.length&&4!=n.length)throw"Invalid Parameters in Length: "+n;if(t.length=Q(n[1]),4==n.length&&(t.interval=Q(n[3]),t.interval>=60||t.interval<=0))throw"Invalid Parameters in Interval: "+n;if(t.length>=60||t.length<=0)throw"Invalid Parameters in Length: "+n;break;case"volume":var a=parseInt(n[1]);if(2!=n.length||a<0||a>=300)throw"Invalid Parameters in Volume: "+n;t.volume=a;break;case"speed":if(2!=n.length)throw console.log(n),"Invalid Parameters in Speed: "+n;if(t.speed=Q(n[1]),t.speed<=0||t.speed>=3)throw console.log(n),"Invalid Parameters in Speed: "+n;break;default:throw"Invalid Effect Type: "+n}return t}function Q(e){try{return parseFloat(e)}catch(t){throw"Error while parsing float value: "+e}}var X=n(60),ee=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={soundLines:[]},a.containerRef=i.a.createRef(),a.getRectsInterval=void 0,a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getRectsInterval=setInterval((function(){var t=e.containerRef.current.getBoundingClientRect();e.setState({soundLines:e.getSoundLines(t)})}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.getRectsInterval)}},{key:"getSoundLines",value:function(e){return Object.keys(F.sounds).map((function(t,n){return i.a.createElement(ne,{sound:F.sounds[t],canvas:e,index:n+1,key:t})}))}},{key:"renderLines",value:function(){return Array(15).fill(null).map((function(e,t){return i.a.createElement(te,{left:6.7*t,index:t,key:t})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"soundTable"},i.a.createElement(ae,{soundList:F.sounds}),i.a.createElement("div",{className:"linesContainer",ref:this.containerRef},i.a.createElement("div",{className:"soundLabelPadding"}),this.renderLines(),this.state.soundLines))}}]),n}(a.Component),te=function(e){var t=e.left,n=e.index,a=parseInt(4*n);return i.a.createElement("div",{className:"verticalLine",style:{left:"".concat(t,"%")}},i.a.createElement("p",{className:"time"}," ",a))},ne=function(e){var t=e.sound,n=e.canvas,a=e.index,r=function(e,t,n){if(!e.soundBuffer)return[];var a=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=[],r=t.width/60,o=a+t.top,s=.05*t.height*n+.01*t.height,l=o+s,u=t.left+2+r*e.pos,c=r*e.soundMods.length,d=r*H[e.id].duration*e.soundMods.speed;e.soundMods.length&&!e.soundMods.interval&&(d=c);var m=u+d;m>=t.right&&(m=t.right-2);if(i.push({x0:u,x1:m,y:l}),e.soundMods.interval){var h=r*e.soundMods.interval,v=u+c;v>=t.right&&(v=t.right-2);for(var f=u+h;f<v;f+=h)m=f+d>=v?v:f+d,i.push({x0:f,x1:m,y:l})}return i}(t,n,a);return i.a.createElement("div",{className:"soundLineRow"},r.map((function(e){return i.a.createElement(X.Line,{key:"2",x0:e.x0,y0:e.y,x1:e.x1,y1:e.y,borderColor:t.color,borderWidth:5,borderStyle:"outset"})})))},ae=function(e){var t=e.soundList;return i.a.createElement("div",{className:"soundLabelContainer"},i.a.createElement("div",{className:"soundLabelPadding"},"Time"),Object.keys(t).map((function(e){return i.a.createElement("div",{key:e,className:"soundLabel"},e)})))};var ie=ee,re=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={playing:!1,display:"Play",time:0,start:0},a}return Object(m.a)(n,[{key:"playOrPause",value:function(){this.state.playing?this.stopSounds():this.playSounds()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=F.isPlaying();e||clearInterval(this.timer),this.setState({playing:e,display:e?"Stop":"Play"})}},{key:"playSounds",value:function(){var e=this;Object.keys(F.sounds).length&&(F.playSounds(),this.setState({time:0,start:Date.now()}),this.timer=setInterval((function(){return e.setState({time:Date.now()-e.state.start})}),10))}},{key:"stopSounds",value:function(){F.stopSounds(),clearInterval(this.timer)}},{key:"displayTime",value:function(){return Math.round(this.state.time/1e3*100)/100}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"timerContainer"},i.a.createElement(f.a,{onClick:function(){return e.playOrPause()},variant:"success",type:"button",style:{marginRight:"20px"}},this.state.display),i.a.createElement("div",{class:"timer"}," ",this.displayTime().toFixed(2)," seconds "))}}]),n}(a.Component),oe=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={commandOutput:[],commandInput:""},a.handleSubmit=a.handleSubmit.bind(Object(V.a)(a)),a.handleChange=a.handleChange.bind(Object(V.a)(a)),a}return Object(m.a)(n,[{key:"handleChange",value:function(e){this.setState({commandInput:e.target.value})}},{key:"handleSubmit",value:function(e){var t;e.preventDefault();try{!function(e){var t,n=e.split(";"),a=Object(W.a)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;(i=i.trim())&&_(i)}}catch(r){a.e(r)}finally{a.f()}}(this.state.commandInput),t={time:(new Date).toLocaleString(),text:e.target.DSLCommand.value,error:null}}catch(n){console.error(n),t={time:(new Date).toLocaleString(),text:e.target.DSLCommand.value,error:n}}this.setState({commandOutput:[].concat(Object(u.a)(this.state.commandOutput),[t])}),this.setState({commandInput:""})}},{key:"playSounds",value:function(){F.playSounds()}},{key:"render",value:function(){return i.a.createElement("div",{className:"allContent"},i.a.createElement("div",{className:"flex-child-input"},i.a.createElement("div",{className:"inputform"},i.a.createElement(Z.a,{onSubmit:this.handleSubmit},i.a.createElement(Z.a.Group,{controlId:"DSLCommand"},i.a.createElement(Z.a.Label,null,"Input DSL Command Here"),i.a.createElement(Z.a.Control,{as:"textarea",rows:"10",type:"text",name:"DSLCommand",value:this.state.commandInput,onChange:this.handleChange}),i.a.createElement(Z.a.Text,{className:"text-muted"},"Please enter DSL text commands here")),i.a.createElement(f.a,{variant:"info",type:"submit"},"Submit"))),i.a.createElement(re,null),i.a.createElement("br",null),i.a.createElement("h3",null,"Commands History"),i.a.createElement("div",{className:"commandsHistory"},0==this.state.commandOutput.length&&i.a.createElement("h5",null,i.a.createElement("small",{className:"text-muted"},"You have not executed any commands yet")),this.state.commandOutput.slice().reverse().map((function(e){return i.a.createElement("div",{key:e},!e.error&&i.a.createElement("h5",null,i.a.createElement("i",null,i.a.createElement("small",null,e.time)," "),i.a.createElement("small",null,e.text)),e.error&&i.a.createElement("h5",{className:"text-danger"},i.a.createElement("i",null,i.a.createElement("small",null,e.time)," "),i.a.createElement("small",null,e.error)))})))),i.a.createElement(ie,{class:"flex-child-table"}))}}]),n}(a.Component);var se=function(){return i.a.createElement("div",{className:"commands"},i.a.createElement($,null),i.a.createElement(oe,null))},le=n(112),ue=n(113),ce=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement(le.a,{bg:"info",expand:"lg"},i.a.createElement(le.a.Brand,{className:"text-white",href:"https://elvin-hwang.github.io/Audio-Mixer/#/"},"SOUNDAPP"),i.a.createElement(le.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(le.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav"},i.a.createElement(ue.a,null,i.a.createElement(ue.a.Link,{className:"d-inline p-2 text-white",href:"https://elvin-hwang.github.io/Audio-Mixer/#/commands"},"Commands"),i.a.createElement(ue.a.Link,{className:"d-inline p-2 text-white",href:"https://elvin-hwang.github.io/Audio-Mixer/#/dsl"},"Our DSL"))))}}]),n}(a.Component),de=n(114),me=n(66),he=n.n(me);var ve=function(){return i.a.createElement("div",{className:"inputform"},i.a.createElement(de.a,{class:"figurepic"},i.a.createElement(de.a.Image,{src:he.a}),i.a.createElement(de.a.Caption,null,"DSL Example")))};n(105);var fe=function(){return i.a.createElement(s.a,{basename:"/Audio-Mixer"},i.a.createElement("div",{className:"App"},i.a.createElement(ce,null),i.a.createElement("div",{className:"App-header"},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/",component:se,exact:!0}),i.a.createElement(l.a,{path:"/dsl",component:ve}),i.a.createElement(l.a,{path:"/commands",component:se})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/trump-China.7e47b475.wav"},40:function(e,t,n){e.exports=n.p+"static/media/trump-A-Million-Dollars.e0aac125.wav"},41:function(e,t,n){e.exports=n.p+"static/media/trump-America.87d2ed07.wav"},42:function(e,t,n){e.exports=n.p+"static/media/trump-bigger.3560f2cc.wav"},43:function(e,t,n){e.exports=n.p+"static/media/trump-Im-Really-Rich.fe46ed95.wav"},44:function(e,t,n){e.exports=n.p+"static/media/ship.ea8b7d4b.wav"},45:function(e,t,n){e.exports=n.p+"static/media/compressedElectro.aa03eaa2.wav"},46:function(e,t,n){e.exports=n.p+"static/media/oneFiveElectro.84c2a713.wav"},47:function(e,t,n){e.exports=n.p+"static/media/snare.9ed6ec41.wav"},48:function(e,t,n){e.exports=n.p+"static/media/dance.d317924b.wav"},49:function(e,t,n){e.exports=n.p+"static/media/loudElectro.5770293e.wav"},66:function(e,t,n){e.exports=n.p+"static/media/dsl.25222323.png"},69:function(e,t,n){e.exports=n(108)},74:function(e,t,n){},75:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.1b013f4d.chunk.js.map