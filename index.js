import{i as n,s as u,a as f}from"./assets/vendor-CMvHnXcL.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g({id:t,comments:a,views:o,downloads:l,likes:e,largeImageURL:r,webformatURL:i,tags:d}){return`<li data-id=${t} class="gallery-card">
    <a href="${r}">
  <img
    loading="lazy"
    class="gallery-card__image"
    src="${i}"
    alt="${d}"
    width="360"
    height="240"
  />

  <ul class="gallery-card__info">
    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Likes</h3>
      <p class="gallery-card__text">${e}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Views</h3>
      <p class="gallery-card__text">${o}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Comments</h3>
      <p class="gallery-card__text">${a}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Downloads</h3>
      <p class="gallery-card__text">${l}</p>
    </li>
  </ul>
</a></li>`}function h(t){return t.map(g).join("")}function y(){n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){n.error({title:"",message:"Something went wrong!"})}let m;function _(){m=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){m.refresh()}function b(t){t.innerHTML=""}function w(t){t.classList.add("is-active")}function c(t){t.classList.remove("is-active")}const x=f.create({baseURL:"https://pixabay.com/api/"});function $(t){const a={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${t}`,orientation:"horizontal",safesearch:"true"};return x.get("",{params:a}).then(o=>o.data)}const s={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.querySelector(".loader")};_();s.formElem.addEventListener("submit",I);function I(t){t.preventDefault();const o={searchImg:new FormData(t.currentTarget).get("search-text")};w(s.loader),$(o.searchImg).then(l=>{if(c(s.loader),l.hits.length===0){y(),b(s.listItemElem);return}s.listItemElem.innerHTML=h(l.hits),L()}).catch(l=>{c(s.loader),p()})}
//# sourceMappingURL=index.js.map
