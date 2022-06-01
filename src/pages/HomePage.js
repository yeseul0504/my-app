import { useState, useEffect } from 'react';
import Home from '../components/Home';

const HomePage = () => {
  //http 요청 (jquery ajax((xx)), fetch(이거사용), axios(다운))
  //임의 서버
  const [board, setBoard] = useState([]);
  const [user, setUser] = useState({});

  //빈배열은 한번만 실행 최초에 한번만11
  useEffect(() => {
    //다운로드 가정 비동기,,, 1.useEffect 2.다운로드 아직안되서 setBoard에 빈데이터가 들어갈수도잇다.
    //board는 항상 상태값이여야 한다.
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    setBoard([...data]);
    setUser({ id: 1, username: 'cos' });
  }, []);

  return <Home board={board} setBoard={setBoard} user={user} />;
};

export default HomePage;
