<script lang="ts">
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import FilterButton from "./filterButton.svelte";
	import Popup from "./popup.svelte";

	let openPopup: boolean = true;

	function handleClickEvent() {
		console.log("Clicked outside the node");
	}
</script>

<div
	class="container card pt-8 mt-4 max-w-[50%] mx-auto flex flex-col justify-center items-center"
>
	<div class=" mb-8 space-y-5">
		<h1 class="h1">Tradingbro.io Application</h1>

		<div class="flex py-12 gap-4">
			Lightswitch<LightSwitch ring="ring-white" width="w-[48px]" />
		</div>

		<div>
			The figma file can be found
			<a
				class="underline"
				href="https://www.figma.com/file/elhS7rfboC3aVdUoa19lJ5/tradingbro.io-(2)?type=design&node-id=101%3A2934&t=8BraDmbdqSoVPbAr-1"
				>Here</a
			>

			<p class="">
				The tasks can be found at the readme of the repo <a href="" />
			</p>

			<p class="mt-4 mb-8">
				Fork the repo and let me know once you submitted your branch
			</p>
			<hr />
		</div>

		<h2 class="text-2xl">Button</h2>
		<div class="card mb-12 gap-4 flex mr-auto border-2 p-4">
			<FilterButton target="filterPopup">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
					/></svg
				>
				<span>Filters</span>
			</FilterButton>

			<FilterButton target="columnPopup">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
					/></svg
				>

				<span>Columns</span>
			</FilterButton>
		</div>

		<hr />
		<h2 class=" my-4 text-2xl">Popup</h2>

		<Popup bind:open={openPopup} on:click-outside={handleClickEvent} />
	</div>
</div>
