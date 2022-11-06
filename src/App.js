import React from 'react'
import ReactModal from 'react-modal'

import useWindowSize, { WindowSizeContext } from './hooks/useWindowSize'
import useModal from './hooks/useModal'
import CalculatorHookModal from './components/Calculator/CalculatorModal/CalculatorHookModal'
import CalculatorReduxModal from './components/Calculator/CalculatorModal/CalculatorReduxModal'
import logo from './logo.png'
import './App.scss'

ReactModal.setAppElement('#root')

function App() {
  const { size } = useWindowSize()
  const {
    modalIsOpen,
    openModal,
    closeModal,
  } = useModal()
  const {
    modalIsOpen: reduxModalIsOpen,
    openModal: openReduxModal,
    closeModal: closeReduxModal,
  } = useModal()

  return (
    <WindowSizeContext.Provider value={size}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Proyecto final sobre el módulo de React
          <br/>Instrucciones:
          <br/>
          1. Crear uno de estos componentes (Elegir uno)
          <br/>a. Modal 
          <br/>b. Drawer
          <br/>
          2. Ya seleccionado el componente se debe utilizar Storybook para crear dicho componente
          <br/>
          3. Publicar el componente utilizando github pages 
          <br/>
          4. Una vez terminado enviar al classroom el código fuente comprimido en formato zip o tar más 
          <br/>el enlace generado por github pages.
          <button onClick={openModal}>Trigger Modal</button>
          <button onClick={openReduxModal}>Trigger Redux Modal</button>
        </header>
        <CalculatorHookModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
        <CalculatorReduxModal
          modalIsOpen={reduxModalIsOpen}
          closeModal={closeReduxModal}
        />
      </div>
    </WindowSizeContext.Provider>
  )
}

export default App
