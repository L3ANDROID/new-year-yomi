import { useEffect } from "react";
import CuteCat from "../components/CuteCat";
import $ from 'jquery';
import './index.css';

const Message = ({inputName}) => {

    const autoType = (elementClass, typingSpeed) => {
        var thhis = $(elementClass);
        thhis.css({
            "position": "relative",
            "display": "inline-block"
        });
        thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
        thhis = thhis.find(".text-js");
        var text = thhis.text().trim().split('');
        var amntOfChars = text.length;
        var newString = "";
        thhis.text("|");
        setTimeout(function () {
            thhis.css("opacity", 1);
            thhis.prev().removeAttr("style");
            thhis.text("");
            for (var i = 0; i < amntOfChars; i++) {
                (function (i, char) {
                    setTimeout(function () {
                        newString += char;
                        thhis.text(newString);
                    }, i * typingSpeed);
                })(i + 1, text[i]);
            }
        }, 1500);
    }

    useEffect(() => {
        autoType(".type-js", 60);
    })

    return (
        <div className='body2' style={{background: `linear-gradient(135deg, ${inputName.color})`}}>
            <div className="type-js headline">
                <h1 className="text-js">{inputName.mensaje}</h1>
            </div>
            <div className="credit"><CuteCat /></div>
        </div>
    )
}

export default Message;