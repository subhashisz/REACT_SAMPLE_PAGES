import React from "react";
import Input from "../app-form-elements/Input";
import Textarea from "../app-form-elements/TextArea";
import Select from "../app-form-elements/Select";
import RadioButtons from "../app-form-elements/RadioButtons";
import CheckboxGroup from "../app-form-elements/CheckboxGroup";
import DatePicker from "../app-form-elements/DatePicker";
//import ChakraInput from "../app-forms/ChakraInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    // case "chakraInput":
    //   return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
