document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("myModal"),n=t.querySelector(".modal-content"),e=document.getElementById("whitepaper__button"),o=document.getElementById("close"),c=function(){n.classList.remove("show-content")};n.addEventListener("transitionend",(function(){n.classList.contains("show-content")||(t.style.display="none",document.body.style.overflow="auto")})),e.onclick=function(){t.style.display="block",document.body.style.overflow="hidden",setTimeout((function(){n.classList.add("show-content")}),50)},o.onclick=c,window.onclick=function(n){n.target===t&&c()}}));
//# sourceMappingURL=index.a6ab8b23.js.map