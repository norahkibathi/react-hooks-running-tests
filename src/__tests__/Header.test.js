import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
import React from "react";

function Header(props) {
  return <h1>hello from the Header!</h1>;
}

export default Header;