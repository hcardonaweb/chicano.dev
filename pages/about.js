import Image from "next/image";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex justify-center items-center overflow-hidden shadow-blue-500/50">
        <img alt="" src="avatar-gradient.jpg" className="h-80 rounded-lg"></img>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hello!</h1>
          <br />
          <p className="text-lg text-gray-500">
            My name is Hector. I'm a Front-End Developer focused on{" "}
            <span className="font-bold tracking-tight">
              HTML, CSS, JS, & PHP
            </span>
            . I love making the web an awesome place. When I am not coding I am
            either slaying tacos or watching my favorite movies or tv series.
          </p>
          <br />
          <p className="text-lg text-gray-500">
            Feel free to contact me via any of the social media links at the
            bottom of this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
