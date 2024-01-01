/** @param {import('@11ty/eleventy').UserConfig} config */
module.exports = function (config) {
  config.addNunjucksFilter(
    "monthAndYear",
    /**
     * @param {string} text
     */
    (text) => {
      const date = new Date(text);
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      return month + "/" + date.getFullYear();
    }
  );

  config.addNunjucksFilter(
    "dateText",
    /**
     * @param {string} text
     */
    (text) => {
      const date = new Date(text);
      const monthes = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre",
      ];
      return monthes[date.getMonth()] + " " + date.getFullYear();
    }
  );
};
