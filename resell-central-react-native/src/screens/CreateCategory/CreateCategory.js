import { View, Text, SafeAreaView,ScrollView } from 'react-native'
import MainHeader from '@/Components/MainHeader/MainHeader'
import React, {useState} from 'react'
import { styles } from './styles'
import Input from '@/Components/Input/Input'
import Button from '@/Components/Button/Button'
import CheckBox from '@react-native-community/checkbox'

const CreateCategory = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
       back='BACK'
       heading='Create Category' />
        <ScrollView style={styles.childContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>General information</Text>
      </View>
     
      <View style={styles.labelContainer}>
        <Text style={styles.emailLabel}>Title</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input style={styles.input} />
        <View style={styles.passwordLabel}>
          <Text style={styles.passwordLabelText}>Description</Text>
        </View>
        
        <Input style={styles.input} />
      </View>
        <View style={styles.heading}>
        <Text style={styles.headingText}>Search Engine Preview</Text>
        </View>
      <View style={styles.labelContainer}>
        <Text style={styles.emailLabel}>Slug</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input style={styles.input} />
        <View style={styles.passwordLabel}>
          <Text style={styles.passwordLabelText}>Title</Text>
        </View>
        <Input style={styles.input} />
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.emailLabel}>Description</Text>
      </View>
      
      <View style={styles.inputContainerForDescription}>
        <Input style={styles.input} />
        </View>
        <View style={styles.heading}>
        <Text style={styles.headingText}>Category Type</Text>
        </View>
    
        <View>
            <View style={styles.categoryTypeView}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <View style={styles.categoryTypeTextView}>
                <Text style={styles.categoryOption}>Manual</Text>
                <Text style={styles.categoryDescText}>Add products to this collection one by one. </Text>
              </View>
            </View>

            <View style={styles.categoryTypeView}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <View style={styles.categoryTypeTextView}>
                <Text style={styles.categoryOption}>Automated</Text>
                <Text style={styles.categoryDescText}>Existing and future products that match the conditions you set will automatically be added to this collection.</Text>
              </View>
            </View>
            
        </View>
        <View style={styles.heading}>
        <Text style={styles.headingText}>Conditions</Text>
        </View>
          
            <Text style={styles.cautionText}>Product Must Match</Text>
        <View style={{flexDirection: 'row'}}>
            <View style={styles.categoryTypeView}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <View style={styles.categoryTypeTextView}>
                <Text style={styles.categoryOption}>All Conditions</Text>
              </View>
            </View>

            <View style={styles.categoryTypeView}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <View style={styles.categoryTypeTextView}>
                <Text style={styles.categoryOption}>Any Conditions</Text>
              </View>
            </View>
            
        </View>

        <View style={styles.labelContainer}>
        <Text style={styles.emailLabel}>Product Tag</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input style={styles.input} />
        <View style={styles.passwordLabel}>
          <Text style={styles.passwordLabelText}>Product Equal To</Text>
        </View>
        
        <Input style={styles.input} />
      </View>
        <Text style={styles.addAnotherConditionsText}>+ ADD ANOTHER CONDITION</Text>
    </ScrollView>
      <View style={styles.buttonContainer}>
      <Button title={'CREATE CATEGORY'}
      onPress={()=> navigation.navigate('DashboardScreen')}/>
      </View>
    </SafeAreaView>
  )
}

export default CreateCategory