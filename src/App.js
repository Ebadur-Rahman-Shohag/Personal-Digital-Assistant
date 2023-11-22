import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                image={AlexaImage}
                title="Alexa"
                handle="@alexa99"
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={CortanaImage}
                title="Cortana"
                handle="@cortana32"
                description="Cortana was made by Microsoft. Who knows what is does"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={SiriImage}
                title="Siri"
                handle="@siri1"
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
