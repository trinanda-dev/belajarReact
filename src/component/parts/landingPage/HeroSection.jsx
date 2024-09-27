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
        setNumber2(number2 + 1)
        console.log(number2)
    }
    return (
        <section>
            <div>{var1}</div>
            <Button onClick={handleIncrement} backgroundColor={"blue"}>+</Button>
            <div>{number2}</div>
            <Button onClick={handleIncrement2} backgroundColor={"green"}>+</Button>
        </section>

    );
}

export default HeroSection