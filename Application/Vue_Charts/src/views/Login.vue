<template>
  <div class="login">
        <div>
          <label for="usernamer">Nom d'utilisateur :</label>
          <input id='username' ref='username' type="text" name="username" v-model="form.username" />
        </div>
        <div>
          <label  for="password">Mot de passe :</label>
          <input style="margin-left:25px" id='password' ref='password' type="password" name="password" v-model="form.password" />
          <p style="margin-left:35px" v-if="showError" id="error">Username or Password is incorrect</p>
        </div>
        <button class="btn"  @click="login"  type="submit">Submit</button>
      
  </div>
</template>


<script>
  export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
        methods: {
            login() {
              console.log(this.$refs.username.value);
              if(this.$refs.username.value == 'chef departement' && this.$refs.password.value == 'chefD' || this.$refs.username.value == 'responsable scolarité' && this.$refs.password.value == 'respS' || this.$refs.username.value == 'adjoint chef' && this.$refs.password.value == 'adjointChef' || this.$refs.username.value == 'administrateur' && this.$refs.password.value == 'admin'){
                  window.open("http://localhost:8080/user");
              }
              else{
                this.showError = true
              }
                 
    }
    
    }
    }
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #385683;
  color: white;
  
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #385683;
}
input {
  margin: 5px;

  padding:10px;
  border-radius:10px;
}
#error {
  color: red;
}

.login{

    display: block;
    position: center;
    margin-top: 120px;
    margin-left: 500px;
}

.btn{
    margin-top: 20px;
    margin-left: 10px;
    width: 100px;
    height: 30px;
    background: #3d7dc1;
    border: 0ch;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    width: 300px;
    height: 30px;
}

.txt{
  color: red;
}
</style>
