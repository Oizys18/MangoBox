import React, { Component } from "react";
import styled from "styled-components";
import * as THREE from "three";

class Welcome extends Component {
  // componentDidMount() {
  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  //   document.body.appendChild(renderer.domElement);
  //   var geometry = new THREE.BoxGeometry(1, 1, 1);
  //   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   var cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);
  //   camera.position.z = 5;
  //   var animate = function () {
  //     requestAnimationFrame(animate);
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render(scene, camera); 
  //   };
  //   animate();
  // }

  render() {
    return (
      <Wrapper>
        <Container>{/* <Card>Hello</Card> */}</Container>
      </Wrapper>
    );
  }
}
export default Welcome;

const Wrapper = styled.div`
  /* top:0;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ffaf36; */
`;

const Container = styled.div`
  /* justify-content: center;
  align-items: center;
  display: flex;
  width: 60vw;
  height: 60vh;
  border-radius: 50px;
  background: lightgrey;
  box-shadow: 24px 24px 50px #b57c26, -24px -24px 50px #ffe246; */
  /* box-shadow: 24px 24px 50px #cc8c2b, -24px -24px 50px #ffd241; */
  /* box-shadow: 24px 24px 50px #cc5939, -24px -24px 50px #ff8555; */
`;
