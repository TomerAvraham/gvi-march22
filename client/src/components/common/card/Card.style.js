import styled from "@emotion/styled";




export const CardStyle = styled.div`
width: 240px;
height: 255px;
margin: 0 auto;
border-radius: 20px;
margin-top: 50px;
border: 0.5px solid #c5c5c5;
position: relative;
&:hover{
  border: 0.5px solid #8a8a8aa8;
  box-shadow:00 3px   #918f8f8e;
}
`

export const TopBackgroundImg = styled.img`
width: 100%;
height: 25%;
border-top-right-radius: 20px ;
border-top-left-radius: 20px ;

`

TopBackgroundImg.defaultProps = {
  src: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600",
}

export const UserImage = styled.img`
border-radius: 50%;
width: 76px;
height: 76px;
position: absolute;
top: 7%;
right: 60%;
transform: translate(50% 50%);

@media screen and (max-width: 1800px){
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
margin-bottom: 5%;
margin-top: 8px;
color:  #5e5e5e;
font-size: 15px;
font-family: var(--text--font);

`

export const DivEndCard = styled.div`
margin-top: 10px;
`