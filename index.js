import{i as u,s as g,a as f}from"./assets/vendor-CMvHnXcL.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function h({id:t,comments:a,views:l,downloads:s,likes:e,largeImageURL:r,webformatURL:i,tags:d}){return L(),`<li data-id=${t} class="gallery-card">
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
</a></li>`}function y(t){return t.map(h).join("")}function p(){u.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function _(){u.error({title:"",message:"Something went wrong!"})}let c;function L(){c=new g(".gallery a",{captionsData:"alt",captionDelay:250}),c.refresh()}function n(t){t.innerHTML=""}function b(t){t.classList.add("is-active")}function m(t){t.classList.remove("is-active")}function I(t,a){t.innerHTML=y(a)}const w=f.create({baseURL:"https://pixabay.com/api/"});function x(t){const a={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${t}`,orientation:"horizontal",safesearch:"true"};return w.get("",{params:a}).then(l=>l.data)}const o={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.querySelector(".loader")};o.formElem.addEventListener("submit",$);function $(t){t.preventDefault();const l={searchImg:new FormData(t.currentTarget).get("search-text")};n(o.listItemElem),l.searchImg.length!==0&&(b(o.loader),x(l.searchImg).then(e=>{if(m(o.loader),e.hits.length===0){p(),n(o.listItemElem);return}I(o.listItemElem,e.hits)}).catch(e=>{m(o.loader),_()}))}
//# sourceMappingURL=index.js.map
