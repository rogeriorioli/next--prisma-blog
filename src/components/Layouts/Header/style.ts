import styled from "styled-components";


const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 9999;
    box-shadow: 1px 1px 5px 0px #3333331c;
    .header {
        display: flex;
       justify-content : space-between ;
       align-items: center;
       .logo {
        width: 20%;

       }
       .menu {
        width: 80%;
        ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            li {
                padding: 10px;
            }
        }
       }
    }
`

export default HeaderContainer;