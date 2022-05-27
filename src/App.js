import React, {useEffect} from "react";
import BoardAPI from './api/board';
import UserAPI from './api/user';

const App = () => {

  const testiResti = async () => {
    let res = await BoardAPI.getBoardColumns();
    console.log("get board columns", res);


    res = await UserAPI.getUsers();
    console.log("get users", res);

    await BoardAPI.editTask('dc0aa9a6-a4d3-45e2-86e1-37e793a4df52', {
              name: 'Infrastructure acc',
              assigned: [
                '76fbd508-3cb6-4b1a-a574-9046367fc3ac'
              ],
              importance: 1,
              description: 'Example description changed'
            })

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after edit", res);

    await BoardAPI.deleteTask('dc0aa9a6-a4d3-45e2-86e1-37e793a4df52');

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after delete", res);

    await BoardAPI.createTask('e38bba16-6c80-4ac3-9102-5dbb6aeb7c19', {
      name: 'Example',
      assigned: [],
      importance: 2,
      description: 'Example description'
    })

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after create", res);


  }


  useEffect(() => {
    testiResti()
  }, [])

  return (
    <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
            <span className="fs-4">Simple header</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
        </header>

        <div className="row mb-3">
              <div className="col-4 example-grid-col">.col-4</div>
              <div className="col-4 example-grid-col">.col-4</div>
              <div className="col-4 example-grid-col">.col-4</div>
            </div>

      </div>
  );
}

export default App;
