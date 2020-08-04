import React, { Component } from "react";
import styled from "styled-components";
import $ from "jquery";

class Main extends Component {
  state = {
    rotateBox: null,
    mango:null,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = (e: any) => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    // const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    // this.setState({ scrollTop });
    let top = e.srcElement.scrollingElement.scrollTop;
    if (top < 700) {
      this.setState({
        rotateBox: e.srcElement.scrollingElement.scrollTop / 6
        
      });
    }
    this.setState({mango: e.srcElement.scrollingElement.scrollTop})
    console.log(e.srcElement.scrollingElement.scrollTop*2);
  };
  render() {
    return (
      <MainWrapper>
        <MangoBox style={{ transform: `rotate(-${this.state.rotateBox}deg)` }}>
          MANGO!🥭
        </MangoBox>
        <Mango style={{ transform: `translate(-${this.state.mango}px) translateY(${this.state.mango}px) rotate(-${this.state.rotateBox}deg)` }}>
          🥭
        </Mango>
        <FirstContainer></FirstContainer>
        <SecondContainer></SecondContainer>
        <ThirdContainer></ThirdContainer>
        <FourthContainer></FourthContainer>
        <FifthContainer></FifthContainer>
        <SixthContainer></SixthContainer>
      </MainWrapper>
    );
  }
}
export default Main;

const MainWrapper = styled.div`
  /* background size & color */
  width: 100%;
  height: 200vh;
  background: linear-gradient(#f9d423, #ff4e50);

  /* background position */
  position: absolute;
  top: 0;
  left: 0;

  /* hide the scroll bar */
  /* overflow: hidden; */
`;

const MangoBox = styled.div`
  /* position */
  position: absolute;
  right: 10vw;
  top: 32vh;
  /* size & color */
  width: 30vw;
  height: 40vh;
  background-color: #75420c;
  border: 1px solid black;
  border-radius: 5px;

  /* text */
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 5rem;
  color: white;
  z-index: 2;
`;

const Mango = styled.div`
  position: absolute;
  right: 15vw;
  top: 32vh;
  font-size: 5rem;
  z-index: 1;
`;
const FirstContainer = styled.div``;
const SecondContainer = styled.div``;
const ThirdContainer = styled.div``;
const FourthContainer = styled.div``;
const FifthContainer = styled.div``;
const SixthContainer = styled.div``;
