module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true, // Agregar entorno de Node.js
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'react/prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect', // Detecta automáticamente la versión de React
        },
    },
};

