import { useDispatch } from "react-redux";
import Tab from "../Tab/Tab";
import style from "./Content.module.css";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import ContentItem from "./ContentItem/ContentItem";
const Content = (props) => {
    const [runPreloader, setRunPreloader] = useState(false);
    const dispatch = useDispatch();
    const setContentType = (type) => () => {
        dispatch(props.setContentTypeAC(type));
        setRunPreloader(true);
        type === "events" && props.getEvents();
        type === "books" && props.getBooks();
        type === "videos" && props.getVideos();
        type === "podcasts" && props.getPodcasts();
        type === "files" && props.getFiles();
    }
    useEffect(() => { 
        if(props?.content[props.content.contentType]?.length >= 0) setRunPreloader(false);
    }, [props.content]);
    if(runPreloader) return <Preloader />; 
    return (
        <div className="flex_column">
            <h2>{props.title}</h2>
            <div className={style.contentWrapper}>
                <div className="flex5">
                    <Tab 
                    text="Event" 
                    onClick={setContentType("events")} 
                    className={props.content.contentType === "events" && "active"} 
                    />
                    <Tab 
                    text="Book" 
                    onClick={setContentType("books")} 
                    className={props.content.contentType === "books" && "active"} 
                    />
                    <Tab 
                    text="Video" 
                    onClick={setContentType("videos")} 
                    className={props.content.contentType === "videos" && "active"} 
                    />
                    <Tab 
                    text="Podcast" 
                    onClick={setContentType("podcasts")} 
                    className={props.content.contentType === "podcasts" && "active"} 
                    />
                    <Tab 
                    text="File" 
                    onClick={setContentType("files")} 
                    className={props.content.contentType === "files" && "active"} 
                    />    
                </div>
                <div className={style.contentList}>
                    {
                        props?.content[props.content.contentType]?.length > 0 
                        && props?.content[props.content.contentType]
                        // .some(contentItem => props.isModerator ? !contentItem.content.isApproved : contentItem.content.isApproved)
                        .some(contentItem => !contentItem.content.isApproved)
                        ? (
                            props?.content[props.content.contentType]
                            // .filter(contentItem => props.isModerator ? !contentItem.content.isApproved : contentItem.content.isApproved)
                            .filter(contentItem => !contentItem.content.isApproved)
                            .map((contentItem, index) => ( 
                            <ContentItem
                            key={index} 
                            image={contentItem?.content?.image} 
                            name={contentItem.content.name} 
                            description={contentItem.content.description}
                            id={contentItem.content.id}
                            type={props.content.contentType}
                            isModerator={props.isModerator}
                            contentId={contentItem.id}
                            />))
                        )
                        : (<div className={style.centered}><h2 className={style.lighter}>No Data</h2></div>)
                    } 
                </div>
            </div>
        </div>
    )
};
export default Content;