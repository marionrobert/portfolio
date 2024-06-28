import { useEffect, useState, useCallback } from "react";
import { useInView } from 'react-intersection-observer';
import { aws, bash, bootstrap, cloudinary, css, figma, gcp, git, github, html, javascript, nodeJs, postgresql, python, react, ror, ruby, sass, sql, stripe, typescript, ubuntu, webpack } from '../assets/images/icons';

const iconColors = [
  { icon: html, color: '#f16529' },        // HTML - Orange
  { icon: javascript, color: '#F7DF1E' },  // JavaScript - Yellow
  { icon: nodeJs, color: '#83cd29' },      // Node.js - Green
  { icon: python, color: 'whitesmoke' },      // Python - Blue
  { icon: css, color: '#0295de' },         // CSS - Blue
  { icon: react, color: '#61DAFB' },       // React - Cyan
  { icon: ror, color: 'black' },         // Ruby on Rails - Red
  { icon: ruby, color: '#ba0f01' },        // Ruby - Red
  { icon: postgresql, color: '#336791' },  // PostgreSQL - Blue
  { icon: typescript, color: '#3178c6' },  // TypeScript - Blue
  { icon: sql, color: '#F29111' },         // SQL - Orange
  { icon: aws, color: '#FF9900' },         // AWS - Orange
  { icon: bash, color: '#4EAA25' },        // Bash - Green
  { icon: bootstrap, color: '#7952B3' },   // Bootstrap - Purple
  { icon: cloudinary, color: '#FEC108' },  // Cloudinary - Yellow
  { icon: github, color: '#181717' },      // GitHub - Black
  { icon: figma, color: '#A259FF' },       // Figma - Purple
  { icon: gcp, color: '#4285F4' },         // GCP - Blue
  { icon: git, color: '#F05032' },         // Git - Red
  { icon: sass, color: '#CC6699' },        // Sass - Pink
  { icon: stripe, color: '#635bff' },      // Stripe - violet
  { icon: ubuntu, color: '#E95420' },      // Ubuntu - Orange
  { icon: webpack, color: '#8DD6F9' }      // Webpack - Light Blue
];

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

// Interface for a grid position
interface Position {
  row: number;
  col: number;
  index: number;
}

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

interface CellPosition {
  row: number;
  col: number;
}

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
  const [emptyCellPos, setEmptyCellPos] = useState<{ row: number; col: number }>({ row: 3, col: 3 });
  const [lastMovedCell, setLastMovedCell] = useState<{ row: number; col: number }>({ row: 3, col: 3 });

  // Function to move a cell randomly
  const moveCell = useCallback(() => {
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
    const cellElement = document.querySelector(`.grid-item-${keyToMove}`) as HTMLElement | null;
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
          duration: 500,
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

  }, [emptyCellPos, lastMovedCell]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleGridContainerInView = () => {
      intervalId = setInterval(moveCell, 1000); // Start the interval
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
    <section className="moving-cells">
      <h2>Stack technologique</h2>
      <div ref={ref} className="grid-container">
        {positions.map((pos, index) => (
          <div key={index} className={`cell grid-item-${index+1}`} style={{ gridRowStart: pos.row, gridColumnStart: pos.col, backgroundColor: iconColors[index].color}}>
            <img src={iconColors[index].icon} alt={`icon-${index+1}`} className="icon"/>
          </div>
        ))}
      </div>
      <div ref={ref} className="grid-container">
        {positions.map((pos, index) => (
          <div key={index} className={`cell grid-item-${index+1}`} style={{ gridRowStart: pos.row, gridColumnStart: pos.col, backgroundColor: iconColors[index].color}}>
            <img src={iconColors[index].icon} alt={`icon-${index+1}`} className="icon"/>
          </div>
        ))}
      </div>
    </section>
  );
}
