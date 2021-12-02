import {render} from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello, world!/);
    expect(h1).toHaveTextContent("Hello, world!");
})