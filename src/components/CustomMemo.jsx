
import React, { useEffect, useRef, useState } from 'react';

const CustomMemo = (WrappedComponent) => {

    const CustomMemoHOC = (props) => {
        const [renderedProps, setRenderedProps] = useState(props);
        const prevProps = useRef();
        let componentPropChanged = false;

        //this will run after every render
        useEffect(() => {
            prevProps.current = props;

        })

        /** a function to check if previous props and current props are same */

        function areEqual(prevProps, nextProps = props) {
            // Add your custom logic here
            const propsKeys = Object.keys(prevProps);
            if (!propsKeys.length) {
                componentPropChanged = false;
            }

            propsKeys.forEach((key) => {
                if (!Object.is(prevProps[key], nextProps[key])) {
                    componentPropChanged = true;
                }
            });
        }
        if (prevProps.current) {
            areEqual(prevProps.current, props);
        }

        if (componentPropChanged) {
            setRenderedProps(props);
        }

        // Add your custom logic here

        return <WrappedComponent {...renderedProps} />;
    };

    return CustomMemoHOC;
};

export default CustomMemo;



/*
example usage

export default CustomMemo(AppHeader);

<AppHeader onClickAddPlant={onClickAddPlant} />


*/