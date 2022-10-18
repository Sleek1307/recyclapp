import React, { useState } from "react";

import { CardPost } from "../card";

const StepCard = ({ data, navigation, style }) => {

  const [index, setIndex] = useState(0);

  return (
    <CardPost
      data={data[index]}
      nextAction={() => setIndex((index < (data.length - 1)) ? index + 1 : (data.length - 1))}
      prevtAction={() => setIndex((index > 0) ? index - 1 : 0)}
      navigate = {navigation.navigate}
      style = {style}
      ShowPagers
    />
  )
}
export default StepCard;