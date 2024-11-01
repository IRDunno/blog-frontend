for (i = 1; i < 30; i++) {
  const divider = 2.3;
  const roundOff = Math.round(i / divider);
  // console.log (`===\n${i}\n${i / divider}\n${roundOff}\n===`)
  
  let text = ""
  let roundPlacement = ""
  for (j = 1; j <= i; j++) {
    roundPlacement += i-j == roundOff ? roundOff : " "
    text += j
  }
  console.log(roundPlacement)
  console.log(text + "\n===")
}