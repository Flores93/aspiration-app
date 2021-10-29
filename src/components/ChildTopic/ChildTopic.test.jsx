import { mount } from "enzyme";
import ChildTopic from "./ChildTopicComponent";

describe("Child Topic Component Test", () => {
  const changeTopicMock = jest.fn();

  const nodeMock = {
    topic: {
      name: "Pizza",
      stargazerCount: 9999,
    },
  };

  const wrapper = mount(
    <ChildTopic node={nodeMock} changeTopic={changeTopicMock} />
  );

  test("Should show the component correctly", () => {
    const validName = wrapper.find("b").text();
    const validStargazers = wrapper.find("span").text();

    expect(wrapper).toMatchSnapshot();
    expect(validName).toEqual(`${nodeMock.topic.name}: `);
    expect(validStargazers).toContain(nodeMock.topic.stargazerCount);
  });

  test("should call changeTopic function whit the name of the topic", () => {
    wrapper.find(".child-topic").simulate("click");

    expect(changeTopicMock).toHaveBeenCalledWith(nodeMock.topic.name);
  });
});
