import React from 'react';
import styled from 'styled-components';

const StyledDeleteBtn = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'lightgray' : 'red')};
`;

const StyledAddBtn = styled(StyledDeleteBtn)`
  color: ${(props) => (props.user.username === 'ssar' ? 'lightgray' : 'red')};
  background-color: lightcyan;
`;

//function 방식
const Home = (props) => {
  //구조분할 할당
  const { board, setBoard, user } = props;

  return (
    <div>
      <StyledAddBtn user={user}>더하기</StyledAddBtn>
      <StyledDeleteBtn user={user} onClick={() => setBoard([])}>
        전체 삭제
      </StyledDeleteBtn>
      {board.map((board) => (
        <h3>
          제목:{board.title} 내용: {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
