type propsButton = { nameButton: string; handleClick: () => void };

export const InputButton = (props: propsButton) => {
    return (
      <button type="button" onClick={() => props.handleClick()}>
        {props.nameButton}
      </button>
    );
};
