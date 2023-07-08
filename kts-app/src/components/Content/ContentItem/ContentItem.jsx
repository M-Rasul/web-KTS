import style from "./ContentItem.module.css";
import book from "../../../assets/images/book.png";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { approveContent } from "../../../redux/contentReducer";

const ContentItem = ({description, id, type, isModerator, approveContent, image, name, contentId}) => {
    const navigate = useNavigate();
    const descriptionShortened = description.length > 250 ? description.slice(0, 250) + "..." : description;
    const chooseContent = function(e) {
        if(!e.target.classList.contains("button")) {
            navigate(`/content/${id}`, {state: {
                content: {
                    id: id,
                    type: type.slice(0, -1),
                    isModerator: isModerator
                }
            }})
        }
    }

    const onApproveClick = (id) => () => {
        approveContent(id, type.slice(0, -1));
    }

    return (
        <div className={`flex2 ${style.fixedHeight}`} onClick={chooseContent}>
            <img src={image || book} alt="preview" className={style.fixedHeightImage} />
            <div className={`flex_column ${style.fixedHeight_inner}`}>
                <h3 className={style.lighter}>{name}</h3>
                <p className={style.darker}>{descriptionShortened}</p>
                {!isModerator && <p className={style.green}>Approved my moderator</p>}
                {isModerator && (
                    <div className={`flex2 ${style.margin}`}>
                        <button className="button button_approve" onClick={onApproveClick(contentId)}>Approve</button>
                        <button className="button button_decline">Decline</button>
                    </div>
                )}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, {approveContent})(ContentItem);