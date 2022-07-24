import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { FormContext } from "../../pages/_app";


export default function WaitingListBtn({passedColor}) {
  const {isFormVisible, setIsFormVisible} = useContext(FormContext);
  return (
    <button className="responsiveBtn text-white" 
      style={{backgroundColor: `${passedColor}`}} onClick={()=>setIsFormVisible(!isFormVisible)}><span>Join the
        waitlist &nbsp;
        <FontAwesomeIcon icon={faArrowRight} /></span>
    </button>
  )
}
