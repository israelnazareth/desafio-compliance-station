import datas from '../../mock/datas.json'
import './Table.css'

const Table = () => {
  return (
    <div className='main'>
      <div className='headers'>
        <div className='titles'>
          <h1 className='title'>Fornecedores</h1>
          <h4 className='subtitle'>Lista de fornecedores</h4>
        </div>
        <button className='button'>+ Fornecedor</button>
      </div>
      <div className="table">
        <div className='filters'>
          <input className='inputText' type="text" placeholder='Buscar fornecedor'></input>
          <button className='searchButton'>&#128269;</button>
          <select className='dropdown'>
            <option selected disabled>Filtro</option>
            <option>Nome</option>
            <option>Classificação</option>
            <option>Data</option>
          </select>
        </div>
        <table>
          <tbody>
            <tr>
              <th className='checkbox'><input type="checkbox" /></th>
              <th className='name'>Nome do fornecedor</th>
              <th className='rating'>Classificação</th>
              <th className='date'>Data de criação</th>
              <th className='delete'></th>
            </tr>
            {datas.map(data => {
              return (
                <tr>
                  <td className='checkbox'><input type="checkbox" /></td>
                  <td className='name'>{data.name}</td>
                  <td className='rating'>{data.rating}</td>
                  <td className='date'>{data.creationDate}</td>
                  <td className='delete'><button>&#128465;</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='results'>{datas.length} resultados encontrados.</div>
      </div>
    </div>
  )
}

export default Table