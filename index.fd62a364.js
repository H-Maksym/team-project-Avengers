const e=document.querySelectorAll(".anim-items");if(e.length>0){function t(){for(let t=0;t<e.length;t++){const i=e[t],o=i.offsetHeight,s=n(i).top,c=3;let l=window.innerHeight-o/c;o>window.innerHeight&&(l=window.innerHeight-window.innerHeight/c),pageYOffset>s-l&&pageYOffset<s+o?i.classList.add("active-js"):i.classList.contains("anim-items--nohide")||i.classList.remove("active-js")}}function n(e){const t=e.getBoundingClientRect(),n=window.pagexOffset||document.documentElement.scrollLeft,i=window.pageyOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+n}}window.addEventListener("scroll",t),setTimeout((()=>{t()}),300)}
//# sourceMappingURL=index.fd62a364.js.map
