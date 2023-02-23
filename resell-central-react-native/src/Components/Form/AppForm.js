import React from 'react'
import { Formik } from 'formik'
const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
   console.log(children, 'children'),
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      
    >
      {() => <>{children}</>}
    </Formik>
  )
}
export default AppForm
