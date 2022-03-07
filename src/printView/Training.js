function Training(props) {
  const training = props.data.map((train, index) => {
    return (
      <li key={index}>
        <p>{`${train.title} ${train.school ? `by ${train.school}` : ""} - ${
          train.date
        }`}</p>
      </li>
    );
  });
  return <ul>{training}</ul>;
}

export default Training;
