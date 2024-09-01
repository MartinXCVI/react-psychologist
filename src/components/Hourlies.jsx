import { TbClockHour9 } from "react-icons/tb";

const Hourlies = () => {
  return (
    <>
      <section className="hourlies-section">
        <h4 className="hourlies-subtitle"><TbClockHour9 /> Hourlies</h4>
        <ul className="hourlies-list">
          <li className="hourlies-item">
            <p className="hourlies-day">Mondays to Fridays:</p>
            <time dateTime="8:30">8:30</time>am - <time dateTime="6:00">18:00</time>pm
          </li>
          <li className="hourlies-item">
            <p className="hourlies-day">Saturdays:</p>
            <time dateTime="3:30">2:30</time>pm - <time dateTime="8:00">8:00</time>pm
          </li>
          <li className="hourlies-item">
            <p className="hourlies-day">Sundays:</p>
            <time dateTime="5:00">5:30</time>pm - <time dateTime="9:30">9:30</time>pm
          </li>
        </ul>
      </section>
    </>
  )
}

export default Hourlies