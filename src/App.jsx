import{ useState, useEffect } from 'react';

function App() {
  
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  console.log(products);
  

   useEffect(() => {
    if(!query.trim()){
      setProducts([]);
      return;
    }
    fetch(`http://localhost:3333/products?search=${query}`)
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error));
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
