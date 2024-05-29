
const DisplayList = () => {
  return (
      <>
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
      </>
  )
}

export default DisplayList;