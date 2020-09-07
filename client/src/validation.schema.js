exports.createSchema = {
    schema: {
        description: 'Create a new Client',
        tags: ['Client'],
        summary: 'Create a new User',
        body: {
          type: 'object',
          required: ['name', 'address', 'phone', 'email'],
          properties: {
            name: { type: 'string' },
            email: { type: 'string' },
            phone: { type: 'string' },
            address: { type: 'string' },
          }
        },
        response: {
          200: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              name: { type: 'string' },
              address: { type: 'string' },
              phone: { type: 'string' },
              email: { type: 'string' },
            }
          },
          409: {
            type: 'object',
            properties: {
              errorCode: { type: 'string' },
              errorMessage: { type: 'string' }
            }
          }
        }
    }
}

exports.findAllSchema = {
    schema: {
        description: 'Get all Clients',
        tags: ['Client'],
        summary: 'Get all Clients',
        response: {
          200: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                address: { type: 'string' },
                phone: { type: 'string' },
                email: { type: 'string' },
                __v: { type: 'number' }
              }
            }
          },
          409: {
            type: 'object',
            properties: {
              errorCode: { type: 'string' },
              errorMessage: { type: 'string' }
            }
          }
        }
    }
}

exports.findOneSchema = {
  schema: {
      description: 'Find One Client',
      tags: ['Client'],
      summary: 'Find One Client',
      params: {
        id: { type: 'string' },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            address: { type: 'string' },
            phone: { type: 'string' },
            email: { type: 'string' },
            __v: { type: 'number' }
          }
        },
        409: {
          type: 'object',
          properties: {
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          }
        }
      }
  }
}

exports.updateSchema = {
  schema: {
      description: 'Update Client',
      tags: ['Client'],
      summary: 'Update User',
      params: {
        id: { type: 'string' },
      },
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          phone: { type: 'string' },
          address: { type: 'string' },
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            address: { type: 'string' },
            phone: { type: 'string' },
            email: { type: 'string' },
          }
        },
        409: {
          type: 'object',
          properties: {
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          }
        }
      }
  }
}

exports.deleteSchema = {
  schema: {
      description: 'Delete Client',
      tags: ['Client'],
      summary: 'Delete Client',
      params: {
        id: { type: 'string' },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            address: { type: 'string' },
            phone: { type: 'string' },
            email: { type: 'string' },
          }
        },
        409: {
          type: 'object',
          properties: {
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          }
        }
      }
  }
}