import { mount } from "enzyme";
import Topic from "./TopicComponent";

describe("Topic Component Tests", () => {
  const changeTopicMock = jest.fn();

  const edgeTopicsEmptyMock = {
    node: {
      repositoryTopics: {
        nodes: [],
        totalCount: 0,
      },
      resourcePath: "/dummy/path",
      stargazers: { totalCount: 3842 },
    },
  };

  const edgeMock = {
    ...edgeTopicsEmptyMock,
    node: {
      ...edgeTopicsEmptyMock.node,
      repositoryTopics: {
        nodes: [
          {
            topic: {
              name: "faketopic1",
              stargazerCount: 121,
              relatedTopics: [
                { name: "fakeRelatedTopic-1", _typename: "Topic" },
                { name: "fakeRelatedTopic-2", _typename: "Topic" },
              ],
            },
          },
          {
            topic: {
              name: "faketopic2",
              stargazerCount: 33,
              relatedTopics: [
                { name: "fakeRelatedTopic-3", _typename: "Topic" },
                { name: "fakeRelatedTopic-4", _typename: "Topic" },
              ],
            },
          },
          {
            topic: {
              name: "faketopic3",
              stargazerCount: 923,
              relatedTopics: [
                { name: "fakeRelatedTopic-5", _typename: "Topic" },
                { name: "fakeRelatedTopic-6", _typename: "Topic" },
              ],
            },
          },
          {
            topic: {
              name: "faketopic4",
              stargazerCount: 77,
              relatedTopics: [
                { name: "fakeRelatedTopic-7", _typename: "Topic" },
                { name: "fakeRelatedTopic-8", _typename: "Topic" },
              ],
            },
          },
        ],
        totalCount: 4,
      },
    },
  };

  test("Should show the component correctly", () => {
    const wrapper = mount(
      <Topic edge={edgeMock} changeTopic={changeTopicMock} />
    );

    const topicTitle = wrapper.find("h3").text();
    const relatedTopicsLabel = wrapper.find("p").text();
    const childTopicsNumber = wrapper.find("div.child-topic");

    expect(wrapper).toMatchSnapshot();

    expect(typeof topicTitle).toBe("string");
    expect(topicTitle).toContain(edgeTopicsEmptyMock.node.resourcePath);
    expect(relatedTopicsLabel).toBe("Related Topics:");
    expect(childTopicsNumber).toHaveLength(
      edgeMock.node.repositoryTopics.totalCount
    );
  });

  test("Should show the message of empty related topics", () => {
    const wrapper = mount(
      <Topic edge={edgeTopicsEmptyMock} changeTopic={changeTopicMock} />
    );

    const noTopicsMessage = wrapper.find("b").text();
    const existsEmptyContainerClass = wrapper.find(".no-topic").exists();

    expect(noTopicsMessage).toEqual(
      "This path it doesn't have any related topic. :("
    );
    expect(existsEmptyContainerClass).toBe(true);
  });
});
