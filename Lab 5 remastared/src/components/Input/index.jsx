export const Input = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="input-group mt-1">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          {props.label}
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};
