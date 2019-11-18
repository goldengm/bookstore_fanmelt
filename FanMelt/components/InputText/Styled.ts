import styled from 'styled-components'

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: table;
    border-collapse: separate;
    
    input {
        padding: 0;
        border: none;
        border-radius: 0;
        line-height: 1.3;
        box-shadow: inset 0 -1px 0 #ddd;
        display: table-cell;
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-bottom: 0;
        height: 38px;
        background-color: transparent;
        background-image: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:focus {
            box-shadow: inset 0 -2px 0 #337ab7;
            z-index: 3;
            outline: unset;
        }
        &::placeholder{
          color: #ddd;
        }
    }
`
