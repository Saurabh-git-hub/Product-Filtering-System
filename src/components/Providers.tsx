// "use client"

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { PropsWithChildren } from "react"

// const client = new QueryClient()

// const Providers = ({children}: PropsWithChildren<{}>) => {
//     return <QueryClientProvider client={client}>{children}</QueryClientProvider>
// }

// export default Providers
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const client = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
