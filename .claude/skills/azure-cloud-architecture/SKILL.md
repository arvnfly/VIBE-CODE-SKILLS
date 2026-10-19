---
name: azure-cloud-architecture
description: "Azure App Services, Azure Functions, Cosmos DB, and Managed Identity security bindings."
---

# Azure Cloud Architecture Protocol

1. Eliminate embedded connection strings; use Azure Managed Identity.
2. Configure App Insights distributed tracing.
3. Set partition keys appropriately in Cosmos DB to avoid hot partitions.
