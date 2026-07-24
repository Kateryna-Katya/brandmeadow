/* empty css                      */import{S as w,A as m}from"./assets/vendor-hQW306sp.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const v=1440;let f=null,p=null,h=null;function L(){const o=document.querySelector(".records-swiper");!o||f||(f=new w(o,{modules:[m],slidesPerView:1,spaceBetween:16,speed:700,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}}))}function S(){const o=document.querySelector(".how-swiper");!o||p||(p=new w(o,{modules:[m],slidesPerView:1.5,spaceBetween:16,speed:700,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}}))}function E(){const o=document.querySelector(".reviews-swiper");!o||h||(h=new w(o,{modules:[m],slidesPerView:1,spaceBetween:16,speed:700,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}}))}function k(){f&&(f.destroy(!0,!0),f=null),p&&(p.destroy(!0,!0),p=null),h&&(h.destroy(!0,!0),h=null)}function y(){if(window.innerWidth<v){L(),S(),E();return}k()}y();window.addEventListener("resize",y);document.querySelectorAll(".faq-acc-el-trigger").forEach(o=>{o.addEventListener("click",()=>{const r=o.closest(".faq-acc-el"),c=r.querySelector(".faq-acc-el-descr-frame");r.classList.contains("open")?(r.classList.remove("open"),c.style.maxHeight="0"):(r.classList.add("open"),c.style.maxHeight=c.scrollHeight+"px")})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".menu-button"),r=o.querySelector(".icon"),c=document.querySelector(".modal"),d=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const a=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_510)">
    <path d="M4 6H20" stroke="#FFB020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 12H20" stroke="#FFB020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 18H20" stroke="#FFB020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_510">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,n=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_489)">
    <path d="M18 6L6 18" stroke="#FFB020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 6L18 18" stroke="#FFB020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_489">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;o.addEventListener("click",()=>{t=!t,r.innerHTML=t?n:a,t?i():s()}),d.forEach(u=>u.addEventListener("click",()=>{s(),r.innerHTML=a,t=!1})),window.addEventListener("scroll",l);function i(){c.style.display="block"}function s(){c.style.display="none"}function l(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function o(){const n=document.getElementById("site-header");return n?n.offsetHeight:0}function r(n){const i=document.getElementById(n);if(!i)return;const s=o(),l=i.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:l,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(n=>{n.addEventListener("click",function(i){const s=this.getAttribute("href");if(!s)return;const[l,u]=s.split("#");if(!u)return;const g=window.location.pathname.split("/").pop();!(l===""||l==="./"||l===g||l==="./"+g)||!document.getElementById(u)||(i.preventDefault(),r(u),t(u))})});const d=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(n){e.forEach(s=>s.classList.remove("active"));const i=document.querySelector(`.navigation-item a[href*="#${n}"]`);i&&i.closest(".navigation-item").classList.add("active")}function a(){const n=window.pageYOffset+o()+100;d.forEach(i=>{const s=i.offsetTop,l=s+i.offsetHeight;n>=s&&n<l&&t(i.id)})}if(window.addEventListener("scroll",a),window.location.hash){const n=window.location.hash.substring(1);setTimeout(()=>{r(n),t(n)},300)}});
//# sourceMappingURL=index.js.map
