import { useState } from "react";

const Home = () => {
  const [inputR, setInputR] = useState("");
  const [data, setData] = useState([]);

  async function getPredictions(inputReview) {
    try {
      const response = await fetch(
        `http://localhost:8000/predict/?input_review=${inputReview}`
      );
      const res = await response.json();
      setData(res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  const handleChange = (e) => {
    setInputR(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col">
        <div>
          <h1 className="mt-16 font-extrabold text-[#e1e1e1] text-[64px] text-center">
            Enter your Prompt
          </h1>
          <p className="mt-5 text-[#666e75] text-[32px] text-center">
            Browse through a collection of imaginative and visually stunning
            images generated using the API of OpenAI.
          </p>
        </div>
        <div className="flex flex-col">
          <input
            className="mx-auto mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-1/2 p-3"
            type="text"
            onChange={handleChange}
            name="input_review"
            placeholder="Enter the prompt"
            required
          />
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              getPredictions(inputR);
            }}
          >
            Send
          </button>
          <div className="displayPrediction">
            {data.Predictions === "positive" ? (
              <div>The comment seems to be positive</div>
            ) : (
              <></>
            )}
            {data.Predictions === "negative" ? (
              <div>The comment seems to be negative</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
