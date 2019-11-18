import styled from 'styled-components'

export const CatItemWrapper = styled.div.attrs({
    className: "xl:w-1/3"

})`
  margin-bottom: 20px;
  min-height: 270px;
  max-height: 650px;
  padding-right: 10px;
  padding-left: 10px;
  min-width: 145px;
  width: 33.3333%;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 440px) {
    width: 100%;
    margin: 20px 30px
  }
`;

export const ImgBtnContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CatImageItem = styled.div`
  height: 70%;
  width: 100%;

  img {
    border-radius: 24px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    width: 100%;
    height: 100%;
    max-height: 588px;
    object-fit: cover;
  }
`;
export const CatLeftTxt = styled.div.attrs({className: 'text-2xl'})`
    font-weight: 700;
    padding-bottom: 2px;
    text-transform: uppercase;
`
export const CatItemContainer = styled.div`
  box-shadow: 0 2PX 32PX 0 RGBA(0,0,0,.15);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 24px;
  /* cursor: pointer; */
  height: 100%;

  &:hover {
    transform: translateY(-3px);
  }
`
export const CatItemDetailTxt = styled.div.attrs({className: 'text-sm'})`
    color: #999;
    font-weight: 500;
`
export const CatItemTitle = styled.div.attrs({className: 'text-lg'})`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    font-weight: 500;
    line-height: 1.3;
    @media (max-width: 1280px) {
        width: 150px;
      }
    @media (max-width: 1024px) {
        width: 100px;
      }
`
export const CatItemVideoSection = styled.div`
    
`
export const CatItemLeftContent = styled.div`
    border-color: rgb(213, 56, 255);
    background-color: rgb(213, 56, 255);
    backgroundc-clip: border-box;
    background-image: none;
    algign-items: center;
    background-position: top;
    border-radius: 50%;
    display: flex;
    height: 36px;
    justify-content: center;
    margin-right: 14px;
    width: 36px;
`
export const CatItemRightContent = styled.div`
    
`
export const ImgBtnLeftContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        background: transparent;
        margin-bottom: 0px;
        transform: scale(1);
        transition: transform .1s;
        
        &:hover {
            transform: scale(1.3);
            transition: transform .1s;
        }
    }
`

export const ImgBtnRightContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
        background: transparent;
        margin-bottom: 0px;
        margin-left: 20px;
        transform: scale(1);
        transition: transform .1s;
        &:hover {
            transform: scale(1.3);
            transition: transform .1s;
        }
    }
`

export const CatItemTxtSection = styled.div`
    display: flex;
    padding: 10px 15px;
    color: #212121;
    border-color: #dddddd'
    border-bottom: none;
`