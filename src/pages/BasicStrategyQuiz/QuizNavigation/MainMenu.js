import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavbarModule from '../../../components/Navbar/Navbar';
import './MainMenu.css'

function QuizOptions() {
    return (
        <main>
            <NavbarModule />
                <Stack gap={5} className="col-6 mx-auto">
                    <Button variant="secondary">Main Quiz</Button>
                    <Button variant="secondary">Training</Button>
                    <Button variant="secondary">Home</Button>
                    <Button variant="secondary">Ranking</Button>
                    <Button variant="secondary">Mission Statement</Button>
                </Stack>
        </main>
    )
}

export default QuizOptions;