module.exports = [
    // Ignore build and dependencies
    { ignores: ['dist/**', 'node_modules/**'] },
    // Language options
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
    },
    // Readability + React rules
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-console': 'warn',
            // Encourage explicit return types via clearer naming (placeholder for TS migration)
            'no-var': 'error',
            'prefer-const': ['error', { destructuring: 'all' }],
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-multi-assign': 'warn',
            'eqeqeq': ['error', 'smart'],
            'curly': ['error', 'all'],
            'arrow-body-style': ['warn', 'as-needed'],
            // limit anonymous complex callbacks inline
            'max-lines-per-function': ['warn', { max: 120, skipBlankLines: true, skipComments: true }],
            'complexity': ['warn', 12],
            'react/prop-types': 'off', // consider re-enabling or migrating to TS later
        },
    },
];
