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


const VirtualizedList = ({ listData = [], windowSize = 10, children, elementSize = "32" }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const endIndex = listData.length;
    console.log("children");
    console.log(children);

    const renderElement = () => {
        const items = [];
        for (var i = startIndex; i < startIndex + windowSize; i++) {

            const elm = createElement(
                children,
                {
                    item: listData[i],
                    index: i,
                    style: {
                        position: "absolute",
                        left: "0px",
                        top: `${i * 32}px`
                    }
                },
                'hello'
            )
            items.push(elm);
        }



        return items;

    }

    const getContainerHeight = () => {
        return `${windowSize * 32}px`;
    }

    const getListHeight = () => {
        return `${listData.length * 32}px`
    }

    const calculateStartIndex = (scrollTop = 0) => {
        const startIndex = Math.floor(scrollTop / elementSize);
        setStartIndex(startIndex)
        console.log("startIndex");
        console.log(startIndex);

    }

    const onScrollList = (event) => {
        const { scrollTop } = event.currentTarget;

        console.log("onScrollList called");
        console.log(scrollTop);

        calculateStartIndex(scrollTop)
    }



    return (<div className="virtualized-list" style={{
        'height': getContainerHeight(),
        'overflow': 'scroll',
        'position': 'relative',
    }} onScroll={onScrollList}>
        <div style={{
            'height': getListHeight()
        }}>
            {renderElement()}
        </div>

    </div >)





}


export default VirtualizedList;