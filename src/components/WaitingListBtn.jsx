import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WaitingListBtn({passedColor}) {
  return (
    <button className="responsiveBtn text-white"
      style={{backgroundColor: `${passedColor}`}}><span>Join the
        waitlist &nbsp;
        <FontAwesomeIcon icon={faArrowRight} /></span>
    </button>
  )
}
