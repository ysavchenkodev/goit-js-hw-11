import{i as u,s as d,a as f}from"./assets/vendor-CMvHnXcL.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function g({id:t,comments:a,views:l,downloads:o,likes:e,largeImageURL:r,webformatURL:s,tags:m}){return`<li data-id=${t} class="gallery-card">
    <a href="${r}">
  <img
    loading="lazy"
    class="gallery-card__image"
    src="${s}"
    alt="${m}"
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
      <p class="gallery-card__text">${l}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Comments</h3>
      <p class="gallery-card__text">${a}</p>
    </li>

    <li class="gallery-card__item">
      <h3 class="gallery-card__title">Downloads</h3>
      <p class="gallery-card__text">${o}</p>
    </li>
  </ul>
</a></li>`}function h(t){return t.map(g).join("")}function y(){u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){u.error({title:"",message:"Something went wrong!"})}let n=null;function _(){n||(n=new d(".gallery a",{captionsData:"alt",captionDelay:250}))}function L(){n&&n.refresh()}function c(t){t.innerHTML=""}function b(t){t.classList.add("is-active")}function x(t){t.classList.remove("is-active")}function I(t,a){t.innerHTML=h(a)}const $=f.create({baseURL:"https://pixabay.com/api/"});function w(t){const a={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${t}`,orientation:"horizontal",safesearch:"true"};return $.get("",{params:a}).then(l=>l.data)}const i={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.querySelector(".loader")};_();i.formElem.addEventListener("submit",E);function E(t){t.preventDefault();const l={searchImg:new FormData(t.currentTarget).get("search-text")};c(i.listItemElem),l.searchImg.length!==0&&(b(i.loader),w(l.searchImg).then(e=>{if(e.hits.length===0){y(),c(i.listItemElem);return}I(i.listItemElem,e.hits),L()}).catch(e=>{p()}).finally(()=>{x(i.loader)}))}
//# sourceMappingURL=index.js.map
