import React from 'react'

import {ContainerSideBarHome, Title, Button} from "./SidebarHome.style"

const buttonsName = [
    {name: "Connections", dispatch: "**"},
    {name: "Contacts", dispatch: "**"},
    {name: "Following & followers", dispatch: "**"},
    {name: "Groups", dispatch: "**"},
    {name: "Events", dispatch: "**"},
    {name: "Pages", dispatch: "**"},
    {name: "Newsletters", dispatch: "**"},
]


const SidebarHome = () => {
  return (
    <ContainerSideBarHome>
<Title>Manage my network</Title>
{buttonsName.map((btn, index)=> (<Button key={index}>{btn.name}</Button>
))}
{/* <Button>{btn.}</Button> */}

    </ContainerSideBarHome>
  )
}

export default SidebarHome