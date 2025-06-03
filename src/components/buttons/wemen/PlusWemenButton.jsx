import PropTypes from 'prop-types';

PlusWomenButton.propTypes = {
  
  women: PropTypes.number.isRequired,
  setWomen: PropTypes.func.isRequired,
  
};



export default function PlusWomenButton({ women, setWomen}) {
  return (<div>
  <button className='buttonPlus'  onClick={()=>setWomen(women +=1)}>
+
</button></div>
    
  )
}
