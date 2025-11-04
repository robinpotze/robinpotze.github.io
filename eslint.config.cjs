module.exports = [
    { ignores: ['dist/**', 'node_modules/**'] },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
    },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-console': 'warn',
            'no-var': 'error',
            'prefer-const': ['error', { destructuring: 'all' }],
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-multi-assign': 'warn',
            'eqeqeq': ['error', 'smart'],
            'curly': ['error', 'all'],
            'arrow-body-style': ['warn', 'as-needed'],
            'max-lines-per-function': ['warn', { max: 120, skipBlankLines: true, skipComments: true }],
            'complexity': ['warn', 12],
            'react/prop-types': 'off',
        },
    },
];
