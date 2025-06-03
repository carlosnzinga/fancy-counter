import PropTypes from 'prop-types';



Counter.propTypes = {
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
  women: PropTypes.number.isRequired,
  men: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired
};



export default function Counter({setTotal, men, women, children}) {

  const results = ()=>{
    return men + women + children

  }

  return (
    <button className='buttonPlus' onClick={()=> setTotal(results())}>
      Calculate
    </button>
  )
}
