import styled from 'styled-components'
import { mapToTheme as theme } from 'styled-map'

const Button = styled.button`
  background-color: ${theme('button.bg.color')};
  border: 1px solid ${theme('button.border.color')};
  color: ${theme('button.color')};
  font-size: 1.2rem;
  padding: 0.5rem;
`
Button.displayName = 'StyledButton'

Button.defaultProps = {
  theme: {
    button: {
      bg: {
        color: {
          disabled: 'LightGray',
          default: 'SeaGreen'
        }
      },
      border: {
        color: {
          disabled: 'DarkGrey',
          default: 'DarkSeaGreen'
        }
      },
      color: {
        default: 'White'
      }
    }
  }
}

export default Button
