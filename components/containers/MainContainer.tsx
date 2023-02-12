import { MainContainerStyled } from '../../styles';
import { ContainerProps } from '../containers/types'
  
  const MainContainer = (props: ContainerProps) => {
    return <MainContainerStyled>{props.children}</MainContainerStyled>;
  };

export default MainContainer;