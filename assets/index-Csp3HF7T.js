function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Connector-D8s8siH3.js","assets/CanvasUtils-B7OdrBZg.js","assets/index-L7MjDJbo.js","assets/index-BWfNZ9m-.css","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./index-L7MjDJbo.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-D8s8siH3.js"),__vite__mapDeps([0,1,2,3,4]));return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
