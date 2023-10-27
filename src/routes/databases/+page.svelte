<script lang="ts">
	import DatabaseModal from './edit/+page.svelte'; //'./DatabaseModal.svelte';
    import { IonPage } from "ionic-svelte"
	import * as allIonicIcons from 'ionicons/icons';
    import { modalController } from '$ionic/svelte'
    import { openModal } from '$services/utils.service'

    const addDatabase = () => {
        console.log('addDatabase')
        openDatabaseModal()
    }


    const openDatabaseModal = async () => {
        const { data } = await openModal(DatabaseModal, {title: 'Edit the Database'}, {})
        console.log('data', data)
	}


</script>
<IonPage>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button />
            </ion-buttons>
            <ion-title>Databases</ion-title>
			<ion-buttons slot="end">
				<ion-button on:click={addDatabase}>
					<ion-icon slot="icon-only" icon={allIonicIcons.addOutline} />
				</ion-button>
			</ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <h1>
            My Databases
        </h1>
    </ion-content>
</IonPage>