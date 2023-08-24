import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
           <h3>Q:What is the difference between state and props?</h3>
           <p>A:Data can be passed from one component to another using props, often known as properties. Properties are immutable, read-only, and cannot be updated.The state stands for components of an application that are dynamic. A state may be provided to each component. The component-specific state is local and mutable.</p>
           <h3>Q:How does useState work?</h3>
           <p>A:UseState is a React Hook that enables you to add state to a functional component. It gives back an array with two possible values: the present state and a function to modify it. Every time the setter function is called, the Hook receives an initial state value as an argument. It then returns a modified state value.</p>
           <h3>Q:What does useEffect do other than load data?</h3>
           <p>A:We can use useEffect to execute an action only once, particularly when the app loads or mounts. When the app is mounted in this example, we are utilizing an empty array as the useEffect requirement to start a fetch() GET request.</p>
           <h3>Q:How does react work?</h3> 
           <p>A:Facebook created the React.js framework, which is an open-source JavaScript framework and library. It's used for fast and effectively creating interactive user interfaces and web applications using significantly fewer code than vanilla JavaScript.</p>
        </div>
    );
};

export default Question;