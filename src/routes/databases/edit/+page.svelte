<script lang="ts">	
    import { IonPage } from "ionic-svelte"
	import { modalController } from '$ionic/svelte'
    import * as allIonicIcons from 'ionicons/icons';
	import { onMount } from 'svelte'
	import { resizeModal } from '$services/utils.service'
	export let title: string = 'Add Database';
	const closeOverlay = () => {
		if (modal)
			modalController.dismiss({ data: new Date() });
		else
			window.history.back();
	};

	let modal = false;
	modalController.getTop().then((modalElement) => {
		if (modalElement) {
			console.log('*** WE ARE MODAL ***')
			modal = true;
		}
	})

	onMount(() => {
	});

</script>
<IonPage>
<ion-header translucent={true}>
	<ion-toolbar id="selectorToolbar">
		<ion-title>{title}</ion-title>
		<ion-buttons slot="start">
			<ion-button on:click={closeOverlay}>
				<ion-icon
					slot="icon-only"
					icon={modal ? allIonicIcons.closeOutline : allIonicIcons.arrowBackOutline}
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
</IonPage>
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
