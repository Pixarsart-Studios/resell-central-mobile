import { bgLightGrey, bgWhite, mainBlue, strokeGray, textDarkGrey, textLightGrey, textWhite } from "@/Constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
    },
    itemView: {
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
        width: "88%",
        borderRadius: 5,
        padding: 16,
        backgroundColor: bgWhite,
        marginLeft: 24,
        marginTop: 16,
        shadowColor: textLightGrey,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
        elevation: 1,
        height: 152
        
    },
    logo: {
        height: 40,
        width: 40,
    },
    title: {
        fontWeight:'700',
        fontSize: 14,
        lineHeight:16.8,
        paddingLeft:8
    },
    detail: {
        fontWeight:'400',
        fontSize:14,
        lineHeight:18.2,
        paddingLeft: 8,
        color: textDarkGrey,
        marginVertical: 8
        
    },
    connectButton: {
        height: 32,
        width: 97,
        borderWidth: 1,
        borderColor: strokeGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:8,
        marginLeft: 8,
        borderRadius:5
    },
    connectedButton: {
        height: 32,
        width: 97,
        borderWidth: 1,
        backgroundColor: mainBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:8,
        marginLeft: 8,
        borderRadius: 5
    },
    connectText:{
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 12.18
    },
    connectedText : {
        color: textWhite,
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 12.18

    }
})