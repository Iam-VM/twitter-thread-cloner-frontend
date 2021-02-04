import downloadStyles from "./downloadStyles.module.css";
import { MdContentCopy } from "react-icons/md";
import {FaCheck} from "react-icons/fa";
import {useState} from "react";
import copy from "copy-to-clipboard";


const Copied = () => {
    return (
        <div className={downloadStyles.copied}>Link Copied <FaCheck className={downloadStyles.checkIcon}/></div>
    );
}


let timeOutId = null;
const Download = (props) => {
    const [copied, setCopied] = useState(false);
    const printCopied = () => {
        copy(props.downloadLink);
        setCopied(true);
        if (!timeOutId) {
            timeOutId = setTimeout(() => {
                setCopied(false);
                timeOutId = null;
            }, 2001);
        }
    };
    return (
        <div className={downloadStyles.container}>
            <div className={downloadStyles.downloadButtonContainer}>
                <a href={props.downloadLink} className={downloadStyles.downloadALink + " link"}><div className={downloadStyles.downloadButton}>Download</div></a>
                <div className={downloadStyles.copy} onClick={() => printCopied()}>
                    <MdContentCopy className={downloadStyles.copyIcon}/>
                </div>
            </div>
            {(copied)?<Copied />:null}
            <div className={downloadStyles.cautionText}>This download link is valid for 10 days from now.</div>
        </div>
    );
}

export default Download;
