import React from "react";
import { Counter } from "./Counter";
export class App extends React.Component{
    render(){
        return <Counter initialValue={10} incrementBy={5} timeOut={1500} />
    }
}