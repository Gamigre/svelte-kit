import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><meta charset="${"UTF-8"}">
    <title>Gr\xE9goire Gamichon</title>
    <meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, viewport-fit=cover"}">
  
  <meta property="${"og:image"}" content="${"/src/routes/img/favicon.png"}">
  <meta property="${"og:title"}" content="${"Gr\xE9goire Gamichon"}">
  <meta property="${"og:description"}" content="${"Graphic/Motion designer sympa !"}">
  
    
    <link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Open+Sans:400,700"}">
        <link rel="${"stylesheet"}" href="${"https://cdn.plyr.io/3.4.6/plyr.css"}">
        <link rel="${"stylesheet"}" href="${"css/style.css"}">
    
        <link rel="${"shortcut icon"}" type="${"image/png"}" href="${"/src/routes/img/favicon.png"}"></head>
test`;
});
export {
  Page as default
};
