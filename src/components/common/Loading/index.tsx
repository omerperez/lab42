import { DEFAULT_LOADING_TEXT } from "@/constants";
import {
  LoadingAnimationContainer,
  LoadingContainer,
  LoadingDot,
  LoadingText,
} from "./styles";

interface LoadingProps {
  text?: string;
}
export const Loading = ({ text = DEFAULT_LOADING_TEXT }: LoadingProps) => (
  <LoadingAnimationContainer>
    <LoadingContainer>
      <LoadingDot />
      <LoadingDot />
      <LoadingDot />
    </LoadingContainer>
    <LoadingText>{text}</LoadingText>
  </LoadingAnimationContainer>
);
