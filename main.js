const app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },
  created() {
    for (let index = 0; index < 10; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(this);
          const result = response.data.response;
          this.emails.push(result);
        });
    }
  },
});
