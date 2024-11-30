import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: clamp(1.25rem, 1.1rem + 0.75vw, 2rem);
  letter-spacing: 1px;
  line-height: 38px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <a href='#'>mntn </a>
    </LogoContainer>
  );
}

export default Logo;
