import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import './Style.css'

function Homepage() {
    return (
        <div className='Height'>

            <Alert>
                This is a useState example with{' '}
                <Alert.Link as={Link} to="/usestate">link</Alert.Link>.
            </Alert>
            <Alert>
                This is a useEffect example with{' '}
                <Alert.Link as={Link} to="/useeffect">link</Alert.Link>.
            </Alert>
            <Alert>
                This is a useCallBack example with{' '}
                <Alert.Link as={Link} to="/usecallback">link</Alert.Link>.
            </Alert>


        </div>
    );
}

export default Homepage;
