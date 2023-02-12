


import styled from "@emotion/styled";

export const ContainerSideBarHome = styled.div`
background-color: ffff;
width: 30%;
height: 95%;
border-radius: 8px;
border: 0.5px solid #d8d8d8;
display: flex;
flex-direction: column;

@media screen and (max-width: 500px){
  width: 100vw;
  margin: 15px;
}

`

export const Title = styled.h3`
padding-top: 16px;
padding-left: 45px;
width: 100%;
height: 50px;
color:  #828181;
border-bottom: 0.5px solid #d8d8d8;

@media (max-width: 1100px) {

  font-size: 14px;
  padding: 10px;
}
`

export const Button = styled.button`
height: 60px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #ffffff;
color:  #5e5e5e;
border: none;
cursor: pointer;
transition: 0.10s ease-in-out;
font-size: 15px;

&:hover{
    background-color: #58b0e033;
    // border-left: 8px solid #0071ff;
  },

&:active: {
    transition: 0.10s ease-in-out,
    background-color: #0071ff;
  }
`
