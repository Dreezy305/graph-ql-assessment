import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

function Types() {
  const [types, setTypes] = React.useState<string>("");
  const FILTER_BY_TYPES = gql`
    query FeedSearchQuery($type: String!) {
      type(type: $type) {
        name
        author {
          id
        }
        authorName
        type
        priority
      }
    }
  `;
  const [executeSearch, { data }] = useLazyQuery(FILTER_BY_TYPES);

  console.log(data, "jnm2");

  const handleTypes = (e: any) => {
    const value = e.target.value;
    if (value !== "") {
      executeSearch({
        variables: { type: value },
      });
    }
  };

  return (
    <select
      className="w-24 h-9 rounded-md border-solid border-black outline-none px-1 font-Jarkata_Medium"
      value={types}
      onChange={(e: any) => {
        handleTypes(e);
        setTypes(e.target.value);
      }}
    >
      <option value="" disabled selected hidden>
        Types
      </option>
      <option value={"Horror"}>Horror</option>
      <option value={"Drama"}>Drama</option>
      <option value={"Adventure"}>Adventure</option>
      <option value={"Magic"}>Magic</option>
      <option value={"Crime"}>Crime</option>
    </select>
  );
}

export default Types;
