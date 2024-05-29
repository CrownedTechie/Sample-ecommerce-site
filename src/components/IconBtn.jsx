
const IconBtn = ({ icon, value, styling}) => {
  return (
    <>
      <div className="btn-box flex items-center gap-2">
        <span className="material-symbols-outlined">{icon}</span>

        <button className={ styling }> {value}</button>
      </div>
    </>
  )
}

export default IconBtn;