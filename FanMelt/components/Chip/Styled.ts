import styled from 'styled-components'
import theme from '../../utils/theme'

export const ChipElem = styled.div.attrs({className: 'text-sm'})`
  width: 100%;
  max-width: 170px;
  min-width: 165px;
  margin-top: 10px;
  display: inline-block;
  border-radius: 30px;
  text-align: left;
  padding: 10px 20px;
  background: ${theme.colors.lightGrey};
  display: flex;

  .count {
    color: #a1a1a1;
  }

  &.selected {
    background: ${theme.colors.chipSelected};
    color: ${theme.colors.white};

    .count {
      color: #fda8c6;
    }
  }
`
