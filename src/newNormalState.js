{
  result: "123",
  entities: {
    "properties": {
      "123": {
        id: "123",
        address: "5505 Harmony Avenue",
        tenant: "1",
        transactions: ["1", "2"],
        serviceRequests: ["1"]
      },
      "321": {
        id: "321",
        address: "108 Marigold Avenue",
        tenant: "2",
        transactions: ["3"],
        serviceRequests: ["2", "3"]
      }
    },
    "tenants": {
      "1": { 
        "id": "1",
        "name": "Kane",
        "email": "kane@kaneco.kom"
      },
      "2": {
        "id": "2",
        "name": "James",
        "email": "cappylicious@cappy.licio.us"
      }
    },
    "transactions": {
      "1": {
        id: "1",
        date: "03/03/21",
        amount : "1000",
        payment : true,
      },
      "2": {
        id: "2",
        date: "03/11/21",
        amount: "550",
        payment: true,
      },
      "3": {
        id: "3",
        date: "03/14/21",
        amount: "876",
        payment: false
      }
    },
    "serviceRequests": {
      "1": {
      id: "1",
      date: "03-03-21",
      description: "Help. Downed telephone line in living room.",
      isCompleted: false
    },
    "2": {
      id: "2",
      date: "03-23-21",
      description: "Help. Downed telephone line back of pants.",
      isCompleted: false
    },
    "3": {
      id: "3",
      date: "03-31-21",
      description: "2B or not 2B... Which is my apartment?",
      isCompleted: false
    }
}
  }
}