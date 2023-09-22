"use client";
import { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Form, Button } from "react-bootstrap";

const GET_PAGE = gql`
  query GetPage($id: MongoID!) {
    lessonById(_id:$id){
      name
      mainCharacter {
        name
      }
      secondaryCharacters {
        name
      }
      historicalReferences {
        name
        startYear
        endYear
      }
      description
    }
  }
`;

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { ANALYZE_URL } from "./constants";

function Page() {
  const [id, setId] = useState("");
  const [pageData, setPageData] = useState(null);

  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: { id },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageData(data.lessonById);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {pageData && (
        <div>
          <h2>{pageData.name}</h2>
          <p>{pageData.description}</p>
          <h3>Main Character:</h3>
          <p>{pageData.mainCharacter.name}</p>
          <h3>Secondary Characters:</h3>
          <ul>
            {pageData.secondaryCharacters.map((character) => (
              <li key={character.name}>{character.name}</li>
            ))}
          </ul>
          <h3>Historical References:</h3>
          <ul>
            {pageData.historicalReferences.map((reference) => (
              <li key={reference.name}>
                {reference.name} ({reference.startYear}-{reference.endYear})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Page;
