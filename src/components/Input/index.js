import React, { useEffect, useRef, useCallback } from "react";
import { TextInput } from "react-native";
import { useField } from "@unform/core";

function Input({ name, placeholder, onChangeText, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = "";
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChargeText = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text;

      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  return (
    <TextInput
      ref={inputRef}
      onChangeText={handleChargeText}
      defaultValue={defaultValue}
      placeholder={name}
      {...rest}
    />
  );
}

export default Input;
