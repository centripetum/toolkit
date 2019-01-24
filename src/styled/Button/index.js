import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? 'LightGray' : 'SeaGreen')};
  border: 1px solid
    ${({ disabled }) => (disabled ? 'DarkGray' : 'DarkSeaGreen')};
  color: White;
  font-size: 1.2rem;
  padding: 0.5rem;
`
Button.displayName = 'StyledButton'

export default Button
