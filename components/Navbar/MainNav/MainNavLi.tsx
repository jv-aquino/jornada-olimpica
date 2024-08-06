function MainNavLi({ link, text, actualPath }: MainNavLiProps) {
  return (
    <li className={'Navbar__navItem ' + ((actualPath === link) ? 'active' :'')}><a href={link}>{text}</a></li>
  )
}

interface MainNavLiProps {
  link: string;
  text: string;
  actualPath: string;
}

export default MainNavLi;