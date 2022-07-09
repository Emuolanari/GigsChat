import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WaitingListBtn({passedColor}) {
  console.log(passedColor);
  return (
    <button className="rounded text-white p-2 border-0" style={{backgroundColor: `${passedColor}`}}>Join the waitlist &nbsp;
        <FontAwesomeIcon icon ={faArrowRight}/>
      </button>
  )
}
