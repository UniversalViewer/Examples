/*! Built with http://stenciljs.com */
const{h:e}=window.amiviewer,t=e=>e.split(",").map(e=>`https://cdn.rawgit.com/FNNDSC/data/master/dicom/adi_brain/${e}`),i={red:16711680,blue:255,background:0};class o{watchHandler(){this._reset()}componentDidLoad(){this._reset()}_reset(){console.log("setting up ami-viewer");const e=new THREE.WebGLRenderer({antialias:!0});e.setSize(this._container.offsetWidth,this._container.offsetHeight),e.setClearColor(i.background,1),e.setPixelRatio(window.devicePixelRatio),this._container.appendChild(e.domElement);const o=new THREE.Scene,n=new THREE.PerspectiveCamera(45,this._container.offsetWidth/this._container.offsetHeight,.1,1e3);n.position.x=150,n.position.y=150,n.position.z=100;const a=new AMI.TrackballControl(n,this._container);window.addEventListener("resize",()=>{n.aspect=this._container.offsetWidth/this._container.offsetHeight,n.updateProjectionMatrix(),e.setSize(this._container.offsetWidth,this._container.offsetHeight)},!1);const s=new AMI.VolumeLoader(this._container);s.load(t(this.files)).then(()=>{const e=s.data[0].mergeSeries(s.data)[0].stack[0];s.free();const t=new AMI.StackHelper(e);t.bbox.color=i.red,t.border.color=i.blue,o.add(t),this.onLoaded.emit(t);const r=t.stack.worldCenter();n.lookAt(r.x,r.y,r.z),n.updateProjectionMatrix(),a.target.set(r.x,r.y,r.z)}).catch(e=>{window.console.log("oops... something went wrong..."),window.console.log(e)});const r=()=>{a.update(),e.render(o,n),requestAnimationFrame(()=>{r()})};r()}render(){return e("div",{id:"container",ref:e=>this._container=e})}static get is(){return"ami-viewer"}static get encapsulation(){return"shadow"}static get properties(){return{files:{type:String,attr:"files",watchCallbacks:["watchHandler"]}}}static get events(){return[{name:"onLoaded",method:"onLoaded",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"#container.sc-ami-viewer{background-color:#000;left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%;overflow:hidden}#gui-container.sc-ami-viewer{position:fixed;top:10px;right:10px;z-index:1}"}}export{o as AmiViewer};