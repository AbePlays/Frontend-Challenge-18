<script>
  import Button from "../../components/Button";
  import Logo from "../../assets/logo.svg";
  import Menu from "../../assets/menu.svg";
  import { NavbarItems } from "./helper";
</script>

<nav class="my-8 px-4">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <img src={Logo} class="cursor-pointer" alt="logo" />
      <ul class="hidden md:block md:ml-8 space-x-4 text-grayish-violet">
        {#each NavbarItems as item}
          <li class="inline-block">
            <a href="/">
              {item}
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <img src={Menu} class="w-10 cursor-pointer md:hidden" alt="menu" />
      <div class="hidden md:block space-x-4">
        <Button content="Login" />
        <Button content="Sign Up" variant="filled" shape="pill" />
      </div>
    </div>
  </div>
</nav>
