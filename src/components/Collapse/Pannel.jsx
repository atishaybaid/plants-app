const Pannel = (props) => {
    console.log("props");
    console.log(props);
    const { isExpended, children, onChildHeaderClick, key } = props;


    const onClickPannel = () => {
        onChildHeaderClick(key);
        /*
        call the parent onChange event with the key
        */

        console.log("pannel clicked");

    }

    const generateExpandedCollapseClassName = () => {
        return isExpended ? "expanded" : "collapsed";

    }
    return (
        <div onClick={onClickPannel} className={generateExpandedCollapseClassName()} key={key}>
            {children}
        </div>
    )
}



export default Pannel;