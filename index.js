import{i as d,S as m,a as f}from"./assets/vendor-DN40FzTu.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function g({id:t,comments:a,views:l,downloads:s,likes:e,largeImageURL:r,webformatURL:o,tags:u}){return`<li data-id=${t} class="gallery-card">
    <a href="${r}">
  <img
    loading="lazy"
    class="gallery-card__image"
    src="${o}"
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
</a></li>`}function h(t){return t.map(g).join("")}function y(){d.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){d.error({title:"",message:"Something went wrong!"})}let c=null;function _(t,a){t.hasAttribute("data-gallery")||t.setAttribute("data-gallery",""),t.innerHTML=h(a),c||(c=new m("[data-gallery] a",{captionsData:"alt",captionDelay:250})),c.refresh()}function n(t){t.innerHTML=""}function b(t){t.classList.add("is-active")}function L(t){t.classList.remove("is-active")}const x=f.create({baseURL:"https://pixabay.com/api/"});function I(t){const a={key:"35198109-82bb50fce237d8abfec2ac917",image_type:"photo",q:`${t}`,orientation:"horizontal",safesearch:"true"};return x.get("",{params:a}).then(l=>l.data)}const i={listItemElem:document.querySelector(".gallery"),formElem:document.querySelector(".form"),loader:document.querySelector(".loader")};i.formElem.addEventListener("submit",$);function $(t){t.preventDefault();const l={searchImg:new FormData(t.currentTarget).get("search-text")};n(i.listItemElem),l.searchImg.length!==0&&(b(i.loader),I(l.searchImg).then(e=>{if(e.hits.length===0){y(),n(i.listItemElem);return}_(i.listItemElem,e.hits)}).catch(e=>{p()}).finally(()=>{L(i.loader)}))}
//# sourceMappingURL=index.js.map
