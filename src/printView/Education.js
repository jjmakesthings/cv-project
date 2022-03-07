function Education(props) {
  const education = props.data.map((edu, index) => {
    return (
      <div key={index}>
        <h3>
          {`${edu.degree},`} <br /> {edu.major}{" "}
        </h3>
        <h4>{edu.school}</h4>
        <h4>{`${edu.city} - ${edu.date}`}</h4>
      </div>
    );
  });
  return education;
}
export default Education;
