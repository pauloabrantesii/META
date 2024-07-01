import { useNavigation } from '@react-navigation/native';
import { Circle, Container, Title } from './styles';

type StoryProps = {
  title?: string;
  path?: string;
  children?: React.ReactNode;
  background?: string;
};

export const StoryComponents = ({ title, path, children, background }: StoryProps) => {
    const navigation = useNavigation();

  return (
     <Container>
        <Circle background={background} />
        <Title>{title}</Title>
     </Container>
  );
};


