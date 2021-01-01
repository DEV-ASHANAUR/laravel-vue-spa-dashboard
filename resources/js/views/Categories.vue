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
              <i class="fas fa-list mr-1"></i>
                Category List
          </span>
          <span>
              <button class="btn btn-success" @click="showNewCategoryModal">
                  <i class="fas fa-plus mr-1"></i>
                  Create New
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
                            <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
      </div>

      <b-modal ref="category-modal" hide-footer title="Add New Category">
        <div class="d-block">
          <form @submit.prevent="createCategory">
            <div class="from-group mb-3">
              <label for="name">Enter Name</label>
              <input type="text" class="form-control" v-model="categoryData.name" id="name" placeholder="Enter category name">
              <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
            </div>

            <div class="from-group mb-3">
              <label for="image">Choose an Image</label>
              <div v-if="categoryData.image.name" class="p-2">
                <img src="" ref="newCategoryImageDisplay" class="cat_image" />
              </div>
              <input type="file" class="form-control-file d-block overflow-hidden" @change="attachImage" ref="newCategoryImage" id="image">
              <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
            </div>

            <hr>
            <div class="text-right">
              <button type="button" class="btn btn-default" @click="hideNewCategoryModal">Cancle</button>
              <button type="submit" class="btn btn-primary"><i class="fas fa-check mr-1"></i>Save</button>
            </div>
          </form>
        </div>
      </b-modal>

    </div>
  </main>
</template>

<script>
import * as categoryService from '../services/category_service';
export default {
  name: 'category',
  data() {
    return {
      categoryData: {
        name: '',
        image: ''
      },
      errors: {},
    };
  },
  methods: {
    attachImage() {
        this.categoryData.image = this.$refs.newCategoryImage.files[0];
        let reader  = new FileReader();
        reader.addEventListener('load',function(){
            this.$refs.newCategoryImageDisplay.src = reader.result;
        }.bind(this), false);
        reader.readAsDataURL(this.categoryData.image);
    },
    hideNewCategoryModal(){
      this.$refs['category-modal'].hide();
      this.categoryData.name = '';
      this.categoryData.image = '';
    },
    showNewCategoryModal(){
      this.$refs['category-modal'].show()
    },
    createCategory: async function(){
      let formData = new FormData();
      formData.append('name', this.categoryData.name);
      formData.append('image', this.categoryData.image);

      try {
        const response = await categoryService.createCategory(formData);
        this.categoryData.name = '',
        this.categoryData.image = '',
        this.hideNewCategoryModal();
        this.flashMessage.success({
            message: 'Category create successfully!'
        });
      } catch (error) {
        // console.log(error.response.data.errors);
        switch (error.response.status) {
          case 422:
              this.errors = error.response.data.errors;
            break;
          default:
             this.flashMessage.error({
                message: 'Oh, Some Error occured , please try again !'
            });
            break;
        }
      }

    },
  }
};
</script>

<style>
</style>