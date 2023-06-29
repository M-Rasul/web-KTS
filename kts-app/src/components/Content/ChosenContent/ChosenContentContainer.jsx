import { connect } from "react-redux";
import ChosenContent from "./ChosenContent";
import { getContent } from "../../../redux/contentReducer";

const mapStateToProps = (state) => {
    return {
        chosenContent: state.content.chosenContent,
        contentType: state.content.contentType
    }
};
export const ChosenContentContainer = connect(mapStateToProps, {getContent})(ChosenContent);