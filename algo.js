// 2895. Minimum Processing Time



// You have a certain number of processors, each having 4 cores. The number of tasks to be executed is four times the number of processors. Each task must be assigned to a unique core, and each core can only be used once.

// You are given an array processorTime representing the time each processor becomes available and an array tasks representing how long each task takes to complete. Return the minimum time needed to complete all tasks.







/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
    
    tasks.sort((a,b) => b-a);
    processorTime.sort((a,b) => a-b);
 
    let maxSum = 0;
     let j = 0
   
    for(let i = 0; i < processorTime.length;i++){
 
        let tempSum = processorTime[i]+ tasks[j]
        maxSum = Math.max(maxSum,tempSum)
        j = j+4      
    }
    
    return maxSum
    
};