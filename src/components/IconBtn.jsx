import '../stylings/IconBtn.css';


const IconBtn = ({ icon, value, styling, btnBoxStyling, iconStyling}) => {
  return (
    <>
      <div className={`btn-box ${btnBoxStyling}`}>
        <span className={`material-symbols-outlined ${iconStyling}`}>{icon}</span>

        {value && <button className={ styling }>{value}</button>}
      </div>
    </>
  )
}

export default IconBtn;