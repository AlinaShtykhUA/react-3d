const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Alina
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Front-end developer. In two-year engineering journey I’ve actively
          contributed to diverse projects, showcasing my adaptability and
          problem-solving skills in web development. Professional experience
          includes a key role in a large team for a charity foundation's design,
          and optimizing user interfaces. Freelance improved my ability to
          manage client communications and project timelines effectively,
          ensuring high-quality and timely delivery of web solutions.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12"></div>
      </div>
    </section>
  );
};

export default About;
