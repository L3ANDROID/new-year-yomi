import { useEffect, useState } from 'react';
import mensajes from '../../mensajes.json'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Countdown = ({ setNewYear, newYear, inputName, setInputName }) => {

    const history = useNavigate();

    const handleGetName = e => {
        const { name, value } = e.target;
        setInputName((inputName) => ({
            ...inputName,
            [name]: value
        }));
    }

    const handleSendName = async () => {
        setLoader(1) //estado de cargando.
        mensajes.map(async ({nombre, color, mensaje}) => {
            console.log({nombre, color, mensaje})
            if(nombre.toUpperCase() === inputName.nombre.toUpperCase()){
                await setInputName({nombre, color, mensaje})
                setTimeout(() => setLoader(2), 2000);
                return setTimeout(() => history("/content"), 3000);
            }
            return setTimeout(() => setLoader(3), 2000);
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear() + 1;
        // mm/dd/yyyy
        const difference = +new Date(`01/01/${year}`) - +new Date();

        let timeLeftObject = {};

        if (difference > 0) {
            timeLeftObject = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        if (difference <= 60000 && difference > 30000) setNewYear(2)
        if (difference <= 30000 && difference > 10000) setNewYear(3)
        if (difference <= 10000 && difference > 0) setNewYear(4)
        if (difference < 0) setNewYear(0)
        return timeLeftObject;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [loader, setLoader] = useState(0);

    return (
        <div className='body'>
            <div className="container">
                <h1 id="headline">{newYear === 0 ? "HAPPY NEW YEAR 2022" : "PAGE WILL BE UNLOCKED IN:"}</h1>
                <div id="countdown">
                    {newYear === 0
                        ?
                        <div className='cuerpo'>
                            <div className="form__group field">
                                <input 
                                  type="input" 
                                  className="form__field" 
                                  placeholder="Name" 
                                  name="nombre" 
                                  id='name' 
                                  autoComplete='off'
                                  onChange={handleGetName} 
                                  required 
                                  />
                                <label htmlFor="name" className="form__label">Nombre</label>
                            </div>
                            <button className='btn' onClick={handleSendName}>CONTINUE</button>
                            {
                            loader === 0
                            ? ""
                            : loader === 1
                                ? <p style={{color: "skyblue"}}>LOADING...</p>
                                : loader === 2
                                    ? <p style={{color: "green"}}>LISTO :D</p>
                                    : <p style={{color: "red"}}>NOMBRE INCORRECTO O NO REGISTRADO</p>
                            }
                        </div>
                        :
                        <ul>
                            <li><span id="days">{timeLeft.days}</span>dia(s)</li>
                            <li><span id="hours">{timeLeft.hours}</span>hora(s)</li>
                            <li><span id="minutes">{timeLeft.minutes}</span>minuto(s)</li>
                            <li><span id="seconds">{timeLeft.seconds}</span>segundo(s)</li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Countdown;