import { useParams } from 'react-router-dom';
export default function SitterDetails() {
    const { id } = useParams();
    return <div className="p-4"><h1>Sitter Details {id}</h1></div>;
}
