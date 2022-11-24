import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a{border:0px solid white\r\n}a#p2{border:10px solid red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"column"}" id="${"showcase"}"><img class="${"showcase"}" id="${"showcase_picture"}" src="${"../img/obscur.jpg"}">

    <div class="${"showcase"}" id="${"showcase_text"}"><h2 id="${"showcase_title"}">Fonte Obscur (2019)</h2>
       <div id="${"showcase_desc_wrapper"}"><p id="${"showcase_desc"}">\xC0 l\u2019origine destin\xE9e \xE0 n\u2019\xEAtre qu\u2019un titre pour le fanzine Obscure Process, j\u2019ai choisi de cr\xE9er une fonte compl\xE8te \xE0 partir
          des caract\xE8res de celui-ci, bas de casse, ponctuation et accents compris. La  Obscur  est, comme
          le fanzine, libre et open-source.<br> <br>Disponible sur mon <a style="${"color:indianred;"}" href="${"https://fontstruct.com/fontstructions/show/1610560/obscur"}">profil Fontstruct !
        </a></p></div></div>
</div>`;
});
export {
  Page as default
};
