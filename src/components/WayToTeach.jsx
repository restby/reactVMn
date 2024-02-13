// function WayToTeach(props) {
//   return (
//     <li>
//       <p>
//         <strong>
//           {props.title}
//         </strong>
//         {props.description}
//       </p>
//     </li>
//   )
// }
function WayToTeach({ title, description }) {
  return (
    <li>
      <p>
        <strong>
          {title}
        </strong>
        {description}
      </p>
    </li>
  )
}
export default WayToTeach
