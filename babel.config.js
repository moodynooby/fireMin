module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        electron: '35.0.2'
      },
      modules: false // Important for tree shaking
    }]
  ],
  env: {
    // Special configuration for main process
    main: {
      plugins: [
        // This plugin helps with top-level return statements
        '@babel/plugin-syntax-top-level-await'
      ]
    }
  }
};