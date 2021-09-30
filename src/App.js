import "./styles.css";
import User from "./User";

export default function App() {
  return (
    <div>
      <User userId={1} />
      <User userId={2} />
      <User userId={3} />
    </div>
  );
}
