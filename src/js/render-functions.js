
export function createMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="list__item">
           <a href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" class="list__image"/>
          </a>
          <div class="info">
              <p class="info-item"><b>Likes: </b>${likes}</p>
              <p class="info-item"><b>Views: </b>${views}</p>
              <p class="info-item"><b>Comments:</b> ${comments}</p>
              <p class="info-item"><b>Downloads:</b> ${downloads}</p>
          </div>
      </li>
  `).join("");
}