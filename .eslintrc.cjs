module.exports = {
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "vue/multi-word-component-names": [
            "error",
            {
                ignores: ["Create", "Dashboard", "Default", "Edit", "Index"],
            },
        ],
    },
};
