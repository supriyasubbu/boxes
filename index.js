const Box = (props) => {
  //  Write your code here.
  const { className, title } = props;
  const containerClassName = `box-container ${className}`;

  return (
    <div className={containerClassName}>
      <p className="title">{title}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1 className="heading">Boxes</h1>
    <div className="container">
      <Box className="box1" title="Small" />
      <Box className="box2" title="Medium" />
      <Box className="box3" title="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
