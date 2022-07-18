import { ArrowRight } from 'react-iconly'

export default function WaitingListBtn({passedColor}) {
  return (
    <button className="responsiveBtn text-white"
      style={{backgroundColor: `${passedColor}`}}><span>Join the
        waitlist &nbsp;
        <ArrowRight/></span>
    </button>
  )
}
