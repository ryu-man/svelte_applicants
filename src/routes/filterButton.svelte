<script lang="ts">
	/**
    Main component for handling the filter and columns buttons across all tables 
   
    Props:
        @prop {"columnPopup | filterPopup"} target - Defines if the button should be a column or filter button
        @prop {string} title - Name to be diplayed on the button

    Unused code: 
            <!-- {$_('exchanges.filters_button')} --> 
    */
	import { popup } from "@skeletonlabs/skeleton";

	import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";

	// Props
	export let target: "columnPopup" | "filterPopup";

	import { SlideToggle } from "@skeletonlabs/skeleton";

	let filterPopup = {
		event: "click",
		target: target,
		placement: "bottom",
	};
</script>

<button class="btn" use:popup={filterPopup}>
	<slot />
</button>

<div class="card w-fit shadow-xl py-2 z-40 bg-white" data-popup="filterPopup">
	<ListBox rounded="rounded-none">
		<label class="flex items-center gap-4 px-4 py-1">
			<input class="checkbox" type="checkbox" checked/>
			Non KYC
		</label>

		<label class="flex items-center gap-4 px-4 py-1">
			<input class="checkbox" type="checkbox" />
			Non KYC
		</label>

		<label class="flex items-center gap-4 px-4 py-1">
			<input class="checkbox" type="checkbox" />
			Non KYC
		</label>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>

<style lang="postcss">
	button {
		@apply flex flex-row justify-start btn-sm min-w-[45px] rounded-md border-2 dark:border-surface-600 border-[#EDF1F7] !text-base md:px-4 h-11 bg-white text-[#6C6C85] dark:text-[#F8F8FF];
	}
	button:active {
		@apply bg-[#EDF1F7];
	}
</style>
