import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "../../apollo/gqlQueries";

import Topic from "../Topic";
import "./Display.css";

const Display = ({ searchValue, setsearchValue }) => {
  const gqlVariables = {
    variables: { searchValue },
  };
  const { loading, error, data } = useQuery(GET_TOPICS, gqlVariables);

  if (loading)
    return (
      <p style={{ fontSize: "2rem" }}>
        Loading...
        <i className="fa fa-star fa-spin"></i>
      </p>
    );

  if (error) return `Something went wrong: ${error}`;

  return (
    <main>
      <div className="topics-container">
        {data && data.search.edges
          ? data.search.edges.map((edge, index) => (
              <Topic key={index} edge={edge} changeTopic={setsearchValue} />
            ))
          : null}
      </div>
    </main>
  );
};

export default Display;
