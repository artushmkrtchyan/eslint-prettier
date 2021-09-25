// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreTrailingComments: true,
                ignoreComments: true,
                code: 120,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
            },
        ],
        semi: [2, 'always'],
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        indent: 'off',
        'require-jsdoc': 'off',
        'operator-linebreak': 'off',
        'valid-jsdoc': 'off',
        'space-before-function-paren': 'off',
        'prettier/prettier': 'error',
        'react/prop-types': 0,
        'linebreak-style': ['error', 'unix'],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
