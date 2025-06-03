import PropTypes from 'prop-types';

MinusChildrenButton.propTypes = {
    children: PropTypes.number.isRequired,
    setChildren: PropTypes.func.isRequired,
};

export default function MinusChildrenButton({children, setChildren}) {

 const denied =  () => {
  if (children <= 0){
    setChildren(children =0)
  }else{
    setChildren(children -=1)
  }
  
 }

  return ( <div>
 <button className='buttonMinus' onClick={denied}>
      -
    </button>
  </div>
   
  )
}
