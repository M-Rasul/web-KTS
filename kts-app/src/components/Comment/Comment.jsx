import style from "./Comment.module.css";
import avatar from "../../assets/images/avatar.png";

const Comment = (props) => {
    return (
        <div className={`flex2 ${style.withMargin}`}>
            <img src={props.image || avatar} alt="avatar" className={style.smallAvatar} />
            <div className="flex_column">
                <h3 className={style.darker}>{props.userName}</h3>
                <p className={style.lighter}>{props.comment}</p>
            </div>
        </div>
    )
}
export default Comment;