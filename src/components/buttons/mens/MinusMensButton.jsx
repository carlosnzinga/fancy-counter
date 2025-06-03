import PropTypes from 'prop-types';

MinusMensButton.propTypes = {
  men: PropTypes.number.isRequired,
  setMen: PropTypes.func.isRequired,
};

export default function MinusMensButton({men, setMen}) {

 const denied =  () => {
  if (men <= 0){
    setMen(men =0)
  }else{
    setMen(men -=1)
  }
  
 }

  return ( <div >
 <button className='buttonMinus'  onClick={denied}>
      -
    </button>
  </div>
   
  )
}
