<script lang="ts">	
	import { getProject, saveProject, removeProject } from '../databases';
    import { IonPage } from "ionic-svelte"
	import { modalController } from '$ionic/svelte'
    import * as allIonicIcons from 'ionicons/icons';
	import { onMount } from "svelte"
	import { isModal } from '$services/utils.service'
	import { currentUser } from "$services/supabase.auth.service";
	import type { Database } from '../../../models/schema';
	import { showConfirm } from '$services/alert.service';

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
	const remove = async () => {
		showConfirm({
			header: 'Delete Database',
			message: 'Are you sure you want to delete this database?',
			okHandler: async () => {
				const { data, error } = await removeProject(project.id);
				console.log('removeProject returned data, error: ', data, error)
				closeOverlay({data, error});
			}
		})
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
					if (e.detail.value) project.title = e.detail.value;
				}}
			></ion-input>
		</ion-item>
		<ion-item>
			<ion-label position="stacked">Comments</ion-label>
			<ion-input
				value={project.comments}
				on:ionChange={(e) => {
					if (e.detail.value) project.comments = e.detail.value;
				}}
			></ion-input>
		</ion-item>
		<ion-item>
			<ion-label position="stacked">Connection String</ion-label>
			<ion-input
				value={project.connection_string}
				on:ionChange={(e) => {
					if (e.detail.value) project.connection_string = e.detail.value;
				}}
			></ion-input>
		</ion-item>

	</div>
</ion-content>
<ion-footer translucent={true}>
	{#if project.id !== ''}
		<div class="ion-padding">
			<ion-button expand="block" fill="outline" color="danger" on:click={remove}>
			Delete
			</ion-button>
		</div>
	{/if}
</ion-footer>
</IonPage>
<style>
</style>
