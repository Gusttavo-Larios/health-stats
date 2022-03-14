import React from "react";
import Toast, { BaseToast } from "react-native-toast-message";

function PersonalizedToast() {
  const toastConfig = {
    seccess: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "#229658" }}
        text1Style={{
          fontSize: 18,
          fontFamily: "Roboto_700Bold",
        }}
        text2Style={{
          fontSize: 16,
          fontFamily: "Roboto_400Regular",
        }}
      />
    ),
    error: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "#EB593D" }}
        text1Style={{
          fontSize: 18,
          fontFamily: "Roboto_700Bold",
        }}
        text2Style={{
          fontSize: 16,
          fontFamily: "Roboto_400Regular",
        }}
      />
    ),
  };
  return <Toast config={toastConfig} />;
}

export default PersonalizedToast;
