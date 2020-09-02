import "./scss/base.scss";
import "./scss/typography.scss";

document.addEventListener("DOMContentLoaded", async (event) => {
  await fetch("metadata/catalog.json")
    .then(async (data) => await data.json())
    .then(async (json) => {
      const metadata = await json.metadata
        .filter(
          (v, i, a) => a.findIndex((t) => t.identifier === v.identifier) === i
        )
        .reverse();
      const releases = document.getElementById("releases");
      let i = 0;
      while (i < metadata.length) {
        let li = document.createElement("li"); 
        releases.appendChild(li);
        const identifier = metadata[i].identifier;
        const year = metadata[i].date.substring(0, 4);
        const creator = metadata[i].creator.toLowerCase().trim();
        const title = metadata[i].title.toLowerCase().trim();
        const url = `//archive.org/details/${identifier}`;
        const item = `<a target="_blank" href="${url}">${creator} - ${title}</a> [${identifier} | ${year}]`;
        li.id = identifier;
        li.innerHTML = item;        
        i++;
      }
    });
});
