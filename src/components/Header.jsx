import logo from '/logo-name.svg'
function Header() {
  const now = new Date()
  const altLogoText = 'logo-text'
  return (
    <header>
      <img src={logo} alt={altLogoText} />
      {/* <h3>Some Head</h3> */}
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header
