import { useEffect, useState } from 'react';
import './App.css';

function Login() {
  const User = {
    email: 'sookyo0810@naver.com',
    pw: '123@qweqwe',
  };

  const confirm = () => {
    if (email === User.email && pw === User.pw) {
      alert('환영합니다');
    } else {
      alert('등록되지 않은 회원입니다');
    }
  };

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwlValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (regex.test(pw)) {
      setPwlValid(true);
    } else {
      setPwlValid(false);
    }
  };

  const [notAllow, setNotAllow] = useState('true');

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>
      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input type="text" className="input" placeholder="test@gmail.com" value={email} onChange={handleEmail} />
        </div>
        <div className="errorMessageWrap">{!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}</div>
        <div style={{ marginTop: '26px' }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input type="password" className="input" placeholder="영문, 숫자 특수문자 포함 8자 이상" value={pw} onChange={handlePw} />
        </div>
        <div className="errorMessageWrap">{!pwValid && pw.length > 0 && <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>}</div>
      </div>
      <div>
        <button onClick={confirm} disabled={notAllow} className="bottomButton">
          확인
        </button>
      </div>
    </div>
  );
}

export default Login;
