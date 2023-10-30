<script lang="ts">
	import DatabaseModal from './edit/+page.svelte'; //'./DatabaseModal.svelte';
    import { IonPage } from "ionic-svelte"
	import * as allIonicIcons from 'ionicons/icons';
    import { openModal } from '$services/utils.service'
    import { getProjects } from './databases';
	import { onMount } from 'svelte'
    let projects: any[] = [];
    const openDatabaseModal = async (id: string) => {
        const { data, error } = await openModal(DatabaseModal, {id}, {})
        console.log('openDatabaseModal data', data)
        console.log('openDatabaseModal error', error)
        projects = await getProjects()
	}
    onMount(async () => {
        projects = await getProjects()
        console.log('projects', projects)
    })


</script>
<IonPage>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button />
            </ion-buttons>
            <ion-title>Databases</ion-title>
			<ion-buttons slot="end">
				<ion-button on:click={() => {openDatabaseModal('')}}>
					<ion-icon slot="icon-only" icon={allIonicIcons.addOutline} />
				</ion-button>
			</ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <h1>
            My Databases
        </h1>
        <ion-list>
            {#each projects as project}
                <ion-item on:click={() => {openDatabaseModal(project.id)}}>
                    <ion-label>{project.title}</ion-label><br/>
                    <ion-text>{project.comments}</ion-text>
                </ion-item>
            {/each}
            {#if projects.length === 0}
                <ion-item>
                    <ion-label>No projects found.  <a on:click={()=>{openDatabaseModal('')}}>Add one now.</a></ion-label>
                </ion-item>
            {/if}
        </ion-list>
    </ion-content>
</IonPage>