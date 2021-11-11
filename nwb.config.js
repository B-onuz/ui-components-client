module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'BonuzUiComponents',
      externals: {
        react: 'React',
      },
    },
  },
}
