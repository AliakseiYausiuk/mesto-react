import '../../blocks/header/header.css';
import '../../blocks/logo/logo.css';
import logo from '../../images/logo.svg';


export default function Header() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="Логотип"/>
      </header>
    )
}