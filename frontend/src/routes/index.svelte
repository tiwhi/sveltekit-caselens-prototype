<script lang="ts">
  import Card from "$lib/Card.svelte";
  import Surface from "$lib/Surface.svelte";
  import Search from "$lib/Search.svelte";
</script>

<h1 class="text-4xl text-center font-thin ">Caselens.ai</h1>
<div>------ Tabs will go here? ------</div>
<div>------ Sidebar will go here? ------</div>
<div>------ Search Component will go here? ------</div>
<div class="serach-container">
  <div class="search-bar">
    <Search />
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clip-rule="evenodd"
    />
  </svg>
</div>
