<script lang="ts">
    import { IonPage } from "ionic-svelte"
	import * as allIonicIcons from 'ionicons/icons';
    const addDatabase = () => {
        console.log('addDatabase')
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