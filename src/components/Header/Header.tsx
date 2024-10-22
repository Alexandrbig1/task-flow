import Logo from "../UI/Logo/Logo";
import ThemeSwitcher from "../../components/UI/ThemeSwitcher/ThemeSwitcher";
import { HeaderContainer, HeaderLinksWrapper, NavMenu } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderLinksWrapper>
        <nav>
          <NavMenu>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </NavMenu>
        </nav>
        <button>Log in</button>
        <ThemeSwitcher />
      </HeaderLinksWrapper>
    </HeaderContainer>
  );
}
