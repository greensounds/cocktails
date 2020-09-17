import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ListaRecetas from './components/ListaRecetas';
import ModalProvider from './context/ModalContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
