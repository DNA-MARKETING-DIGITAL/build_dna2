function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-fRBGF5UE.js","assets/index-L7MjDJbo.js","assets/index-BWfNZ9m-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-L7MjDJbo.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-fRBGF5UE.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
