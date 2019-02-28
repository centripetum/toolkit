import styled from 'styled-components'
import { mapToTheme as theme } from 'styled-map'

const Label = styled.label`
  color: ${theme('label.color')};
  font-family: ${theme('label.fontFamily')};
  font-size: 1.2rem;
  padding: 0.5rem;
`
Label.displayName = 'StyledLabel'

Label.defaultProps = {
  theme: {
    label: {
      color: {
        default: 'SeaGreen'
      },
      fontFamily: {
        default: 'sans-serif'
      }
    }
  }
}

export default Label
