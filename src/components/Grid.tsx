import { useEffect, useState, useCallback } from "react";
import { useInView } from 'react-intersection-observer';
import { aws, bootstrap, css, gcp, git, html, javascript, nodeJs, postgresql, python, react, ror, ruby, sass, sql, typescript } from '../assets/images/icons';
import { useTranslation } from "react-i18next";
import { CellPosition, Position } from "../types";

const iconColorsGrid1 = [
  { icon: html, color: '#f16529' },
  { icon: javascript, color: '#F7DF1E' },
  { icon: nodeJs, color: '#8cc84b' },
  { icon: python, color: '#dfe2dc' },
  { icon: css, color: '#0295de' },
  { icon: react, color: '#61DAFB' },
  { icon: ror, color: 'black' },
  { icon: ruby, color: '#ba0f01' },
]

const iconColorsGrid2 = [
   { icon: postgresql, color: '#336791' },
  { icon: typescript, color: '#3178c6' },
  { icon: sql, color: 'black' },
  { icon: aws, color: '#f79400' },
  { icon: bootstrap, color: '#7952B3' },
  { icon: gcp, color: '#dfe2dc' },
  { icon: git, color: '#F05032' },
  { icon: sass, color: '#CC6699' },
]

// Object mapping grid item keys to their positions
const gridReferences: { [key: string]: number[] } = {
  "1": [1, 1],
  "2": [1, 2],
  "3": [1, 3],
  "4": [2, 1],
  "5": [2, 2],
  "6": [2, 3],
  "7": [3, 1],
  "8": [3, 2],
  "9": [3, 3],
};

// Array to hold grid positions
const positions: Position[] = [];

// Initialize positions array with grid coordinates
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    const index = (row - 1) * 3 + col - 1;
    if (index < 8){
      positions.push({ row, col, index });
    }
  }
}

// Function to find adjacent cells for a given position
const findAdjacentCells = (row: number, col: number) => {
  // Determine adjacent cells to the empty cell
  const adjacent: { row: number; col: number }[] = [];
  if (row > 1) adjacent.push({ row: row - 1, col });
  if (row < 3) adjacent.push({ row: row + 1, col });
  if (col > 1) adjacent.push({ row, col: col - 1 });
  if (col < 3) adjacent.push({ row, col: col + 1 });
  return adjacent;
};

const calculateOffsets = (emptyCellPos: CellPosition, selectedCell: CellPosition, cellElement: HTMLElement) => {
  // Get the computed style of the cell element to determine its dimensions
  const computedStyle = window.getComputedStyle(cellElement);
  const cell_height = parseFloat(computedStyle.getPropertyValue('height'));
  const cell_width = parseFloat(computedStyle.getPropertyValue('width'));

  // Calculate the position differences between the cells
  const rowDiff = emptyCellPos.row - selectedCell.row;
  const colDiff = emptyCellPos.col - selectedCell.col;
  const rowOffset = rowDiff * cell_height;
  const colOffset = colDiff * cell_width;

  return { rowOffset, colOffset };
};

