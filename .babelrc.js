module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: false,
      },
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        useBuiltIns: 'usage',
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: 'usage',
      },
    ],
    ['@babel/preset-env'],
  ]
};