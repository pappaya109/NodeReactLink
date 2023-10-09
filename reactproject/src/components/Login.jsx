<<<<<<< HEAD
import React,{ useState, useContext } from 'react'
import { Form, Button, Row, Image } from 'react-bootstrap';
import styles from './Login.module.css'
import { modalStore } from '../App';
=======
import React,{ useState, } from 'react'
import { Button, Form } from 'react-bootstrap';

>>>>>>> 48fb1b3304487f1db366164cbef4b5d60d62bd84
const Login = () => {
    const { showModal, setShowModal } = useContext(modalStore);
    return (
<<<<<<< HEAD
        <div className={styles.LoginModalWrapper}>
            <Form className={styles.modal}>
                <Image  src='/exit-icon.png' 
                        width={15} 
                        className={styles.exitBtn} 
                        onClick={()=> setShowModal(false)}
                        />
                <h2>로그인</h2>
                <hr></hr>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type='text' placeholder='아이디를 입력하세요'></Form.Control>
                </Form.Group>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicPw">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type='password' placeholder='비밀번호를 입력하세요'></Form.Control>
                    </Form.Group>
                    <Button type='submit'>로그인</Button>
                </Row>
            </Form>
=======
        <div>
            
>>>>>>> 48fb1b3304487f1db366164cbef4b5d60d62bd84
        </div>
    )
}

export default Login