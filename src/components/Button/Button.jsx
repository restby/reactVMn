import './Button.css'

function Button({ children }) {
  // function handleClick() {
  //   console.log('button clicked');
  // }
  const handleMouseEnter = () => console.log('entered');
  return <button className='button'>{children}</button>
  // return <button className='button' onClick={handleClick}>{children}</button>
  // return <button className='button' onClick={handleClick} onDoubleClick={() => console.log('dbl')}>{children}</button>
  // return <button className='button' onClick={handleClick} onMouseEnter={handleMouseEnter}>{children}</button>
}
export default Button
