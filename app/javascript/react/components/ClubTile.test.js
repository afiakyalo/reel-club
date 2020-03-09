import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"

Enzyme.configure({ adapter: new Adapter() })

import ClubTile from "./ClubTile"

describe("ClubTile", () => {
  let wrapper
  let clubInfo

  beforeEach(() => {
    clubInfo = {
      name: "Jailbirds",
      description: "We watch thrillers and comedy",
      genre: "Thriller",
      users: ["Jane", "John"],
      current_user: "Jane"
    }
    wrapper = mount(
      <BrowserRouter>
        <ClubTile
          clubInfo={clubInfo}
        />
      </BrowserRouter>
    )
  })

  it("should render a h3 element with the name of the club", () => {
    expect(wrapper.find("#name").text()).toBe("Jailbirds")
  })

  it("should render a p element with the description of the club", () => {
    expect(wrapper.find("#description").text()).toBe("We watch thrillers and comedy")
  })

  it("should render a p element with the main genre of the club", () => {
    expect(wrapper.find("#genre").text("#genre")).toBe("Main Genre: Thriller")
  })
})
