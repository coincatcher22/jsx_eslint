/**
 * @fileoverview Prevent missing parentheses around multilines JSX
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/wrap-multilines');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Code Snippets
// ------------------------------------------------------------------------------

var RETURN_SINGLE_LINE = '\
  var Hello = React.createClass({\
    render: function() {\
      return <p>Hello {this.props.name}</p>;\
    }\
  });';

var RETURN_PAREN = '\
  var Hello = React.createClass({\
    render: function() {\
      return (\n\
        <div>\n\
          <p>Hello {this.props.name}</p>\n\
        </div>\n\
      );\
    }\
  });';

var RETURN_NO_PAREN = '\
  var Hello = React.createClass({\
    render: function() {\
      return <div>\n\
        <p>Hello {this.props.name}</p>\n\
      </div>;\
    }\
  });';

var DECLARATION_SINGLE_LINE = 'var hello = <p>Hello</p>;';

var DECLARATION_PAREN = '\
  var hello = (\n\
    <div>\n\
      <p>Hello</p>\n\
    </div>\n\
  );';

var DECLARATION_NO_PAREN = '\
  var hello = <div>\n\
    <p>Hello</p>\n\
  </div>;';

var ASSIGNMENT_SINGLE_LINE = 'var hello; hello = <p>Hello</p>;';

var ASSIGNMENT_PAREN = '\
  var hello;\
  hello = (\n\
    <div>\n\
      <p>Hello</p>\n\
    </div>\n\
  );';

var ASSIGNMENT_NO_PAREN = '\
  var hello;\
  hello = <div>\n\
    <p>Hello</p>\n\
  </div>;';

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('wrap-multilines', rule, {

  valid: [
    {
      code: RETURN_SINGLE_LINE,
      ecmaFeatures: {jsx: true}
    }, {
      code: RETURN_PAREN,
      ecmaFeatures: {jsx: true}
    }, {
      code: RETURN_NO_PAREN,
      options: [{return: false}],
      ecmaFeatures: {jsx: true}
    }, {
      code: DECLARATION_SINGLE_LINE,
      ecmaFeatures: {jsx: true}
    }, {
      code: DECLARATION_PAREN,
      ecmaFeatures: {jsx: true}
    }, {
      code: DECLARATION_NO_PAREN,
      options: [{declaration: false}],
      ecmaFeatures: {jsx: true}
    }, {
      code: ASSIGNMENT_SINGLE_LINE,
      options: [{declaration: false}],
      ecmaFeatures: {jsx: true}
    }, {
      code: ASSIGNMENT_PAREN,
      ecmaFeatures: {jsx: true}
    }, {
      code: ASSIGNMENT_NO_PAREN,
      options: [{assignment: false}],
      ecmaFeatures: {jsx: true}
    }
  ],

  invalid: [
    {
      code: RETURN_NO_PAREN,
      ecmaFeatures: {jsx: true},
      errors: [{message: 'Missing parentheses around multilines JSX'}]
    }, {
      code: RETURN_NO_PAREN,
      ecmaFeatures: {jsx: true},
      options: [{return: true}],
      errors: [{message: 'Missing parentheses around multilines JSX'}]
    }, {
      code: DECLARATION_NO_PAREN,
      ecmaFeatures: {jsx: true},
      errors: [{message: 'Missing parentheses around multilines JSX'}]
    }, {
      code: DECLARATION_NO_PAREN,
      ecmaFeatures: {jsx: true},
      options: [{declaration: true}],
      errors: [{message: 'Missing parentheses around multilines JSX'}]
    }, {
      code: ASSIGNMENT_NO_PAREN,
      ecmaFeatures: {jsx: true},
      errors: [{message: 'Missing parentheses around multilines JSX'}]
    }, {
      code: ASSIGNMENT_NO_PAREN,
      ecmaFeatures: {jsx: true},
      options: [{assignment: true}],
      errors: [{message: 'Missing parentheses around multilines JSX'}]
    }
  ]
});
