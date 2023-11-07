export default function Button(props) {
  return (
    <button onClick={props.action} disabled={props.disabled}>Button</button>
  )
}