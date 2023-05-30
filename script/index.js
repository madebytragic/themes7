import { profileImage, links } from "./links.js";

function renderLinks(list) {
  const profileHTML = document.querySelector(".profile-image");
  const links = document.getElementById("links");

  profileHTML.setAttribute("src", profileImage);

  list.map((item) => {
    links.innerHTML += `
      <a class="link ${item.color}" href="${item.url}">
        ${item.name}
      </a>
    `;
  });
}

renderLinks(links);
