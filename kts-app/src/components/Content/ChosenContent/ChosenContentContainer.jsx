import { connect } from "react-redux";
import ChosenContent from "./ChosenContent";
import { getContent, addComment, getCommentsThunk } from "../../../redux/contentReducer";

const mapStateToProps = (state) => {
    return {
        chosenContent: state.content.chosenContent,
        contentType: state.content.contentType,
        comments: state.content.comments
    }
};
export const ChosenContentContainer = connect(mapStateToProps, {getContent, addComment, getCommentsThunk})(ChosenContent);