import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

function Priority({ ...rest }) {
  const [priority, setPriority] = React.useState<string>("");
  const FILTER_BY_PRIORITY = gql`
    query FeedSearchQuery($priority: String!) {
      priority(priority: $priority) {
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
  const [executeSearch, { data }] = useLazyQuery(FILTER_BY_PRIORITY);

  const handlePriority = async (e: any) => {
    const value = e.target.value;
    if (value !== "") {
      executeSearch({
        variables: { priority: value },
      });
      getDataFromPriority();
    }
  };

  const getDataFromPriority = () => {
    rest.getData(data);
  };

  return (
    <select
      className="w-24 h-9 rounded-md border-solid border-black outline-none px-1 font-Jarkata_Medium"
      value={priority}
      onChange={async (e: any) => {
        handlePriority(e);
        setPriority(e.target.value);
      }}
    >
      <option value="" disabled selected hidden>
        Priority
      </option>
      <option value={"High"}>High</option>
      <option value="Low">Low</option>
      <option value={"Medium"}>Medium</option>
    </select>
  );
}

export default Priority;
