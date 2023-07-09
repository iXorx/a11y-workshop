export const EmptyLinks = () => {
  const random = 2;
  return (
    <div>
      <h2>EmptyLinks</h2>
      <p>EmptyLinks page content</p>
      <a href="#" style={{ width: "10px", display: "none" }}>
        <img
          src="https://www.svgrepo.com/show/29974/pencil.svg"
          alt="Edit"
          width={10}
        />
      </a>
      <a href={random > 4 ? undefined : "#"}>Yo si tengo contenido</a>
    </div>
  );
};
