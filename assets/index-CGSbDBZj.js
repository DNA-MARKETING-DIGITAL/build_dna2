function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-T6fRttys.js","assets/index-L7MjDJbo.js","assets/index-BWfNZ9m-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-L7MjDJbo.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-T6fRttys.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
