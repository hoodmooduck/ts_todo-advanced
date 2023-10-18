import Header from './components/header/header'

import TaskConteiner from './components/taskConteiner/taskConteiner.tsx'
import { useState } from 'react'
import './index.scss'
import Context from './components/context';


function App() {
  const [activeModal, setActiveModal] = useState<string>('close');
  const [activeProject, setActiveProject] = useState<number>(0);

  const closeModal = () =>{
    setActiveModal('close')
  }

  const openNewProject = () =>{
    setActiveModal('newProject')
  }
  const openChangeProject = () =>{
    setActiveModal('cahngeProject')
  }

  const openNewTask = () => {
    setActiveModal('open')
  }

  const openProject = (id: number) =>{
    setActiveProject(id)
    return id
  }

  return (
    <Context.Provider value={{activeModal,activeProject, openProject, openNewProject, openChangeProject, closeModal, openNewTask}}>
      <div className='wrapper'>
        <div className="conteiner">
          <Header />
          <TaskConteiner />
        </div>
      </div>
    </Context.Provider>

  )
}

export default App
