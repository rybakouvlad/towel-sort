
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!Array.isArray(matrix)   || !isNaN(matrix)) return [];
    for(let i = 0; i < matrix.length ; i++){
        if((i + 1) % 2 === 0){
            console.log("LLlsdfsdfsdflsdflsdfl");
            
            matrix[i] = matrix[i].reverse();
        }
    }

  return matrix.join(',').replace(/,/g, ' ').split(' ');
}
