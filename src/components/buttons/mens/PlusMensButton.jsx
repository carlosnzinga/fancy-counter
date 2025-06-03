import PropTypes from 'prop-types';

PlusMensButton.propTypes = {

  men: PropTypes.number.isRequired,
  setMen: PropTypes.func.isRequired,

 
};




 

export default function PlusMensButton({men,  setMen}) {
  return (<div >
  <button className='buttonPlus'  onClick={()=>setMen(men +=1)}>
  +
</button></div>
    
  )
}
