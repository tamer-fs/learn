import { useEffect } from "react";
import Header from "./components/header/header";
import MainPage from "./pages/mainPage/mainPage";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    window.onscroll = () => {
      hiddenElements.forEach((element) => {
        observer.observe(element);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
