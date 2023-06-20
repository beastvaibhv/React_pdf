import ResumePdf from './ResumePdf.js';
import './App.css';

import ResumeTemplate2 from './resumeTemplate2.js';





function App() {
  return (
    <div className="App">
      
      <div className='flex flex-row'>
        
       
        <div>
          <ResumeTemplate2/>
        </div>
        <div >
          <ResumePdf/>
        </div>
        
      </div>  
      
      
    </div>
  );
}

export default App;
