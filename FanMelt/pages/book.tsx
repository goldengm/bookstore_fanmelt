import styled from "styled-components";
import {NavBar} from "../components/NavBar/NavBar";
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import { Footer } from "../components/Footer/Footer";
import { CustomButton } from "../components/Button/CustomButton";
import { CustomImageButton } from "../components/ImageButton/CustomImageButton";

const Index = () => (
    <>
        <NavBar />
        <Body />
        <Footer />
    </>
);

export default Index;

const Body = () => (
    <BodyWrapper>
        <HeaderRow>
            <Header>
                <HeaderTitle>Brian Baumgartner</HeaderTitle>
            </Header>
        </HeaderRow>

        <BodyContainer>
            <BodyRow>
                <LeftCol>
                    <LeftColContainer>
                        <LeftColImage src="https://starboard-media.s3.amazonaws.com/v/no-wm-thumb-oTY5y0_fR-00001.jpg" alt="Video player preview" />
                        <VideoIcon src="https://d3el26csp1xekx.cloudfront.net/static/assets/video-cards-2.0/play.svg" />
                    </LeftColContainer>
                </LeftCol>

                <RightCol>
                    <RightColContainer>
                        <RightColContainerTitle>
                            For
                            <RightColContainerTitleStrong>Tanvi (pronounced "Thun-vee")</RightColContainerTitleStrong>
                            <Heart>
                                <HeartImage />
                                0
                            </Heart>
                        </RightColContainerTitle>
                        <DemoComment>
                            "Hilarious!"
                        </DemoComment>
                        <ButtonGroup>
                            <CustomButton 
                                text="Share on Twitter" 
                                color="#337ab7"
                                bgColor=""
                                fSize="14px"
                                fWeight="400"
                                padding="5px 10px"
                                lSpaceing=""
                                hoverC="#000"
                                hoverBG=""
                            />
                            <CustomButton
                                text="Share on FaceBook"
                                color="#337ab7"
                                bgColor=""
                                fSize="14px"
                                fWeight="400"
                                padding="5px 10px"
                                lSpaceing=""
                                hoverC="#000"
                                hoverBG=""
                            />
                            <CustomImageButton text="Download Video" src="download-to-storage-drive.svg"/>
                        </ButtonGroup>
                        <ConfirmationTalentLink>
                            <ConfirmationContainer>
                                <ConfirmationImageLink href="/brianbaumgartner">
                                    <ConfirmationImage src="https://d31wcbk3iidrjq.cloudfront.net/static/user/P7x2KzmoD.jpg?w=180&h=180&q=80)" />    
                                </ConfirmationImageLink>
                                <ConfirmationInformation>
                                    <NameLink href="/brianbaumgartner">
                                        Brian Baumgartner
                                    </NameLink>
                                    <Office>
                                        Actor - The Office
                                    </Office>
                                    <CustomButton 
                                        text="Book Brian Baumgartner" 
                                        color="#fff"
                                        bgColor="#fa005c"
                                        fSize="18px"
                                        fWeight="600"
                                        padding="5px 8px"
                                        lSpaceing=".5px"
                                        hoverC="#fff"
                                        hoverBG="#7b002d"
                                    />
                                </ConfirmationInformation>
                            </ConfirmationContainer>
                        </ConfirmationTalentLink>
                    </RightColContainer>
                </RightCol>
            </BodyRow>
        </BodyContainer>
    </BodyWrapper>
);

export const HeaderRow = styled.div`
    
`;

export const BodyWrapper = styled.div.attrs({className: "text-lg mt-0 pt-70 bg-white antialiased tracking-1"})`
`;

export const BodyContainer = styled.div.attrs({className: "md:max-w-full md:mt-40 md:p-0"})`
`;

export const BodyRow = styled.div.attrs({className: "flex text-gray-77 px-16-7 m-md:px-15 m-lmd:px-0 m-md:pt-15 m-md:flex-col"})`
`;

export const Header = styled.div.attrs({
    className: "bg-black absolute w-full hidden pt-70 overflow-hidden md:mx-0 md:text-center md:px-15 md:block md:h-500"
})`
`;

export const HeaderTitle = styled.span.attrs({className: "text-175 leading-none text-white tracking-10-m"})`
    font-family: fresh;
`;

export const LeftCol = styled.div.attrs({className: "relative bg-white h-full md:w-6/12 rounded-b-large rounded-tl-large rounded-tr-none md:rounded-large"})`
`;

export const LeftColContainer = styled.div.attrs({className: "relative pb-15"})`
`; 

export const LeftColImage = styled.img.attrs({className: "min-h-0 w-full relative rounded-b-large rounded-tl-large rounded-tr-none md:rounded-large max-h-1200"})`
`;

export const VideoIcon = styled.img.attrs({className: "absolute cursor-pointer bottom-25 left-15"})`
`;

export const RightCol = styled.div.attrs({className: "relative md:w-6/12"})`
`;

export const RightColContainer = styled.div.attrs({className: "bg-white h-full px-15 pt-5 pb-0 m-md:px-0 m-md:pb-0 m-md:pt-5  rounded-r-large rounded-l-none"})`
`;

export const RightColContainerTitle = styled.p.attrs({className: 'text-5xl leading-48 pt-5 pb-6'})`
`;

export const RightColContainerTitleStrong = styled.strong.attrs({className: "ml-3 tracking-1-1"})`
`;

export const Heart = styled.span.attrs({className: 'align-middle whitespace-no-wrap text-26'})`
`;

export const HeartImage = styled(HeartIcon).attrs({className: "-mt-100 ml-25 mr-2 text-32"})`
    color: #fa005c;
`;

export const DemoComment = styled.p.attrs({className: 'text-3xl italic leading-normal truncate border-l-4 border-solid pl-2 mb-30 border-pink-c'})`
`;

export const ButtonGroup = styled.div.attrs({className: "mb-6"})`
`;

export const ConfirmationTalentLink = styled.div.attrs({className: "border-t border-solid pt-6 pb-12 border-eee"})`
`;

export const ConfirmationContainer = styled.div.attrs({className: "flex flex-wrap"})`
`;

export const ConfirmationImageLink = styled.a.attrs({className: ""})`
`;

export const ConfirmationImage = styled.img.attrs({className: "mr-5 align-top rounded-half w-120 h-120"})`
`;

export const ConfirmationInformation = styled.div.attrs({className: "pt-100"})`
`;

export const NameLink = styled.a.attrs({className: "pt-15 pb-600 text-black font-bold hover:underline text-25"})`
    &:hover {
        text-decoration-color: #337ab7;
    }
`;

export const Office = styled.p.attrs({className: "mt-600 mb-300 text-999"})`
`;
