<template>
  <div id="layoutAuthentication_content">
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header">
                <h3 class="text-center font-weight-light my-4">Login</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="login">
                  <div class="form-group">
                    <label class="small mb-1" for="inputEmailAddress"
                      >Email</label
                    >
                    <input
                      class="form-control py-4"
                      id="inputEmailAddress"
                      v-model="user.email"
                      type="email"
                      placeholder="Enter email address"
                    />
                    <div class="invalid-feedback" v-if="errors.email">
                      {{ errors.email[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="small mb-1" for="inputPassword"
                      >Password</label
                    >
                    <input
                      class="form-control py-4"
                      id="inputPassword"
                      v-model="user.password"
                      type="password"
                      placeholder="Enter password"
                    />
                    <div class="invalid-feedback" v-if="errors.password">
                      {{ errors.password[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        value="remember-me"
                        v-model="user.remember_me"
                        id="rememberPasswordCheck"
                        type="checkbox"
                      />
                      <label
                        class="custom-control-label"
                        for="rememberPasswordCheck"
                        >Remember password</label
                      >
                    </div>
                  </div>
                  <div
                    class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"
                  >
                    <!-- <a class="small" href="password.html">Forgot Password?</a> -->
                    <router-link class="small" to="/reset-password"
                      >Forgot Password?</router-link
                    >
                    <!-- <a class="btn btn-primary" href="index.html">Login</a> -->
                    <button class="btn btn-primary" type="submit">Login</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center">
                <div class="small">
                  <!-- <a href="register.html">Need an account? Sign up!</a> -->
                  <router-link to="/register"
                    >Need an account? Sign up!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import * as auth from "../../services/auth_service";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember_me: false,
      },
      errors: {},
    };
  },
  methods: {
    login: async function () {
      try {
        const response = await auth.login(this.user);
        this.user = {
          email: "",
          password: "",
          remember_me: false,
        };
        this.errors = {};
        this.$router.push("/home");
        // console.log(response);
      } catch (error) {
        // console.log(error.response.status);
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 401:
            this.flashMessage.error({
              message: error.response.data.message,
            });
            this.user = {
              email: "",
              password: "",
              remember_me: false,
            };
            break;
          default:
            this.flashMessage.error({
              message: "Oh, Some Error occured , please try again !",
            });
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
#layoutAuthentication_content {
  background-color: #007bff;
  height: 100vh;
}
</style>