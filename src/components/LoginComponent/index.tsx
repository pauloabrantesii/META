import { useNavigation } from '@react-navigation/native';
import { InputComponent } from '~/components/InputComponent';
import { ButtonComponent } from '~/components/styledButton';
import { Container, CopyContainer, CreateAccount, CreateAccountContainer, ForgotContainer, ForgotText, Header, InputContainer, LoginContainer, Logo, NoHaveAccountText, SafeArea, SubTextCopy, Subtitle, TextCopy, Title, TitleContainer, WrapperInput, WrapperTitle } from './styles';

type LoginProps = {
  title?: string;
  path?: string;
  children?: React.ReactNode;
};

export const LoginComponent = ({ title, path, children }: LoginProps) => {
    const navigation = useNavigation();

  return (
 <SafeArea>
    <Header>
                <Logo source={require('assets/images/metatelecom_logo.png')} />
              </Header>
<Container>
    <LoginContainer>
        <TitleContainer>
            <WrapperTitle>
            <Title>
                Entrar
            </Title>
            </WrapperTitle>
      

            <Subtitle>
            Insira seu e-mail e senha para acessar a sua conta Meta Telecom.
            </Subtitle>
        </TitleContainer>

        <InputContainer>

        <WrapperInput>
        <InputComponent placeholder="Email" />
        </WrapperInput>
 

        <WrapperInput>
        <InputComponent placeholder="Senha" />
        </WrapperInput>
    </InputContainer>
<ForgotContainer>
<ForgotText>
        Esqueceu a senha ?
    </ForgotText>

</ForgotContainer>


<ButtonComponent title='ENTRAR' onPress={() => navigation.navigate('Home')}/>

<CreateAccountContainer>
    <NoHaveAccountText>Não possui uma conta?</NoHaveAccountText>
    <CreateAccount>Criar conta</CreateAccount>
</CreateAccountContainer>

    </LoginContainer>
</Container>
<CopyContainer>
    <TextCopy>Copyright © 2024 Meta Telecom</TextCopy>
    <SubTextCopy>ouvidoria@metatelecom.com.br</SubTextCopy>
</CopyContainer>
</SafeArea>
  );
};


