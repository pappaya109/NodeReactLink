import React, { useRef, useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import styles from './Join.module.css'
import axios from '../axios';
const Join = () => {
    const [idChecked, setIdChecked] = useState(false);
    const [text, setText] = useState();
    const [pwChk, setPwChk] = useState();
    const idRef = useRef();
    const btnRef = useRef();
    const textRef = useRef();
    const pwRef = useRef([]);
    const [otherInfo, setOtherInfo] = useState([]);
    /** 아이디 중복확인 */
    const checkId = (e) => {
        console.log(idRef.current.value)
        e.preventDefault();
        axios.post('user/chkId', {
            id: idRef.current.value
        })
            .then(res => {
                console.log(res.data)
                if (res.data.msg == 'uniq') {
                    setIdChecked(true)
                    btnRef.current.disabled = true;
                    textRef.current.style.color = 'green';
                    setText('사용가능한 아이디입니다')
                } else {
                    textRef.current.style.color = 'red';
                    setText('중복된 아이디입니다.')
                }
            })
    }
    
    const joinHandler = (e) => {
        e.preventDefault();
        console.log(pwRef)
        if (idChecked == true) {
            if(pwRef.current[0] == pwRef.current[1]) {
                pwRef.current[1].nextSibling.style.color = 'green';
                setPwChk('비밀번호 확인');
                axios.post('/user/join', {
                    id: idRef.current.value,
                    pw: pwRef.current[0].value,
                    user_name: otherInfo[0],
                    email: otherInfo[1],
                    address: otherInfo[2]
                })
            } 
            else {
                pwRef.current[1].nextSibling.style.color = 'red';
                setPwChk('비밀번호를 다시 입력해주세요');
            }
        } else {
            alert('아이디 중복확인을 해주세요!')
        }
        console.log(pwChk)
    }

    return (

        <div className={styles.joinWrapper}>
            <h2 className={styles.joinTitle}>회원가입</h2>
            <hr></hr>
            <Form onSubmit={joinHandler}>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control type='text' placeholder='아이디를 입력하세요' ref={idRef}></Form.Control>
                        <Form.Text ref={textRef}>{text}</Form.Text>
                    </Form.Group>
                    <Button variant='light' onClick={checkId} ref={btnRef}>중복확인</Button>
                </Row>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicPw" as={Col}>
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type='password' 
                        placeholder='비밀번호를 입력하세요' 
                        ref={el=>pwRef.current[0] = el}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPw2" as={Col}>
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control type='password' 
                        placeholder='비밀번호를 입력하세요' 
                        ref={el=>pwRef.current[1] = el}>
                        </Form.Control>
                        <Form.Text>{pwChk}</Form.Text>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicNickname">
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control type='text' 
                        placeholder='닉네임을 입력하세요' 
                        onChange={e=>setOtherInfo(otherInfo.concat(e.target.value))}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type='email' 
                        placeholder='이메일을 입력하세요' 
                        onChange={e=>setOtherInfo(otherInfo.concat(e.target.value))}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>주소</Form.Label>
                        <Form.Control type='test' 
                        placeholder='주소를 입력하세요' 
                        onChange={e=>setOtherInfo(otherInfo.concat(e.target.value))}>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        가입하기
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default Join