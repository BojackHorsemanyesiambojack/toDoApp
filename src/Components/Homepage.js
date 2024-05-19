import { useState } from 'react';
import Button from './Button';
import Vr from './Helpers/Vr';
import Homework from './Homework';
import VaultBoy from './Icons/VaultBoy';
import Input from './Input';
import './Styles/Homepage.css';

function Homepage() {
  const [works, setWorks] = useState ([]);

  const addWork = work => {
    if(work.text.trim()){
    
      const worksUpdate = [work, ...works]
      setWorks(worksUpdate);
    }
    }

    const deleteWork = id => {
      const worksUpdate = works.filter (work => work.id !== id);
      setWorks(worksUpdate);
    }

    const completeWork = id => {
      const worksUpdate = works.map(work =>{
        if(work.id === id){
          work.complete = !work.complete;
        }return work;
      })
      setWorks(worksUpdate);
    }

  return (
    <div className='homepage'>
      <div className='header-title row center'>
      <h1 className='title'>Basic To Do App</h1>
      <VaultBoy/>
      </div>
      <div className='center-box center col'>
        <h2 className='term'>Things to Do</h2>
        <div className='row center total-w mb'>
        <Input
        onSubmit = {addWork}
        />
        </div>
        <Vr />
        <div className='col center total-w sep list'>
          {
            works.map((work) => 
              <Homework 
              key={work.id}
              id = {work.id}
              text = {work.text}
              complete = {work.complete}
              deleteWork={deleteWork}
              completeWork={completeWork}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

alert("There are some keywords like 'strength or vault', try them!")

export default Homepage;
