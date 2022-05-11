<template>
  <nav class="navbar navbar-expand-md navbar-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../../assets/neatflix.svg"
          alt="The Movie DB"
          width="120"
          height="40"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item drop-down">
            <router-link class="nav-link" to="/movies">Movies</router-link>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">Inbox</a>
              <a href="#" class="dropdown-item">Drafts</a>
              <a href="#" class="dropdown-item">Sent Items</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Trash</a>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Tv Shows</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <form class="d-flex form-inline my-2 my-lg-0 ml-auto">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
.brand-name {
  font-size: 1rem;
  position: absolute;
  color: rgb(247, 245, 245);
  top: 25px;
  left: 88px;
}
.nav-link {
  cursor: pointer;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
nav {
  background-color: rgb(83, 13, 139);
  padding: 0;
  margin: 0;
}
nav ul {
  padding-left: 10%;
}
ul form {
  justify-content: flex-end;
}

</style>
