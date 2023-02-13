import { MainContainerStyled } from '../../styles';
import { ContainerProps } from '../../types'
  
  const MainContainer = (props: ContainerProps) => {
    return <MainContainerStyled>{props.children}</MainContainerStyled>;
  };

export default MainContainer;