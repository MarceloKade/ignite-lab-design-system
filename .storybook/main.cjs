module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },

  /* ## Caso o seu repositório esteja dentro de uma pasta descomente o comando abaixo*/

  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "nome-do-repositório";
    }
    return config;
  },
};
