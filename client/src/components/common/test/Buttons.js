
import styled from "@emotion/styled";


export const PrimaryButton = styled.button`
border: 1px solid #0071ff;
color: #0062ff;
padding: 5px;
width: 200px;
margin: 8px 10%;
border-radius: 35px;

${status => status.status === "PENDING"? 
"background: #bdc3c7; border: 1px solid  #5e5e5e; color: white; &:hover{background: #c0392b;};" 
: "background: white; border: 1px solid #0071ff;  &:hover{background:  #0062ff;  color: white;};"
};

`