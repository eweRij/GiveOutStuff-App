import React, { useEffect, useState, useContext } from "react";

const HomeHelp = () => {
  const [clientList, setClientList] = useState("");
  const [description, setDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [pages, setPages] = useState([]);

  const API = "http://localhost:8000";

  const handleClick = (e) => {
    setCurrentPage(e.target.id);
    console.log(e.target.id);
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
    : "";
  let page = [];
  const pagesLength = (list) => {
    for (let i = 1; i <= Math.ceil(list.length / perPage); i++) {
      page.push(i);
    }
    setPages(page);
  };

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {number}
      </li>
    );
  });

  const handleFoundations = () => {
    setPages([]);
    fetch(`${API}/fundacje`)
      .then((response) => response.json())
      .then((data) => {
        setClientList(data);
        pagesLength(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setDescription("Opis dla Fundacji");
  };

  const handleOrganizations = () => {
    setPages([]);
    fetch(`${API}/organizacje`)
      .then((response) => response.json())
      .then((data) => {
        setClientList(data);
        pagesLength(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setDescription("Opis dla Organizacji");
    console.log(pages);
  };

  const handleCollections = () => {
    setPages([]);
    fetch(`${API}/zbiorki`)
      .then((response) => response.json())
      .then((data) => {
        setClientList(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setDescription("Opis dla Zbiórek");
  };

  useEffect(() => {
    fetch(`${API}/organizacje`)
      .then((response) => response.json())
      .then((data) => {
        setClientList(data);
        pagesLength(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setDescription("Opis dla Organizacji");
  }, []);
  return (
    <section className="helpWho">
      <h1 className="helpWho__heading">Komu pomagamy?</h1>
      <div className="helpWho__decor"></div>
      <ul className="helpWho__navigation">
        <li onClick={handleFoundations} className="active_foundations">
          Fundacjom
        </li>
        <li onClick={handleOrganizations} className="active_organizations">
          Organizacjom pozrządowym
        </li>
        <li onClick={handleCollections} className="active_collections">
          Lokalnym zbiórkom
        </li>
      </ul>
      <div className="helpWho__content">
        <div className="helpWho__content__description">{description}</div>
        <ul>{clientList && renderList}</ul>
        <ul>{pages.length > 0 && clientList ? renderPageNumbers : ""}</ul>
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
