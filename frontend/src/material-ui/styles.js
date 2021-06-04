import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles(theme => ({
    container: {
        padding: "20px",
    },
    buttonGroups: {
        margin: "10px 0",
    },
    pageHeader: {
        textAlign: "center",
        margin: "20px 0",
        backgroundColor: "orangered",
        color: "#fff",
        padding: "20px 0",
        borderRadius: "4px",
        fontSize: "24px",
    },
    sectionName: {
        margin: "20px 0",
        color: "#212121",
        fontWeight: "bold",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    formDatTime: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default myStyles;
