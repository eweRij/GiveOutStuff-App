import React, { useEffect, useState } from "react";

const HomeHelpWho = () => {
  const [clientList, setClientList] = useState("");
  const [description, setDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [pages, setPages] = useState([]);

  const [activeF, setActiveF] = useState(false);
  const [activeO, setActiveO] = useState(false);
  const [activeZ, setActiveZ] = useState(false);

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
            <h1>{element.name}</h1> <h2>{element.items}</h2>
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
    setActiveF((prev) => !prev);
    setActiveO(false);
    setActiveZ(false);
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
    setActiveO((prev) => !prev);
    setActiveZ(false);
    setActiveF(false);
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
    setActiveZ((prev) => !prev);
    setActiveO(false);
    setActiveF(false);
    console.log(clientList);
    setPages([]);
    setCurrentPage(1);
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
    setActiveO(true);
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
        <li
          onClick={handleFoundations}
          className={`helpWho__navigation__active_foundations ${
            activeF ? "active" : ""
          } `}
        >
          Fundacjom
        </li>
        <li
          onClick={handleOrganizations}
          className={`helpWho__navigation__active_organizations ${
            activeO ? "active" : ""
          } `}
        >
          Organizacjom pozrządowym
        </li>
        <li
          onClick={handleCollections}
          className={`helpWho__navigation__active_collections ${
            activeZ ? "active" : ""
          } `}
        >
          Lokalnym zbiórkom
        </li>
      </ul>
      <div className="helpWho__content">
        <div className="helpWho__content__description">{description}</div>
        <ul className="helpWho__content__list">{clientList && renderList}</ul>
        <ul className="helpWho__content__pagination">
          {pages.length > 0 && clientList ? renderPageNumbers : ""}
        </ul>
      </div>
    </section>
  );
};

export default HomeHelpWho;
