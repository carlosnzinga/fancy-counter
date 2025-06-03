import PropTypes from 'prop-types';

MinusWomenButton.propTypes = {
  women: PropTypes.number.isRequired,
  setWomen: PropTypes.func.isRequired,
};

export default function MinusWomenButton({women, setWomen}) {

 const denied =  () => {
  if (women <= 0){
    setWomen(women =0)
  }else{
    setWomen(women -=1)
  }
  
 }

  return ( <div >
 <button className='buttonMinus'   onClick={denied}>
      -
    </button>
  </div>
   
  )
}
