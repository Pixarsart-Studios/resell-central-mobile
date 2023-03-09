import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ManageReturnsData } from '../../../DummyData';
import { styles } from './styles';

const Pending = () => {
  return (
    <View style={styles.container}>
       {ManageReturnsData.map((item, index) => {
        return (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
              <Image
                style={styles.image}
                source={require("../../Assets/Images/listImage.png")}
              />
              <View style={styles.itemLeftView}>
                <Text style={styles.detailText}>{item.code}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.detailText}>{item.detail}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <View style={styles.itemRightView}>
                <Text style={styles.detailText}>{item.quantity}</Text>
                <View
                  style={
                    item.status == "Resolved"
                      ? styles.resolved
                      : item.status == "Resolved"
                      ? styles.resolved
                      : item.status == "Unresolved"
                      ? styles.unResolved
                      : null
                  }
                >
                  <Text
                    style={
                      item.status == "Resolved"
                        ? styles.resolvedText
                        : item.status == "Resolved"
                        ? styles.unResolved
                        : item.status == "Unresolved"
                        ? styles.unResolvedText
                        : null
                    }
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
            <View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default Pending
