import "./scss/base.scss";
import "./scss/loader.scss";
import "./scss/typography.scss";

import favico from "../assets/icons/favicon.ico";

document.addEventListener("DOMContentLoaded", async (event) => {
  await fetch("metadata/catalog.json")
    .then(async (data) => await data.json())
    .then(async (json) => {
      const metadata = await json.metadata
        .filter(
          (v, i, a) => a.findIndex((t) => t.identifier === v.identifier) === i
        );        
      const releases = document.getElementById("releases");
      let i = 0;
      while (i < metadata.length) {
        let article = document.createElement("article");
        releases.appendChild(article);
        const identifier = metadata[i].identifier;
        const year = metadata[i].date.substring(0, 4);
        const creator = metadata[i].creator.trim();
        const title = metadata[i].title.trim();
        const url = `//archive.org/details/${identifier}`;
        const item = `<a target="_blank" href="${url}">${creator} - ${title}</a> [${identifier} | ${year}]`;
        article.id = identifier;
        article.innerHTML = item;
        i++;
      }
    })
    .then(() => {
      const wrapper = document.getElementById("wrapper");      
      const loader = document.getElementById("loader");
      wrapper.style.display = "block";
      loader.style.display = "none";
    });
});
