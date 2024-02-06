import{a as g,S as L,i as c}from"./assets/vendor-951421c8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const w="22033849-04a58a8d7b6d53f5d68e2165a";g.defaults.baseURL="https://pixabay.com/api/";async function y(a,e=1){const{data:s}=await g.get(`?key=${w}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${e}`);return s}const r={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),button:document.querySelector(".load-more")};function m(a){const e=a.map(({webformatURL:s,largeImageURL:n,tags:t,likes:o,views:i,comments:_,downloads:b})=>`<li class="gallery__item">
                <a class="gallery__link" href="${n}" >
                    <img class="gallery__img" src="${s}" alt="${t}" loading="lazy" />
                    <div class="gallery__info">
                        <p class="gallery__info__item">
                            <b>Likes</b>
                            ${o}
                        </p>
                        <p class="gallery__info__item">
                            <b>Views</b>
                            ${i}
                        </p>
                        <p class="gallery__info__item">
                            <b>Comments</b>
                            ${_}
                        </p>
                        <p class="gallery__info__item">
                            <b>Downloads</b>
                            ${b}
                        </p>
                    </div>
                </a>
            </li>`).join("");r.gallery.insertAdjacentHTML("beforeend",e)}function d(){r.form.reset(),r.gallery.innerHTML=""}let u="",l=1,f=0;const h=new L(".gallery__link"),p={message:"We're sorry, but you've reached the end of search results.",color:"#e34234"};c.settings({timeout:4e3,theme:"light",position:"topRight",progressBarColor:"#50ac86"});function v(a){u=a.target.value.trim()}async function $(a){if(a.preventDefault(),!!u)try{const{hits:e,totalHits:s}=await y(u);if(!e.length){d(),r.button.style.display="none",c.show({title:"❌",message:"Sorry, there are no images matching your search query.Please try again.",color:"#e34234"});return}f=s,l=1,c.show({title:"✅",message:`Hooray! We found ${s} images.`,color:"#85ff7a"}),d(),m(e),r.button.style.display="block",h.refresh(),Math.ceil(f/40)===l&&(r.button.style.display="none",c.show(p))}catch(e){console.log(e.message)}}async function S(a){a.preventDefault();try{l=l+1;const e=Math.ceil(f/40);if(e>=l){const{hits:s}=await y(u,l);m(s),h.refresh();const{height:n}=r.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}e<=l&&(r.button.style.display="none",c.show(p))}catch(e){console.log(e.message)}}r.form.addEventListener("submit",$);r.form.addEventListener("input",v);r.button.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map
