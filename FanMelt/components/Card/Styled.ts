import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div.attrs({
  className: 'relative px-0 pt-0 pb-100 flex flex-col mr-100 h-full mb-5 cursor-pointer'
})`
  background: ${theme.colors.white};
  border-radius: 4px;
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  max-height: 25rem;

  @media (min-width: 1200px) {
    width: calc(25% - 20px);
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 33.33%;
  }

  @media (min-width: 250px) and (max-width: 767px) {
    width: 50%;
    max-height: 20rem;
  }

  .details {
    .title {
      font-size: 0.8125rem;
      color: ${theme.colors.cardMediumGrey};
    }

    padding: 10px 12px;
    .name {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${theme.colors.cardDarkGrey};
    }

    .tags button {
      outline: none;
      background: transparent;
      border: none;
      position: relative;
      font-size: 0.6875rem;
      color: ${theme.colors.cardMediumGrey};
      padding-left: 8px;

      :hover {
        border-bottom: 1px solid ${theme.colors.cardMediumGrey};
      }

      :nth-child(n+2) :before {
        width: 4px;
        height: 4px;
        background-color: ${theme.colors.cardMediumGrey};
        border-radius: 50%;
        content: "aa";
        font-size: 2px;
        position: absolute;
        top: 6px;
        left: 2px;
        color: ${theme.colors.cardMediumGrey};
      }
    }
  }

  .price {
    position: absolute;
    right: 8px;
    top: 8px;
    background: #00000080;
    color: ${theme.colors.white};
    padding: 2px 10px;
    border-radius: 12px;
  }

  :hover {
    margin-top: -3px;
  }
`;
export const Img = styled.div`
  height: 80%;
  background-image: url(${({ src }) => src ? src : '' });
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

// col-lg-3 col-md-4 col-sm-4 col-xs-6