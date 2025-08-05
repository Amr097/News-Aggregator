import { QueryClient, isServer } from "@tanstack/react-query";

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

// Variable to store query client instance outside of render cycle
let browserQueryClient;

//Return the appropriate QueryClient based on the environment
function getQueryClient() {
  if (isServer) {
    // Create a new instance for server-side to aviod dehydration issues
    return createQueryClient();
  } else {
    // If a query client instance already exists, return
    if (!browserQueryClient) browserQueryClient = createQueryClient();

    return browserQueryClient;
  }
}

export { createQueryClient, getQueryClient };
