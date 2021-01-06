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
                <form>
                  <div class="form-group">
                    <label class="small mb-1" for="inputEmailAddress"
                      >Email</label
                    >
                    <input
                      class="form-control py-4"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div class="form-group">
                    <label class="small mb-1" for="inputPassword"
                      >Password</label
                    >
                    <input
                      class="form-control py-4"
                      id="inputPassword"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
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
                    <router-link class="small" to="/reset-password">Forgot Password?</router-link>
                    <a class="btn btn-primary" href="index.html">Login</a>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center">
                <div class="small">
                  <!-- <a href="register.html">Need an account? Sign up!</a> -->
                  <router-link to="/register">Need an account? Sign up!</router-link>
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
export default {};
</script>

<style scoped>
    #layoutAuthentication_content{
        background-color: #007bff;
        height: 100vh;
    }
</style>