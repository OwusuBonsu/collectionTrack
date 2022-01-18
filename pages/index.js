import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Card className="text-white bg-dark">
        <Card.Title className="text-center">
          Keep track of your favorite media
        </Card.Title>
        <Card.Text className="text-center">
          Welcome to CollectionTrack, a platform that allows you to keep track
          of your media collections, digitally.
        </Card.Text>
      </Card>
    </>
  );
}
