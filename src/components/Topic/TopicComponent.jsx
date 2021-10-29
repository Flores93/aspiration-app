import ChildTopic from "../ChildTopic";
import "./Topic.css";
const Topic = ({ edge, changeTopic }) => {
  const { resourcePath, stargazers, repositoryTopics } = edge.node;

  const existsRelatedTopics = repositoryTopics.nodes.length;

  return (
    <div className={`topic-container ${!existsRelatedTopics && "no-topic"}`}>
      <div className="topic-title">
        <h3>
          {resourcePath}
          {" - "}
          <i className="fa fa-star star-stargazers" />
          <span style={{ color: "grey" }}>{stargazers.totalCount} </span>
        </h3>
      </div>
      <div>
        {existsRelatedTopics ? (
          <>
            {" "}
            <p className="topic-title">Related Topics:</p>
            <div className="child-topics-container">
              {repositoryTopics.nodes.map((node, index) => (
                <ChildTopic node={node} key={index} changeTopic={changeTopic} />
              ))}
            </div>
          </>
        ) : (
          <b>This path it doesn't have any related topic. :(</b>
        )}
      </div>
    </div>
  );
};

export default Topic;
