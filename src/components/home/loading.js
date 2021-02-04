import loadingStyles from "./loadingStyles.module.css";
import BoxLoading from "./boxLoading/BoxLoading";

const Loading = (props) => {
    return (
        <div className={loadingStyles.container}>
            <div className={loadingStyles.urlContainer}>
                <p className={loadingStyles.urlText}>
                    {props.url}
                </p>
            </div>
            <BoxLoading color={"#663399"} speed={0.8} size={"default"} />
            <div className={loadingStyles.statusText}>{props.status}</div>
        </div>
    );
}

export default Loading;
