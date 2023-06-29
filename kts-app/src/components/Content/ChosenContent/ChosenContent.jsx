import { useLocation } from "react-router";
import Preloader from "../../Preloader/Preloader";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChosenContentAC } from "../../../redux/contentReducer";
import book from "../../../assets/images/book.png";
import style from "./ChosenContent.module.css";

const ChosenContent = (props) => {
    const dispatch = useDispatch();
    const {state} = useLocation();
    const date = new Date(props?.chosenContent?.date);
    const year = date?.getFullYear();
    const month = date?.getMonth() + 1;
    const day = date?.getUTCDate();
    const hours = date?.getUTCHours();
    const minutes = date?.getUTCMinutes();
    const contentId = state?.content?.id;
    useEffect(() => {
        if(props?.chosenContent) dispatch(setChosenContentAC(null));
        props.getContent(contentId, state?.content?.type);
    }, [state]);
    const [runPreloader, setRunPreloader] = useState(true);
    useEffect(() => {
        setRunPreloader(true);
        if(props.chosenContent) setRunPreloader(false);
    }, [props]);
    if(runPreloader) return <Preloader />;
    return (
        <div className="flex_column">
            <h2>{props?.chosenContent?.content?.name}</h2>
            <div className={`flex_column ${style.centered}`}>
                <img src={props?.chosenContent?.content?.image ? props?.chosenContent?.content?.image : book} 
                    alt="image" 
                    className={style.contentImage} 
                />
                <i>Posted by Rasqa</i>
            </div>
            <div className={`flex_column ${style.withMargin}`}>
                <h3>About:</h3>
                <p className={style.darker}>{props?.chosenContent?.content?.description}</p>
            </div>
            <div className={`flex_column ${style.withMargin} ${style.centered}`}>
            {
                state?.content?.type === "event" && (
                    <p className={style.darker}>This event is held on {`${day}/${month}/${year}`} at {`${hours}:${minutes}`} <a href={props?.chosenContent?.location} target="blank">here</a></p>
                )
            }
            {
                state?.content?.type === "book" && (
                    <p>You can read it <a href={props?.chosenContent?.source}>here</a></p>
                ) 
            }
            {
                state?.content?.type === "video" && (
                    <video controls className={style.video}>
                        <source src={props?.chosenContent?.source} />
                    </video>
                )
            }
            </div>
        </div>
    )
}
export default ChosenContent;