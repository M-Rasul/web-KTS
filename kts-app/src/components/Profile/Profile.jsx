import style from "./Profile.module.css";
const Profile = (props) => {
    return (
        <div className="flex_column">
            <h2>{props.title}</h2>
            <div className={`flex2 ${style.flex2_margin}`}>
                <div className="flex_column">
                    <img src={props.profile.image} alt="ava" className="ava" />
                    <h3 className={style.heading_profile}>{props.profile.nickName}</h3>
                </div>
                <div className={`flex_column ${style.flex_column_profile}`}>
                    <p className={style.text_profile}>Age: <span className={style.text_bold}>{props.profile.age}</span></p>
                    <p className={style.text_profile}>Knowledge posted: <span className={style.text_bold}>{props.profile.contentPosted}</span></p>
                </div>
            </div>
            <div className={`flex_column ${style.description}`}>
                <h3>About me:</h3>
                <p className={style.text_profile}>{props.profile.description}</p>
            </div>
        </div>
    )
}
export default Profile;