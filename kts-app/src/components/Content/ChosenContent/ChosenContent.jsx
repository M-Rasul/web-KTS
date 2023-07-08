import { useLocation } from "react-router";
import Preloader from "../../Preloader/Preloader";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, setChosenContentAC } from "../../../redux/contentReducer";
import book from "../../../assets/images/book.png";
import style from "./ChosenContent.module.css";
import Comment from "../../Comment/Comment";
import send from "../../../assets/images/send.png";
import { Form, Field } from 'react-final-form';
const CommentForm = (props) => {
    const dispatch = useDispatch();
    const onSubmit = (contentId) => function(e) {
        dispatch(addComment(contentId, e.comment));
    };
    return (
    <Form 
        onSubmit={onSubmit(props.contentId)}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className={style.centered}>
                <div className="flex2">
                    <Field name="comment" component="input" placeholder="Leave a comment..." className={style.commentInput} />
                    <button type="submit" className={style.commentButton}><img src={send} className={style.image} /></button>
                </div>
            </form>
        )}
    />
    )
    }

const ChosenContent = ({chosenContent, contentType, getContent, addComment, getCommentsThunk, comments}) => {
    const dispatch = useDispatch();
    const {state} = useLocation();
    const date = new Date(chosenContent?.date);
    const year = date?.getFullYear();
    const month = date?.getMonth() + 1;
    const day = date?.getUTCDate();
    const hours = date?.getUTCHours();
    const minutes = date?.getUTCMinutes();
    const contentId = state?.content?.id;
    useEffect(() => {
        if(chosenContent) dispatch(setChosenContentAC(null));
        getContent(contentId, state?.content?.type);
        getCommentsThunk(contentId);
    }, [state]);
    const [runPreloader, setRunPreloader] = useState(true);
    useEffect(() => {
        setRunPreloader(true);
        if(chosenContent) setRunPreloader(false);
    }, [chosenContent]);
    if(runPreloader) return <Preloader />;
    return (
        <div className="flex_column">
            <h2>{chosenContent?.content?.name}</h2>
            <div className={`flex_column ${style.centered}`}>
                <img src={chosenContent?.content?.image ? chosenContent?.content?.image : book} 
                    alt="image" 
                    className={style.contentImage} 
                />
                <i>Posted by Rasqa</i>
            </div>
            <div className={`flex_column ${style.withMargin}`}>
                <h3>About:</h3>
                <p className={style.darker}>{chosenContent?.content?.description}</p>
            </div>
            <div className={`flex_column ${style.withMargin} ${style.centered}`}>
            {
                state?.content?.type === "event" && (
                    <p className={style.darker}>This event is held on {`${day}/${month}/${year}`} at {`${hours}:${minutes}`} 
                        <a href={chosenContent?.location} target="blank">here</a>
                    </p>
                )
            }
            {
                state?.content?.type === "book" && (
                    <p>You can download it by clicking <a href={chosenContent?.source} download>here</a></p>
                ) 
            }
            {
                state?.content?.type === "video" && (
                    <video controls className={style.video}>
                        <source src={chosenContent?.source} />
                    </video>
                )
            }
            {
                state?.content?.type === "file" && (
                    <p>Download this file by clicking <a href={chosenContent.file} download>here</a></p>
                )
            }
            {
                state?.content?.type === "podcast" && (
                    <audio src={chosenContent.audio}></audio>
                )
            }
            </div>
            {!state?.content?.isModerator && (
            <div className={`flex_column ${style.withMargin}`}>
                <h3>Comments</h3>
                <div className={style.comments}>
                    {comments?.length
                    ? (
                        comments.map((comment, index) => <Comment key={index} image={null} userName="daler" comment={comment.text} />)
                    )
                    : <Preloader />
                    }
                </div>
                <CommentForm contentId={state?.content?.id} addComment={addComment} />
            </div>
    )}
        </div>
    )
}
export default ChosenContent;