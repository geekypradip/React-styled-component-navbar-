import styled from "styled-components";
const TopNav=styled.div`
display:flex;
justify-content:space-between;
background:#3F51B5;
position:sticky;
top:0;
overflow:hidden;
`;
const TopNavItem=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;
const TopNavItemLinks=styled.div`
margin:15px;
color:#fff;
font-weight:bold;

font-size:${props=>props.bigfont?"30px":"default"};
background:${props=>props.deepBlueBackgoud?"#38479F":"default"};

&:hover{
    ${
        props=>props.hover?
     `  color:red;
      background:white;
      cursor:pointer`
      :" cursor:pointer"
    }
}
`;
function StyledNav() {
   
    return ( 
        <>
        <TopNav>
             <TopNavItem>
                 <TopNavItemLinks bigfont deepBlueBackgoud>
                        Site name
                 </TopNavItemLinks>
             </TopNavItem>    

             <TopNavItem>
                 <TopNavItemLinks hover>
                        About us
                 </TopNavItemLinks>
                 <TopNavItemLinks hover>
                        Prices
                 </TopNavItemLinks>
                 <TopNavItemLinks hover>
                        Start Page
                 </TopNavItemLinks>
                 <TopNavItemLinks hover>
                        Offer
                 </TopNavItemLinks>
                 <TopNavItemLinks hover>
                        Contact
                 </TopNavItemLinks>
             </TopNavItem>      
        </TopNav>
        
        </>
        
     );
}

export default StyledNav;