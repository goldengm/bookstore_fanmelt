import styled from 'styled-components'  

export const ShareButton = styled.a.attrs({
    className: 'bg-transparent uppercase border-0 leading-normal inline-block text-center whitespace-no-wrap align-middle cursor-pointer mr-100 mb-100'
})`
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    padding: ${props => props.padding};
    font-size: ${props => props.fSize};
    border-radius: 3px;
    font-weight: ${props => props.fWeight};
    touch-action: manipulation;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};

    &:hover, &:focus {
        color: ${props => props.hoverC};
        background-color: ${props => props.hoverBG};
    }
`;