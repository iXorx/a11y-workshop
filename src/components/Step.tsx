export function Step({
  isActive,
  isCompleted,
  name,
}: {
  isActive: boolean;
  isCompleted: boolean;
  name: string;
}) {
  return (
    <li
      className={`step ${isCompleted ? "completed" : ""} ${
        isActive ? "active" : ""
      }.trim()`}
      aria-current={isActive ? "step" : undefined}
    >
      <span className="circle" aria-hidden="true">
        {isCompleted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
            ></path>
          </svg>
        )}
      </span>
      <span className="label">{name}</span>
      {!isActive && (
        <span className="sr-only">
          {isCompleted ? ": completado" : ": no completado"}
        </span>
      )}
    </li>
  );
}
