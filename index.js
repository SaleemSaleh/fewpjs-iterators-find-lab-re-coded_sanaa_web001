const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(sa) {
  let win = sa.find( s => s.result === "W" )
  return win.year ;
}
