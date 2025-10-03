module.exports = [
    // ignore build and deps
    { ignores: ['dist/**', 'node_modules/**'] },
    // basic language options
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
    },
    // rules
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-console': 'warn',
            'react/prop-types': 'off',
        },
    },
];
