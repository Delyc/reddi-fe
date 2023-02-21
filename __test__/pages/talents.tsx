import React from "react";
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Talents from "@/components/sections/Talents";

describe("Talents page", () => {
    it("should render properly", () => {
        render(<Talents />)
        const header = screen.getByRole('heading')
        const headerText = "Trending Posts"
        expect(header).toHaveTextContent(headerText)
        
    })
})