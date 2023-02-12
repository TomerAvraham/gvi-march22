import styled from "@emotion/styled";

  export const CardStyle = styled.div`
width: 90%;
height: 53%;
margin: 0 auto;
border-radius: 20px;
margin-top: 50px;
border: 0.5px solid #c5c5c5;
position: relative;

@media (min-width: 601px) {
    
  //  I didn't finish

}
@media (min-width: 1200px) {

//  I didn't finish

}
`

export const TopBackgroundImg = styled.img`
width: 100%;
height: 20%;
border-top-right-radius: 20px ;
border-top-left-radius: 20px ;

`

TopBackgroundImg.defaultProps = {
  src: "https://www.realco.co.il/wp-content/uploads/2020/01/%D7%A8%D7%A7%D7%A2-%D7%9E%D7%95%D7%91%D7%99%D7%99%D7%9C-min.jpg",
}

export const UserImage = styled.img`
border-radius: 50%;
width: 76px;
height: 76px;
position: absolute;
top: 10%;
right: 70%;
transform: translate(50% 50%);
@media screen and (max-width: 1200px){
  width: 66px;
  height: 66px;
  right: 65%;
}
`

UserImage.defaultProps = {
  src: "https://cdnb.artstation.com/p/assets/images/images/039/196/767/20210702010025/smaller_square/beomjun-baek-face-work.jpg?1625205625"
}

export const UsernameParagraph = styled.p`
margin-top: 40px;
padding-left: 15px;
cursor: pointer;
color:  var(--title--color);
font-family: var(--title--font);
`

export const UserAboutParagraph = styled.p`
padding-left: 15px;
padding-right:10px;
color: var(--text--color);
font-family: var(--text--font);

`