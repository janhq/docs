"use strict";
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 42530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $schema: () => (/* binding */ t),
/* harmony export */   additionalProperties: () => (/* binding */ s),
/* harmony export */   "default": () => (/* binding */ d),
/* harmony export */   definitions: () => (/* binding */ a),
/* harmony export */   description: () => (/* binding */ r),
/* harmony export */   id: () => (/* binding */ e),
/* harmony export */   patternProperties: () => (/* binding */ p),
/* harmony export */   properties: () => (/* binding */ o),
/* harmony export */   required: () => (/* binding */ n),
/* harmony export */   type: () => (/* binding */ i)
/* harmony export */ });
const e = "https://spec.openapis.org/oas/3.0/schema/2021-09-28", t = "http://json-schema.org/draft-04/schema#", r = "The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3", i = "object", n = [
  "openapi",
  "info",
  "paths"
], o = {
  openapi: {
    type: "string",
    pattern: "^3\\.0\\.\\d(-.+)?$"
  },
  info: {
    $ref: "#/definitions/Info"
  },
  externalDocs: {
    $ref: "#/definitions/ExternalDocumentation"
  },
  servers: {
    type: "array",
    items: {
      $ref: "#/definitions/Server"
    }
  },
  security: {
    type: "array",
    items: {
      $ref: "#/definitions/SecurityRequirement"
    }
  },
  tags: {
    type: "array",
    items: {
      $ref: "#/definitions/Tag"
    },
    uniqueItems: !0
  },
  paths: {
    $ref: "#/definitions/Paths"
  },
  components: {
    $ref: "#/definitions/Components"
  }
}, p = {
  "^x-": {}
}, s = !1, a = {
  Reference: {
    type: "object",
    required: [
      "$ref"
    ],
    patternProperties: {
      "^\\$ref$": {
        type: "string",
        format: "uri-reference"
      }
    }
  },
  Info: {
    type: "object",
    required: [
      "title",
      "version"
    ],
    properties: {
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      termsOfService: {
        type: "string",
        format: "uri-reference"
      },
      contact: {
        $ref: "#/definitions/Contact"
      },
      license: {
        $ref: "#/definitions/License"
      },
      version: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Contact: {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      url: {
        type: "string",
        format: "uri-reference"
      },
      email: {
        type: "string",
        format: "email"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  License: {
    type: "object",
    required: [
      "name"
    ],
    properties: {
      name: {
        type: "string"
      },
      url: {
        type: "string",
        format: "uri-reference"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Server: {
    type: "object",
    required: [
      "url"
    ],
    properties: {
      url: {
        type: "string"
      },
      description: {
        type: "string"
      },
      variables: {
        type: "object",
        additionalProperties: {
          $ref: "#/definitions/ServerVariable"
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  ServerVariable: {
    type: "object",
    required: [
      "default"
    ],
    properties: {
      enum: {
        type: "array",
        items: {
          type: "string"
        }
      },
      default: {
        type: "string"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Components: {
    type: "object",
    properties: {
      schemas: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Schema"
              },
              {
                $ref: "#/definitions/Reference"
              }
            ]
          }
        }
      },
      responses: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/Response"
              }
            ]
          }
        }
      },
      parameters: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/Parameter"
              }
            ]
          }
        }
      },
      examples: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/Example"
              }
            ]
          }
        }
      },
      requestBodies: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/RequestBody"
              }
            ]
          }
        }
      },
      headers: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/Header"
              }
            ]
          }
        }
      },
      securitySchemes: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/SecurityScheme"
              }
            ]
          }
        }
      },
      links: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/Link"
              }
            ]
          }
        }
      },
      callbacks: {
        type: "object",
        patternProperties: {
          "^[a-zA-Z0-9\\.\\-_]+$": {
            oneOf: [
              {
                $ref: "#/definitions/Reference"
              },
              {
                $ref: "#/definitions/Callback"
              }
            ]
          }
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Schema: {
    type: "object",
    properties: {
      title: {
        type: "string"
      },
      multipleOf: {
        type: "number",
        minimum: 0,
        exclusiveMinimum: !0
      },
      maximum: {
        type: "number"
      },
      exclusiveMaximum: {
        type: "boolean",
        default: !1
      },
      minimum: {
        type: "number"
      },
      exclusiveMinimum: {
        type: "boolean",
        default: !1
      },
      maxLength: {
        type: "integer",
        minimum: 0
      },
      minLength: {
        type: "integer",
        minimum: 0,
        default: 0
      },
      pattern: {
        type: "string",
        format: "regex"
      },
      maxItems: {
        type: "integer",
        minimum: 0
      },
      minItems: {
        type: "integer",
        minimum: 0,
        default: 0
      },
      uniqueItems: {
        type: "boolean",
        default: !1
      },
      maxProperties: {
        type: "integer",
        minimum: 0
      },
      minProperties: {
        type: "integer",
        minimum: 0,
        default: 0
      },
      required: {
        type: "array",
        items: {
          type: "string"
        },
        minItems: 1,
        uniqueItems: !0
      },
      enum: {
        type: "array",
        items: {},
        minItems: 1,
        uniqueItems: !1
      },
      type: {
        type: "string",
        enum: [
          "array",
          "boolean",
          "integer",
          "number",
          "object",
          "string"
        ]
      },
      not: {
        oneOf: [
          {
            $ref: "#/definitions/Schema"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      },
      allOf: {
        type: "array",
        items: {
          oneOf: [
            {
              $ref: "#/definitions/Schema"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      oneOf: {
        type: "array",
        items: {
          oneOf: [
            {
              $ref: "#/definitions/Schema"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      anyOf: {
        type: "array",
        items: {
          oneOf: [
            {
              $ref: "#/definitions/Schema"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      items: {
        oneOf: [
          {
            $ref: "#/definitions/Schema"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      },
      properties: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Schema"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      additionalProperties: {
        oneOf: [
          {
            $ref: "#/definitions/Schema"
          },
          {
            $ref: "#/definitions/Reference"
          },
          {
            type: "boolean"
          }
        ],
        default: !0
      },
      description: {
        type: "string"
      },
      format: {
        type: "string"
      },
      default: {},
      nullable: {
        type: "boolean",
        default: !1
      },
      discriminator: {
        $ref: "#/definitions/Discriminator"
      },
      readOnly: {
        type: "boolean",
        default: !1
      },
      writeOnly: {
        type: "boolean",
        default: !1
      },
      example: {},
      externalDocs: {
        $ref: "#/definitions/ExternalDocumentation"
      },
      deprecated: {
        type: "boolean",
        default: !1
      },
      xml: {
        $ref: "#/definitions/XML"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Discriminator: {
    type: "object",
    required: [
      "propertyName"
    ],
    properties: {
      propertyName: {
        type: "string"
      },
      mapping: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    }
  },
  XML: {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      namespace: {
        type: "string",
        format: "uri"
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
      "^x-": {}
    },
    additionalProperties: !1
  },
  Response: {
    type: "object",
    required: [
      "description"
    ],
    properties: {
      description: {
        type: "string"
      },
      headers: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Header"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      content: {
        type: "object",
        additionalProperties: {
          $ref: "#/definitions/MediaType"
        }
      },
      links: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Link"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  MediaType: {
    type: "object",
    properties: {
      schema: {
        oneOf: [
          {
            $ref: "#/definitions/Schema"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      },
      example: {},
      examples: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Example"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      encoding: {
        type: "object",
        additionalProperties: {
          $ref: "#/definitions/Encoding"
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1,
    allOf: [
      {
        $ref: "#/definitions/ExampleXORExamples"
      }
    ]
  },
  Example: {
    type: "object",
    properties: {
      summary: {
        type: "string"
      },
      description: {
        type: "string"
      },
      value: {},
      externalValue: {
        type: "string",
        format: "uri-reference"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Header: {
    type: "object",
    properties: {
      description: {
        type: "string"
      },
      required: {
        type: "boolean",
        default: !1
      },
      deprecated: {
        type: "boolean",
        default: !1
      },
      allowEmptyValue: {
        type: "boolean",
        default: !1
      },
      style: {
        type: "string",
        enum: [
          "simple"
        ],
        default: "simple"
      },
      explode: {
        type: "boolean"
      },
      allowReserved: {
        type: "boolean",
        default: !1
      },
      schema: {
        oneOf: [
          {
            $ref: "#/definitions/Schema"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      },
      content: {
        type: "object",
        additionalProperties: {
          $ref: "#/definitions/MediaType"
        },
        minProperties: 1,
        maxProperties: 1
      },
      example: {},
      examples: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Example"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1,
    allOf: [
      {
        $ref: "#/definitions/ExampleXORExamples"
      },
      {
        $ref: "#/definitions/SchemaXORContent"
      }
    ]
  },
  Paths: {
    type: "object",
    patternProperties: {
      "^\\/": {
        $ref: "#/definitions/PathItem"
      },
      "^x-": {}
    },
    additionalProperties: !1
  },
  PathItem: {
    type: "object",
    properties: {
      $ref: {
        type: "string"
      },
      summary: {
        type: "string"
      },
      description: {
        type: "string"
      },
      servers: {
        type: "array",
        items: {
          $ref: "#/definitions/Server"
        }
      },
      parameters: {
        type: "array",
        items: {
          oneOf: [
            {
              $ref: "#/definitions/Parameter"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        },
        uniqueItems: !0
      }
    },
    patternProperties: {
      "^(get|put|post|delete|options|head|patch|trace)$": {
        $ref: "#/definitions/Operation"
      },
      "^x-": {}
    },
    additionalProperties: !1
  },
  Operation: {
    type: "object",
    required: [
      "responses"
    ],
    properties: {
      tags: {
        type: "array",
        items: {
          type: "string"
        }
      },
      summary: {
        type: "string"
      },
      description: {
        type: "string"
      },
      externalDocs: {
        $ref: "#/definitions/ExternalDocumentation"
      },
      operationId: {
        type: "string"
      },
      parameters: {
        type: "array",
        items: {
          oneOf: [
            {
              $ref: "#/definitions/Parameter"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        },
        uniqueItems: !0
      },
      requestBody: {
        oneOf: [
          {
            $ref: "#/definitions/RequestBody"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      },
      responses: {
        $ref: "#/definitions/Responses"
      },
      callbacks: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Callback"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      deprecated: {
        type: "boolean",
        default: !1
      },
      security: {
        type: "array",
        items: {
          $ref: "#/definitions/SecurityRequirement"
        }
      },
      servers: {
        type: "array",
        items: {
          $ref: "#/definitions/Server"
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Responses: {
    type: "object",
    properties: {
      default: {
        oneOf: [
          {
            $ref: "#/definitions/Response"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      }
    },
    patternProperties: {
      "^[1-5](?:\\d{2}|XX)$": {
        oneOf: [
          {
            $ref: "#/definitions/Response"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      },
      "^x-": {}
    },
    minProperties: 1,
    additionalProperties: !1
  },
  SecurityRequirement: {
    type: "object",
    additionalProperties: {
      type: "array",
      items: {
        type: "string"
      }
    }
  },
  Tag: {
    type: "object",
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
        $ref: "#/definitions/ExternalDocumentation"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  ExternalDocumentation: {
    type: "object",
    required: [
      "url"
    ],
    properties: {
      description: {
        type: "string"
      },
      url: {
        type: "string",
        format: "uri-reference"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  ExampleXORExamples: {
    description: "Example and examples are mutually exclusive",
    not: {
      required: [
        "example",
        "examples"
      ]
    }
  },
  SchemaXORContent: {
    description: "Schema and content are mutually exclusive, at least one is required",
    not: {
      required: [
        "schema",
        "content"
      ]
    },
    oneOf: [
      {
        required: [
          "schema"
        ]
      },
      {
        required: [
          "content"
        ],
        description: "Some properties are not allowed if content is present",
        allOf: [
          {
            not: {
              required: [
                "style"
              ]
            }
          },
          {
            not: {
              required: [
                "explode"
              ]
            }
          },
          {
            not: {
              required: [
                "allowReserved"
              ]
            }
          },
          {
            not: {
              required: [
                "example"
              ]
            }
          },
          {
            not: {
              required: [
                "examples"
              ]
            }
          }
        ]
      }
    ]
  },
  Parameter: {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      in: {
        type: "string"
      },
      description: {
        type: "string"
      },
      required: {
        type: "boolean",
        default: !1
      },
      deprecated: {
        type: "boolean",
        default: !1
      },
      allowEmptyValue: {
        type: "boolean",
        default: !1
      },
      style: {
        type: "string"
      },
      explode: {
        type: "boolean"
      },
      allowReserved: {
        type: "boolean",
        default: !1
      },
      schema: {
        oneOf: [
          {
            $ref: "#/definitions/Schema"
          },
          {
            $ref: "#/definitions/Reference"
          }
        ]
      },
      content: {
        type: "object",
        additionalProperties: {
          $ref: "#/definitions/MediaType"
        },
        minProperties: 1,
        maxProperties: 1
      },
      example: {},
      examples: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Example"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1,
    required: [
      "name",
      "in"
    ],
    allOf: [
      {
        $ref: "#/definitions/ExampleXORExamples"
      },
      {
        $ref: "#/definitions/SchemaXORContent"
      },
      {
        $ref: "#/definitions/ParameterLocation"
      }
    ]
  },
  ParameterLocation: {
    description: "Parameter location",
    oneOf: [
      {
        description: "Parameter in path",
        required: [
          "required"
        ],
        properties: {
          in: {
            enum: [
              "path"
            ]
          },
          style: {
            enum: [
              "matrix",
              "label",
              "simple"
            ],
            default: "simple"
          },
          required: {
            enum: [
              !0
            ]
          }
        }
      },
      {
        description: "Parameter in query",
        properties: {
          in: {
            enum: [
              "query"
            ]
          },
          style: {
            enum: [
              "form",
              "spaceDelimited",
              "pipeDelimited",
              "deepObject"
            ],
            default: "form"
          }
        }
      },
      {
        description: "Parameter in header",
        properties: {
          in: {
            enum: [
              "header"
            ]
          },
          style: {
            enum: [
              "simple"
            ],
            default: "simple"
          }
        }
      },
      {
        description: "Parameter in cookie",
        properties: {
          in: {
            enum: [
              "cookie"
            ]
          },
          style: {
            enum: [
              "form"
            ],
            default: "form"
          }
        }
      }
    ]
  },
  RequestBody: {
    type: "object",
    required: [
      "content"
    ],
    properties: {
      description: {
        type: "string"
      },
      content: {
        type: "object",
        additionalProperties: {
          $ref: "#/definitions/MediaType"
        }
      },
      required: {
        type: "boolean",
        default: !1
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  SecurityScheme: {
    oneOf: [
      {
        $ref: "#/definitions/APIKeySecurityScheme"
      },
      {
        $ref: "#/definitions/HTTPSecurityScheme"
      },
      {
        $ref: "#/definitions/OAuth2SecurityScheme"
      },
      {
        $ref: "#/definitions/OpenIdConnectSecurityScheme"
      }
    ]
  },
  APIKeySecurityScheme: {
    type: "object",
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
          "query",
          "cookie"
        ]
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  HTTPSecurityScheme: {
    type: "object",
    required: [
      "scheme",
      "type"
    ],
    properties: {
      scheme: {
        type: "string"
      },
      bearerFormat: {
        type: "string"
      },
      description: {
        type: "string"
      },
      type: {
        type: "string",
        enum: [
          "http"
        ]
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1,
    oneOf: [
      {
        description: "Bearer",
        properties: {
          scheme: {
            type: "string",
            pattern: "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
          }
        }
      },
      {
        description: "Non Bearer",
        not: {
          required: [
            "bearerFormat"
          ]
        },
        properties: {
          scheme: {
            not: {
              type: "string",
              pattern: "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
            }
          }
        }
      }
    ]
  },
  OAuth2SecurityScheme: {
    type: "object",
    required: [
      "type",
      "flows"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "oauth2"
        ]
      },
      flows: {
        $ref: "#/definitions/OAuthFlows"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  OpenIdConnectSecurityScheme: {
    type: "object",
    required: [
      "type",
      "openIdConnectUrl"
    ],
    properties: {
      type: {
        type: "string",
        enum: [
          "openIdConnect"
        ]
      },
      openIdConnectUrl: {
        type: "string",
        format: "uri-reference"
      },
      description: {
        type: "string"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  OAuthFlows: {
    type: "object",
    properties: {
      implicit: {
        $ref: "#/definitions/ImplicitOAuthFlow"
      },
      password: {
        $ref: "#/definitions/PasswordOAuthFlow"
      },
      clientCredentials: {
        $ref: "#/definitions/ClientCredentialsFlow"
      },
      authorizationCode: {
        $ref: "#/definitions/AuthorizationCodeOAuthFlow"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  ImplicitOAuthFlow: {
    type: "object",
    required: [
      "authorizationUrl",
      "scopes"
    ],
    properties: {
      authorizationUrl: {
        type: "string",
        format: "uri-reference"
      },
      refreshUrl: {
        type: "string",
        format: "uri-reference"
      },
      scopes: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  PasswordOAuthFlow: {
    type: "object",
    required: [
      "tokenUrl",
      "scopes"
    ],
    properties: {
      tokenUrl: {
        type: "string",
        format: "uri-reference"
      },
      refreshUrl: {
        type: "string",
        format: "uri-reference"
      },
      scopes: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  ClientCredentialsFlow: {
    type: "object",
    required: [
      "tokenUrl",
      "scopes"
    ],
    properties: {
      tokenUrl: {
        type: "string",
        format: "uri-reference"
      },
      refreshUrl: {
        type: "string",
        format: "uri-reference"
      },
      scopes: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  AuthorizationCodeOAuthFlow: {
    type: "object",
    required: [
      "authorizationUrl",
      "tokenUrl",
      "scopes"
    ],
    properties: {
      authorizationUrl: {
        type: "string",
        format: "uri-reference"
      },
      tokenUrl: {
        type: "string",
        format: "uri-reference"
      },
      refreshUrl: {
        type: "string",
        format: "uri-reference"
      },
      scopes: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1
  },
  Link: {
    type: "object",
    properties: {
      operationId: {
        type: "string"
      },
      operationRef: {
        type: "string",
        format: "uri-reference"
      },
      parameters: {
        type: "object",
        additionalProperties: {}
      },
      requestBody: {},
      description: {
        type: "string"
      },
      server: {
        $ref: "#/definitions/Server"
      }
    },
    patternProperties: {
      "^x-": {}
    },
    additionalProperties: !1,
    not: {
      description: "Operation Id and Operation Ref are mutually exclusive",
      required: [
        "operationId",
        "operationRef"
      ]
    }
  },
  Callback: {
    type: "object",
    additionalProperties: {
      $ref: "#/definitions/PathItem"
    },
    patternProperties: {
      "^x-": {}
    }
  },
  Encoding: {
    type: "object",
    properties: {
      contentType: {
        type: "string"
      },
      headers: {
        type: "object",
        additionalProperties: {
          oneOf: [
            {
              $ref: "#/definitions/Header"
            },
            {
              $ref: "#/definitions/Reference"
            }
          ]
        }
      },
      style: {
        type: "string",
        enum: [
          "form",
          "spaceDelimited",
          "pipeDelimited",
          "deepObject"
        ]
      },
      explode: {
        type: "boolean"
      },
      allowReserved: {
        type: "boolean",
        default: !1
      }
    },
    additionalProperties: !1
  }
}, d = {
  id: e,
  $schema: t,
  description: r,
  type: i,
  required: n,
  properties: o,
  patternProperties: p,
  additionalProperties: s,
  definitions: a
};



/***/ })

};
;