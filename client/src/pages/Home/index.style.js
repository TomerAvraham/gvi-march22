



import styled from "@emotion/styled";

export const ContainerHome = styled.div`
display: flex;
align-items: center;
padding-right: 10%;
max-width: 1280px;
margin: 15px auto;
padding: 0 2rem;
width: 100vw;
min-height: 100vh;


@media screen and (max-width: 500px){
    padding-right: 2%;
    flex-direction: column;
}
`

export const ContainerHomeMain = styled.div`
width: 95vw;
height: 95vh;
display: flex;
margin-left: 15px;
align-items: center;
flex-direction: column;

`

export const BoxPendingInvitations = styled.div`
padding: 15px;
 margin: 0 auto;
width: 65vw;
height: 48px;
border-radius: 8px;
border: 0.5px solid #d8d8d8;
display: flex;
align-items: center;
justify-content: space-between;
color: #5e5e5e;
`

export const BoxAddPersonalContacts = styled.div`
padding: 15px;
 margin: 15px auto;
width: 65vw;
height: 170px;
border-radius: 8px;
border: 0.5px solid #d8d8d8;
display: flex;
flex-direction: column;
color: #5e5e5e;


@media screen and (max-width: 500px){
    height: 60%;
}
`

export const ImageBookIcon = styled.img`
width: 50px;

`
ImageBookIcon.defaultProps = {
    src: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/address-book-elements-glossy-icon_z1d7o2IO_thumb.jpg",
}

export const DivParagraph = styled.div`
display: flex;
align-items: center;
`
export const NoteParagraph = styled.p`
margin-top: 10px;
font-size: 12px;
`
export const InputBoxAddPersonal = styled.input`
margin-top: 10px;
padding: 8px;
`

