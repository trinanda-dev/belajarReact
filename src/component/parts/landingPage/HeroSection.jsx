import { useState } from "react";
import Button from "../../ui/Button";

function HeroSection() {
    let var1 = 1;
    const handleIncrement = () => {
        ++var1
        console.log(var1)
    }

    const [number2, setNumber2] = useState(1)
    const handleIncrement2 = () => {
        setLoading(true)
        setNumber2(number2 + 1)
        console.log(number2)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    const [loading, setLoading] = useState(false)
    return (
        <section>
            <div>{var1}</div>
            <Button onClick={handleIncrement} backgroundColor={"blue"}>+</Button>
            <div>{number2}</div>
            <Button onClick={handleIncrement2} backgroundColor={"green"} Loading={loading}>+</Button>
        </section>

    );
}

export default HeroSection