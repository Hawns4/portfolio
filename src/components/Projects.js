import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const projects = [
    { 'title': 'K9 Fun Family Website', 'language': 'Java/JavaScript', 'description': 'A website for the K9 Fun Family business', 'repository': 'https://github.com/g-priime/loginPrototypeV0.0' },
    { 'title': 'Hana Bot', 'language': 'JavaScript', 'description': 'A Discord app bot that displays information about the game Monster Hunter: World', 'repository': 'https://github.com/Hawns4/hanabot' },
    { 'title': 'Minesweeper', 'language': 'JavaScript', 'description': 'A simple Minesweeper game', 'repository': 'https://github.com/Hawns4/minesweeper' },
    { 'title': 'Portfolio', 'language': 'JavaScript', 'description': 'This website', 'repository': 'https://github.com/Hawns4/portfolio' },
]
export const Projects = () => (
    <Container>
        <Jumbotron>
            <h1>Projects</h1>
            <h3>My Work</h3>
        </Jumbotron>
        {createProjectCards()}
    </Container>
)

const createProjectCards = () => {
    return projects.map((project, index) => (
        <Card key={index}>
            <Card.Header>{project.title}</Card.Header>
            <Card.Body>
                <Card.Title>{project.language}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <Button href={project.repository} target='_blank' variant='primary' size='lg' block>GitHub Repository</Button>
            </Card.Body>
        </Card>
    ))
}