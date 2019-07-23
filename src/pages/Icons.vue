<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <template slot="header">
              <h4 class="card-title">100 Awesome Nucleo Icons</h4>
              <p class="card-category">Handcrafted by our friends from <a target="_blank" href="https://nucleoapp.com/?ref=1712">NucleoApp</a></p>
            </template>
            <div class="all-icons">
              <div class="row">
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <i class="nc-icon nc-air-baloon"></i>
                    <p>nc-air-baloon</p>
                  </div>
                </div>

                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <i class="nc-icon nc-ambulance"></i>
                    <p>nc-ambulance</p>
                  </div>
                </div>

                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <i class="nc-icon nc-tap-01"></i>
                    <p>nc-tap-01</p>
                  </div>
                </div>

                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <i class="nc-icon nc-zoom-split"></i>
                    <p>nc-zoom-split</p>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  export default {
    components: {
      Card
    }
  }
</script>
<style>

</style>
