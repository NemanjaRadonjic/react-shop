export default ({ size = 28, color = "rgb(54, 54, 54)", handleRemove }) => (
  <svg
    onClick={handleRemove}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
  </svg>
);
