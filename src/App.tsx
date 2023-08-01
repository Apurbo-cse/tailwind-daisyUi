import React from 'react';
import Navbar from './components/Navbar';
import Select from './components/Select';

const App: React.FC = () => {

  return (
    <div className='row d-flex justify-between'>
      <Navbar/>

      <Select/>
      <button className="btn rounded-full">One</button>
      <button className="btn rounded-none px-16">Two</button>
      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>
      <h4 className='text-red-500'> Tailwind DaisyUi</h4>

      
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":45}}></span>
    </span>
    sec
  </div>
</div>
    </div>
  )
}

export default App;
