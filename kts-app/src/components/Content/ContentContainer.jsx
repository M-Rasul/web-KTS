import { connect } from "react-redux";
import Content from "./Content";
import { setContentTypeAC, getBooks, getEvents, getFiles, getPodcasts, getVideos } from "../../redux/contentReducer";
const mapStateToProps = (state) => {
    return {
        content: state.content,
    };
};
export const ContentContainer = connect(mapStateToProps, 
    {setContentTypeAC, getBooks, getEvents, getVideos, getPodcasts, getFiles})(Content);