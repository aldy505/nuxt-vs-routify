module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'xo-space'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
};
