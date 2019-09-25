<template>
  <div class="transaction">
    <table>
      <tr>
        <td>{{ date }}</td>
        <td>{{ purpose }}</td>
        <td :class="type">
          {{ amountCurrency }} {{ amountValue }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Transaction",
  props: ["date", "destination", "amountCurrency", "amountValue", "purpose", "type"]
}
</script>


