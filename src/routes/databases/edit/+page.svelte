<script lang="ts">	
	import { getProject, saveProject } from '../databases';
    import { IonPage } from "ionic-svelte"
	import { modalController } from '$ionic/svelte'
    import * as allIonicIcons from 'ionicons/icons';
	import { onMount } from "svelte"
	import { isModal } from '$services/utils.service'
	import { currentUser } from "$services/supabase.auth.service";
	import type { Database } from '../../../models/schema';

	export let id: string;
	let modal = false;
	let title = 'Add New Database';
	onMount(async () => {
		modal = await isModal();
		if (id) {
			title = 'Edit Database';
			const { data, error } = await getProject(id);
			if (error) {
				console.error('error', error)
			} 
			if (data) project = data;
			
		}
	})
	let project: Database['public']['Tables']['projects']['Row'] = {
		comments: '',
		connection_string: '',
		id: '',
		sort_key: 0,
		title: '',
		user_id: $currentUser.id,
		updated_at: 'now()',
		created_at: 'now()'
	};
	console.log('*** project', project)
	const closeOverlay = (data?: any, error?: any) => {
		if (modal)
			modalController.dismiss({ data, error });
		else
			window.history.back();
	};
	const save = async () => {
		const { data, error } = await saveProject(project);
		console.log('saveProject returned data, error: ', data, error)
		closeOverlay({data, error});
	}
	
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
		<ion-buttons slot="end">
			<ion-button on:click={save}>
				<ion-icon
					slot="icon-only"
					icon={allIonicIcons.checkmarkOutline}
				/>
			</ion-button>
		</ion-buttons>
	</ion-toolbar>
</ion-header>
<ion-content>
	<div id="selectorDiv" class="ion-padding">
		<ion-item>
			<ion-label position="stacked">Title</ion-label>
			<ion-input
				value={project.title}
				on:ionChange={(e) => {
					project.title = e.detail.value;
				}}
			></ion-input>
		</ion-item>
		<ion-item>
			<ion-label position="stacked">Comments</ion-label>
			<ion-input
				value={project.comments}
				on:ionChange={(e) => {
					project.comments = e.detail.value;
				}}
			></ion-input>
		</ion-item>
		<ion-item>
			<ion-label position="stacked">Connection String</ion-label>
			<ion-input
				value={project.connection_string}
				on:ionChange={(e) => {
					project.connection_string = e.detail.value;
				}}
			></ion-input>
		</ion-item>

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
