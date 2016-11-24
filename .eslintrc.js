module.exports = {
    root: true,
    'extends': 'airbnb',
    plugins: [
        'import'
    ],
    rules: {
        'indent': ['error', 4],
        'import/no-unresolved': 0,
        'object-curly-spacing': ['error', 'never'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    }
};
