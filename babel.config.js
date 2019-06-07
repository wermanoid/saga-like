module.exports = api => {
  api.cache(true);

  return {
    ignore: ["**/node_modules/**"],
    sourceType: "unambiguous",
    compact: true,
    presets: [
      "@babel/typescript",
      [
        "@babel/env",
        {
          useBuiltIns: "usage",
          corejs: 3,
          targets: {
            browsers: "Last 2 Chrome versions, Firefox ESR",
            node: "8.14"
          }
        }
      ]
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-transform-runtime", { corejs: 3 }],
      [
        "transform-imports",
        {
          "lodash/fp": {
            transform: "lodash/fp/${member}",
            preventFullImport: true
          },
          lodash: {
            transform: "lodash/${member}",
            preventFullImport: true
          }
        }
      ]
    ]
  };
};
