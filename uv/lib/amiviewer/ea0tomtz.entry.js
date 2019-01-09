/*! Built with http://stenciljs.com */
const{h:e}=window.amiviewer,t={red:16711680,blue:255,background:0},r=e=>new Promise((t,r)=>{const i=new XMLHttpRequest;i.open("GET",e,!0),i.onload=(()=>{let e=JSON.parse(i.responseText);e=((e,t)=>t.map(t=>(e.endsWith("/")||(e+="/"),`${e}${t}`)))(e.baseurl,e.series),t(e)}),i.onerror=(()=>{r()}),i.send()});class i{watchHandler(){this.reset()}componentDidLoad(){this.reset()}reset(){console.log("setting up ami-viewer"),this._renderer=new THREE.WebGLRenderer({antialias:!0}),this._renderer.setSize(this._container.offsetWidth,this._container.offsetHeight),this._renderer.setClearColor(t.background,1),this._renderer.setPixelRatio(window.devicePixelRatio),this._container.appendChild(this._renderer.domElement);const e=new THREE.Scene;this._camera=new THREE.PerspectiveCamera(45,this._container.offsetWidth/this._container.offsetHeight,.1,1e3),this._camera.position.x=150,this._camera.position.y=150,this._camera.position.z=100;const i=new AMI.TrackballControl(this._camera,this._container);window.addEventListener("resize",()=>{this.resize()},!1),r(this.series).then(r=>{const s=new AMI.VolumeLoader(this._container);s.load(r).then(()=>{const r=s.data[0].mergeSeries(s.data)[0].stack[0];s.free();const n=new AMI.StackHelper(r);n.bbox.color=t.red,n.border.color=t.blue,e.add(n),this.onLoaded.emit(n);const a=n.stack.worldCenter();this._camera.lookAt(a.x,a.y,a.z),this._camera.updateProjectionMatrix(),i.target.set(a.x,a.y,a.z)}).catch(e=>{console.log("DICOM load error"),console.error(e)});const n=()=>{i.update(),this._renderer.render(e,this._camera),requestAnimationFrame(()=>{n()})};n()})}resize(){this._camera.aspect=this._container.offsetWidth/this._container.offsetHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.offsetWidth,this._container.offsetHeight)}render(){return e("div",{id:"container",ref:e=>this._container=e})}static get is(){return"ami-viewer"}static get encapsulation(){return"shadow"}static get properties(){return{reset:{method:!0},resize:{method:!0},series:{type:String,attr:"series",watchCallbacks:["watchHandler"]}}}static get events(){return[{name:"onLoaded",method:"onLoaded",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"#container{background-color:#000;left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%;overflow:hidden}#gui-container{position:fixed;top:10px;right:10px;z-index:1}"}}export{i as AmiViewer};