const express = require('express');
const router = express.Router();
const conn = require('../config/database');


// 중복 아이디 확인
router.post('/chkId', (req, res) => {
    // console.log('check Id router!', req.body)
    let {id} = req.body;
    let sql = 'SELECT id FROM user_table WHERE id = ?'
    conn.query(sql, [id], (err,rows)=>{
        if (err == null) {
            if (rows.length > 0) {
                res.json({msg: 'dub'})
            } else {
                res.json({
                    msg: 'uniq'
                })
            }
        }
    })
})

// 회원가입 
router.post('/join', (req, res)=>{
    console.log('join router',req.body)
    const {id, pw, email, user_name, address} = req.body
    let sql = 'INSERT INTO user_table (id, pw, email, user_name, address) value(?, ?, ?, ?, ?)'
    conn.query(sql, [id, pw, email, user_name, address], (err, rows)=>{
        console.log(rows)
        if(rows) {
            res.json({
                msg: 'join success!'
            })
        } else {
            res.json({
                msg: 'join failed'
            })
        }
    })
  
})

// 로그인 
router.post('/login', (req, res)=>{
    let { id, pw } = req.body;
    let sql = 'SELECT user_name FROM user_table WHERE id = ? AND pw = ?'
    conn.query(sql, [id, pw], (err,rows)=>{
        if(rows) {
            console.log(rows)
            res.json({
                msg: 'login success'
            })
        }
        else {
            res.json({
                msg: 'login failed',
                user_name : rows
            })
        }
        console.log(rows)
        
    })
})
module.exports = router;