import React, { useEffect, useState, useContext } from "react";

const HomeHelp = () => {
  const [clientList, setClientList] = useState("");
  const [description, setDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [pages, setPages] = useState([]);
  const API = "http://localhost:8000";

  const handleClick = (e, id) => {
    setCurrentPage(e.target.id);
  };

  const indexOfLastOnPage = currentPage * perPage;
  const indexOfFirstOnPage = indexOfLastOnPage - perPage;
  const currentOnPage = clientList.slice(indexOfFirstOnPage, indexOfLastOnPage);

  const renderList = currentOnPage
    ? currentOnPage.map((element, index) => {
        return (
          <li key={index}>
            {element.name} {element.items}
          </li>
        );
      })
    : "trwa ładowanie";
  const pagesLength = (list) => {
    let page = [];
    for (let i = 1; i <= Math.ceil(list.length / perPage); i++) {
      page.push(i);
      setPages(page);
    }
  };
  useEffect(() => {
    fetch(`${API}/fundacje`)
      .then((response) => response.json())
      .then((data) => {
        setClientList(data);
      })
      .catch((error) => {
        console.log(error);
      });
    pagesLength(clientList);
  }, []);
  return (
    <section className="helpWho">
      <h1 className="helpWho__heading">Komu pomagamy?</h1>
      <div className="helpWho__decor"></div>
      <ul className="helpWho__navigation">
        {/* <li className={active_foundations}>Fundacjom</li>
        <li className={active_organizations}>Organizacjom pozrządowym</li>
        <li className={active_collections}>Lokalnym zbiórkom</li> */}
      </ul>
      <div className="helpWho__content">
        <div className="helpWho__content__description">{description}</div>
        <ul>{renderList}</ul>
        <ul>{pages}</ul>
      </div>
    </section>
  );
};

export default HomeHelp;
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>{" "}
// do eiusmod tempor incididunt ut labore et dolore magna <br></br>{" "}
// aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

// class TodoApp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ['a','b','c','d','e','f','g','h','i','j','k'],
//       currentPage: 1,
//       todosPerPage: 3
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

// handleClick(event) {
//   this.setState({
//     currentPage: Number(event.target.id)
//   });
// }

//   render() {
//     const { todos, currentPage, todosPerPage } = this.state;

//     // Logic for displaying current todos
//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//     const renderTodos = currentTodos.map((todo, index) => {
//       return <li key={index}>{todo}</li>;
//     });

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map(number => {
//       return (
//         <li
//           key={number}
//           id={number}
//           onClick={this.handleClick}
//         >
//           {number}
//         </li>
//       );
//     });

//     return (
//       <div>
//         <ul>
//           {renderTodos}
//         </ul>
//         <ul id="page-numbers">
//           {renderPageNumbers}
//         </ul>
//       </div>
//     );
//   }
// }
