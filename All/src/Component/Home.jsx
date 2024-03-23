import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/Dashboard'}>Crud</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/Counter'}>Redux</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/Reg'}>Formik&Yup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/FormValidation'}>Validation</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Link</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        {/* <Link to={'/Dashboard'}>Crud</Link> ||
        <Link to={'/Counter'}>Redux</Link> ||
        <Link to={'/Reg'}>Formik</Link> ||
        <Link to={'/FormValidation'}>validation</Link> */}
     
    </div>
  )
}

export default Home
