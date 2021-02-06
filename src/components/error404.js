const ErrorNotFound = () => {
    const styles = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        color: "#663399",
        fontFamily: "\"Source Code Pro\", monospace",
        fontSize: "30px",
        fontWeight: "700",
    };
    return (
        <div style={styles}>
            Error 404
        </div>
    );
};

export default ErrorNotFound;
