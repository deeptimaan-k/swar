import React from 'react';
import Design from "./components/Design";
import Form from "./components/From";
import Navbar from "./components/Nav";

function App() {
  return (
    <div className='relative' style={{ background: 'rgb(5,8,22)' }}>
      <Navbar />
      <div className="absolute inset-0 z-0">
        <Design />
      </div>
      <div className="z-10 relative">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Form />
      </div>
    </div>
  );
}
export default App;
