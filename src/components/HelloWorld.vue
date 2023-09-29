<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ $route.params.id }}</h2>
    <v-container>
      <v-row justify="space-between" >
        <v-col cols="6">
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" @input="form.firstName = $event.target.value" :value="form.firstName" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" v-model="form.lastName" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div class="col-12">
                <label for="username" class="form-label">Username</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input v-focus type="text" class="form-control" id="username" placeholder="Username" v-model="form.userName" required>
                  <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" v-model="form.email">
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="col-12">
                <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" v-model="form.address">
              </div>

              <CustomInput
                  v-model="form.customValue"
              />

              <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
                <select class="form-select" id="country" v-model="form.country" required>
                  <option value="">Choose...</option>
                  <option value="1">Ukraine</option>
                  <option value="2">United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">State</label>
                <select class="form-select" id="state" required @select="form.country = $event.target.value" :value="form.country">
                  <option value="">Choose...</option>
                  <option value="1">California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>

            <hr class="my-4">

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address" value="same_address" v-model="form.deliveryOptions">
              <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info" value="save_data" v-model="form.deliveryOptions">
              <label class="form-check-label" for="save-info">Save this information for next time</label>
            </div>

            <hr class="my-4">

            <h4 class="mb-3">Payment</h4>

            <div class="my-3">
              <div class="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" value="credit" v-model="form.paymentOptions" checked required>
                <label class="form-check-label" for="credit">Credit card</label>
              </div>
              <div class="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" value="debit" v-model="form.paymentOptions" required>
                <label class="form-check-label" for="debit">Debit card</label>
              </div>
              <div class="form-check">
                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" value="pay_pal" v-model="form.paymentOptions" required>
                <label class="form-check-label" for="paypal">PayPal</label>
              </div>
            </div>

            <div class="row gy-3">
              <div class="col-md-6">
                <label for="cc-name" class="form-label">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                <small class="text-body-secondary">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>

              <div class="col-md-6">
                <label for="cc-number" class="form-label">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div class="col-md-3">
                <label for="cc-expiration" class="form-label">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>

              <div class="col-md-3">
                <label for="cc-cvv" class="form-label">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>

            <hr class="my-4">

            <button class="w-100 btn btn-primary btn-lg" type="submit">Show data</button>
          </form>
        </v-col>
        <v-col>
          {{ form }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CustomInput
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        address: '',
        customValue: '',
        country: '',
        state: '',
        deliveryOptions: [],
        paymentOptions: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
