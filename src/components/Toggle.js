import {motion} from 'framer-motion';
import {useState} from 'react';

const Toggle = ({children, title}) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div onClick={() => setToggle(!toggle)}>
      <motion.h4 className='question'>{title}</motion.h4>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </div>
  );
};

export default Toggle;
