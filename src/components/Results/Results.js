import { useEffect } from "react";

function Results(props) {
  useEffect(() => {
    console.log(props.countryData);
  }, [props.countryData]);

  return <div></div>;
}

export default Results;
