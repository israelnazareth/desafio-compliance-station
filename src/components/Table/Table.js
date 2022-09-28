import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import { BiFilterAlt } from 'react-icons/bi'
import { BiCaretDown } from 'react-icons/bi'
import datas from '../../mock/datas.json'
import './Table.css'

const Table = () => {
  const [expanded, setExpanded] = useState(false)
  const [counter, setCounter] = useState(0)

  window.addEventListener('mouseup', ({ target }) => {
    const checkboxes = document.getElementById("checkboxes");
    const buttonFilter = document.getElementById("dropdown");
    if (target.id !== 'dropdown' && target.id !== 'checkboxes' &&
      target.tagName !== 'LI' && target.tagName !== 'INPUT') {
        checkboxes.style.display = "none";
        buttonFilter.classList.remove('opened')
        setExpanded(false);
    }
  })

  const showCheckboxes = () => {
    const checkboxes = document.getElementById("checkboxes");
    const buttonFilter = document.getElementById("dropdown");
    if (!expanded) {
      checkboxes.style.display = "block";
      buttonFilter.classList.toggle('opened')
      setExpanded(true);
    } else {
      checkboxes.style.display = "none";
      buttonFilter.classList.toggle('opened')
      setExpanded(false);
    }
  }

  const changeBGColor = () => {
    const listItems = document.getElementsByName('input')
    listItems.forEach(item => {
      if(item.checked) {
        item.parentElement.style.backgroundColor = '#F2F5FF'
        item.parentElement.style.color = '#263072'
      } 
      else {
        item.parentElement.style.backgroundColor = '#FFF'
        item.parentElement.style.color = '#777'
      }
    })
  }

  const filtersCount = () => {
    const listItems = document.getElementsByName('input')
    let count = 0
    listItems.forEach(item => {
      if(item.checked) count +=1
    })
    setCounter(count)
  }

  const clearFilters = () => {
    const listItems = document.getElementsByName('input')
    listItems.forEach(item => {
      item.checked = false
      item.parentElement.style.backgroundColor = '#FFF'
      item.parentElement.style.color = '#777'
    })
    setCounter(0)
  }

  const markAll = () => {
    const masterCheckbox = document.getElementById('checkboxTableMaster')
    const childrenCheckbox = document.getElementsByName('checkboxTableChildren');
    childrenCheckbox.forEach((item) => {
      masterCheckbox.checked ? item.checked = true : item.checked = false
    })
  }

  return (
    <div className='main'>
      <div className='headers'>
        <div className='titles'>
          <h1 className='title'>Fornecedores</h1>
          <p className='subtitle'>Lista de fornecedores</p>
        </div>
        <button className='button'>+ Fornecedor</button>
      </div>
      <div className="table">
        <div className='filters'>
          <input className='inputText' type="text" placeholder='Buscar por fornecedor'></input>
          <button className='searchButton'><FiSearch /></button>
          <button
            id='dropdown'
            className='dropdown'
            onClick={() => showCheckboxes()}
          >
            <BiFilterAlt className='iconFilter'/>Filtro {counter ? <p className='counter'>{counter}</p> : null}<BiCaretDown className='arrowDown'/>
          </button>
          <ul id='checkboxes' className='checkboxList'>
            <p className='titleCheckbox'>Classificações</p>
            {Array(5).fill(0).map((item, i) => {
              item = 
              <label name='label' htmlFor={`label${i+1}`} className='checkboxItem' key={i}>
                <li onClick={() => filtersCount()}>
                  <input
                    type="checkbox"
                    id={`label${i+1}`}
                    name='input'
                    onClick={() => changeBGColor()}
                  />
                    {`Example Label ${i+1}`}
                </li>
              </label>
              return item
            })}
            <li className='clearFilters' onClick={() => clearFilters()}>Limpar todos os filtros</li>
          </ul>
        </div>
        <table>
          <tbody>
            <tr>
              <th className='checkboxTable'><input type="checkbox" id='checkboxTableMaster' onClick={() => markAll()}/></th>
              <th className='name'>Nome do fornecedor<BiCaretDown className='arrowDown'/></th>
              <th className='rating'>Classificação<BiCaretDown className='arrowDown'/></th>
              <th className='date'>Data de criação<BiCaretDown className='arrowDown'/></th>
              <th></th>
            </tr>
            {datas.map((data, i) => {
              return (
                <tr key={i}>
                  <td className='checkboxTable'><input type="checkbox" name='checkboxTableChildren' /></td>
                  <td className='name'>{data.name}</td>
                  <td className='rating'>{data.rating}</td>
                  <td className='date'>{data.creationDate}</td>
                  <td><button className='delete'>
                    <FiTrash2 />
                  </button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='results'>{datas.length} resultados encontrados</div>
      </div>
    </div>
  )
}

export default Table