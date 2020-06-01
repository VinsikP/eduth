module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  scripts: {},
  plugins: [],
  installOptions: {
    rollup: {
      plugins: [require('rollup-plugin-svelte')()]
    }
  }
};
