import {useState, useEffect} from 'react';
import homeStyles from './home.module.css';
import axios from "axios";
import socketIOClient from "socket.io-client";
import HomeBody from "./homeBody";
import Loading from "./loading";
import Download from "./download";
const url_pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

const production = true;

const Home = () => {
    const domain = (production)?"http://ec2-13-234-111-75.ap-south-1.compute.amazonaws.com:4000/":"http://localhost:4000/";
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [downloadLink, setDownloadLink] = useState(false);
    const [status, setStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const socket = socketIOClient(domain);

    useEffect(() => {
        socket.on("statusCode", (code) => {
            if (code === "ERR") {
                setErrorMessage("Met with an issue while processing...");
                setStatus(errorMessage);
                setDownloadLink(null);
                setLoading(false);
            }
            else {
                setStatus(code);
            }
        });
    }, [status, errorMessage, loading]);

    const urlFieldChangeHandler = (e) => {
        setUrl(e.target.value)
    }

    const createPDF = (e) => {
        e.preventDefault();
        setDownloadLink(null);
        setErrorMessage(null);
        setStatus(null);
        if (!!url_pattern.test(url)) {
            setLoading(true);
            axios.post('/convert/pdf', {
                url: url,
            })
                .then((res) => {
                    setDownloadLink(res.data);
                    setLoading(false);
                })
                .catch(e => console.log(e));
        }
        else {
            setErrorMessage("URL doesn't seem right");
        }
    }
    const createTXT = (e) => {
        e.preventDefault();
        setDownloadLink(null);
        setErrorMessage(null);
        setStatus(null);
        if (!!url_pattern.test(url)) {
            setLoading(true);
            axios.post('/convert/txt', {
                url: url,
            })
                .then((res) => {
                    setDownloadLink(res.data);
                    setLoading(false);
                })
                .catch(e => console.log(e));
        }
        else {
            setErrorMessage("URL doesn't seem right");
        }
    }
    const createZIP = (e) => {
        e.preventDefault();
        setDownloadLink(null);
        setErrorMessage(null);
        setStatus(null);
        if (!!url_pattern.test(url)) {
            setLoading(true);
            axios.post('/convert/zip', {
                url: url,
            })
                .then((res) => {
                    setDownloadLink(res.data);
                    setLoading(false);
                })
                .catch(e => console.log(e));
        }
        else {
            setErrorMessage("URL doesn't seem right");
        }
    }


    return (
        <div className={homeStyles.homeContainer}>
            <div className={homeStyles.homeNavBarContainer}>
                <div className={homeStyles.homeNavBarLogo} onClick={() => {window.location.reload()}}>
                    <span className={homeStyles.homeNavBarLogoLineOne}>Twitter</span>
                    <div className={homeStyles.homeNavBarLogoLineTwo}>
                        <span className={homeStyles.homeNavBarLogoLineTwoPartOne}>Thread</span>
                        <span className={homeStyles.homeNavBarLogoLineTwoPartTwo}>Cloner</span>
                    </div>
                </div>
            </div>
            {(loading)?
                <Loading status={status} url={url} />:
                (downloadLink)?
                    <Download downloadLink={downloadLink} />:
                    <HomeBody errorMessage={errorMessage} createPDF={createPDF} createZIP={createZIP} createTXT={createTXT} urlFieldChangeHandler={urlFieldChangeHandler} />}

            <div className={homeStyles.homeFooter}>
                <div className={homeStyles.footerContent}>
                    <span className={homeStyles.developedByText}>Developed By</span>
                    <a href={'https://www.linkedin.com/in/vishnu-mohanan/'} className={'link'} ><span className={homeStyles.developerName}>Vishnu Mohanan</span></a>
                </div>
            </div>
        </div>
    )
};

export default Home;
