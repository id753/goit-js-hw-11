
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./pixabay-api.js"; 
import { createMarkup } from "./render-functions.js"; 

const form = document.querySelector(".form");
const container = document.querySelector(".list"); 
const title = document.querySelector("h1");


function handleSearch(event) {
    event.preventDefault();
    const query = event.target.elements.search.value.trim(); 

    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please enter a search term!",
            position: "topRight",
        });
        return;
    }


    container.innerHTML = "";
    title.textContent = "Loading images, please wait...";

    fetchData(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. </br> Please try again!",
                    position: "topRight",
                });
            } else {
                container.innerHTML = createMarkup(data.hits); 

                const lightbox = new SimpleLightbox(".list a", {
                    captionDelay: 250,
                    captionsData: "alt",
                }); 

                lightbox.refresh(); 
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            event.target.reset();
            title.textContent = "";
        });
}


form.addEventListener("submit", handleSearch);
