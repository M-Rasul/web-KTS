import style from "./ContentItem.module.css";
import book from "../../../assets/images/book.png";
import { useNavigate } from "react-router";
const ContentItem = (props) => {
    const navigate = useNavigate();
    const description = props.description.length > 250 ? props.description.slice(0, 250) + "..." : props.description;
    const chooseContent = function() {
        navigate(`/content/${props.id}`, {state: {
            content: {
                id: props.id,
                type: props.type.slice(0, -1)
            }
        }})
    }
    return (
        <div className={`flex2 ${style.fixedHeight}`} onClick={chooseContent}>
            <img src={props.image || book} alt="preview" className={style.fixedHeightImage} />
            <div className={`flex_column ${style.fixedHeight_inner}`}>
                <h3 className={style.lighter}>{props.name}</h3>
                <p className={style.darker}>{description}</p>
                <p className={style.green}>Approved my moderator</p>
            </div>
        </div>
    )
}
export default ContentItem;