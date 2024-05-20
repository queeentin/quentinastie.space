import { Link } from "react-router-dom";

export function Socials() {
    return(
        <div id="contact">
            <h4>Contact</h4>
            <ul>
                <li><Link to="mailto:quentinastie.space">Email</Link></li>
                <li><Link to="https://www.are.na/quentin-astie">Are.na</Link></li>
                <li><Link to="https://instagram.com/quentin.astie">Instagram</Link></li>
            </ul>
        </div>
    )
}