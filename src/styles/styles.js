import { StyleSheet } from "react-native"
import theme from "../assets/themes/theme";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: theme.colors.graySmoke,
        backgroundColor: theme.colors.white,
        justifyContent: "space-between"
    }
})


export default styles;