import { useState, createElement } from "react";
/*
A wrapper component that will have following props
- Number of total items in the list
- Height of each item
- Height/number of items to render in the virtualized window



How will this be rendered?
- thi

What all props 
- Next is render the list with just CreateElement and do this part
- post above step add virtualization

- how will complete list gets rendered with selected

*/


const VirtualizedList = ({ listData = [], windowSize = 10, children }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const startIndex = 0;
    const endIndex = listData.length;

    const renderElement = () => {
        const items = [];
        for (var i = 0; i < endIndex; i++) {

            const elm = createElement(
                children,
                {
                    item: listData[i],
                    index: i
                }
            )
            items.push(elm);
        }



        return items;

    }




    return renderElement();





}


export default VirtualizedList;