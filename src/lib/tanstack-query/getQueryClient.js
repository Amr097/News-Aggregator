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

let browserQueryClient;

function getQueryClient() {
  if (isServer) {
    return createQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = createQueryClient();

    return browserQueryClient;
  }
}

export { createQueryClient, getQueryClient };
