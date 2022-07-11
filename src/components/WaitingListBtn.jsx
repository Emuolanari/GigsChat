import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WaitingListBtn({passedColor}) {
  return (
    <div style={{minWidth:200}} >
    <button className="rounded text-white border-0" style={{backgroundColor: `${passedColor}`, padding:12, width:'100%'}}>Join the waitlist &nbsp;
        <FontAwesomeIcon icon ={faArrowRight}/>
      </button>
    </div>
  )
}
