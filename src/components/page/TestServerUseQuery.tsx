// import { dehydrate, QueryClient } from "@tanstack/react-query";
import React from "react";

// export async function getStaticProps() {
//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: getPosts })

//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//       },
//     }
//   }

function TestServerUseQuery() {
  return (
    <div>
      <div>TestServerUseQuery</div>
    </div>
  );
}

export default TestServerUseQuery;
