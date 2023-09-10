<script lang="ts">
  export let handleChangeCat: (val: string) => void;
  export let sectionCurrent: string;

  //array btns
  interface BtnSvelteType {
    name: string;
  }
  const btnSvelte: BtnSvelteType[] = [
    {
      name: "Todos",
    },
    {
      name: "Recomendados",
    },
    {
      name: "Tradicional",
    },
    {
      name: "Zapatos",
    },
  ];
</script>

<div>
  <div class="container__section">
    {#each btnSvelte as item}
      <button
        class={item.name == sectionCurrent ? "section--active" : ""}
        on:click={() => handleChangeCat(item.name)}>{item.name}</button
      >
    {/each}
  </div>
</div>

<style>
  .container__section {
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #dcdcdc;
  }

  button {
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 20px;
  }

  .section--active {
    background-color: #f2f2f2;
    color: #4b2b7a;
    border-bottom: 1px solid #4b2b7a;
    font-weight: 600;
  }
</style>
