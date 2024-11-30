import Main from '../../pages/main-page';
import styled from 'styled-components';

const AppContainer = styled.div`
  overflow: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  );
}

export default App;
