module.exports = {


  friendlyName: 'Validate',


  description: 'Validate some json data against a schema.',


  extendedDescription: '',


  moreInfoUrl: 'https://www.npmjs.com/package/jsonschema',


  inputs: {

    data: {
      typeclass: '*',
      description: 'The data to validate (i.e. the "JSON instance")',
      required: true
    },

    schema: {
      typeclass: 'dictionary',
      description: 'The JSON-schema to validate against',
      required: true
    }

  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.'
    },

    success: {
      description: 'Done.'
    }

  },


  fn: function(inputs, exits) {
    var BaseValidator = require('jsonschema').Validator;
    var validator = new BaseValidator();
    var result = validator.validate(inputs.data, inputs.schema);
    return exits.success(result);
  },

};
