type propsButton = { 
  xmlns:string;
  classID:string;
  path:string;
  viewBox:string;
  handleClick: () => void };

export const InputButton = (props: propsButton) => {
  return (
    <button type="button" onClick={() => props.handleClick()}>
      <svg
        xmlns={props.xmlns}
        className={props.classID}
        viewBox={props.viewBox}
      >
        <path d={props.path} />
      </svg>
    </button>
  );
};
