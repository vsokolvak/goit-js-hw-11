export function createGaleryItems(imagesInfo) {
  return imagesInfo.reduce((htmlMarcup, el) => {
    return (htmlMarcup += `
        <li class="gallery-item">
            <a class="gallery-link" href="${el.original}">
            <img class="gallery-image" src="${el.preview}"
            width="360" heihgt="200"
            alt="${el.description}"/>
            </a>
        </li>
        `);
  }, '');
}