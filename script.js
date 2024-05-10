function chunkString(str, size) {
  // Initialize an empty array to store the chunks
  const chunks = [];
  
  // Loop through the string, incrementing by the specified chunk size
  for (let i = 0; i < str.length; i += size) {
    // Slice the string from the current index to the index + size
    // and push the sliced chunk into the chunks array
    chunks.push(str.slice(i, i + size));
  }
  
  // Return the array of chunks
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
