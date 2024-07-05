import { useNavigation } from '@react-navigation/native';
import { Circle, Container, Icon, Title } from './styles';

type StoryProps = {
  title?: string;
  path?: string;
  children?: React.ReactNode;
  background?: string;
  icon?: string;
  onPress?: () => void;
};

export const StoryComponents = ({ title, path, children, background, onPress, icon }: StoryProps) => {
    const navigation = useNavigation();

  return (
     <Container>
        <Circle background={background} onPress={onPress}>
          <Icon source={icon}/>
        </Circle>
        <Title>{title}</Title>
     </Container>
  );
};


