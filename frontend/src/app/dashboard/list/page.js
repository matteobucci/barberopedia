"use client"
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


const query = gql`query { posts {id title body category published} }`;

function Page() {
    
    const { data } = useSuspenseQuery(query);

    return (
        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}

export default Page;