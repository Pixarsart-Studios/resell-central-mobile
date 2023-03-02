import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Image } from 'react-native'

const TableView = ({label, source, height, width, paddingLeft, justifyContent, alignItems, marginLeft})=>{
    return(
        <View style={[source !== null ? styles.table : styles.imageAndIconView, { width: width, paddingLeft: paddingLeft, justifyContent: justifyContent, alignItems: alignItems, marginLeft: marginLeft  }]}> 
        <Text>{label}</Text>     
        <Image source={source} resizeMode="contain"
                style={styles.icon} />         
       </View>
    )
}

export {TableView}

