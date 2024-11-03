
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46827902-d0f0ee0995e79e4196197bc56";


export function fetchData(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        q: query,
    });

    return fetch(`${BASE_URL}?${params.toString()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}
