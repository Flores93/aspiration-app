import { mount } from "enzyme";
import ApolloProviderComponent from "../../apollo/ApolloProviderComponent";
import Display from "./DisplayComponent";

describe("Display Component Test", () => {
  const setSearchValueMock = jest.fn();

  test("should show the component correctly with the loading spinning star", () => {
    const wrapper = mount(
      <ApolloProviderComponent>
        <Display searchValue="React" setsearchValue={setSearchValueMock} />
      </ApolloProviderComponent>
    );

    const findStarSpinning = wrapper.find(".fa-spin").exists();

    expect(findStarSpinning).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
