import styled from 'styled-components'
import { mapToTheme as theme } from 'styled-map'

const Input = styled.input`
  border: 1px solid ${theme('input.border.color')};
  color: ${theme('input.color')};
  font-size: 1.2rem;
  padding: 0.5rem;
`
Input.displayName = 'StyledInput'

Input.defaultProps = {
  theme: {
    input: {
      border: {
        color: {
          default: 'Gray'
        }
      },
      color: {
        default: 'Crimson'
      }
    }
  }
}

export default Input
