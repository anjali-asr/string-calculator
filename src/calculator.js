function addString(numbers) {
    if (!numbers) return 0;
    const nums = numbers.split(/[\n,]/);
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
  
  
export { addString };
  