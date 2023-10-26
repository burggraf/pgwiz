<script lang="ts">	
	import { modalController } from '$ionic/svelte'
    import * as allIonicIcons from 'ionicons/icons';
	import { onMount } from 'svelte'
	const closeOverlay = () => {
		modalController.dismiss({ data: Date.now() });
	};

	onMount(() => {
		setTimeout(() => {
			const thing =
				document.getElementById('selectorDiv')?.parentElement?.parentElement?.parentElement ||
				({} as any);
			const toolbar = document.getElementById('selectorToolbar') || ({} as any);
			const h = thing?.clientHeight - toolbar?.clientHeight + 'px';
			const obj1 = document.getElementById('selectorDiv')?.parentElement?.parentElement?.style;
			const obj2 = document.getElementById('selectorDiv')?.parentElement?.style;
			const obj3 = document.getElementById('selectorDiv')?.style;
			if (obj1) obj1.height = h;
			if (obj2) obj2.height = h;
			if (obj3) obj3.height = h;
		}, 200);
	});

</script>

<ion-header translucent={true}>
	<ion-toolbar id="selectorToolbar">
		<ion-title>Add/Edit Database</ion-title>
		<ion-buttons slot="start">
			<ion-button on:click={closeOverlay}>
				<ion-icon
					slot="icon-only"
					icon={allIonicIcons.closeOutline}
				/>
			</ion-button>
		</ion-buttons>
	</ion-toolbar>
</ion-header>
<ion-content>
	<div id="selectorDiv" style="overflow-y: scroll;" class="ion-padding">
        stuff goes here
	</div>
</ion-content>

<style>
	.LoginGrid {
		max-width: 375px;
	}
	.ProvidersGrid {
		max-width: 375px;
	}
	input:-webkit-autofill {
		-webkit-text-fill-color: var(--ion-color-FORCEDARK);
		font-weight: 500px;
	}

	input:-webkit-autofill:focus {
		-webkit-text-fill-color: var(--ion-color-FORCEDARK);
		font-weight: 500px;
	}

	.inputIcon {
		margin-left: 10px;
		margin-right: 10px;
	}

	.loginItem {
		--padding-start: 0px;
		--padding-end: 0px;
		--inner-padding-end: 0px;
	}
	.loginInputBoxWithIcon {
		height: 50px;
		border: 1px solid rgb(212, 212, 212);
		background-color: var(--ion-background-color) !important;
		border-radius: 5px;
	}
	.toast {
		font-weight: bold;
	}
	.flex-container {
		display: flex;
		display: -webkit-flex;
		display: -moz-flex;
		flex-flow: row wrap;
		-webkit-flex-flow: row wrap;
		-moz-flex-flow: row wrap;
		justify-content: center;
	}
</style>
