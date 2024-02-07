import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { data } from './data'
import { useState } from 'react';

function App() {
  const [selectedLang, setSelectedLang] = useState<string[]>([])
  const datosFiltrados = data.filter(item => selectedLang.includes(item.language))
  const datosFiltradosOrdenados = datosFiltrados.sort((a, b) => a.language.localeCompare(b.language))

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedLang.includes(e.target.value)) {
      setSelectedLang([...selectedLang, e.target.value])
    } else {
      setSelectedLang(selectedLang.filter(item => item !== e.target.value))
    }
  }

  return (
    <div className='container py-5'>
      <header className='text-center'>
        <h1>Filter con Checkbox</h1>
      </header>

      <main className='text-left my-4'>
        <h2>Lenguajes</h2>
        <div>
          <input type="checkbox" name='language' value='php' id='php' onChange={handleCheck} />
          <label htmlFor="php" className='ms-2'> php</label>
        </div>
        <div>
          <input type="checkbox" name='language' value='javascript' id='javascript' onChange={handleCheck} />
          <label htmlFor="javascript" className='ms-2'> javascript</label>
        </div>
        <div>
          <input type="checkbox" name='language' value='python' id='python' onChange={handleCheck} />
          <label htmlFor="python" className='ms-2'> python</label>
        </div>
        <div>
          <input type="checkbox" name='language' value='java' id='java' onChange={handleCheck} />
          <label htmlFor="java" className='ms-2'> java</label>
        </div>
        <div>
          <input type="checkbox" name='language' value='c++' id='c++' onChange={handleCheck} />
          <label htmlFor="c++" className='ms-2'> c++</label>
        </div>
      </main>

      <div className='d-flex flex-wrap shadow shadow-white gap-5 justify-content-center'>
        {
          datosFiltradosOrdenados.map(item => (
            <div key={item.id} className='card w-25 p-3 border'>
              <div className='card-title'>
              <h3>{item.name}</h3>
              </div>
              <div className="card-body">
              <p className='card-text'>{item.description}</p>
              </div>
              <p className='card-footer fw-bold'>Language: {item.language}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
