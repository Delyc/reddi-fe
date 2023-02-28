import React from "react";
import {render, waitFor, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Talents from "@/components/sections/Talents";
import GetAll from "@/components/sections/GetAll";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import  { AxiosStatic } from 'axios'
import axios from "axios";
import SubRedditSlice, {setSubRedditContent, setSubRedditType, SubReddit} from "../../../redux/reducers/SubRedditSlice";

jest.mock("axios");
interface AxiosMock extends AxiosStatic {
    mockResolvedValue: Function
    mockRejectedValue: Function
  }
  const mockAxios = axios as AxiosMock

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

const dummyPosts = [
    {
        title: "My dancing video",
        image: "data:image/jpeg;base64,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",
        body: "Wtahc out my latest dancing video",
        slug: "Dancing"
    }
]

test("todos list", async () => {
    mockAxios.mockResolvedValue({ data: dummyPosts });
    render(<GetAll />);
    
    const todoList = await waitFor(() => screen.findAllByTestId("todo"), { timeout: 5000 });
    
    expect(todoList).toHaveLength(1);
    });


    describe('SubRedditSlice reducer', () => {
        it('should handle initial state', () => {
          expect(SubRedditSlice(undefined, { type: 'unknown' })).toEqual({
            subRedditType: '',
            subRedditContent: '',
          });
        });
      
        it('should handle setSubRedditType', () => {
          const newState = SubRedditSlice({ subRedditType: '', subRedditContent: '' }, setSubRedditType('Hello'));
          expect(newState.subRedditType).toEqual('Hello');
          expect(newState.subRedditContent).toEqual('');
        });
      
        it('should handle setSubRedditContent', () => {
          const newState = SubRedditSlice({ subRedditType: '', subRedditContent: '' }, setSubRedditContent('Dancing is awesome!'));
          expect(newState.subRedditType).toEqual('');
          expect(newState.subRedditContent).toEqual('Dancing is awesome!');
        });
      
        it('should handle SubReddit', () => {
          const newState = SubRedditSlice({ subRedditType: '', subRedditContent: '' }, SubReddit({ type: 'Hello', content: 'Dancing is awesome!' }));
          expect(newState.subRedditType).toEqual('Hello');
          expect(newState.subRedditContent).toEqual('Dancing is awesome!');
        });
      });
      