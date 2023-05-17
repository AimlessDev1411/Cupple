<template>
  <div>
    <div class="row main__container">
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <span class="title__login">Cupple</span>
          </div>
          <div class="col-12">
            <span class="subtitle__login">Cupple te ayudara a comunicarte y compartir con las personas que son parte de tu dia y de tu vida.</span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <q-card class="card__border">
          <q-card-section>
            <q-form ref="personalForm" greedy>
              <div class="row form__login">
                <div class="col-12">
                  <q-input
                  outlined
                  v-model="text"
                  dense
                  />
                </div>

                <div class="col-12">
                  <q-input
                  outlined
                  v-model="text"
                  dense
                  />
                </div>

                <div class="col-12">
                  <q-input
                  outlined
                  v-model="text"
                  dense
                  />
                </div>
              </div>

            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style>

</style>
