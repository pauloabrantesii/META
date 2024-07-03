import { useNavigation } from '@react-navigation/native';
import { Circle, Container, Title } from './styles';

type StoryProps = {
  title?: string;
  path?: string;
  children?: React.ReactNode;
  background?: string;
};

export const StoryComponents = ({ title, path, children, background, onPress }: StoryProps) => {
    const navigation = useNavigation();

  return (
     <Container>
        <Circle background={background} onPress={onPress}/>
        <Title>{title}</Title>
     </Container>
  );
};


