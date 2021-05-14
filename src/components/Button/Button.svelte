<script lang="ts">
  export let content: string = "default";
  export let variant: "plain" | "filled" = "plain";
  export let shape: "pill" | "normal" = "normal";
  export let width: "" | "full" = "";
  export let height: "" | "full" = "";
  export let onPress: () => null;
</script>

<button
  class="
    {variant === 'filled'
    ? 'bg-cyan text-white px-6 py-2'
    : 'text-grayish-violet'} 
    {shape === 'pill' ? 'rounded-full' : 'rounded-md'}
    {width && 'w-full'}
    {height && 'h-full'}
    "
  on:click={onPress}
>
  {content}
</button>
