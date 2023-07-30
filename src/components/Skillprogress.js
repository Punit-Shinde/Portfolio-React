import React, { useEffect, useState } from 'react';
import './SkillProgress.css';

const SkillProgress = ({ skillName, percentage }) => {
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    setFillWidth(percentage);
  }, [percentage]);

  return (
    <div className='skill-progress'>
      <div className='skill-name'>{skillName}</div>
      <div className='progress-bar'>
        <div className='progress-fill' style={{ width: `${fillWidth}%` }}></div>
      </div>
    </div>
  );
};

export default SkillProgress;
