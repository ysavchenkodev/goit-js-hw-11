import{i as m,s as d,a as g}from"./assets/vendor-CMvHnXcL.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function f({id:t,comments:a,views:l,downloads:s,likes:e,largeImageURL:r,webformatURL:i,tags:u}){return`<li data-id=${t} class="gallery-card">
    <a href="${r}">
  <img
    loading="lazy"
    class="gallery-card__image"
    src="${i}"
    alt="${u}"
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
      <p class="gallery-card__text">${s}</p>
    </li>
  </ul>
</a></li>`}function h(t){return t.map(f).join("")}function y(){m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){m.error({title:"",message:"Something went wrong!"})}function _(){new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function n(t){t.innerHTML=""}function L(t){t.classList.add("is-active")}function c(t){t.classList.remove("is-active")}function b(t,a){t.innerHTML=h(a)}const x=g.create({baseURL:"https://pixabay.com/api/"});function I(t){const a={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${t}`,orientation:"horizontal",safesearch:"true"};return x.get("",{params:a}).then(l=>l.data)}const o={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.querySelector(".loader")};o.formElem.addEventListener("submit",w);function w(t){t.preventDefault();const l={searchImg:new FormData(t.currentTarget).get("search-text")};n(o.listItemElem),l.searchImg.length!==0&&(L(o.loader),I(l.searchImg).then(e=>{if(c(o.loader),e.hits.length===0){y(),n(o.listItemElem);return}b(o.listItemElem,e.hits)}).then(e=>{_()}).catch(e=>{p()}).finally(c(o.loader)))}
//# sourceMappingURL=index.js.map
