import { BigTextStyled } from '../../styles';
import { TextProps } from '../../types'
  
  const BigText = (props: TextProps) => {
    return <BigTextStyled>{props.children}</BigTextStyled>;
  };


export default BigText;