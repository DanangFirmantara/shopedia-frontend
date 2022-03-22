import React from 'react'
import Head from 'next/head'
import styles from '../login/login.module.css'
import Sidebar from '../../components/sidebar'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Link from 'next/link'

const index = () => {
    return (
        <>
            <Head>
                <title>Login | Shopedia</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={'bg-color4 py-5'}>
                <h1 className={'text-center pt-5'}>My Account</h1>
                <div className={'text-center pb-5'}>Register and log in with your account to be able to shop at will</div>
            </div>
            <Container>
                <Row className='py-5'>
                    <Col xs={12} md={4}>
                        <Sidebar />
                    </Col>
                    <Col xs={12} md={5}>
                        <div className='my-5'>
                            <h3>Login</h3>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                aria-describedby="email"
                                className='me-5 py-3 mt-5'
                            />
                            <Form.Control
                                type="password"
                                id="password"
                                name="password"
                                aria-describedby="password"
                                className='me-5 py-3 mt-2'
                            />
                            <Button className='mt-4 px-4' variant="color2" size="lg" active>
                                Login
                            </Button>{' '}<br />
                            <Row className='mt-3'>
                                <Col>
                                    <Form.Check
                                        inline
                                        label="Remember Me"
                                        name="group1"
                                    />
                                </Col>
                                <Col>
                                    <Link href='/forgot-password'>
                                        <a className='text-decoration-none text-color3'>Forgot your password?</a>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default index