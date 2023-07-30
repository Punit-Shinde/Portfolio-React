import React from 'react';
import SkillProgress from './Skillprogress';
import '../components/SkillProgress.css';

const MainComponent = () => {
  return (
    <div className='layout'>
      
      <div className="container"><SkillProgress skillName='HTML' percentage={80} /></div>
      <div className="container"><SkillProgress skillName='CSS' percentage={85} /></div>
      <div className="container"><SkillProgress skillName='JavaScript' percentage={65} /></div>
      <div className="container"><SkillProgress skillName='React.js' percentage={60} /></div>
      <div className="container"><SkillProgress skillName='SQL' percentage={10} /></div>
      <div className="container"><SkillProgress skillName='Python' percentage={70} /></div>
      
    </div>
  );
};

export default MainComponent;
