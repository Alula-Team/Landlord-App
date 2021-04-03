import { schema, normalize } from "normalizr";
import defaultState from "./default-state";

const tenant = new schema.Entity("tenants", {
  property: property,
});
const transaction = new schema.Entity("transactions");
const serviceRequest = new schema.Entity("serviceRequests");
const property = new schema.Entity("properties", {
  tenant: tenant,
  transactions: [transaction],
  serviceRequests: [serviceRequest],
});

const normalizedData = normalize(defaultState.properties, [property]);
// const normalizedTenants = normalize(defaultState.tenants, [tenant]);
// const normalizedTransactions = normalize(defaultState.transactions, [
//   transaction,
// ]);
// const normalizedServiceRequests = normalize(defaultState.serviceRequests, [
//   serviceRequest,
// ]);

export const normalData = {
  entities: normalizedData.entities.properties,
  ids: normalizedData.result,
};

// export const normalTenant = {
//   entities: normalizedTenants.entities.tenants,
//   ids: normalizedTenants.result,
// };

// export const normalTransaction = {
//   entities: normalizedTransactions.entities.transactions,
//   ids: normalizedTransactions.result,
// };

// export const normalServiceRequest = {
//   entities: normalizedServiceRequests.entities.serviceRequests,
//   ids: normalizedServiceRequests.result,
// };

// export default {
//   normalProps,
//   normalTenant,
//   normalTransaction,
//   normalServiceRequest,
// };
