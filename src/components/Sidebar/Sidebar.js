import { FiMenu, FiGlobe, FiHeadphones, FiSettings } from 'react-icons/fi';
import { AiOutlineFolder } from 'react-icons/ai'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { GrAnalytics, GrDocumentText } from 'react-icons/gr'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <FiMenu className='hamburger'/>
      <p className='area'>STATION</p>
      <FiGlobe className='icons'/>
      <AiOutlineFolder className='icons'/>
      <hr />
      <p className='area'>FORMS</p>
      <MdOutlinePeopleAlt className='icons'/>
      <GrDocumentText className='icons'/>
      <GrAnalytics className='icons'/>
      <hr />
      <FiSettings className='icons'/>
      <FiHeadphones className='icons'/>
    </div>
  )
}

export default Sidebar;