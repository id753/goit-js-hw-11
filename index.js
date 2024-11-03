import{i as a,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="46827902-d0f0ee0995e79e4196197bc56";function h(i){const o=new URLSearchParams({key:p,image_type:"photo",orientation:"horizontal",safesearch:!0,q:i});return fetch(`${m}?${o.toString()}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:u})=>`
      <li class="list__item">
           <a href="${r}">
              <img src="${o}" alt="${s}" class="list__image"/>
          </a>
          <div class="info">
              <p class="info-item"><b>Likes: </b>${e}</p>
              <p class="info-item"><b>Views: </b>${t}</p>
              <p class="info-item"><b>Comments:</b> ${n}</p>
              <p class="info-item"><b>Downloads:</b> ${u}</p>
          </div>
      </li>
  `).join("")}const g=document.querySelector(".form"),c=document.querySelector(".list"),l=document.querySelector("h1");function y(i){i.preventDefault();const o=i.target.elements.search.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}c.innerHTML="",l.textContent="Loading images, please wait...",h(o).then(r=>{r.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. </br> Please try again!",position:"topRight"}):(c.innerHTML=d(r.hits),new f(".list a",{captionDelay:250,captionsData:"alt"}).refresh())}).catch(r=>console.log(r)).finally(()=>{i.target.reset(),l.textContent=""})}g.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
