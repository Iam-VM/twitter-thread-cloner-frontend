import homeStyles from "./home.module.css";
import crypto from "crypto";

const HomeBody = (props) => {
    return (
        <div className={homeStyles.homeBody}>
            <span className={homeStyles.homeDescription}>Clone twitter threads into PDF, TXT or ZIP</span>
            <span className={homeStyles.homeBodyGreyDescription}>Paste URL of the last tweet from the thread.</span>
            <input placeholder={"Paste URL here..."} onChange={(e) => props.urlFieldChangeHandler(e)} type="text" name={crypto.randomBytes(16)} size={60} className={homeStyles.homeUrlTextField} />
            {(props.errorMessage)?<div className={homeStyles.errorMessage}>{props.errorMessage}</div>:null}
            <div className={homeStyles.homeButtonsContainer}>
                <button onClick={(e) => {props.createPDF(e)}} className={`${homeStyles.homeConvertButton}`}>Covert to PDF</button>
                <button onClick={(e) => {props.createTXT(e)}} className={`${homeStyles.homeConvertButton}`}>Covert to TXT</button>
                <button onClick={(e) => {props.createZIP(e)}} className={`${homeStyles.homeConvertButton}`}>Covert to ZIP</button>
            </div>
        </div>
    )
};

export default HomeBody;
