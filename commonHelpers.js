import{a as g,i as c,S as y}from"./assets/vendor-951421c8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const b="22033849-04a58a8d7b6d53f5d68e2165a";g.defaults.baseURL="https://pixabay.com/api/";async function d(o,t=1){return(await g.get(`?key=${b}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${t}`)).data}const a={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),button:document.querySelector(".load-more")};function m(o){const t=o.map(({webformatURL:l,largeImageURL:s,tags:e,likes:r,views:n,comments:p,downloads:_})=>`<li class="gallery__item">
                <a class="gallery__link" href="${s}" >
                    <img class="gallery__img" src="${l}" alt="${e}" loading="lazy" />
                    <div class="gallery__info">
                        <p class="gallery__info__item">
                            <b>Likes</b>
                            ${r}
                        </p>
                        <p class="gallery__info__item">
                            <b>Views</b>
                            ${n}
                        </p>
                        <p class="gallery__info__item">
                            <b>Comments</b>
                            ${p}
                        </p>
                        <p class="gallery__info__item">
                            <b>Downloads</b>
                            ${_}
                        </p>
                    </div>
                </a>
            </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",t)}function f(){a.form.reset(),a.gallery.innerHTML=""}let u="",i=1,h=0;c.settings({close:!1,timeout:4e3,theme:"light",position:"topRight",progressBarColor:"#50ac86"});function L(o){u=o.target.value.trim()}async function v(o){if(o.preventDefault(),!!u)try{const{hits:t,totalHits:l}=await d(u);if(!t.length){f(),a.button.style.display="none",console.log("Sorry, there are no images matching your search query.Please try again."),c.show({title:"❌",message:"Sorry, there are no images matching your search query.Please try again.",color:"#e34234"});return}h=l,i=1,c.show({title:"✅",message:`Hooray! We found ${l} images.`,color:"#85ff7a"}),f(),m(t),a.button.style.display="block",new y(".gallery__link")}catch(t){console.log(t.message)}}async function w(o){o.preventDefault();try{if(i=i+1,Math.ceil(h/40)>=i){const{hits:l}=await d(u,i);m(l),new y(".gallery__link").refresh();const{height:s}=a.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}else a.button.style.display="none",console.log("We're sorry, but you've reached the end of search results."),c.show({title:"",message:"We're sorry, but you've reached the end of search results.",color:"#e34234"})}catch(t){console.log(t.message)}}a.form.addEventListener("submit",v);a.form.addEventListener("input",L);a.button.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
