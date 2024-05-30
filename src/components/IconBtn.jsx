import '../stylings/IconBtn.css';


const IconBtn = ({ icon, value, styling}) => {
  return (
    <>
      <div className="btn-box">
        <span className="material-symbols-outlined">{icon}</span>

        <button className={ styling }>{value}</button>
      </div>
    </>
  )
}

export default IconBtn;