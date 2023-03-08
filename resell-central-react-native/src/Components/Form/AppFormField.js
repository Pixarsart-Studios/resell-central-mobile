import React from "react";
import { Text, TextInput } from "react-native";
import { Formik, Field } from "formik";

const AppFormField = (props) => {
  const {
    placeholder,
    field: { name, onBlur, onChange, value, style },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    // console.log('App Form Field///////////', name),
    <>
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        style={style}
        {...inputProps}
      />
      {hasError && <Text style={{ color: "red" }}>{errors[name]}</Text>}
    </>
  );
};
export default AppFormField;
