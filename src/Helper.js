import moment from "moment";
import { Keyboard } from "react-native";
import colors from "../constant/colors";
// import Toast from "react-native-root-toast";
// import analytics from "@react-native-firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";

const fbEvent = async (title, body) => {
  const defaultBody = {
    ITEM_ID: Math.random().toString(),
    ITEM_NAME: title,
    CONTENT_TYPE: "button",
  };
  console.log(`${title} event triggered`);
  // await analytics().logEvent(title, body ? body : defaultBody);
};
const INTERVAL = 1000;
const debounceCall = (callback) => {
  _.debounce(() => callback(), INTERVAL, {
    leading: true,
    trailing: false,
    maxWait: INTERVAL,
  });
};
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // console.log("store error is here", e);
    // saving error
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // console.log("data get error", e);
    // error reading value
  }
};

const login = async (token, user) => {
  await storeData("token", token);
  await storeData("user", JSON.stringify(user));
};

const getUser = async () => {
  return JSON.parse(await getData("user"));
};

const setUser = async (user) => {
  await storeData("user", JSON.stringify(user));
};
const setObj = async (key, data) => {
  if (key == "cart") {
    let userID = await getData("userId");
    let cart_key = `cart_${userID}`;
    await storeData(cart_key, JSON.stringify(data));
  } else {
    await storeData(key, JSON.stringify(data));
  }
};

const getObj = async (key) => {
  if (key == "cart") {
    let userID = await getData("userId");
    let cart_key = `cart_${userID}`;
    return JSON.parse(await getData(cart_key));
  }
  return JSON.parse(await getData(key));
};

const removeLocal = async (key) => {
  try {
    if (key == "cart") {
      let userID = await getData("userId");
      let cart_key = `cart_${userID}`;
      await AsyncStorage.removeItem(cart_key);
    } else {
      await AsyncStorage.removeItem(key);
    }
  } catch (error) {
    alert("local starage error");
  }
};
const showToast = (toast) => {
  // When Calling this function
  // call it this way: Helpers.showToast({message: "hello", hide: ()=>{alert("hello")}})
  // If you only want to show message call Helpers.showToastMessage("my message")

  const message = toast.message;
  const position = toast.position || "BOTTOM";
  const duration = toast.duration || 2000;
  const show = toast.show || undefined;
  const shown = toast.shown || undefined;
  const hide = toast.hide || undefined;
  const hidden = toast.hidden || undefined;

  console.log("toast", toast);

  if (message !== undefined) {
    Toast.show(message, {
      containerStyle: { borderRadius: 10, flexDirection: "row", bottom: 60 },
      textStyle: { top: 2, fontSize: 14 },
      duration: duration,
      position: Toast.positions[position],
      animation: true,
      hideOnPress: true,
      backgroundColor: toast?.color ? toast?.color : "#000",
      delay: 0,
    });
  }
};

const showToastMessage = (message, color) => {
  // showToast({ message, color });
};

const TimeDiffDaysMin = (from) => {
  // console.log('d1', from)
  // 2022-03-10 15:51:13
  const d = new Date();
  let month = Number(d.getMonth()) + 1;
  let day = d.getDate();
  let year = d.getFullYear();
  let hour = Number(d.getHours());
  var b = moment([year, month, day]);
  // console.log("month, year, day", month, year, day);
  let get_date = from;
  let break_date1 = get_date.split(" ");
  let date = break_date1[0];
  let time = break_date1[1];
  let break_date = date.split("-");
  let break_time = time.split(":");
  var a = moment([break_date[0], break_date[1], break_date[2]]);
  let hrs = Number(break_time[0]) - hour;
  let differ = a.diff(b) / 1000;
  let total = differ + hrs * 3600;
  // console.log("diff--->", hrs-hour);

  return total;
};

const convert = (from) => {
  // console.log('d1', d1_utc)
  // 2022-03-10 15:51:13
  let get_date = from;
  let break_date1 = get_date.split(" ");
  let date = break_date1[0];
  let time = break_date1[1];
  let break_date = date.split("-");
  let break_time = time.split(":");

  var d2_utc = new Date(
    break_date[0],
    break_date[1] - 1,
    break_date[2],

    break_time[0],
    break_time[1],
    break_time[2]
  );
  // console.log('hours', break_time[0]+5)
  return d2_utc;
};

const hoursTimeDiff = (startTime, endTime) => {
  // var todayDate = getCurrentDate(); // return in format YYYY-MM-DD
  var startDate = convert(startTime);
  var endDate = convert(endTime);

  // var startDate = new Date(`${startTime}`);
  // var endDate = new Date(`${endTime}`);
  var timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
  // console.log('timeDiff', timeDiff);
  var hh = Math.floor(timeDiff / 1000 / 60 / 60);
  hh = ("0" + hh).slice(-2);
  // console.log('hh', hh);
  timeDiff -= hh * 1000 * 60 * 60;
  var mm = Math.floor(timeDiff / 1000 / 60);
  mm = ("0" + mm).slice(-2);

  timeDiff -= mm * 1000 * 60;
  var ss = Math.floor(timeDiff / 1000);
  ss = ("0" + ss).slice(-2);

  // console.log("Time Diff- " + hh + ":" + mm + ":" + ss);
  return { hh: hh, mm: mm, ss: ss };
};

