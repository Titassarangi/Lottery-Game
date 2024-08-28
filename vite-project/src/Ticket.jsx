import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
    console.log('Rendering Ticket with:', ticket); // Debugging line
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum key={idx} num={num} />
            ))}
        </div>
    );
}
