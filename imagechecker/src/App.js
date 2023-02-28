import { useState, useRef } from 'react';
import './App.css';

function App() {
  var refr = useRef(null);
  var [value, setvalue] = useState(0);
  var [roll, setroll] = useState("ntg")
  function src() {
    var url = "http://ecap.pace.ac.in//StudentPhotos/" + `${refr.current.value}` + ".jpg";
    setroll(url);
    setvalue(1);

  }
  return (
    <div className="App bg-[#222831] h-screen flex flex-col  items-center text-white gap-8 pt-8">
      <div className='text-4xl'>Enter your roll number</div>
      <div>
        <input placeholder='21kq1a0545' className='text-black text-center items-center placeholder-center rounded' ref={refr} ></input>
      </div>
      <div className='bg-yellow-500 p-1 px-2 rounded-md '>
        <button variant="warning" onClick={src}>Fetch</button>
      </div>
      <div>
        {value ? <div className='flex flex-col items-center gap-1 text-blue-300'><img src={roll} className="rounded-lg" alt='not found'></img><a href={roll}>Download</a></div> : <div />}
      </div>
      <div className='flex flex-col text-[#393E46] items-center text-center px-3'>
        <p>Using only your roll number, you may view your photos.</p>
        <p>This is done only for instructional and amusement purposes.</p>
      </div>
    </div>
  );
}

export default App;
