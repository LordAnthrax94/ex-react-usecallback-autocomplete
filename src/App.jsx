const debounce = (callback, delay) =>{
  let timeout;
  return value => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(value);
    }, delay);
  };
};

import{ useState, useEffect, useCallback } from 'react';

function App() {
  
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  console.log(products);
  
  const fetchProducts = async (query) => {
  if(!query.trim()){
      setProducts([]);
      return;
    }
    try{
      const res = await fetch(`http://localhost:3333/products?search=${query}`)
      const data = await res.json();
      setProducts(data);
    }catch(error){
      console.error(error)
    };
  }

  const debouncedFetchProducts = useCallback(debounce(fetchProducts, 500), []);

   useEffect(() => {
    debouncedFetchProducts(query);
  }, [query]);

  return (
    <div>
      <h1>Ricerca</h1>
      <input 
      type="text" 
      placeholder="Cosa vuoi cercare?"
      value={query}
      onChange={e => setQuery(e.target.value)}
      />
     {products.length > 0 && (<div className="results">
      {products.map(product => (
        <p key={product.id}>{product.name}

        </p>
      ))}
     </div>)} 
    </div>
  )
}

export default App
