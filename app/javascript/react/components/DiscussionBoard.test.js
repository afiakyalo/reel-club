import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"

Enzyme.configure({ adapter: new Adapter() })

import DiscussionBoard from "./DiscussionBoard"

describe("DiscussionBoard", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <DiscussionBoard

        />
      </BrowserRouter>
    )
  })

  it("should render a h4 element with the name of the section", () => {
    expect(wrapper.find("#board").text()).toBe("Discussion Board")
  })
})
