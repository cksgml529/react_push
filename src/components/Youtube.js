import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 35px;
  width: 30%;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
function Youtube() {
  const [video, setVideo] = useState([]);
  const key = "AIzaSyAB1eZcFahqPc3wOFKf7wNSke8Z06G2Dy8";
  const list = "PLwplHkJoQ-R7NnRDVy7_PQN8g5BX-_u_j";
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${list}`;

  useEffect(() => {
    axios.get(URL).then((json) => setVideo(json.data.items));
  }, []);
  return (
    <Container>
      {video.map((vd) => {
        return (
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/P85raaEcR5g"
            title="YouTube video player"
            frameborder="0"
            // allowfullscreen
          ></iframe>
        );
      })}
    </Container>
  );
}

export default Youtube;
