import loader from "../../assets/gifs/book.gif";
import s from "./Preloader.module.css";
const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={loader} alt="loader" className={s.loader} />
        </div>
    )
}
export default Preloader;