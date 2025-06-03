import PropTypes from 'prop-types';

ResetButton.propTypes = {
  men: PropTypes.number.isRequired,
  setMen: PropTypes.func.isRequired,

  women: PropTypes.number.isRequired,
  setWomen: PropTypes.func.isRequired,

  number: PropTypes.number.isRequired,
  setNumber: PropTypes.func.isRequired,

  children: PropTypes.number.isRequired,
  setChildren: PropTypes.func.isRequired,
};

export default function ResetButton({men, women, children, setMen, setWomen, setChildren }) {

  const toZero= ()=>{

    
    setMen (men =0),
    setWomen (women =0)
    setChildren(children =0)
  }
  return (
    <div > <button className='buttonMinus' onClick={toZero}>
    Reset
  </button></div>
    
  )
}
