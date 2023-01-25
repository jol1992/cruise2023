import styled from "styled-components";

const MenuBar = styled.div`
  height: 4px;
  width: 25px;
  background-color: white;
  margin-bottom: 5px;
`;

const Container = styled.div`
  margin: auto 0;
`;
export const MenuButton: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen((a) => !a);
  };

  return (
    <Container onClick={handleClick}>
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
    </Container>
  );
};
