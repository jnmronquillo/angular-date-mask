const minYear = [1, 7, 5, 3]; // Sql Server
export function yearValidator(string: string, position: number): boolean {
  if (position === 0) {
    if (+string < minYear[0] || +string > 9) {
      return false;
    }
  }

  if (position === 1) {
    if (+string[position - 1] === minYear[0]) {
      if (+string[position] < minYear[1]) {
        return false;
      }
    }
  }

  if (position === 2) {
    if (+string[position - 2] === minYear[0] && +string[position - 1] === minYear[1]) {
      if (+string[position] < minYear[2]) {
        return false;
      }
    }
  }

  if (position === 3) {
    if (+string[position - 3] === minYear[0] && +string[position - 2] === minYear[1] && +string[position - 1] === minYear[2]) {
      if (+string[position] < minYear[3]) {
        return false;
      }
    }
  }

  return true;
};
