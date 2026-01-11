import { useParams } from 'react-router-dom';
export default function LeaveReview() {
    const { id } = useParams();
    return <div className="p-4"><h1>Leave a Review for Booking {id}</h1></div>;
}
