import React from 'react'

const Navbar= ()=> {

    return(
        <nav class="navbar navbar-light bg-light">
    <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Foodies Inn</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#">Recipees</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Favorites</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">Developers</a>
  </li>
</ul>
</nav>
    )
};

export default Navbar;