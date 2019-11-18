import React from 'react'
import { ChipElem } from './Styled'


interface IProps {
  onClick: () => void;
  label: string;
  selected: boolean;
  count: number;
}

const Chip = ({ onClick, label, selected, count }: IProps) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <ChipElem className={`${selected ? "selected" : ""}`} onClick={handleClick}>
      <div>{label}</div>
      <div className="count">{`(${count})`}</div>
    </ChipElem>
  );
}

export default Chip
export { Chip }