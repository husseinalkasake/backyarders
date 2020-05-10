module.exports = {
	parser: "babel-eslint",
	extends: ["airbnb"],
	rules: {
		"react/jsx-filename-extension": "off",

		// fixing conflicts with prettier formatting
		"no-tabs": "off",
		indent: "off",
		quotes: ["error", "double"],
		"react/jsx-indent-props": "off",
		"react/jsx-indent": "off",
		"tobject-curly-newline": "off",

		// personal preference (look into these later)
		"implicit-arrow-linebreak": "off",
		"prefer-destructuring": "off",
		"react/jsx-curly-newline": "off",
		"import/no-named-as-default-member": "off",
		"no-shadow": "off",
		"react/destructuring-assignment": "off",

		// TODO: TURN THIS ON AFTER ADDING PROP TYPES TO COMPONENTS
		"react/prop-types": "off",
	},
};
