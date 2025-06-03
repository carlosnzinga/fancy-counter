import PropTypes from 'prop-types';


PlusMensButton.propTypes = {

  children: PropTypes.number.isRequired,
  setChildren: PropTypes.func.isRequired,

 
};
 

export default function PlusMensButton({children,  setChildren}) {
  return (<div >
  <button className='buttonPlus'  onClick={()=>setChildren(children +=1)}>
  +
</button></div>
    
  )
}
