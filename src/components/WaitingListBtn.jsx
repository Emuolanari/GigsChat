import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WaitingListBtn({passedColor}) {
  return (
    <button className="rounded text-white border-0" style={{fontFamily:'Raleway', fontWeight:'400', backgroundColor: `${passedColor}`, padding:12}}><span>Join the waitlist &nbsp;
        <FontAwesomeIcon icon ={faArrowRight}/></span>
      </button>
  )
}
