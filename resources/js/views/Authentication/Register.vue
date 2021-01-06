<template>
  <div id="layoutAuthentication_content">
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header">
                <h3 class="text-center font-weight-light my-4">
                  Create Account
                </h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="register">
                  <div class="form-row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="small mb-1" for="Name">Enter Name</label>
                        <input
                          class="form-control py-4"
                          id="Name"
                          v-model="user.name"
                          type="text"
                          placeholder="Enter name"
                        />
                        <div class="invalid-feedback" v-if="errors.name">
                          {{ errors.name[0] }}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="small mb-1" for="inputEmailAddress"
                          >Email</label
                        >
                        <input
                          class="form-control py-4"
                          id="inputEmailAddress"
                          v-model="user.email"
                          type="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                        />
                        <div class="invalid-feedback" v-if="errors.email">
                          {{ errors.email[0] }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
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
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="small mb-1" for="inputConfirmPassword"
                          >Confirm Password</label
                        >
                        <input
                          class="form-control py-4"
                          id="inputConfirmPassword"
                          v-model="user.password_confirmation"
                          type="password"
                          placeholder="Confirm password"
                        />
                        <div class="invalid-feedback" v-if="errors.password_confirmation">
                          {{ errors.password_confirmation[0] }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-4 mb-0">
                    <!-- <a class="btn btn-primary btn-block" href="login.html"
                      >Create Account</a
                    > -->
                    <button type="submit" class="btn btn-primary btn-block"> Register Account </button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center">
                <div class="small">
                  <!-- <a href="login.html">Have an account? Go to login</a> -->
                  <router-link to="/login"
                    >Have an account? Go to login</router-link
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
import * as auth from '../../services/auth_service';
export default {
  name: "Register",
  data(){
    return{
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {},
    }
  },
  methods: {
    register: async function () {
      try {
        const response = await auth.register(this.user);
        if(response.data.status_code == 201){
            this.errors = {};
            this.$router.push('/login');
        }
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
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