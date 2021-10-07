import React from 'react';
import App from "./App";
import { shallow} from 'enzyme';


describe("App component rendering", () => {
    it("renders App component without crashing",()=>{
        shallow(<App/>)
    });
})