// Component function
export default function GridComponent() {
  const { ref, inView } = useInView();
  const {t} = useTranslation();

  // State for grid-1
  const [emptyCellPos1, setEmptyCellPos1] = useState<CellPosition>({ row: 3, col: 3 });
  const [lastMovedCell1, setLastMovedCell1] = useState<CellPosition>({ row: 3, col: 3 });

  // State for grid-2
  const [emptyCellPos2, setEmptyCellPos2] = useState<CellPosition>({ row: 3, col: 3 });
  const [lastMovedCell2, setLastMovedCell2] = useState<CellPosition>({ row: 3, col: 3 });

  // Function to move a cell randomly
  const moveCell = useCallback((gridContainer: number) => {
     // Determine which grid-container to use based on argument
     const containerClassName = gridContainer === 1 ? ".grid-1" : ".grid-2";
     const emptyCellPos = gridContainer === 1 ? emptyCellPos1 : emptyCellPos2;
    const setEmptyCellPos = gridContainer === 1 ? setEmptyCellPos1 : setEmptyCellPos2;
    const lastMovedCell = gridContainer === 1 ? lastMovedCell1 : lastMovedCell2;
    const setLastMovedCell = gridContainer === 1 ? setLastMovedCell1 : setLastMovedCell2;


    // Find adjacent cells to the empty cell and filter out the last moved cell
    const adjacentCells = findAdjacentCells(emptyCellPos.row, emptyCellPos.col)
      .filter(cell => !(
        cell.row === lastMovedCell.row && cell.col === lastMovedCell.col
      ));

    // Select a random adjacent cell
    const randomIndex = Math.floor(Math.random() * adjacentCells.length);
    const selectedCell = adjacentCells[randomIndex];

    // Find the keys corresponding to the cells to move
    const keyToMove = Object.keys(gridReferences).find(
      key =>
        gridReferences[key][0] === selectedCell.row &&
        gridReferences[key][1] === selectedCell.col
    );
    const newKey = Object.keys(gridReferences).find(
      key =>
        gridReferences[key][0] === emptyCellPos.row &&
        gridReferences[key][1] === emptyCellPos.col
    );

    // Find the HTML element corresponding to the cell
    const cellElement = document.querySelector(`${containerClassName} .grid-item-${keyToMove}`) as HTMLElement | null;
    if (!cellElement) return;

    // Check if cellElement is an instance of HTMLElement
    if (cellElement instanceof HTMLElement) {
      // Calculate the position differences between the cells
      const { rowOffset, colOffset } = calculateOffsets(emptyCellPos, selectedCell, cellElement);

      // Apply animation to move the cell
      cellElement.animate(
        [
          { transform: 'translate3d(0, 0, 0)' }, // Start of animation: no movement
          { transform: `translate3d(${colOffset}px, ${rowOffset}px, 0)` } // End of animation: move to target position
        ],
        {
          duration: 300,
          easing: 'linear' // Linear animation
        }
      ).onfinish = () => {
        // Update the position of the cell in the CSS grid
        cellElement.style.gridRowStart = emptyCellPos.row.toString();
        cellElement.style.gridColumnStart = emptyCellPos.col.toString();
        cellElement.classList.remove(`grid-item-${keyToMove}`);
        cellElement.classList.add(`grid-item-${newKey}`);

        // Update lastMovedCell
        setLastMovedCell({ row: emptyCellPos.row, col: emptyCellPos.col });

        // Update the position of the empty cell
        setEmptyCellPos(selectedCell);
      };
    } else {
      // Handle the case where cellElement is not an instance of HTMLElement
      throw new Error('cellElement must be an HTMLElement');
    }

  }, [emptyCellPos1, emptyCellPos2, lastMovedCell1, lastMovedCell2]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleGridContainerInView = () => {
      intervalId = setInterval(() => {
        moveCell(1); // Start the interval for the first grid-container
        moveCell(2); // Start the interval for the second grid-container
      }, 1000);
    };

    const handleGridContainerNotInView = () => {
      clearInterval(intervalId); // Stop the interval
    };

    // Check if the grid container is in view
    if (inView && document.visibilityState === 'visible') {
      handleGridContainerInView();
    } else {
      handleGridContainerNotInView();
    }

    // Handle visibility change event
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleGridContainerInView();
      } else {
        handleGridContainerNotInView();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
      document.removeEventListener('visibilitychange', handleVisibilityChange); // Remove event listener
    };
  }, [inView, moveCell]);

  // Render the grid items
  return (
    <section className="grids" data-aos="fade" data-aos-delay="400" data-aos-duration="4000">
    <div ref={ref} className="grid-container grid-1" >
      {positions.map((pos, index) => (
        <div key={index} className={`grid-item grid-item-${index+1}`} style={{ gridRowStart: pos.row, gridColumnStart: pos.col, backgroundColor: iconColorsGrid1[index].color }}>
          <img src={iconColorsGrid1[index].icon} alt={`icon-${index+1}`} className="icon"/>
        </div>
      ))}
    </div>
    <div className="grid-empty">
      <h3>{t("grid")}</h3>
    </div>
    <div ref={ref} className="grid-container grid-2" >
      {positions.map((pos, index) => (
        <div key={index} className={`grid-item grid-item-${index+1}`} style={{ gridRowStart: pos.row, gridColumnStart: pos.col, backgroundColor: iconColorsGrid2[index].color }}>
          <img src={iconColorsGrid2[index].icon} alt={`icon-${index+1}`} className="icon"/>
        </div>
      ))}
    </div>
  </section>
  );
}
