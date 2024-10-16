import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import '../css/footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <Navbar expand="lg" variant="dark" bg="dark" className="mt-5 mb-0">
                <Container>
                    <Navbar>A Project made using React JS by </Navbar>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer