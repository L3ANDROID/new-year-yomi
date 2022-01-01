import './index.css';

const Loader = ({newYear}) => {

    return (
        <div id='wreath' className={newYear === 1 ? "giro1" : newYear === 2 ? "giro2" : newYear === 3 ? "giro3" : newYear === 4 ? "giro4" : "giro4"}>
            <div className="ball1"></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
            <div className="ball4"></div>
            <div className="ball5"></div>
            <div className="ball6"></div>
            <div className="ribbon1"></div>
            <div className="ribbon2"></div>
            <div className="ribbon3"></div>
            <div className="ribbon4"></div>
            <div className="ribbon5"></div>
            <div className="ribbon6"></div>
            <div className="bow1"></div>
            <div className="bow2"></div>
        </div>
    )
}

export default Loader