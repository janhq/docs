"use strict";
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 89578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $schema: () => (/* binding */ t),
/* harmony export */   additionalProperties: () => (/* binding */ p),
/* harmony export */   "default": () => (/* binding */ m),
/* harmony export */   definitions: () => (/* binding */ a),
/* harmony export */   id: () => (/* binding */ i),
/* harmony export */   patternProperties: () => (/* binding */ s),
/* harmony export */   properties: () => (/* binding */ o),
/* harmony export */   required: () => (/* binding */ n),
/* harmony export */   title: () => (/* binding */ e),
/* harmony export */   type: () => (/* binding */ r)
/* harmony export */ });
const e = "A JSON Schema for Swagger 2.0 API.", i = "http://swagger.io/v2/schema.json#", t = "http://json-schema.org/draft-04/schema#", r = "object", n = [
  "swagger",
  "info",
  "paths"
], p = !1, s = {
  "^x-": {
    $ref: "#/definitions/vendorExtension"
  }
}, o = {
  swagger: {
    type: "string",
    enum: [
      "2.0"
    ],
    description: "The Swagger version of this document."
  },
  info: {
    $ref: "#/definitions/info"
  },
  host: {
    type: "string",
    pattern: "^[^{}/ :\\\\]+(?::\\d+)?$",
    description: "The host (name or ip) of the API. Example: 'swagger.io'"
  },
  basePath: {
    type: "string",
    pattern: "^/",
    description: "The base path to the API. Example: '/api'."
  },
  schemes: {
    $ref: "#/definitions/schemesList"
  },
  consumes: {
    description: "A list of MIME types accepted by the API.",
    allOf: [
      {
        $ref: "#/definitions/mediaTypeList"
      }
    ]
  },
  produces: {
    description: "A list of MIME types the API can produce.",
    allOf: [
      {
        $ref: "#/definitions/mediaTypeList"
      }
    ]
  },
  paths: {
    $ref: "#/definitions/paths"
  },
  definitions: {
    $ref: "#/definitions/definitions"
  },
  parameters: {
    $ref: "#/definitions/parameterDefinitions"
  },
  responses: {
    $ref: "#/definitions/responseDefinitions"
  },
  security: {
    $ref: "#/definitions/security"
  },
  securityDefinitions: {
    $ref: "#/definitions/securityDefinitions"
  },
  tags: {
    type: "array",
    items: {
      $ref: "#/definitions/tag"
    },
    uniqueItems: !0
  },
  externalDocs: {
    $ref: "#/definitions/externalDocs"
  }
}, a = {
  info: {
    type: "object",
    description: "General information about the API.",
    required: [
      "version",
      "title"
    ],
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      title: {
        type: "string",
        description: "A unique and precise title of the API."
      },
      version: {
        type: "string",
        description: "A semantic version number of the API."
      },
      description: {
        type: "string",
        description: "A longer description of the API. Should be different from the title.  GitHub Flavored Markdown is allowed."
      },
      termsOfService: {
        type: "string",
        description: "The terms of service for the API."
      },
      contact: {
        $ref: "#/definitions/contact"
      },
      license: {
        $ref: "#/definitions/license"
      }
    }
  },
  contact: {
    type: "object",
    description: "Contact information for the owners of the API.",
    additionalProperties: !1,
    properties: {
      name: {
        type: "string",
        description: "The identifying name of the contact person/organization."
      },
      url: {
        type: "string",
        description: "The URL pointing to the contact information.",
        format: "uri"
      },
      email: {
        type: "string",
        description: "The email address of the contact person/organization.",
        format: "email"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  license: {
    type: "object",
    required: [
      "name"
    ],
    additionalProperties: !1,
    properties: {
      name: {
        type: "string",
        description: "The name of the license type. It's encouraged to use an OSI compatible license."
      },
      url: {
        type: "string",
        description: "The URL pointing to the license.",
        format: "uri"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  paths: {
    type: "object",
    description: "Relative paths to the individual endpoints. They must be relative to the 'basePath'.",
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      },
      "^/": {
        $ref: "#/definitions/pathItem"
      }
    },
    additionalProperties: !1
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#/definitions/schema"
    },
    description: "One or more JSON objects describing the schemas being consumed and produced by the API."
  },
  parameterDefinitions: {
    type: "object",
    additionalProperties: {
      $ref: "#/definitions/parameter"
    },
    description: "One or more JSON representations for parameters"
  },
  responseDefinitions: {
    type: "object",
    additionalProperties: {
      $ref: "#/definitions/response"
    },
    description: "One or more JSON representations for responses"
  },
  externalDocs: {
    type: "object",
    additionalProperties: !1,
    description: "information about external documentation",
    required: [
      "url"
    ],
    properties: {
      description: {
        type: "string"
      },
      url: {
        type: "string",
        format: "uri"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  examples: {
    type: "object",
    additionalProperties: !0
  },
  mimeType: {
    type: "string",
    description: "The MIME type of the HTTP message."
  },
  operation: {
    type: "object",
    required: [
      "responses"
    ],
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      tags: {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: !0
      },
      summary: {
        type: "string",
        description: "A brief summary of the operation."
      },
      description: {
        type: "string",
        description: "A longer description of the operation, GitHub Flavored Markdown is allowed."
      },
      externalDocs: {
        $ref: "#/definitions/externalDocs"
      },
      operationId: {
        type: "string",
        description: "A unique identifier of the operation."
      },
      produces: {
        description: "A list of MIME types the API can produce.",
        allOf: [
          {
            $ref: "#/definitions/mediaTypeList"
          }
        ]
      },
      consumes: {
        description: "A list of MIME types the API can consume.",
        allOf: [
          {
            $ref: "#/definitions/mediaTypeList"
          }
        ]
      },
      parameters: {
        $ref: "#/definitions/parametersList"
      },
      responses: {
        $ref: "#/definitions/responses"
      },
      schemes: {
        $ref: "#/definitions/schemesList"
      },
      deprecated: {
        type: "boolean",
        default: !1
      },
      security: {
        $ref: "#/definitions/security"
      }
    }
  },
  pathItem: {
    type: "object",
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      $ref: {
        type: "string"
      },
      get: {
        $ref: "#/definitions/operation"
      },
      put: {
        $ref: "#/definitions/operation"
      },
      post: {
        $ref: "#/definitions/operation"
      },
      delete: {
        $ref: "#/definitions/operation"
      },
      options: {
        $ref: "#/definitions/operation"
      },
      head: {
        $ref: "#/definitions/operation"
      },
      patch: {
        $ref: "#/definitions/operation"
      },
      parameters: {
        $ref: "#/definitions/parametersList"
      }
    }
  },
  responses: {
    type: "object",
    description: "Response objects names can either be any valid HTTP status code or 'default'.",
    minProperties: 1,
    additionalProperties: !1,
    patternProperties: {
      "^([0-9]{3})$|^(default)$": {
        $ref: "#/definitions/responseValue"
      },
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    not: {
      type: "object",
      additionalProperties: !1,
      patternProperties: {
        "^x-": {
          $ref: "#/definitions/vendorExtension"
        }
      }
    }
  },
  responseValue: {
    oneOf: [
      {
        $ref: "#/definitions/response"
      },
      {
        $ref: "#/definitions/jsonReference"
      }
    ]
  },
  response: {
    type: "object",
    required: [
      "description"
    ],
    properties: {
      description: {
        type: "string"
      },
      schema: {
        oneOf: [
          {
            $ref: "#/definitions/schema"
          },
          {
            $ref: "#/definitions/fileSchema"
          }
        ]
      },
      headers: {
        $ref: "#/definitions/headers"
      },
      examples: {
        $ref: "#/definitions/examples"
      }
    },
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  headers: {
    type: "object",
    additionalProperties: {
      $ref: "#/definitions/header"
    }
  },
  header: {
    type: "object",
    additionalProperties: !1,
    required: [
      "type"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "string",
          "number",
          "integer",
          "boolean",
          "array"
        ]
      },
      format: {
        type: "string"
      },
      items: {
        $ref: "#/definitions/primitivesItems"
      },
      collectionFormat: {
        $ref: "#/definitions/collectionFormat"
      },
      default: {
        $ref: "#/definitions/default"
      },
      maximum: {
        $ref: "#/definitions/maximum"
      },
      exclusiveMaximum: {
        $ref: "#/definitions/exclusiveMaximum"
      },
      minimum: {
        $ref: "#/definitions/minimum"
      },
      exclusiveMinimum: {
        $ref: "#/definitions/exclusiveMinimum"
      },
      maxLength: {
        $ref: "#/definitions/maxLength"
      },
      minLength: {
        $ref: "#/definitions/minLength"
      },
      pattern: {
        $ref: "#/definitions/pattern"
      },
      maxItems: {
        $ref: "#/definitions/maxItems"
      },
      minItems: {
        $ref: "#/definitions/minItems"
      },
      uniqueItems: {
        $ref: "#/definitions/uniqueItems"
      },
      enum: {
        $ref: "#/definitions/enum"
      },
      multipleOf: {
        $ref: "#/definitions/multipleOf"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  vendorExtension: {
    description: "Any property starting with x- is valid.",
    additionalProperties: !0,
    additionalItems: !0
  },
  bodyParameter: {
    type: "object",
    required: [
      "name",
      "in",
      "schema"
    ],
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      description: {
        type: "string",
        description: "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
      },
      name: {
        type: "string",
        description: "The name of the parameter."
      },
      in: {
        type: "string",
        description: "Determines the location of the parameter.",
        enum: [
          "body"
        ]
      },
      required: {
        type: "boolean",
        description: "Determines whether or not this parameter is required or optional.",
        default: !1
      },
      schema: {
        $ref: "#/definitions/schema"
      }
    },
    additionalProperties: !1
  },
  headerParameterSubSchema: {
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      required: {
        type: "boolean",
        description: "Determines whether or not this parameter is required or optional.",
        default: !1
      },
      in: {
        type: "string",
        description: "Determines the location of the parameter.",
        enum: [
          "header"
        ]
      },
      description: {
        type: "string",
        description: "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
      },
      name: {
        type: "string",
        description: "The name of the parameter."
      },
      type: {
        type: "string",
        enum: [
          "string",
          "number",
          "boolean",
          "integer",
          "array"
        ]
      },
      format: {
        type: "string"
      },
      items: {
        $ref: "#/definitions/primitivesItems"
      },
      collectionFormat: {
        $ref: "#/definitions/collectionFormat"
      },
      default: {
        $ref: "#/definitions/default"
      },
      maximum: {
        $ref: "#/definitions/maximum"
      },
      exclusiveMaximum: {
        $ref: "#/definitions/exclusiveMaximum"
      },
      minimum: {
        $ref: "#/definitions/minimum"
      },
      exclusiveMinimum: {
        $ref: "#/definitions/exclusiveMinimum"
      },
      maxLength: {
        $ref: "#/definitions/maxLength"
      },
      minLength: {
        $ref: "#/definitions/minLength"
      },
      pattern: {
        $ref: "#/definitions/pattern"
      },
      maxItems: {
        $ref: "#/definitions/maxItems"
      },
      minItems: {
        $ref: "#/definitions/minItems"
      },
      uniqueItems: {
        $ref: "#/definitions/uniqueItems"
      },
      enum: {
        $ref: "#/definitions/enum"
      },
      multipleOf: {
        $ref: "#/definitions/multipleOf"
      }
    }
  },
  queryParameterSubSchema: {
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      required: {
        type: "boolean",
        description: "Determines whether or not this parameter is required or optional.",
        default: !1
      },
      in: {
        type: "string",
        description: "Determines the location of the parameter.",
        enum: [
          "query"
        ]
      },
      description: {
        type: "string",
        description: "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
      },
      name: {
        type: "string",
        description: "The name of the parameter."
      },
      allowEmptyValue: {
        type: "boolean",
        default: !1,
        description: "allows sending a parameter by name only or with an empty value."
      },
      type: {
        type: "string",
        enum: [
          "string",
          "number",
          "boolean",
          "integer",
          "array"
        ]
      },
      format: {
        type: "string"
      },
      items: {
        $ref: "#/definitions/primitivesItems"
      },
      collectionFormat: {
        $ref: "#/definitions/collectionFormatWithMulti"
      },
      default: {
        $ref: "#/definitions/default"
      },
      maximum: {
        $ref: "#/definitions/maximum"
      },
      exclusiveMaximum: {
        $ref: "#/definitions/exclusiveMaximum"
      },
      minimum: {
        $ref: "#/definitions/minimum"
      },
      exclusiveMinimum: {
        $ref: "#/definitions/exclusiveMinimum"
      },
      maxLength: {
        $ref: "#/definitions/maxLength"
      },
      minLength: {
        $ref: "#/definitions/minLength"
      },
      pattern: {
        $ref: "#/definitions/pattern"
      },
      maxItems: {
        $ref: "#/definitions/maxItems"
      },
      minItems: {
        $ref: "#/definitions/minItems"
      },
      uniqueItems: {
        $ref: "#/definitions/uniqueItems"
      },
      enum: {
        $ref: "#/definitions/enum"
      },
      multipleOf: {
        $ref: "#/definitions/multipleOf"
      }
    }
  },
  formDataParameterSubSchema: {
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      required: {
        type: "boolean",
        description: "Determines whether or not this parameter is required or optional.",
        default: !1
      },
      in: {
        type: "string",
        description: "Determines the location of the parameter.",
        enum: [
          "formData"
        ]
      },
      description: {
        type: "string",
        description: "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
      },
      name: {
        type: "string",
        description: "The name of the parameter."
      },
      allowEmptyValue: {
        type: "boolean",
        default: !1,
        description: "allows sending a parameter by name only or with an empty value."
      },
      type: {
        type: "string",
        enum: [
          "string",
          "number",
          "boolean",
          "integer",
          "array",
          "file"
        ]
      },
      format: {
        type: "string"
      },
      items: {
        $ref: "#/definitions/primitivesItems"
      },
      collectionFormat: {
        $ref: "#/definitions/collectionFormatWithMulti"
      },
      default: {
        $ref: "#/definitions/default"
      },
      maximum: {
        $ref: "#/definitions/maximum"
      },
      exclusiveMaximum: {
        $ref: "#/definitions/exclusiveMaximum"
      },
      minimum: {
        $ref: "#/definitions/minimum"
      },
      exclusiveMinimum: {
        $ref: "#/definitions/exclusiveMinimum"
      },
      maxLength: {
        $ref: "#/definitions/maxLength"
      },
      minLength: {
        $ref: "#/definitions/minLength"
      },
      pattern: {
        $ref: "#/definitions/pattern"
      },
      maxItems: {
        $ref: "#/definitions/maxItems"
      },
      minItems: {
        $ref: "#/definitions/minItems"
      },
      uniqueItems: {
        $ref: "#/definitions/uniqueItems"
      },
      enum: {
        $ref: "#/definitions/enum"
      },
      multipleOf: {
        $ref: "#/definitions/multipleOf"
      }
    }
  },
  pathParameterSubSchema: {
    additionalProperties: !1,
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    required: [
      "required"
    ],
    properties: {
      required: {
        type: "boolean",
        enum: [
          !0
        ],
        description: "Determines whether or not this parameter is required or optional."
      },
      in: {
        type: "string",
        description: "Determines the location of the parameter.",
        enum: [
          "path"
        ]
      },
      description: {
        type: "string",
        description: "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
      },
      name: {
        type: "string",
        description: "The name of the parameter."
      },
      type: {
        type: "string",
        enum: [
          "string",
          "number",
          "boolean",
          "integer",
          "array"
        ]
      },
      format: {
        type: "string"
      },
      items: {
        $ref: "#/definitions/primitivesItems"
      },
      collectionFormat: {
        $ref: "#/definitions/collectionFormat"
      },
      default: {
        $ref: "#/definitions/default"
      },
      maximum: {
        $ref: "#/definitions/maximum"
      },
      exclusiveMaximum: {
        $ref: "#/definitions/exclusiveMaximum"
      },
      minimum: {
        $ref: "#/definitions/minimum"
      },
      exclusiveMinimum: {
        $ref: "#/definitions/exclusiveMinimum"
      },
      maxLength: {
        $ref: "#/definitions/maxLength"
      },
      minLength: {
        $ref: "#/definitions/minLength"
      },
      pattern: {
        $ref: "#/definitions/pattern"
      },
      maxItems: {
        $ref: "#/definitions/maxItems"
      },
      minItems: {
        $ref: "#/definitions/minItems"
      },
      uniqueItems: {
        $ref: "#/definitions/uniqueItems"
      },
      enum: {
        $ref: "#/definitions/enum"
      },
      multipleOf: {
        $ref: "#/definitions/multipleOf"
      }
    }
  },
  nonBodyParameter: {
    type: "object",
    required: [
      "name",
      "in",
      "type"
    ],
    oneOf: [
      {
        $ref: "#/definitions/headerParameterSubSchema"
      },
      {
        $ref: "#/definitions/formDataParameterSubSchema"
      },
      {
        $ref: "#/definitions/queryParameterSubSchema"
      },
      {
        $ref: "#/definitions/pathParameterSubSchema"
      }
    ]
  },
  parameter: {
    oneOf: [
      {
        $ref: "#/definitions/bodyParameter"
      },
      {
        $ref: "#/definitions/nonBodyParameter"
      }
    ]
  },
  schema: {
    type: "object",
    description: "A deterministic version of a JSON Schema object.",
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    properties: {
      $ref: {
        type: "string"
      },
      format: {
        type: "string"
      },
      title: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/title"
      },
      description: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/description"
      },
      default: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/default"
      },
      multipleOf: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/multipleOf"
      },
      maximum: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/maximum"
      },
      exclusiveMaximum: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
      },
      minimum: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/minimum"
      },
      exclusiveMinimum: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
      },
      maxLength: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
      },
      minLength: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
      },
      pattern: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/pattern"
      },
      maxItems: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
      },
      minItems: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
      },
      uniqueItems: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
      },
      maxProperties: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
      },
      minProperties: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
      },
      required: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/stringArray"
      },
      enum: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/enum"
      },
      additionalProperties: {
        anyOf: [
          {
            $ref: "#/definitions/schema"
          },
          {
            type: "boolean"
          }
        ],
        default: {}
      },
      type: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/type"
      },
      items: {
        anyOf: [
          {
            $ref: "#/definitions/schema"
          },
          {
            type: "array",
            minItems: 1,
            items: {
              $ref: "#/definitions/schema"
            }
          }
        ],
        default: {}
      },
      allOf: {
        type: "array",
        minItems: 1,
        items: {
          $ref: "#/definitions/schema"
        }
      },
      properties: {
        type: "object",
        additionalProperties: {
          $ref: "#/definitions/schema"
        },
        default: {}
      },
      discriminator: {
        type: "string"
      },
      readOnly: {
        type: "boolean",
        default: !1
      },
      xml: {
        $ref: "#/definitions/xml"
      },
      externalDocs: {
        $ref: "#/definitions/externalDocs"
      },
      example: {}
    },
    additionalProperties: !1
  },
  fileSchema: {
    type: "object",
    description: "A deterministic version of a JSON Schema object.",
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    },
    required: [
      "type"
    ],
    properties: {
      format: {
        type: "string"
      },
      title: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/title"
      },
      description: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/description"
      },
      default: {
        $ref: "http://json-schema.org/draft-04/schema#/properties/default"
      },
      required: {
        $ref: "http://json-schema.org/draft-04/schema#/definitions/stringArray"
      },
      type: {
        type: "string",
        enum: [
          "file"
        ]
      },
      readOnly: {
        type: "boolean",
        default: !1
      },
      externalDocs: {
        $ref: "#/definitions/externalDocs"
      },
      example: {}
    },
    additionalProperties: !1
  },
  primitivesItems: {
    type: "object",
    additionalProperties: !1,
    properties: {
      type: {
        type: "string",
        enum: [
          "string",
          "number",
          "integer",
          "boolean",
          "array"
        ]
      },
      format: {
        type: "string"
      },
      items: {
        $ref: "#/definitions/primitivesItems"
      },
      collectionFormat: {
        $ref: "#/definitions/collectionFormat"
      },
      default: {
        $ref: "#/definitions/default"
      },
      maximum: {
        $ref: "#/definitions/maximum"
      },
      exclusiveMaximum: {
        $ref: "#/definitions/exclusiveMaximum"
      },
      minimum: {
        $ref: "#/definitions/minimum"
      },
      exclusiveMinimum: {
        $ref: "#/definitions/exclusiveMinimum"
      },
      maxLength: {
        $ref: "#/definitions/maxLength"
      },
      minLength: {
        $ref: "#/definitions/minLength"
      },
      pattern: {
        $ref: "#/definitions/pattern"
      },
      maxItems: {
        $ref: "#/definitions/maxItems"
      },
      minItems: {
        $ref: "#/definitions/minItems"
      },
      uniqueItems: {
        $ref: "#/definitions/uniqueItems"
      },
      enum: {
        $ref: "#/definitions/enum"
      },
      multipleOf: {
        $ref: "#/definitions/multipleOf"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  security: {
    type: "array",
    items: {
      $ref: "#/definitions/securityRequirement"
    },
    uniqueItems: !0
  },
  securityRequirement: {
    type: "object",
    additionalProperties: {
      type: "array",
      items: {
        type: "string"
      },
      uniqueItems: !0
    }
  },
  xml: {
    type: "object",
    additionalProperties: !1,
    properties: {
      name: {
        type: "string"
      },
      namespace: {
        type: "string"
      },
      prefix: {
        type: "string"
      },
      attribute: {
        type: "boolean",
        default: !1
      },
      wrapped: {
        type: "boolean",
        default: !1
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  tag: {
    type: "object",
    additionalProperties: !1,
    required: [
      "name"
    ],
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      externalDocs: {
        $ref: "#/definitions/externalDocs"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  securityDefinitions: {
    type: "object",
    additionalProperties: {
      oneOf: [
        {
          $ref: "#/definitions/basicAuthenticationSecurity"
        },
        {
          $ref: "#/definitions/apiKeySecurity"
        },
        {
          $ref: "#/definitions/oauth2ImplicitSecurity"
        },
        {
          $ref: "#/definitions/oauth2PasswordSecurity"
        },
        {
          $ref: "#/definitions/oauth2ApplicationSecurity"
        },
        {
          $ref: "#/definitions/oauth2AccessCodeSecurity"
        }
      ]
    }
  },
  basicAuthenticationSecurity: {
    type: "object",
    additionalProperties: !1,
    required: [
      "type"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "basic"
        ]
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  apiKeySecurity: {
    type: "object",
    additionalProperties: !1,
    required: [
      "type",
      "name",
      "in"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "apiKey"
        ]
      },
      name: {
        type: "string"
      },
      in: {
        type: "string",
        enum: [
          "header",
          "query"
        ]
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  oauth2ImplicitSecurity: {
    type: "object",
    additionalProperties: !1,
    required: [
      "type",
      "flow",
      "authorizationUrl"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "oauth2"
        ]
      },
      flow: {
        type: "string",
        enum: [
          "implicit"
        ]
      },
      scopes: {
        $ref: "#/definitions/oauth2Scopes"
      },
      authorizationUrl: {
        type: "string",
        format: "uri"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  oauth2PasswordSecurity: {
    type: "object",
    additionalProperties: !1,
    required: [
      "type",
      "flow",
      "tokenUrl"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "oauth2"
        ]
      },
      flow: {
        type: "string",
        enum: [
          "password"
        ]
      },
      scopes: {
        $ref: "#/definitions/oauth2Scopes"
      },
      tokenUrl: {
        type: "string",
        format: "uri"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  oauth2ApplicationSecurity: {
    type: "object",
    additionalProperties: !1,
    required: [
      "type",
      "flow",
      "tokenUrl"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "oauth2"
        ]
      },
      flow: {
        type: "string",
        enum: [
          "application"
        ]
      },
      scopes: {
        $ref: "#/definitions/oauth2Scopes"
      },
      tokenUrl: {
        type: "string",
        format: "uri"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  oauth2AccessCodeSecurity: {
    type: "object",
    additionalProperties: !1,
    required: [
      "type",
      "flow",
      "authorizationUrl",
      "tokenUrl"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "oauth2"
        ]
      },
      flow: {
        type: "string",
        enum: [
          "accessCode"
        ]
      },
      scopes: {
        $ref: "#/definitions/oauth2Scopes"
      },
      authorizationUrl: {
        type: "string",
        format: "uri"
      },
      tokenUrl: {
        type: "string",
        format: "uri"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {
        $ref: "#/definitions/vendorExtension"
      }
    }
  },
  oauth2Scopes: {
    type: "object",
    additionalProperties: {
      type: "string"
    }
  },
  mediaTypeList: {
    type: "array",
    items: {
      $ref: "#/definitions/mimeType"
    },
    uniqueItems: !0
  },
  parametersList: {
    type: "array",
    description: "The parameters needed to send a valid API call.",
    additionalItems: !1,
    items: {
      oneOf: [
        {
          $ref: "#/definitions/parameter"
        },
        {
          $ref: "#/definitions/jsonReference"
        }
      ]
    },
    uniqueItems: !0
  },
  schemesList: {
    type: "array",
    description: "The transfer protocol of the API.",
    items: {
      type: "string",
      enum: [
        "http",
        "https",
        "ws",
        "wss"
      ]
    },
    uniqueItems: !0
  },
  collectionFormat: {
    type: "string",
    enum: [
      "csv",
      "ssv",
      "tsv",
      "pipes"
    ],
    default: "csv"
  },
  collectionFormatWithMulti: {
    type: "string",
    enum: [
      "csv",
      "ssv",
      "tsv",
      "pipes",
      "multi"
    ],
    default: "csv"
  },
  title: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/title"
  },
  description: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/description"
  },
  default: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/default"
  },
  multipleOf: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/multipleOf"
  },
  maximum: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/maximum"
  },
  exclusiveMaximum: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
  },
  minimum: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/minimum"
  },
  exclusiveMinimum: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
  },
  maxLength: {
    $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
  },
  minLength: {
    $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
  },
  pattern: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/pattern"
  },
  maxItems: {
    $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
  },
  minItems: {
    $ref: "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
  },
  uniqueItems: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
  },
  enum: {
    $ref: "http://json-schema.org/draft-04/schema#/properties/enum"
  },
  jsonReference: {
    type: "object",
    required: [
      "$ref"
    ],
    additionalProperties: !1,
    properties: {
      $ref: {
        type: "string"
      }
    }
  }
}, m = {
  title: e,
  id: i,
  $schema: t,
  type: r,
  required: n,
  additionalProperties: !1,
  patternProperties: s,
  properties: o,
  definitions: a
};



/***/ })

};
;