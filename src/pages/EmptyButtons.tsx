export const EmptyButtons = () => {
  return (
    <div>
      <h2>EmptyButtons</h2>
      <p>EmptyButtons page content</p>
      <button type="button" style={{ width: "10px", display: "none" }}>
        <img
          src="https://www.svgrepo.com/show/29974/pencil.svg"
          alt="Edit"
          width={10}
        />
      </button>
      <button>Yo si tengo contenido</button>
    </div>
  );
};
