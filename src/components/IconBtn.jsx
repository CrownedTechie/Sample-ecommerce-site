import '../stylings/IconBtn.css';


const IconBtn = ({ icon, value, styling, btnBoxStyling}) => {
  return (
    <>
      <div className={`btn-box ${btnBoxStyling}`}>
        <span className="material-symbols-outlined">{icon}</span>

        {value && <button className={ styling }>{value}</button>}
      </div>
    </>
  )
}

export default IconBtn;