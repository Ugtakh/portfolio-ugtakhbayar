import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <SocialIcon network="twitter" />
          <SocialIcon network="google" />
          <SocialIcon network="instagram" />
          <SocialIcon network="youtube" />
          <SocialIcon network="facebook" />
        </motion.div>
        <h1 style={{ color: "red" }}>
          <Typewriter words={["Sain uu", "Pinecone"]} loop={false} />
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
