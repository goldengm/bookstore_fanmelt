import styled from 'styled-components'

export const GridImageContainer = styled.div`
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 5px;
  /* cursor: pointer; */
  height: 100%;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const GridImageWrapper = styled.div.attrs({
    className: "w-1/4"
})`
  margin-bottom: 20px;
  min-height: 170px;
  max-height: 350px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  min-width: 145px;
  width: 25%;

  @media (max-width: 768px) {
    width: 50% !important;
  }
  @media (max-width: 320px) {
    height: 220px;
  }
`;

export const Price = styled.span.attrs({className: 'lg:text-base text-sm'})`
  color: #fff;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 1px 14px;
  position: absolute;
  right: 11px;
  top: 11px;
`;

export const ImageItem = styled.div`
  background: #eee;
  height: 100%;
  width: 100%;
  max-height: 280px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 280px;
  }
`;

export const ImageContent = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px 12px;
`;

export const SmallTitle = styled.a`
  color: #6c6c6c;
  font-size: 0.6875rem;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &:after {
    font-size: 0.8125rem;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }
  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;

export const Title = styled.h3.attrs({className: 'text-xl'})`
  color: #4d4d4d;
  margin: 0;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
`;