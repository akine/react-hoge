import React from 'react'

// export default class Pugera extends React.Component {
//   render() {
//     return (<h1>Pugerap</h1>)
//   }
// }

// default exportはアロー関数だと
// export default FuncName ができないから、
// const Pugera で先に宣言して
// export default Pugeraする
const Pugera = () => {
  return (<h1>I'm real Pugera.</h1>)
}
export default Pugera;