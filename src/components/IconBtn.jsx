import '../stylings/IconBtn.css';


const IconBtn = ({ icon, value, styling, btnBoxStyling, iconStyling, iconClick, btnClick}) => {
  return (
    <>
      <div className={`btn-box ${btnBoxStyling}`}>
        <span className={`material-symbols-outlined ${iconStyling}`} onClick={iconClick}>{icon}</span>

        {value && <button className={ styling } onClick={ btnClick }>{value}</button>}
      </div>
    </>
  )
}

export default IconBtn;