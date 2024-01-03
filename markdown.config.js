const footNotes = require("markdown-it-footnote");
const eleventyImage = require("@11ty/eleventy-img");
const path = require("node:path");

/** @param {import('@11ty/eleventy').UserConfig} config */
module.exports = function (config) {
  config.amendLibrary("md", (mdLib) => {
    mdLib.renderer.rules.image = function (tokens, idx) {
      const token = tokens[idx];
      const file = token.attrGet("src");
      if (!file) return;
      const imgPath = path.join("src/images", file);
      const alt = token.content;
      const formats = ["webp", "auto"];
      const imageOptions = {
        widths: [400, 800],
        formats,
        outputDir: path.join(config.dir.output, "img"),
        urlPath: process.env.URL ?? "",
      };
      const metadata = eleventyImage.statsSync(imgPath, imageOptions);
      eleventyImage(imgPath, imageOptions);
      const imageAttributes = {
        alt,
        sizes: "(min-width:60rem) 66ch,80vw",
        loading: "lazy",
        decoding: "async",
      };
      return eleventyImage.generateHTML(metadata, imageAttributes);
    };

    mdLib.use(footNotes);
    mdLib.renderer.rules.footnote_caption = function (
      tokens,
      idx /*, options, env, slf */
    ) {
      let n = Number(tokens[idx].meta.id + 1).toString();
      if (tokens[idx].meta.subId > 0) n += `:${tokens[idx].meta.subId}`;
      return `${n}`;
    };
    mdLib.renderer.rules.footnote_anchor = function (
      tokens,
      idx,
      options,
      env,
      slf
    ) {
      let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
      if (tokens[idx].meta.subId > 0) id += `:${tokens[idx].meta.subId}`;
      return ` 
      <a href="#fnref${id}" class="footnote-backref" title="revenir plus haut" aira-label="revenir plus haut">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="1em" height="1em">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
        </svg>
      </a>`;
    };
  });
};
