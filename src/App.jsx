import{ useState } from 'react';

function App() {
  
  const [search, setSearch] = useState('');

  return (
    <>
    <input 
    type="text" 
    placeholder="Cosa vuoi cercare?"
    value=""
    key=""
    />
     
    </>
  )
}

export default App
