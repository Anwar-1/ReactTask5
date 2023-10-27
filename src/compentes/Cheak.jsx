import React, { useState } from 'react'

const Cheak = () => {
  const checkList = [
    { name: "apple", isTrue: true },
    { name: "orange", isTrue: true },
    { name: "banana", isTrue: true },
  ];

  const [checkedStates, setCheckedStates] = useState(checkList.map(() => false));

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  }

  return (
    <>
      {checkList.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checkedStates[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          {checkedStates[index] ? <span><del>{item.name}</del> &#10003;</span> : <span>{item.name}</span>}
        </div>
      ))}
    </>
  )
}

export default Cheak;



