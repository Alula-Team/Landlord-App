import uuid from "react-native-uuid";
const initialState = {
  newTenant: {},
  tenants: [
    {
      id: "1",
      name: "Kane Toomer",
      email: "kane@toomsville.toom",
      phone: "7029876543",
      archived: true,
      property: "1",
      leaseType: "Fixed Lease",
      leasePeriod: "6 month",
      rentalRate: "850",
      securityDeposit: "0",
      rentDue: "15th of each month",
    },
    {
      id: "2",
      name: "James Cappers",
      email: "jcaper@capersville.cape",
      phone: "7023456789",
      archived: true,
      property: "2",
      leaseType: "Month to Month",
      leasePeriod: "12 month",
      rentalRate: "779",
      securityDeposit: "1",
      rentDue: "1st of each month",
    },
  ],
};

const tenantsReducer = (state = initialState, action) => {
  if (action.type === "ADD_TENANT") {
    const newTenant = {
      id: uuid.v4(),
      name: action.payload.tenantName,
      email: action.payload.tenantEmail,
      phone: action.payload.tenantPhoneNumber,
      archived: true,
      property: action.payload.property.value,
      leaseType: action.payload.leaseType,
      leastPeriod: action.payload.leasePeriod,
      rentalRate: action.payload.rentalRate,
      securityDeposit: action.payload.securityDeposit,
      rentDue: action.payload.rentDue,
    };
    const tenants = [...state.tenants, newTenant];
    return {
      newTenant: {},
      tenants,
    };
  }
  if (action.type === "DELETE_TENANT") {
    const tenants = state.tenants.filter(({ id }) => id !== action.id);
    return {
      newTenant: {},
      tenants,
    };
  }
  return state;
};

export default tenantsReducer;
