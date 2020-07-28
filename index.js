const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(sa) {
  let win = sa.find( s => s.result === "W" )
  if (win == -1 ) {
    return win ;
  }
  return win.year ;
}