const determineRatio = (intervalDiff, duration) => {
  let totalHours =
    intervalDiff.hh + " : " + intervalDiff.mm + " : " + intervalDiff.ss;

  var totalHoursArray = totalHours.split(":");

  var numerator =
    parseInt(totalHoursArray[0]) * 3600 +
    parseInt(totalHoursArray[1]) * 60 +
    parseInt(totalHoursArray[2]);

  var res = numerator / duration;
  return res / 3600;
};

const numbertoHours = (value) => {
  var hours = Math.floor(value);
  var minutes = Math.round((value % 1) * 100) / 100;

  return { hours: hours, minutes: minutes };
};
const charIsLetter = (char) => {
  if (typeof char !== "string") {
    return false;
  }
  return char.toLowerCase() !== char.toUpperCase();
};
const changeUrl = (string) => {
  const urlPattern = new RegExp(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  );
  // let string = e.target.value;

  if (urlPattern.test(string)) {
    //string is url

    ///clear http && https from string
    string = string.replace("https://", "").replace("http://", "");

    //add https to string
    string = `https://${string}`;
  }
  // console.log("string--->", string);
};
function capitalizeFirstLetter(string) {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}
function deepCopy(array) {
  const dataArray = JSON.stringify(array);
  return JSON.parse(dataArray);
}
function removeCommon(Arr1, Arr2) {
  let result = Arr1.filter((k) => !Arr2.some((p) => p.id == k.id));
  return result;
}
const _request = (url, details, callback, onBlur, desc) => {
  let _results = [];
  let _requests = [];
  details && Keyboard.dismiss();
  const request = new XMLHttpRequest();
  _requests.push(request);
  request.timeout = 5000;
  // request.ontimeout = props.onTimeout;
  request.onreadystatechange = () => {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status === 200) {
      // console.log("request.status", request.status)
      const responseJSON = JSON.parse(request.responseText);
      // console.log("responseJSON", responseJSON)
      if (details) {
        if (responseJSON.status === "OK") {
          // if (_isMounted === true) {
          const getDetails = responseJSON.result;
          var postal = null;
          var city = null;
          var country = null;
          var province = null;
          // console.log("getDetails.address_components", getDetails.address_components)
          getDetails.address_components.map((item) => {
            if (item.types[0] === "locality") {
              city = item.long_name;
            } else if (item.types[0] === "country") {
              country = item.short_name;
            } else if (item.types[0] === "administrative_area_level_1") {
              province = item.long_name;
            } else if (item.types[0] === "postal_code") {
              postal = item.long_name;
            }
          });
          let address = {
            address: desc,
            city: city,
            state: province,
            zipcode: postal,
            country: country,
          };
          onBlur();
          console.log("address--->", address);
          callback(address);
          // _onBlur();
          // setStateText(_renderDescription(rowData));
        }
      } else {
        if (typeof responseJSON.predictions !== "undefined") {
          const results = responseJSON.predictions;
          // console.log("results-->", results);
          callback(results);
          // return results;
          // _results = results;
        }
        if (typeof responseJSON.error_message !== "undefined") {
          // console.warn(
          //   "google places autocomplete: " + responseJSON.error_message
          // );
          callback(responseJSON.error_message);
        }
      }
    } else {
      return "google places autocomplete: request could not be completed or has been aborted";
    }
  };
  request.open("GET", url);
  request.send();
};
const keyGenerator = () => Math.random().toString(36).substr(2, 10);
const randomHexColor = () => {
  return "#000000".replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

function getDummyArray(limit) {
  return new Array(limit).fill(0).map((_, index) => {
    const repetitions = Math.floor(Math.random() * 3) + 1;

    return {
      key: index.toString(),
      text: "Lorem ipsum dolor amet ".repeat(repetitions),
      author: "Arnaud",
      tag: "eveningkid",
    };
  });
}
// if an array contains objects with same ids take only of them javascript
const filteredArr = (array, obj) => {
  if (array) {
    let result = array.reduce((acc, current) => {
      const x = acc.find((item) => obj(item, current));
      if (!x) {
        // console.log('[...acc, current]', [...acc, current])
        return [...acc, current];
      } else {
        return acc.map((x) => x);
      }
    }, []);
    return result;
  } else {
    return null;
  }
};

export default {
  storeData,
  getData,
  login,
  getUser,
  setUser,
  showToast,
  showToastMessage,
  convert,
  hoursTimeDiff,
  numbertoHours,
  determineRatio,
  charIsLetter,
  changeUrl,
  capitalizeFirstLetter,
  TimeDiffDaysMin,
  deepCopy,
  removeCommon,
  _request,
  keyGenerator,
  randomHexColor,
  setObj,
  getObj,
  getDummyArray,
  removeLocal,
  fbEvent,
  filteredArr,
  debounceCall,
};
