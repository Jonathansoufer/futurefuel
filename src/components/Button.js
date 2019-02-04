import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const StyledButton = styled(Button)`
  color: #FFFFFF;
  background: #4B85E5;
  font-size:16px;
  font-weight: 700;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  height:45px;
  width:280px;
  border: 0;
  outline:none;
  :hover {  
    background: #6998E7;
    cursor: pointer;
    }
`

export default StyledButton
