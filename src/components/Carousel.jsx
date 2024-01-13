/*eslint-disable*/


/*
- Should render children that are wrapped
- Have a basic styling
- prop to autoplay
- transition effect












*/

/*eslint-dsiable*/

import { useState, Children } from "react";
import { getIcons } from "../utils";

import "./Carousel.css"









const Carousel = ({ startingIndex, autoPlay = true, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const childrenArray = Children.toArray(children);


    const numberOfItems = childrenArray.length;
    const renderNextSlide = (event) => {
        event.preventDefault();
        const nextSlide = (currentSlide + 1) % [numberOfItems];

        setCurrentSlide(nextSlide);

    }

    const renderPrevSlide = (event) => {
        event.preventDefault();
        let prevlide = (currentSlide - 1);
        if (prevlide < 0) {
            prevlide = numberOfItems - 1;
        }

        setCurrentSlide(prevlide);

    }


    const renderSlideDots = () => {
        const dotsArray = []
        for (var i = 0; i < numberOfItems; i++) {
            dotsArray.push(<li onClick={(i) => {
                renderNextSlide(i)
            }}></li>);
        }

        return (
            <ul>
                {dotsArray
                }
            </ul>
        )



    }

    const renderChildren = () => {
        console.log(childrenArray);
        console.log(typeof childrenArray);




        return Children.map(children, (child, index) => {
            let activeClass = index == currentSlide ? " active" : "";
            return <div className={`carousel-item ${activeClass}`}> {child}</div >;
        });



        return result;

    }

    const renderArrow = () => {
        return <>
            <img src={getIcons("left-arrow")} className="slide-icon left-icon" onClick={renderPrevSlide}></img>
            <img src={getIcons("right-arrow")} className="slide-icon right-icon " onClick={renderNextSlide}></img>

        </>

    }


    return (<div className="carousel-wrapper">
        {renderChildren()}
        {renderArrow()}
    </div>

    )






}

export default Carousel;