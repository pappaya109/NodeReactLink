import React, { useRef, useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import styles from './MyInfo.module.css'
const MyInfo = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>회원정보수정</h2>
            <hr></hr>
            <Form>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control type='text' placeholder='아이디 뜨게 할거임' disabled='true' ></Form.Control>
                        {/* <Form.Text >'중복표시 체크'</Form.Text> */}
                    </Form.Group>
                    {/* <Button variant='light' >중복확인</Button> */}
                </Row>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicPw" as={Col}>
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type='password'
                            placeholder='비밀번호를 입력하세요'
                            >
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicNickname">
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control type='text'
                            placeholder='변경할 닉네임을 입력하세요'
                            // onChange={e => setOtherInfo(otherInfo.concat(e.target.value))}
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type='email'
                            placeholder='변경할 이메일을 입력하세요'
                            // onChange={e => setOtherInfo(otherInfo.concat(e.target.value))}
                            >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>주소</Form.Label>
                        <Form.Control type='test'
                            placeholder='변경할 주소를 입력하세요'
                            // onChange={e => setOtherInfo(otherInfo.concat(e.target.value))}
                            >
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type='submit'>
                        회원정보 수정
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default MyInfo