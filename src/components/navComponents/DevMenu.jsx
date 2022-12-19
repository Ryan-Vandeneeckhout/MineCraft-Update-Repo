import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DevMenu = (props) => {

    return (
        <section className="DevMenu">
        <button
            aria-label="Mobile Navigation"
            onClick={props.MobileNavFunction}
            className={`NavMobile${props.mobileNav ? " rotating" : " not"}`}
          >
          <FontAwesomeIcon icon={`${props.mobileNav ? "fa-times" : "fa-bars"}`}/>
        </button>
      </section>
    )
}
export default DevMenu; 