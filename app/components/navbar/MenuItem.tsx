"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  bold?: boolean;
}
const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, bold }) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${bold ? "font-semibold" : ""}
        
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold"
        `}
    >
      {label}
    </div>
  );
};

export default MenuItem;
