<template>
    <header class="header">
      <div class="brand">
        Acosta's Grocer
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #333;
    color: #fff;
  }
  
  .brand {
    font-weight: bold;
    font-size: 24px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }
  
  nav li {
    display: inline-block;
  }
  
  router-link {
    color: #fff;
    text-decoration: none;
  }
  
  router-link.active, router-link:hover {
    text-decoration: underline;
  }
  </style>
  