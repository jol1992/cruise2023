export const ChecklistItem: React.FC<{ label: string | JSX.Element }> = ({
  label,
}) => {
  return (
    <div>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label>{label}</label>
    </div>
  );
};
