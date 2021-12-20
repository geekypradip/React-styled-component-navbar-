import styled from"styled-components";
const Container=styled.div`
display:flex;
justify-content:space-between;
`;
const MainContent=styled.div`
margin:20px;
flex:80%;
`;
const Nav=styled.div`
display:flex;
flex-direction:column;
border :2px solid #c1bfbf;
width:15%;
height:70vh;
justify-content:space-evenly;
box-shadow:1px 1px 5px #c1bfbf;
position:sticky;
top:10%;
overflow:auto;
`;
const NavSection=styled.div`
border-top:1px solid #c1bfbf;
display:flex;
flex-direction:column;
justify-content:space-evenly;
`;
const NavSectionContents=styled.div`
display:flex;
margin:10px;
color:#757575;
font-size:15px

`;
const Icons=styled.div`
margin-right:8px;
font-size:15px
`;
const Label=styled.div`
margin-left:8px;
cursor:pointer;
`;
function SideNav() {
    return (
 <Container>

            <Nav>
        <NavSection>
            <NavSectionContents>
                <Icons>
                    <i class="material-icons">inbox</i>
                    </Icons>
                <Label>Inbox</Label>
            </NavSectionContents>


            <NavSectionContents>
                <Icons><i class="material-icons">mail</i></Icons>
                <Label>Starred</Label>
            </NavSectionContents>

            <NavSectionContents>
                <Icons><i class="material-icons">inbox</i></Icons>
                <Label>Send email</Label>
            </NavSectionContents>

            <NavSectionContents>
                <Icons><i class="material-icons">mail</i></Icons>
                <Label>Draft</Label>
            </NavSectionContents>
        </NavSection>


        <NavSection>

        <NavSectionContents>
                <Icons><i class="material-icons">inbox</i></Icons>
                <Label>All mail</Label>
            </NavSectionContents>


            <NavSectionContents>
                <Icons><i class="material-icons">mail</i></Icons>
                <Label>Trash</Label>
            </NavSectionContents>

        </NavSection>
    </Nav>

    <MainContent>
        your all design will start from here..

        =here..
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quod placeat perferendis, repellendus consequatur dolore vel eligendi qui iste saepe culpa nihil sit inventore fuga est. Commodi quo veritatis quos!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officia, totam quas ipsum culpa odit adipisci molestiae. Explicabo officiis hic, sint quod cupiditate soluta quidem necessitatibus impedit neque deleniti praesentium.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos assumenda sequi harum nemo fuga rem mollitia corporis cupiditate magnam quis, hic veniam ad sunt ut ipsam doloribus? Distinctio, pariatur exercitationem.
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, itaque! Repellat enim, esse corrupti provident obcaecati praesentium molestias voluptatum blanditiis sed quasi magnam rerum laborum adipisci perferendis quo ipsa qui!
  lorem lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore reiciendis eaque modi error provident architecto perspiciatis, vero temporibus sequi veniam, deleniti, iusto saepe aut quae officiis? Voluptates, eum eligendi.
  Lorem ipsum dolor
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam amet commodi quo animi culpa eos deserunt obcaecati maiores facere iusto, labore harum expedita, itaque corporis earum eius delectus possimus atque.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sunt itaque, delectus perspiciatis dolore eum sed odit est ex laboriosam, eveniet culpa exercitationem tempora! Numquam molestias a eaque quia aliquid!
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum enim vero tempore cum harum perspiciatis porro veniam quos alias esse officiis ea nisi, ullam facilis. Culpa vel necessitatibus perferendis eligendi?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quo nihil aspernatur, consectetur debitis quas accusantium veniam voluptatibus, doloremque amet voluptatem obcaecati ipsam cupiditate ut. Non porro molestias praesentium!
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nulla tempore corporis mollitia optio amet at possimus tempora necessitatibus pariatur nam unde magni illum ea modi, reprehenderit iusto odit dolor?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa aperiam quisquam sunt quaerat tempore possimus soluta fugit, nam dignissimos, placeat reiciendis eveniet id deserunt impedit, quas facere voluptates hic.
  Lorem ipsum dolor
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam saepe magni minus exercitationem veritatis quaerat temporibus, dolorem laboriosam. Ea quidem nemo iure doloribus eos? Totam beatae quasi odit sit natus?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis dolor repellat quos ut, iste quia nulla, quasi iusto eaque nam. Est facilis neque commodi aliquam cum cumque exercitationem ratione.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores perferendis cumque itaque soluta deleniti ducimus, quidem odit? Excepturi iure mollitia, tenetur reprehenderit dicta saepe? Aut ducimus est animi itaque?
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt assumenda ullam aliquam laboriosam harum magnam explicabo, quasi accusantium fugiat nihil architecto ipsa necessitatibus quisquam quo voluptates totam repudiandae alias iure?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. At autem, non dignissimos magnam temporibus consequuntur blanditiis ut est aperiam sunt facilis minima eligendi rerum inventore alias sequi explicabo obcaecati quos.
  lorem
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod natus quia quas illum minima doloremque at! Odit saepe quisquam porro consequatur fuga quia, rerum, numquam ab incidunt culpa eum cumque.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam natus perferendis laudantium, nisi consequatur ipsa officiis delectus esse? Facilis id neque, laborum dicta reiciendis ratione vel molestiae veniam minima?
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum quisquam dignissimos, voluptatum, deleniti commodi doloribus repellendus at pariatur minus voluptate voluptas, repellat velit ipsum incidunt iusto beatae nemo? Eum.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae dignissimos nesciunt cupiditate corporis laborum deleniti rem odit excepturi voluptatum, quam dolores commodi vitae explicabo ducimus, quidem ipsum asperiores dolore!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab incidunt at iste. Qui deleniti corporis eveniet, quibusdam, minus voluptatum nostrum aspernatur corrupti officia eum consectetur exercitationem, rem asperiores! Sunt?
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident autem commodi assumenda voluptates libero laborum dolores est unde ipsum soluta, nam voluptas perferendis culpa ea reprehenderit minus sed cum?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem impedit autem, eum enim explicabo ut odio alias ab, maiores voluptatibus deserunt earum nesciunt accusamus voluptas! Voluptate nisi facere provident.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non veniam quas consectetur amet esse animi vitae est, officia minus, repellat, soluta saepe nisi? Ducimus, veniam assumenda provident molestias nostrum officiis.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iure atque eaque, nihil quae inventore! Excepturi dolorum odit atque mollitia neque sapiente, voluptatem, nostrum quae dolores, cum iusto itaque laudantium.
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex esse, architecto id reprehenderit dolorum nihil ullam quam, impedit temporibus totam facere quibusdam error ut, illo vel tempora inventore voluptatem.
  lore, ipsum dolor
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus architecto adipisci cupiditate eaque at rem vero tenetur nulla dolorem modi ipsam obcaecati eum unde, voluptates autem, ipsa totam sequi perferendis.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo necessitatibus libero culpa, nihil alias animi illo dolores similique quisquam minima ipsam assumenda officia dolor maxime est rerum eum sunt?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at, tenetur sint nostrum eveniet suscipit. Incidunt aliquam modi possimus blanditiis consequuntur officiis dolor consequatur architecto est iusto numquam, ea ullam.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dicta? Id perferendis quia consequuntur asperiores recusandae non similique inventore repellendus, impedit deserunt, possimus aut fugiat dolore praesentium suscipit distinctio corporis?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci unde alias, cumque animi maiores consectetur. Rerum molestiae aut atque excepturi. Ipsam, harum. Magni, ab obcaecati ad nostrum modi nihil.
  your all design will start from here..

=here..
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quod placeat perferendis, repellendus consequatur dolore vel eligendi qui iste saepe culpa nihil sit inventore fuga est. Commodi quo veritatis quos!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officia, totam quas ipsum culpa odit adipisci molestiae. Explicabo officiis hic, sint quod cupiditate soluta quidem necessitatibus impedit neque deleniti praesentium.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos assumenda sequi harum nemo fuga rem mollitia corporis cupiditate magnam quis, hic veniam ad sunt ut ipsam doloribus? Distinctio, pariatur exercitationem.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, itaque! Repellat enim, esse corrupti provident obcaecati praesentium molestias voluptatum blanditiis sed quasi magnam rerum laborum adipisci perferendis quo ipsa qui!
lorem lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore reiciendis eaque modi error provident architecto perspiciatis, vero temporibus sequi veniam, deleniti, iusto saepe aut quae officiis? Voluptates, eum eligendi.
Lorem ipsum dolor
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam amet commodi quo animi culpa eos deserunt obcaecati maiores facere iusto, labore harum expedita, itaque corporis earum eius delectus possimus atque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sunt itaque, delectus perspiciatis dolore eum sed odit est ex laboriosam, eveniet culpa exercitationem tempora! Numquam molestias a eaque quia aliquid!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum enim vero tempore cum harum perspiciatis porro veniam quos alias esse officiis ea nisi, ullam facilis. Culpa vel necessitatibus perferendis eligendi?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam quo nihil aspernatur, consectetur debitis quas accusantium veniam voluptatibus, doloremque amet voluptatem obcaecati ipsam cupiditate ut. Non porro molestias praesentium!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nulla tempore corporis mollitia optio amet at possimus tempora necessitatibus pariatur nam unde magni illum ea modi, reprehenderit iusto odit dolor?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa aperiam quisquam sunt quaerat tempore possimus soluta fugit, nam dignissimos, placeat reiciendis eveniet id deserunt impedit, quas facere voluptates hic.
Lorem ipsum dolor
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam saepe magni minus exercitationem veritatis quaerat temporibus, dolorem laboriosam. Ea quidem nemo iure doloribus eos? Totam beatae quasi odit sit natus?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis dolor repellat quos ut, iste quia nulla, quasi iusto eaque nam. Est facilis neque commodi aliquam cum cumque exercitationem ratione.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores perferendis cumque itaque soluta deleniti ducimus, quidem odit? Excepturi iure mollitia, tenetur reprehenderit dicta saepe? Aut ducimus est animi itaque?
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt assumenda ullam aliquam laboriosam harum magnam explicabo, quasi accusantium fugiat nihil architecto ipsa necessitatibus quisquam quo voluptates totam repudiandae alias iure?
Lorem ipsum dolor sit amet consectetur adipisicing elit. At autem, non dignissimos magnam temporibus consequuntur blanditiis ut est aperiam sunt facilis minima eligendi rerum inventore alias sequi explicabo obcaecati quos.
lorem
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod natus quia quas illum minima doloremque at! Odit saepe quisquam porro consequatur fuga quia, rerum, numquam ab incidunt culpa eum cumque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam natus perferendis laudantium, nisi consequatur ipsa officiis delectus esse? Facilis id neque, laborum dicta reiciendis ratione vel molestiae veniam minima?
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum quisquam dignissimos, voluptatum, deleniti commodi doloribus repellendus at pariatur minus voluptate voluptas, repellat velit ipsum incidunt iusto beatae nemo? Eum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae dignissimos nesciunt cupiditate corporis laborum deleniti rem odit excepturi voluptatum, quam dolores commodi vitae explicabo ducimus, quidem ipsum asperiores dolore!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab incidunt at iste. Qui deleniti corporis eveniet, quibusdam, minus voluptatum nostrum aspernatur corrupti officia eum consectetur exercitationem, rem asperiores! Sunt?
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident autem commodi assumenda voluptates libero laborum dolores est unde ipsum soluta, nam voluptas perferendis culpa ea reprehenderit minus sed cum?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem impedit autem, eum enim explicabo ut odio alias ab, maiores voluptatibus deserunt earum nesciunt accusamus voluptas! Voluptate nisi facere provident.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non veniam quas consectetur amet esse animi vitae est, officia minus, repellat, soluta saepe nisi? Ducimus, veniam assumenda provident molestias nostrum officiis.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iure atque eaque, nihil quae inventore! Excepturi dolorum odit atque mollitia neque sapiente, voluptatem, nostrum quae dolores, cum iusto itaque laudantium.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex esse, architecto id reprehenderit dolorum nihil ullam quam, impedit temporibus totam facere quibusdam error ut, illo vel tempora inventore voluptatem.
lore, ipsum dolor
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus architecto adipisci cupiditate eaque at rem vero tenetur nulla dolorem modi ipsam obcaecati eum unde, voluptates autem, ipsa totam sequi perferendis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo necessitatibus libero culpa, nihil alias animi illo dolores similique quisquam minima ipsam assumenda officia dolor maxime est rerum eum sunt?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at, tenetur sint nostrum eveniet suscipit. Incidunt aliquam modi possimus blanditiis consequuntur officiis dolor consequatur architecto est iusto numquam, ea ullam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dicta? Id perferendis quia consequuntur asperiores recusandae non similique inventore repellendus, impedit deserunt, possimus aut fugiat dolore praesentium suscipit distinctio corporis?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci unde alias, cumque animi maiores consectetur. Rerum molestiae aut atque excepturi. Ipsam, harum. Magni, ab obcaecati ad nostrum modi nihil.
    </MainContent>

</Container>
    
      );
}

export default SideNav;
{/* <i class="material-icons">home</i> */}