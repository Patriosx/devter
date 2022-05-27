import { colors } from "../../styles/theme";

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          background: ${colors.black};
          border-radius: 1000px;
          border: 0;
          color: ${colors.white};
          cursor: pointer;
          font-size: 1rem;
          font-weight: 800;
          padding: 0.6rem 2rem;
          display: flex;
          align-items: center;
        }
        button:hover {
          opacity: 0.7;
        }
        /* //* para cualquier sgv (global). Si el btn tiene dentro un svg
        (>) mira solo el primer nivel de hijos del elemento padre
        */

        button > :global(svg) {
          margin-right: 0.6rem;
        }
      `}</style>
    </>
  );
}
