import Container from "react-bootstrap/esm/Container";

import Image from "react-bootstrap/esm/Image";
import { useState } from "react";



const Language = ({name,options,img}) => {

  const [showDesc, setshowDesc] = useState(false);

  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100 lang-card"
      onClick={() => setshowDesc(!showDesc)}
      type="button"
    >
      {!showDesc && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}
      {showDesc && (
        <ul className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="text-start h5"> {item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
}

export default Language
