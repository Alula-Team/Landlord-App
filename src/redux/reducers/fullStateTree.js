const initialState = {
  entities: {
    properties: {
      byId: {
        property1: {
          id: "property1",
          info: {
            street: "123 Harmony Avenue",
            city: "Las Vegas",
            state: "NV",
            zip: "89123",
            units: [],
          },
          tenant: "tenant1",
          transactions: ["transaction1"],
          serviceRequests: ["serviceRequest2", "serviceRequest3"],
        },
        property2: {
          id: "property2",
          info: {
            street: "108 Verigold Lane",
            city: "Hendertucky",
            state: "NV",
            zip: "89052",
            units: [],
          },
          tenant: "tenant2",
          transactions: ["transaction2", "transaction3"],
          serviceRequests: ["serviceRequest1"],
        },
      },
      allIds: ["property1", "property2"],
    },
    tenants: {
      byId: {
        tenant1: {
          id: "tenant1",
          info: {
            name: "Kane Toomer",
            email: "kane@toomsville.toom",
            phone: "7029876543",
          },
        },
        tenant2: {
          id: "tenant2",
          info: {
            name: "James Cappers",
            email: "jcaper@capersville.cape",
            phone: "7023456789",
          },
        },
      },
      allId: ["tenant1", "tenant2"],
    },
    transactions: {
      byId: {
        transaction1: {
          id: "transaction1",
          property: "property1",
          info: {
            amount: "1000",
            payment: true,
            date: "03/03/21",
            transactionType: "Rent Payment",
            paymentType: "Auto Payment Collection",
            notes: null,
            images: [],
          },
        },
        transaction2: {
          id: "transaction2",
          property: "property2",
          info: {
            amount: "1000",
            payment: true,
            date: "03/01/21",
            transactionType: "Rent Payment",
            paymentType: "Auto Payment Collection",
            notes: null,
            images: [],
          },
        },
        transaction3: {
          id: "transaction3",
          property: "property2",
          info: {
            amount: "650",
            payment: false,
            date: "03/14/21",
            transactionType: "Rent Payment",
            paymentType: "Auto Payment Collection",
            notes: null,
            images: [],
          },
        },
      },
      allIds: ["transaction1", "transaction2", "transaction3"],
    },
    serviceRequests: {
      byId: {
        serviceRequest1: {
          id: "serviceRequest1",
          property: "property2",
          info: {
            date: "03-03-21",
            description: "Help. Downed telephone line in living room.",
            images: [],
            isCompleted: false,
          },
        },
        serviceRequest2: {
          id: "serviceRequest2",
          property: "property1",
          info: {
            date: "03-23-21",
            description: "Help. Downed telephone line back of pants.",
            images: [],
            isCompleted: false,
          },
        },
        serviceRequest3: {
          id: "serviceRequest3",
          property: "property1",
          info: {
            date: "03-24-21",
            description: "2B or not 2B... Which is my apartment?",
            images: [],
            isCompleted: false,
          },
        },
      },
      allIds: ["serviceRequest1", "serviceRequest2", "serviceRequest3"],
    },
  },
};
