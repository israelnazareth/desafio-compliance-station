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
      console.log(item.classList)
      console.log(items);
    })
  }

  useEffect(() => {
    changeColor();
    const buttons = document.querySelectorAll('button')
    setItems(buttons)
  }, [])

  return (
    <div className="sidebar">
      <FiMenu className='hamburger'/>
      <p className='area'>STATION</p>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Painel Global'>
        <FiGlobe className='icons'/>
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Painel Detalhado'>
        <AiOutlineFolder className='icons' />
      </button>
      <hr />
      <p className='area'>FORMS</p>
      <button name='buttons' className='buttonIcons selected' onClick={(e) => selectedIcon(e)} title='Fornecedores'>
        <MdOutlinePeopleAlt className='icons' />
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Formulários'>
        <GrDocumentText className='icons' name='icons2' />
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Estatísticas'>
        <GrAnalytics className='icons' name='icons2' />
      </button>
      <hr />
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Configurações'>
        <FiSettings className='icons' />
      </button>
      <button name='buttons' className='buttonIcons' onClick={(e) => selectedIcon(e)} title='Central de Ajuda'>
        <FiHeadphones className='icons' />
      </button>
    </div>
  )
}

export default Sidebar;