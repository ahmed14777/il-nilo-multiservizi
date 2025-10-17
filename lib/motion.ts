export const fadeUp = (d=0)=>({ initial:{opacity:0,y:16}, animate:{opacity:1,y:0,transition:{duration:.45,delay:d}} });
export const scaleIn = (d=0)=>({ initial:{opacity:0,scale:.985}, animate:{opacity:1,scale:1,transition:{duration:.45,delay:d}} });
