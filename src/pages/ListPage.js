import React, { useState } from 'react';
import styledComponents from 'styled-components';

const StyledItemBox = styledComponents.div`
display:flex;
justify-content: space-between;
  border: 1px solid gray;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items:center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });
  const [posts, setPosts] = useState([
    { id: 1, title: '안녕하세요1', content: '내용1' },
    { id: 2, title: '안녕하세요2', content: '내용2' },
    { id: 3, title: '안녕하세요3', content: '내용3' },
    { id: 4, title: '안녕하세요4', content: '내용4' },
    { id: 5, title: '안녕하세요5', content: '내용5' },
  ]);

  const handleWrite = () => {
    console.log(1, post.title);
    setPosts([...posts, post]);
    setNo(no + 1);
  };

  //compute property name 키값 동적 할당
  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    //대괄호로 감싸면 키값으로 자동 할당, 변수를 자동으로 할당해준다.
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>리스트 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBox>
          <div>
            번호: {post.id} / 제목:{post.title} / 내용 : {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBox>
      ))}
    </div>
  );
};

export default ListPage;
