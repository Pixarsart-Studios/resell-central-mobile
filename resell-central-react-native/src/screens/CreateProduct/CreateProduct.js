import { View, Text, SafeAreaView, ScrollView,Image } from 'react-native'
import React from 'react'
import MainHeader from '@/Components/MainHeader/MainHeader'
import { bgLightGrey, textDarkGrey, textLightGrey } from '@/Constants/Colors'
import Button from '@/Components/Button/Button'
import { createProductData } from '../../../DummyData'
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateProduct = () => {
  return (
    <SafeAreaView>
        <MainHeader back={'BACK'} heading={'Create Product'} />
        <ScrollView horizontal={true}>
        <View>
        <View style={{flexDirection: 'row'}}>
           <View style={{ height: 50, width: 50, borderLeftWidth: 1,borderTopWidth:1, borderColor: textLightGrey, borderTopLeftRadius: 5, marginLeft: 24}}> 
           </View>
           <View style={{ height: 50, width: 65, borderLeftWidth: 1,borderTopWidth: 1, borderColor: textLightGrey}}> 
           </View>
           <View style={{ height: 50, width: 140, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
            <Text>Category</Text>
            <Image
            resizeMode='contain'
            style={{height: 15, width: 15}}
            source={require('../../Assets/Images/angleDown.png')} />
           </View>
           <View style={{ height: 50, width: 80, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
            <Text>Q</Text>
            <Image
            resizeMode='contain'
            style={{height: 15, width: 15}}
            source={require('../../Assets/Images/angleDown.png')} />
           </View>
           <View style={{ height: 50, width: 80, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
            <Text>Year</Text>
            <Image
            resizeMode='contain'
            style={{height: 15, width: 15}}
            source={require('../../Assets/Images/angleDown.png')} />
           </View>
           <View style={{ height: 50, width: 180, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,paddingLeft: 10, justifyContent: 'center'}}> 
            <Text>Product</Text>
           </View>
           <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey, justifyContent: 'center', alignItems: 'center'}}> 
            <Text>Collection</Text>
           </View>
           <View style={{ height: 50, width: 80, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
            <Text>Qty.</Text>
            <Image
            resizeMode='contain'
            style={{height: 15, width: 15}}
            source={require('../../Assets/Images/angleDown.png')} />
           </View>
           <View style={{ height: 50, width: 180, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,paddingLeft: 10, justifyContent: 'center'}}> 
            <Text>Description</Text>
           </View>
           <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
            <Text>Status</Text>
            <Image
            resizeMode='contain'
            style={{height: 15, width: 15}}
            source={require('../../Assets/Images/angleDown.png')} />
           </View>
           <View style={{ height: 50, width: 130, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
            <Text>Sale Price</Text>
            <Image
            resizeMode='contain'
            style={{height: 15, width: 15}}
            source={require('../../Assets/Images/angleDown.png')} />
           </View>
           <View style={{ height: 50, width: 130, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
            <Text>Discount</Text>
            <Image
            resizeMode='contain'
            style={{height: 15, width: 15}}
            source={require('../../Assets/Images/angleDown.png')} />
           </View>
           <View style={{ height: 50, width: 50, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center'}}> 
            <Text>RC</Text>
           </View>
           <View style={{ height: 50, width: 50, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center'}}> 
            <Text>AUT</Text>
           </View>
           <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center'}}> 
            <Text>Serial No.</Text>
           </View>
           <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center', borderTopRightRadius:5}}> 
            <Text>Sub Title</Text>
           </View>
            </View>
            {
           createProductData.map((data, i) => {
            return (
                <View key={i} style={{flexDirection: 'row'}}>
                <View style={{ height: 50, width: 50, borderLeftWidth: 1,borderTopWidth:1, borderColor: textLightGrey, marginLeft: 24, justifyContent: 'center', alignItems:'center'}}> 
                   <Text>{data.id}</Text>
                </View>
                <View style={{ height: 50, width: 65, borderLeftWidth: 1,borderTopWidth: 1, borderColor: textLightGrey, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}> 
                <Image style={{height: 40, width:20}} source={data.baseBallImage1} />
                <Image style={{height: 40, width:20}} source={data.baseBallImage2} />
                
                </View>
                <View style={{ height: 50, width: 140, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
                 <Text>{data.category}</Text>                 
                </View>
                <View style={{ height: 50, width: 80, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
                 <Text>{data.q}</Text>
                 
                </View>
                <View style={{ height: 50, width: 80, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
                 <Text>{data.year}</Text>
                </View>
                <View style={{ height: 50, width: 180, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,paddingLeft: 10, justifyContent: 'center'}}> 
                 <Text>{data.product}</Text>
                </View>
                <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey, justifyContent: 'center', alignItems: 'center'}}> 
                </View>
                <View style={{ height: 50, width: 80, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
              
                </View>
                <View style={{ height: 50, width: 180, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,paddingLeft: 10, justifyContent: 'center'}}> 
                 
                </View>
                <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
                 <Text>{data.status}</Text>
                 
                </View>
                <View style={{ height: 50, width: 130, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
                 <Text>{data.salePrice}</Text>
                 
                </View>
                <View style={{ height: 50, width: 130, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}> 
                 <Text>{data.discount}</Text>
                
                </View>
                <View style={{ height: 50, width: 50, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center'}}> 
                </View>
                <View style={{ height: 50, width: 50, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center'}}> 
                </View>
                <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center'}}> 
                </View>
                <View style={{ height: 50, width: 100, borderLeftWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderColor: textLightGrey,justifyContent: 'center', alignItems: 'center', borderTopRightRadius:5}}> 
                </View>
                 </View>
            )
          })
         }
         <View style={{borderWidth:.1, backgroundColor: textLightGrey, marginLeft: 24 }}></View>
        </View>
        </ScrollView>
        
        <View>

        </View>

        <Button title={'LIST YOUR ITEMS'} />
    </SafeAreaView>
  )
}

export default CreateProduct