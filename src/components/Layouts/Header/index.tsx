import Wrapper from "../../Globals/Container/styles"
import HeaderContainer from "./style";

const Header = () => {
    return(
        <HeaderContainer>
                  <Wrapper>
                    <div className="header">
                        <div className="logo">
                            header
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="#">home</a></li>
                                <li><a href="">archive</a></li>
                                <li><a href="">categories</a></li>
                                <li><a href="">Tell us</a></li>
                            </ul>
                        </div>
                    </div>
                  </Wrapper>
        </HeaderContainer>
    )
}

export default Header;