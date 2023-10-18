
import './header.scss'
import logo from '../../assets/img/logo.png'
import Context from '../context';
import {useContext, useEffect, useState, ChangeEvent} from 'react'
import Modal from '../modal/modal';
import { ProjectTypes } from '../types';
import CardProject from '../cardProject/cardProject';


function Header() {  
  const { activeModal, openProject ,openNewProject, openChangeProject, closeModal }  = useContext(Context);

  const [rollLogo, setRollLogo] = useState<number>(0);
  const [deg, setDeg] = useState<number>(0);

  const [nameProj, setNameProj] = useState<string>('')
  const changeNameProj = (e : ChangeEvent<HTMLInputElement>) => {
      setNameProj(e.target.value)       
  }

  
  const [projects, setProjects] = useState<ProjectTypes[]>([])

  const checkProjects: () => ProjectTypes[] = () => {
      if(localStorage.getItem('projects')){
          return JSON.parse(localStorage.getItem('projects') || "");
      }
      else{
          localStorage.setItem('projects', JSON.stringify(projects))
          return JSON.parse(localStorage.getItem('projects') || "");
      }
  }

  const chanProj = (id : number) => {
    closeModal()
    openProject(id)

    return id
  }
  
  useEffect(()=>{
      setProjects(checkProjects())     
  }, [activeModal])

  const initProject : () => void = () => {
      if(nameProj !== ''){
          const project: ProjectTypes = {
              id: projects.length,
              name: nameProj,
              tasks: []
          }
          const pr = projects;
          
          pr.push(project)
          setProjects(pr)
          localStorage.setItem('projects', JSON.stringify([...projects]))
          setNameProj('');  
      }
  }


  const clickCountLogo : () => void = () => {   
    setRollLogo((count)=> count + 1);
    if(rollLogo === 10){
      setRollLogo(0)
      setDeg((count)=> count + 1)
    }
  }

  return (
    <div className='header'>
        <div className="headerColumn">
            <div style={{ transform: `scale(1) rotate(${deg * 720}deg)`}} onClick={clickCountLogo} className="header_logo">
              <img src={logo} alt="123" />
            </div>
            <div className="header_nav">
              <div onClick={openNewProject} className="header_nav-newProject nav-item">новый проект</div>
              <div onClick={openChangeProject} className="header_nav-changeProject nav-item">сменить проект</div>
            </div>
        </div>
        
            {activeModal === 'newProject' ? 
              <Modal closeModal={closeModal}>
                <div className="modalForm">
                  <input onChange={changeNameProj} value={nameProj} className='modalInput' type="text" placeholder='имя проекта' />
                  <input onClick={() => initProject()} className='modalButton' type="button" value='создать' />
                </div> 
              </Modal>
            :
            activeModal === 'cahngeProject' ? 
              <Modal closeModal={closeModal}>
                <div className="modalForm">
                  {projects.map(el => (
                    <CardProject onClick={() => chanProj(el.id)} key={el.id} id={el.id} name={el.name} tasks={el.tasks}></CardProject>
                  ))}
                </div> 
              </Modal>
              :
              null
            }


    </div>
  )
}

export default Header;
