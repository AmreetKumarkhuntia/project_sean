import { useState } from "react";
import './home.scss'

const Home = () => {

    const [inputR, setInputR] = useState("");
    const [data, setData] = useState([]);

    async function getPredictions(inputR) {
        fetch(`http://localhost:8000/predict/?input_review=${inputR}`).then(res => res.json())
            .then((res) => {
                setData(res);
                console.log(res);
            })
    }
    const handleChange = (e) => {
        setInputR(e.target.value);
    }
    return (<>
        <div className="home">
            <h3>Enter your prompt here</h3>
            <input className="form-control form-control-lg" type="text" onChange={handleChange} name="input_review" placeholder="Enter the prompt" required />
            <br />
            <button type="button" className="btn btn-primary" onClick={() => {
                getPredictions(inputR);
            }}>Send</button>
            <div className="displayPrediction">
                {data.Predictions === "positive" ? (
                    <div>The comment seems to be positive</div>
                ) : (
                    <>
                    </>
                )}
                {data.Predictions === "negative" ? (
                        <div>The comment seems to be negative</div>
                ) : (
                    <>
                    </>
                )}
            </div>
        </div>
    </>);
}

export default Home;