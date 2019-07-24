<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <base-input type="text"
                    label="Company"
                    :disabled="true"
                    placeholder="Light dashboard"
                    v-model="user.company">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Username"
                    placeholder="Username"
                    v-model="user.username">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="user.email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="user.firstName">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    v-model="user.lastName">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    v-model="user.address">
          </base-input>
        </div>
      </div>

      <div>

      <fieldset>
        <span>Grade:</span>
        <label for="pre_school">Pre-School</label>
        <input type="radio" name="grade" id="pre_school" value="pre_school"/>
        <label for="1st">1st</label>
        <input type="radio" name="grade" id="1st" value="1st"/>
        <label for="2nd">2nd</label>
        <input type="radio" name="grade" id="2nd" value="2nd"/>
        <label for="3rd">3rd</label>
        <input type="radio" name="grade" id="3rd" value="3rd"/>
        <label for="4th">4th</label>
        <input type="radio" name="grade" id="4th" value="4th"/>
        <label for="5th">5th</label>
        <input type="radio" name="grade" id="5th" value="5th"/>
      </fieldset>
     <span>Which elementary echools do you live near?</span>
<select>
  <option value="Katzenmair">AJ Katzenmair</option>
  <option value="Greenbay">Greenbay</option>
  <option value="Hordward">Hordwar A Yeager</option>
  <option value="Maryorie">Maryorie P hart</option>
  <option value="North">North</option>
    <option value="South">South</option>
</select>
      </div>


      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="user.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="user.country">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="user.postalCode">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          company: 'NYSL',
          username: 'michael23',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          postalCode: '',
          aboutMe: ``
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>
fieldset{
  margin: 2em 0;
}

fieldset label{
  padding-left: 2em;
}
</style>
