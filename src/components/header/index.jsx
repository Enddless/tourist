import styled from 'styled-components';
import Logo from '../logo/index';
import Lead from '../lead/index';

const Container = styled.div`
  max-width: calc(var(--container-width) + var(--container-padding-x) * 2);
  margin-inline: auto;
  padding-inline: var(--container-padding-x);
  height: 100svh;
  display: flex;
  flex-direction: column;
`;
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 0;

  position: relative;
  z-index: 2;

  @include mobile {
    flex-direction: column;
    row-gap: 20px;
  }
`;

function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
      <Lead />
    </Container>
  );
}

export default Header;
