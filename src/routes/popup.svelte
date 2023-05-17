<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Avatar } from "@skeletonlabs/skeleton";
	import { clickOutsideAction } from "./clickOutside";
	// import Cross from '$lib/svg/new/cross.svelte';

	const dispatch = createEventDispatcher();

	export let title: string = "SellerName";
	export let country: string = "SellerName";
	export let site: string = "SellerName";
	export let popupProps;
	export let open = false;

	function clickOutsideActionHandler() {
		open = false;
		dispatch("click-outside");
	}
</script>

{#if open}
	<div
		class="card flex flex-col gap-4 bg-white p-4 px-6 min-w-fit w-[500px] shadow-sm text-[#6C6C85]"
		use:clickOutsideAction={clickOutsideActionHandler}
	>
		<div class="card-header flex gap-4 border-b border-[#EDF1F7] pb-4">
			<Avatar
				initials="AB"
				background="bg-white"
				border="border border-[#EDF1F7]"
			/>
			<div class="flex flex-col gap-2">
				<div class="text-lg font-bold">Fastest Funds to Most Banks</div>
				<div class="">
					<span class="text-[#FB5858]">Offline</span>
					<span class="text-[#6C6C85]">(Last seen: 14:32 02.05.2023)</span>
				</div>
			</div>
		</div>

		<table class="text-base">
			<thead>
				<tr>
					<th />
					<th />
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>ID: Q4D86nMUdcR</td>
					<td>Username: TIANYU111</td>
				</tr>

				<tr>
					<td>Completed trades: 439</td>
					<td>Country: Sweed</td>
				</tr>

				<tr>
					<td>
						<div class="flex gap-2">
							<span>Feedback:</span>
							<div
								class="bg-[#0FBA81] bg-opacity-10 text-[#0FBA81] px-4 rounded-full"
							>
								439
							</div>
							<div
								class="bg-[#FB5858] bg-opacity-10 text-[#FB5858] px-4 rounded-full"
							>
								0
							</div>
						</div>
					</td>
					<td>Date joined: 02.05.2023</td>
				</tr>

				<tr>
					<td>Date Joined: 3 weeks</td>
					<td>Language: English</td>
				</tr>
				<tr>
					<td>Max Trade size: 41</td>
					<td>Verified: Yes</td>
				</tr>
				<tr>
					<td>Max Trade size: 10</td>
					<td>Trading type: Buy & Sell</td>
				</tr>
			</tbody>
		</table>

		<div class="card-footer flex flex-col items-center gap-5">
			<div class="flex gap-2">
				<button class="btn-icon btn-icon-sm variant-filled">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
					>
						<g fill="none" fill-rule="evenodd">
							<path
								d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
							/>
							<path
								fill="currentColor"
								d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2ZM9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.696.696 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.711.711 0 0 0-.973.158l-.6.915a.229.229 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055c-.426-.426-.798-.992-1.007-1.373a.227.227 0 0 1 .067-.291l.924-.686a.712.712 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.695.695 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636Z"
							/></g
						>
					</svg>
				</button>

				<button class="btn-icon btn-icon-sm variant-filled">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
					>
						<g fill="none" fill-rule="evenodd">
							<path
								d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
							/>
							<path
								fill="currentColor"
								d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.303 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746l17.1-7.2Z"
							/>
						</g>
					</svg>
				</button>
			</div>

			<div class="text-gray-400">
				Information gathered from: <a class="underline" href="#"
					>localcoinswap</a
				>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	td {
		@apply py-2;
	}
</style>
