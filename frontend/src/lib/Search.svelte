<script lang="ts">
  import Surface from "./Surface.svelte";
  export let query;
</script>

<div class="flex-auto max-w-3xl">
  <Surface
    ><div class="inline-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-2 inline-flex"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="inline-flex">
      <input type="search" class="w-5/6 ml-10 inline-flex" />
    </div>
    <div class="inline-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline-flex"
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
  </Surface>
</div>

<div class="search-container flex">
  <div class="search-child">
    <Surface
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
      <form
        class="w-96"
        on:submit|preventDefault={() =>
          PromiseLoadingWrapper(
            handleSubmit(),
            (status) => (result_loading = status)
          )}
      >
        <input
          type="search"
          class="search search-input w-96 border-none"
          placeholder="Search for an exact phrase you expect to appear in the case, e.g. huntley hearing"
          bind:value={query}
          in:fade
          out:fade
        />
      </form>
    </Surface>
  </div>
  <div class="search-child">
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
</div>
