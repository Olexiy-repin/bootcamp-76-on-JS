export const createGalleryCardTemplate = ({ alt_description: alt, urls: { regular: src } }) => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${src}" alt="${alt}" />
  </li>
  `;
};

/*
<li class="posts-item">
  <h2 class="posts-title"></h2>
  <p class="posts-text"></p>
  <p class="posts-id">id:</p>
</li> 
*/

export const createPostCardTemplate = ({ title, body, id }) => {
  return `
  <li class="posts-item">
    <h2 class="posts-title">${title}</h2>
    <p class="posts-text">${body}</p>
    <p class="posts-id">id: ${id}</p>
  </li> 
  `;
};
