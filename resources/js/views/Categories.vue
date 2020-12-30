<template>
  <main>
    <div class="container-fluid">
      <h1 class="mt-4">Dashboard</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
      <div class="card mb-4">
        <div class="card-header d-flex justify-content-between">
          <span>
              <i class="fas fa-chart-bar mr-1"></i>
                Category List
          </span>
          <span>
              <button class="btn btn-success">
                  <i class="fas fa-plus mr-1"></i>
              </button>
          </span>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table text-center">
                    <thead>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <td>01</td>
                        <td>Mango</td>
                        <td>Image</td>
                        <td>
                            <a href="" class="btn btn-primary"><i class="fas fa-edit"></i></a>
                            <a href="" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>