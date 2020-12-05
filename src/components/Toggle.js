import {motion} from 'framer-motion';
import {useState} from 'react';

const Toggle = ({children, title}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout className='question'>
        {title}
      </motion.h4>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Toggle;
