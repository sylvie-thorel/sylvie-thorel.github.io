const footNotes = require("markdown-it-footnote");

/** @param {import('@11ty/eleventy').UserConfig} config */
module.exports = function (config) {
  config.amendLibrary("md", (mdLib) => {
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
      return ` <a href="#fnref${id}" class="footnote-backref" title="revenir plus haut" aira-label="revenir plus haut">\u21a9\uFE0E</a>`;
    };
  });
};
