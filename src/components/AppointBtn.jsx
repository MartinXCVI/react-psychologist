import { Link } from "react-router-dom"

const AppointBtn = () => {
  return (
    <div className='appointment-div'>
      <Link to="/contact" className="appoint-btn">Schedule Appointment</Link>
    </div>
  )
}

export default AppointBtn