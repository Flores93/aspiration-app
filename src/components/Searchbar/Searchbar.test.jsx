import { mount } from "enzyme";

import Searchbar from "./SearchbarComponent";

describe("Searchbar Component Test", () => {
  const onSearchMock = jest.fn();

  const wrapper = mount(
    <Searchbar onSearch={onSearchMock} initSearchValue="React" />
  );

  test("should show the component correctly", () => {
    const searchbarExists = wrapper.find(".search-bar").exists();
    const buttonExists = wrapper.find(".search-button").exists();

    expect(wrapper).toMatchSnapshot();
    expect(searchbarExists).toBe(true);
    expect(buttonExists).toBe(true);
  });

  test("should call the onSearch function when form is submitted", () => {
    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    expect(onSearchMock).toHaveBeenCalled();
  });
});
