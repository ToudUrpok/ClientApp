module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended', 
        'standard-with-typescript', 
        'plugin:i18next/recommended', 
        'plugin:storybook/recommended'
    ],
    overrides: [{
        files: [
            '**/src/**/*.test.{ts,tsx}'
        ],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    plugins: [
        'react', 
        'i18next',
        'react-hooks'
    ],
    rules: {
        /* 'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'no-underscore-dangle': 'off' */
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['to', 'data-testid']
        }],
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',  //Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error'  //Checks effect dependencies
    }
}