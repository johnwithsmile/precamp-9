const emial = "codecamp@gamil.com"
// undefined
const emial = "codecamp@gamil.com"
// undefined
const email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// VM1126:1 Uncaught SyntaxError: missing ) after argument list
email.split("@")
// (2) ['codecamp', 'gmail.com']
eamil.splirt("@")[0]
// VM1181:1 Uncaught ReferenceError: eamil is not defined
//     at <anonymous>:1:1
// (익명) @ VM1181:1
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
const front = email.split("@")[0]
// undefined
const back = email.split("@")[1]
// undefined
front
// 'codecamp'
back
// 'gmail.com'
const newFront = []
// undefined
newFront
// []
front [0]
// 'c'
front [1]
// 'o'
newFront .push(front[0])
// 1
newFront .push(front[1])
// 2
newFront
// (2) ['c', 'o']
print newFront
// VM1837:1 Uncaught SyntaxError: Unexpected identifier
newFront .push(front[2])
// 3
newFront .push(front[3])
// 4
newFront
// (4) ['c', 'o', 'd', 'e']
newFront.push ("*")
// 5
newFront.push ("*")
// 6
newFront.push ("*")
// 7
newFront.push ("*")
// 8
newFront
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
newFront.join
// ƒ join() { [native code] }
newFront
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
newFront.join("@")
// // 'c@o@d@e@*@*@*@*'
newFront.join("#")
// 'c#o#d#e#*#*#*#*'
newFront.join("")
// 'code****'
newFront
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
newFront.join("") + "@" + back
// 'code****@gmail.com'
const result = newFront.join("") + "@" + back
// undefined
result
// 'code****@gmail.com'