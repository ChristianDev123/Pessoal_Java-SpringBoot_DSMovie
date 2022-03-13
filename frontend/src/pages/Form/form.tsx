import CardForm from 'components/FormCard/CardForm';
import { useParams } from 'react-router-dom';

export default function Form() {
  const params = useParams(); // pega o parametro do get após o /form

  return (
    <CardForm movieId={`${params.movieId}`} />
  );
}
