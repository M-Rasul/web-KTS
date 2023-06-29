const Tab = (props) => {
    return (
        <div className={`tab ${props.className}`} onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
};
export default Tab;