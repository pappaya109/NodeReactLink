import React, { useState, useContext, useRef } from 'react'
import { Form, Button, Row, Image } from 'react-bootstrap';
import styles from './Login.module.css'
import { modalStore } from '../App';
import axios from '../axios';

const Login = () => {
    const { showModal, setShowModal } = useContext(modalStore);
    const idRef = useRef();
    const pwRef = useRef();
    /** 로그인 기능 */
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('user/login', {
        id : idRef.current.value,
        pw : pwRef.current.value
        })
        .then( res => {
            
        })
    }

    return (

        <div className={styles.LoginModalWrapper}>
            <Form className={styles.modal} onSubmit={handleLogin}>
                <Image src='/exit-icon.png'
                    width={15}
                    className={styles.exitBtn}
                    onClick={() => setShowModal(false)}
                />
                <h2>로그인</h2>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type='text' placeholder='아이디를 입력하세요' ref={idRef}></Form.Control>
                </Form.Group>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicPw">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type='password' placeholder='비밀번호를 입력하세요' ref={pwRef}></Form.Control>
                    </Form.Group>
                    <Button type='submit'>로그인</Button>
                </Row>
            </Form>

        </div>
    )
}

export default Login