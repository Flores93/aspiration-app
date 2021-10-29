import "./ChildTopic.css";

const ChildTopic = ({ node, changeTopic }) => {
  const {
    topic: { name, stargazerCount },
  } = node;
  return (
    <div className="child-topic" onClick={() => changeTopic(name)}>
      <b>{name}: </b>
      <span>
        {" "}
        {stargazerCount} <i className="fa fa-star mr-4 star-stargazers" />
      </span>
    </div>
  );
};

export default ChildTopic;
