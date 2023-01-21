import styled from "styled-components";

const MenuBar = styled.div`
  height: 4px;
  width: 25px;
  background-color: white;
  margin-bottom: 5px;
`;
export const MenuButton: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen((a) => !a);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "1.5rem",
        // marginTop: "5px",
        marginLeft: "2rem",
      }}
      onClick={handleClick}
    >
      {!isOpen ? (
        <div>
          <MenuBar></MenuBar>
          <MenuBar></MenuBar>
          <MenuBar></MenuBar>
        </div>
      ) : (
        <div>
          <MenuBar></MenuBar>
          <MenuBar></MenuBar>
          <MenuBar></MenuBar>
        </div>
      )}
    </div>
  );
};
