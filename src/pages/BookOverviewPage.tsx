import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

export default function BookOverviewPage() {
  const { bookId } = useParams();
  return (
    <AnimatedPage>
      <Container className="py-4">
        <h3>Обзор книги: {bookId}</h3>
        {/* здесь можно загрузить данные по bookId */}
      </Container>
    </AnimatedPage>
  )
}