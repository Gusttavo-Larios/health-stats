import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Form } from "@unform/mobile";
import Input from "~/components/Input";

export const Emoji = styled.Text`
  font-size: 60px;
  margin: 40px auto 0 auto;
`;

export const TitlePage = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: ${(props) => props.theme.FONTS.medium};
  color: ${(props) => props.theme.COLORS.textRegister};
  margin: 5px auto 0 auto;
`;

export const ContainerUnform = styled(Form)`
  margin-top: 20px;
`;


export const InputRegister = styled(Input)`
    border-bottom-width: 1px;
    border-bottom-color: #CFCFCF;
    height: 40px;
    width: ${Dimensions.get("window").width * 0.65}px;
    text-align: center;
    font-family: ${props => props.theme.FONTS.regular};
    font-size: 18px;
    margin-top: 10px;
`;

export const Next = styled.TouchableOpacity`
    width: ${Dimensions.get("window").width * 0.65};
    background-color: ${props => props.theme.COLORS.colorButton};
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 10px;
    margin-top: 40px;
`;

export const NextLabel = styled.Text`
    font-family: ${props => props.theme.FONTS.medium};
    color: ${props => props.theme.COLORS.textButton};
    font-size: 20px;
`; 