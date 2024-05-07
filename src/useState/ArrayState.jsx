import { useState } from "react"

const ArrayState = () => {
  const [inputValue, setInputValue] = useState(null);
  const [data, setData] = useState([]);

  const onSubmitHandle = () => {
    console.log(typeof (inputValue))
    if (inputValue !== null) {
      console.log(inputValue)
      setData([...data, inputValue]);
      setInputValue(null);
    }
  }
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }} />
      <button onClick={onSubmitHandle} disabled={inputValue != ''}>Submit</button>

      <ul>
        {data && data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </>
  )
}

export default ArrayState