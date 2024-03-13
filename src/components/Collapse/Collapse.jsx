/*
Logic for the collapse component
1. Collapse component will have a parent wrapper,and a child panel component which will wrap all the children
2. Logic for pannel -> it will render the the passed childern,will have a click action attached to it,which will toggle the state and open close of pannel
3. If Accordion is true,then only one pannel will be open at a time
4. We need to pass a onChange event to the parent[the compoent which uses pannel component],which will be called when the pannel is opened or closed
5. There could be a props something like defaultOpen,which will decide if the pannel is open or closed by default
6. There could be a prop something like default activekey,which will decide which pannel is open by default
7. There could be a prop something like disabled,which will decide if the pannel is disabled or not

*/

import Pannel from "./Pannel";
import { Children, cloneElement, useState } from 'react';




const Collapse = ({ children, accordion = false, defaultActiveKey = [], onChange }) => {
    const [activekeys, setActiveKey] = useState([]);

    const totalPannels = Children.count(children);

    const onChildHeaderClick = (key) => {
        const tempActiveKeys = activekeys;
        if (!accordion) {
            if (!tempActiveKeys.includes(key)) {
                tempActiveKeys.push(key);

            } else {
                const index = tempActiveKeys.indexOf(key);
                tempActiveKeys.splice(index, 1);

            }
        } else {
            tempActiveKeys[key]
        }


        setActiveKey(tempActiveKeys);


        // setActiveKey([...activekeys, key]);
        // console.log("key");
        // console.log(key);

    }

    const mergeNestedChildren = (child, index) => {

        // console.log("child");
        // console.log(child);
        /*
        Logic for extended and nested prop in children
 
 
        */

        const nestedChildren = child.props.children;
        const clonnedChild = cloneElement(<Pannel />, {
            isExpended: false,
            onChildHeaderClick: onChildHeaderClick,
            ChildKey: `channel_${index}`
        }, ...nestedChildren);

        return (
            clonnedChild
        )

    }


    const renderChildren = () => {
        /*
            1. loop through the children
            2. Extract their nested children
            3. Create a function to clone the children using React.cloneElement,
            and pass new props to them and also the nested children extracted in pt 2
 
            */

        return Children.map(children, (child, index) =>

            <div className="Row" >
                {mergeNestedChildren(child, index)}
            </div>
        );


    }

    return (
        <div>
            {renderChildren()}
        </div>
    )

}

export { Pannel };


export default Collapse;