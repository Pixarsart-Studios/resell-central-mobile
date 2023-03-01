import 'react-native-gesture-handler'
import React,{useState , useContext , useEffect} from 'react'
import { Provider, useDispatch } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import './src/Translations'
import DrawerNavigation from './src/Navigators/Drawer'
import {NavigationContainer} from '@react-navigation/native';
import AuthContext from './src/Config/AuthContext'
import { useReducer } from 'react'
import Languages from './src/Translations/resources/en'
import Accounting from '@/screens/Accounting/Accounting'
import AddProduct from '@/screens/AddProduct/AddProduct'
// import  from '@react-native-async-storage/async-storage/jest/async-storage-mock'

const reducer = (prevState, action) => {
  // console.log('action', action)
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: false,
        userToken: null,
      };
    case "NETINFO":
      return {
        ...prevState,
        isConnected: action.payload,
      };
    case "LANG":
      return {
        ...prevState,
        language: action.payload,
      };
  }
};

const lang_checker = (lang) => {
  if (lang == "English") {
    console.log("eng", lang);
    return Languages.en;
  } else if (lang == "Spanish") {
    console.log("sp", lang);
    return Languages.es;
  } else if (lang == "French") {
    console.log("fr", lang);
    return Languages.fr;
  } else if (lang == "Russian") {
    console.log("rus", lang);
    return Languages.ru;
  } else if (lang == "Chinese") {
    console.log("ch", lang);
    return Languages.ch;
  } else if (lang == "Hindi") {
    console.log("hi", lang);
    return Languages.hi;
  }
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    isSignout: true,
    userToken: null,
    isConnected: false,
    language: lang_checker("English"),
  });


  // const [language, setLang] = useState(null);
  // const { changeLanguage, myState } = useContext(AuthContext);
  // console.log("state", myState);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   async function getLanguage() {
  //     // let lang = await AsyncStorage.getItem("language");
  //     // if (lang) {
  //     //   console.log("lang", lang);
  //     //   setLang(lang);
  //     // }
  //   }
  //   getLanguage();
  // }, []);

 

  useEffect(() => {
    (async () => {
      let lang = 'English'
      // let token = await Helper.getData("homeToken");
      // let lang = await Helper.getData("language");
      console.log("lang", lang);
      // dispatch({
      //   type: "SIGN_IN",
      //   payload: token,
      // });
      if (lang) {
        let ln = lang_checker(lang);
        dispatch({
          type: "LANG",
          payload: ln,
        });
      }
    })();
  }, []);

  const authContext = {
    // signIn: async (token) => {
    //   try {
    //     dispatch({
    //       type: "SIGN_IN",
    //       payload: token,
    //     });
    //   } catch (e) {
    //     // console.log(e);
    //   }
    // },
    // signOut: async () => {
    //   try {
    //     await AsyncStorage.removeItem("homeToken");
    //     await AsyncStorage.removeItem("loginToken");
    //     await AsyncStorage.removeItem("userId");
    //     await AsyncStorage.removeItem("user");
    //     await AsyncStorage.removeItem("local");
    //     await AsyncStorage.removeItem("fcmToken");
    //     dispatchRdx(allActions.DataAction.onSignout());
    //     dispatchRdx(allActions.ApiAction.onSignout());
    //     // await AsyncStorage.removeItem("employeeId");
    //     dispatch({ type: "SIGN_OUT" });
    //   } catch (e) {
    //     dispatch({ type: "SIGN_OUT" });
    //   }
    // },
    changeLanguage: (val) => {
      // console.log("lang", val);
      let lang = lang_checker(val);
      dispatch({
        type: "LANG",
        payload: lang,
      });
    },

    myState : state
  }

  return(
    <AuthContext.Provider  value={authContext}>
      <Provider store={store}>
        <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          {/* <DrawerNavigation /> */}
          <AddProduct />
        </PersistGate>
        </NavigationContainer>
      </Provider>
  </AuthContext.Provider>
  )
}

export default App