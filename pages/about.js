import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center overflow-hidden shadow-blue-500/50">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Hello!</h2>
            <br />
            <p className="text-lg text-gray-500">
              My name is Hector. I'm a Front-End Developer focused on{" "}
              <span className="font-bold tracking-tight">
                HTML, CSS, JS, & PHP
              </span>
              . I love making the web an awesome place. When I am not coding I
              am either slaying tacos or watching my favorite movies or tv
              series.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center"></div>
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
};

export default About;
