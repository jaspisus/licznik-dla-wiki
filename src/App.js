import "./App.css";
import Countdown from "react-countdown";

function App() {
  const searchParams = new URLSearchParams(window.location.search);

  const countTo = searchParams.get("countTo");

  console.log({ countTo });

  return (
    <section>
      <h1>Do wyjścia z Selfie zostało:</h1>
      <h2>
        <Countdown date={new Date(countTo)} daysInHours />
      </h2>
    </section>
  );
}

export default App;
