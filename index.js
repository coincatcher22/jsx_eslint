'use strict';

module.exports = {
  rules: {
    'jsx-uses-react': require('./lib/rules/jsx-uses-react'),
    'no-multi-comp': require('./lib/rules/no-multi-comp'),
    'prop-types': require('./lib/rules/prop-types'),
    'display-name': require('./lib/rules/display-name'),
    'wrap-multilines': require('./lib/rules/wrap-multilines'),
    'self-closing-comp': require('./lib/rules/self-closing-comp'),
    'no-danger': require('./lib/rules/no-danger'),
    'no-set-state': require('./lib/rules/no-set-state'),
    'no-is-mounted': require('./lib/rules/no-is-mounted'),
    'no-deprecated': require('./lib/rules/no-deprecated'),
    'no-did-mount-set-state': require('./lib/rules/no-did-mount-set-state'),
    'no-did-update-set-state': require('./lib/rules/no-did-update-set-state'),
    'react-in-jsx-scope': require('./lib/rules/react-in-jsx-scope'),
    'jsx-uses-vars': require('./lib/rules/jsx-uses-vars'),
    'jsx-handler-names': require('./lib/rules/jsx-handler-names'),
    'jsx-pascal-case': require('./lib/rules/jsx-pascal-case'),
    'jsx-no-bind': require('./lib/rules/jsx-no-bind'),
    'jsx-no-undef': require('./lib/rules/jsx-no-undef'),
    'no-unknown-property': require('./lib/rules/no-unknown-property'),
    'jsx-curly-spacing': require('./lib/rules/jsx-curly-spacing'),
    'jsx-equals-spacing': require('./lib/rules/jsx-equals-spacing'),
    'jsx-sort-props': require('./lib/rules/jsx-sort-props'),
    'sort-prop-types': require('./lib/rules/sort-prop-types'),
    'jsx-sort-prop-types': require('./lib/rules/jsx-sort-prop-types'),
    'jsx-boolean-value': require('./lib/rules/jsx-boolean-value'),
    'sort-comp': require('./lib/rules/sort-comp'),
    'require-extension': require('./lib/rules/require-extension'),
    'jsx-no-duplicate-props': require('./lib/rules/jsx-no-duplicate-props'),
    'jsx-max-props-per-line': require('./lib/rules/jsx-max-props-per-line'),
    'jsx-no-literals': require('./lib/rules/jsx-no-literals'),
    'jsx-indent-props': require('./lib/rules/jsx-indent-props'),
    'jsx-indent': require('./lib/rules/jsx-indent'),
    'jsx-closing-bracket-location': require('./lib/rules/jsx-closing-bracket-location'),
    'jsx-space-before-closing': require('./lib/rules/jsx-space-before-closing'),
    'no-direct-mutation-state': require('./lib/rules/no-direct-mutation-state'),
    'forbid-prop-types': require('./lib/rules/forbid-prop-types'),
    'prefer-es6-class': require('./lib/rules/prefer-es6-class'),
    'jsx-key': require('./lib/rules/jsx-key'),
    'no-string-refs': require('./lib/rules/no-string-refs')
  },
  rulesConfig: {
    'jsx-uses-react': 0,
    'no-multi-comp': 0,
    'prop-types': 0,
    'display-name': 0,
    'wrap-multilines': 0,
    'self-closing-comp': 0,
    'no-deprecated': 0,
    'no-danger': 0,
    'no-set-state': 0,
    'no-is-mounted': 0,
    'no-did-mount-set-state': 0,
    'no-did-update-set-state': 0,
    'react-in-jsx-scope': 0,
    'jsx-uses-vars': 1,
    'jsx-handler-names': 0,
    'jsx-pascal-case': 0,
    'jsx-no-bind': 0,
    'jsx-no-undef': 0,
    'no-unknown-property': 0,
    'jsx-curly-spacing': 0,
    'jsx-equals-spacing': 0,
    'jsx-sort-props': 0,
    'sort-prop-types': 0,
    'jsx-sort-prop-types': 0,
    'jsx-boolean-value': 0,
    'sort-comp': 0,
    'require-extension': 0,
    'jsx-no-duplicate-props': 0,
    'jsx-max-props-per-line': 0,
    'jsx-no-literals': 0,
    'jsx-indent-props': 0,
    'jsx-indent': 0,
    'jsx-closing-bracket-location': 0,
    'jsx-space-before-closing': 0,
    'no-direct-mutation-state': 0,
    'forbid-prop-types': 0,
    'prefer-es6-class': 0,
    'jsx-key': 0,
    'no-string-refs': 0
  }
};
