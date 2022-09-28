import { useEffect, useState } from 'react';
import { FiMenu, FiGlobe, FiHeadphones, FiSettings } from 'react-icons/fi';
import { AiOutlineFolder } from 'react-icons/ai'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { GrAnalytics, GrDocumentText } from 'react-icons/gr'
import './Sidebar.css'

const Sidebar = () => {
  const [items, setItems] = useState([])

  const changeColor = () => {
    const icons = document.getElementsByName('icons2');
    icons.forEach((item) => {
      const attr = item.innerHTML;
      const newLine = attr.replace(' stroke="#000"', '');
      item.innerHTML = newLine
    })
  }

  const selectedIcon = (e) => {
    items.forEach((item) => {
      if (e.target.name === 'buttons') {
        e.target.classList.add('selected')
      }
      if (item.classList.contains('selected')) {
        item.classList.remove('selected')
      }
    })
  }

  useEffect(() => {
    changeColor();
    const buttons = document.querySelectorAll('button')
    setItems(buttons)
  }, [])

  return (
    <div className="sidebar">
      <button className='hamburger'>
        <FiMenu />
      </button>
      <p className='areaClosed'>STATION</p>
      <p className='areaOpened'>GERENCIADOR STATION</p>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Painel Global'>
        <FiGlobe className='icons'/>
        <p className='titleButtons'>Painel Global</p>
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Painel Detalhado'>
        <AiOutlineFolder className='icons' />
        <p className='titleButtons'>Painel Detalhado</p>
      </button>
      <hr />
      <p className='areaClosed'>FORMS</p>
      <p className='areaOpened'>GERENCIADOR FORMULÁRIOS</p>
      <button name='buttons' className='buttonIcons selected' onClick={(e) => selectedIcon(e)} title='Fornecedores'>
        <MdOutlinePeopleAlt className='icons' />
        <p className='titleButtons'>Fornecedores</p>
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Formulários'>
        <GrDocumentText className='icons' name='icons2' />
        <p className='titleButtons'>Formulários</p>
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Estatísticas'>
        <GrAnalytics className='icons' name='icons2' />
        <p className='titleButtons'>Estatísticas</p>
      </button>
      <hr />
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Configurações'>
        <FiSettings className='icons' />
        <p className='titleButtons'>Configurações</p>
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Central de Ajuda'>
        <FiHeadphones className='icons' />
        <p className='titleButtons'>Central de Ajuda</p>
      </button>
    </div>
  )
}

export default Sidebar;