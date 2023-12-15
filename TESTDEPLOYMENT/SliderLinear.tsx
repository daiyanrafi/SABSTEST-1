

import * as React from "react";

interface SliderLinearProps {
  
}

const SliderLinear: React.FC<SliderLinearProps> = () => {
  const [sliderValue, setSliderValue] = React.useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Slider Value: {sliderValue}</p>
    </div>
  );
};

export default SliderLinear;
