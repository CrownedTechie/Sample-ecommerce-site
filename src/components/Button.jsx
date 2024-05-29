
const Button = ({ icon, value }) => {
  return (
    <>
      <div className="btn-box flex items-center gap-2">
        <span className="material-symbols-outlined">{icon}</span>

        <button className=" "> {value}</button>
      </div>
    </>
  )
}

export default Button;