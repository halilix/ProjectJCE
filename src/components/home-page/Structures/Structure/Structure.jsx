import './Structure.css'



const Structure = ({ structure }) => {
  return (
    <>
      <div className='structure-container'>
        <img src={structure.imageUrl} alt={structure.name} />
        <span className='name'>{structure.name}</span>
      </div>
      
    </>
  )
}

export default Structure