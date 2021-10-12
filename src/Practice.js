import React from 'react';

function Practice() {
  const [person, setPerson] = React.useState({
    firstName: 'John',
    lastName: 'xxxxx',
    age: 30
  });

  const inputChangeHandler = lastName => {
    setPerson({ lastName });
  };

  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Smith'), 3000);
  });

  newPromise.then(res => inputChangeHandler(res));

  return (
    <>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <p>{person.age}</p>
    </>
  );
}

export default Practice;

// import React from 'react';

// class Practice extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   componentDidMount() {
//     document.getElementById('input').innerText = 5;
//   }
//   onChangeHandler = () => {
//     this.setState({ count: this.state.count + 2 });
//   };
//   render() {
//     return (
//       <div>
//         <div id='input'>{this.state.count}</div>
//         <button onClick={this.onChangeHandler}>Add</button>
//       </div>
//     );
//   }
// }
// export default Practice;
