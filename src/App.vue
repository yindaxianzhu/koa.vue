<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h2>{{user.name}}</h2>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {}
    };
  },
  mounted: function() {
    // post way
    // fetch("/users/add", {
    //   method: "POST", // or 'PUT'
    //   body: JSON.stringify({
    //     name:"yeyeye",
    //     pwd:"123"
    //   }), // data can be `string` or {object}!
    //   headers: new Headers({
    //     "Content-Type": "application/json"
    //   })
    // })
    //   .then(res => res.json())
    //   .catch(error => console.error("Error:", error))
    //   .then(response => console.log("Success:", response));
    //get way
    fetch("/getuser/modify")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.user = data;
      });
      console.log("start");
      console.log(this.user);
  }
};
</script>

<style>


</style>
