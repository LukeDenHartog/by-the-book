import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavbarModule from '../../../components/Navbar/Navbar';
import './OptionsMenu.css';

function OptionsMenu() {
    return (
        <main className="options-menu-container">
            <NavbarModule />
            <Stack gap={5} className="col-6 mx-auto">
                <Button className="option-menu-button" variant="secondary">Main Quiz</Button>
                <Button className="option-menu-button" variant="secondary">Training</Button>
                <Button className="option-menu-button" variant="secondary">Home</Button>
                <Button className="option-menu-button" variant="secondary">Ranking</Button>
                <Button className="option-menu-button" variant="secondary">Mission Statement</Button>
            </Stack>
        </main>
    )
}

export default OptionsMenu;