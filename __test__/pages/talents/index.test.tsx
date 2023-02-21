import React from "react";
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Talents from "@/components/sections/Talents";
import GetAll from "@/components/sections/GetAll";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
describe("Talents page", () => {
    it("should render properly", () => {
        render(
            <Provider store={store}>
                <GetAll />
            </Provider>
        )
        const header = screen.getByRole('heading')
        const headerText = "Loading"
        expect(header).toHaveTextContent(headerText)
        
    })
})