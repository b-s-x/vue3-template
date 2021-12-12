import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Payment',

  setup() {
    const payments = [
      { id: 'credit', name: 'Credit card' },
      { id: 'debit', name: 'Debit card' },
      { id: 'paypal', name: 'Paypal' },
    ];

    return { payments };
  },

  render() {
    return (
      <div class="d-block my-3">
        RenderComponent:
        {this.payments.map(payment => (
          <div class="custom-control custom-radio">
            <input id={payment.id} name="paymentMethod" type="radio" class="custom-control-input" />
            <label class="custom-control-label" htmlFor={payment.id}>{payment.name}</label>
          </div>
        ))}
      </div>
    );
  }
});