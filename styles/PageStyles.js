import { StyleSheet, Platform } from "react-native";
import Colors from "./Colors";

const PageStyles = StyleSheet.create({
    page: {
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical:10,
        flex: 1,

    },

    pageNoHeader: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        paddingHorizontal: 20,
        paddingBottom: 10,
        flex: 1
    }
});

export default PageStyles;