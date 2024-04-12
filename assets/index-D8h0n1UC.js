function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CSA3EJBG.js","assets/index-L7MjDJbo.js","assets/index-BWfNZ9m-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-L7MjDJbo.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CSA3EJBG.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
