import '../stylings/IconBtn.css';


const IconBtn = ({ icon, value, styling, btnBoxStyling, iconStyling, iconClick}) => {
  return (
    <>
      <div className={`btn-box ${btnBoxStyling}`}>
        <span className={`material-symbols-outlined ${iconStyling}`} onClick={iconClick}>{icon}</span>

        {value && <button className={ styling }>{value}</button>}
      </div>
    </>
  )
}

export default IconBtn;