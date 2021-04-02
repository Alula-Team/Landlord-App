import { schema, normalize } from "normalizr";
import defaultState from "./default-state";

const property = new schema.Entity("properties");
const tenant = new schema.Entity("tenants", { assignedTo: property });
const transaction = new schema.Entity("transactions", { assignedTo: property });
const serviceRequest = new schema.Entity("serviceRequests", {
  assignedTo: property,
});

const normalizedProperties = normalize(defaultState.properties, [property]);
const normalizedTenants = normalize(defaultState.tenants, [tenant]);
const normalizedTransactions = normalize(defaultState.transactions, [
  transaction,
]);
const normalizedServiceRequests = normalize(defaultState.serviceRequests, [
  serviceRequest,
]);

export const normalProps = {
  entities: normalizedProperties.entities.properties,
  ids: normalizedProperties.result,
};

export const normalTenant = {
  entities: normalizedTenants.entities.tenants,
  ids: normalizedTenants.result,
};

export const normalTransaction = {
  entities: normalizedTransactions.entities.transactions,
  ids: normalizedTransactions.result,
};

export const normalServiceRequest = {
  entities: normalizedServiceRequests.entities.serviceRequests,
  ids: normalizedServiceRequests.result,
};

export default {
  normalProps,
  normalTenant,
  normalTransaction,
  normalServiceRequest,
};
