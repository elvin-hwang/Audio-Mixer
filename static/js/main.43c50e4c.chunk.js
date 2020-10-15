(this.webpackJsonpsoundappreact=this.webpackJsonpsoundappreact||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),s=a.n(r),o=(a(74),a(75),a(38)),l=a(5),c=(a(19),a(32)),u=a(68),d=a(8),m=a(9),h=a(13),v=a(12),f=a(110),p=a(39),y=a.n(p),E=a(40),b=a.n(E),g=a(41),w=a.n(g),k=a(42),S=a.n(k),x=a(43),O=a.n(x),N=a(44),I=a.n(N),L=a(45),j=a.n(L),C=a(46),M=a.n(C),A=a(47),D=a.n(A),P=a(48),R=a.n(P),B=a(49),H=a.n(B),T=a(18),W=new(window.AudioContext||window.webkitAudioContext),z=new(function(){function e(){Object(d.a)(this,e),e.soundManager||(this.sounds={},this.playlist=[],this.finishedPlaying=[],e.soundManager=this)}return Object(m.a)(e,[{key:"addSound",value:function(e){this.sounds[e.name]=e}},{key:"endedHandler",value:function(e){this.finishedPlaying.push(!0)}},{key:"refreshPlaylist",value:function(){var e=this;this.playlist=[],this.finishedPlaying=[],Object.keys(this.sounds).map((function(t){var a=e.sounds[t],n=a.soundBuffer,i=W.createBufferSource();i.buffer=n,i.playbackRate.value=a.soundMods.speed,i.onended=e.endedHandler.bind(e),i.connect(a.gainNode).connect(W.destination),e.playlist.push(i)}))}},{key:"playSounds",value:function(){this.refreshPlaylist();var e,t=Object(T.a)(this.playlist);try{for(t.s();!(e=t.n()).done;){e.value.start()}}catch(a){t.e(a)}finally{t.f()}}},{key:"stopSounds",value:function(){var e,t=Object(T.a)(this.playlist);try{for(t.s();!(e=t.n()).done;){e.value.stop()}}catch(a){t.e(a)}finally{t.f()}}},{key:"isPlaying",value:function(){return this.finishedPlaying.length!=this.playlist.length}},{key:"removeSound",value:function(e){return!!this.sounds[e]&&(delete this.sounds[e],!0)}},{key:"clearSounds",value:function(){this.sounds={}}}]),e}()),F={China:new Audio(y.a),MillionDollar:new Audio(b.a),America:new Audio(w.a),Bigger:new Audio(S.a),Rich:new Audio(O.a),Ship:new Audio(I.a),Electro1:new Audio(j.a),Electro2:new Audio(M.a),Electro3:new Audio(H.a),Snare:new Audio(D.a),Dance:new Audio(R.a)},U={China:y.a,MillionDollar:b.a,America:w.a,Bigger:S.a,Rich:O.a,Ship:I.a,Electro1:j.a,Electro2:M.a,Electro3:H.a,Snare:D.a,Dance:R.a},G=a(76),J=a(79),Y=function(){function e(t,a,n,i){var r=this;Object(d.a)(this,e),this.id=t,this.pos=a,this.name=n,this.soundMods=i,this.gainNode=this.getGainNode(),this.color="hsl("+360*Math.random()+", 100%, 75%)",this.setUpAudio().then((function(e){r.soundBuffer=e})).catch((function(e){throw"Error while setting up Audio: "+e}))}return Object(m.a)(e,[{key:"setUpAudio",value:function(){var e=this,t=null;if(Object.keys(U).map((function(a){a.toLowerCase()==e.id.toLowerCase()&&(e.id=a,t=U[a])})),!t)throw"Invalid sound found: "+this.id;return G(t).then((function(t){if(e.soundMods.length){if(e.soundMods.interval){var a=t.duration+e.soundMods.interval*e.soundMods.speed-t.duration;t=J.resize(t,t.sampleRate*a)}var n=Math.ceil(e.soundMods.length/t.duration*e.soundMods.speed);t=J.repeat(t,n),t=J.resize(t,t.sampleRate*e.soundMods.length*e.soundMods.speed)}var i=e.pos*e.soundMods.speed;if(i){var r=W.createBuffer(1,W.sampleRate*i,W.sampleRate);t=J.concat(r,t)}var s=60*e.soundMods.speed;return t.duration>s&&(t=J.resize(t,t.sampleRate*s)),t}))}},{key:"getGainNode",value:function(){var e=W.createGain();return e.gain.value=this.soundMods.volume/100,e}}]),e}(),$=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={sounds:[]},n}return Object(m.a)(a,[{key:"onClick",value:function(e){e.play()}},{key:"componentDidMount",value:function(){for(var e=this,t=function(){var t=Object(u.a)(n[a],2),i=t[0],r=t[1];r.onloadeddata=function(){var e=r.duration,t={name:i,sound:r,duration:e};this.setState({sounds:[].concat(Object(c.a)(this.state.sounds),[t])})}.bind(e)},a=0,n=Object.entries(F);a<n.length;a++)t()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h3",null,"Click here to listen to sounds!"),i.a.createElement("div",{className:"flex-display buttons"},this.state.sounds.map((function(t){return i.a.createElement("div",{key:t.name},i.a.createElement(f.a,{onClick:function(){return e.onClick(t.sound)},variant:"info",size:"lg"},t.name),i.a.createElement("h6",null,i.a.createElement("small",{className:"text-muted"},"dur: ",Math.round(100*t.duration)/100,"s")))}))))}}]),a}(n.Component),V=a(23),Z=a(111);function _(e){if(e.startsWith("Add"))!function(e){var t=e.split(","),a=function(e){var t,a,n=e.split(" "),i=-1;if(5!=n.length||"as"!=n[1].trim()||"at"!=n[3])throw"Invalid Parameter in Add: "+e;t=q(n[0].replace("sound_","").trim()),a=q(n[2]),isNaN(n[4])||(i=parseFloat(n[4]));if(i<0||i>=60)throw"Invalid Parameter in Add: "+e;return{soundID:t,soundPos:i,soundName:a}}(t.shift()),n=function(e){var t,a={length:null,interval:null,volume:100,speed:1},n=Object(T.a)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;a=K(i,a)}}catch(r){n.e(r)}finally{n.f()}return a}(t),i=new Y(a.soundID,a.soundPos,a.soundName,n);z.addSound(i)}(e.replace("Add","").trim());else if(e.startsWith("Remove")){!function(e){if(!z.removeSound(e))throw"Invalid ID in Remove Sound: "+e}(q(e.replace("Remove","").trim()))}else{if(!e.startsWith("Restart"))throw"Invalid command found: "+e;if(e=e.replace("Restart","").trim())throw"Additional Parameter(s) Found in Restart Command: "+e;z.clearSounds()}}function q(e){if(!e.match(/^[A-Za-z0-9]+$/))throw"Invalid Sound ID specified: "+e;return e}function K(e,t){var a=e.trim().split(" ");if(0==a.length||1==a.length)throw"Invalid Effects: "+e;switch(a[0].trim()){case"length":if(2!=a.length&&4!=a.length)throw"Invalid Parameters in Length: "+a;if(t.length=Q(a[1]),4==a.length&&(t.interval=Q(a[3]),t.interval>=60||t.interval<=0))throw"Invalid Parameters in Interval: "+a;if(t.length>=60||t.length<=0)throw"Invalid Parameters in Length: "+a;break;case"volume":var n=parseInt(a[1]);if(2!=a.length||n<0||n>=300)throw"Invalid Parameters in Volume: "+a;t.volume=n;break;case"speed":if(2!=a.length)throw console.log(a),"Invalid Parameters in Speed: "+a;if(t.speed=Q(a[1]),t.speed<=0||t.speed>=3)throw console.log(a),"Invalid Parameters in Speed: "+a;break;default:throw"Invalid Effect Type: "+a}return t}function Q(e){try{return parseFloat(e)}catch(t){throw"Error while parsing float value: "+e}}var X=a(60),ee=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={soundLines:[]},n.containerRef=i.a.createRef(),n.getRectsInterval=void 0,n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getRectsInterval=setInterval((function(){var t=e.containerRef.current.getBoundingClientRect();e.setState({soundLines:e.getSoundLines(t)})}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.getRectsInterval)}},{key:"getSoundLines",value:function(e){return Object.keys(z.sounds).map((function(t,a){return i.a.createElement(ae,{sound:z.sounds[t],canvas:e,index:a+1,key:t})}))}},{key:"renderLines",value:function(){return Array(15).fill(null).map((function(e,t){return i.a.createElement(te,{left:6.7*t,index:t,key:t})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"soundTable"},i.a.createElement(ne,{soundList:z.sounds}),i.a.createElement("div",{className:"linesContainer",ref:this.containerRef},i.a.createElement("div",{className:"soundLabelPadding"}),this.renderLines(),this.state.soundLines))}}]),a}(n.Component),te=function(e){var t=e.left,a=e.index,n=parseInt(4*a);return i.a.createElement("div",{className:"verticalLine",style:{left:"".concat(t,"%")}},i.a.createElement("p",{className:"time"}," ",n))},ae=function(e){var t=e.sound,a=e.canvas,n=e.index,r=function(e,t,a){if(!e.soundBuffer)return[];var n=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=[],r=t.width/60,s=n+t.top,o=.05*t.height*a+.02*t.height,l=s+o,c=t.left+2+r*e.pos,u=r*e.soundMods.length,d=r*F[e.id].duration*e.soundMods.speed;e.soundMods.length&&!e.soundMods.interval&&(d=u);if(i.push({x0:c,x1:c+d,y:l}),e.soundMods.interval)for(var m=r*e.soundMods.interval,h=c+u,v=c+m;v<h;v+=m){var f=v+d>=h?h:v+d;i.push({x0:v,x1:f,y:l})}return i}(t,a,n);return i.a.createElement("div",{className:"soundLineRow"},r.map((function(e){return i.a.createElement(X.Line,{key:"2",x0:e.x0,y0:e.y,x1:e.x1,y1:e.y,borderColor:t.color,borderWidth:5,borderStyle:"outset"})})))},ne=function(e){var t=e.soundList;return i.a.createElement("div",{className:"soundLabelContainer"},i.a.createElement("div",{className:"soundLabelPadding"},"Time"),Object.keys(t).map((function(e){return i.a.createElement("div",{key:e,className:"soundLabel"},e)})),i.a.createElement("div",null),i.a.createElement("div",{className:"soundLabel"}),i.a.createElement("div",{className:"soundLabel"}),i.a.createElement("div",{className:"soundLabel"}),i.a.createElement("div",{className:"soundLabel"}),i.a.createElement("div",{className:"soundLabel"},"HO"),i.a.createElement("div",{className:"soundLabel"},"HO"),i.a.createElement("div",{className:"soundLabel"},"HO"),i.a.createElement("div",{className:"soundLabel"},"HO"))};var ie=ee,re=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={playing:!1,display:"Play",time:0,start:0},n}return Object(m.a)(a,[{key:"playOrPause",value:function(){this.state.playing?this.stopSounds():this.playSounds()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=z.isPlaying();e||clearInterval(this.timer),this.setState({playing:e,display:e?"Stop":"Play"})}},{key:"playSounds",value:function(){var e=this;Object.keys(z.sounds).length&&(z.playSounds(),this.setState({time:0,start:Date.now()}),this.timer=setInterval((function(){return e.setState({time:Date.now()-e.state.start})}),10))}},{key:"stopSounds",value:function(){z.stopSounds(),clearInterval(this.timer)}},{key:"displayTime",value:function(){return Math.round(this.state.time/1e3*100)/100}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"timerContainer"},i.a.createElement(f.a,{onClick:function(){return e.playOrPause()},variant:"success",type:"button",style:{marginRight:"20px"}},this.state.display),i.a.createElement("div",{class:"timer"}," ",this.displayTime().toFixed(2)," seconds "))}}]),a}(n.Component),se=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={commandOutput:[],commandInput:""},n.handleSubmit=n.handleSubmit.bind(Object(V.a)(n)),n.handleChange=n.handleChange.bind(Object(V.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({commandInput:e.target.value})}},{key:"handleSubmit",value:function(e){var t;e.preventDefault();try{!function(e){var t,a=e.split(";"),n=Object(T.a)(a);try{for(n.s();!(t=n.n()).done;){var i=t.value;(i=i.trim())&&_(i)}}catch(r){n.e(r)}finally{n.f()}}(this.state.commandInput),t={time:(new Date).toLocaleString(),text:e.target.DSLCommand.value,error:null}}catch(a){console.error(a),t={time:(new Date).toLocaleString(),text:e.target.DSLCommand.value,error:a}}this.setState({commandOutput:[].concat(Object(c.a)(this.state.commandOutput),[t])}),this.setState({commandInput:""})}},{key:"playSounds",value:function(){z.playSounds()}},{key:"render",value:function(){return i.a.createElement("div",{className:"allContent"},i.a.createElement("div",{className:"flex-child-input"},i.a.createElement("div",{className:"inputform"},i.a.createElement(Z.a,{onSubmit:this.handleSubmit},i.a.createElement(Z.a.Group,{controlId:"DSLCommand"},i.a.createElement(Z.a.Label,null,"Input DSL Command Here"),i.a.createElement(Z.a.Control,{as:"textarea",rows:"10",type:"text",name:"DSLCommand",value:this.state.commandInput,onChange:this.handleChange}),i.a.createElement(Z.a.Text,{className:"text-muted"},"Please enter DSL text commands here")),i.a.createElement(f.a,{variant:"info",type:"submit"},"Submit"))),i.a.createElement(re,null),i.a.createElement("br",null),i.a.createElement("h3",null,"Commands History"),i.a.createElement("div",{className:"commandsHistory"},0==this.state.commandOutput.length&&i.a.createElement("h5",null,i.a.createElement("small",{className:"text-muted"},"You have not executed any commands yet")),this.state.commandOutput.slice().reverse().map((function(e){return i.a.createElement("div",{key:e},!e.error&&i.a.createElement("h5",null,i.a.createElement("i",null,i.a.createElement("small",null,e.time)," "),i.a.createElement("small",null,e.text)),e.error&&i.a.createElement("h5",{className:"text-danger"},i.a.createElement("i",null,i.a.createElement("small",null,e.time)," "),i.a.createElement("small",null,e.error)))})))),i.a.createElement(ie,{class:"flex-child-table"}))}}]),a}(n.Component);var oe=function(){return i.a.createElement("div",{className:"commands"},i.a.createElement($,null),i.a.createElement(se,null))},le=a(112),ce=a(113),ue=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(le.a,{bg:"info",expand:"lg"},i.a.createElement(le.a.Brand,{className:"text-white",href:"https://elvin-hwang.github.io/Audio-Mixer/#"},"SOUNDAPP"),i.a.createElement(le.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(le.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav"},i.a.createElement(ce.a,null,i.a.createElement(ce.a.Link,{className:"d-inline p-2 text-white",href:"https://elvin-hwang.github.io/Audio-Mixer/#/commands"},"Commands"),i.a.createElement(ce.a.Link,{className:"d-inline p-2 text-white",href:"https://elvin-hwang.github.io/Audio-Mixer/#/dsl"},"Our DSL"))))}}]),a}(n.Component),de=a(114),me=a(66),he=a.n(me);var ve=function(){return i.a.createElement("div",{className:"inputform"},i.a.createElement(de.a,{class:"figurepic"},i.a.createElement(de.a.Image,{src:he.a}),i.a.createElement(de.a.Caption,null,"DSL Example")))};a(105);var fe=function(){return i.a.createElement(o.a,{basename:"/Audio-Mixer"},i.a.createElement("div",{className:"App"},i.a.createElement(ue,null),i.a.createElement("div",{className:"App-header"},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/",component:oe,exact:!0}),i.a.createElement(l.a,{path:"/dsl",component:ve}),i.a.createElement(l.a,{path:"/commands",component:oe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/trump-China.7e47b475.wav"},40:function(e,t,a){e.exports=a.p+"static/media/trump-A-Million-Dollars.e0aac125.wav"},41:function(e,t,a){e.exports=a.p+"static/media/trump-America.87d2ed07.wav"},42:function(e,t,a){e.exports=a.p+"static/media/trump-bigger.3560f2cc.wav"},43:function(e,t,a){e.exports=a.p+"static/media/trump-Im-Really-Rich.fe46ed95.wav"},44:function(e,t,a){e.exports=a.p+"static/media/ship.ea8b7d4b.wav"},45:function(e,t,a){e.exports=a.p+"static/media/compressedElectro.aa03eaa2.wav"},46:function(e,t,a){e.exports=a.p+"static/media/oneFiveElectro.84c2a713.wav"},47:function(e,t,a){e.exports=a.p+"static/media/snare.9ed6ec41.wav"},48:function(e,t,a){e.exports=a.p+"static/media/dance.d317924b.wav"},49:function(e,t,a){e.exports=a.p+"static/media/loudElectro.5770293e.wav"},66:function(e,t,a){e.exports=a.p+"static/media/dsl.25222323.png"},69:function(e,t,a){e.exports=a(108)},74:function(e,t,a){},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.43c50e4c.chunk.js.map