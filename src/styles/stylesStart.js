import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const TitlePage = styled.Text`
  margin-top: 50px;
  font-size: 25px;
  text-align: center;
  color: ${(props) => props.theme.COLORS.text};
  font-family: ${(props) => props.theme.FONTS.bold};
`;

export const Image = styled.Image`
  height: ${Dimensions.get("window").width * 0.8}px;
  margin-top: 20px;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.COLORS.textComplement};
  font-family: ${(props) => props.theme.FONTS.light};
  margin-top: 25px;
`;

export const Next = styled.TouchableOpacity`
  background-color: ${props => props.theme.COLORS.colorButton};
  border-radius: 16px;
  margin-top: 30px;
  padding: 7px;
`;
