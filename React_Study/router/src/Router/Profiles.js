import { Link } from "react-router-dom";

function Profiles() {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <Link to="/profile/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profile/tenenger">tenenger</Link>
                </li>
            </ul>
        </div>
    );
}

export default Profiles;
