import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a{border:0px solid white\r\n}a#p2{border:10px solid red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"column"}" id="${"showcase"}"><img class="${"showcase"}" id="${"showcase_picture"}" src="${"https://gregoire.broadcastingfuture.online/img/carreau_04.jpg"}">

    <div class="${"showcase"}" id="${"showcase_text"}"><h2 id="${"showcase_title"}">Titre</h2>
       <div id="${"showcase_desc_wrapper"}"><p id="${"showcase_desc"}">Lotets
          Svelte is a radical new approach to building user interfaces. Whereas
          traditional frameworks like React and Vue do the bulk of their work in
          the browser, Svelte shifts that work into a compile step that happens
          when you build your app. Instead of using techniques like virtual DOM
          diffing, Svelte writes code that surgically updates the DOM when the
          state of your app changes.
        </p></div></div>
</div>`;
});
export {
  Page as default
};
